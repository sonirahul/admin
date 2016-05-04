/******************************************************************************
Name:    Highslide JS
Version: 4.0b4 (forked from 3.3.14, updated until 3.3.22)
Config: 
Author:  Torstein Hønsi
Support: http://highslide.com/support

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

/*<?
$debug = false;
?>s*/
var hs = {
// Language strings
lang : {
	loadingText : 'Loading...',
	loadingTitle : 'Click to cancel',
	/*<? if ($cfg->multiple) : ?>s*/
	focusTitle : 'Click to bring to front',
	/*<? endif ?>s*/
	/*<? if ($cfg->overlays && $cfg->autosize) : ?>s*/
	fullExpandTitle : 'Expand to actual size',
	/*<? endif ?>s*/
	/*<? if ($cfg->overlays) : ?>s*/
	creditsText : 'Powered by <i>Highslide JS</i>',
	creditsTitle : 'Go to the Highslide JS homepage',
	/*<? endif ?>s*/
	/*<? if ($cfg->ajax || $cfg->iframe || $cfg->flash || $cfg->slideshow) : ?>s*/
	previousText : 'Previous',
	nextText : 'Next', 
	moveText : 'Move',
	closeText : 'Close', 
	closeTitle : 'Close (esc)', 
	resizeTitle : 'Resize',
	playText : 'Play',
	playTitle : 'Play slideshow (spacebar)',
	pauseText : 'Pause',
	pauseTitle : 'Pause slideshow (spacebar)',
	previousTitle : 'Previous (arrow left)',
	nextTitle : 'Next (arrow right)',
	moveTitle : 'Move',
	fullExpandText : 'Full size',
	/*<? endif ?>s*/
	/*<? if ($cfg->slideshow) : ?>s*/
	number: 'Image %1 of %2',
	/*<? endif ?>s*/
	/*<?
	$s = 'Click to close image';
	if ($cfg->dragging) $s .= ', click and drag to move';
	if ($cfg->navigation) $s .= '. Use arrow keys for next and previous.';
	?>s*/
	restoreTitle : '<?= $s ?>'
},
// See http://highslide.com/ref for examples of settings  
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
loadingOpacity : 0.75,
/*<? if ($cfg->multiple) : ?>s*/
allowMultipleInstances: true,
/*<? endif ?>s*/
/*<? if ($cfg->preloading) : ?>s*/
numberOfImagesToPreload : 5,
/*<? endif ?>s*/
/*<? if ($cfg->outlines) : ?>s*/
outlineWhileAnimating : 2, // 0 = never, 1 = always, 2 = HTML only 
outlineStartOffset : 3, // ends at 10
/*<? endif ?>s*/
/*<? if ($cfg->overlays && $cfg->autosize) : ?>s*/
fullExpandPosition : 'bottom right',
fullExpandOpacity : 1,
/*<? endif ?>s*/
/*<? if ($cfg->overlays) : ?>s*/
padToMinWidth : false, // pad the popup width to make room for wide caption
showCredits : true, // you can set this to false if you want
creditsHref : 'http://vikjavev.no/highslide/',
/*<? endif ?>s*/
/*<? if ($cfg->navigation) : ?>s*/
enableKeyListener : true,
/*<? endif ?>s*/
/*<? if ($cfg->templating) : ?>s*/
useTemplating : false,
/*<? endif ?>s*/
/*<? if ($cfg->transitions) : ?>s*/
transitions : [],
transitionDuration: 500,
dimmingOpacity: 0, // Lightbox style dimming background
dimmingDuration: 50, // 0 for instant dimming
/*<? endif ?>*/

/*<? if ($cfg->html) : ?>s*/
allowWidthReduction : false,
allowHeightReduction : true,
preserveContent : true, // Preserve changes made to the content and position of HTML popups.
/*<? endif ?>s*/
/*<? if ($cfg->iframe || $cfg->flash) : ?>s*/
objectLoadTime : 'before', // Load iframes 'before' or 'after' expansion.
/*<? endif ?>s*/
/*<? if ($cfg->ajax) : ?>s*/
cacheAjax : true, // Cache ajax popups for instant display. Can be overridden for each popup.
/*<? endif ?>s*/

/*<? if ($cfg->positioning) : ?>s*/
anchor : 'auto', // where the image expands from
align : 'auto', // position in the client (overrides anchor)
targetX: null, // the id of a target element
targetY: null,
/*<? endif ?>s*/
/*<? if ($cfg->overlays && $cfg->dragging) : ?>s*/
dragByHeading: true,
/*<? endif ?>s*/
minWidth: 200,
minHeight: 200,
/*<? if ($cfg->autosize) : ?>s*/
allowSizeReduction: true, // allow the image to reduce to fit client size. If false, this overrides minWidth and minHeight
/*<? endif ?>s*/
/*<? if ($cfg->outlines) : ?>s*/
outlineType : 'drop-shadow', // set null to disable outlines
/*<? endif ?>s*/
wrapperClassName : 'highslide-wrapper', // for enhanced css-control
/*<? if ($cfg->slideshow || $cfg->html) : ?>s*/
skin : {
	/*<? if ($cfg->slideshow) : ?>s*/
	controls:
		'<div class="highslide-controls"><ul>'+
			'<li class="highslide-previous">'+
				'<a href="#" title="{hs.lang.previousTitle}">'+
				'<span>{hs.lang.previousText}</span></a>'+
			'</li>'+
			'<li class="highslide-play">'+
				'<a href="#" title="{hs.lang.playTitle}">'+
				'<span>{hs.lang.playText}</span></a>'+
			'</li>'+
			'<li class="highslide-pause">'+
				'<a href="#" title="{hs.lang.pauseTitle}">'+
				'<span>{hs.lang.pauseText}</span></a>'+
			'</li>'+
			'<li class="highslide-next">'+
				'<a href="#" title="{hs.lang.nextTitle}">'+
				'<span>{hs.lang.nextText}</span></a>'+
			'</li>'+
			'<li class="highslide-move">'+
				'<a href="#" title="{hs.lang.moveTitle}">'+
				'<span>{hs.lang.moveText}</span></a>'+
			'</li>'+
			'<li class="highslide-full-expand">'+
				'<a href="#" title="{hs.lang.fullExpandTitle}">'+
				'<span>{hs.lang.fullExpandText}</span></a>'+
			'</li>'+
			'<li class="highslide-close">'+
				'<a href="#" title="{hs.lang.closeTitle}" >'+
				'<span>{hs.lang.closeText}</span></a>'+
			'</li>'+
		'</ul></div>',
	/*<? endif ?>s*/
	/*<? if ($cfg->html) : ?>s*/
	contentWrapper:
		'<div class="highslide-header"><ul>'+
			'<li class="highslide-previous">'+
				'<a href="#" title="{hs.lang.previousTitle}" onclick="return hs.previous(this)">'+
				'<span>{hs.lang.previousText}</span></a>'+
			'</li>'+
			'<li class="highslide-next">'+
				'<a href="#" title="{hs.lang.nextTitle}" onclick="return hs.next(this)">'+
				'<span>{hs.lang.nextText}</span></a>'+
			'</li>'+
			'<li class="highslide-move">'+
				'<a href="#" title="{hs.lang.moveTitle}" onclick="return false">'+
				'<span>{hs.lang.moveText}</span></a>'+
			'</li>'+
			'<li class="highslide-close">'+
				'<a href="#" title="{hs.lang.closeTitle}" onclick="return hs.close(this)">'+
				'<span>{hs.lang.closeText}</span></a>'+
			'</li>'+
		'</ul></div>'+
		'<div class="highslide-body"></div>'+
		'<div class="highslide-footer"><div>'+
			'<span class="highslide-resize" title="{hs.lang.resizeTitle}"><span></span></span>'+
		'</div></div>'
	/*<? endif ?>s*/
},
/*<? endif ?>s*/
// END OF YOUR SETTINGS


// declare internal properties
/*<? if ($cfg->preloading) : ?>s*/
preloadTheseImages : [],
continuePreloading: true,
/*<? endif ?>s*/
expanders : [],
overrides : [
	/*<? if ($cfg->autosize) : ?>s*/
	'allowSizeReduction',
	/*<? endif ?>s*/
	/*<? if ($cfg->positioning) : ?>s*/
	'anchor',
	'align',
	'targetX',
	'targetY',
	/*<? endif ?>s*/
	/*<? if ($cfg->outlines) : ?>s*/
	'outlineType',
	'outlineWhileAnimating', 
	/*<? endif ?>s*/
	/*<? if ($cfg->overlays) : ?>s*/
	'captionId',
	'captionText',
	'captionEval',
	'captionOverlay',
	'headingId',
	'headingText',
	'headingEval',
	'headingOverlay',
	/*<? endif ?>s*/
	/*<? if ($cfg->overlays && $cfg->dragging) : ?>s*/
	'dragByHeading',
	/*<? endif ?>s*/
	/*<? if ($cfg->slideshow) : ?>s*/
	'autoplay',
	'numberPosition',
	/*<? endif ?>s*/
	/*<? if ($cfg->transitions) : ?>s*/
	'transitions',
	'dimmingOpacity',
	/*<? endif ?>*/
	/*<? if ($cfg->html) : ?>s*/
	'contentId',
	'width',
	'height',
	'allowWidthReduction',
	'allowHeightReduction',
	'preserveContent',
	/*<? endif ?>s*/
	/*<? if ($cfg->inline) : ?>s*/
	'maincontentId',
	'maincontentText',
	'maincontentEval',
	/*<? endif ?>s*/
	/*<? if ($cfg->iframe || $cfg->ajax) : ?>s*/
	'objectType',
	/*<? endif ?>s*/
	/*<? if ($cfg->ajax) : ?>s*/	
	'cacheAjax',
	/*<? endif ?>s*/
	/*<? if ($cfg->iframe || $cfg->flash) : ?>s*/	
	'objectWidth',
	'objectHeight',
	'objectLoadTime',
	/*<? endif ?>s*/
	/*<? if ($cfg->flash) : ?>s*/	
	'swfObject',
	/*<? endif ?>s*/
	'wrapperClassName',
	'minWidth',
	'minHeight',
	'maxWidth',
	'maxHeight',
	'slideshowGroup',
	'easing',
	'easingClose',
	'fadeInOut',
	'src'
],
/*<? if ($cfg->overlays) : ?>s*/
overlays : [],
idCounter : 0,
oPos : {
	x: ['leftpanel', 'left', 'center', 'right', 'rightpanel'],
	y: ['above', 'top', 'middle', 'bottom', 'below']
},
headingOverlay: {},
captionOverlay: {},
/*<? endif ?>s*/
/*<? if ($cfg->overlays || $cfg->transitions) : ?>s*/
faders : [],
/*<? endif ?>s*/
/*<? if ($cfg->slideshow) : ?>*/
slideshows : [],
/*<? endif ?>s*/
/*<? if ($cfg->outlines) : ?>*/
pendingOutlines : {},
/*<? endif ?>s*/
/*<? if ($cfg->html) : ?>s*/
sleeping : [],
/*<? endif ?>s*/
/*<? if ($cfg->ajax) : ?>s*/
preloadTheseAjax : [],
cacheBindings : [],
cachedGets : {},
/*<? endif ?>s*/
clones : {},
ie : (document.all && !window.opera),
safari : /Safari/.test(navigator.userAgent),
/*<? if ($cfg->html || $cfg->transitions || $cfg->hideelements) : ?>s*/
geckoMac : /Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),
/*<? endif ?>s*/

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
		if (hs.ie && x == 'opacity') {
			if (styles[x] > 0.99) el.style.removeAttribute('filter'); /// enable ClearType in IE7
			else el.style.filter = 'alpha(opacity='+ (styles[x] * 100) +')';
		}
		else el.style[x] = styles[x];
	}
},

ieVersion : function () {
	var arr = navigator.appVersion.split("MSIE");
	return arr[1] ? parseFloat(arr[1]) : null;
},

getPageSize : function () {
	var iebody = document.compatMode && document.compatMode != "BackCompat" 
		? document.documentElement : document.body;	
	
	/*<? if ($cfg->transitions) : ?>*/
	var b = document.body;
	var xScroll = (window.innerWidth && window.scrollMaxX) 
			? window.innerWidth + window.scrollMaxX :
				(b.scrollWidth > b.offsetWidth ? b.scrollWidth : b.offsetWidth),
		yScroll = (window.innerHeight && window.scrollMaxY) 
			? window.innerHeight + window.scrollMaxY :
				(b.scrollHeight > b.offsetHeight ? b.scrollHeight : b.offsetHeight),
		pageWidth = hs.ie ? iebody.scrollWidth :
			(document.documentElement.clientWidth || self.innerWidth),
      	pageHeight = hs.ie ? iebody.clientHeight : 
			(document.documentElement.clientHeight || self.innerHeight);
	/*<? endif ?>s*/
	
	var width = hs.ie ? iebody.clientWidth : 
			(document.documentElement.clientWidth || self.innerWidth),
		height = hs.ie ? iebody.clientHeight : self.innerHeight;
	
	return {
		/*<? if ($cfg->transitions) : ?>s*/
		pageWidth: xScroll < pageWidth ? pageWidth : xScroll,
		pageHeight: yScroll < pageHeight ? pageHeight : yScroll,
		/*<? endif ?>s*/
		width: width,
		height: height,		
		scrollLeft: hs.ie ? iebody.scrollLeft : pageXOffset,
		scrollTop: hs.ie ? iebody.scrollTop : pageYOffset
	}
},

