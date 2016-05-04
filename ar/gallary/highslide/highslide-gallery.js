/*
TODO:
- showCredits = false not working on subsequent slides



*/



/*
hs.Expander.prototype.writeCredits = function () {
	if (this.credits) return;
	this.credits = hs.createElement('a',
		{
			href: hs.creditsHref,
			className: 'highslide-credits',
			innerHTML: hs.creditsText,
			title: hs.creditsTitle
		}
	);
	this.createOverlay({ overlayId: this.credits, hsId: 'credits', position: 'top left'});
};




hs.Expander.prototype.createOverlays = function() {
	/*<? if ($cfg->transitions) : ?>s* /
	/// when crossfading this method is called at the beginning of the fade,
	/// so skip it in the end
	if (this.hasCreatedOverlays) return;
	this.hasCreatedOverlays = true;
	/*<? endif ?>s* /
	for (i = 0; i < hs.overlays.length; i++) {
		var o = hs.overlays[i];
	
		if ((!o.thumbnailId && !o.slideshowGroup) || o.thumbnailId == this.thumbsUserSetId
				|| o.slideshowGroup === this.slideshowGroup) {
			/*<? if ($cfg->html) : ?>s* /
			if (this.isImage || (this.isHtml && o.useOnHtml))
			/*<? endif ?>s* /
			this.createOverlay(o);	
		}
	}
};
*/




/* if ($cfg->transitions) : /*
hs.Expander.prototype.setSrc = function(src) {
	var img = new Image;
	var exp = this;
	img.onload = function() {
		exp.content.src = this.src;
		exp.x.full = this.width;
		exp.y.full = this.height;
		exp.doFullExpand();
	}
	this.onLoadStarted = this.loading = null;
	this.showLoading(this);
	img.src = src;
	return false;
};
 endif s*/



