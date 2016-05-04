/******************************************************************************
Name:    Highslide JS
Version: 3.3.12 (Feb 29 2008)
Config:  default -captions -outlines -overlays -navigation -dragging -preloading -autosize -multiple -hideelements +events +iframe
Author:  Torstein Hønsi
Support: http://vikjavev.no/highslide/forum

Licence:
Highslide JS is licensed under a Creative Commons Attribution-NonCommercial 2.5
License (http://creativecommons.org/licenses/by-nc/2.5/).

You are free:
	* to copy, distribute, display, and perform the work
	* to make derivative works

Under the following conditions:
	* Attribution. You must attribute the work in the manner  specified by  the
	  author or licensor.
	* Noncommercial. You may not use this work for commercial purposes.

* For  any  reuse  or  distribution, you  must make clear to others the license
  terms of this work.
* Any  of  these  conditions  can  be  waived  if  you  get permission from the 
  copyright holder.

Your fair use and other rights are in no way affected by the above.
******************************************************************************/

var hs = {

// Apply your own settings here, or override them in the html file.  
graphicsDir : 'highslide/graphics/',
restoreCursor : 'zoomout.cur', // necessary for preload
expandSteps : 10, // number of steps in zoom. Each step lasts for duration/step milliseconds.
expandDuration : 250, // milliseconds
restoreSteps : 10,
restoreDuration : 250,
marginLeft : 15,
marginRight : 15,
marginTop : 15,
marginBottom : 15,
zIndexCounter : 1001, // adjust to other absolutely positioned elements

restoreTitle : 'Click to close image',
loadingText : 'Loading...',
loadingTitle : 'Click to cancel',
loadingOpacity : 0.75,


// HTML extension

previousText : 'Previous',
nextText : 'Next', 
moveText : 'Move',
closeText : 'Close', 
closeTitle : 'Click to close', 
resizeTitle : 'Resize',
allowWidthReduction : false,
allowHeightReduction : true,
preserveContent : true, // Preserve changes made to the content and position of HTML popups.
objectLoadTime : 'before', // Load iframes 'before' or 'after' expansion.

// These settings can also be overridden inline for each image
slideshowGroup : null, // defines groups for next/previous links and keystrokes
minWidth: 200,
minHeight: 200,
wrapperClassName : 'highslide-wrapper', // for enhanced css-control

// END OF YOUR SETTINGS


// declare internal properties
expanders : [],
overrides : [
	
	'contentId',
	'width',
	'height',
	'allowWidthReduction',
	'allowHeightReduction',
	'preserveContent',
	'objectType',	
	'objectWidth',
	'objectHeight',
	'objectLoadTime',
	'wrapperClassName',
	'minWidth',
	'minHeight',
	'slideshowGroup',
	'easing',
	'easingClose',
	'fadeInOut'
],
sleeping : [],
clones : {},
ie : (document.all && !window.opera),
safari : /Safari/.test(navigator.userAgent),
geckoMac : /Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),

$ : function (id) {
	return document.getElementById(id);
},

push : function (arr, val) {
	arr[arr.length] = val;
},

createElement : function (tag, attribs, styles, parent, nopad) {
	var el = document.createElement(tag);
	if (attribs) hs.setAttribs(el, attribs);
	if (nopad) hs.setStyles(el, {padding: 0, border: 'none', margin: 0});
	if (styles) hs.setStyles(el, styles);
	if (parent) parent.appendChild(el);	
	return el;
},

setAttribs : function (el, attribs) {
	for (var x in attribs) el[x] = attribs[x];
},

setStyles : function (el, styles) {
	for (var x in styles) {
		try { 
			if (hs.ie && x == 'opacity') {
				if (styles[x] > 0.99) el.style.removeAttribute('filter');
				else el.style.filter = 'alpha(opacity='+ (styles[x] * 100) +')';
			}
			else el.style[x] = styles[x]; 
		}
		catch (e) {}
	}
},

ieVersion : function () {
	var arr = navigator.appVersion.split("MSIE");
	return arr[1] ? parseFloat(arr[1]) : null;
},

getPageSize : function () {
	var iebody = document.compatMode && document.compatMode != "BackCompat" 
		? document.documentElement : document.body;
	
	var width = hs.ie ? iebody.clientWidth : 
			(document.documentElement.clientWidth || self.innerWidth),
		height = hs.ie ? iebody.clientHeight : self.innerHeight;
	
	return {
		width: width,
		height: height,		
		scrollLeft: hs.ie ? iebody.scrollLeft : pageXOffset,
		scrollTop: hs.ie ? iebody.scrollTop : pageYOffset
	}
},