getPosition : function(el)	{
	/*<? if ($cfg->imagemap) : ?>s*/
	if (/area/i.test(el.tagName)) {
		var imgs = document.getElementsByTagName('img');
		for (var i = 0; i < imgs.length; i++) {
			var u = imgs[i].useMap;
			if (u && u.replace(/^.*?#/, '') == el.parentNode.name) {
				el = imgs[i];
				break;
			}
		}
	}
	/*<? endif ?>s*/
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
/*<? if ($cfg->html) : ?>*/
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

getSelfRendered : function() {
	return hs.createElement('div', { 
		className: 'highslide-html-content', 
		innerHTML: hs.replaceLang(hs.skin.contentWrapper) 
	});
},
/*<? endif // html ?>s*/
/*<? if ($cfg->html || $cfg->slideshow) : ?>s*/
getElementByClass : function (el, tagName, className) {
	var els = el.getElementsByTagName(tagName);
	for (var i = 0; i < els.length; i++) {
    	if ((new RegExp(className)).test(els[i].className)) {
			return els[i];
		}
	}
	return null;
},
replaceLang : function(s) {
	s = s.replace(/\s/g, ' ');
	var re = /{hs\.lang\.([^}]+)\}/g,
		matches = s.match(re),
		lang;
	for (var i = 0; i < matches.length; i++) {
		lang = matches[i].replace(re, "$1");
		if (hs.lang[lang]) s = s.replace(matches[i], hs.lang[lang]);
	}
	return s;
},
/*<? endif ?>*/
/*<? if ($cfg->unobtrusive) : ?>*/
setClickEvents : function () {
	var els = document.getElementsByTagName('a');
	for (var i = 0; i < els.length; i++) {
		if (/^highslide$/.test(els[i].rel)) {
			/*<? if ($cfg->events) : ?>s*/
			if (hs.fireEvent(hs, 'onSetClickEvent', { element: els[i] })) {
			/*<? endif ?>*/
				els[i].onclick = function() { return hs.expand(this) };
			/*<? if ($cfg->events) : ?>s*/
			}
			/*<? endif ?>*/
			els[i].removeAttribute('rel');	
		}
		/*<? if ($cfg->ajax || $cfg->iframe) : ?>*/
		var match = /^highslide-(ajax|iframe)$/.exec(els[i].rel);
		if (match) {
			(function(){
				var t = match[1];
				/*<? if ($cfg->events) : ?>s*/
				if (hs.fireEvent(hs, 'onSetClickEvent', { element: els[i], type: t })) {
				/*<? endif ?>*/
					els[i].onclick = function() {
						return hs.htmlExpand(this, { objectType: t } ); 
					};
				/*<? if ($cfg->events) : ?>s*/
				}
				/*<? endif ?>s*/
			})();
			els[i].removeAttribute('rel');
		}
		/*<? endif ?>s*/
	}
	if (!hs.pageLoaded) setTimeout( hs.setClickEvents, 50);
},
/*<? endif ?>s*/
/*<? if ($cfg->ajax) : ?>*/
getCacheBinding : function (a) {
	for (var i = 0; i < hs.cacheBindings.length; i++) {
		if (hs.cacheBindings[i][0] == a) {
			var c = hs.cacheBindings[i][1];
			hs.cacheBindings[i][1] = c.cloneNode(1);
			return c;
		}
	}
	return null;
},

preloadAjax : function (e) {
	var arr = hs.getAnchors();
	for (var i = 0; i < arr.htmls.length; i++) {
		var a = arr.htmls[i];
		if (hs.getParam(a, 'objectType') == 'ajax' && hs.getParam(a, 'cacheAjax'))
			hs.push(hs.preloadTheseAjax, a);
	}
	
	hs.preloadAjaxElement(0);
},

preloadAjaxElement : function (i) {
	if (!hs.preloadTheseAjax[i]) return;
	var a = hs.preloadTheseAjax[i];
	var cache = hs.getNode(hs.getParam(a, 'contentId'));
	if (!cache) cache = hs.getSelfRendered();
	var ajax = new hs.Ajax(a, cache, 1);	
   	ajax.onError = function () { };
   	ajax.onLoad = function () {
   		hs.push(hs.cacheBindings, [a, cache]);
   		hs.preloadAjaxElement(i + 1);
   	};
   	ajax.run();
},
/*<? endif ?>s*/
/*<? if ($cfg->multiple) : ?>*/
focusTopmost : function() {
	var topZ = 0, topmostKey = -1;
	for (var i = 0; i < hs.expanders.length; i++) {
		if (hs.expanders[i]) {
			if (hs.expanders[i].wrapper.style.zIndex && hs.expanders[i].wrapper.style.zIndex > topZ) {
				topZ = hs.expanders[i].wrapper.style.zIndex;
				
				topmostKey = i;
			}
		}
	}
	if (topmostKey == -1) hs.focusKey = -1;
	else hs.expanders[topmostKey].focus();
},
/*<? endif ?>s*/

getParam : function (a, param) {
	a.getParams = a.onclick;
	var p = a.getParams ? a.getParams() : null;
	a.getParams = null;
	
	return (p && typeof p[param] != 'undefined') ? p[param] : 
		(typeof hs[param] != 'undefined' ? hs[param] : null); /// for strict warnings
},

getSrc : function (a) {
	var src = hs.getParam(a, 'src');
	if (src) return src;
	return a.href;
},
/*<? if ($cfg->html || $cfg->overlays) : ?>*/
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
/*<? endif ?>*/
discardElement : function(d) { /// http://www.outofhanwell.com/ieleak/index.php?title=Fixing_Leaks
	hs.garbageBin.appendChild(d);
	hs.garbageBin.innerHTML = '';
},
/*<? if ($cfg->transitions) : ?>s*/
dim : function(exp) {
	if (!hs.dimmer) {
		hs.dimmer = hs.createElement ('div', 
			{ 
				className: 'highslide-dimming',
				owner: '',
				onclick: function() {
					/*<? if ($cfg->events) : ?>s*/
					if (hs.fireEvent(hs, 'onDimmerClick'))
					/*<? endif ?>*/ 
						hs.close();
				}
			}, 
			{ position: 'absolute', left: 0 }, hs.container, true);
		hs.addEventListener(window, 'resize', hs.setDimmerSize);
	}
	hs.dimmer.style.display = '';
	hs.setDimmerSize();
	hs.dimmer.owner += '|'+ exp.key;
	if (hs.geckoMac && hs.dimmingGeckoFix) 
		hs.dimmer.style.background = 'url('+ hs.graphicsDir + 'geckodimmer.png)';		
	else
		hs.fade(hs.dimmer, 0, exp.dimmingOpacity, hs.dimmingDuration); 
},
undim : function(key) {
	if (!hs.dimmer) return;
	if (typeof key != 'undefined') hs.dimmer.owner = hs.dimmer.owner.replace('|'+ key, '');
	if (
		(typeof key != 'undefined' && hs.dimmer.owner != '')
		|| (hs.upcoming && hs.getParam(hs.upcoming, 'dimmingOpacity'))
	) return;
	if (hs.geckoMac && hs.dimmingGeckoFix) 
		hs.dimmer.style.background = 'none';
	else hs.fade(hs.dimmer, hs.dimmingOpacity, 0, hs.dimmingDuration);
	setTimeout( function() {
		hs.setStyles(hs.dimmer, { display: 'none', width: 0, height: 0 });
	}, hs.dimmingDuration);
},
setDimmerSize : function() {
	if (!hs.dimmer) return;
	var page = hs.getPageSize();
	hs.setStyles(hs.dimmer, { width: page.pageWidth +'px', height: page.pageHeight +'px'});
},
/*<? endif ?>s*/
/*<? if ($cfg->navigation) : ?>*/
previousOrNext : function (el, op) {
	var exp = hs.last = hs.getExpander(el);
	try {
		var adj = hs.upcoming =  exp.getAdjacentAnchor(op);
		adj.onclick(); 		
	} catch (e){
		hs.last = hs.upcoming = null;
	}
	try { exp.close(); } catch (e) {}
	return false;
},

previous : function (el) {
	return hs.previousOrNext(el, -1);
},

next : function (el) {
	return hs.previousOrNext(el, 1);	
},

keyHandler : function(e) {	
	if (!e) e = window.event;
	if (!e.target) e.target = e.srcElement; // ie
	if (e.target.form) return true; // form element has focus
	
	/*<? if ($cfg->events) : ?>s*/
	if (!hs.fireEvent(hs, 'onKeyDown', e)) return true;
	/*<? endif ?>s*/
	
	var op = null;
	switch (e.keyCode) {
		case 32: // Space
		/*<? if ($cfg->slideshow) : ?>s*/
			op = 2;
			break;
		/*<? endif ?>s*/
		case 34: // Page Down
		case 39: // Arrow right
		case 40: // Arrow down
			op = 1;
			break;
		case 8:  // Backspace
		case 33: // Page Up
		case 37: // Arrow left
		case 38: // Arrow up
			op = -1;
			break;
		case 27: // Escape
		case 13: // Enter
			op = 0;
	}
	if (op !== null) {
		hs.removeEventListener(document, 'keydown', hs.keyHandler);
		if (!hs.enableKeyListener) return true;
		
		if (e.preventDefault) e.preventDefault();
    	else e.returnValue = false;
    	
    	var exp = hs.getExpander();
    	if (exp) {
			if (op == 0) {
				exp.close();
				return false;
			} else 
			/*<? if ($cfg->slideshow) : ?>s*/ if (op == 2) {
				if (exp.slideshow) exp.slideshow.hitSpace();
				return false;
			} else 
			/*<? endif ?>s*/ {
				/*<? if ($cfg->slideshow) : ?>s*/
				if (exp.slideshow) exp.slideshow.pause();
				/*<? endif ?>s*/
				return hs.previousOrNext(exp.key, op);
			}
		}
	}
	return true;
},
/*<? endif ?>*/
/*<? if ($cfg->overlays) : ?>*/
registerOverlay : function (overlay) {
	hs.push(hs.overlays, overlay);
},
/*<? endif ?>*/
/*<? if ($cfg->slideshow) : ?>*/
addSlideshow : function (options) {
	hs.push(hs.slideshows, options);
},
/*<? endif ?>*/
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
/*<? if ($cfg->multiple) : ?>*/
reOrder : function () {
	for (var i = 0; i < hs.expanders.length; i++)
		if (hs.expanders[i] && hs.expanders[i].isExpanded) hs.focusTopmost();
},
/*<? endif ?>s*/
/*<? if ($cfg->events) : ?>s*/
fireEvent : function (obj, evt, args) {
	return obj && obj[evt] ? (obj[evt](obj, args) !== false) : true;
},
/*<? endif ?>s*/
/*<? if ($cfg->dragging || $cfg->multiple) : ?>*/
mouseClickHandler : function(e) 
{	
	if (!e) e = window.event;
	if (e.button > 1) return true;
	if (!e.target) e.target = e.srcElement;
	
	var el = e.target;
	while (el.parentNode
		&& !(/highslide-(image|move|html|resize)/.test(el.className)))
	{
		el = el.parentNode;
	}
	var exp = hs.getExpander(el);
	if (exp && (exp.isClosing || !exp.isExpanded)) return true;
		
	if (exp && e.type == 'mousedown') {
		if (e.target.form) return true;
		var match = el.className.match(/highslide-(image|move|resize)/);
		if (match) {
			hs.dragArgs = { exp: exp /*<? if ($cfg->dragging) : ?>*/, type: match[1], left: exp.x.min, width: exp.x.span, top: exp.y.min, 
				height: exp.y.span, clickX: e.clientX, clickY: e.clientY /*<? endif ?>*/};
			/*<? if ($cfg->dragging) : ?>*/
			
			hs.addEventListener(document, 'mousemove', hs.dragHandler);
			if (e.preventDefault) e.preventDefault(); // FF
			/*<? endif ?>*/
			if (/highslide-(image|html)-blur/.test(exp.content.className)) {
				exp.focus();
				hs.hasFocused = true;
			}
			return false;
		}
		/*<? if ($cfg->html) : ?>s*/
		else if (/highslide-html/.test(el.className) && hs.focusKey != exp.key) {
			exp.focus();
			/*<? if ($cfg->dragging && $cfg->hideelements) : ?>s*/
			exp.redoShowHide();
			/*<? endif ?>s*/
		}
		/*<? endif ?>s*/
	} else if (e.type == 'mouseup') {
		/*<? if ($cfg->dragging) : ?>*/
		hs.removeEventListener(document, 'mousemove', hs.dragHandler);
		/*<? endif ?>*/
		if (hs.dragArgs) {
			
			/*<? if ($cfg->dragging) : ?>s*/
			if (hs.dragArgs.type == 'image')
				hs.dragArgs.exp.content.style.cursor = hs.styleRestoreCursor;
			var hasDragged = hs.dragArgs.hasDragged;			
			/*<? endif ?>s*/
			
			if (/*<? if ($cfg->dragging) : ?>*/!hasDragged && 
				/*<? endif ?>s*/!hs.hasFocused && !/(move|resize)/.test(hs.dragArgs.type)) {
				/*<? if ($cfg->events) : ?>s*/
				if (hs.fireEvent(exp, 'onImageClick'))
				/*<? endif ?>s*/
				exp.close();
			} 
			/*<? if ($cfg->dragging && $cfg->hideelements) : ?>s*/ 
			else if (hasDragged || (!hasDragged && hs.hasHtmlexpanders)) {
				hs.dragArgs.exp.redoShowHide();
			}
			/*<? endif ?>s*/
			/*<? if ($cfg->iframe && $cfg->dragging) : ?>*/
			if (hs.dragArgs.exp.releaseMask) 
				hs.dragArgs.exp.releaseMask.style.display = 'none';
			/*<? endif ?>s*/
			/*<? if ($cfg->events && $cfg->dragging) : ?>*/
			if (hasDragged) hs.fireEvent(hs.dragArgs.exp, 'onDrop', hs.dragArgs);
			/*<? endif ?>s*/
			/*<? if ($cfg->transitions && $cfg->dragging) : ?>s*/
			if (hasDragged) hs.setDimmerSize();
			/*<? endif ?>*/
			hs.hasFocused = false;
			hs.dragArgs = null;
		
		} else if (/highslide-image-blur/.test(el.className)) {
			el.style.cursor = hs.styleRestoreCursor;		
		}
	}
	return false;
},
/*<? endif ?>s*/
/*<? if ($cfg->dragging) : ?>*/
dragHandler : function(e)
{
	if (!hs.dragArgs) return true;
	if (!e) e = window.event;
	var a = hs.dragArgs, exp = a.exp;
	/*<? if ($cfg->iframe) : ?>s*/
	if (exp.iframe) {		
		if (!exp.releaseMask) exp.releaseMask = hs.createElement('div', null, 
			{ position: 'absolute', width: exp.x.span+'px', height: exp.y.span+'px', 
				left: 0, top: 0, zIndex: 4,	background: (hs.ie ? 'white' : 'none'), 
				opacity: 0.01 }, 
			exp.wrapper, true);
		if (exp.releaseMask.style.display == 'none')
			exp.releaseMask.style.display = '';
	}
	/*<? endif ?>s*/
	
	a.dX = e.clientX - a.clickX;
	a.dY = e.clientY - a.clickY;	
	
	var distance = Math.sqrt(Math.pow(a.dX, 2) + Math.pow(a.dY, 2));
	if (!a.hasDragged) a.hasDragged = (a.type != 'image' && distance > 0)
		|| (distance > (hs.dragSensitivity || 5));
	
	if (a.hasDragged && e.clientX > 5 && e.clientY > 5) {
		/*<? if ($cfg->events) : ?>s*/
		if (!hs.fireEvent(exp, 'onDrag', a)) return false;
		/*<? endif ?>*/
		if (a.type == 'resize') exp.resize(a);
		else exp.move(a);
	}
	return false;
},
/*<? endif ?>s*/
/*<? if ($cfg->events || $cfg->overlays) : ?>*/
wrapperMouseHandler : function (e) {
	try { /// forum/viewtopic.php?t=1693
		if (!e) e = window.event;
		var over = /mouseover/i.test(e.type); 
		if (!e.target) e.target = e.srcElement; // ie
		if (hs.ie) e.relatedTarget = 
			over ? e.fromElement : e.toElement; // ie
		var exp = hs.getExpander(e.target);
		if (!exp || !e.relatedTarget || hs.getExpander(e.relatedTarget) == exp 
			|| hs.dragArgs) return;
		
		/*<? if ($cfg->events) : ?>s*/
		if (exp.isExpanded) hs.fireEvent(exp, over ? 'onMouseOver' : 'onMouseOut', e);
		/*<? endif ?>s*/	
		/*<? if ($cfg->overlays) : ?>s*/
		for (var i = 0; i < exp.overlays.length; i++) {
			var o = hs.$('hsId'+ exp.overlays[i]);
			if (o && o.hideOnMouseOut) {
				var from = over ? 0 : o.opacity,
					to = over ? o.opacity : 0;			
				hs.fade(o, from, to);
			}
		}
		/*<? endif ?>s*/	
	} catch (e) {}
},
/*<? endif ?>s*/
/*<? if ($cfg->dragging || $cfg->multiple || $cfg->preloading || $cfg->ajax || $cfg->iframe || $cfg->navigation || $cfg->unobtrusive || $cfg->overlays) : ?>*/
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
/*<? endif ?>s*/
/*<? if ($cfg->preloading) : ?>*/
preloadFullImage : function (i) {
	if (hs.continuePreloading && hs.preloadTheseImages[i] && hs.preloadTheseImages[i] != 'undefined') {
		var img = document.createElement('img');
		img.onload = function() { 
			img = null; /// IE memory leak 
			hs.preloadFullImage(i + 1);
		};
		img.src = hs.preloadTheseImages[i];
	}
},
preloadImages : function (number) {
	if (number && typeof number != 'object') hs.numberOfImagesToPreload = number;
	
	var arr = hs.getAnchors();
	for (var i = 0; i < arr.images.length && i < hs.numberOfImagesToPreload; i++) {
		hs.push(hs.preloadTheseImages, hs.getSrc(arr.images[i]));
	}
	/*<? if ($cfg->outlines) : ?>*/
	// preload outlines
	if (hs.outlineType)	new hs.Outline(hs.outlineType, function () { hs.preloadFullImage(0)} );
	else
	/*<? endif ?>*/
	hs.preloadFullImage(0);
	
	// preload cursor
	var cur = hs.createElement('img', { src: hs.graphicsDir + hs.restoreCursor });
},
/*<? endif ?>*/

init : function () {
	if (!hs.container) {
		hs.container = hs.createElement('div', 
			null, 
			{ position: 'absolute', left: 0, top: 0, width: '100%', zIndex: hs.zIndexCounter }, 
			document.body,
			true
		);
		hs.loading = hs.createElement('a', {
				className: 'highslide-loading',
				title: hs.lang.loadingTitle,
				innerHTML: hs.lang.loadingText,
				href: 'javascript:;'
			}, {
				position: 'absolute',
				opacity: hs.loadingOpacity,
				left: '-9999px',
				zIndex: 1
			}, hs.container
		);
		hs.garbageBin = hs.createElement('div', null, { display: 'none' }, hs.container);
		/*<? if ($cfg->html) : ?>s*/
		hs.clearing = hs.createElement('div', null, 
			{ clear: 'both', paddingTop: '1px' }, null, true);
		/*<? endif ?>s*/
		
		// http://www.robertpenner.com/easing/ 
		Math.linearTween = function (t, b, c, d) {
			return c*t/d + b;
		};
		Math.easeInQuad = function (t, b, c, d) {
			return c*(t/=d)*t + b;
		};
		/*<? if ($cfg->transitions) : ?>s*/
		Math.easeInOutQuad = function (t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		};
		/*<? endif ?>s*/
		
		/// backwards compat for language strings
		for (var x in hs.langDefaults) hs.lang[x] = hs[x] || hs.lang[x] || hs.langDefaults[x];
		
		/*<? if ($cfg->ajax || $cfg->iframe) : ?>s*/
		hs.ie6SSL = (hs.ie && hs.ieVersion() <= 6 && location.protocol == 'https:');
		/*<? endif ?>s*/
		/*<? if ($cfg->navigation || $cfg->preloading) : ?>*/
		hs.getAnchors();
		/*<? endif ?>s*/
		/*<? if ($cfg->events) : ?>s*/
		hs.fireEvent(this, 'onActivate');
		/*<? endif ?>s*/
	}
},
/*<? if ($cfg->navigation || $cfg->preloading) : ?>*/
updateAnchors : function() {
	var els = document.getElementsByTagName('*'), all = [], images = [], 
		/*<? if ($cfg->ajax) : ?>s*/ htmls = [], /*<? endif ?>s*/groups = {}, re;
	for (var i = 0; i < els.length; i++) {
		re = hs.isHsAnchor(els[i]);
		if (re) {
			hs.push(all, els[i]);
			/// images
			if (re[0] == 'hs.expand') hs.push(images, els[i]);
			/*<? if ($cfg->ajax) : ?>s*/
			/// htmls
			else if (re[0] == 'hs.htmlExpand') hs.push(htmls, els[i]);
			/*<? endif ?>s*/
			/// groupwise
			var g = hs.getParam(els[i], 'slideshowGroup') || 'none';
			if (!groups[g]) groups[g] = [];
			hs.push(groups[g], els[i]);
		}
	}
	hs.anchors = { all: all, groups: groups, images: images
		/*<? if ($cfg->ajax) : ?>s*/, htmls: htmls/*<? endif ?>s*/ };
	return hs.anchors;
},

getAnchors : function() {
	return hs.anchors || hs.updateAnchors();
},
/*<? endif ?>*/
/*<? if ($cfg->overlays || $cfg->transitions) : ?>*/
fade : function (el, o, oFinal, dur, i, dir) {
	if (typeof i == 'undefined') { // new fader
		if (typeof dur != 'number') dur = 250;
		if (dur < 25) { // instant
			hs.setStyles( el, { opacity: oFinal	}); /// removed visibility due to IE6 bug, forum topic 1397
			return;
		}
		i = hs.faders.length;
		dir = oFinal > o ? 1 : -1;
		var step = (25 / (dur - dur % 25)) * Math.abs(o - oFinal);
	}
	o = parseFloat(o);
	var skip = (el.fade === 0 || el.fade === false || (el.fade == 2 && hs.ie));
	el.style.visibility = ((skip ? oFinal : o) <= 0) ? 'hidden' : 'visible';
	
	if (skip || o < 0 || (dir == 1 && o > oFinal)) return;
	
	if (el.fading && el.fading.i != i) { // reverse
		clearTimeout(hs.faders[el.fading.i]);
		o = el.fading.o;
	}
	el.fading = {i: i, o: o, step: (step || el.fading.step)};
	el.style.visibility = (o <= 0) ? 'hidden' : 'visible';
	hs.setStyles(el, { opacity: o });
	hs.faders[i] = setTimeout(function() {
		hs.fade(el, o + el.fading.step * dir, oFinal, null, i, dir);
	}, 25);
},
/*<? endif ?>*/
close : function(el) {
	var exp = hs.getExpander(el);
	if (exp) exp.close();
	return false;
}
}; // end hs object

