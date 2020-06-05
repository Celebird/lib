/* 
 * mini unit-test browser/simulator for command-line/node.js; r.i.p. dmr.
*/
function xpr() { console.log(arguments); }
if (typeof process != 'undefined') {
window = new Object();
window.addEventListener = function(){ av=arguments; xpr('wx.a', av); for (i in av) { if (typeof av[i] == 'function') av[i](); } return true; };
document = new Object();
document.onload = function(fx){ xpr('dx.ol'); return true; };
document.location = new Object();
document.location.pathname = "welcome.html";
document.id = [];
document.getElementById = function(id){ xpr('ge.i', id); var e = new Object; e.id = id; return(e); };
document.style = new Object();
document.style.visibility = ['visible','hidden'][Math.floor(Math.random() * 2)];
var jQuery = function() {
    this.load = function(fx){ xpr('jq.l'); fx(); return true; };
    this.css = function(){ 
		var av = arguments;
		xpr('jq.css', av);
		if (av[0] == 'visibility' && av.length == 2)
			console.log('jq.css set:', av[0], av[1]);
		if (av[0] == 'visibility' && av.length == 1)
			return ['visible','hidden'][Math.floor(Math.random() * 2)];
		return new Object();
	};
    this.return = function(){ xpr('jq.r'); return true; };
	return this;
}
var foo = function() { xpr('foo', arguments); }
var bar = function() { xpr('bar', arguments); }
}
/* mini unit-test browser/simulator for command-line/node.js */

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
    var rx = str.substr(str.lastIndexOf('/') + 1);
	if (ext)
		rx = rx.slice(0, rx.lastIndexOf(ext));
	return(rx);
}

function jpyInit() {

	for (var i in snav) {
		jnav[snav[i]] = 'jpy-' + snav[i];
		hnav[snav[i]] = snav[i] + '.html';
	}

	for (var i in jnav)
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
	for (var i in snav) {
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

/* mini unit-test browser/simulator for command-line/node.js */
if (typeof process != 'undefined') {
	window.onload();
}

