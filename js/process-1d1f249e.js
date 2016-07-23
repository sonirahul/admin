! function(e, t, s, i) {
    var n = {
        elements: {},
        selectors: {
            body: "body",
            letUsHelpYou: "#let-us-help-you",
            blockBackground: ".full-extra",
            mainSection: "#main",
            dtDiffWrap: "#process",
            dtDiffPurp: '#process [data-section="0"]',
            dtDiffOne: '#process [data-section="1"]',
            dtDiffTwo: '#process [data-section="2"]',
            dtDiffThree: '#process [data-section="3"]',
            dtDiffFour: '#process [data-section="4"]',
            sectionOne: "#section-1",
            sectionTwo: "#section-2",
            sectionThree: "#section-3",
            sectionFour: "#section-4",
            sectionOneWrapper: "#section-1-wrapper",
            blockOne: "#block-one",
            blockTwo: "#block-two",
            blockThree: "#block-three",
            blockFour: "#block-four",
            theBlocks: "#blocks-wrapper .blocks",
            researchContent: "#research-content",
            greenProcessContent: ".process-content.green",
            blocksWrapper: ".blocks-wrapper",
            blockOneP: "#block-one p",
            blockOneH3: "#block-one h3",
            objectiveHolder: "#objectives-holder",
            objective: "#objective",
            lavaLamp: "#process .lava-lamp"
        },
        dimensions: {},
        objCoinRotation: 0,
        _bindVendors: function() {},
        _bindEvents: function() {
            var e = this;
            this.elements.window.on("scroll", function() {
                e.scrollPosition = e.elements.window.scrollTop(), 
				e.watchTheScroll(e.scrollPosition), 
				e.updateDTDiff(e.scrollPosition)
            })
        },
        _getElements: function() {
            this.elements = i.getElements(this.selectors), this.elements.window = e(t)
        },
        animateObjective: function() {
            function t() {
                return 0 == s ? (s++, void 0) : (e("#objectives-holder div").stop().hide().filter(function() {
                    return this.id.match("div" + s)
                }).show(), 7 == s ? s = 1 : s++, void 0)
            }
            var s = 2;
            setTimeout(function() {
                setInterval(t, 4e3)
            }, 1e3)
        },
        resizeBlocksSection: function() {
            var e = this,
                t = this.elements.window[0].innerHeight;
            if (this.elements.letUsHelpYou.length) {
                var s = this.elements.letUsHelpYou[0].scrollHeight;
                e.elements.blocksWrapper.css({
                    height: t + 2.5 * s
                })
            }
            setTimeout(function() {
                e._getDimensions()
            }, 1)
        },
        _getDimensions: function() {
		
            windowHeight = this.elements.window.height(), 
			this.dimensions.animStart = this.elements.blockOne.offset().top + this.elements.blockOne[0].scrollHeight / 2, 
			this.dimensions.animEnd = this.elements.sectionOneWrapper.offset().top - 200, this.dimensions.animHeight = this.dimensions.animEnd - this.dimensions.animStart, this.dimensions.oneStartWidth = this.elements.blockOne[0].scrollWidth, this.dimensions.oneEndWidth = this.elements.researchContent[0].scrollWidth, this.dimensions.oneStartHeight = "400px", this.dimensions.oneEndHeight = this.elements.researchContent[0].scrollHeight, this.dimensions.oneEndHeight = this.dimensions.oneEndHeight + 150, this.dimensions.oneStartTop = 0, this.dimensions.oneEndTop = this.elements.sectionOneWrapper.offset().top - this.elements.theBlocks.offset().top, this.dimensions.oneStartLeft = 0, 
			this.dimensions.oneEndLeft = -1 * this.elements.blockOne.offset().left, this.dimensions.twoStartTop = 0, 
			this.dimensions.twoEndTop = .6 * this.dimensions.animEnd, 
			this.dimensions.twoStartLeft = this.elements.blockTwo[0].scrollWidth, 
			this.dimensions.twoEndLeft = this.elements.greenProcessContent.offset().left, 
			this.dimensions.threeStartTop = this.elements.blockThree[0].scrollHeight, 
			this.dimensions.threeEndTop = .8 * this.dimensions.animEnd, 
			this.dimensions.threeStartLeft = this.elements.blockThree[0].scrollWidth, 
			this.dimensions.threeEndLeft = this.elements.blockThree[0].scrollWidth, 
			this.dimensions.fourStartTop = this.elements.blockFour[0].scrollHeight, 
			this.dimensions.fourEndTop = .9 * this.dimensions.animEnd, this.dimensions.fourStartLeft = 0, 
			this.dimensions.fourEndLeft = -1 * this.elements.blockFour.offset().left, 
			this.dimensions.oneActiveWidth = this.dimensions.oneStartWidth, 
			this.dimensions.oneActiveHeight = this.dimensions.oneStartHeight, 
			this.dimensions.oneActiveTop = this.dimensions.oneStartTop, 
			this.dimensions.oneActiveLeft = this.dimensions.oneStartLeft, 
			this.dimensions.twoActiveTop = this.dimensions.twoStartTop, 
			this.dimensions.twoActiveLeft = this.dimensions.twoStartLeft, 
			this.dimensions.threeActiveTop = this.dimensions.threeStartTop, 
			this.dimensions.threeActiveLeft = this.dimensions.threeStartLeft, 
			this.dimensions.fourActiveTop = this.dimensions.fourStartTop,
			this.dimensions.fourActiveLeft = this.dimensions.fourStartLeftfourStartLeft, this.dimensions.parallaxOneStart = this.elements.sectionOne.offset().top - windowHeight, this.dimensions.parallaxOneEnd = this.elements.sectionTwo.offset().top, this.dimensions.parallaxOneAnimHeight = this.dimensions.parallaxOneStart - this.dimensions.parallaxOneEnd, this.dimensions.parallaxTwoStart = this.elements.sectionTwo.offset().top - windowHeight, this.dimensions.parallaxTwoEnd = this.elements.sectionThree.offset().top, 
			this.dimensions.parallaxTwoAnimHeight = this.dimensions.parallaxTwoStart - this.dimensions.parallaxTwoEnd, 
			this.dimensions.parallaxThreeStart = this.elements.sectionThree.offset().top - windowHeight, 
			this.dimensions.parallaxThreeEnd = this.elements.sectionFour.offset().top, 
			this.dimensions.parallaxThreeAnimHeight = this.dimensions.parallaxThreeStart - this.dimensions.parallaxThreeEnd, this.dimensions.parallaxFourStart = this.elements.sectionThree.offset().top - windowHeight, this.dimensions.parallaxFourEnd = this.elements.objective.offset().top, this.dimensions.parallaxFourAnimHeight = this.dimensions.parallaxFourStart - this.dimensions.parallaxFourEnd
			//called once..alert(windowHeight);
		},
        easeOutQuad: function(e, t, s, i) {
			//alert(-s * (e /= i) * (e - 2) + t);
            return -s * (e /= i) * (e - 2) + t
        },
        _mapRangeLinear: function(e, t, s, i, n) {
		//alert((e - t) * (n - i) / (s - t) + i);
            return (e - t) * (n - i) / (s - t) + i
        },
        setUpParallax: function() {
            this.elements.window[0].innerHeight;
            /*this.dimensions.parallaxTranslate = this.elements.window[0].innerHeight * -.7, e("#section-1,#section-2,#section-3,#section-4").css({
                transform: "translateY(" + this.dimensions.parallaxTranslate + "px)"
            })*/
        },
         watchTheScroll: function(e) {
            var t = this;
            if (e >= this.dimensions.animStart && e < this.dimensions.animEnd) {
                var s = Math.ceil((e - this.dimensions.animStart) / this.dimensions.animHeight * 100);
                t.elements.blocksWrapper.data("scroll-position", "inside").attr("data-scroll-position", "inside"), 
				this.dimensions.oneActiveTop = this.easeOutQuad(s, this.dimensions.oneStartTop, 
				this.dimensions.oneEndTop, 100), 
				this.dimensions.oneActiveLeft = this.easeOutQuad(s, this.dimensions.oneStartLeft, 
				this.dimensions.oneEndLeft, 100), 
				this.dimensions.twoActiveTop = this._mapRangeLinear(s, 0, 100, this.dimensions.twoStartTop, 
				this.dimensions.twoEndTop), this.dimensions.twoActiveLeft = this._mapRangeLinear(s, 0, 100, 
				this.dimensions.twoStartLeft, this.dimensions.twoEndLeft), this.dimensions.threeActiveTop = 
				this._mapRangeLinear(s, 0, 100, this.dimensions.threeStartTop, this.dimensions.threeEndTop), 
				this.dimensions.threeActiveLeft = this._mapRangeLinear(s, 0, 100, this.dimensions.threeStartLeft, 
				this.dimensions.threeEndLeft), this.dimensions.fourActiveTop = this._mapRangeLinear(s, 0, 100, 
				this.dimensions.fourStartTop, this.dimensions.fourEndTop), 
				this.dimensions.fourActiveLeft = this._mapRangeLinear(s, 0, 100, 
				this.dimensions.fourStartLeft, this.dimensions.fourEndLeft), 
				this.objCoinRotation = 10 > s ? this._mapRangeLinear(s, 0, 10, 0, 90) : 90, s > 59 ? 
				(this.dimensions.oneActiveWidth = this._mapRangeLinear(s, 59, 100, 
				this.dimensions.oneStartWidth, this.dimensions.oneEndWidth), 
				this.dimensions.oneActiveHeight = this._mapRangeLinear(s, 59, 100, 
				this.dimensions.oneStartHeight, this.dimensions.oneEndHeight + 150)) : 
				(this.dimensions.oneActiveWidth = this.dimensions.oneStartWidth, 
				this.dimensions.oneActiveHeight = this.dimensions.oneStartHeight), 
				s >= 99 ? (t.elements.blockOneP.fadeIn("slow"), t.elements.blockOneH3.css({
                    "font-size": "28px"
                }), this.dimensions.oneActiveHeight = this.dimensions.oneEndHeight + 150) : (t.elements.blockOneP.hide(), t.elements.blockOneH3.css({
                    "font-size": "28px"
                }))
            } else e < this.dimensions.animStart ? (t.elements.blocksWrapper.data("scroll-position", 
			"above").attr("data-scroll-position", "above"), t.elements.blockOneP.hide(), t.elements.blockOneH3.css({
                "font-size": "28px"
            }), this.dimensions.oneActiveWidth = this.dimensions.oneStartWidth, 
			this.dimensions.oneActiveHeight = this.dimensions.oneStartHeight, 
			this.dimensions.oneActiveTop = this.dimensions.oneStartTop, 
			this.dimensions.oneActiveLeft = this.dimensions.oneStartLeft, 
			this.dimensions.twoActiveTop = this.dimensions.twoStartTop, this.dimensions.twoActiveLeft = this.dimensions.twoStartLeft, 
			this.dimensions.threeActiveTop = this.dimensions.threeStartTop, 
			this.dimensions.threeActiveLeft = this.dimensions.threeStartLeft, 
			this.dimensions.fourActiveTop = this.dimensions.fourStartTop, this.dimensions.fourActiveLeft = this.dimensions.fourStartLeft,			
			this.objCoinRotation = 0) : (t.elements.blocksWrapper.data("scroll-position", "below").attr("data-scroll-position", "below"), t.elements.blockOneP.fadeIn("slow"), 
			t.elements.blockOneH3.css({
                "font-size": "28px"
            }), this.dimensions.oneActiveWidth = this.dimensions.oneEndWidth, 
			this.dimensions.oneActiveHeight = this.dimensions.oneEndHeight + 150, 
			this.dimensions.oneActiveTop = this.dimensions.oneEndTop, 
			this.dimensions.oneActiveLeft = this.dimensions.oneEndLeft, 
			this.dimensions.twoActiveTop = this.dimensions.twoEndTop, 
			this.dimensions.twoActiveLeft = this.dimensions.twoEndLeft, 
			this.dimensions.threeActiveTop = this.dimensions.threeEndTop, 
			this.dimensions.threeActiveLeft = this.dimensions.threeEndLeft, 
			this.dimensions.fourActiveTop = this.dimensions.fourEndTop, 
			this.dimensions.fourActiveLeft = this.dimensions.fourEndLeft);
            this.sizeBlockOne(), this.positionTheBlocks()
        },
        positionTheBlocks: function() {
            this.elements.blockOne.css({
                top: this.dimensions.oneActiveTop,
                left: this.dimensions.oneActiveLeft
            }), this.elements.blockTwo.css({
                top: this.dimensions.twoActiveTop,
                left: this.dimensions.twoActiveLeft
            }), this.elements.blockThree.css({
                top: this.dimensions.threeActiveTop,
                left: this.dimensions.threeActiveLeft
            }), this.elements.blockFour.css({
                top: this.dimensions.fourActiveTop,
                left: this.dimensions.fourActiveLeft
            })
        },
        sizeBlockOne: function() {
            this.elements.blockOne.css({
                width: this.dimensions.oneActiveWidth,
                height: this.dimensions.oneActiveHeight
            })
        },
        returnHeightTallestDtDiffSection: function() {
            var e = 0;
            return e = Math.max(this.dimensions.windowHeight, this.dimensions.dtDiffOneHeight, this.dimensions.dtDiffTwoHeight, this.dimensions.dtDiffThreeHeight)
        },
        updateDTDiff: function(t) {
            var s = this.elements.window.height();
            dtDiffHeight = this.elements.dtDiffWrap[0].scrollHeight, dtDiffTop = this.elements.dtDiffWrap.offset().top, 
			dtDiffBottom = dtDiffTop + dtDiffHeight - s, dtDiffPurpHeight = this.elements.dtDiffPurp[0].scrollHeight, 
			dtDiffOneHeight = this.elements.dtDiffOne[0].scrollHeight, 
			dtDiffTwoHeight = this.elements.dtDiffTwo[0].scrollHeight, 
			dtDiffThreeHeight = this.elements.dtDiffThree[0].scrollHeight, 
			dtDiffFourHeight = this.elements.dtDiffFour[0].scrollHeight, 
			dtDiffOneTop = this.elements.dtDiffOne.offset().top, dtDiffTwoTop = this.elements.dtDiffTwo.offset().top, 
			dtDiffThreeTop = this.elements.dtDiffThree.offset().top, dtDiffFourTop = this.elements.dtDiffFour.offset().top;
            var i = this,
                n = dtDiffOneTop - .3 * s,
                o = dtDiffTwoTop - .3 * s,
                a = dtDiffThreeTop - .3 * s;
            breakThree = dtDiffFourTop - .3 * s, (n > t ? i.elements.dtDiffWrap.attr("data-active", "zero") : o > t ? i.elements.dtDiffWrap.attr("data-active", "one") : t >= o 
			&& a >= t ? i.elements.dtDiffWrap.attr("data-active", "two") : t >= a 
			&& breakThree >= t ? i.elements.dtDiffWrap.attr("data-active", "three") : i.elements.dtDiffWrap.attr("data-active", "four"))
        },
        initialize: function() {
            this._getElements(), this._bindVendors(), this._bindEvents(), this.resizeBlocksSection(), this.positionTheBlocks(), this.setUpParallax(), this.animateObjective()
        }
    };
    t.Process = n, e(function() {
        "process" == e("body").data("page") && n.initialize()
    })
}(jQuery, window, null, Impress),
function(e, t, s, i) {
    var n = {
        elements: {},
        dimensions: {},
        labels: {},
        selectors: {
            body: "body",
            userJourney: "#user-journey",
            nextSection: "#blocks-wrapper",
            textBlocks: ".user-journey-step",
            textBlockOne: "#user-journey-one",
            textBlockTwo: "#user-journey-two",
            textBlockThree: "#user-journey-three",
            svgWrapper: "#graph-svg-wrapper",
            svgRuler: "#svg-ruler",
            svgCopyWrap: "#user-journey-copy-wrap"
        },
        paths: {
            mainLine: {
                stepOne: "M78,236c53.8,0,92.8,68.6,149.7,68.6c63.9,0,56.2-43.8,99.8-43.8c44.2,0,45.4,72.2,100.4,72.2c56.9,0,61.8-153.8,99.2-153.8c36.7,0,59.3,124.3,99.8,124.3c43,0,58-170.4,99.9-170.4c26,0,25.8,46.2,51.1,46.2",
                stepTwo: "M78,236c53.8,0,93.1,0,150,0c63.9,0,56.4-21.3,100.1-21.3c44.2,0,44.9,33.9,99.9,33.9c56.9,0,61.6-69.4,99-69.4c36.7,0,59.5,74.7,100,74.7c43,0,58.1-120,99.9-120c26,0,25.8,30.5,51.1,30.5"
            },
            valleys: {
                one: "M174.3,286c16.6,10.6,34,18.6,53.4,18.6c28.7,0,43-8.9,53.9-18.6H174.3z",
                two: "M366,286c15.2,20.8,28.9,47,62,47c20.9,0,34.8-20.7,45.8-47H366z",
                three: "M601,286c8,10.5,16.5,17.4,26,17.4c8.5,0,15.9-6.7,22.7-17.4H601z"
            },
            bottomFill: {
                start: "M726.9,133C685,133,670,303.4,627,303.4c-40.5,0-63.2-124.3-99.8-124.3c-37.4,0-42.3,153.8-99.2,153.8c-55,0-56.3-72.2-100.4-72.2c-43.6,0-36,43.8-99.8,43.8c-56.9,0-96-68.6-149.7-68.6v214h700V179.2C752.7,179.2,752.9,133,726.9,133z",
                end: "M726.9,133.8c-41.9,0-56.9,120-99.9,120c-40.5,0-63.3-74.7-100-74.7c-37.4,0-42.1,69.4-99,69.4c-55,0-55.8-33.9-99.9-33.9c-43.6,0-36.2,21.3-100.1,21.3c-56.9,0-96.2,0-150,0v214h700V164.4C752.7,164.4,752.9,133.8,726.9,133.8z"
            }
        },
        _bindEvents: function() {
            var t = this;
            this.elements.window.on("resize", e.throttle(50, function() {
                t._getDimensions()
            })), this.elements.window.on("scroll", function() {
                t.scrollPosition = t.elements.window.scrollTop(), t.watchTheScroll(t.scrollPosition)
            })
        },
        _bindHoverEvents: function() {
            var e = this;
            this.elements.hoverArea1.hover(function() {
                e.elements.hoverStateOne.addClass("active"), e.labels.consideration.addClass("active")
            }, function() {
                e.elements.hoverStateOne.removeClass("active"), e.labels.consideration.removeClass("active")
            }), this.elements.hoverArea2.hover(function() {
                e.elements.hoverStateTwo.addClass("active"), e.labels.activation.addClass("active")
            }, function() {
                e.elements.hoverStateTwo.removeClass("active"), e.labels.activation.removeClass("active")
            }), this.elements.hoverArea3.hover(function() {
                e.elements.hoverStateThree.addClass("active"), e.labels.retention.addClass("active")
            }, function() {
                e.elements.hoverStateThree.removeClass("active"), e.labels.retention.removeClass("active")
            })
        },
        _getDimensions: function() {
            var t = this;
            this.dimensions.windowHeight = this.elements.window[0].innerHeight, this.elements.userJourney[0] && (this.dimensions.userJourneyHeight = this.elements.userJourney[0].scrollHeight, this.dimensions.userJourneyTop = this.elements.userJourney.offset().top, this.dimensions.userJourneyBottom = this.dimensions.userJourneyTop + this.dimensions.userJourneyHeight, this.dimensions.graphWidth = this.elements.svgWrapper[0].scrollWidth, this.dimensions.graphHeight = this.elements.svgWrapper[0].scrollHeight, this.dimensions.graphTop = this.elements.svgWrapper.offset().top, this.dimensions.graphLeft = this.elements.svgRuler.offset().left + 15, this.dimensions.graphMargin = (this.dimensions.windowHeight - this.dimensions.graphHeight) / 2, this.dimensions.sectionOneTop = this.elements.textBlockOne.offset().top, this.dimensions.sectionTwoTop = this.elements.textBlockTwo.offset().top, this.dimensions.sectionThreeTop = this.elements.textBlockThree.offset().top, this.dimensions.sectionOneHeight = this.elements.textBlockOne[0].scrollHeight, this.dimensions.sectionThreeHeight = e("#user-journey-three")[0].scrollHeight, this.dimensions.sectionThreeMargin = (this.dimensions.windowHeight - this.dimensions.sectionThreeHeight) / 2, this.dimensions.graphFixPoint = this.elements.svgRuler.offset().top - this.dimensions.graphMargin, this.dimensions.graphUnfixPoint = this.elements.nextSection.offset().top - 80 - this.dimensions.graphHeight - this.dimensions.graphMargin, this.dimensions.graphRestingPosition = this.dimensions.sectionThreeTop - (this.dimensions.graphHeight - this.dimensions.sectionThreeHeight) / 2 - this.dimensions.graphTop), setTimeout(function() {
                t.dimensions.windowHeight = t.elements.window[0].innerHeight, t.elements.userJourney[0] && (t.dimensions.userJourneyHeight = t.elements.userJourney[0].scrollHeight, t.dimensions.userJourneyTop = t.elements.userJourney.offset().top, t.dimensions.userJourneyBottom = t.dimensions.userJourneyTop + t.dimensions.userJourneyHeight, t.dimensions.graphWidth = t.elements.svgWrapper[0].scrollWidth, t.dimensions.graphHeight = t.elements.svgWrapper[0].scrollHeight, t.dimensions.graphTop = t.elements.svgWrapper.offset().top, t.dimensions.graphLeft = t.elements.svgRuler.offset().left + 15, t.dimensions.graphMargin = (t.dimensions.windowHeight - t.dimensions.graphHeight) / 2, t.dimensions.sectionOneTop = t.elements.textBlockOne.offset().top, t.dimensions.sectionTwoTop = t.elements.textBlockTwo.offset().top, t.dimensions.sectionThreeTop = t.elements.textBlockThree.offset().top, t.dimensions.sectionOneHeight = t.elements.textBlockOne[0].scrollHeight, t.dimensions.sectionThreeHeight = e("#user-journey-three")[0].scrollHeight, t.dimensions.sectionThreeMargin = (t.dimensions.windowHeight - t.dimensions.sectionThreeHeight) / 2, t.dimensions.graphFixPoint = t.elements.svgRuler.offset().top - t.dimensions.graphMargin, t.dimensions.graphUnfixPoint = t.elements.nextSection.offset().top - 80 - t.dimensions.graphHeight - t.dimensions.graphMargin, t.dimensions.graphRestingPosition = t.dimensions.sectionThreeTop - (t.dimensions.graphHeight - t.dimensions.sectionThreeHeight) / 2 - t.dimensions.graphTop)
            }, 1e3)
        },
        _getElements: function() {
            this.elements = i.getElements(this.selectors), this.elements.window = e(t)
        },
        updateSVGWrapper: function() {
            var e = this.elements.svgRuler[0].scrollWidth - 30,
                t = 450 * e / 780;
            this.elements.svgWrapper.css({
                width: e,
                height: t
            }), this.dimensions.graphTop = this.elements.svgWrapper.offset().top, this.dimensions.graphLeft = this.elements.svgRuler.offset().left + 15, this.dimensions.graphMargin = (this.dimensions.windowHeight - this.dimensions.graphHeight) / 2, this.elements.window.scrollTop() > this.dimensions.graphFixPoint && this.elements.window.scrollTop() < this.dimensions.graphUnfixPoint && this.elements.svgWrapper.css({
                position: "fixed",
                top: this.dimensions.graphMargin,
                bottom: "auto",
                left: this.dimensions.graphLeft
            })
        },
        updateMargins: function() {
            var e = this.isOneTallerThanTwo(this.elements.svgWrapper, this.elements.textBlockOne);
            if (e) {
                var t = (this.dimensions.graphHeight - this.dimensions.sectionOneHeight) / 2,
                    s = (this.dimensions.graphHeight - this.dimensions.sectionThreeHeight) / 2;
                this.elements.textBlockOne.css({
                    "margin-top": t
                }), this.elements.textBlockThree.css({
                    "margin-bottom": s
                })
            }
            this.updateSVGRuler(), this.dimensions.graphUnfixPoint = this.elements.nextSection.offset().top - 80 - this.dimensions.graphHeight - this.dimensions.graphMargin
        },
        updateSVGRuler: function() {
            var e = this.elements.svgCopyWrap[0].scrollHeight;
            this.elements.svgRuler.css({
                height: e
            })
        },
        isOneTallerThanTwo: function(e, t) {
            return e[0].scrollHeight > t[0].scrollHeight ? !0 : !1
        },
        setupUserJourney: function() {
            var e = this;
            e._bindEvents()
        },
        _drawGrid: function() {
            var e = this;
            Snap.load("/img/process/user-journey-grid-11407faf.svg", function(t) {
                e.elements.svg.append(t.select("g#grid")), e._drawMainLine(), e._drawHoverStates(), e._drawHoverAreas()
            })
        },
        _drawHoverAreas: function() {
            this.elements.hoverArea1 = this.elements.svg.rect(174.3, -10, 107.3, 0).attr({
                opacity: 0,
                id: "hover-area-1",
                "class": "svg-hover-area"
            }), this.elements.hoverArea2 = this.elements.svg.rect(366, -10, 107.8, 0).attr({
                opacity: 0,
                id: "hover-area-2",
                "class": "svg-hover-area"
            }), this.elements.hoverArea3 = this.elements.svg.rect(601, -10, 48.7, 0).attr({
                opacity: 0,
                id: "hover-area-3",
                "class": "svg-hover-area"
            }), this._bindHoverEvents()
        },
        _drawHoverStates: function() {
            var e = this.elements.svg.rect(173, 60, 110, 350).attr({
                    "class": "hover-bg"
                }),
                t = this.elements.svg.text(227.6, 50, "Objective #1").attr({
                    "class": "hover-label"
                }),
                s = this.elements.svg.rect(365, 60, 110, 350).attr({
                    "class": "hover-bg"
                }),
                i = this.elements.svg.text(419.9, 50, "Objective #2").attr({
                    "class": "hover-label"
                }),
                n = this.elements.svg.rect(570, 60, 110, 350).attr({
                    "class": "hover-bg"
                }),
                o = this.elements.svg.text(625.4, 50, "Objective #3").attr({
                    "class": "hover-label"
                });
            this.elements.hoverStateOne = this.elements.svg.g(t, e).attr({
                "class": "hover-state"
            }), this.elements.hoverStateTwo = this.elements.svg.g(i, s).attr({
                "class": "hover-state"
            }), this.elements.hoverStateThree = this.elements.svg.g(o, n).attr({
                "class": "hover-state"
            })
        },
        _drawLabels: function() {
            this.labels.awareness = this.elements.svg.text(127, 445, "Awareness").attr({
                "class": "graph-label"
            }), this.labels.consideration = this.elements.svg.text(228, 445, "Consideration").attr({
                "class": "graph-label"
            }), this.labels.acquisition = this.elements.svg.text(328, 445, "Acquisition").attr({
                "class": "graph-label"
            }), this.labels.activation = this.elements.svg.text(420, 445, "Activation").attr({
                "class": "graph-label"
            }), this.labels.purchase = this.elements.svg.text(527, 445, "Purchase").attr({
                "class": "graph-label"
            }), this.labels.retention = this.elements.svg.text(625, 445, "Retention").attr({
                "class": "graph-label"
            }), this.labels.advocacy = this.elements.svg.text(715, 445, "Advocacy").attr({
                "class": "graph-label"
            })
        },
        _drawLegend: function() {
            var e = this.elements.svg.rect(640, 4, 25, 15).attr({
                    "class": "red-valley"
                }),
                t = this.elements.svg.text(720, 15, "= opportunities").attr({
                    "class": "graph-label"
                });
            this.labels.legend = this.elements.svg.g(e, t).attr({
                opacity: 0,
                "class": "legend"
            })
        },
        _drawMainLine: function() {
            this.elements.line = this.elements.svg.path(this.paths.mainLine.stepOne).attr({
                id: "svg-main-line"
            })
        },
        _drawValleyFills: function() {
            this.elements.valleyOne = this.elements.svg.path(this.paths.valleys.one).attr({
                "class": "red-valley"
            }), this.elements.valleyTwo = this.elements.svg.path(this.paths.valleys.two).attr({
                "class": "red-valley"
            }), this.elements.valleyThree = this.elements.svg.path(this.paths.valleys.three).attr({
                "class": "red-valley"
            }), this.elements.valleyTopCoverOne = this.elements.svg.rect(172.7, 285, 110, 19.6).attr({
                fill: "#fff"
            }), this.elements.valleyTopCoverTwo = this.elements.svg.rect(365.3, 285, 109, 48).attr({
                fill: "#fff"
            }), this.elements.valleyTopCoverThree = this.elements.svg.rect(600.3, 285, 50.1, 18.4).attr({
                fill: "#fff"
            }), this.elements.valleyBottomCover = this.elements.svg.path(this.paths.bottomFill.start).attr({
                fill: "#fff"
            })
        },
        _mapRangeLinear: function(e, t, s, i, n) {
            return (e - t) * (n - i) / (s - t) + i
        },
        renderUserJourneyStepOne: function() {
            this.elements.line.animate({
                d: this.paths.mainLine.stepOne
            }, 500), this.elements.valleyTopCoverOne.animate({
                height: 19.6
            }, 500), this.elements.valleyTopCoverTwo.animate({
                height: 48
            }, 500), this.elements.valleyTopCoverThree.animate({
                height: 18.4
            }, 500), this.elements.valleyOne.animate({
                opacity: 0
            }, 500), this.elements.valleyTwo.animate({
                opacity: 0
            }, 500), this.elements.valleyThree.animate({
                opacity: 0
            }, 500), this.elements.valleyBottomCover.animate({
                d: this.paths.bottomFill.start
            }, 500), this.elements.hoverArea1.attr({
                y: -10,
                height: 0
            }), this.elements.hoverArea2.attr({
                y: -10,
                height: 0
            }), this.elements.hoverArea3.attr({
                y: -10,
                height: 0
            }), this.labels.legend.animate({
                opacity: 0
            }, 500)
        },
        renderUserJourneyStepTwo: function() {
            this.elements.line.animate({
                d: this.paths.mainLine.stepOne
            }, 500), this.elements.valleyTopCoverOne.animate({
                height: 0
            }, 500), this.elements.valleyTopCoverTwo.animate({
                height: 0
            }, 500), this.elements.valleyTopCoverThree.animate({
                height: 0
            }, 500), this.elements.valleyOne.animate({
                opacity: 1
            }, 500), this.elements.valleyTwo.animate({
                opacity: 1
            }, 500), this.elements.valleyThree.animate({
                opacity: 1
            }, 500), this.elements.valleyBottomCover.animate({
                d: this.paths.bottomFill.start
            }, 500), this.elements.hoverArea1.attr({
                y: 0,
                height: 450
            }), this.elements.hoverArea2.attr({
                y: 0,
                height: 450
            }), this.elements.hoverArea3.attr({
                y: 0,
                height: 450
            }), this.labels.legend.animate({
                opacity: 1
            }, 500)
        },
        renderUserJourneyStepThree: function() {
            this.elements.line.animate({
                d: this.paths.mainLine.stepTwo
            }, 500), this.elements.valleyTopCoverOne.animate({
                height: 0
            }, 500), this.elements.valleyTopCoverTwo.animate({
                height: 0
            }, 500), this.elements.valleyTopCoverThree.animate({
                height: 0
            }, 500), this.elements.valleyOne.animate({
                opacity: 0
            }, 500), this.elements.valleyTwo.animate({
                opacity: 0
            }, 500), this.elements.valleyThree.animate({
                opacity: 0
            }, 500), this.elements.valleyBottomCover.animate({
                d: this.paths.bottomFill.end
            }, 500), this.elements.hoverArea1.attr({
                y: -10,
                height: 0
            }), this.elements.hoverArea2.attr({
                y: -10,
                height: 0
            }), this.elements.hoverArea3.attr({
                y: -10,
                height: 0
            }), this.labels.legend.animate({
                opacity: 0
            }, 500)
        },
        watchTheScroll: function(e) {
            if (e > this.dimensions.graphFixPoint && e < this.dimensions.graphUnfixPoint ? this.elements.svgWrapper.css({
                    position: "fixed",
                    top: this.dimensions.graphMargin,
                    bottom: "auto",
                    left: this.dimensions.graphLeft
                }) : e > this.dimensions.graphUnfixPoint ? this.elements.svgWrapper.css({
                    position: "absolute",
                    top: "auto",
                    bottom: 0,
                    left: "auto"
                }) : this.elements.svgWrapper.css({
                    position: "relative",
                    top: 0,
                    bottom: "auto",
                    left: "auto"
                }), e < this.dimensions.userJourneyTop) this.elements.userJourney.data("active", 1).attr("data-active", 1);
            else if (e + this.dimensions.windowHeight > this.dimensions.userJourneyBottom + 100) this.elements.userJourney.data("active", 3).attr("data-active", 3);
            else {
                var t = e + this.dimensions.windowHeight / 2;
                t < this.dimensions.sectionTwoTop ? (1 != this.elements.userJourney.data("active") && this.elements.userJourney.data("active", 1).attr("data-active", 1)) : t > this.dimensions.sectionTwoTop && t < this.dimensions.sectionThreeTop ? (this.elements.textBlocks.removeClass("active"), this.elements.textBlockTwo.addClass("active"), 2 != this.elements.userJourney.data("active") && this.elements.userJourney.data("active", 2).attr("data-active", 2)) : (3 != this.elements.userJourney.data("active") && this.elements.userJourney.data("active", 3).attr("data-active", 3))
            }
        },
        initialize: function() {
            this._getElements(), this._getDimensions(), this.setupUserJourney()
        }
    };
    t.UserJourney = n, e(function() {
        "process" == e("body").data("page") && n.initialize()
    })
}(jQuery, window, null, Impress);