/*<? if ($cfg->outlines) : ?>*/
//-----------------------------------------------------------------------------
hs.Outline =  function (outlineType, onLoad) {
	this.onLoad = onLoad;
	this.outlineType = outlineType;
	var v = hs.ieVersion(), tr;
	
	this.hasAlphaImageLoader = hs.ie && v >= 5.5 && v < 7;
	if (!outlineType) {
		if (onLoad) onLoad();
		return;
	}
	
	hs.init();
	this.table = hs.createElement(
		'table', { cellSpacing: 0 },
		{
			visibility: 'hidden',
			position: 'absolute',
			borderCollapse: 'collapse'
		},
		hs.container,
		true
	);
	var tbody = hs.createElement('tbody', null, null, this.table, 1);
	
	this.td = [];
	for (var i = 0; i <= 8; i++) {
		if (i % 3 == 0) tr = hs.createElement('tr', null, { height: 'auto' }, tbody, true);
		this.td[i] = hs.createElement('td', null, null, tr, true);
		var style = i != 4 ? { lineHeight: 0, fontSize: 0} : { position : 'relative' };
		hs.setStyles(this.td[i], style);
	}
	this.td[4].className = outlineType;
	
	this.preloadGraphic(); 
};

hs.Outline.prototype = {
preloadGraphic : function () {
	var src = hs.graphicsDir + (hs.outlinesDir || "outlines/")+ this.outlineType +".png";
				
	var appendTo = hs.safari ? hs.container : null;
	this.graphic = hs.createElement('img', null, { position: 'absolute', left: '-9999px', 
		top: '-9999px' }, appendTo, true); // for onload trigger
	
	var pThis = this;
	this.graphic.onload = function() { pThis.onGraphicLoad(); };
	
	this.graphic.src = src;
},

onGraphicLoad : function () {
	hs.discardElement(this.graphic);
	var o = this.offset = this.graphic.width / 4,
		pos = [[0,0],[0,-4],[-2,0],[0,-8],0,[-2,-8],[0,-2],[0,-6],[-2,-2]],
		dim = { height: (2*o) +'px', width: (2*o) +'px' };
		
	for (var i = 0; i <= 8; i++) {
		if (pos[i]) {
			if (this.hasAlphaImageLoader) {
				var w = (i == 1 || i == 7) ? '100%' : this.graphic.width +'px';
				var div = hs.createElement('div', null, { width: '100%', height: '100%', position: 'relative', overflow: 'hidden'}, this.td[i], true);
				hs.createElement ('div', null, { 
						filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='"+ this.graphic.src + "')", 
						position: 'absolute',
						width: w, 
						height: this.graphic.height +'px',
						left: (pos[i][0]*o)+'px',
						top: (pos[i][1]*o)+'px'
					}, 
				div,
				true);
			} else {
				hs.setStyles(this.td[i], { background: 'url('+ this.graphic.src +') '+ (pos[i][0]*o)+'px '+(pos[i][1]*o)+'px'});
			}
			
			if (window.opera && (i == 3 || i ==5)) 
				hs.createElement('div', null, dim, this.td[i], true);
			
			hs.setStyles (this.td[i], dim);
		}
	}
	if (hs.pendingOutlines[this.outlineType]) hs.pendingOutlines[this.outlineType].destroy();
	hs.pendingOutlines[this.outlineType] = this;
	if (this.onLoad) this.onLoad();
},
	
setPosition : function (exp, pos, vis) {
	pos = pos || {
		x: exp.x.min,
		y: exp.y.min,
		w: exp.x.span/*<? if ($cfg->overlays) : ?>*/ + exp.x.p1 + exp.x.p2/*<? endif ?>*/,
		h: exp.y.span/*<? if ($cfg->overlays) : ?>*/ + exp.y.p1 + exp.y.p2/*<? endif ?>*/
	};
	if (vis) this.table.style.visibility = (pos.h >= 4 * this.offset) 
		? 'visible' : 'hidden';
	this.table.style.left = (pos.x - this.offset) +'px';
	this.table.style.top = (pos.y - this.offset) +'px';
	this.table.style.width = (pos.w + 2 * (exp.x.cb + this.offset)) +'px';
	pos.w += 2 * (exp.x.cb - this.offset);
	pos.h += + 2 * (exp.y.cb - this.offset);
	this.td[4].style.width = pos.w >= 0 ? pos.w +'px' : 0;
	this.td[4].style.height = pos.h >= 0 ? pos.h +'px' : 0;
	if (this.hasAlphaImageLoader) this.td[3].style.height 
		= this.td[5].style.height = this.td[4].style.height;
},
	
destroy : function(hide) {
	if (hide) this.table.style.visibility = 'hidden';
	else hs.discardElement(this.table);
}
};
/*<? endif ?>*/