position : function(el)	{ 
	var p = { x: el.offsetLeft, y: el.offsetTop };
	while (el.offsetParent)	{
		el = el.offsetParent;
		p.x += el.offsetLeft;
		p.y += el.offsetTop;
		if (el != document.body && el != document.documentElement) {
			p.x -= el.scrollLeft;
			p.y -= el.scrollTop;
		}
	}
	return p;
},

expand : function(a, params, custom) {
	if (a.getParams) return params;
	
	try {
		new hs.Expander(a, params, custom);
		return false;		
	} catch (e) { return true; }
},

htmlExpand : function(a, params, custom) {
	if (a.getParams) return params;
	
	for (var i = 0; i < hs.sleeping.length; i++) {
		if (hs.sleeping[i] && hs.sleeping[i].a == a) {
			hs.sleeping[i].awake();
			hs.sleeping[i] = null;
			return false;
		}
	}
	try {
		hs.hasHtmlexpanders = true;
		new hs.Expander(a, params, custom, 'html');
		return false;
	} catch (e) {
		return true;
	}	
},

getElementByClass : function (el, tagName, className) {
	var els = el.getElementsByTagName(tagName);
	for (var i = 0; i < els.length; i++) {
    	if (els[i].className == className) {
			return els[i];
		}
	}
	return null;
},

getSelfRendered : function() {
	var s =	
		 '<div class="highslide-header"><ul>'
		+	'<li class="highslide-previous"><a onclick="return hs.previous(this)" href="#">'+ hs.previousText +'</a></li>'
		+	'<li class="highslide-next"><a onclick="return hs.next(this)" href="#">'+ hs.nextText +'</a></li>'
		+	'<li class="highslide-move"><a href="#" onclick="return false">'+ hs.moveText +'</a></li>'
		+	'<li class="highslide-close"><a onclick="return hs.close(this)" title="'+ hs.closeTitle +'" href="#">'
			+ hs.closeText +'</a></li>'
		+'</ul></div>'
		+'<div class="highslide-body"></div>'
		+'<div class="highslide-footer"><div>'
		+	'<span class="highslide-resize" title="'+ hs.resizeTitle +'"><span></span></span>'
		+'</div></div>';
	return hs.createElement('div', { className: 'highslide-html-content', innerHTML: s } );
},


getParam : function (a, param) {
	a.getParams = a.onclick;
	var p = a.getParams ? a.getParams() : null;
	a.getParams = null;
	
	return (p && typeof p[param] != 'undefined') ? p[param] : 
		(typeof hs[param] != 'undefined' ? hs[param] : null);
},

getSrc : function (a) {
	var src = hs.getParam(a, 'src');
	if (src) return src;
	return a.href;
},

getNode : function (id) {
	var node = hs.$(id), clone = hs.clones[id], a = {};
	if (!node && !clone) return null;
	if (!clone) {
		clone = node.cloneNode(true);
		clone.id = '';
		hs.clones[id] = clone;
		return node;
	} else {
		return clone.cloneNode(true);
	}
},

purge : function(d) {
	var a = d.attributes, i, l, n;
	if (a) {
		l = a.length;
		for (var i = 0; i < l; i += 1) {
			n = a[i].name;
			if (typeof d[n] === 'function') {
				d[n] = null;
			}
		}
	}
	a = d.childNodes;
	if (a) {
		l = a.length;
		for (var i = 0; i < l; i += 1) hs.purge(d.childNodes[i]);
	}
},
discardElement : function(d) {
	if (hs.ie) hs.purge(d);
	hs.garbageBin.appendChild(d);
	hs.garbageBin.innerHTML = '';
},


getWrapperKey : function (element) {
	var el, re = /^highslide-wrapper-([0-9]+)$/;
	// 1. look in open expanders
	el = element;
	while (el.parentNode)	{
		if (el.id && re.test(el.id)) return el.id.replace(re, "$1");
		el = el.parentNode;
	}
	// 2. look in thumbnail
	el = element;
	while (el.parentNode)	{
		if (el.tagName && hs.isHsAnchor(el)) {
			for (var key = 0; key < hs.expanders.length; key++) {
				var exp = hs.expanders[key];
				if (exp && exp.a == el) return key;
			}
		}
		el = el.parentNode;
	}
	return null; 
},

