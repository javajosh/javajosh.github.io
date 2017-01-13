




/*
     FILE ARCHIVED ON 6:06:36 Aug 3, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 4:01:47 Jan 13, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
//How can I claim to code JavaScript without a procedural animation?! Or jquery-less DOM manipulation?!
//You *can* do DOM manipulation without jQuery! Crazy, I know!
(function(){
var d = document,
		logo = d.getElementById('logo'),
		canvas = d.createElement('canvas'),
    context = canvas.getContext( '2d' ),
    time = 0,
    w = canvas.width = 100,
    h = canvas.height = 100,
    m = Math,
    cos = m.cos,
    sin = m.sin,
    PI = m.PI

logo.parentNode.replaceChild(canvas, logo);
canvas.id  = 'logo';
canvas.title = "This is a procedurally generated thingy written with JavaScript and Canvas. If you click it you'll email me! View Source to see how it's done!";

// The main animation loop
setInterval( function() {
    // Clear
    canvas.width = canvas.width;

    time += .1;

    // The number of particles to generate
    i = 100;

    while( i-- ) {
        r =  (w+h)/2 * ( cos( ( time + i ) * ( .05 + ( sin(time/10000) / PI  * .2 ) ) ) / PI );
        //context.fillStyle = "rgba("+(i%255)+", 0,"+(i+200%150)+" , 0.8)";
        context.fillStyle = i%2? "#444": i%3? "#11F" : "#F11";
        context.fillRect( sin(i) * r + w/2,
                          cos(i) * r + h/2,
                          1.9,
                          1.9 );
    }
}, 16
)
})();