//-----------------------------------------------------------------------------
// The expander object
hs.Expander = function(a, params, custom, contentType) {
	this.a = a;
	this.custom = custom;
	this.contentType = contentType || 'image';
	/*<? if ($cfg->html) : ?>s*/
	this.isHtml = (contentType == 'html');
	/*<? endif ?>s*/
	this.isImage = !this.isHtml;
	/*<? if ($cfg->preloading) : ?>*/
	hs.continuePreloading = false;
	/*<? endif ?>s*/
	/*<? if ($cfg->overlays) : ?>s*/
	this.overlays = [];
	/*<? endif ?>s*/
	/*<? if ($cfg->transitions) : ?>s*/
	this.last = hs.last;
	hs.last = null;
	/*<? endif ?>s*/
	hs.init();
	var key = this.key = hs.expanders.length;
	
	// override inline parameters
	for (var i = 0; i < hs.overrides.length; i++) {
		var name = hs.overrides[i];
		this[name] = params && typeof params[name] != 'undefined' ?
			params[name] : hs[name];
	}
	if (!this.src) this.src = a.href;
	
	// get thumb
	var el = (params && params.thumbnailId) ? hs.$(params.thumbnailId) : a;
	el = this.thumb = el.getElementsByTagName('img')[0] || el;
	this.thumbsUserSetId = el.id || a.id;
	
	/*<? if ($cfg->events) : ?>s*/
	if (!hs.fireEvent(this, 'onInit')) return true; /// for strict warnings
	/*<? endif ?>s*/
	
	// check if already open
	for (var i = 0; i < hs.expanders.length; i++) {
		if (hs.expanders[i] && hs.expanders[i].a == a
			/*<? if ($cfg->transitions) : ?>s*/ 
			&& !(this.last && this.transitions[1] == 'crossfade')
			/*<? endif ?>s*/) {
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
	
	/*<? if ($cfg->multiple) : ?>s*/
	if (!hs.allowMultipleInstances) { /*<? endif ?>s*/
		if (hs.expanders[key-1]) hs.expanders[key-1].close();
		if (typeof hs.focusKey != 'undefined' && hs.expanders[hs.focusKey])
			hs.expanders[hs.focusKey].close(); /// preserved
	/*<? if ($cfg->multiple) : ?>s*/
	}
	/*<? endif ?>s*/
	
	var pos = hs.getPosition(el);
	
	// initiate metrics
	var x = this.x = {};
	x.t = el.width ? parseInt(el.width) : el.offsetWidth; /// thumb width
	x.tpos = pos.x; /// thumb left
	x.tb = (el.offsetWidth - x.t) / 2; /// thumb border
	var y = this.y = {};
	y.t = el.height ? parseInt(el.height) : el.offsetHeight;
	y.tpos = pos.y;
	y.tb = (el.offsetHeight - y.t) / 2;
	/*<? if ($cfg->overlays) : ?>s*/
	x.p1 = x.p2 = y.p1 = y.p2 = 0; /// above, below and side panels	
	/*<? endif ?>s*/
	
	/*<? if ($cfg->imagemap) : ?>s*/
	if (/area/i.test(el.tagName)) this.getImageMapAreaCorrection(el);
	/*<? endif ?>s*/
	
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
	/*<? if ($cfg->overlays || $cfg->events) : ?>*/
	this.wrapper.onmouseover = this.wrapper.onmouseout = hs.wrapperMouseHandler;
	/*<? endif ?>s*/
	
	/*<? if ($cfg->outlines) : ?>s*/
	if (this.contentType == 'image' && this.outlineWhileAnimating == 2)
		this.outlineWhileAnimating = 0;
	
	// get the outline
	if (!this.outlineType/*<? if ($cfg->transitions) : ?>*/ 
		|| (this.last && this.transitions[1] == 'crossfade') /*<? endif ?>s*/) {
	/*<? endif ?>s*/
	
		this[this.contentType +'Create']();
	/*<? if ($cfg->outlines) : ?>s*/
	
	} else if (hs.pendingOutlines[this.outlineType]) {
		this.connectOutline();
		this[this.contentType +'Create']();
	
	} else {
		this.showLoading();
		var exp = this;
		new hs.Outline(this.outlineType, 
			function () { 
				exp.connectOutline();
				exp[exp.contentType +'Create']();
			} 
		);
	}
	/*<? endif ?>s*/
	return true; /// for strict warnings
};

hs.Expander.prototype = {
/*<? if ($cfg->outlines) : ?>*/
connectOutline : function(x, y) {	
	var o = hs.pendingOutlines[this.outlineType];
	this.outline = o;
	o.table.style.zIndex = this.wrapper.style.zIndex;
	hs.pendingOutlines[this.outlineType] = null;
},
/*<? endif ?>*/
showLoading : function() {
	if (this.onLoadStarted || this.loading) return;
	
	this.loading = hs.loading;
	var exp = this;
	this.loading.onclick = function() {
		exp.cancelLoading();
	};
	
	/*<? if ($cfg->events) : ?>*/
	if (!hs.fireEvent(this, 'onShowLoading')) return;	
	/*<? endif ?>s*/
	var exp = this, 
		l = (this.x.tpos + this.x.tb 
			+ (this.x.t - this.loading.offsetWidth) / 2) +'px',
		t = (this.y.tpos 
			+ (this.y.t - this.loading.offsetHeight) / 2) +'px';
	/*<? if ($cfg->transitions) : ?>s*/
	/// position above a target expander
	if (!tgt && this.last && this.transitions[1] == 'crossfade') 
		var tgt = this.last; 
	if (tgt) {
		l = (tgt.x.min + tgt.x.cb + tgt.x.p1
			+ (tgt.x.span - this.loading.offsetWidth) / 2) +'px';
		t = (tgt.y.min + tgt.y.cb + tgt.y.p1
			+ (tgt.y.span - this.loading.offsetHeight) / 2) +'px';
		this.loading.style.zIndex = hs.zIndexCounter++;
	}
	/*<? endif ?>s*/
	setTimeout(function () { if (exp.loading) hs.setStyles(exp.loading, { left: l, top: t })}, 100); 
},

imageCreate : function() {
	var exp = this;
	
	var img = document.createElement('img');
    this.content = img;
    img.onload = function () {
    	if (hs.expanders[exp.key]) exp.contentLoaded(); 
	};
    /*<? if (!$cfg->dragging && !$cfg->multiple) : ?>s*/
    img.onclick = function () { try {
    	/*<? if ($cfg->events) : ?>s*/
		if (hs.fireEvent(exp, 'onImageClick'))
		/*<? endif ?>s*/ 
    	exp.close();
    } catch (e) {} };
    /*<? endif ?>s*/
    if (hs.blockRightClick) img.oncontextmenu = function() { return false; };
    img.className = 'highslide-image';
    hs.setStyles(img, {
    	visibility: 'hidden', /// prevent flickering in IE
    	display: 'block',
    	position: 'absolute',
		maxWidth: '9999px',
		zIndex: 3
	});
    img.title = hs.lang.restoreTitle;
    if (hs.safari) hs.container.appendChild(img);
    if (hs.ie && hs.flushImgSize) img.src = null;
	img.src = this.src;
	
	this.showLoading();
},
/*<? if ($cfg->html) : ?>*/
htmlCreate : function () {	
	/*<? if ($cfg->events) : ?>s*/
	if (!hs.fireEvent(this, 'onBeforeGetContent')) return;
	/*<? endif ?>s*/
	/*<? if ($cfg->ajax) : ?>*/
	this.content = hs.getCacheBinding(this.a);
	if (!this.content)
	/*<? endif ?>s*/ 
		this.content = hs.getNode(this.contentId);
	if (!this.content) 
		this.content = hs.getSelfRendered();
		
	/*<? if ($cfg->inline) : ?>s*/
	/// get inline main content
	this.getInline(['maincontent']);
	if (this.maincontent) {
		var body = hs.getElementByClass(this.content, 'div', 'highslide-body');
		if (body) body.appendChild(this.maincontent);
		this.maincontent.style.display = 'block';
	}
	/*<? endif ?>s*/
	
	this.innerContent = this.content;
	/*<? if ($cfg->iframe || $cfg->flash) : ?>*/
	if (this.swfObject || this.objectType == 'iframe') this.setObjContainerSize(this.innerContent);
	/*<? endif ?>s*/
	
	// the content tree
	hs.container.appendChild(this.wrapper);
	hs.setStyles( this.wrapper, { 
		position: 'static',
		padding: '0 '+ hs.marginRight +'px 0 '+ hs.marginLeft +'px'
	});
	this.content = hs.createElement(
    	'div',
    	{	className: 'highslide-html' },
		{
			position: 'relative',
			zIndex: 3,
			overflow: 'hidden'
		},
		this.wrapper
	);
	this.mediumContent = hs.createElement('div', null, null, this.content, 1);
	this.mediumContent.appendChild(this.innerContent);
	
	/*<? if ($cfg->events) : ?>s*/
	hs.fireEvent(this, 'onAfterGetContent');
	/*<? endif ?>s*/
	
	hs.setStyles (this.innerContent, { position: 'relative', display: 'block' });
	if (this.width) this.innerContent.style.width = this.width+'px';
	if (this.height) this.innerContent.style.height = this.height+'px';
	if (this.innerContent.offsetWidth < this.minWidth)
		this.innerContent.style.width = this.minWidth +'px';
	
    /*<? if ($cfg->ajax) : ?>*/
	if (this.objectType == 'ajax' && !hs.getCacheBinding(this.a)) {
		this.showLoading();
    	var ajax = new hs.Ajax(this.a, this.innerContent);
    	var exp = this;
    	ajax.onLoad = function () {	if (hs.expanders[exp.key]) exp.contentLoaded(); };
    	ajax.onError = function () { location.href = exp.src; };
    	ajax.run();
	}
    else 
    /*<? endif ?>s*/
    /*<? if ($cfg->iframe) : ?>*/
    if (this.objectType == 'iframe' && this.objectLoadTime == 'before') {
		this.writeExtendedContent();
	}
    else 
    /*<? endif ?>s*/
    	this.contentLoaded();
},
/*<? endif ?>*/
contentLoaded : function() {
	try {	
		if (!this.content) return;
		this.content.onload = null; /// IE6 memory leak
		if (this.onLoadStarted) return; /// old Gecko loop
		else this.onLoadStarted = true;
		
		var x = this.x, y = this.y;
		
		if (this.loading) {
			hs.setStyles(this.loading, { left: '-9999px', top: '-9999px' });
			this.loading = null;
			/*<? if ($cfg->events) : ?>s*/
			hs.fireEvent(this, 'onHideLoading');	
			/*<? endif ?>s*/
		}
		this.marginBottom = hs.marginBottom;
		/*<? if ($cfg->html) : ?>s*/
		if (this.isImage) {		
			/*<? endif ?>s*/	
			x.full = this.content.width;
			y.full = this.content.height;
			
			hs.setStyles(this.content, {
				width: this.x.t +'px',
				height: this.y.t +'px'
			});
			/*<? if ($cfg->html) : ?>s*/
		} else if (this.htmlGetSize) this.htmlGetSize();
		/*<? endif ?>s*/
		
		this.wrapper.appendChild(this.content);
		this.content.style.position = 'relative'; // Saf 
		hs.setStyles (this.wrapper, {
			left: this.x.tpos +'px',
			top: this.y.tpos +'px'
		});
		hs.container.appendChild(this.wrapper);
		
		// correct for borders
		x.cb = (this.content.offsetWidth - this.x.t) / 2; /// content border
		y.cb = (this.content.offsetHeight - this.y.t) / 2;
		var modMarginRight = hs.marginRight + 2 * x.cb;
		this.marginBottom += 2 * y.cb;
		
		/*<? if ($cfg->overlays) : ?>*/
		/// apply overlays	
		this.getOverlays();
		/*<? if ($cfg->slideshow) : ?>s*/
		this.initSlideshow();
		/*<? endif ?>s*/
		/*<? endif ?>s*/
		
		var ratio = x.full / y.full;
		var minWidth = /*<? if ($cfg->autosize) : ?>*/this.allowSizeReduction 
			? this.minWidth : /*<? endif ?>*/x.full;
		var minHeight = /*<? if ($cfg->autosize) : ?>*/this.allowSizeReduction 
			? this.minHeight : /*<? endif ?>*/y.full;
		
		var justify = { x: 'auto', y: 'auto' };
		/*<? if ($cfg->positioning) : ?>*/
		if (this.align == 'center') {
			justify.x = 'center';
			justify.y = 'center';
		} else {
			if (this.anchor.match(/^top/)) justify.y = null;
			if (this.anchor.match(/right$/)) justify.x = 'max';
			if (this.anchor.match(/^bottom/)) justify.y = 'max';
			if (this.anchor.match(/left$/)) justify.x = null;
		}
		/*<? endif ?>*/
		var page = hs.getPageSize();
		
		// justify
		x.min = x.tpos - x.cb + x.tb;
		x.span = Math.min(x.full, this.maxWidth || x.full);
		x.minSpan = Math.min(x.full, minWidth);
		/*<? if ($cfg->positioning) : ?>s*/
		x.justify = justify.x;
		x.target = this.targetX;
		/*<? endif ?>s*/
		x.marginMin = hs.marginLeft; 
		x.marginMax = modMarginRight;
		x.scroll = page.scrollLeft;
		x.clientSpan = page.width;
		this.justify(x);
		
		
		y.min = y.tpos - y.cb + y.tb;
		y.span = Math.min(y.full, this.maxHeight || y.full);
		y.minSpan = Math.min(y.full, minHeight);
		/*<? if ($cfg->positioning) : ?>s*/
		y.justify = justify.y;
		y.target = this.targetY;
		/*<? endif ?>s*/
		y.marginMin = hs.marginTop; 
		y.marginMax = this.marginBottom; 
		y.scroll = page.scrollTop;
		y.clientSpan = page.height;
		this.justify(y);
		
		/*<? if ($cfg->html) : ?>s*/
		if (this.isHtml) this.htmlSizeOperations();
		/*<? endif ?>s*/
		/*<? if ($cfg->overlays) : ?>s*/
		if (this.overlayBox) this.sizeOverlayBox(0, 1);
		/*<? endif ?>s*/
		
		/*<? if ($cfg->autosize) : ?>*/
		if (this.allowSizeReduction) {
			/*<? if ($cfg->html) : ?>s*/
			if (this.isImage) 
			/*<? endif ?>s*/
				this.correctRatio(ratio);
			
			/*<? if ($cfg->slideshow) : ?>s*/
			var ss = this.slideshow;
			if (ss && this.last && ss.fixedControls && ss.useControls) {
				var pos = ss.overlayOptions.position || '';
				for (var dim in hs.oPos) for (var i = 0; i < 5; i++) {
					if (pos.match(hs.oPos[dim][i]))
						this[dim].min = this.last[dim].min 
							+ (this.last[dim].p1 - this[dim].p1)
							+ (this.last[dim].span - this[dim].span) * [0, 0, .5, 1, 1][i]  
				}
			}
			/*<? endif ?>s*/
			
			if (this.isImage && this.x.full > this.x.span) this.createFullExpand();
		}
		/*<? endif ?>s*/
		
		this.show();
		
	} catch (e) {
		/*<? if ($debug) {
		echo "console.error(e.message); return;";
		} ?>s*/
		window.location.href = this.src;
	}
},
/*<? if ($cfg->html) : ?>*/
/*<? if ($cfg->iframe || $cfg->flash) : ?>*/
setObjContainerSize : function(parent, auto) {
	var c = hs.getElementByClass(parent, 'DIV', 'highslide-body');
	/*<? if ($cfg->iframe) : ?>*/
	if (this.objectType == 'iframe') {
		if (this.objectWidth) c.style.width = this.objectWidth +'px';
		if (this.objectHeight) c.style.height = this.objectHeight +'px';
	}
	/*<? endif ?>s*/
	/*<? if ($cfg->flash) : ?>s*/
	if (this.swfObject) {
		c.style.width = this.swfObject.width +'px';
		c.style.height = this.swfObject.height +'px';
	}
	/*<? endif ?>s*/
},

writeExtendedContent : function () {
	if (this.hasExtendedContent) return;
	var exp = this;
	this.body = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
	if (this.objectType == 'iframe') {
		this.showLoading();
		var ruler = hs.clearing.cloneNode(1);
		this.body.appendChild(ruler);
		this.newWidth = this.innerContent.offsetWidth;
		if (!this.objectWidth) this.objectWidth = ruler.offsetWidth;
		var hDiff = this.innerContent.offsetHeight - this.body.offsetHeight,
			h = this.objectHeight || (hs.getPageSize()).height - hDiff - hs.marginTop - hs.marginBottom,
			onload = this.objectLoadTime == 'before' ? 
				' onload="if (hs.expanders['+ this.key +']) hs.expanders['+ this.key +'].contentLoaded()" ' : '';
		
		this.body.innerHTML += '<iframe name="hs'+ (new Date()).getTime() +'" frameborder="0" key="'+ this.key +'" '
			+' allowtransparency="true" style="width:'+ this.objectWidth +'px; height:'+ h +'px" '
			+ onload +' src="'+ this.src +'"></iframe>';
		this.ruler = this.body.getElementsByTagName('div')[0];
		this.iframe = this.body.getElementsByTagName('iframe')[0];
		
		if (this.objectLoadTime == 'after') this.correctIframeSize();
		
	} else if (this.swfObject) {
		this.body.id = this.body.id || 'hs-flash-id-' + this.key;
		var a = this.swfObject;
		if (swfobject) swfobject.embedSWF(a.swfUrl, this.body.id, a.width, a.height, a.version, 
			a.expressInstallSwfurl, a.flashvars, a.params, a.attributes);	
	}
	this.hasExtendedContent = true;
},
/*<? endif ?>s*/
htmlGetSize : function() {
	/*<? if ($cfg->iframe) : ?>s*/
	if (this.iframe && !this.objectHeight) { // loadtime before
		var h;
		try {
			var doc = this.iframe.contentDocument || this.iframe.contentWindow.document;
			var clearing = doc.createElement('div');
			clearing.style.clear = 'both';
			doc.body.appendChild(clearing);
			h = clearing.offsetTop;
			if (hs.ie) h += parseInt(doc.body.currentStyle.marginTop) 
				+ parseInt(doc.body.currentStyle.marginBottom) - 1;

		} catch (e) { // other domain
			h = 300;
		}
		this.iframe.style.height = this.body.style.height = h +'px';
	}
	/*<? endif ?>s*/
	this.innerContent.appendChild(hs.clearing);
	if (!this.x.full) this.x.full = this.innerContent.offsetWidth;
    this.y.full = this.innerContent.offsetHeight;
    this.innerContent.removeChild(hs.clearing);
    if (hs.ie && this.newHeight > parseInt(this.innerContent.currentStyle.height)) { // ie css bug
		this.newHeight = parseInt(this.innerContent.currentStyle.height);
	}
	/// restore original wrapper styles
	hs.setStyles( this.wrapper, { position: 'absolute',	padding: '0'});
	hs.setStyles( this.content, { width: this.x.t +'px',	height: this.y.t +'px'});
},
/*<? if ($cfg->iframe) : ?>*/
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
/*<? endif ?>s*/
htmlSizeOperations : function () {
	/*<? if ($cfg->iframe || $cfg->flash) : ?>*/
	this.setObjContainerSize(this.innerContent);
	/*<? endif ?>*/
	/*<? if ($cfg->flash) : ?>*/
	if (this.swfObject && this.objectLoadTime == 'before') this.writeExtendedContent();	
	/*<? endif ?>*/
    // handle minimum size
    if (this.x.span < this.x.full && !this.allowWidthReduction) this.x.span = this.x.full;
    if (this.y.span < this.y.full && !this.allowHeightReduction) this.y.span = this.y.full;
    this.scrollerDiv = this.innerContent;
    hs.setStyles(this.mediumContent, { 
		width: this.x.span +'px',
		position: 'relative',
		left: (this.x.min - this.x.tpos) +'px',
		top: (this.y.min - this.y.tpos) +'px'
	});
    hs.setStyles(this.innerContent, { 
    	border: 'none', 
    	width: 'auto', 
    	height: 'auto'
    });
	var node = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
    if (node 
    	/*<? if ($cfg->iframe || $cfg->flash) : ?>s*/ && !this.swfObject && this.objectType != 'iframe'
    	 /*<? endif ?>s*/) {
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
	
	/*<? if ($cfg->iframe) : ?>s*/
    if (this.iframe && this.objectLoadTime == 'before') this.correctIframeSize();
    /*<? endif ?>s*/
    if (!this.scrollingContent && this.y.span < this.mediumContent.offsetHeight) this.scrollerDiv = this.content;
	
	if (this.scrollerDiv == this.content && !this.allowWidthReduction && this.objectType != 'iframe') {
		this.x.span += 17; // room for scrollbars
	}
	if (this.scrollerDiv && this.scrollerDiv.offsetHeight > this.scrollerDiv.parentNode.offsetHeight) {
		setTimeout("try { hs.expanders["+ this.key +"].scrollerDiv.style.overflow = 'auto'; } catch(e) {}",
			 hs.expandDuration);
	}
},
/*<? endif ?>*/
/*<? if ($cfg->imagemap) : ?>s*/
getImageMapAreaCorrection : function(area) {
	var c = area.coords.split(',');
	for (var i = 0; i < c.length; i++) c[i] = parseInt(c[i]);
	
	if (area.shape.toLowerCase() == 'circle') {
		this.x.tpos += c[0] - c[2];
		this.y.tpos += c[1] - c[2];
		this.x.t = this.y.t = 2 * c[2];
	} else { /// rect, poly
		var maxX, maxY, minX = maxX = c[0], minY = maxY = c[1];
		for (var i = 0; i < c.length; i++) {
			if (i % 2 == 0) {
				minX = Math.min(minX, c[i]);
				maxX = Math.max(maxX, c[i]);
			} else {
				minY = Math.min(minY, c[i]);
				maxY = Math.max(maxY, c[i]);
			}
		}
		this.x.tpos += minX;
		this.x.t = maxX - minX;
		this.y.tpos += minY;
		this.y.t = maxY - minY;
	}
},
/*<? endif ?>s*/
justify : function (p, moveOnly) {
	var tgt, dim = p == this.x ? 'x' : 'y';
	
	/*<? if ($cfg->positioning) : ?>*/
	if (p.target && p.target.match(/ /)) {
		tgt = p.target.split(' ');
		p.target = tgt[0];
	}
	if (p.target && hs.$(p.target)) {
		p.min = hs.getPosition(hs.$(p.target))[dim];
		if (tgt && tgt[1] && tgt[1].match(/^[-]?[0-9]+px$/)) p.min += parseInt(tgt[1]);
		
	} else if (p.justify == 'auto' || p.justify == 'center') {
	/*<? endif ?>*/
		var hasMovedMin = false;
		/*<? if ($cfg->autosize) : ?>*/
		var allowReduce = true;
		/*<? endif ?>*/
		
		/// 1) get the initial left offset
		/*<? if ($cfg->positioning) : ?>s*/
		if (p.justify == 'center') p.min = Math.round(p.scroll + (p.clientSpan - p.span - p.marginMax
			/*<? if ($cfg->overlays) : ?>s*/ - p.p1 - p.p2/*<? endif ?>*/) / 2);
		else
		/*<? endif ?>s*/
			p.min = Math.round(p.min - ((p.span 
			/*<? if ($cfg->overlays) : ?>s*/ + p.p1 + p.p2/*<? endif ?>*/ - p.t) / 2)); /// auto
		
		/// 2) if left offset is now outside the viewport, correct it
		if (p.min < p.scroll + p.marginMin) {
			p.min = p.scroll + p.marginMin;
			hasMovedMin = true;		
		}
	
		/*<? if ($cfg->autosize) : ?>*/
		/// 3) if the width is now less than the minimum allowed width, 
		/// correct it and disallow further reduction 
		if (!moveOnly && p.span < p.minSpan) {
			p.span = p.minSpan;
			allowReduce = false;
		}
		/*<? endif ?>*/
		
		/// 4) if right side is now to the right of the viewport get new width 
		/// and new left 
		if (p.min + p.span/*<? if ($cfg->overlays) : ?>s*/ + p.p1 + p.p2
				/*<? endif ?>s*/ > p.scroll + p.clientSpan - p.marginMax) {
			/// a) if left offset has been moved in #2 and further size reduction is allowed,
			/// set the width to the full available width of the viewport
			if (!moveOnly && hasMovedMin/*<? if ($cfg->autosize) : ?>*/ && allowReduce/*<? endif ?>*/) {
				/*<? if ($cfg->autosize) : ?>s*/
				p.span = p.clientSpan - p.marginMin - p.marginMax; // can't expand more
				/*<? endif ?>s*/
				
			/// b) else if the slide is neither moved to the left nor reduced in width,
			/// simply move the slide to the left to align with the right of the viewport
			} else if (p.span/*<? if ($cfg->overlays) : ?>s*/ + p.p1 + p.p2
				/*<? endif ?>s*/ < p.clientSpan - p.marginMin - p.marginMax) { // move newTop up
				p.min = p.scroll + p.clientSpan - p.span - p.marginMin - p.marginMax
					/*<? if ($cfg->overlays) : ?>s*/ - p.p1 - p.p2/*<? endif ?>*/;
				
			/// c) if the slide is still larger than the viewport, align it left and fit the width
			} else { // image larger than viewport
				p.min = p.scroll + p.marginMin;
				/*<? if ($cfg->autosize) : ?>s*/
				if (!moveOnly && allowReduce) p.span = p.clientSpan - p.marginMin - p.marginMax;
				/*<? endif ?>s*/
			}
			
		}
		/// 5) if in 4a) the width was reduced too much, increase it again
		/*<? if ($cfg->autosize) : ?>*/
		if (!moveOnly && p.span < p.minSpan) {
			p.span = p.minSpan;
			allowReduce = false;
		}
		/*<? endif ?>*/
	/*<? if ($cfg->positioning) : ?>*/
	} else if (p.justify == 'max') {
		p.min = Math.floor(p.min - p.span + p.t);
	}
	/*<? endif ?>*/
		
	if (p.min < p.marginMin) {
		tmpMin = p.min;
		p.min = p.marginMin; 
		/*<? if ($cfg->autosize) : ?>*/
		if (allowReduce && !moveOnly) p.span = p.span - (p.min - tmpMin);
		/*<? endif ?>*/
	}
},
/*<? if ($cfg->autosize) : ?>*/
correctRatio : function(ratio) {
	var x = this.x, y = this.y;
	var changed = false;
	if (x.span / y.span > ratio) { // width greater
		x.span = y.span * ratio;
		if (x.span < x.minSpan) { // below minWidth
			x.span = x.minSpan;
			y.span = x.span / ratio;
		}
		changed = true;
	
	} else if (x.span / y.span < ratio) { // height greater
		var tmpHeight = y.span;
		y.span = x.span / ratio;
		changed = true;
	}
	/*<? if ($cfg->overlays) : ?>s*/
	/// make place for dynamic-height overlays positioned above and below
	
	if (this.overlayBox) {
		while (y.span > this.minHeight && x.span > this.minWidth 
				&& y.marginMin + y.p1 + y.span + y.p2 + y.marginMax > y.clientSpan) {
			var o;
			y.span -= 10;
			x.span = y.span * ratio;
			this.sizeOverlayBox(0, 1);
		}
	}
	
	/*<? endif ?>s*/
	if (changed) {
		x.min = x.tpos - x.cb + x.tb;
		x.minSpan = x.span;
		this.justify(x, true);
		
		y.min = y.tpos - y.cb + y.tb;
		y.minSpan = y.span;
		this.justify(y, true);
		this.sizeOverlayBox();
	}
},
/*<? if ($cfg->html && $cfg->positioning) : ?>*/
reflow : function () {
	hs.setStyles(this.scrollerDiv, { height: 'auto', width: 'auto' });
	this.x.span = this.innerContent.offsetWidth;
	this.y.span = this.innerContent.offsetHeight;
	var size = { width: this.x.span +'px', height: this.y.span +'px' };
	hs.setStyles(this.content, size);
	/*<? if ($cfg->outlines) : ?>s*/
	if (this.outline) this.outline.setPosition(this);
	/*<? endif ?>s*/
},
/*<? endif // html && positioning ?>s*/
/*<? endif // autosize ?>*/
show : function () {
	/*<? if ($cfg->hideelements) : ?>*/
	// Selectbox bug
	var imgPos = {x: this.x.min - 20, y: this.y.min - 20, w: this.x.span + 40, 
		h: this.y.span + 40 };
	hs.hideSelects = (hs.ie && hs.ieVersion() < 7);
	if (hs.hideSelects) this.showHideElements('SELECT', 'hidden', imgPos);
	// Iframes bug
	hs.hideIframes = ((window.opera && navigator.appVersion < 9) || navigator.vendor == 'KDE' 
		|| (hs.ie && hs.ieVersion() < 5.5));
	if (hs.hideIframes) this.showHideElements('IFRAME', 'hidden', imgPos);
	// Scrollbars bug
	if (hs.geckoMac) this.showHideElements('*', 'hidden', imgPos); 
	/*<? endif ?>*/
	/*<? if ($cfg->events) : ?>*/
	hs.fireEvent(this, 'onBeforeExpand');
	/*<? endif ?>s*/
	/*<? if ($cfg->overlays) : ?>s*/
	var exp = this;
	hs.addEventListener(this.wrapper, 'mouseover', function() {
		exp.mouseIsOver = true;
	});
	hs.addEventListener(this.wrapper, 'mouseout', function() {
		exp.mouseIsOver = false;
	});
	/*<? endif ?>s*/
	// Apply size change
	this.changeSize(
		1,
		{ 
			xmin: this.x.tpos + this.x.tb - this.x.cb,
			ymin: this.y.tpos + this.y.tb - this.y.cb,
			xspan: this.x.t,
			yspan: this.y.t
			/*<? if ($cfg->overlays): ?>s*/,
			xp1: 0,
			xp2: 0,
			yp1: 0,
			yp2: 0
			/*<? endif ?>s*/
			/*<? if ($cfg->outlines) : ?>s*/,
			o: hs.outlineStartOffset
			/*<? endif ?>s*/
		},
		{
			xmin: this.x.min,
			ymin: this.y.min,
			xspan: this.x.span,
			yspan: this.y.span
			/*<? if ($cfg->overlays): ?>s*/,
			xp1: this.x.p1,
			yp1: this.y.p1,
			xp2: this.x.p2,
			yp2: this.y.p2
			/*<? endif ?>s*/
			/*<? if ($cfg->outlines) : ?>s*/,
			o: this.outline ? this.outline.offset : 0
			/*<? endif ?>s*/
		},
		hs.expandDuration,
		hs.expandSteps
	);
},

changeSize : function(up, from, to, dur, steps) {
	/*<? if ($cfg->transitions) : ?>s*/
	// transition
	var trans = this.transitions,
	other = up ? (this.last ? this.last.a : null) : hs.upcoming,
	t = (trans[1] && other 
			&& hs.getParam(other, 'transitions')[1] == trans[1]) ?
		trans[1] : trans[0];
		
	/*<? if ($cfg->html) : ?>*/
	/// crossfading not yet implemented for HTML
	if (this.isHtml && this.transitions[1] == 'crossfade') this.transitions[1] = 'fade';
	/*<? endif ?>*/
	if (this[t] && t != 'expand') {
		this[t](up, from, to); 
		return;
	}
	if (up) hs.setStyles(this.wrapper, { opacity: 1 });
	/*<? endif ?>s*/
	/*<? if ($cfg->outlines) : ?>*/
	if (this.outline && !this.outlineWhileAnimating) {
		if (up) this.outline.setPosition(this);
		else this.outline.destroy(
				/*<? if ($cfg->html) : ?>s*/
				(this.isHtml && this.preserveContent)
				/*<? endif ?>s*/);
	}		
	/*<? endif ?>s*/	
	/*<? if ($cfg->overlays) : ?>*/		
	if (!up) { // remove children
		var n = this.wrapper.childNodes.length;
		for (var i = n - 1; i >= 0 ; i--) {
			var child = this.wrapper.childNodes[i];
			if (child != this.content) hs.discardElement(child);
		}
	}
	/*<? endif ?>s*/
		
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
			
			for (var x in from) {
				size[x] = easing(t, from[x], to[x] - from[x], dur);
				if (!/^op$/.test(x)) size[x] = Math.round(size[x]); /// breaks on decimals
			}
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
		/*<? if ($cfg->outlines) : ?>*/	
		setTimeout(function() {
			if (exp.outline) exp.outline.table.style.visibility = "visible";
		}, t);
		/*<? endif ?>s*/
		setTimeout(function() {
			exp.afterExpand();
		}, t + 50);
	}
	else setTimeout(function() { exp.afterClose(); }, t);
		
},

setSize : function (to) {
	try {		
		if (to.op) hs.setStyles(this.wrapper, { opacity: to.op });
		hs.setStyles ( this.wrapper, {
			width : (to.xspan + /*<? if ($cfg->overlays) : ?>s*/to.xp1 + to.xp2 + /*<? endif ?>s*/
				2 * this.x.cb) +'px',
			height : (to.yspan + /*<? if ($cfg->overlays) : ?>s*/to.yp1 + to.yp2 + /*<? endif ?>s*/
				2 * this.y.cb) +'px',
			left: to.xmin +'px',
			top: to.ymin +'px'
		});
		hs.setStyles(this.content, {
			/*<? if ($cfg->overlays) : ?>s*/
			top: to.yp1 +'px',
			left: to.xp1 +'px',
			/*<? endif ?>s*/
			width: to.xspan +'px',
			height: to.yspan +'px'
		});
		
		/*<? if ($cfg->html) : ?>s*/
		/// Keep the medium content fixed
		if (this.isHtml) {
			hs.setStyles(this.mediumContent, { 
				left: (this.x.min - to.xmin/*<? if ($cfg->overlays) : ?>s*/ 
					+ this.x.p1 - to.xp1/*<? endif ?>s*/) +'px',
				top: (this.y.min - to.ymin/*<? if ($cfg->overlays) : ?>s*/ 
					+ this.y.p1 - to.yp1/*<? endif ?>s*/) +'px' 
			});			
			this.innerContent.style.visibility = 'visible';
		} 
		/*<? endif ?>s*/
		/*<? if ($cfg->outlines) : ?>*/
		if (this.outline && this.outlineWhileAnimating) {
			var o = this.outline.offset - to.o;
			this.outline.setPosition(this, {
				x: to.xmin + o, 
				y: to.ymin + o, 
				w: to.xspan /*<? if ($cfg->overlays) : ?>s*/ + to.xp1 + to.xp2 + /*<? endif ?>s*/ - 2 * o, 
				h: to.yspan /*<? if ($cfg->overlays) : ?>s*/ + to.yp1 + to.yp2 + /*<? endif ?>s*/ - 2 * o
			}, 1);
		}
		/*<? endif ?>*/	
		this.wrapper.style.visibility = 'visible';
		
	} catch (e) { 
		/*<? if ($debug) {
		echo "console.error(e.message); return;";
		} ?>s*/
		window.location.href = this.src;	
	}
},
/*<? if ($cfg->transitions) : ?>*/
fade : function(up, from, to) {
	/*<? if ($cfg->outlines) : ?>s*/
	this.outlineWhileAnimating = false;
	/*<? endif ?>s*/
	var exp = this,	t = up ? 250 : 0;
	
	if (up) {
		hs.setStyles(this.wrapper, { opacity: 0 });
		this.setSize(to);
		this.content.style.visibility = 'visible';

		hs.fade (this.wrapper, 0, 1);
	}
	/*<? if ($cfg->outlines) : ?>*/
	if (this.outline) {
		this.outline.table.style.zIndex = this.wrapper.style.zIndex;
		var dir = up || -1;
		for (var i = from.o; dir * i <= dir * to.o; i += dir, t += 25) {
			(function() {
				var o = up ? to.o - i : from.o - i;
				setTimeout(function() {
					exp.outline.setPosition(exp, {
						x: (exp.x.min + o), 
						y: (exp.y.min + o),
						w: (exp.x.span - 2 * o), 
						h: (exp.y.span - 2 * o)
					}, 1);
				}, t);
			})();
		}
	}
	/*<? endif ?>*/
	
	if (up) setTimeout(function() { exp.afterExpand(); }, t+50);
	else {
		setTimeout( function() {
			/*<? if ($cfg->outlines) : ?>s*/
			if (exp.outline) exp.outline.destroy(exp.preserveContent);
			/*<? endif ?>s*/
			hs.fade (exp.wrapper, 1, 0);
			setTimeout( function() {
				exp.afterClose();
			}, 250);
		}, t);		
	}
},

crossfade : function (up, from, to) {
	if (!up) return;
	var exp = this, steps = parseInt(hs.transitionDuration / 25), last = this.last;
	
	/*<? if ($cfg->dragging) : ?>s*/
	hs.removeEventListener(document, 'mousemove', hs.dragHandler);
	/*<? endif ?>s*/
	
	hs.setStyles(this.content, { 
		width: to.xspan +'px', 
		height: to.yspan +'px'		
	});
	/*<? if ($cfg->outlines) : ?>s*/
	this.outline = this.last.outline;
	this.last.outline = null;
	/*<? endif ?>s*/
	
	/// dummy borders
	this.fadeBox = hs.createElement('div', 
		{ className: 'highslide-image' },
		{ 
			position: 'absolute', 
			zIndex: 4,
			overflow: 'hidden',
			display: 'none'
		}
	);
	
	/// append oldImg and newImg
	var names = { oldImg: last, newImg: this };
	for (var x in names) { 	
		this[x] = names[x].content.cloneNode(1);
		hs.setStyles(this[x], {
			position: 'absolute',
			border: 0,
			visibility: 'visible'
		});
		this.fadeBox.appendChild(this[x]);
	}
	this.wrapper.appendChild(this.fadeBox);
	
	from = { /// redefine to expand from previous slide
		xmin: last.x.min,
		xspan: last.x.span,
		xp1: last.x.p1,
		xp2: last.x.p2,
		ymin: last.y.min,
		yspan: last.y.span,
		yp1: last.y.p1,
		yp2: last.y.p2,
		o: 1 / steps
	};
	
	to.yspan = this.y.span;
	to.o = 1;
	var t, easing = Math.easeInOutQuad;
	
	this.crossfadeStep(from); /// initial position	
	
	/// flickers in FF2/Win if not set in a timeout, not in FF3.
	/// IE7 flickers if timeout is present
	function prep() { 
		/*<? if ($cfg->overlays) : ?>s*/
		if (exp.overlayBox) {
			exp.wrapper.appendChild(exp.overlayBox);
				
			for (var i = 0; i < exp.last.overlays.length; i++) {
				var oDiv = hs.$('hsId'+ exp.last.overlays[i]);
				if (oDiv.reuse === exp.key) exp.overlayBox.appendChild(oDiv);
				else hs.fade(oDiv, oDiv.opacity, 0); /// fade out
			}
		}			
		/*<? endif ?>s*/
		exp.fadeBox.style.display = '';
		exp.last.content.style.display = 'none';
	};
	if (/rv:1\.[0-8].+Gecko/.test(navigator.userAgent)) setTimeout(prep, 0);
	else prep();
	
	for (var i = 1; i <= steps; i++) {
		t = Math.round(i * (hs.transitionDuration / steps));
		
		(function(){
			var size = {}, pI = i;
			for (var x in from)	{
				var val = easing(t, from[x], to[x] - from[x], hs.transitionDuration);
				size[x] = (x != 'o') ? Math.round(val) : val;
			}
			
			setTimeout ( function() {
				exp.crossfadeStep(size);
			}, t);				
		})();
	}
	setTimeout ( function () {
		exp.crossfadeEnd();
	}, t + 100);

},

crossfadeStep : function (size) {
	try {
		if (this.outline) this.outline.setPosition(this, { 
			x: size.xmin, 
			y: size.ymin, 
			w: size.xspan + size.xp1 + size.xp2, 
			h: size.yspan + size.yp1 + size.yp2
		}, 1);
		
		/// Clip the last wrapper without moving it		
		this.last.wrapper.style.clip = 'rect('
			+ (size.ymin - this.last.y.min)+'px, ' /// top
			+ (size.xspan + size.xp1 + size.xp2 + 2 * this.last.x.cb + size.xmin - this.last.x.min) +'px, ' /// right
			+ (size.yspan + size.yp1 + size.yp2 + 2 * this.last.y.cb + size.ymin - this.last.y.min) +'px, ' /// bottom
			+ (size.xmin - this.last.x.min)+'px)'; /// left
			
		hs.setStyles(this.content, {
			top: size.yp1 +'px',
			left: size.xp1 +'px',
			marginTop: (this.y.min - size.ymin) +'px',
			marginLeft: (this.x.min - size.xmin) +'px'
		});
		
		hs.setStyles(this.wrapper, {
			top: size.ymin +'px',
			left: size.xmin +'px',
			width: (size.xp1 + size.xp2 + size.xspan + 2 * this.x.cb)+ 'px',
			height: (size.yp1 + size.yp2 + size.yspan + 2 * this.y.cb) + 'px'
		});
			
		hs.setStyles(this.fadeBox, {
			width: size.xspan + 'px',
			height: size.yspan +'px',
			left: size.xp1 +'px',
			top: size.yp1 +'px',
			visibility: 'visible'
		});
		
		hs.setStyles(this.oldImg, {
			top: (this.last.y.min - size.ymin + this.last.y.p1 - size.yp1)+'px',
			left: (this.last.x.min - size.xmin + this.last.x.p1 - size.xp1)+'px'
		});		
		
		hs.setStyles(this.newImg, {
			opacity: size.o,
			top: (this.y.min - size.ymin + this.y.p1 - size.yp1) +'px',
			left: (this.x.min - size.xmin + this.x.p1 - size.xp1) +'px'
		});
		/*<? if ($cfg->overlays) : ?>s*/
		hs.setStyles(this.overlayBox, {
			width: size.xspan + 'px',
			height: size.yspan +'px',
			left: (size.xp1 + this.x.cb)  +'px',
			top: (size.yp1 + this.y.cb) +'px'
		});
		/*<? endif ?>s*/
	} catch (e) {}
},
crossfadeEnd : function() {
	this.wrapper.style.background = this.wrapperBG || '';
	
	this.wrapper.style.visibility = this.content.style.visibility = 'visible';
	this.fadeBox.style.display = 'none';
	this.a.className += ' highslide-active-anchor';
	this.afterExpand();
	this.last.afterClose();
},

/// When crossfading, reuse shared overlays
reuseOverlay : function(o, el) {
	if (!this.last) return false;
	for (var i = 0; i < this.last.overlays.length; i++) {
		var oDiv = hs.$('hsId'+ this.last.overlays[i]);
		if (oDiv && oDiv.hsId == o.hsId) {
			this.genOverlayBox();
			oDiv.reuse = this.key;
			hs.push(this.overlays, this.last.overlays[i]);
			return true;
		}
	}
	return false;
},
/*<? endif ?>*/

afterExpand : function() {
	this.isExpanded = true;	
	this.focus();
	/*<? if ($cfg->iframe || $cfg->flash) : ?>*/
	if (this.isHtml && this.objectLoadTime == 'after') this.writeExtendedContent();
	/*<? endif ?>s*/
	/*<? if ($cfg->html) : ?>*/
	if (this.isHtml) {
		/*<? if ($cfg->iframe) : ?>s*/
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
		/*<? endif ?>s*/
	}	
	/*<? endif ?>s*/
	/*<? if ($cfg->transitions) : ?>s*/
	
	if (this.dimmingOpacity) hs.dim(this);
	if (hs.upcoming && hs.upcoming == this.a) hs.upcoming = null;
	/*<? endif ?>s*/
	/*<? if ($cfg->outlines) : ?>s*/
	/*if (!this.caption) */this.prepareNextOutline();
	/*<? endif ?>s*/
	
	/*<? if ($cfg->events) : ?>s*/
	/*if (!this.caption) */hs.fireEvent(this, 'onAfterExpand');
	/*<? endif ?>s*/
	
	/*<? if ($cfg->overlays) : ?>*/
	if (this.overlayBox) this.showOverlays();
	/*<? endif ?>s*/
	
},

/*<? if ($cfg->outlines) : ?>*/
prepareNextOutline : function() {
	var key = this.key;
	var outlineType = this.outlineType;
	new hs.Outline(outlineType
		/*<? if ($cfg->preloading) : ?>s*/, 
		function () { try { hs.expanders[key].preloadNext(); } catch (e) {} } 
		/*<? endif ?>s*/);
},
/*<? endif ?>*/
/*<? if ($cfg->preloading) : ?>*/
preloadNext : function() {
	var next = this.getAdjacentAnchor(1);
	if (next && next.onclick.toString().match(/hs\.expand/)) 
		var img = hs.createElement('img', { src: hs.getSrc(next) });
},
/*<? endif ?>*/
/*<? if ($cfg->navigation || $cfg->preloading) : ?>*/
getAdjacentAnchor : function(op) {
	var current = this.getAnchorIndex(), as = hs.anchors.groups[this.slideshowGroup || 'none'];
	
	/*< ? if ($cfg->slideshow) : ?>s*/
	if (!as[current + op] && this.slideshow && this.slideshow.repeat) {
		if (op == 1) return as[0];
		else if (op == -1) return as[as.length-1];
	}
	/*< ? endif ?>s*/
	return as[current + op] || null;
},

getAnchorIndex : function() {
	var arr = hs.anchors.groups[this.slideshowGroup || 'none'];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == this.a) return i; 
	}
	return null;
},
/*<? endif ?>*/
/*<? if ($cfg->slideshow) : ?>*/
getNumber : function() {
	var arr = hs.anchors.groups[this.slideshowGroup || 'none'];
	var s = hs.lang.number.replace('%1', this.getAnchorIndex() + 1).replace('%2', arr.length);
	/// prepend to caption or heading
	if (this[this.numberPosition]) this[this.numberPosition].innerHTML = 
		s + '<div class="highslide-number">'+ this[this.numberPosition].innerHTML +'</div>';
},
initSlideshow : function() {
	/// when crossfading this method is called at the beginning of the fade,
	/// so skip it in the end (same with credits and general overlays)
	if (this.slideshow) return;
	
	if (!this.last) {/// opened from thumb	
		for (var i = 0; i < hs.slideshows.length; i++) {
			var ss = hs.slideshows[i], sg = ss.slideshowGroup;
			if (sg === this.slideshowGroup) {
				this.slideshow = new hs.Slideshow(ss);
			}
		} 
	} else {/// opened subsequently, always the same slideshowGroup
		this.slideshow = this.last.slideshow;
	}
	var ss = this.slideshow;
	if (!ss) return;
	var exp = ss.exp = this;
	
	ss.checkFirstAndLast();
	
	if (ss.useControls) {
		var o = ss.overlayOptions || {};
		o.overlayId = ss.controls;
		o.hsId = 'controls';
		this.createOverlay(o);
	}
	
	/// start slidehow initially
	if (!this.last && this.autoplay) ss.play(true);
	
	/// if autoplay, proceed with the slideshow
	if (ss.autoplay) {
		ss.autoplay = setTimeout(function() {
			hs.next(exp.key);
		}, (ss.interval || 500));
	}
},
/*<? endif ?>*/
cancelLoading : function() {	
	hs.expanders[this.key] = null;
	/*<? if ($cfg->transitions) : ?>s*/
	if (hs.upcoming == this.a) hs.upcoming = null;
	hs.undim();
	/*<? endif ?>s*/
	if (this.loading) hs.loading.style.left = '-9999px';
	/*<? if ($cfg->events) : ?>s*/
	hs.fireEvent(this, 'onHideLoading');	
	/*<? endif ?>s*/
},
/*<? if ($cfg->overlays) : ?>*/
writeCredits : function () {
	/*<? if ($cfg->slideshow) : ?>s*/
	if (this.credits) return;
	/*<? endif ?>s*/
	this.credits = hs.createElement('a',
		{
			href: hs.creditsHref,
			className: 'highslide-credits',
			innerHTML: hs.lang.creditsText,
			title: hs.lang.creditsTitle
		}
	);
	this.createOverlay({ 
		overlayId: this.credits, 
		position: 'top left' 
		/*<? if ($cfg->slideshow) : ?>s*/, 
		hsId: 'credits'
		/*<? endif ?>s*/ 
	});
},
/*<? endif ?>s*/
/*<? if ($cfg->templating) : ?>*/
templateReplace : function(el) {
	var s = el.innerHTML.replace(/\s/g, ' ').replace(/%5B/g, '[').replace(/%5D/g, ']').replace(/%28/g, '(').replace(/%29/g, ')'),
	re = /\[hstpl:([^\]]+)\]/g;
	var matches = s.match(re);
	if (!matches) return el;
	for (var i = 0; i < matches.length; i++) {
		try { s = s.replace(matches[i], eval(matches[i].replace(re, "$1"))); } 
		catch (e) {}
	}
	el.innerHTML = s;
	return el;
},
/*<? endif ?>s*/
/*<? if ($cfg->overlays || $cfg->inline) : ?>*/
getInline : function(types, addOverlay) {
	for (var i = 0; i < types.length; i++) {
		var type = types[i], s = null;
		/*<? if ($cfg->events) : ?>s*/
		if (type == 'caption' && !hs.fireEvent(this, 'onBeforeGetCaption')) return;
		/*<? endif ?>s*/
	
		/// 1. The old caption-for-thumb syntax
		if (!this[type +'Id'] && this.thumbsUserSetId)  
			this[type +'Id'] = type +'-for-'+ this.thumbsUserSetId;
		/// 2. The captionId syntax + #1
		if (this[type +'Id']) this[type] = hs.getNode(this[type +'Id']);
		/// 3. The captionEval syntax
		if (!this[type] && !this[type +'Text'] && this[type +'Eval']) try {
			s = eval(this[type +'Eval']);
		} catch (e) {}
		/// 4. The captionText syntax
		if (!this[type] && this[type +'Text']) {
			s = this[type +'Text'];
		}
		/// 5. Look for subsequent caption div
		if (!this[type] && !s) {
			var next = this.a.nextSibling;
			while (next && !hs.isHsAnchor(next)) {
				if ((new RegExp('highslide-'+ type)).test(next.className || null)) {
					this[type] = next.cloneNode(1);
					break;
				}
				next = next.nextSibling;
			}
		}
		/*<? if ($cfg->slideshow) : ?>s*/
		/// 6. Look for numbers
		if (!this[type] && !s && this.numberPosition == type) s = '';
		/*<? endif ?>s*/			
		
		if (!this[type] && s !== null) this[type] = hs.createElement('div', 
				{ className: 'highslide-'+ type, innerHTML: s } );
				
		if (addOverlay && this[type]) {
			var o = { position: (type == 'heading') ? 'above' : 'below' }; /// defaults
			for (var x in this[type+'Overlay']) o[x] = this[type+'Overlay'][x];
			o.overlayId = this[type];
			this.createOverlay(o);
		}
	}
},
/*<? endif ?>*/
/*<? if ($cfg->hideelements) : ?>*/
showHideElements : function (tagName, visibility, imgPos) {
	var els = document.getElementsByTagName(tagName);
	var prop = tagName == '*' ? 'overflow' : 'visibility';
	for (var i = 0; i < els.length; i++) {
		if (prop == 'visibility' || (document.defaultView.getComputedStyle(
				els[i], "").getPropertyValue('overflow') == 'auto'
				|| els[i].getAttribute('hidden-by') != null)) {
			var hiddenBy = els[i].getAttribute('hidden-by');
			if (visibility == 'visible' && hiddenBy) {
				hiddenBy = hiddenBy.replace('['+ this.key +']', '');
				els[i].setAttribute('hidden-by', hiddenBy);
				if (!hiddenBy) els[i].style[prop] = els[i].origProp;
			} else if (visibility == 'hidden') { // hide if behind
				var elPos = hs.getPosition(els[i]);
				elPos.w = els[i].offsetWidth;
				elPos.h = els[i].offsetHeight;
			
				/*<? if ($cfg->transitions) : ?>s*/
				if (!this.dimmingOpacity) { // hide all if dimming
				/*<? endif ?>*/
					var clearsX = (elPos.x + elPos.w < imgPos.x || elPos.x > imgPos.x + imgPos.w);
					var clearsY = (elPos.y + elPos.h < imgPos.y || elPos.y > imgPos.y + imgPos.h);
				/*<? if ($cfg->transitions) : ?>s*/
				}
				/*<? endif ?>s*/
				var wrapperKey = hs.getWrapperKey(els[i]);
				if (!clearsX && !clearsY && wrapperKey != this.key) { // element falls behind image
					if (!hiddenBy) {
						els[i].setAttribute('hidden-by', '['+ this.key +']');
						els[i].origProp = els[i].style[prop];
						els[i].style[prop] = 'hidden';
					} else if (!hiddenBy.match('['+ this.key +']')) {
						els[i].setAttribute('hidden-by', hiddenBy + '['+ this.key +']');
					}
				} else if (hiddenBy == '['+ this.key +']' || hs.focusKey == wrapperKey) { // on move
					els[i].setAttribute('hidden-by', '');
					els[i].style[prop] = els[i].origProp || '';
				} else if (hiddenBy && hiddenBy.match('['+ this.key +']')) {
					els[i].setAttribute('hidden-by', hiddenBy.replace('['+ this.key +']', ''));
				}
						
			}
		}
	}
},
/*<? endif ?>*/
focus : function() {
	this.wrapper.style.zIndex = hs.zIndexCounter++;
	/*<? if ($cfg->multiple) : ?>s*/
	// blur others
	for (var i = 0; i < hs.expanders.length; i++) {
		if (hs.expanders[i] && i == hs.focusKey) {
			var blurExp = hs.expanders[i];
			blurExp.content.className += ' highslide-'+ blurExp.contentType +'-blur';
			
			/*<? if ($cfg->html) : ?>s*/
			if (blurExp.isImage) {
				/*<? endif ?>s*/
				blurExp.content.style.cursor = hs.ie ? 'hand' : 'pointer';
				blurExp.content.title = hs.lang.focusTitle;
				/*<? if ($cfg->html) : ?>s*/	
			}
			/*<? endif ?>s*/
			/*<? if ($cfg->events) : ?>s*/	
			hs.fireEvent(this, 'onBlur');
			/*<? endif ?>s*/
		}
	}
	
	// focus this
	/*<? if ($cfg->outlines) : ?>s*/
	if (this.outline) this.outline.table.style.zIndex 
		= this.wrapper.style.zIndex;
	/*<? endif ?>s*/
	this.content.className = 'highslide-'+ this.contentType;
	
	/*<? endif // multiple ?>s*/
	
	/*<? if ($cfg->html) : ?>s*/
	if (this.isImage) {/*<? endif ?>s*/
		this.content.title = hs.lang.restoreTitle;
		
		hs.styleRestoreCursor = window.opera ? 'pointer' : 'url('+ hs.graphicsDir + hs.restoreCursor +'), pointer';
		if (hs.ie && hs.ieVersion() < 6) hs.styleRestoreCursor = 'hand';
		this.content.style.cursor = hs.styleRestoreCursor;
		/*<? if ($cfg->html) : ?>s*/
	}/*<? endif ?>*/
	hs.focusKey = this.key;
	/*<? if ($cfg->navigation) : ?>s*/	
	hs.addEventListener(document, 'keydown', hs.keyHandler);
	/*<? endif ?>s*/
	/*<? if ($cfg->events) : ?>s*/	
	hs.fireEvent(this, 'onFocus');
	/*<? endif ?>s*/	
},
/*<? if ($cfg->dragging) : ?>*/
move : function (e) {
	this.x.min = e.left + e.dX;
	this.y.min = e.top + e.dY;
	
	if (e.type == 'image') this.content.style.cursor = 'move';
	hs.setStyles(this.wrapper, { left: this.x.min +'px', top: this.y.min +'px' });
	/*<? if ($cfg->outlines) : ?>*/
	if (this.outline) this.outline.setPosition(this);
	/*<? endif ?>*/
},
resize : function (e) {
	var w, h, r = e.width / e.height;
	w = Math.max(e.width + e.dX, Math.min(this.minWidth, this.x.full));
	if (this.isImage && Math.abs(w - this.x.full) < 12) w = this.x.full; /// snap to actual size
	h = /*<? if ($cfg->html) : ?>s*/ this.isHtml ? e.height + e.dY : /*<? endif ?>s*/ w / r;
	
	if (h < Math.min(this.minHeight, this.y.full)) {
		h = Math.min(this.minHeight, this.y.full);
		if (this.isImage) w = h * r;
	}
	
	this.x.span = w;
	this.y.span = h;
	/*<? if ($cfg->html) : ?>s*/
	if (this.isHtml) {
		var d = this.scrollerDiv;
		if (typeof this.wDiff == 'undefined') {
			this.wDiff = this.innerContent.offsetWidth - d.offsetWidth;
			this.hDiff = this.innerContent.offsetHeight - d.offsetHeight;
		}
		hs.setStyles(d, { width: (this.x.span - this.wDiff) +'px', 
			height: (this.y.span - this.hDiff) +'px' });
	}
	/*<? endif ?>s*/
	var size = { width: this.x.span +'px', height: this.y.span +'px' };
	hs.setStyles(this.content, size);
	/*<? if ($cfg->iframe) : ?>s*/
	if (this.releaseMask) hs.setStyles(this.releaseMask, size);
	/*<? endif ?>s*/
	
	/*<? if ($cfg->html) : ?>s*/
	if (this.isHtml) {
		this.mediumContent.style.width = 'auto';
		if (this.body) hs.setStyles(this.body, { width: 'auto', height: 'auto' });
	}
	/*<? endif ?>s*/
	/*<? if ($cfg->overlays) : ?>s*/
	if (this.overlayBox) this.sizeOverlayBox(true);
	/*<? endif ?>s*/
	hs.setStyles(this.wrapper, {
		width: (/*<? if ($cfg->overlays) : ?>s*/this.x.p1 + this.x.p2 + 
			/*<? endif ?>s*/2 * this.x.cb + this.x.span) +'px',
		height: (/*<? if ($cfg->overlays) : ?>s*/this.y.p1 + this.y.p2 + 
			/*<? endif ?>s*/2 * this.y.cb + this.y.span) +'px'
	});
	/*<? if ($cfg->slideshow) : ?>s*/
	if (this.slideshow && this.isImage) {
		if (w == this.x.full) this.slideshow.disable('full-expand');
		else this.slideshow.enable('full-expand');
	}
	/*<? endif ?>s*/
	/*<? if ($cfg->outlines) : ?>s*/
	if (this.outline) this.outline.setPosition(this);
	/*<? endif ?>*/
},
/*<? endif // dragging ?>*/
close : function() {
	if (this.isClosing || !this.isExpanded
		/*<? if ($cfg->transitions) : ?>s*/
		 || (hs.upcoming && this.transitions[1] == 'crossfade')
		/*<? endif ?>*/) return;
	this.isClosing = true;
	/*<? if ($cfg->events) : ?>s*/
	if (!hs.fireEvent(this, 'onBeforeClose')) return;
	/*<? endif ?>s*/
	/*<? if ($cfg->slideshow) : ?>s*/
	if (this.slideshow && !hs.upcoming) this.slideshow.pause();
	/*<? endif ?>s*/
	/*<? if ($cfg->navigation) : ?>*/
	hs.removeEventListener(document, 'keydown', hs.keyHandler);
	/*<? endif ?>*/
	try {
		/*<? if ($cfg->html) : ?>s*/
		if (this.isHtml) this.htmlPrepareClose();
		/*<? endif ?>s*/
		
		this.content.style.cursor = 'default';
		this.changeSize(
			0,
			{
				xmin: this.x.min,
				ymin: this.y.min,
				xspan: this.x.span,
				yspan: parseInt(this.content.style.height)
				/*<? if ($cfg->overlays): ?>s*/,
				xp1: this.x.p1,
				yp1: this.y.p1,
				xp2: this.x.p2,
				yp2: this.y.p2
				/*<? endif ?>s*/
				/*<? if ($cfg->outlines) : ?>s*/,
				o: this.outline ? this.outline.offset : 0
				/*<? endif ?>s*/
			},
			{
				xmin: this.x.tpos - this.x.cb + this.x.tb,
				ymin: this.y.tpos - this.y.cb + this.y.tb,
				xspan: this.x.t,
				yspan: this.y.t
				/*<? if ($cfg->overlays): ?>s*/,
				xp1: 0,
				yp1: 0,
				xp2: 0,
				yp2: 0
				/*<? endif ?>s*/
				/*<? if ($cfg->outlines) : ?>s*/,
				o: hs.outlineStartOffset
				/*<? endif ?>s*/
			},
			hs.restoreDuration,
			hs.restoreSteps
		);
		
	} catch (e) { this.afterClose(); } 
},
/*<? if ($cfg->html) : ?>*/
htmlPrepareClose : function() {
	if (hs.geckoMac) { // bad redraws
		if (!hs.mask) hs.mask = hs.createElement('div', null, 
			{ position: 'absolute' }, hs.container);
		hs.setStyles(hs.mask, { width: this.x.span +'px', height: this.y.span +'px', 
			left: this.x.min +'px', top: this.y.min +'px', display: 'block' });			
	}
	/*<? if ($cfg->flash) : ?>s*/
	if (this.swfObject) try { hs.$(this.body.id).StopPlay(); } catch (e) {}
	/*<? endif ?>s*/
	/*<? if ($cfg->ajax || $cfg->iframe || $cfg->flash) : ?>*/
	if (this.objectLoadTime == 'after' && !this.preserveContent) this.destroyObject();
	/*<? endif ?>s*/		
	if (this.scrollerDiv && this.scrollerDiv != this.scrollingContent) 
		this.scrollerDiv.style.overflow = 'hidden';
},