getExpander : function (el) {
	if (typeof el == 'undefined') return hs.expanders[hs.focusKey] || null;
	if (typeof el == 'number') return hs.expanders[el] || null;
	if (typeof el == 'string') el = hs.$(el);
	return hs.expanders[hs.getWrapperKey(el)] || null;
},

isHsAnchor : function (a) {
	return (a.onclick && a.onclick.toString().replace(/\s/g, ' ').match(/hs.(htmlE|e)xpand/));
},
fireEvent : function (obj, evt, args) {
	return obj && obj[evt] ? (obj[evt](obj, args) !== false) : true;
},

wrapperMouseHandler : function (e) {
	if (!e) e = window.event;
	var over = /mouseover/i.test(e.type); 
	if (!e.target) e.target = e.srcElement; // ie
	if (hs.ie) e.relatedTarget = 
		over ? e.fromElement : e.toElement; // ie
	var exp = hs.getExpander(e.target);
	if (!exp || hs.getExpander(e.relatedTarget) == exp || hs.dragArgs) return;
	if (exp.isExpanded) hs.fireEvent(exp, over ? 'onMouseOver' : 'onMouseOut', e);
},

addEventListener : function (el, event, func) {
	try {
		el.addEventListener(event, func, false);
	} catch (e) {
		try {
			el.detachEvent('on'+ event, func);
			el.attachEvent('on'+ event, func);
		} catch (e) {
			el['on'+ event] = func;
		}
	} 
},

removeEventListener : function (el, event, func) {
	try {
		el.removeEventListener(event, func, false);
	} catch (e) {
		try {
			el.detachEvent('on'+ event, func);
		} catch (e) {
			el['on'+ event] = null;
		}
	}
},


genContainer : function () {
	if (!hs.container) {
		hs.container = hs.createElement('div', 
			null, 
			{ position: 'absolute', left: 0, top: 0, width: '100%', zIndex: hs.zIndexCounter }, 
			document.body,
			true
		);
		hs.loading = hs.createElement('a',
			{
				className: 'highslide-loading',
				title: hs.loadingTitle,
				innerHTML: hs.loadingText,
				href: 'javascript:void(0)'
			},
			{
				position: 'absolute',
				opacity: hs.loadingOpacity,
				left: '-9999px',
				zIndex: 1
			}, hs.container
		);
		hs.garbageBin = hs.createElement('div', null, { display: 'none' }, hs.container);
		hs.clearing = hs.createElement('div', null, 
			{ clear: 'both', paddingTop: '1px' }, null, true);
		
		// http://www.robertpenner.com/easing/ 
		Math.linearTween = function (t, b, c, d) {
			return c*t/d + b;
		};
		Math.easeInQuad = function (t, b, c, d) {
			return c*(t/=d)*t + b;
		};
		hs.ie6SSL = (hs.ie && hs.ieVersion() <= 6 && location.protocol == 'https:');
		hs.fireEvent(this, 'onActivate');
	}
},

close : function(el) {
	try { hs.getExpander(el).close(); } catch (e) {}
	return false;
}
}; // end hs object


