window.onload = function(){

  (function() {
    'use strict';

    var strokeWidth = 10,
        width = 280,
        height = 280,
        speed = 500,
        pourcent = 55,
        xloc = width / 2,
        yloc = height / 2,
        R = (width / 2) - strokeWidth;

    var paper = Raphael("holder", height, width);

    //Circle params
    var paramBg = {'fill': '#FFF', 'stroke': '#b1b1b1', 'stroke-width': strokeWidth};
    var param = {'stroke-width': strokeWidth};

    //Attributes for arcs
    paper.customAttributes.arc = function (xloc, yloc, value, total, R) {
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

    //Create circle
    var circleBg = paper.circle(xloc, yloc, R).attr(paramBg);
    var circle = paper.path().attr(param).attr({arc: [xloc, yloc, 0, 100, R]});
  
    //Animate path
    circle.animate({arc: [xloc, yloc, pourcent, 100, R]}, speed);

  })();

}