destroyObject : function () {
	/*<? if ($cfg->iframe) : ?>s*/
	if (hs.ie && this.iframe)
		try { this.iframe.contentWindow.document.body.innerHTML = ''; } catch (e) {}
	/*<? endif ?>s*/
	/*<? if ($cfg->flash) : ?>s*/
	if (this.swfObject) swfobject.removeSWF(this.body.id);
	/*<? endif ?>s*/
	this.body.innerHTML = '';
},

sleep : function() {
	/*<? if ($cfg->outlines) : ?>s*/
	if (this.outline) this.outline.table.style.display = 'none';
	/*<? endif ?>s*/
	/*<? if ($cfg->iframe) : ?>s*/
	this.releaseMask = null;
	/*<? endif ?>s*/
	this.wrapper.style.display = 'none';
	hs.push(hs.sleeping, this);
},

awake : function() {
	hs.expanders[this.key] = this;
	
	if (/*<? if ($cfg->multiple) : ?>*/!hs.allowMultipleInstances &&
		/*<? endif ?>s*/hs.focusKey != this.key) {	
		try { hs.expanders[hs.focusKey].close(); } catch (e){}
	}
	
	var z = hs.zIndexCounter++, stl = { display: '', zIndex: z };
	hs.setStyles (this.wrapper, stl);
	this.isClosing = false;
	/*<? if ($cfg->outlines) : ?>*/
	var o = this.outline || 0;
	if (o) {
		if (!this.outlineWhileAnimating) stl.visibility = 'hidden';
		hs.setStyles (o.table, stl);		
	}
	/*<? endif ?>s*/
	this.show();
},
/*<? endif // html ?>s*/
/*<? if ($cfg->overlays) : ?>*/
createOverlay : function (o) {
	var el = o.overlayId;
	if (typeof el == 'string') el = hs.getNode(el);
	if (!el || typeof el == 'string') return;
	
	/*<? if ($cfg->events) : ?>s*/
	if (!hs.fireEvent(this, 'onCreateOverlay', { overlay: el })) return;
	/*<? endif ?>s*/
	el.style.display = 'block';
	/*<? if ($cfg->transitions) : ?>s*/
	o.hsId = o.hsId || o.overlayId; 
	if (this.transitions[1] == 'crossfade' && this.reuseOverlay(o, el)) return;
	/*<? endif ?>s*/
	this.genOverlayBox();
	var width = o.width && /^[0-9]+(px|%)$/.test(o.width) ? o.width : 'auto';
	/// sidepanels must have a fixed pixel width
	if (/^(left|right)panel$/.test(o.position) && !/^[0-9]+px$/.test(o.width)) width = '200px';
	
	var overlay = hs.createElement(
		'div',
		{ id: 'hsId'+ hs.idCounter++, hsId: o.hsId },
		{
			position: 'absolute',
			width: width	
		},
		this.overlayBox,
		true
	);
	
	overlay.appendChild(el);
	if (o.hideOnMouseOut) overlay.hideOnMouseOut = true;
	overlay.opacity = o.opacity || 1;
	overlay.hsPos = o.position;
	overlay.fade = o.fade;
	
	if (this.gotOverlays) this.positionOverlay(overlay);
	hs.push(this.overlays, hs.idCounter - 1);
},
positionOverlay : function(overlay) {
	var p = overlay.hsPos || 'middle center';
	
	/// horizontal
	if (/left$/.test(p)) overlay.style.left = 0; 
	if (/center$/.test(p))	hs.setStyles (overlay, { 
		left: '50%', 
		marginLeft: '-'+ Math.round(overlay.offsetWidth / 2) +'px'
	});	
	if (/right$/.test(p))	overlay.style.right = 0;
	
	if (/^leftpanel$/.test(p)) { 
		hs.setStyles(overlay, {
			right: '100%',
			marginRight: this.x.cb +'px',
			top: - this.y.cb +'px',
			bottom: - this.y.cb +'px',
			overflow: 'auto'
		});		 
		this.x.p1 = overlay.offsetWidth;
	
	} else if (/^rightpanel$/.test(p)) {
		hs.setStyles(overlay, {
			left: '100%',
			marginLeft: this.x.cb +'px',
			top: - this.y.cb +'px',
			bottom: - this.y.cb +'px',
			overflow: 'auto'
		});
		this.x.p2 = overlay.offsetWidth;
	}
	
	/// vertical	
	if (/^top/.test(p)) overlay.style.top = 0; 
	if (/^middle/.test(p))	hs.setStyles (overlay, { 
		top: '50%', 
		marginTop: '-'+ Math.round(overlay.offsetHeight / 2) +'px'
	});	
	if (/^bottom/.test(p)) overlay.style.bottom = 0;
	
	/// outside
	if (/^above$/.test(p)) {
		hs.setStyles(overlay, {
			left: (- this.x.p1 - this.x.cb) +'px',
			right: (- this.x.p2 - this.x.cb) +'px',
			bottom: '100%',
			marginBottom: this.y.cb +'px',
			width: 'auto'
		});
		this.y.p1 = overlay.offsetHeight;
	
	} else if (/^below$/.test(p)) {
		hs.setStyles(overlay, {
			left: (- this.x.p1 - this.x.cb) +'px',
			right: (- this.x.p2 - this.x.cb) +'px',
			top: '100%',
			marginTop: this.y.cb +'px',
			width: 'auto'
		});
		overlay.style.top = '100%';
		this.y.p2 = overlay.offsetHeight;	
	}
},

