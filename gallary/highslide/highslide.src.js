/******************************************************************************
Name:    Highslide JS
Version: 4.1.0 (March 12 2009)
Config: 
Author:  Torstein H�nsi
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
var hs = {
// Language strings
lang : {
	cssDirection: 'ltr',
	loadingText : 'Loading...',
	loadingTitle : 'Click to cancel',
	/*<? if ($cfg->multiple) : ?>s*/
	focusTitle : 'Click to bring to front',
	/*<? endif ?>s*/
	/*<? if ($cfg->overlays && $cfg->autosize) : ?>s*/
	fullExpandTitle : 'Expand to actual size (f)',
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
	fullExpandText : '1:1',
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
expandCursor : 'zoomin.cur', // null disables
restoreCursor : 'zoomout.cur', // null disables
expandDuration : 250, // milliseconds
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
/*<? if ($cfg->autosize) : ?>s*/
padToMinWidth : false, // pad the popup width to make room for wide caption
/*<? endif ?>s*/
/*<? if ($cfg->overlays && $cfg->autosize) : ?>s*/
fullExpandPosition : 'bottom right',
fullExpandOpacity : 1,
/*<? endif ?>s*/
/*<? if ($cfg->overlays) : ?>s*/
showCredits : true, // you can set this to false if you want
creditsHref : 'http://highslide.com/',
/*<? endif ?>s*/
/*<? if ($cfg->navigation) : ?>s*/
enableKeyListener : true,
/*<? endif ?>s*/
/*<? if ($cfg->navigation || $cfg->preloading || $cfg->ajax) : ?>s*/
openerTagNames : ['a'/*<? if ($cfg->imagemap) : ?>*/, 'area'/*<? endif ?>*/], // Add more to allow slideshow indexing
/*<? endif ?>s*/
/*<? if ($cfg->templating) : ?>s*/
useTemplating : false,
/*<? endif ?>s*/
/*<? if ($cfg->transitions) : ?>s*/
transitions : [],
transitionDuration: 250,
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
		'</ul></div>'
	/*<? endif ?>s*/
	/*<? if ($cfg->html && $cfg->slideshow) : ?>s*/
	,
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
	'useBox',
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
	/*<? if ($cfg->html || $cfg->autosize) : ?>s*/
	'width',
	'height',
	/*<? endif ?>*/
	/*<? if ($cfg->html) : ?>s*/
	'contentId',
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
	'swfOptions',
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
mouse: {},
headingOverlay: {},
captionOverlay: {},
/*<? endif ?>s*/
/*<? if ($cfg->flash) : ?>s*/
swfOptions: { flashvars: {}, params: {}, attributes: {} },
/*<? endif ?>s*/
timers : [],
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
uaVersion: parseFloat((navigator.userAgent.toLowerCase().match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1]),
ie : (document.all && !window.opera),
safari : /Safari/.test(navigator.userAgent),
/*<? if ($cfg->html || $cfg->transitions || $cfg->hideelements) : ?>s*/
geckoMac : /Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),
/*<? endif ?>s*/

$ : function (id) {
	if (id) return document.getElementById(id);
},

push : function (arr, val) {
	arr[arr.length] = val;
},

createElement : function (tag, attribs, styles, parent, nopad) {
	var el = document.createElement(tag);
	if (attribs) hs.extend(el, attribs);
	if (nopad) hs.setStyles(el, {padding: 0, border: 'none', margin: 0});
	if (styles) hs.setStyles(el, styles);
	if (parent) parent.appendChild(el);	
	return el;
},

extend : function (el, attribs) {
	for (var x in attribs) el[x] = attribs[x];
	return el;
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

/// a subset of jQuery's animate
animate: function(el, prop, dur, easing, callback) {
	/// $(el).animate(prop, dur, 'swing', callback); return;
	var rate = 25,
		from = {},
		to = {},
		units = {},
		timers = hs.timers,
		timer = [],
		step;

	/*<? if ($cfg->outlines) : ?>s*/
	/// used for outlineWhileAnimating
	if (typeof dur == 'object' && dur != null) { /// allow advanced options
		easing = dur.easing;
		callback = dur.callback;
		step = dur.step;
		dur = dur.duration;
	}
	/*<? endif ?>s*/

	if (typeof dur != 'number') dur = 250;
	dur = Math.floor(dur / rate) * rate + rate; /// normalize
	easing = Math[easing] || Math.easeInQuad;
	
	/// set from and to values for each property
	for (var x in prop) {
		from[x] = parseFloat(hs.css(el, x)) || 0;
		to[x] = parseFloat(prop[x]);
		units[x] = x != 'opacity' ? 'px' : ''; /// only support px
	}

	/// calculate intermediate values
	for (var time = rate; time <= dur; time += rate) {
		(function(){
			var inter = {}, steps = []; /// intermediate values
			
			for (var x in prop) {
				inter[x] = easing(time, from[x], to[x] - from[x], dur);
				if (isNaN(inter[x])) inter[x] = to[x];
				if (units[x]) inter[x] = Math.round(inter[x]); /// breaks on decimals

				/*<? if ($cfg->outlines) : ?>s*/
				if (step) (function() {
					var val = inter[x],
						pX = x;
					hs.push(steps, function() {
						step(val, { prop: pX } ) 
					});
				})();
				/*<? endif ?>s*/
				inter[x] += units[x];
				
			}
			timer.push(function() { /// actually perform the step
				hs.setStyles(el, inter);
				
				/*<? if ($cfg->outlines) : ?>s*/
				if (steps) for (var i = 0; i < steps.length; i++) steps[i]();
				/*<? endif ?>s*/
			});
		})();
	}
	
	/// cancel any previous timer on the same element
	for (var i = 0; i < timers.length; i++) {
		if (timers[i].el == el) {
			timers.splice(i--, 1);
		}
	}
	
	/// add the timer to the global collection
	timer.el = el;
	timer.callback = callback;
	timer.shift()(); /// execute first step immediately in same thread
	if (timer.length) timers.push(timer);
	else if (callback) callback();
	
	/// start a new interval that shifts functions off all timers
	if (hs.timerId == null) {
		hs.timerId = setInterval( function() {
			for ( var i = 0; i < timers.length; i++ ) {
				timers[i].shift()();
				if (!timers[i].length) {
					if (timers[i].callback) timers[i].callback();
					timers.splice(i--, 1);
				}
			}

			if ( !timers.length ) {
				clearInterval( hs.timerId );
				hs.timerId = null;
			}
		}, rate);
	}
},
/// a subset of jQuery's css
css: function(el, prop) {
	if (document.defaultView) { /// modern browsers
		return document.defaultView.getComputedStyle(el, null).getPropertyValue(prop);

	} else { /// ie
		if (prop == 'opacity') prop = 'filter';
		var val = el.currentStyle[prop.replace(/\-(\w)/g, function (a, b){ return b.toUpperCase(); })];
		if (prop == 'filter') 
			val = val.replace(/alpha\(opacity=([0-9]+)\)/, 
				function (a, b) { return b / 100 });
		return val === '' ? 1 : val;
	} 
},

getPageSize : function () {
	var d = document, w = window, iebody = d.compatMode && d.compatMode != 'BackCompat' 
		? d.documentElement : d.body;	
	
	/*<? if ($cfg->transitions) : ?>*/
	var b = d.body;
	var xScroll = (w.innerWidth && w.scrollMaxX) 
			? w.innerWidth + w.scrollMaxX : Math.max(b.scrollWidth, b.offsetWidth),
		yScroll = (w.innerHeight && window.scrollMaxY) 
			? w.innerHeight + w.scrollMaxY : Math.max(b.scrollHeight, b.offsetHeight),
		pageWidth = hs.ie ? iebody.scrollWidth :
			(d.documentElement.clientWidth || self.innerWidth),
      	pageHeight = hs.ie ? Math.max(iebody.scrollHeight, iebody.clientHeight) : 
			(d.documentElement.clientHeight || self.innerHeight);
	/*<? endif ?>s*/
	
	var width = hs.ie ? iebody.clientWidth : 
			(d.documentElement.clientWidth || self.innerWidth),
		height = hs.ie ? iebody.clientHeight : self.innerHeight;
	
	return {
		/*<? if ($cfg->transitions) : ?>s*/
		pageWidth: Math.max(pageWidth, xScroll),
		pageHeight: Math.max(pageHeight, yScroll),
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

expand : function(a, params, custom, type) {
	if (!a) a = hs.createElement('a', null, { display: 'none' }, hs.container);
	if (typeof a.getParams == 'function') return params;
	/*<? if ($cfg->html) : ?>s*/
	if (type == 'html') {
		for (var i = 0; i < hs.sleeping.length; i++) {
			if (hs.sleeping[i] && hs.sleeping[i].a == a) {
				hs.sleeping[i].awake();
				hs.sleeping[i] = null;
				return false;
			}
		}
		/*<? if ($cfg->dragging && $cfg->hideelements) : ?>s*/
		hs.hasHtmlExpanders = true;
		/*<? endif ?>s*/
	}
	/*<? endif ?>s*/	
	try {	
		new hs.Expander(a, params, custom/*<? if ($cfg->html) : ?>*/, type/*<? endif ?>*/);
		return false;
	} catch (e) { return true; }
},
/*<? if ($cfg->html) : ?>*/
htmlExpand : function(a, params, custom) {
	return hs.expand(a, params, custom, 'html');
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
	if (matches) for (var i = 0; i < matches.length; i++) {
		lang = matches[i].replace(re, "$1");
		if (typeof hs.lang[lang] != 'undefined') s = s.replace(matches[i], hs.lang[lang]);
	}
	return s;
},
/*<? endif ?>*/
/*<? if ($cfg->unobtrusive) : ?>*/
setClickEvents : function () {
	var els = document.getElementsByTagName('a');
	for (var i = 0; i < els.length; i++) {
		var type = hs.isUnobtrusiveAnchor(els[i]);
		if (type && !els[i].hsHasSetClick) {
			(function(){
				/*<? if ($cfg->events || $cfg->html) : ?>s*/
				var t = type;
				/*<? endif ?>s*/
				/*<? if ($cfg->events) : ?>s*/
				if (hs.fireEvent(hs, 'onSetClickEvent', { element: els[i], type: t })) {
				/*<? endif ?>s*/
					els[i].onclick = /*<? if ($cfg->html) : ?>s*/(type == 'image') ?
						/*<? endif ?>s*/function() { return hs.expand(this) } /*<? if ($cfg->html) : ?>s*/:
						function() { return hs.htmlExpand(this, { objectType: t } );};/*<? endif ?>s*/
				/*<? if ($cfg->events) : ?>s*/
				}
				/*<? endif ?>s*/
			})();
			els[i].hsHasSetClick = true;	
		}
	}
	if (!hs.pageLoaded) setTimeout( hs.setClickEvents, 50);
	else if (i) hs.updateAnchors();
},
isUnobtrusiveAnchor: function(el) {
	if (el.rel == 'highslide') return 'image';
	/*<? if ($cfg->ajax) : ?>s*/
	else if (el.rel == 'highslide-ajax') return 'ajax';
	/*<? endif ?>s*/
	/*<? if ($cfg->iframe) : ?>s*/
	else if (el.rel == 'highslide-iframe') return 'iframe';
	/*<? endif ?>s*/
	/*<? if ($cfg->flash) : ?>s*/
	else if (el.rel == 'highslide-swf') return 'swf';
	/*<? endif ?>s*/
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
	var topZ = 0, 
		topmostKey = -1,
		expanders = hs.expanders,
		exp,
		zIndex;
	for (var i = 0; i < expanders.length; i++) {
		exp = expanders[i];
		if (exp) {
			zIndex = exp.wrapper.style.zIndex;
			if (zIndex && zIndex > topZ) {
				topZ = zIndex;				
				topmostKey = i;
			}
		}
	}
	if (topmostKey == -1) hs.focusKey = -1;
	else expanders[topmostKey].focus();
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
			}, { 
				position: 'absolute',
				visibility: 'visible',
				left: 0,
				opacity: 0 
			}, hs.container, true);
		hs.addEventListener(window, 'resize', hs.setDimmerSize);
	}
	hs.dimmer.style.display = '';
	hs.setDimmerSize();
	hs.dimmer.owner += '|'+ exp.key;
	if (hs.geckoMac && hs.dimmingGeckoFix) 
		hs.dimmer.style.background = 'url('+ hs.graphicsDir + 'geckodimmer.png)';		
	else
		hs.animate(hs.dimmer, { opacity: exp.dimmingOpacity }, hs.dimmingDuration); 
},
undim : function(key) {
	if (!hs.dimmer) return;
	if (typeof key != 'undefined') hs.dimmer.owner = hs.dimmer.owner.replace('|'+ key, '');
	
	if (
		(typeof key != 'undefined' && hs.dimmer.owner != '')
		|| (hs.upcoming && hs.getParam(hs.upcoming, 'dimmingOpacity'))
	) return;
	if (hs.geckoMac && hs.dimmingGeckoFix) 
		hs.setStyles(hs.dimmer, { background: 'none', width: 0, height: 0 });
	else hs.animate(hs.dimmer, { opacity: 0 }, hs.dimmingDuration, null, function() {
		hs.setStyles(hs.dimmer, { display: 'none', width: 0, height: 0 });
	});
},
setDimmerSize : function(exp) {
	if (!hs.dimmer) return;
	var h = (hs.ie && exp && exp.wrapper) ? 
		parseInt(exp.wrapper.style.top) + parseInt(exp.wrapper.style.height) 
		/*<? if ($cfg->outlines): ?>s*/+ (exp.outline ? exp.outline.offset : 0)/*<? endif ?>s*/ : 0; 
	hs.setStyles(hs.dimmer, { 
		width: hs.page.pageWidth +'px', 
		height: Math.max(hs.page.pageHeight, h) +'px'
	});
},
/*<? endif ?>s*/
/*<? if ($cfg->navigation) : ?>*/
/// exp is the current Expander object, adj is the anchor to click
transit : function (adj, exp) {
	var last = exp = exp || hs.getExpander();
	if (hs.upcoming) return false;
	else hs.last = last;
	try {
		hs.upcoming = adj;
		adj.onclick(); 		
	} catch (e){
		hs.last = hs.upcoming = null;
	}
	try {
		/*<? if ($cfg->transitions) : ?>s*/
		/// don't close the previous popup for crossfades
		if (!adj || exp.transitions[1] != 'crossfade')
		/*<? endif ?>s*/
		exp.close();
	} catch (e) {}
	return false;
},

