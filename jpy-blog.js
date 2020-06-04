
/************************************************/
// unit-test browser/simulator 
function xpr(...args) { console.log(args); }
if (typeof process != 'undefined') {
document = new Object();
document.style = new Object();
document.location = new Object();
document.location.pathname = "welcome.html";
document.addEventListener = function(s,fx){ xpr('dx.a'); return true; };
document.style.visibility = 'nodejs-sim-style';
document.load = function(fx){ xpr('dx.l'); return true; };
document.onload = function(fx){ xpr('dx.ol'); return true; };
function jQuery(...args){  
    this.load = function(fx){ xpr('tx.l'); fx(); return true; };
    this.css = function(...f){ xpr('tx.css', arguments); return "block"; };
    this.return= function(){ xpr('tx.r'); return true; }; return this;
}
document.id = [];
document.getElementById = function(id){ xpr('dx.a', id); };
window = new Object();
window.addEventListener = function(s,fx){ xpr('wx.a'); return true; };
window.load = function(fx){ xpr('wx.l'); return true; };
window.onload = function(fx){ xpr('wx.ol'); return true; };
function foo(x, ...args) { xpr('foo', x, args, ...args, arguments); }
function bar(x, ...args) { xpr('bar', x, args, ...args, arguments); }
}
/************************************************/

var bnav = [ '#Header1','.post-title','.footer-outer','.blog-pager','#navbar' ];
var bids = [];

var snav = [ 'welcome', 'marketing','learning','rlanguage','tableau' ];
var jnav = [];
var cnav = [];
var hnav = [];

var dvis = {};
var jids = {};
var cids = {};


function basename(str, ext) {
    rx = str.substr(str.lastIndexOf('/') + 1);
	if (ext)
		rx = rx.slice(0, rx.lastIndexOf(ext));
	return(rx);
}

function jpyInit() {

	for (i in snav) {
		jnav[snav[i]] = 'jpy-' + snav[i];
		hnav[snav[i]] = snav[i] + '.html';
	}

	for (i in jnav)
		jids[jnav[i]] = document.getElementById(jnav[i]);

	for (i in cnav)
		cids[cnav[i]] = document.getElementById(cnav[i]);
}
function setstyle(id, style, value) {
	if (jQuery(id).css(style) != value)
		jQuery(id).css(style, value);
}

function navid(fullpath) {
	var bn = basename(fullpath, '.html');
	var id = '#jpy-' + bn;
	return( id );
}

function jpyNavs() {

	// set elements visible/hidden elements on a page

    var fullpath = document.location.pathname;
	var thisPage = basename(fullpath, '.html');

	var vsetall = 'hidden';
    if (fullpath.indexOf("welcome") > 0)
		vsetall = 'visible';

	// set only the "page" button visible
	for (i in snav) {
		var idnot = '#jpy-' + snav[i];
		if (snav[i] == thisPage)
			setstyle(idnot, 'visibility', 'visible');
		else
			setstyle(idnot, 'visibility', vsetall);
	}
	return(thisPage);
}

window.onload = function() {
	if (typeof jQuery == 'function') {
		jpyInit();
		jpyNavs();
	}
}