getOverlays : function() {
	this.getInline(['heading', 'caption'], true);
	/*<? if ($cfg->slideshow) : ?>s*/
	this.getNumber();
	/*<? endif ?>s*/
	/*<? if ($cfg->events) : ?>s*/
	if (this.caption) hs.fireEvent(this, 'onAfterGetCaption');
	/*<? endif ?>s*/
	/*<? if ($cfg->dragging) : ?>s*/
	if (this.heading && this.dragByHeading) this.heading.className += ' highslide-move';
	/*<? endif ?>s*/
	
	if (hs.showCredits) this.writeCredits();
	for (var i = 0; i < hs.overlays.length; i++) {
		var o = hs.overlays[i], tId = o.thumbnailId, sg = o.slideshowGroup;
		if ((!tId && !sg) || (tId && tId == this.thumbsUserSetId)
				|| (sg && sg === this.slideshowGroup)) {
			/*<? if ($cfg->html) : ?>s*/
			if (this.isImage || (this.isHtml && o.useOnHtml))
			/*<? endif ?>s*/
			this.createOverlay(o);
		}
	}
	
	/// get positions, side panels first
	var os = [];
	for (var i = 0; i < this.overlays.length; i++) {
		var o = hs.$('hsId'+ this.overlays[i]);
		if (/panel$/.test(o.hsPos)) this.positionOverlay(o);
		else hs.push(os, o);
	}
	
	/// adjust for minWidth according to hs.padToMinWidth
	var curW = this.x.p1 + this.x.full + this.x.p2;
	if (hs.padToMinWidth && curW < hs.minWidth) {
		this.x.p1 += (hs.minWidth - curW) / 2;
		this.x.p2 += (hs.minWidth - curW) / 2;
	}
	
	/// get other positions
	for (var i = 0; i < os.length; i++) this.positionOverlay(os[i]);
	this.gotOverlays = true;
},
genOverlayBox : function() {
	if (!this.overlayBox) this.overlayBox = hs.createElement (
		'div', null,
		{
			position : 'absolute', 
			width: this.x.span ? this.x.span +'px' : this.x.full +'px', /// initial overlay size
			height: 0,
			visibility : 'hidden',
			overflow : 'hidden', /// to prevent flickering on large overlays
			zIndex : 5
		},
		hs.container,
		true
	);
},
sizeOverlayBox : function(doWrapper, doPanels) {
	hs.setStyles( this.overlayBox, {
		width: this.x.span +'px', 
		height: this.y.span +'px'
	});
	if (doWrapper || doPanels) {
		for (var i = 0; i < this.overlays.length; i++) {
			var o = hs.$('hsId'+ this.overlays[i]);
			if (o && /^(above|below)$/.test(o.hsPos)) {
				/// renew p1/p2
				this.y[o.hsPos == 'above' ? 'p1' : 'p2'] = o.offsetHeight;
			}
		}
	}
	if (doWrapper) {
		hs.setStyles(this.content, {
			top: this.y.p1 +'px'
		});
		hs.setStyles(this.overlayBox, {
			top: (this.y.p1 + this.y.cb) +'px'
		});
	}
},