previousOrNext : function (el, op) {
	var exp = hs.getExpander(el);
	if (exp) {
		adj = exp.getAdjacentAnchor(op);
		return hs.transit(adj, exp);
	} else return false;
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
	if (typeof e.target.form != 'undefined') return true; // form element has focus
	
	/*<? if ($cfg->events) : ?>s*/
	if (!hs.fireEvent(hs, 'onKeyDown', e)) return true;
	/*<? endif ?>s*/
	var exp = hs.getExpander();
	
	var op = null;
	switch (e.keyCode) {
		/*<? if ($cfg->autosize) : ?>s*/
		case 70: // f
			if (exp) exp.doFullExpand();
			return true;
		/*<? endif ?>s*/
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
		/*<? if ($cfg->slideshow) : ?>s*/if (op != 2)
			/*<? endif ?>s*/hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
		if (!hs.enableKeyListener) return true;
		
		if (e.preventDefault) e.preventDefault();
    	else e.returnValue = false;
    	if (exp) {
			if (op == 0) {
				exp.close();
			} else 
			/*<? if ($cfg->slideshow) : ?>s*/ if (op == 2) {
				if (exp.slideshow) exp.slideshow.hitSpace();
			} else 
			/*<? endif ?>s*/ {
				/*<? if ($cfg->slideshow) : ?>s*/
				if (exp.slideshow) exp.slideshow.pause();
				/*<? endif ?>s*/
				hs.previousOrNext(exp.key, op);
			}
			return false;
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
	var sg = options.slideshowGroup;
	if (typeof sg == 'object') {
		for (var i = 0; i < sg.length; i++) {
			var o = {};
			for (var x in options) o[x] = options[x];
			o.slideshowGroup = sg[i];
			hs.push(hs.slideshows, o);
		}
	} else {
		hs.push(hs.slideshows, options);
	}
},
/*<? endif ?>*/
getWrapperKey : function (element, expOnly) {
	var el, re = /^highslide-wrapper-([0-9]+)$/;
	// 1. look in open expanders
	el = element;
	while (el.parentNode)	{
		/*<? if ($cfg->viewport) : ?>s*/
		if (el.hsKey !== undefined) return el.hsKey;
		/*<? endif ?>s*/
		if (el.id && re.test(el.id)) return el.id.replace(re, "$1");
		el = el.parentNode;
	}
	// 2. look in thumbnail
	if (!expOnly) {
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
	}
	return null; 
},

getExpander : function (el, expOnly) {
	if (typeof el == 'undefined') return hs.expanders[hs.focusKey] || null;
	if (typeof el == 'number') return hs.expanders[el] || null;
	if (typeof el == 'string') el = hs.$(el);
	return hs.expanders[hs.getWrapperKey(el, expOnly)] || null;
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
			hs.dragArgs = { exp: exp /*<? if ($cfg->dragging) : ?>*/, type: match[1], left: exp.x.pos, width: exp.x.size, top: exp.y.pos, 
				height: exp.y.size, clickX: e.clientX, clickY: e.clientY /*<? endif ?>*/};
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
			exp.doShowHide('hidden');
			/*<? endif ?>s*/
		}
		/*<? endif ?>s*/
	} else if (e.type == 'mouseup') {
		/*<? if ($cfg->dragging) : ?>*/
		hs.removeEventListener(document, 'mousemove', hs.dragHandler);
		/*<? endif ?>*/
		if (hs.dragArgs) {
			
			/*<? if ($cfg->dragging) : ?>s*/
			if (hs.styleRestoreCursor && hs.dragArgs.type == 'image') 
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
			else if (hasDragged || (!hasDragged && hs.hasHtmlExpanders)) {
				hs.dragArgs.exp.doShowHide('hidden');
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
			if (hasDragged) hs.setDimmerSize(exp);
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
			{ position: 'absolute', width: exp.x.size+'px', height: exp.y.size+'px', 
				left: exp.x.cb+'px', top: exp.y.cb+'px', zIndex: 4,	background: (hs.ie ? 'white' : 'none'), 
				opacity: .01 }, 
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
		else {
			exp.moveTo(a.left + a.dX, a.top + a.dY);
			if (a.type == 'image') exp.content.style.cursor = 'move';
		}
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
		if (!exp.isExpanded) return;
		if (!exp || !e.relatedTarget || hs.getExpander(e.relatedTarget, true) == exp 
			|| hs.dragArgs) return;
		
		/*<? if ($cfg->events) : ?>s*/
		hs.fireEvent(exp, over ? 'onMouseOver' : 'onMouseOut', e);
		/*<? endif ?>s*/	
		/*<? if ($cfg->overlays) : ?>s*/
		for (var i = 0; i < exp.overlays.length; i++) (function() {
			var o = hs.$('hsId'+ exp.overlays[i]);
			if (o && o.hideOnMouseOut) {
				if (over) hs.setStyles(o, { visibility: 'visible' });
				hs.animate(o, { opacity: over ? o.opacity : 0 }, o.dur, null, 
					over ? null : function() { hs.setStyles(o, { visibility: 'hidden' })});
			}
		})();
		/*<? endif ?>s*/	
	} catch (e) {}
},
/*<? endif ?>s*/
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
	if (hs.restoreCursor) var cur = hs.createElement('img', { src: hs.graphicsDir + hs.restoreCursor });
},
/*<? endif ?>*/

init : function () {
	if (!hs.container) {
	
		hs.page = hs.getPageSize();
		hs.ieLt7 = hs.ie && hs.uaVersion < 7;
		/*<? if ($cfg->ajax || $cfg->iframe) : ?>s*/
		hs.ie6SSL = hs.ieLt7 && location.protocol == 'https:';
		/*<? endif ?>s*/
		
		/// backwards compat for language strings
		for (var x in hs.langDefaults) {
			if (typeof hs[x] != 'undefined') hs.lang[x] = hs[x];
			else if (typeof hs.lang[x] == 'undefined' && typeof hs.langDefaults[x] != 'undefined') 
				hs.lang[x] = hs.langDefaults[x];
		}
		
		hs.container = hs.createElement('div', {
				className: 'highslide-container'
			}, {
				position: 'absolute', 
				left: 0, 
				top: 0, 
				width: '100%', 
				zIndex: hs.zIndexCounter,
				direction: 'ltr'
			}, 
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
				top: '-9999px',
				opacity: hs.loadingOpacity,
				zIndex: 1
			}, hs.container
		);
		hs.garbageBin = hs.createElement('div', null, { display: 'none' }, hs.container);
		/*<? if ($cfg->viewport) : ?>s*/
		hs.viewport = hs.createElement('div', {
				className: 'highslide-viewport'
			}, null, hs.container, 1
		);
		/*<? endif ?>s*/
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
		/*<? if ($cfg->thumbstrip) : ?>s*/
		Math.easeOutQuad = function (t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		};
		/*<? endif ?>s*/
		/*<? if ($cfg->hideelements) : ?>*/
		hs.hideSelects = hs.ieLt7;
		hs.hideIframes = ((window.opera && hs.uaVersion < 9) || navigator.vendor == 'KDE' 
			|| (hs.ie && hs.uaVersion < 5.5));
		/*<? endif ?>s*/
		/*<? if ($cfg->events) : ?>s*/
		hs.fireEvent(this, 'onActivate');
		/*<? endif ?>s*/
	}
},
domReady : function() {
	hs.isDomReady = true;
	if (hs.onDomReady) hs.onDomReady();
},
/*<? if ($cfg->navigation || $cfg->preloading || $cfg->ajax) : ?>*/
updateAnchors : function() {
	var el, els, all = [], images = [], 
		/*<? if ($cfg->ajax) : ?>s*/ htmls = [], /*<? endif ?>s*/groups = {}, re;
		
	for (var i = 0; i < hs.openerTagNames.length; i++) { /// loop through tag names
		els = document.getElementsByTagName(hs.openerTagNames[i]);
		for (var j = 0; j < els.length; j++) { /// loop through each element
			el = els[j];
			re = hs.isHsAnchor(el);
			if (re) {
				hs.push(all, el);
				/// images
				if (re[0] == 'hs.expand') hs.push(images, el);
				/*<? if ($cfg->ajax) : ?>s*/
				/// htmls
				else if (re[0] == 'hs.htmlExpand') hs.push(htmls, el);
				/*<? endif ?>s*/
				/// groupwise
				var g = hs.getParam(el, 'slideshowGroup') || 'none';
				if (!groups[g]) groups[g] = [];
				hs.push(groups[g], el);
			}
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

close : function(el) {
	var exp = hs.getExpander(el);
	if (exp) exp.close();
	return false;
}
}; // end hs object

/*<? if ($cfg->outlines) : ?>*/
hs.Outline =  function (outlineType, onLoad) {
	this.onLoad = onLoad;
	this.outlineType = outlineType;
	var v = hs.uaVersion, tr;
	
	this.hasAlphaImageLoader = hs.ie && v >= 5.5 && v < 7;
	if (!outlineType) {
		if (onLoad) onLoad();
		return;
	}
	
	hs.init();
	this.table = hs.createElement(
		'table', { 
			cellSpacing: 0 
		}, {
			visibility: 'hidden',
			position: 'absolute',
			borderCollapse: 'collapse',
			width: 0
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
	this.td[4].className = outlineType +' highslide-outline';
	
	this.preloadGraphic(); 
};

hs.Outline.prototype = {
preloadGraphic : function () {
	var src = hs.graphicsDir + (hs.outlinesDir || "outlines/")+ this.outlineType +".png";
				
	var appendTo = hs.safari ? hs.container : null;
	this.graphic = hs.createElement('img', null, { position: 'absolute', 
		top: '-9999px' }, appendTo, true); // for onload trigger
	
	var pThis = this;
	this.graphic.onload = function() { pThis.onGraphicLoad(); };
	
	this.graphic.src = src;
},

onGraphicLoad : function () {
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
	this.graphic = null;
	if (hs.pendingOutlines[this.outlineType]) hs.pendingOutlines[this.outlineType].destroy();
	hs.pendingOutlines[this.outlineType] = this;
	if (this.onLoad) this.onLoad();
},
	
setPosition : function (parse, offset, vis, dur, easing) {
	var exp = this.exp,
		stl = exp.wrapper.style,
		offset = offset || 0,
		pos = parse ? {
			x: parseInt(stl.left),
			y: parseInt(stl.top),
			w: parseInt(stl.width),
			h: parseInt(stl.height)
		} : {
			x: exp.x.pos + offset,
			y: exp.y.pos + offset,
			w: exp.x.get('wsize') - 2 * offset,
			h: exp.y.get('wsize') - 2 * offset
		};
	if (vis) this.table.style.visibility = (pos.h >= 4 * this.offset) 
		? 'visible' : 'hidden';
	hs.setStyles(this.table, {
		left: (pos.x - this.offset) +'px',
		top: (pos.y - this.offset) +'px',
		width: (pos.w + 2 * this.offset) +'px'
	});
	
	pos.w -= 2 * this.offset;
	pos.h -= 2 * this.offset;
	hs.setStyles (this.td[4], {
		width: pos.w >= 0 ? pos.w +'px' : 0,
		height: pos.h >= 0 ? pos.h +'px' : 0
	});
	if (this.hasAlphaImageLoader) this.td[3].style.height 
		= this.td[5].style.height = this.td[4].style.height;	
	
},
	
destroy : function(hide) {
	if (hide) this.table.style.visibility = 'hidden';
	else hs.discardElement(this.table);
}
};
/*<? endif ?>*/
hs.Dimension = function(exp, dim) {
	this.exp = exp;
	this.dim = dim;
	this.ucwh = dim == 'x' ? 'Width' : 'Height';	/// upper case width or height
	this.wh = this.ucwh.toLowerCase();				/// width or height
	this.uclt = dim == 'x' ? 'Left' : 'Top';		/// upper case left or top
	this.lt = this.uclt.toLowerCase();				/// left or top
	this.ucrb = dim == 'x' ? 'Right' : 'Bottom';	/// upper case right or bottom
	this.rb = this.ucrb.toLowerCase();				/// right or bottom
	
	/*<? if ($cfg->overlays) : ?>s*/
	this.p1 = this.p2 = 0; /// above, below and side panels	
	/*<? endif ?>s*/	
};
hs.Dimension.prototype = {
get : function(key) {
	switch (key) {
		case 'loadingPos':
			return this.tpos + this.tb + (this.t - hs.loading['offset'+ this.ucwh]) / 2;
		/*<? if ($cfg->transitions) : ?>s*/
		case 'loadingPosXfade':
			return this.pos + this.cb /*<? if ($cfg->overlays) : ?>s*/+ this.p1
				/*<? endif ?>s*/ + (this.size - hs.loading['offset'+ this.ucwh]) / 2;
		/*<? endif ?>s*/
		case 'wsize': /// wrapper size
			return this.size + 2 * this.cb
				/*<? if ($cfg->overlays) : ?>s*/ + this.p1 + this.p2/*<? endif ?>s*/;
		case 'fitsize': /// max size when fitting to viewport
			return this.clientSize - this.marginMin - this.marginMax;
		case 'opos': /// position of the outline
			return this.pos/*<? if ($cfg->outlines) : ?>s*/ - (this.exp.outline ? this.exp.outline.offset : 0)/*<? endif ?>s*/;
		case 'osize': /// outer size of the outline
			return this.get('wsize')/*<? if ($cfg->outlines) : ?>s*/ + (this.exp.outline ? 2*this.exp.outline.offset : 0)/*<? endif ?>s*/;
		/*<? if ($cfg->autosize) : ?>s*/
		case 'imgPad': /// padding for image when padToMinWidth
			return this.imgSize ? Math.round((this.size - this.imgSize) / 2) : 0;
		/*<? endif ?>s*/
		
	}
},
calcBorders: function() {
	// correct for borders
	this.cb = (this.exp.content['offset'+ this.ucwh] - this.t) / 2; /// content border
	this.marginMax = hs['margin'+ this.ucrb] + 2 * this.cb;
},
calcThumb: function() {
	this.t = this.exp.el[this.wh] ? parseInt(this.exp.el[this.wh]) : 
		this.exp.el['offset'+ this.ucwh]; /// thumb width
	this.tpos = this.exp.tpos[this.dim]; /// thumb left
	this.tb = (this.exp.el['offset'+ this.ucwh] - this.t) / 2; /// thumb border
	if (this.tpos == 0) { /// opening from an invisible anchor
		this.tpos = (hs.page[this.wh] / 2) + hs.page['scroll'+ this.uclt];		
	};
},
calcExpanded: function() {
	var exp = this.exp;
	this.justify = 'auto';
	/*<? if ($cfg->positioning) : ?>*/
	// get alignment
	if (exp.align == 'center') this.justify = 'center';
	else if (new RegExp(this.lt).test(exp.anchor)) this.justify = null;
	else if (new RegExp(this.rb).test(exp.anchor)) this.justify = 'max';
	/*<? endif ?>*/
	
	// size and position
	this.pos = this.tpos - this.cb + this.tb; /// initial position at top left thumb
	this.size = Math.min(this.full, exp['max'+ this.ucwh] || this.full);
	this.minSize = /*<? if ($cfg->autosize) : ?>*/exp.allowSizeReduction ? 
		Math.min(exp['min'+ this.ucwh], this.full) :/*<? endif ?>*/this.full;
	/*<? if ($cfg->autosize) : ?>s*/
	if (exp.isImage && exp.useBox)	{
		this.size = exp[this.wh];
		this.imgSize = this.full;
	}
	if (this.dim == 'x' && hs.padToMinWidth) this.minSize = exp.minWidth;
	/*<? endif ?>s*/
	/*<? if ($cfg->positioning) : ?>s*/
	this.target = exp['target'+ this.dim.toUpperCase()];
	/*<? endif ?>s*/
	this.marginMin = hs['margin'+ this.uclt];
	this.scroll = hs.page['scroll'+ this.uclt];
	this.clientSize = hs.page[this.wh];
},
setSize: function(i) {
	var exp = this.exp;
	/*<? if ($cfg->autosize) : ?>s*/
	if (exp.isImage && (exp.useBox || hs.padToMinWidth)) {
		this.imgSize = i;
		this.size = Math.max(this.size, this.imgSize);
		exp.content.style[this.lt] = this.get('imgPad')+'px';
	} else /*<? endif ?>s*/
	this.size = i;

	exp.content.style[this.wh] = i +'px';
	exp.wrapper.style[this.wh] = this.get('wsize') +'px';
	
	/*<? if ($cfg->outlines) : ?>s*/
	if (exp.outline) exp.outline.setPosition();
	/*<? endif ?>s*/
	/*<? if ($cfg->iframe) : ?>s*/
	if (exp.releaseMask) exp.releaseMask.style[this.wh] = i +'px';
	/*<? endif ?>s*/
	/*<? if ($cfg->html) : ?>s*/
	if (exp.isHtml) {
		var d = exp.scrollerDiv;
		if (this.sizeDiff === undefined)
			this.sizeDiff = exp.innerContent['offset'+ this.ucwh] - d['offset'+ this.ucwh];
		d.style[this.wh] = (this.size - this.sizeDiff) +'px';
			
		if (this.dim == 'x') exp.mediumContent.style.width = 'auto'; /// why not do it after expand?
		if (exp.body) exp.body.style[this.wh] = 'auto';		
	}
	/*<? endif ?>s*/
	/*<? if ($cfg->overlays) : ?>s*/
	if (this.dim == 'x' && exp.overlayBox) exp.sizeOverlayBox(true);
	/*<? endif ?>s*/
	/*<? if ($cfg->slideshow) : ?>s*/
	if (this.dim == 'x' && exp.slideshow && exp.isImage) {
		if (i == this.full) exp.slideshow.disable('full-expand');
		else exp.slideshow.enable('full-expand');
	}
	/*<? endif ?>s*/
},
setPos: function(i) {
	this.pos = i;
	this.exp.wrapper.style[this.lt] = i +'px';	
	/*<? if ($cfg->outlines) : ?>*/
	if (this.exp.outline) this.exp.outline.setPosition();
	/*<? endif ?>*/
}
};

hs.Expander = function(a, params, custom, contentType) {
	if (document.readyState && hs.ie && !hs.isDomReady) {
		hs.onDomReady = function() {
			new hs.Expander(a, params, custom, contentType);
		};
		return;
	} 
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
	/*<? if ($cfg->slideshow || $cfg->transitions) : ?>s*/
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
	if (!hs.allowMultipleInstances && !hs.upcoming) { 
	/*<? endif ?>s*/
		if (hs.expanders[key-1]) hs.expanders[key-1].close();
		if (typeof hs.focusKey != 'undefined' && hs.expanders[hs.focusKey])
			hs.expanders[hs.focusKey].close(); /// preserved
	/*<? if ($cfg->multiple) : ?>s*/
	}
	/*<? endif ?>s*/
	
	// initiate metrics
	this.el = el;
	this.tpos = hs.getPosition(el);
	hs.page = hs.getPageSize();
	var x = this.x = new hs.Dimension(this, 'x');
	x.calcThumb();
	var y = this.y = new hs.Dimension(this, 'y');
	y.calcThumb();
		
	/*<? if ($cfg->imagemap) : ?>s*/
	if (/area/i.test(el.tagName)) this.getImageMapAreaCorrection(el);
	/*<? endif ?>s*/
	
	/// create the wrapper
	this.wrapper = hs.createElement(
		'div', {
			id: 'highslide-wrapper-'+ this.key,
			className: this.wrapperClassName
		}, {
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
		|| (this.last && this.isImage && this.transitions[1] == 'crossfade') /*<? endif ?>s*/) {
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
error : function(e) {
	// alert ('Line '+ e.lineNumber +': '+ e.message);
	window.location.href = this.src;
},
/*<? if ($cfg->outlines) : ?>*/
connectOutline : function() {
	var outline = this.outline = hs.pendingOutlines[this.outlineType];
	outline.exp = this;
	outline.table.style.zIndex = this.wrapper.style.zIndex;
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
		l = this.x.get('loadingPos') +'px',
		t = this.y.get('loadingPos') +'px';
	/*<? if ($cfg->transitions) : ?>s*/
	/// position above a target expander
	if (!tgt && this.last && this.transitions[1] == 'crossfade') 
		var tgt = this.last; 
	if (tgt) {
		l = tgt.x.get('loadingPosXfade') +'px';
		t = tgt.y.get('loadingPosXfade') +'px';
		this.loading.style.zIndex = hs.zIndexCounter++;
	}
	/*<? endif ?>s*/
	setTimeout(function () { 
		if (exp.loading) hs.setStyles(exp.loading, { left: l, top: t, zIndex: hs.zIndexCounter++ })}
	, 100);
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
	
	/*<? if ($cfg->events) : ?>s*/
	hs.fireEvent(this, 'onAfterGetContent');
	/*<? endif ?>s*/
	
	this.innerContent = this.content;
	/*<? if ($cfg->iframe || $cfg->flash) : ?>*/
	if (/(swf|iframe)/.test(this.objectType)) this.setObjContainerSize(this.innerContent);
	/*<? endif ?>s*/
	
	// the content tree
	hs.container.appendChild(this.wrapper);
	hs.setStyles( this.wrapper, { 
		position: 'static',
		padding: '0 '+ hs.marginRight +'px 0 '+ hs.marginLeft +'px'
	});
	this.content = hs.createElement(
    	'div', {
    		className: 'highslide-html' 
    	}, {
			position: 'relative',
			zIndex: 3,
			overflow: 'hidden'
		},
		this.wrapper
	);
	this.mediumContent = hs.createElement('div', null, null, this.content, 1);
	this.mediumContent.appendChild(this.innerContent);
	
	hs.setStyles (this.innerContent, { 
		position: 'relative',
		display: 'block',
		direction: hs.lang.cssDirection || ''
	});
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
			hs.setStyles(this.loading, { top: '-9999px' });
			this.loading = null;
			/*<? if ($cfg->events) : ?>s*/
			hs.fireEvent(this, 'onHideLoading');	
			/*<? endif ?>s*/
		}
		/*<? if ($cfg->html) : ?>s*/
		if (this.isImage) {		
			/*<? endif ?>s*/	
			x.full = this.content.width;
			y.full = this.content.height;
			
			hs.setStyles(this.content, {
				width: x.t +'px',
				height: y.t +'px'
			});
			this.wrapper.appendChild(this.content);
			hs.container.appendChild(this.wrapper);
			/*<? if ($cfg->html) : ?>s*/
		} else if (this.htmlGetSize) this.htmlGetSize();
		/*<? endif ?>s*/
		
		x.calcBorders();
		y.calcBorders();
		
		hs.setStyles (this.wrapper, { /// moved to this place to respect cb
			left: (x.tpos + x.tb - x.cb) +'px',
			top: (y.tpos + x.tb - y.cb) +'px'
		});		
		
		/*<? if ($cfg->overlays) : ?>*/
		/*<? if ($cfg->slideshow) : ?>s*/
		this.initSlideshow();
		/*<? endif ?>s*/
		/// apply overlays	
		this.getOverlays();		
		/*<? endif ?>s*/
		
		var ratio = x.full / y.full;
		
		x.calcExpanded();
		this.justify(x);
		
		y.calcExpanded();
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
			/*<? if ($cfg->html) : ?>s*/
			else this.fitOverlayBox(); 
			/*<? endif ?>s*/
			
			/*<? if ($cfg->slideshow) : ?>s*/
			/// Correct for fixed controls
			var ss = this.slideshow;			
			if (ss && this.last && ss.controls && ss.fixedControls) {
				var pos = ss.overlayOptions.position || '', p;
				for (var dim in hs.oPos) for (var i = 0; i < 5; i++) {
					p = this[dim];
					if (pos.match(hs.oPos[dim][i])) {
						p.pos = this.last[dim].pos 
							+ (this.last[dim].p1 - p.p1)
							+ (this.last[dim].size - p.size) * [0, 0, .5, 1, 1][i];
						if (ss.fixedControls == 'fit') {
							if (p.pos + p.size/*<? if ($cfg->overlays) : ?>s*/ + p.p1 + p.p2
								/*<? endif ?>s*/ > p.scroll + p.clientSize - p.marginMax)
								p.pos = p.scroll + p.clientSize - p.size - p.marginMin - p.marginMax
								/*<? if ($cfg->overlays) : ?>s*/ - p.p1 - p.p2/*<? endif ?>*/;
							if (p.pos < p.scroll + p.marginMin) p.pos = p.scroll + p.marginMin; 
						} 
					}
				}
			}
			/*<? endif ?>s*/
			if (this.isImage && this.x.full > (this.x.imgSize || this.x.size)) {
				this.createFullExpand();
				if (this.overlays.length == 1) this.sizeOverlayBox();
			}
		}
		/*<? endif ?>s*/
		this.show();
		
	} catch (e) {
		this.error(e);
	}
},
/*<? if ($cfg->html) : ?>*/
/*<? if ($cfg->iframe || $cfg->flash) : ?>*/
setObjContainerSize : function(parent, auto) {
	var c = hs.getElementByClass(parent, 'DIV', 'highslide-body');
	if (/(iframe|swf)/.test(this.objectType)) {
		if (this.objectWidth) c.style.width = this.objectWidth +'px';
		if (this.objectHeight) c.style.height = this.objectHeight +'px';
	}
},

writeExtendedContent : function () {
	if (this.hasExtendedContent) return;
	var exp = this;
	this.body = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
	/*<? if ($cfg->iframe) : ?>s*/
	if (this.objectType == 'iframe') {
		this.showLoading();
		var ruler = hs.clearing.cloneNode(1);
		this.body.appendChild(ruler);
		this.newWidth = this.innerContent.offsetWidth;
		if (!this.objectWidth) this.objectWidth = ruler.offsetWidth;
		var hDiff = this.innerContent.offsetHeight - this.body.offsetHeight,
			h = this.objectHeight || hs.page.height - hDiff - hs.marginTop - hs.marginBottom,
			onload = this.objectLoadTime == 'before' ? 
				' onload="if (hs.expanders['+ this.key +']) hs.expanders['+ this.key +'].contentLoaded()" ' : '';
		
		this.body.innerHTML += '<iframe name="hs'+ (new Date()).getTime() +'" frameborder="0" key="'+ this.key +'" '
			+' allowtransparency="true" style="width:'+ this.objectWidth +'px; height:'+ h +'px" '
			+ onload +' src="'+ this.src +'"></iframe>';
		this.ruler = this.body.getElementsByTagName('div')[0];
		this.iframe = this.body.getElementsByTagName('iframe')[0];
		
		if (this.objectLoadTime == 'after') this.correctIframeSize();
		
	} 
	/*<? endif ?>s*/
	/*<? if ($cfg->flash) : ?>s*/
	if (this.objectType == 'swf') {
		this.body.id = this.body.id || 'hs-flash-id-' + this.key;
		var a = this.swfOptions;
		if (typeof a.params.wmode == 'undefined') a.params.wmode = 'transparent';
		if (swfobject) swfobject.embedSWF(this.src, this.body.id, this.objectWidth, this.objectHeight, 
			a.version || '7', a.expressInstallSwfurl, a.flashvars, a.params, a.attributes);
	}
	/*<? endif ?>s*/
	this.hasExtendedContent = true;
},
/*<? endif ?>s*/
htmlGetSize : function() {
	/*<? if ($cfg->iframe) : ?>s*/
	if (this.iframe && !this.objectHeight) { // loadtime before		
		this.iframe.style.height = this.body.style.height = this.getIframePageHeight() +'px';
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
	hs.setStyles( this.content, { width: this.x.t +'px', height: this.y.t +'px'});
},
/*<? if ($cfg->iframe) : ?>*/
getIframePageHeight : function() {
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
	return h;
},
correctIframeSize : function () {
	var wDiff = this.innerContent.offsetWidth - this.ruler.offsetWidth;
	if (wDiff < 0) wDiff = 0;
	
	var hDiff = this.innerContent.offsetHeight - this.iframe.offsetHeight;
	hs.setStyles(this.iframe, { width: (this.x.size - wDiff) +'px', 
		height: (this.y.size - hDiff) +'px' });
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
	if (this.objectType == 'swf' && this.objectLoadTime == 'before') this.writeExtendedContent();	
	/*<? endif ?>*/
    // handle minimum size
    if (this.x.size < this.x.full && !this.allowWidthReduction) this.x.size = this.x.full;
    if (this.y.size < this.y.full && !this.allowHeightReduction) this.y.size = this.y.full;
	this.scrollerDiv = this.innerContent;
    hs.setStyles(this.mediumContent, { 
		position: 'relative',
		width: this.x.size +'px'
	});
    hs.setStyles(this.innerContent, { 
    	border: 'none',
    	width: 'auto',
    	height: 'auto'
    });
	var node = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
    if (node 
    	/*<? if ($cfg->iframe || $cfg->flash) : ?>s*/ && !/(iframe|swf)/.test(this.objectType)
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
    			width: (this.x.size - wDiff - kdeBugCorr) +'px', 
    			height: (this.y.size - hDiff) +'px',
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
    if (!this.scrollingContent && this.y.size < this.mediumContent.offsetHeight) this.scrollerDiv = this.content;
	
	if (this.scrollerDiv == this.content && !this.allowWidthReduction && !/(iframe|swf)/.test(this.objectType)) {
		this.x.size += 17; // room for scrollbars
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
	var tgtArr, tgt = p.target, dim = p == this.x ? 'x' : 'y';
	/*<? if ($cfg->positioning) : ?>*/
	if (tgt && tgt.match(/ /)) {
		tgtArr = tgt.split(' ');
		tgt = tgtArr[0];
	}
	if (tgt && hs.$(tgt)) {
		p.pos = hs.getPosition(hs.$(tgt))[dim];
		if (tgtArr && tgtArr[1] && tgtArr[1].match(/^[-]?[0-9]+px$/)) 
			p.pos += parseInt(tgtArr[1]);
		if (p.size < p.minSize) p.size = p.minSize;
		
	} else if (p.justify == 'auto' || p.justify == 'center') {
	/*<? endif ?>*/
		var hasMovedMin = false;
		/*<? if ($cfg->autosize) : ?>*/
		var allowReduce = p.exp.allowSizeReduction;
		/*<? endif ?>*/
		
		/// 1) get the initial left offset
		/*<? if ($cfg->positioning) : ?>s*/
		if (p.justify == 'center')
			p.pos = Math.round(p.scroll + (p.clientSize + p.marginMin - p.marginMax - p.get('wsize')) / 2);
		else
		/*<? endif ?>s*/
			p.pos = Math.round(p.pos - ((p.get('wsize') - p.t) / 2)); /// auto
					
		/// 2) if left offset is now outside the viewport, correct it
		if (p.pos < p.scroll + p.marginMin) {
			p.pos = p.scroll + p.marginMin;
			hasMovedMin = true;		
		}
	
		/*<? if ($cfg->autosize) : ?>*/
		/// 3) if the width is now less than the minimum allowed width, 
		/// correct it and disallow further reduction 
		if (!moveOnly && p.size < p.minSize) {
			p.size = p.minSize;
			allowReduce = false;
		}
		/*<? endif ?>*/
		/// 4) if right side is now to the right of the viewport get new width 
		/// and new left 
		if (p.pos + p.get('wsize') > p.scroll + p.clientSize - p.marginMax) {
			/// a) if left offset has been moved in #2 and further size reduction is allowed,
			/// set the width to the full available width of the viewport
			if (!moveOnly && hasMovedMin/*<? if ($cfg->autosize) : ?>*/ && allowReduce/*<? endif ?>*/) {
				/*<? if ($cfg->autosize) : ?>s*/
				p.size = p.get('fitsize'); // can't expand more
				/*<? endif ?>s*/
			/// b) else if the slide is neither moved to the left nor reduced in width,
			/// simply move the slide to the right to align with the right of the viewport
			} else if (p.get('wsize') < p.get('fitsize')) {
				p.pos = p.scroll + p.clientSize - p.marginMax - p.get('wsize');
			/// c) if the slide is still larger than the viewport, align it left and fit the width
			} else { // image larger than viewport
				p.pos = p.scroll + p.marginMin;
				/*<? if ($cfg->autosize) : ?>s*/
				if (!moveOnly && allowReduce) p.size = p.get('fitsize');
				/*<? endif ?>s*/
			}			
		}
		
		/// 5) if in 4a) the width was reduced too much, increase it again
		/*<? if ($cfg->autosize) : ?>*/
		if (!moveOnly && p.size < p.minSize) {
			p.size = p.minSize;
			allowReduce = false;
		}
		/*<? endif ?>*/
	/*<? if ($cfg->positioning) : ?>*/
	} else if (p.justify == 'max') {
		p.pos = Math.floor(p.pos - p.size + p.t);
	}
	/*<? endif ?>*/
		
	if (p.pos < p.marginMin) {
		var tmpMin = p.pos;
		p.pos = p.marginMin; 
		/*<? if ($cfg->autosize) : ?>*/
		if (allowReduce && !moveOnly) p.size = p.size - (p.pos - tmpMin);
		/*<? endif ?>*/
	}
},
/*<? if ($cfg->autosize) : ?>*/
correctRatio : function(ratio) {
	var x = this.x, 
		y = this.y,
		changed = false,
	
		/// pad to min width and height
		xSize = Math.min(x.full, x.size),
		ySize = Math.min(y.full, y.size),
		useBox = (this.useBox || hs.padToMinWidth);
	
	if (xSize / ySize > ratio) { // width greater
		xSize = ySize * ratio;
		if (xSize < x.minSize) { // below minWidth
			xSize = x.minSize;
			ySize = xSize / ratio;
		}
		changed = true;
	
	} else if (xSize / ySize < ratio) { // height greater
		ySize = xSize / ratio;
		changed = true;
	}
	
	if (hs.padToMinWidth && x.full < x.minSize) {
		x.imgSize = x.full;
		y.size = y.imgSize = y.full;
	} else if (this.useBox) {
		x.imgSize = xSize;
		y.imgSize = ySize;
	} else {
		x.size = xSize;
		y.size = ySize;
	}
	/*<? if ($cfg->overlays) : ?>s*/
	this.fitOverlayBox(useBox ? null : ratio);
	/*<? endif ?>s*/
	
	/// update imgSize if y.size was reduced in fitOverlayBox
	if (useBox && y.size < y.imgSize) {
		y.imgSize = y.size;
		x.imgSize = y.size * ratio;
	}	
	
	/// if the size chaged, reposition the popup
	if (changed || useBox) {
		x.pos = x.tpos - x.cb + x.tb;
		x.minSize = x.size;
		this.justify(x, true);
	
		y.pos = y.tpos - y.cb + y.tb;
		y.minSize = y.size;
		this.justify(y, true);
		if (this.overlayBox) this.sizeOverlayBox();
	}
},
/*<? if ($cfg->overlays) : ?>s*/
fitOverlayBox : function(ratio) {
	var x = this.x, y = this.y;
	/// make place for dynamic-height overlays positioned above and below
	if (this.overlayBox) {
		while (y.size > this.minHeight && x.size > this.minWidth 
				&&  y.get('wsize') > y.get('fitsize')) {
			y.size -= 10;
			if (ratio) x.size = y.size * ratio;
			this.sizeOverlayBox(0, 1);
		}
	}
},
/*<? endif ?>s*/
/*<? if ($cfg->html && $cfg->positioning) : ?>*/
reflow : function () {
	if (this.scrollerDiv) { /// errors in contact form on web page
		var h = /iframe/i.test(this.scrollerDiv.tagName) ? this.getIframePageHeight() + 1 +'px' : 'auto';
		if (this.body) this.body.style.height = h;
		this.scrollerDiv.style.height = h;
		this.y.setSize(this.innerContent.offsetHeight);
		/*<? if ($cfg->transitions) : ?>s*/
		hs.setDimmerSize(this);
		/*<? endif ?>s*/
	}
},
/*<? endif // html && positioning ?>s*/
/*<? endif // autosize ?>*/
show : function () {
	var x = this.x, y = this.y;
	/*<? if ($cfg->hideelements) : ?>s*/
	this.doShowHide('hidden');
	/*<? endif ?>s*/
	/*<? if ($cfg->events) : ?>s*/
	hs.fireEvent(this, 'onBeforeExpand');
	/*<? endif ?>s*/
	/*<? if ($cfg->thumbstrip) : ?>s*/
	if (this.slideshow && this.slideshow.thumbstrip) this.slideshow.thumbstrip.selectThumb();
	/*<? endif ?>s*/
	
	// Apply size change
	this.changeSize(
		1, {
			wrapper: {
				width : x.get('wsize'),
				height : y.get('wsize'),
				left: x.pos,
				top: y.pos
			},
			content: {
				/*<? if ($cfg->autosize) : ?>s*/
				left: x.p1 + x.get('imgPad'),
				top: y.p1 + y.get('imgPad'),
				/*<? endif ?>s*/
				width: /*<? if ($cfg->autosize) : ?>s*/x.imgSize || /*<? endif ?>s*/x.size,
				height: /*<? if ($cfg->autosize) : ?>s*/y.imgSize || /*<? endif ?>s*/y.size
			}
		},
		hs.expandDuration
	);
},

changeSize : function(up, to, dur) {
	/*<? if ($cfg->transitions) : ?>s*/
	// transition
	var trans = this.transitions,
	other = up ? (this.last ? this.last.a : null) : hs.upcoming,
	t = (trans[1] && other 
			&& hs.getParam(other, 'transitions')[1] == trans[1]) ?
		trans[1] : trans[0];
		
	if (this[t] && t != 'expand') {
		this[t](up, to);
		return;
	}
	/*<? endif ?>s*/
	/*<? if ($cfg->outlines) : ?>*/
	if (this.outline && !this.outlineWhileAnimating) {
		if (up) this.outline.setPosition();
		else this.outline.destroy(
				/*<? if ($cfg->html) : ?>s*/
				(this.isHtml && this.preserveContent)
				/*<? endif ?>s*/);
	}
	/*<? endif ?>s*/
	
	/*<? if ($cfg->overlays) : ?>*/
	if (!up) this.destroyOverlays();
	/*<? endif ?>s*/
	
	var exp = this,
		x = exp.x,
		y = exp.y,
		easing = this.easing;
	if (!up) easing = this.easingClose || easing;
		
	/// what to run after the animation
	var after = up ?
		function() {
			/*<? if ($cfg->outlines) : ?>*/	
			if (exp.outline) exp.outline.table.style.visibility = "visible";
			/*<? endif ?>s*/
			setTimeout(function() {
				exp.afterExpand();
			}, 50);
		} :
		function() {
			exp.afterClose();
		};
	
	/// initial wrapper position
	if (up) hs.setStyles( this.wrapper, {
		width: x.t +'px',
		height: y.t +'px'
	});
	/*<? if ($cfg->html) : ?>s*/
	/// set initial positions for the HTML expand animation
	if (this.isHtml) {
		var mcPos = {
			left: (x.pos - x.tpos + x.cb - x.tb) +'px',
			top: (y.pos - y.tpos + y.cb - y.tb) +'px'
		};
		if (up) {
			hs.setStyles(this.wrapper, {
				left: (x.tpos - x.cb + x.tb) +'px',
				top: (y.tpos - y.cb + y.tb) +'px'
			});
			hs.setStyles(this.mediumContent, mcPos);
			mcPos = { left: 0, top: 0 };
		}
		
		hs.animate(this.mediumContent, mcPos, dur, easing);
	}
	/*<? endif ?>s*/
	
	/// animate the wrapper
	if (this.fadeInOut) {
		hs.setStyles(this.wrapper, { opacity: up ? 0 : 1 });
		hs.extend(to.wrapper, { opacity: up }); /// up is 1 or 0
	}
	/*<? if ($cfg->outlines) : ?>s*/
	if (this.outline && this.outlineWhileAnimating) {
		var wrapStep =  function(val, args) {
			if (args.prop == 'height') exp.outline.setPosition(1, 0, 1);
		}
	}
	hs.animate( this.wrapper, to.wrapper, {
		duration: dur,
		easing: easing,
		step: wrapStep
	});
	/*<? else : ?>s*/
	hs.animate( this.wrapper, to.wrapper, dur, easing);
	/*<? endif ?>s*/
	/// animate the content
	hs.animate( this.content, to.content, dur, easing, after);
	
	/// set the visibility
	if (up) {
		this.wrapper.style.visibility = 'visible';
		this.content.style.visibility = 'visible';
		/*<? if ($cfg->html) : ?>s*/
		if (this.isHtml) this.innerContent.style.visibility = 'visible';
		/*<? endif ?>s*/
		this.a.className += ' highslide-active-anchor';
	}
},


/*<? if ($cfg->transitions) : ?>*/
fade : function(up, to) {
	/*<? if ($cfg->outlines) : ?>s*/
	this.outlineWhileAnimating = false;
	/*<? endif ?>s*/
	var exp = this,	t = up ? hs.expandDuration : 0;
	
	if (up) {
		hs.animate(this.wrapper, to.wrapper, 0); /// animate because missing units
		hs.setStyles(this.wrapper, { opacity: 0, visibility: 'visible' });
		hs.animate(this.content, to.content, 0);
		this.content.style.visibility = 'visible';

		hs.animate(this.wrapper, { opacity: 1 }, t, null, 
			function() { exp.afterExpand(); });
	}
	/*<? if ($cfg->outlines) : ?>*/
	if (this.outline) {
		this.outline.table.style.zIndex = this.wrapper.style.zIndex;
		var dir = up || -1, 
			offset = this.outline.offset,
			startOff = up ? 3 : offset,
			endOff = up? offset : 3;
		for (var i = startOff; dir * i <= dir * endOff; i += dir, t += 25) {
			(function() {
				var o = up ? endOff - i : startOff - i;
				setTimeout(function() {
					exp.outline.setPosition(0, o, 1);
				}, t);
			})();
		}
	}
	/*<? endif ?>*/
	
	if (up) {}//setTimeout(function() { exp.afterExpand(); }, t+50);
	else {
		setTimeout( function() {
			/*<? if ($cfg->outlines) : ?>s*/
			if (exp.outline) exp.outline.destroy(exp.preserveContent);
			/*<? endif ?>s*/
			/*<? if ($cfg->overlays) : ?>*/
			exp.destroyOverlays();
			/*<? endif ?>s*/
	
			hs.animate( exp.wrapper, { opacity: 0 }, null, null, function(){
				exp.afterClose();
			});
		}, t);		
	}
},

crossfade : function (up, to) {
	if (!up) return;
	var exp = this, 
		dur = hs.transitionDuration, 
		last = exp.last,
		x = exp.x, 
		y = exp.y,
		lastX = last.x,
		lastY = last.y,
		overlayBox = exp.overlayBox,
		wrapper = this.wrapper,
		content = this.content;
	/*<? if ($cfg->dragging) : ?>s*/
	hs.removeEventListener(document, 'mousemove', hs.dragHandler);
	/*<? endif ?>s*/
	
	/*<? if ($cfg->outlines) : ?>s*/
	this.outline = last.outline;
	if (this.outline) this.outline.exp = exp;
	last.outline = null;
	/*<? endif ?>s*/
	
	/// set initial positions
	last.wrapper.style.overflow = 'hidden';
	hs.setStyles(wrapper, {
		left: lastX.pos +'px',
		top: lastY.pos +'px',
		width: lastX.get('wsize') +'px',
		height: lastY.get('wsize') +'px'
	});
	hs.setStyles(content, {
		display: 'none',
		width: (x.imgSize || x.size) +'px', 
		height: (y.imgSize || y.size) +'px',
		left: (x.p1 + x.get('imgPad')) +'px',
		top: (y.p1 + y.get('imgPad')) + 'px'
	});
	
	/// dummy borders
	var fadeBox = hs.createElement('div', {
		className: 'highslide-image'
	}, { 
		position: 'absolute', 
		zIndex: 4,
		overflow: 'hidden',
		display: 'none',
		left: (lastX.p1 + lastX.get('imgPad')) +'px',
		top: (lastY.p1 + lastY.get('imgPad')) +'px',
		width: (lastX.imgSize || lastX.size) +'px',
		height: (lastY.imgSize || lastY.size) +'px'
	});
	
	/*<? if ($cfg->html) : ?>s*/
	if (this.isHtml) hs.setStyles(this.mediumContent, { 
		left: 0,
		top: 0
	});
	/*<? endif ?>s*/
	/*<? if ($cfg->overlays) : ?>s*/
	if (overlayBox) hs.setStyles(overlayBox, {
		overflow: 'visible',
		left: (lastX.p1 + lastX.cb) +'px',
		top: (lastY.p1 + lastY.cb) +'px',
		width: lastX.size +'px',
		height: lastY.size +'px'
	});
	/*<? endif ?>s*/
	/// append oldImg and newImg
	var names = { oldImg: last, newImg: this };
	for (var n in names) { 	
		this[n] = names[n].content.cloneNode(1);
		hs.setStyles(this[n], {
			position: 'absolute',
			border: 0,
			visibility: 'visible'
		});
		fadeBox.appendChild(this[n]);
	}
	hs.setStyles(this.oldImg, {
		left: 0,
		top: 0
	});	
	hs.setStyles(this.newImg, {
		display: 'block',
		opacity: 0,
		left: (x.pos - lastX.pos + x.p1 - lastX.p1 + x.get('imgPad') - lastX.get('imgPad')) +'px',
		top: (y.pos - lastY.pos + y.p1 - lastY.p1 + y.get('imgPad') - lastY.get('imgPad')) +'px'
	});
	wrapper.appendChild(fadeBox);
	
	/*<? if ($cfg->overlays) : ?>s*/
	if (overlayBox) {
		overlayBox.className = '';
		wrapper.appendChild(overlayBox);
	}			
	/*<? endif ?>s*/
	fadeBox.style.display = '';
	last.content.style.display = 'none';

	if (hs.safari) { /// allow crossfades in Safari < 3.1
		var match = navigator.userAgent.match(/Safari\/([0-9]{3})/);
		if (match && parseInt(match[1]) < 525) wrapper.style.visibility = 'visible';
	} 
	
	/// what to do after crossfade
	function end() {		
		wrapper.style.visibility = content.style.visibility = 'visible';
		content.style.display = 'block';
		fadeBox.style.display = 'none';
		exp.a.className += ' highslide-active-anchor';
		exp.afterExpand();
		last.afterClose();
	}

	hs.animate(last.wrapper, { 
		left: x.pos,
		top: y.pos,
		width: x.get('wsize'),
		height: y.get('wsize')
	}, dur);
	
	hs.animate(fadeBox, {
		width: x.imgSize || x.size,
		height: y.imgSize || y.size,
		left: x.p1 + x.get('imgPad'),
		top: y.p1 + y.get('imgPad')
	}, dur);
	
	hs.animate(this.oldImg, {
		left: (lastX.pos - x.pos + lastX.p1 - x.p1 + lastX.get('imgPad') - x.get('imgPad')),
		top: (lastY.pos - y.pos + lastY.p1 - y.p1 + lastY.get('imgPad') - y.get('imgPad'))
	}, dur);		
	
	hs.animate(this.newImg, {
		opacity: 1,
		left: 0,
		top: 0
	}, dur);
	
	/*<? if ($cfg->overlays) : ?>s*/
	if (overlayBox) hs.animate(overlayBox, {
		left: x.p1 + x.cb,
		top: y.p1 + y.cb,
		width: x.size,
		height: y.size
	}, dur);
	/*<? endif ?>s*/
	
	/*<? if ($cfg->outlines) : ?>s*/
	if (this.outline) var wrapStep =  function(val, args) {		
		if (args.prop == 'height') exp.outline.setPosition(1);
	};
	hs.animate(wrapper, to.wrapper, {
		duration: dur, 
		callback: end,
		step: wrapStep
	});
	/*<? else : ?>s*/
	hs.animate(wrapper, to.wrapper, dur, null, end);
	
	/*<? endif ?>s*/
	
	fadeBox.style.visibility = 'visible';
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
/*<? endif // transitions ?>*/

afterExpand : function() {
	this.isExpanded = true;	
	this.focus();
	/*<? if ($cfg->iframe || $cfg->flash) : ?>*/
	if (this.isHtml && this.objectLoadTime == 'after') this.writeExtendedContent();
	/*<? endif ?>s*/

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
	
	/*<? if ($cfg->transitions) : ?>s*/
	/// dim the page background
	if (this.dimmingOpacity) hs.dim(this);
	/*<? endif ?>s*/

	/*<? if ($cfg->navigation) : ?>s*/
	if (hs.upcoming && hs.upcoming == this.a) hs.upcoming = null;
	/*<? endif ?>s*/
	
	/*<? if ($cfg->outlines) : ?>s*/
	/// download and prepare the next outline
	this.prepareNextOutline();
	/*<? endif ?>s*/
	
	/*<? if ($cfg->overlays) : ?>*/
	/// set the mouse flag and show the overlays
	var p = hs.page, mX = hs.mouse.x + p.scrollLeft, mY = hs.mouse.y + p.scrollTop;
	this.mouseIsOver = this.x.pos < mX && mX < this.x.pos + this.x.get('wsize')
		&& this.y.pos < mY && mY < this.y.pos + this.y.get('wsize');	
	if (this.overlayBox) this.showOverlays();
	/*<? endif ?>s*/
	
	/*<? if ($cfg->events) : ?>s*/
	hs.fireEvent(this, 'onAfterExpand');	
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
	var arr = hs.getAnchors().groups[this.slideshowGroup || 'none'];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == this.a) return i; 
	}
	return null;
},
/*<? endif ?>*/
/*<? if ($cfg->slideshow) : ?>*/
getNumber : function() {
	if (this[this.numberPosition]) {
		var arr = hs.anchors.groups[this.slideshowGroup || 'none'];
		var s = hs.lang.number.replace('%1', this.getAnchorIndex() + 1).replace('%2', arr.length);
		/// prepend to caption or heading
		this[this.numberPosition].innerHTML = 
			'<div class="highslide-number">'+ s +'</div>'+ this[this.numberPosition].innerHTML;
	}
},
initSlideshow : function() {
	if (!this.last) { /// opened from thumb	
		for (var i = 0; i < hs.slideshows.length; i++) {
			var ss = hs.slideshows[i], sg = ss.slideshowGroup;
			if (typeof sg == 'undefined' || sg === null || sg === this.slideshowGroup) 
				this.slideshow = new hs.Slideshow(this, ss);
		} 
	} else { /// opened subsequently, always the same slideshowGroup
		this.slideshow = this.last.slideshow;
	}
	var ss = this.slideshow;
	if (!ss) return;
	var exp = ss.exp = this;
	
	ss.checkFirstAndLast();
	ss.disable('full-expand');
	if (ss.controls) {
		/*<? 
		/// var o = ss.overlayOptions || {}, re = /^(heading|caption)-(before|after)$/;
		/// if (re.test(o.position)) {
		/// 	this.capInsert = o.position.match(re);
		/// 	this.capInsert[0] = ss.controls;
		/// } else {
		/// 	o.overlayId = ss.controls;
		/// 	o.hsId = 'controls';
		/// }
		?>s*/
		var o = ss.overlayOptions || {};
		o.overlayId = ss.controls;
		o.hsId = 'controls';		
		this.createOverlay(o);
	}
	/*<? if ($cfg->thumbstrip) : ?>s*/
	if (ss.thumbstrip) ss.thumbstrip.add(this);
	/*<? endif ?>s*/
	
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
	hs.undim(this.key);
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
	this.credits = hs.createElement('a', {
		href: hs.creditsHref,
		className: 'highslide-credits',
		innerHTML: hs.lang.creditsText,
		title: hs.lang.creditsTitle
	});
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
		else if (type == 'heading' && !hs.fireEvent(this, 'onBeforeGetHeading')) return;
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
		if (!this[type] && !s && this.numberPosition == type) s = '\n';
		/*<? endif ?>s*/
		
		if (!this[type] && s) this[type] = hs.createElement('div', 
				{ className: 'highslide-'+ type, innerHTML: s } );
		
		/*<? /* if ($cfg->slideshow) : 
		/// var ins = this.capInsert;
		/// if (this[type] && ins && ins[1] == type) {
		/// 	if (ins[2] == 'after') this[type].appendChild(ins[0]);
		/// 	else this[type].insertBefore(ins[0], this[type].firstChild);
		/// }
		 endif */ ?>s*/
		
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
// on end move and resize
doShowHide : function(visibility) {
	if (hs.hideSelects) this.showHideElements('SELECT', visibility);
	if (hs.hideIframes) this.showHideElements('IFRAME', visibility);
	if (hs.geckoMac) this.showHideElements('*', visibility);
},
showHideElements : function (tagName, visibility) {
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
					var clearsX = (elPos.x + elPos.w < this.x.get('opos') 
						|| elPos.x > this.x.get('opos') + this.x.get('osize'));
					var clearsY = (elPos.y + elPos.h < this.y.get('opos') 
						|| elPos.y > this.y.get('opos') + this.y.get('osize'));
				/*<? if ($cfg->transitions) : ?>s*/
				}
				/*<? endif ?>s*/
				var wrapperKey = hs.getWrapperKey(els[i]);
				if (!clearsX && !clearsY && wrapperKey != this.key) { // element falls behind image
					if (!hiddenBy) {
						els[i].setAttribute('hidden-by', '['+ this.key +']');
						els[i].origProp = els[i].style[prop];
						els[i].style[prop] = 'hidden';
						
					} else if (hiddenBy.indexOf('['+ this.key +']') == -1) {
						els[i].setAttribute('hidden-by', hiddenBy + '['+ this.key +']');
					}
				} else if ((hiddenBy == '['+ this.key +']' || hs.focusKey == wrapperKey)
						&& wrapperKey != this.key) { // on move
					els[i].setAttribute('hidden-by', '');
					els[i].style[prop] = els[i].origProp || '';
				} else if (hiddenBy && hiddenBy.indexOf('['+ this.key +']') > -1) {
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
		
		if (hs.restoreCursor) {
			hs.styleRestoreCursor = window.opera ? 'pointer' : 'url('+ hs.graphicsDir + hs.restoreCursor +'), pointer';
			if (hs.ie && hs.uaVersion < 6) hs.styleRestoreCursor = 'hand';
			this.content.style.cursor = hs.styleRestoreCursor;
		}
		/*<? if ($cfg->html) : ?>s*/
	}/*<? endif ?>*/
	hs.focusKey = this.key;
	/*<? if ($cfg->navigation) : ?>s*/	
	hs.addEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
	/*<? endif ?>s*/
	/*<? if ($cfg->events) : ?>s*/	
	hs.fireEvent(this, 'onFocus');
	/*<? endif ?>s*/	
},
/*<? if ($cfg->dragging || ($cfg->overlays && $cfg->autosize)) : ?>s*/
moveTo: function(x, y) {
	this.x.setPos(x);
	this.y.setPos(y);
},
resize : function (e) {
	var w, h, r = e.width / e.height;
	
	/// get width and height above min values
	w = Math.max(e.width + e.dX, Math.min(this.minWidth, this.x.full));
	if (this.isImage && Math.abs(w - this.x.full) < 12) w = this.x.full; /// snap to actual size
	h = /*<? if ($cfg->html) : ?>s*/ this.isHtml ? e.height + e.dY : /*<? endif ?>s*/ w / r;
	
	/// check new height and correct for aspect ratio
	if (h < Math.min(this.minHeight, this.y.full)) {
		h = Math.min(this.minHeight, this.y.full);
		if (this.isImage) w = h * r;
	}
	this.resizeTo(w, h);
},
resizeTo: function(w, h) {
	this.y.setSize(h); /// y first due to size overlay calculation
	this.x.setSize(w);
},
/*<? endif ?>*/
close : function() {
	if (this.isClosing || !this.isExpanded) return;
	/*<? if ($cfg->transitions) : ?>s*/
	/// user clicks close while upcoming is loading
	if (this.transitions[1] == 'crossfade' && hs.upcoming) {
		hs.getExpander(hs.upcoming).cancelLoading();
		hs.upcoming = null;
	}
	/*<? endif ?>s*/	
	/*<? if ($cfg->events) : ?>s*/
	if (!hs.fireEvent(this, 'onBeforeClose')) return;
	/*<? endif ?>s*/
	this.isClosing = true;
	/*<? if ($cfg->slideshow) : ?>s*/
	if (this.slideshow && !hs.upcoming) this.slideshow.pause();
	/*<? endif ?>s*/
	/*<? if ($cfg->navigation) : ?>*/
	hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
	/*<? endif ?>*/
	try {
		/*<? if ($cfg->html) : ?>s*/
		if (this.isHtml) this.htmlPrepareClose();
		/*<? endif ?>s*/
		this.content.style.cursor = 'default';
		this.changeSize(
			0, {
				wrapper: {
					width : this.x.t,
					height : this.y.t,
					left: this.x.tpos - this.x.cb + this.x.tb,
					top: this.y.tpos - this.y.cb + this.y.tb
				},
				content: {
					/*<? if ($cfg->autosize) : ?>s*/
					left: 0,
					top: 0,
					/*<? endif ?>s*/
					width: this.x.t,
					height: this.y.t
				}
			}, hs.restoreDuration
		);
	} catch (e) { this.afterClose(); }
},
/*<? if ($cfg->html) : ?>*/
htmlPrepareClose : function() {
	if (hs.geckoMac) { // bad redraws
		if (!hs.mask) hs.mask = hs.createElement('div', null, 
			{ position: 'absolute' }, hs.container);
		hs.setStyles(hs.mask, { width: this.x.size +'px', height: this.y.size +'px', 
			left: this.x.pos +'px', top: this.y.pos +'px', display: 'block' });			
	}
	/*<? if ($cfg->flash) : ?>s*/
	if (this.objectType == 'swf') try { hs.$(this.body.id).StopPlay(); } catch (e) {}
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
	if (this.objectType == 'swf') swfobject.removeSWF(this.body.id);
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

awake : function() {try {
	
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
	/*<? if ($cfg->slideshow) : ?>s*/
	if (this.slideshow) { /// detach controls when not crossfading, to prevent destruction
		this.initSlideshow();
	}
	/*<? endif ?>s*/
		
	this.show();
} catch (e) {}


},
/*<? endif // html ?>s*/
/*<? if ($cfg->overlays) : ?>*/
createOverlay : function (o) {
	var el = o.overlayId/*<? if ($cfg->viewport) : ?>s*/, 
		relToVP = (o.relativeTo == 'viewport' && !/panel$/.test(o.position))/*<? endif ?>s*/;
	if (typeof el == 'string') el = hs.getNode(el);
	if (o.html) el = hs.createElement('div', { innerHTML: o.html });
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
		'div', {
			id: 'hsId'+ hs.idCounter++,
			hsId: o.hsId
		}, {
			position: 'absolute',
			visibility: 'hidden',
			width: width,
			direction: hs.lang.cssDirection || '',
			opacity: 0
		},
		/*<? if ($cfg->viewport) : ?>*/relToVP ? hs.viewport : /*<? endif ?>s*/this.overlayBox,
		true
	);
	/*<? if ($cfg->viewport) :?>s*/
	if (relToVP) overlay.hsKey = this.key;
	/*<? endif ?>s*/
	
	overlay.appendChild(el);
	hs.extend(overlay, { /// default options
		opacity: 1,
		offsetX: 0,
		offsetY: 0,
		dur: (o.fade === 0 || o.fade === false || (o.fade == 2 && hs.ie)) ? 0 : 250
	});
	hs.extend(overlay, o); /// given options
		
	if (this.gotOverlays) { /// backwards compat: defined after expansion 
		this.positionOverlay(overlay);
		if (!overlay.hideOnMouseOut || this.mouseIsOver) 
			hs.animate(overlay, { opacity: overlay.opacity }, overlay.dur);
	}
	hs.push(this.overlays, hs.idCounter - 1);
},
positionOverlay : function(overlay) {
	var p = overlay.position || 'middle center',
		/*<? if ($cfg->viewport) : ?>s*/
		relToVP = (overlay.relativeTo == 'viewport'),
		/*<? endif ?>s*/
		offX = overlay.offsetX,
		offY = overlay.offsetY;
	
	/// display but hide the viewport to get overlay sizes
	/*<? if ($cfg->viewport) : ?>s*/
	if (relToVP) {
		hs.viewport.style.display = 'block';
		overlay.hsKey = this.key;
		if (overlay.offsetWidth > overlay.parentNode.offsetWidth) /// don't spill out
			overlay.style.width = '100%';
	} else
	/*<? endif ?>s*/
	if (overlay.parentNode != this.overlayBox) this.overlayBox.appendChild(overlay);
	
	/// horizontal
	if (/left$/.test(p)) overlay.style.left = offX +'px'; 
	
	if (/center$/.test(p))	hs.setStyles (overlay, { 
		left: '50%',
		marginLeft: (offX - Math.round(overlay.offsetWidth / 2)) +'px'
	});	
	
	if (/right$/.test(p)) overlay.style.right = - offX +'px';
		
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
	/*<? if ($cfg->viewport) : ?>s*/
	var parOff = overlay.parentNode.offsetHeight;
	overlay.style.height = 'auto';
	if (relToVP && overlay.offsetHeight > parOff)  /// don't spill out
		overlay.style.height = hs.ieLt7 ? parOff +'px' : '100%';
	/*<? endif ?>s*/

	if (/^top/.test(p)) overlay.style.top = offY +'px'; 
	if (/^middle/.test(p))	hs.setStyles (overlay, { 
		top: '50%', 
		marginTop: (offY - Math.round(overlay.offsetHeight / 2)) +'px'
	});	
	if (/^bottom/.test(p)) overlay.style.bottom = - offY +'px';
	
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
			position: 'relative',
			left: (- this.x.p1 - this.x.cb) +'px',
			right: (- this.x.p2 - this.x.cb) +'px',
			top: '100%',
			marginTop: this.y.cb +'px',
			width: 'auto'
		});
		this.y.p2 = overlay.offsetHeight;
		overlay.style.position = 'absolute'; /// ie needs rel pos to correctly find p2
	}
},

getOverlays : function() {	
	this.getInline(['heading', 'caption'], true);
	/*<? if ($cfg->slideshow) : ?>s*/
	this.getNumber();
	/*<? endif ?>s*/
	/*<? if ($cfg->events) : ?>s*/
	if (this.caption) hs.fireEvent(this, 'onAfterGetCaption');
	if (this.heading) hs.fireEvent(this, 'onAfterGetHeading');
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
		if (/panel$/.test(o.position)) this.positionOverlay(o);
		else hs.push(os, o);
	}
	
	/// get other positions
	for (var i = 0; i < os.length; i++) this.positionOverlay(os[i]);
	this.gotOverlays = true;
},
genOverlayBox : function() {
	if (!this.overlayBox) this.overlayBox = hs.createElement (
		'div', {
			className: this.wrapperClassName /// for overlay size calculation
		}, {
			position : 'absolute',
			width: (this.x.size || this.x.full) +'px', /// initial overlay size
			height: (this.y.size || this.y.full) +'px',
			visibility : 'hidden',
			overflow : 'hidden', /// to prevent flickering on large overlays
			zIndex : hs.ie ? 4 : null
		},
		hs.container,
		true
	);
},
sizeOverlayBox : function(doWrapper, doPanels) {
	var overlayBox = this.overlayBox, 
		x = this.x,
		y = this.y;
	hs.setStyles( overlayBox, {
		width: x.size +'px', 
		height: y.size +'px'
	});
	if (doWrapper || doPanels) {
		for (var i = 0; i < this.overlays.length; i++) {
			var o = hs.$('hsId'+ this.overlays[i]);
			var ie6 = (hs.ieLt7 || document.compatMode == 'BackCompat');
			if (o && /^(above|below)$/.test(o.position)) {
				/// ie6 doesn't understand absolute left + right
				if (ie6) {
					o.style.width = (overlayBox.offsetWidth + 2 * x.cb
						+ x.p1 + x.p2) +'px';
				}
				/// renew p1/p2
				y[o.position == 'above' ? 'p1' : 'p2'] = o.offsetHeight;
			}
			/// ie6 doesn't understand absolute top + bottom
			if (o && ie6 && /^(left|right)panel$/.test(o.position)) {
				o.style.height = (overlayBox.offsetHeight + 2* y.cb) +'px';
			}
		}
	}
	if (doWrapper) {
		hs.setStyles(this.content, {
			top: y.p1 +'px'
		});
		hs.setStyles(overlayBox, {
			top: (y.p1 + y.cb) +'px'
		});
	}
},

showOverlays : function() {
	/// get the overlay box
	var b = this.overlayBox;
	b.className = '';
	hs.setStyles(b, {
		top: (this.y.p1 + this.y.cb) +'px',
		left: (this.x.p1 + this.x.cb) +'px',
		overflow : 'visible'
	});
	if (hs.safari) b.style.visibility = 'visible';
	this.wrapper.appendChild (b);
	
	/// show all
	for (var i = 0; i < this.overlays.length; i++) {
		var o = hs.$('hsId'+ this.overlays[i]);
		o.style.zIndex =/*<? if ($cfg->slideshow) : ?>*/ o.hsId == 'controls' ? 5 :/*<? endif ?>*/ 4;
		if (!o.hideOnMouseOut || this.mouseIsOver) {
			o.style.visibility = 'visible';
			hs.animate(o, { opacity: o.opacity }, o.dur);
		}
	}
},

destroyOverlays : function() {
	if (!this.overlays.length) return;
	/*<? if ($cfg->viewport) : ?>s*/
	for (var i = 0; i < this.overlays.length; i++) {
		var o = hs.$('hsId'+ this.overlays[i]);
		if (o.parentNode == hs.viewport) hs.discardElement(o);
	}
	/*<? endif ?>s*/
	/*<? if ($cfg->slideshow) : ?>s*/
	if (this.slideshow) { /// detach controls when not crossfading, to prevent destruction
		var c = this.slideshow.controls;
		if (c && hs.getExpander(c) == this) c.parentNode.removeChild(c);
	}
	/*<? endif ?>s*/
	/*<? if ($cfg->html) : ?>s*/
	if (this.isHtml && this.preserveContent) {
		this.overlayBox.style.top = '-9999px';
		hs.container.appendChild(this.overlayBox);
	} else 
	/*<? endif ?>s*/
	hs.discardElement(this.overlayBox);
},

/*<? endif ?>*/
/*<? if ($cfg->overlays && $cfg->autosize) : ?>*/
createFullExpand : function () {
	/*<? if ($cfg->slideshow) : ?>s*/
	if (this.slideshow && this.slideshow.controls) {
		this.slideshow.enable('full-expand');
		return;
	}
	/*<? endif ?>s*/
	this.fullExpandLabel = hs.createElement(
		'a', {
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
		
		this.focus();
		var xSize = this.x.size;
		this.resizeTo(this.x.full, this.y.full);
		
		var xpos = this.x.pos - (this.x.size - xSize) / 2;
		if (xpos < hs.marginLeft) xpos = hs.marginLeft;
		
		this.moveTo(xpos, this.y.pos);
		
		/*<? if ($cfg->hideelements) : ?>s*/
		this.doShowHide('hidden');
		/*<? endif ?>s*/
		/*<? if ($cfg->transitions) : ?>s*/
		hs.setDimmerSize(this);
		/*<? endif ?>s*/
	
	} catch (e) {
		this.error(e);
	}
},
/*<? endif ?>*/

afterClose : function () {
	this.a.className = this.a.className.replace('highslide-active-anchor', '');
	/*<? if ($cfg->hideelements) : ?>*/
	this.doShowHide('visible');
	/*<? endif ?>s*/	
	/*<? if ($cfg->html) : ?>*/
	if (this.isHtml && this.preserveContent
			/*<? if ($cfg->transitions) : ?>*/ && this.transitions[1] != 'crossfade'/*<? endif ?>s*/) {
		this.sleep();
	} else { 
		/*<? endif ?>s*/
		/*<? if ($cfg->outlines) : ?>s*/
		if (this.outline && this.outlineWhileAnimating) this.outline.destroy();
		/*<? endif ?>s*/
	
		hs.discardElement(this.wrapper);
		/*<? if ($cfg->html) : ?>s*/
	}
	if (hs.mask) hs.mask.style.display = 'none';
	/*<? endif // html ?>s*/
	/*<? if ($cfg->viewport) : ?>s*/
	if (!hs.viewport.childNodes.length) hs.viewport.style.display = 'none';
	/*<? endif ?>*/
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
	this.xmlHttp.open("GET", this.src+ '?dummy='+ (new Date()).getTime(), true);
	this.xmlHttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	this.xmlHttp.send(null);
},

getElementContent : function() {
	hs.init();
	var attribs = window.opera || hs.ie6SSL ? { src: 'about:blank' } : null; /// Opera needs local src
	
	this.iframe = hs.createElement('iframe', attribs, 
		{ position: 'absolute', top: '-9999px' }, hs.container);
		
	this.loadHTML();
},

loadHTML : function() {
	var s = this.cachedGet || this.xmlHttp.responseText;
	if (this.pre) hs.cachedGets[this.src] = s;
	if (!hs.ie || hs.uaVersion >= 5.5) {
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
hs.Slideshow = function (exp, options) {
	if (hs.dynamicallyUpdateAnchors !== false) hs.updateAnchors();
	this.exp = exp;
	for (var x in options) this[x] = options[x];
	if (this.useControls) this.getControls();
	/*<? if ($cfg->thumbstrip) : ?>s*/
	if (this.thumbstrip) this.thumbstrip = hs.Thumbstrip(this);
	/*<? endif ?>s*/
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
	//this.disable('full-expand');
},
checkFirstAndLast: function() {
	/// disable first and last previous and next
	if (this.repeat || !this.controls) return;
	var cur = this.exp.getAnchorIndex(), re = /disabled$/;
	if (cur == 0) 
		this.disable('previous');
	else if (re.test(this.btn.previous.getElementsByTagName('a')[0].className))
		this.enable('previous');
	if (cur + 1 == hs.anchors.groups[this.exp.slideshowGroup || 'none'].length) {
		this.disable('next');
		this.disable('play');
	} else if (re.test(this.btn.next.getElementsByTagName('a')[0].className)) {
		this.enable('next');
		this.enable('play');
	}
},
enable: function(btn) {
	if (!this.btn) return;
	var sls = this, a = this.btn[btn].getElementsByTagName('a')[0], re = /disabled$/;
	a.onclick = function() {
		sls[btn]();
		return false;
	};
	if (re.test(a.className)) a.className = a.className.replace(re, '');
},
disable: function(btn) {
	if (!this.btn) return;
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
/*<? endif // slideshow ?>s*/
/*<? if ($cfg->thumbstrip) : ?>s*/
hs.Thumbstrip = function(slideshow) {
	function add (exp) {
		hs.extend(options || {}, {
			overlayId: dom,
			hsId: 'thumbstrip'
		});
		if (hs.ieLt7) options.fade = 0; /// prevents sporadic crashes when scroll icons are visible
		exp.createOverlay(options);
		
		/// hide the marker if it falls outside the overlay (doesn't work on dom directly)
		hs.setStyles(dom.parentNode, { overflow: 'hidden' });
	};
	
	function scroll (delta) {	
		selectThumb(undefined, Math.round(delta * dom[isX ? 'offsetWidth' : 'offsetHeight'] * 0.7));
	};
	
	function selectThumb (i, scrollBy) {
		/// if no i, get the index of the active expander's thumb
		if (i === undefined) for (var j = 0; j < group.length; j++) {
			if (group[j] == slideshow.exp.a) {
				i = j;
				break;
			}
		}
		/// set some vars
		var as = dom.getElementsByTagName('a'),
			active = as[i],
			cell = active.parentNode,
			left = isX ? 'Left' : 'Top',
			right = isX ? 'Right' : 'Bottom',
			width = isX ? 'Width' : 'Height',
			offsetLeft = 'offset' + left,
			offsetWidth = 'offset' + width,
			minTblPos = div.parentNode.parentNode[offsetWidth] - table[offsetWidth],
			curTblPos = parseInt(table.style[isX ? 'left' : 'top']) || 0,
			tblPos = curTblPos,
			mgnRight = 20;

		/// a scroll button has been clicked (no new thumb selected)
		if (scrollBy !== undefined) {
			tblPos = curTblPos - scrollBy;
			if (tblPos > 0) tblPos = 0;
			if (tblPos < minTblPos) tblPos = minTblPos;
	
		} else { /// active thumb has changed
		
			/// update className
			for (var j = 0; j < as.length; j++) as[j].className = '';
			active.className = 'highslide-active-anchor';
			
			/// find the position of the active thumb, with one extra buffer thumb for overview
			var activeLeft = i > 0 ? as[i - 1].parentNode[offsetLeft] : cell[offsetLeft],
				activeRight = cell[offsetLeft] + cell[offsetWidth] + 
					(as[i + 1] ? as[i + 1].parentNode[offsetWidth] : 0);
			
			/// must the strip be moved?
			if (activeRight > div[offsetWidth] - curTblPos) tblPos = div[offsetWidth] - activeRight;
			else if (activeLeft < -curTblPos) tblPos = -activeLeft;
		}
			
		/// place the marker at the thumb
		var markerPos = cell[offsetLeft] + (cell[offsetWidth] - marker[offsetWidth]) / 2 + tblPos;
			
		/// do the animations
		hs.animate(table, isX ? { left: tblPos } : { top: tblPos }, null, 'easeOutQuad');
		hs.animate(marker, isX ? { left: markerPos } : { top: markerPos }, null, 'easeOutQuad');
		
		/// hide or show the scroll buttons
		scrollUp.style.display = tblPos < 0 ? 'block' : 'none';
		scrollDown.style.display = (tblPos > minTblPos)  ? 'block' : 'none';
	};
	

	// initialize
	var group = hs.anchors.groups[slideshow.exp.slideshowGroup || 'none'],
		options = slideshow.thumbstrip, /// slideshow.thumbstrip is overwritten by this object
		mode = options.mode || 'horizontal',
		floatMode = (mode == 'float'),
		tree = floatMode ? ['div', 'ul', 'li', 'span'] : ['table', 'tbody', 'tr', 'td'],
		isX = (mode == 'horizontal'),
		dom = hs.createElement('div', {
				className: 'highslide-thumbstrip highslide-thumbstrip-'+ mode,
				innerHTML:
					'<div class="highslide-thumbstrip-inner">'+
					'<'+ tree[0] +'><'+ tree[1] +'></'+ tree[1] +'></'+ tree[0] +'></div>'+
					'<div class="highslide-scroll-up"><div></div></div>'+
					'<div class="highslide-scroll-down"><div></div></div>'+
					'<div class="highslide-marker"><div></div></div>'
			}, {
				display: 'none'
			}, hs.container),
		domCh = dom.childNodes,
		div = domCh[0],
		scrollUp = domCh[1],
		scrollDown = domCh[2],
		marker = domCh[3],
		table = div.firstChild,
		tbody = dom.getElementsByTagName(tree[1])[0],
		tr;
			
		
	/// add the thumbs to the table
	for (var i = 0; i < group.length; i++) {
		if (i == 0 || !isX) tr = hs.createElement(tree[2], null, null, tbody);
		(function(){
			var a = group[i],
				cell = hs.createElement(tree[3], null, null, tr),
				pI = i;
			hs.createElement('a', {
				href: a.href,
				onclick: function() {
					return hs.transit(a);
				},
				innerHTML: hs.stripItemFormatter ? hs.stripItemFormatter(a) : a.innerHTML
			}, null, cell);
		})();
	}
	
	if (!floatMode) {

		/// make the scroll buttons clickable
		scrollUp.onclick = function () { scroll(-1); };
		scrollDown.onclick = function() { scroll(1); };
	
		/// add scrollwheel event to the thumbstrip
		hs.addEventListener(tbody, document.onmousewheel !== undefined ? 
				'mousewheel' : 'DOMMouseScroll', function(e) {        
			var delta = 0;
	        e = e || window.event;
	        if (e.wheelDelta) { /// IE/Opera
				delta = e.wheelDelta/120;
				if (hs.opera) delta = -delta;
	        } else if (e.detail) { /// mozilla
				delta = -e.detail/3;
	        }
	        if (delta) scroll(-delta * 0.2);
	        if (e.preventDefault) e.preventDefault();
			e.returnValue = false;
		});
	}
	
	return {
		add: add,
		selectThumb: selectThumb
	}
};

/*<? endif // thumbstrip ?>s*/

/// IE Operation aborted error before DOM loaded
if (document.readyState && hs.ie) {
	(function () {
		try {
			document.documentElement.doScroll('left');
		} catch (e) {
			setTimeout(arguments.callee, 50);
			return;
		}
		hs.domReady();
	})();
}

/// keep English strings for fallback
hs.langDefaults = hs.lang;
// history
var HsExpander = hs.Expander;

// set handlers
hs.addEventListener(window, 'load', function() {
	if (hs.expandCursor) {
		/// write the CSS rule to add zoomin.cur in a consistant way
		var sel = '.highslide img', 
			dec = 'cursor: url('+ hs.graphicsDir + hs.expandCursor +'), pointer !important;';
			
		var style = hs.createElement('style', { type: 'text/css' }, null, 
			document.getElementsByTagName('HEAD')[0]);
	
		if (!hs.ie) {
			style.appendChild(document.createTextNode(sel + " {" + dec + "}"));
		} else {
			var last = document.styleSheets[document.styleSheets.length - 1];
			if (typeof(last.addRule) == "object") last.addRule(sel, dec);
		}
	}
});
hs.addEventListener(window, 'resize', function() {
	hs.page = hs.getPageSize();	
	/*<? if ($cfg->viewport) : ?>s*/
	if (hs.viewport) for (var i = 0; i < hs.viewport.childNodes.length; i++) {
		var node = hs.viewport.childNodes[i],
			exp = hs.getExpander(node);
		exp.positionOverlay(node);
		/*<? if ($cfg->thumbstrip) : ?>s*/
		if (node.hsId == 'thumbstrip') exp.slideshow.thumbstrip.selectThumb();
		/*<? endif ?>s*/
	}
	/*<? endif ?>s*/
});
/*<? if ($cfg->overlays) : ?>s*/
hs.addEventListener(document, 'mousemove', function(e) {
	hs.mouse = { x: e.clientX, y: e.clientY	};
});
/*<? endif ?>s*/
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