//-----------------------------------------------------------------------------
// The expander object
hs.Expander = function(a, params, custom, contentType) {
	this.a = a;
	this.custom = custom;
	this.contentType = contentType || 'image';
	this.isHtml = (contentType == 'html');
	this.isImage = !this.isHtml;
	hs.genContainer();
	var key = this.key = hs.expanders.length;
	
	// override inline parameters
	for (var i = 0; i < hs.overrides.length; i++) {
		var name = hs.overrides[i];
		this[name] = params && typeof params[name] != 'undefined' ?
			params[name] : hs[name];
	}
	
	// get thumb
	var el = this.thumb = ((params && params.thumbnailId) ? hs.$(params.thumbnailId) : null) 
		|| a.getElementsByTagName('img')[0] || a;
	this.thumbsUserSetId = el.id || a.id;
	if (!hs.fireEvent(this, 'onInit')) return true;
	
	// check if already open
	for (var i = 0; i < hs.expanders.length; i++) {
		if (hs.expanders[i] && hs.expanders[i].a == a) {
			hs.expanders[i].focus();
			return false;
		}		
	}	
	// cancel other
	for (var i = 0; i < hs.expanders.length; i++) {
		if (hs.expanders[i] && hs.expanders[i].thumb != el && !hs.expanders[i].onLoadStarted) {
			hs.expanders[i].cancelLoading();
		}
	}
	hs.expanders[this.key] = this;
		if (hs.expanders[key-1]) hs.expanders[key-1].close();
		if (typeof hs.focusKey != 'undefined' && hs.expanders[hs.focusKey])
			hs.expanders[hs.focusKey].close();

	var pos = hs.position(el);
	
	// store properties of thumbnail
	this.thumbWidth = el.width ? el.width : el.offsetWidth;		
	this.thumbHeight = el.height ? el.height : el.offsetHeight;
	this.thumbLeft = pos.x;
	this.thumbTop = pos.y;
	this.thumbOffsetBorderW = (this.thumb.offsetWidth - this.thumbWidth) / 2;
	this.thumbOffsetBorderH = (this.thumb.offsetHeight - this.thumbHeight) / 2;
	
	// instanciate the wrapper
	this.wrapper = hs.createElement(
		'div',
		{
			id: 'highslide-wrapper-'+ this.key,
			className: this.wrapperClassName
		},
		{
			visibility: 'hidden',
			position: 'absolute',
			zIndex: hs.zIndexCounter++
		}, null, true );
	
	this.wrapper.onmouseover = this.wrapper.onmouseout = hs.wrapperMouseHandler;
		this[this.contentType +'Create']();
	return true;
};