showOverlays : function() {
	
	/// get the overlay box
	hs.setStyles(this.overlayBox, {
		top: (this.y.p1 + this.y.cb) +'px',
		left: /*this.padded ? 0 : */(this.x.p1 + this.x.cb) +'px',
		overflow : 'visible'
	});
	this.wrapper.appendChild (this.overlayBox);
	
	if (hs.safari) { /// display bug causing overlays to keep hidden
		var stl = this.content.style;
		stl.display = 'inline';
		setTimeout(function() {	stl.display = 'block'; }, 50);
	}
	/// show all
	for (var i = 0; i < this.overlays.length; i++) {
		var o = hs.$('hsId'+ this.overlays[i]);
		if (!o.hideOnMouseOut || this.mouseIsOver) hs.fade(o, 0, o.opacity);
	}
	
},

/*<? endif ?>*/
/*<? if ($cfg->overlays && $cfg->autosize) : ?>*/
createFullExpand : function () {
	/*<? if ($cfg->slideshow) : ?>s*/
	if (this.slideshow) {
		this.slideshow.enable('full-expand');
		return;
	}
	/*<? endif ?>s*/
	this.fullExpandLabel = hs.createElement(
		'a',
		{
			href: 'javascript:hs.expanders['+ this.key +'].doFullExpand();',
			title: hs.lang.fullExpandTitle,
			className: 'highslide-full-expand'
		}
	);
	
	/*<? if ($cfg->events) : ?>s*/
	if (!hs.fireEvent(this, 'onCreateFullExpand')) return;
	/*<? endif ?>s*/
	
	this.createOverlay({ 
		overlayId: this.fullExpandLabel, 
		position: hs.fullExpandPosition, 
		hideOnMouseOut: true, 
		opacity: hs.fullExpandOpacity
	});
},

