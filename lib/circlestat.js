var CircleStat = (function() {
  'use strict';

  function CircleStat(options) {
    this.options = options || {};
  }

  CircleStat.prototype.init = function() {

    var opts = this.options;

    this.canvas = null;
    this.circleBg = null;
    this.circle = null;

    this.strokeWidth = opts.strokeWidth || 10;

    this.strokeColor = opts.strokeColor || '#000';
    this.bgColor = opts.bgColor || '#b1b1b1';
    this.containerBgColor = opts.containerBgColor || '#FFF';

    this.width = opts.width || 150;
    this.height = opts.height || 150;

    this.speed = opts.speed || 500;
    this.pourcent = opts.pourcent || 99.99;

    this.container = opts.container || 'holder';

    this.paramBg = {'fill': this.containerBgColor, 'stroke': this.bgColor, 'stroke-width': this.strokeWidth};
    this.param = {'stroke': this.strokeColor, 'stroke-width': this.strokeWidth};

  };

  CircleStat.prototype.setCanvas = function() {
    var canvas = Raphael(this.container, this.height, this.width);

    //Set Custome Attribute to animate arc
    canvas.customAttributes.arc = function (xloc, yloc, value, total, R) {
        var alpha = 360 / total * value,
            a = (90 - alpha) * Math.PI / 180,
            x = xloc + R * Math.cos(a),
            y = yloc - R * Math.sin(a),
            path;
        if (total === value) {
            path = [
              ["M", xloc, yloc - R], 
              ["A", R, R, 0, 1, 1, 299.99, 300 - R]
            ];
        } else {
            path = [
              ["M", xloc, yloc - R], 
              ["A", R, R, 0, +(alpha > 180), 1, x, y]
            ];
        }
        return {path: path};
    };

    return canvas;

  };

  CircleStat.prototype.draw = function() {
    var canvas = this.setCanvas();

    var xloc = this.width / 2;
    var yloc = this.height / 2;
    var R = (this.width / 2) - this.strokeWidth;

    var circleBg = canvas.circle(xloc, yloc, R).attr(this.paramBg);
    var circle = canvas.path().attr(this.param).attr({arc: [xloc, yloc, 0, 100, R]});

    //Animate
    circle.animate({arc: [xloc, yloc, this.pourcent, 100, R]}, this.speed);
  };

  return function(options) {
    var instance = new CircleStat(options);
    instance.init();
    instance.draw();
    return instance;
  };

})();