hs.Expander.prototype = {

displayLoading : function() {
	if (this.onLoadStarted || this.loading) return;
		
	this.originalCursor = this.a.style.cursor;
	this.a.style.cursor = 'wait';
	
	this.loading = hs.loading;
	var exp = this;
	this.loading.onclick = function() {
		exp.cancelLoading();
	};
	
	
	if (!hs.fireEvent(this, 'onShowLoading')) return;
	this.loading.style.top = (this.thumbTop 
		+ (this.thumbHeight - this.loading.offsetHeight) / 2) +'px';
	var exp = this, left = (this.thumbLeft + this.thumbOffsetBorderW 
		+ (this.thumbWidth - this.loading.offsetWidth) / 2) +'px';
	setTimeout(function () { if (exp.loading) exp.loading.style.left = left }, 100); 
},

imageCreate : function() {
	var exp = this;
	
	var img = document.createElement('img');
    this.content = img;
    img.onload = function () {
    	if (hs.expanders[exp.key]) exp.contentLoaded(); 
	};
    img.onclick = function () { try {
		if (hs.fireEvent(exp, 'onImageClick')) 
    	exp.close();
    } catch (e) {} };
    if (hs.blockRightClick) img.oncontextmenu = function() { return false; };
    img.className = 'highslide-image';
    img.style.visibility = 'hidden'; // prevent flickering in IE
    img.style.display = 'block';
	img.style.position = 'absolute';
	img.style.maxWidth = 'none';
    img.style.zIndex = 3;
    img.title = hs.restoreTitle;
    if (hs.safari) hs.container.appendChild(img);
    if (hs.ie && hs.flushImgSize) img.src = null;
	img.src = hs.getSrc(this.a);
	
	this.displayLoading();
},

htmlCreate : function () {
	if (!hs.fireEvent(this, 'onBeforeGetContent')) return;
	this.tempContainer = hs.createElement('div', { className: this.wrapperClassName },
		{
			padding: '0 '+ hs.marginRight +'px 0 '+ hs.marginLeft +'px',
			visibility: 'hidden'
		}, hs.container
	); 
		this.content = hs.getNode(this.contentId);
	if (!this.content) 
		this.content = hs.getSelfRendered();
	
	hs.fireEvent(this, 'onAfterGetContent');
	this.innerContent = this.content;
	
	if (this.swfObject || this.objectType == 'iframe') this.setObjContainerSize(this.innerContent);
	this.tempContainer.appendChild(this.innerContent); // to get full width
	hs.setStyles (this.innerContent, { position: 'relative', visibility: 'hidden' });
	this.innerContent.className += ' highslide-display-block';
	if (this.width) this.innerContent.style.width = this.width+'px';
	if (this.height) this.innerContent.style.height = this.height+'px';
	if (this.innerContent.offsetWidth < this.minWidth)
		this.innerContent.style.width = this.minWidth +'px';
	
	this.content = hs.createElement(
    	'div',
    	{	className: 'highslide-html' },
		{
			position: 'relative',
			zIndex: 3,
			overflow: 'hidden',
			width: this.thumbWidth +'px',
			height: this.thumbHeight +'px'
		}
	);
    
    if (this.objectType == 'iframe' && this.objectLoadTime == 'before') {
		this.writeExtendedContent();
	}
    else
    	this.contentLoaded();
},

contentLoaded : function() {
	try {	
		if (!this.content) return;
		this.content.onload = null;
		if (this.onLoadStarted) return;
		else this.onLoadStarted = true;
		
			   
		if (this.loading) {
			this.loading.style.left = '-9999px';
			this.loading = null;
			this.a.style.cursor = this.originalCursor || '';
			hs.fireEvent(this, 'onHideLoading');
		}
		this.marginBottom = hs.marginBottom;
		if (this.isImage) {	
			this.newWidth = this.content.width;
			this.newHeight = this.content.height;
			this.fullExpandWidth = this.newWidth;
			this.fullExpandHeight = this.newHeight;
			
			this.content.style.width = this.thumbWidth +'px';
			this.content.style.height = this.thumbHeight +'px';
		} else if (this.htmlGetSize) this.htmlGetSize();	
		
		
		this.wrapper.appendChild(this.content);
		this.content.style.position = 'relative'; // Saf
		this.wrapper.style.left = this.thumbLeft +'px';
		this.wrapper.style.top = this.thumbTop +'px';
		hs.container.appendChild(this.wrapper);
		
		// correct for borders
		this.offsetBorderW = (this.content.offsetWidth - this.thumbWidth) / 2;
		this.offsetBorderH = (this.content.offsetHeight - this.thumbHeight) / 2;
		var modMarginRight = hs.marginRight + 2 * this.offsetBorderW;
		this.marginBottom += 2 * this.offsetBorderH;
		
		var ratio = this.newWidth / this.newHeight;
		var minWidth = this.newWidth;
		var minHeight = this.newHeight;
		
		var justify = { x: 'auto', y: 'auto' };
		
		var page = hs.getPageSize();
		// justify
		this.x = { 
			min: parseInt(this.thumbLeft) - this.offsetBorderW + this.thumbOffsetBorderW,
			span: this.newWidth,
			minSpan: (this.newWidth < minWidth ) 
				? this.newWidth : minWidth,
			marginMin: hs.marginLeft, 
			marginMax: modMarginRight,
			scroll: page.scrollLeft,
			clientSpan: page.width,
			thumbSpan: this.thumbWidth
		};
		var oldRight = this.x.min + parseInt(this.thumbWidth);
		this.x = this.justify(this.x);
		this.y = { 
			min: parseInt(this.thumbTop) - this.offsetBorderH + this.thumbOffsetBorderH,
			span: this.newHeight,
			minSpan: this.newHeight < minHeight ? this.newHeight : minHeight,
			marginMin: hs.marginTop, 
			marginMax: this.marginBottom, 
			scroll: page.scrollTop,
			clientSpan: page.height,
			thumbSpan: this.thumbHeight
		};
		var oldBottom = this.y.min + parseInt(this.thumbHeight);
		this.y = this.justify(this.y);
		if (this.isHtml) this.htmlSizeOperations();
		

		var x = this.x;
		var y = this.y;
		
		this.show();
	} catch (e) {
		window.location.href = hs.getSrc(this.a);
	}
},


setObjContainerSize : function(parent, auto) {
	var c = hs.getElementByClass(parent, 'DIV', 'highslide-body');
	
	if (this.objectType == 'iframe') {
		if (this.objectWidth) c.style.width = this.objectWidth +'px';
		if (this.objectHeight) c.style.height = this.objectHeight +'px';
	}
},

writeExtendedContent : function () {
	if (this.hasExtendedContent) return;
	var exp = this;
	this.body = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
	if (this.objectType == 'iframe') {
		this.displayLoading();
		this.ruler = hs.clearing.cloneNode(1);
		this.body.appendChild(this.ruler);
		this.newWidth = this.innerContent.offsetWidth;
		if (!this.objectWidth) this.objectWidth = this.ruler.offsetWidth;
		var hDiff = this.innerContent.offsetHeight - this.body.offsetHeight;
		var h = this.objectHeight || (hs.getPageSize()).height - hDiff - hs.marginTop - hs.marginBottom;
		var src = hs.ie6SSL ? ' src="blank.htm" ' : '';
		var tag = hs.ie ? '<iframe name="hsIframe'+ this.key +'" '+ src +'/>' : 'iframe';
		this.iframe = hs.createElement(tag, 
			{ name: 'hsIframe'+ this.key, frameBorder: 0, allowTransparency: true, key: this.key },
			{ width: this.objectWidth +'px', height: h +'px' }, 
			this.body);
		if (this.objectLoadTime == 'before')
			this.contentLoaded();
			/*hs.addEventListener(this.iframe, 'load', function() {
				if (hs.expanders[exp.key]) hs.expanders[exp.key].contentLoaded();
			});*/
		if (hs.safari) this.iframe.src = null;
		this.iframe.src = hs.getSrc(this.a);
		
		if (this.objectLoadTime == 'after') this.correctIframeSize();
		
	} else if (this.swfObject) {	
		this.body.id = this.body.id || 'hs-flash-id-' + this.key;
		this.swfObject.write(this.body.id);	
	}
	this.hasExtendedContent = true;
},
htmlGetSize : function() {
	if (this.iframe && !this.objectHeight) { // loadtime before
			this.iframe.style.height = '300px';
	}
	this.innerContent.appendChild(hs.clearing);
	if (!this.newWidth) this.newWidth = this.innerContent.offsetWidth;
    this.newHeight = this.innerContent.offsetHeight;
    this.innerContent.removeChild(hs.clearing);
    if (hs.ie && this.newHeight > parseInt(this.innerContent.currentStyle.height)) { // ie css bug
		this.newHeight = parseInt(this.innerContent.currentStyle.height);
	}
},

correctIframeSize : function () {
	var wDiff = this.innerContent.offsetWidth - this.ruler.offsetWidth;
	if (wDiff < 0) wDiff = 0;
	
	var hDiff = this.innerContent.offsetHeight - this.body.offsetHeight;
	
    hs.setStyles(this.iframe, { width: (this.x.span - wDiff) +'px', 
		height: (this.y.span - hDiff) +'px' });
    hs.setStyles(this.body, { width: this.iframe.style.width, 
    	height: this.iframe.style.height });
    	
    this.scrollingContent = this.iframe;
    this.scrollerDiv = this.scrollingContent;
},
htmlSizeOperations : function () {
	
	this.setObjContainerSize(this.innerContent);
	
	
	
    // handle minimum size
    if (this.x.span < this.newWidth && !this.allowWidthReduction) this.x.span = this.newWidth;
    if (this.y.span < this.newHeight && !this.allowHeightReduction) this.y.span = this.newHeight;
    this.scrollerDiv = this.innerContent;
    this.mediumContent = hs.createElement('div', null, 
    	{ 
    		width: this.x.span +'px',
    		position: 'relative',
    		left: (this.x.min - this.thumbLeft) +'px',
    		top: (this.y.min - this.thumbTop) +'px'
    	}, this.content, true);
	
    this.mediumContent.appendChild(this.innerContent);
    hs.container.removeChild(this.tempContainer);
    hs.setStyles(this.innerContent, { border: 'none', width: 'auto', height: 'auto' });
    
    var node = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
    if (node && !this.swfObject && this.objectType != 'iframe') {    
    	var cNode = node; // wrap to get true size
    	node = hs.createElement(cNode.nodeName, null, {overflow: 'hidden'}, null, true);
    	cNode.parentNode.insertBefore(node, cNode);
    	node.appendChild(hs.clearing); // IE6
    	node.appendChild(cNode);
    	
    	var wDiff = this.innerContent.offsetWidth - node.offsetWidth;
    	var hDiff = this.innerContent.offsetHeight - node.offsetHeight;
    	node.removeChild(hs.clearing);
    	
    	var kdeBugCorr = hs.safari || navigator.vendor == 'KDE' ? 1 : 0; // KDE repainting bug
    	hs.setStyles(node, { 
    			width: (this.x.span - wDiff - kdeBugCorr) +'px', 
    			height: (this.y.span - hDiff) +'px',
    			overflow: 'auto', 
    			position: 'relative' 
    		} 
    	);
		if (kdeBugCorr && cNode.offsetHeight > node.offsetHeight)	{
    		node.style.width = (parseInt(node.style.width) + kdeBugCorr) + 'px';
		}
    	this.scrollingContent = node;
    	this.scrollerDiv = this.scrollingContent;
    	
	}
	/*
    if (this.iframe && this.objectLoadTime == 'before') this.correctIframeSize();
    if (!this.scrollingContent && this.y.span < this.mediumContent.offsetHeight) this.scrollerDiv = this.content;
	
	if (this.scrollerDiv == this.content && !this.allowWidthReduction && this.objectType != 'iframe') {
		this.x.span += 17; // room for scrollbars
	}
	if (this.scrollerDiv && this.scrollerDiv.offsetHeight > this.scrollerDiv.parentNode.offsetHeight) {
		setTimeout("try { hs.expanders["+ this.key +"].scrollerDiv.style.overflow = 'auto'; } catch(e) {}",
			 hs.expandDuration);
	}
	*/
},

justify : function (p) {
	
	var tgt, dim = p == this.x ? 'x' : 'y';
	
	
		var hasMovedMin = false;
		
		// calculate p.min
		p.min = Math.round(p.min - ((p.span - p.thumbSpan) / 2)); // auto
		
		if (p.min < p.scroll + p.marginMin) {
			p.min = p.scroll + p.marginMin;
			hasMovedMin = true;		
		}
	
		
		// calculate right/newWidth
		if (p.min + p.span > p.scroll + p.clientSpan - p.marginMax) {
			if (hasMovedMin) {
				
			} else if (p.span < p.clientSpan - p.marginMin - p.marginMax) { // move newTop up
				p.min = p.scroll + p.clientSpan - p.span - p.marginMin - p.marginMax;
			} else { // image larger than client
				p.min = p.scroll + p.marginMin;
				
			}
			
		}
		
	
		
	if (p.min < p.marginMin) {
		tmpMin = p.min;
		p.min = p.marginMin; 
		
	}
	return p;
},

show : function () {
	
	
	hs.fireEvent(this, 'onBeforeExpand');
	
	// Apply size change		
	this.changeSize(
		1,
		{ 
			x: this.thumbLeft + this.thumbOffsetBorderW - this.offsetBorderW,
			y: this.thumbTop + this.thumbOffsetBorderH - this.offsetBorderH,
			w: this.thumbWidth,
			h: this.thumbHeight,
			imgW: this.thumbWidth
		},
		{
			x: this.x.min,
			y: this.y.min,
			w: this.x.span,
			h: this.y.span,
			imgW: this.x.imgSpan
		},
		hs.expandDuration,
		hs.expandSteps
	);
},

changeSize : function(up, from, to, dur, steps) {
		
	if (this.fadeInOut) {
		from.op = up ? 0 : 1;
		to.op = up;
	}
	var t,
	exp = this,
	easing = Math[this.easing] || Math.easeInQuad;
	if (!up) easing = Math[this.easingClose] || easing;
	
	for (var i = 1; i <= steps; i++) {
		t = Math.round(i * (dur / steps));
		
		(function(){
			var pI = i, size = {};
			
			for (var x in from) 
				size[x] = easing(t, from[x], to[x] - from[x], dur);
						
			setTimeout ( function() {
				if (up && pI == 1) {
					exp.content.style.visibility = 'visible';
					exp.a.className += ' highslide-active-anchor';
				}
				exp.setSize(size);
			}, t);				
		})();		
	}
	
	if (up) {
		setTimeout(function() {
			exp.afterExpand();
		}, t + 50);
	}
	else setTimeout(function() { exp.afterClose(); }, t);
		
},

setSize : function (to) {
	try {
		if (this.isHtml) {
			hs.setStyles(this.content, { width: to.w +'px', height: to.h +'px' });
			hs.setStyles(this.mediumContent, { left: (this.x.min - to.x) +'px', 
				top: (this.y.min - to.y) +'px' });
			this.innerContent.style.visibility = 'visible';
		} else {
			this.wrapper.style.width = (to.w + 2*this.offsetBorderW) +'px';
			this.content.style.width =
				((to.imgW && !isNaN(to.imgW)) ? to.imgW : to.w) +'px';
			if (hs.safari) this.content.style.maxWidth = this.content.style.width;
			this.content.style.height = to.h +'px';
		}
		
		if (to.op) hs.setStyles(this.wrapper, { opacity: to.op });
				
				
		hs.setStyles ( this.wrapper,
			{
				'visibility': 'visible',
				'left': to.x +'px',
				'top': to.y +'px'
			}
		);
		
	} catch (e) { window.location.href = hs.getSrc(this.a);	}
},

afterExpand : function() {
	this.isExpanded = true;	
	this.focus();
	
	if (this.isHtml && this.objectLoadTime == 'after') this.writeExtendedContent();
	
	if (this.isHtml) {
		if (this.iframe) {
			try {
				var exp = this,
					doc = this.iframe.contentDocument || this.iframe.contentWindow.document;
				hs.addEventListener(doc, 'mousedown', function () {
					if (hs.focusKey != exp.key) exp.focus();
				});
			} catch(e) {}
			if (hs.ie && typeof this.isClosing != 'boolean') // first open 
				this.iframe.style.width = (this.objectWidth - 1) +'px'; // hasLayout
		}
	}
	if (!this.caption) hs.fireEvent(this, 'onAfterExpand');
},



cancelLoading : function() {	
	hs.expanders[this.key] = null;
	this.a.style.cursor = this.originalCursor;	
	if (this.loading) hs.loading.style.left = '-9999px';
	hs.fireEvent(this, 'onHideLoading');
},


focus : function() {
	this.wrapper.style.zIndex = hs.zIndexCounter++;
	if (this.isImage) {
		this.content.title = hs.restoreTitle;
		
		hs.styleRestoreCursor = window.opera ? 'pointer' : 'url('+ hs.graphicsDir + hs.restoreCursor +'), pointer';
		if (hs.ie && hs.ieVersion() < 6) hs.styleRestoreCursor = 'hand';
		this.content.style.cursor = hs.styleRestoreCursor;
	}
	hs.focusKey = this.key;	
	hs.fireEvent(this, 'onFocus');	
},

close : function() {
	if (this.isClosing || !this.isExpanded) return;
	this.isClosing = true;
	if (!hs.fireEvent(this, 'onBeforeClose')) return;
	
	try {
		if (this.isHtml) this.htmlPrepareClose();
		
		this.content.style.cursor = 'default';
		
		this.changeSize(
			0,
			{
				x: this.x.min,
				y: this.y.min,
				w: this.x.span,
				h: parseInt(this.content.style.height),
				imgW: this.x.imgSpan
			},
			{
				x: this.thumbLeft - this.offsetBorderW + this.thumbOffsetBorderW,
				y: this.thumbTop - this.offsetBorderH + this.thumbOffsetBorderH,
				w: this.thumbWidth,
				h: this.thumbHeight,
				imgW: this.thumbWidth
			},
			hs.restoreDuration,
			hs.restoreSteps
		);
		
	} catch (e) { this.afterClose(); } 
},

htmlPrepareClose : function() {
	if (hs.geckoMac) { // bad redraws
		if (!hs.mask) hs.mask = hs.createElement('div', null, 
			{ position: 'absolute' }, hs.container);
		hs.setStyles(hs.mask, { width: this.x.span +'px', height: this.y.span +'px', 
			left: this.x.min +'px', top: this.y.min +'px', display: 'block' });			
	}
	
	if (this.objectLoadTime == 'after' && !this.preserveContent) this.destroyObject();
},

destroyObject : function () {
	if (hs.ie && this.iframe)
		try { this.iframe.contentWindow.document.body.innerHTML = ''; } catch (e) {}
	this.body.innerHTML = '';
},

sleep : function() {
	this.releaseMask = null;
	this.wrapper.className += ' highslide-display-none';
	hs.push(hs.sleeping, this);
},

awake : function() {
	hs.expanders[this.key] = this;
	
	if (hs.focusKey != this.key) {	
		try { hs.expanders[hs.focusKey].close(); } catch (e){}
	}
	
	this.wrapper.className = this.wrapper.className.replace(/highslide-display-none/, '');
	var z = hs.zIndexCounter++;
	this.wrapper.style.zIndex = z;
	this.isClosing = false;
	this.show();
},



afterClose : function () {
	this.a.className = this.a.className.replace('highslide-active-anchor', '');	
	
	if (this.isHtml && this.preserveContent) this.sleep();
	else {
		this.destroyObject();
		hs.discardElement(this.wrapper);
	}
	if (hs.mask) hs.mask.style.display = 'none';
	hs.fireEvent(this, 'onAfterClose');
	 
	/*
	var s = "";
	for (var x in this.overlays[0]) {
		s += x+': '+ this.overlays[0][x] +'\n';
	}
	debug.write (s);
		*/
	
	for (var x in this) this[x] = null;
	//alert (this.overlays[0].parentNode);
	
	//this.overlays = null;
	hs.expanders[this.key] = null;
}

};
// history
var HsExpander = hs.Expander;

// set handlers