doFullExpand : function () {
	try {
		/*<? if ($cfg->events) : ?>s*/
		if (!hs.fireEvent(this, 'onDoFullExpand')) return;
		/*<? endif ?>s*/
		if (this.fullExpandLabel) hs.discardElement(this.fullExpandLabel);
		/*<? if ($cfg->events) : ?>s*/
		else if (this.slideshow) this.slideshow.disable('full-expand');
		/*<? endif ?>s*/
		
		this.focus();
		
		this.x.min = parseInt(this.wrapper.style.left) - (this.x.full - this.content.width) / 2;
		if (this.x.min < hs.marginLeft) this.x.min = hs.marginLeft;		
		this.wrapper.style.left = this.x.min +'px';
		
		hs.setStyles(this.content, { width: this.x.full +'px', height: this.y.full +'px'});
		
		this.x.span = this.x.full;
		this.y.span = this.y.full;
		
		/*<? if ($cfg->outlines) : ?>*/
		if (this.overlayBox) this.sizeOverlayBox(true);		
		/*<? endif ?>*/
		
		hs.setStyles(this.wrapper, {
			width: (this.x.p1 + 2 * this.x.cb + this.x.span + this.x.p2) +'px',
			height: (this.y.p1 + 2 * this.y.cb + this.y.span + this.y.p2) +'px'
		});
		
		/*<? if ($cfg->outlines) : ?>*/
		if (this.outline) this.outline.setPosition(this);
		/*<? endif ?>*/
		/*<? if ($cfg->hideelements) : ?>*/
		this.redoShowHide();
		/*<? endif ?>*/
		/*<? if ($cfg->transitions) : ?>s*/
		hs.setDimmerSize();
		/*<? endif ?>*/
	
	} catch (e) {
		window.location.href = this.content.src;
	}
},
/*<? endif ?>*/
/*<? if ($cfg->hideelements && ($cfg->dragging || $cfg->autosize)) : ?>*/
// on end move and resize
redoShowHide : function() {
	var imgPos = {
		x: parseInt(this.wrapper.style.left) - 20, 
		y: parseInt(this.wrapper.style.top) - 20, 
		w: this.content.offsetWidth + 40, 
		h: this.content.offsetHeight + 40
	};
	if (hs.hideSelects) this.showHideElements('SELECT', 'hidden', imgPos);
	if (hs.hideIframes) this.showHideElements('IFRAME', 'hidden', imgPos);
	if (hs.geckoMac) this.showHideElements('*', 'hidden', imgPos);

},
/*<? endif ?>s*/

afterClose : function () {
	this.a.className = this.a.className.replace('highslide-active-anchor', '');
	/*<? if ($cfg->hideelements) : ?>*/
	if (hs.hideSelects) this.showHideElements('SELECT', 'visible');
	if (hs.hideIframes) this.showHideElements('IFRAME', 'visible');
	if (hs.geckoMac) this.showHideElements('*', 'visible');
	/*<? endif ?>s*/	
	/*<? if ($cfg->html) : ?>*/
	if (this.isHtml && this.preserveContent) this.sleep();
	else { 
		/*<? endif ?>s*/
		/*<? if ($cfg->outlines) : ?>s*/
		if (this.outline && this.outlineWhileAnimating) this.outline.destroy();
		/*<? endif ?>s*/
	
		hs.discardElement(this.wrapper);
		/*<? if ($cfg->html) : ?>s*/
	}
	if (hs.mask) hs.mask.style.display = 'none';
	/*<? endif // html ?>s*/
	/*<? if ($cfg->transitions) : ?>s*/
	if (this.dimmingOpacity) hs.undim(this.key);
	/*<? endif ?>s*/
	/*<? if ($cfg->events) : ?>s*/
	hs.fireEvent(this, 'onAfterClose');
	/*<? endif ?>s*/
	hs.expanders[this.key] = null;

	/*<? if ($cfg->multiple) : ?>s*/		
	hs.reOrder();
	/*<? endif ?>s*/
}

};

/*<? if ($cfg->ajax) : ?>*/
// hs.Ajax object prototype
hs.Ajax = function (a, content, pre) {
	this.a = a;
	this.content = content;
	this.pre = pre; /// preloading
};

hs.Ajax.prototype = {
run : function () {
	if (!this.src) this.src = hs.getSrc(this.a);
	if (this.src.match('#')) {
		var arr = this.src.split('#');
		this.src = arr[0];
		this.id = arr[1];
	}
	if (hs.cachedGets[this.src]) {
		this.cachedGet = hs.cachedGets[this.src];
		if (this.id) this.getElementContent();
		else this.loadHTML();
		return;
	}
	try { this.xmlHttp = new XMLHttpRequest(); }
	catch (e) {
		try { this.xmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); }
		catch (e) {
			try { this.xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); }
			catch (e) { this.onError(); }
		}
	}
	var pThis = this;
	this.xmlHttp.onreadystatechange = function() {
		if(pThis.xmlHttp.readyState == 4) {
			if (pThis.id) pThis.getElementContent();
			else pThis.loadHTML();
		}
	};
	
	this.xmlHttp.open("GET", this.src, true);
	this.xmlHttp.send(null);
},

getElementContent : function() {
	hs.init();
	var attribs = window.opera || hs.ie6SSL ? { src: 'blank.htm' } : null; /// Opera needs local src
	
	this.iframe = hs.createElement('iframe', attribs, 
		{ position: 'absolute', left: '-9999px' }, hs.container);
		
	this.loadHTML();
},

loadHTML : function() {
	var s = this.cachedGet || this.xmlHttp.responseText;
	if (this.pre) hs.cachedGets[this.src] = s;
	if (!hs.ie || hs.ieVersion() >= 5.5) {
		s = s.replace(/\s/g, ' ').replace(
			new RegExp('<link[^>]*>', 'gi'), '').replace(
			new RegExp('<script[^>]*>.*?</script>', 'gi'), '');

		if (this.iframe) {
			var doc = this.iframe.contentDocument;
			if (!doc && this.iframe.contentWindow) doc = this.iframe.contentWindow.document;
			if (!doc) { // Opera
				var pThis = this;
				setTimeout(function() {	pThis.loadHTML(); }, 25);
				return;
			}
			doc.open();
			doc.write(s);
			doc.close();
			try { s = doc.getElementById(this.id).innerHTML; } catch (e) {
				try { s = this.iframe.document.getElementById(this.id).innerHTML; } catch (e) {} // opera
			}
		} else {
			s = s.replace(new RegExp('^.*?<body[^>]*>(.*?)</body>.*?$', 'i'), '$1');
		}
	}
	hs.getElementByClass(this.content, 'DIV', 'highslide-body').innerHTML = s;
	this.onLoad();
	for (var x in this) this[x] = null; /// memory leaks
}
};
/*<? endif ?>s*/

/*<? if ($cfg->slideshow) : ?>*/
hs.Slideshow = function (options) {
	for (var x in options) this[x] = options[x];
	if (this.useControls) this.getControls();
};
hs.Slideshow.prototype = {
getControls: function() {
	this.controls = hs.createElement('div', { innerHTML: hs.replaceLang(hs.skin.controls) }, 
		null, hs.container);
	
	var buttons = ['play', 'pause', 'previous', 'next', 'move', 'full-expand', 'close'];
	
	/// find buttons and apply behaviour
	this.btn = {};
	var pThis = this;
	for (var i = 0; i < buttons.length; i++) {
		this.btn[buttons[i]] = hs.getElementByClass(this.controls, 'li', 'highslide-'+ buttons[i]);
		this.enable(buttons[i]);
	}

	/// initial configuration
	this.btn.pause.style.display = 'none';
	this.disable('full-expand');
},
checkFirstAndLast: function() {
	/// disable first and last previous and next
	if (this.repeat) return;
	var cur = this.exp.getAnchorIndex(), re = /disabled$/;
	if (cur == 0) 
		this.disable('previous');
	else if (re.test(this.btn.previous.getElementsByTagName('a')[0].className))
		this.enable('previous');
	if (cur + 1 == hs.anchors.groups[this.slideshowGroup || 'none'].length) {
		this.disable('next');
		this.disable('play');
	} else if (re.test(this.btn.next.getElementsByTagName('a')[0].className)) {
		this.enable('next');
		this.enable('play');
	}
},
enable: function(btn) {
	var sls = this, a = this.btn[btn].getElementsByTagName('a')[0], re = /disabled$/;
	a.onclick = function() {
		sls[btn]();
		return false;
	};
	if (re.test(a.className)) a.className = a.className.replace(re, '');
},
disable: function(btn) {
	var a = this.btn[btn].getElementsByTagName('a')[0];
	a.onclick = function() { return false; };
	if (!/disabled$/.test(a.className)) a.className += ' disabled';
},
hitSpace: function() {
	if (this.autoplay) this.pause();
	else this.play();
},
play: function(wait) {
	if (this.btn) {
		this.btn.play.style.display = 'none';
		this.btn.pause.style.display = '';
	}
	
	this.autoplay = true;
	
	if (!wait) hs.next(this.exp.key);
},
pause: function() {	
	if (this.btn) {
		this.btn.pause.style.display = 'none';
		this.btn.play.style.display = '';
	}
	
	clearTimeout(this.autoplay);
	this.autoplay = null;
},
previous: function() {
	this.pause();
	hs.previous(this.btn.previous);
},
next: function() {
	this.pause();
	hs.next(this.btn.next);
},
move: function() {},
'full-expand': function() {
	hs.getExpander().doFullExpand();
},
close: function() {
	hs.close(this.btn.close);
}

};
/*<? endif ?>s*/
/// keep English strings for fallback
hs.langDefaults = hs.lang;
// history
var HsExpander = hs.Expander;

// set handlers
/*<? if ($cfg->dragging || $cfg->multiple) : ?>s*/
hs.addEventListener(document, 'mousedown', hs.mouseClickHandler);
hs.addEventListener(document, 'mouseup', hs.mouseClickHandler);
/*<? endif ?>s*/
/*<? if ($cfg->preloading) : ?>s*/
hs.addEventListener(window, 'load', hs.preloadImages);
/*<? endif ?>s*/
/*<? if ($cfg->ajax) : ?>s*/
hs.addEventListener(window, 'load', hs.preloadAjax);
/*<? endif ?>s*/
/*<? if ($cfg->unobtrusive) : ?>s*/
hs.addEventListener(window, 'load', function() { hs.pageLoaded = true; });
hs.setClickEvents();
/*<? endif ?>s*/