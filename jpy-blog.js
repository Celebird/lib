console.log('scy=1');

/************************************************/
// unit-test browser/simulator 
if (typeof process != 'undefined') {
window = new Object();
document = new Object();
document.location = new Object();
document.location.pathname = "welcome.html";
function jQuery(...args){  
    this.load = function(fx){ print('tx.l'); fx(); return true; };
    this.css = function(...f){ print('tx.css', arguments); return "block"; };
    this.return= function(){ print('tx.r'); return true; }; return this;
}
function foo(x, ...args) { print('foo', x, args, ...args, arguments); }
function bar(x, ...args) { print('bar', x, args, ...args, arguments); }
}
/************************************************/

window.addEventListener("DOMContentLoaded", function () { console.log(''+(+new Date)+': DOM Content Loaded', typeof jQuery) });
document.addEventListener('readystatechange', () => console.log('rsc', document.readyState, typeof jQuery));
document.addEventListener('load', () => console.log('load', document.load, typeof jQuery));


function pr(...args) { console.log(args); }
var bnav = [ '#Header1','.post-title','.footer-outer','.blog-pager','#navbar' ]
var jnav = [ '#jpy-marketing','#jpy-learning','#jpy-rlanguage','#jpy-tableau' ]
var hnav = [ 'marketing.html','learning.html','rlanguage.html','tableau.html' ]
var snav = [ 'marketing','learning','rlanguage','tableau' ]
var jhdr = [ '#jpy-stay' ]
var dvis = {};


function basename(str, ext) {
    rx = str.substr(str.lastIndexOf('/') + 1);
	if (ext)
		rx = rx.slice(0, rx.lastIndexOf(ext));
	return(rx);
}

function jpyInit() {
console.log('scy=2a');
	for(i in bnav) {
		avis = jQuery(i).css('display');
		dvis[ bnav[i] ] = avis;
	}
}

function navid(fullpath) {
	bn = basename(fullpath, '.html');
	if (bn in snav)
		return('#jpy-' + snav);
	return('#jpy-stay')
}

function jpyNavs() {
console.log('scy=3a');

    fullpath = document.location.pathname;
	thisPage = basename(fullpath, '.html');

    if (fullpath.indexOf("/welcome/") != 0) {
		jQuery('#jpy-stay').css('visibility', 'hidden');
	} else {
		jQuery('#jpy-stay').css('visibility', 'visible');
	}

	nid = navid(fullpath)
	jQuery(nid).css('visibility', 'hidden');
	for (i in snav) {
		if (snav[i] != thisPage) {
			idnot = '#jpy-' + snav[i];
			jQuery(idnot).css('visibility', 'visible');
		}
	}
	return('#jpy-stay')
}

window.onload = function() {
console.log('scy=2.0');
typeof jQuery == 'function' && 
jQuery(window).load(function(){
console.log('scy=2');
		jpyInit();
console.log('scy=3');
		jpyNavs();
console.log('scy=4');
});
console.log('scy=n');
}

document.onload = function() { console.log('Do'); console.log(typeof jQuery); }
window.onload = function() { console.log('Wo'); console.log(typeof jQuery); }
window.onload = function() { console.log('Wo3'); console.log(typeof jQuery); }
window.onload = function() { console.log('Wo4'); console.log(typeof jQuery); }

document.addEventListener('load', () => console.log('load-2', document.load, typeof jQuery));
document.addEventListener('readystatechange', () => console.log('rsc-2', document.readyState, typeof jQuery));
window.addEventListener("DOMContentLoaded", function () { console.log(''+(+new Date)+': DOM Content Loaded-2', typeof jQuery) });

document.load = function() { console.log('Dl'); console.log(typeof jQuery); }
window.load = function() { console.log('Wl'); console.log(typeof jQuery); }
window.load = function() { console.log('Wl3'); console.log(typeof jQuery); }
window.load = function() { console.log('Wl4'); console.log(typeof jQuery); }

console.log('scy=n');
