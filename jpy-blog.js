
function print(...args) { console.log(args); }
var bnav = [ '#Header1','.post-title','.footer-outer','.blog-pager','#navbar' ]
var jnav = [ '#jpy-marketing','#jpy-learning','#jpy-rlanguage','#jpy-tableau' ]
var hnav = [ 'marketing.html','learning.html','rlanguage.html','tableau.html' ]
var snav = [ 'marketing','learning','rlanguage','tableau' ]
var jhdr = [ '#jpy-stay' ]
var dvis = {};

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

function basename(str, ext) {
    rx = str.substr(str.lastIndexOf('/') + 1);
	if (ext)
		rx = rx.slice(0, rx.lastIndexOf(ext));
	return(rx);
}

function jpyInit() {
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

typeof jQuery == 'function' && jQuery(window).load(function(){
		jpyInit();
		jpyNavs();
});

