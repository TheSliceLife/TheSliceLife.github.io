if (window.innerWidth < 768) {
	$('[data-bss-disabled-mobile]').removeClass('animated').removeAttr('data-aos data-bss-hover-animate');
}

$(document).ready(function(){
	AOS.init();

	$('[data-bss-hover-animate]')
		.mouseenter( function(){ var elem = $(this); elem.addClass('animated ' + elem.attr('data-bss-hover-animate')) })
		.mouseleave( function(){ var elem = $(this); elem.removeClass('animated ' + elem.attr('data-bss-hover-animate')) });
});

const c = document.querySelector("canvas");
const x = c.getContext("2d");
Object.defineProperties(x, {
  goc: { set: v => { x.globalCompositeOperation = v; }, },
  fs: { set: v => { x.fillStyle = v; }, },
  ss: { set: v => { x.strokeStyle = v; }, },
  ga: { set: v => { x.globalAlpha = v; }, },
  lw: { set: v => { x.lineWidth = v; }, },
});

x.fr = x.fillRect.bind(x);
x.sr = x.strokeRect.bind(x);
x.bp = x.beginPath.bind(x);
x.cp = x.closePath.bind(x);
x.f = x.fill.bind(x);
x.a = x.arc.bind(x);
x.e = x.ellipse.bind(x);
x.s = x.stroke.bind(x);
x.t = x.translate.bind(x);
x.r = x.rotate.bind(x);
x.sc = x.scale.bind(x);
x.sv = x.save.bind(x);
x.rs = x.restore.bind(x);

const T = Math.tan;
const S = Math.sin;
const C = Math.cos;
X = 0;
//shoutout dwitter!
function u(t) {
eval(unescape(escape`景爨瘽㌴〬眽⡣⹷楤瑨簽〩⼲ⱸ⹦楬汒散琨〬〬眪㈬瘪㐩Ⱪ㴹㤻椭ⴻ⥦潲⡪㴵㤻樭ⴻ⥘㵩⼲ⴲ㔭䌨琩ⱙ㴵⭓⡩⼵⤪匨樯㔫琪㌩ⱸ⹦楬汓瑹汥㵠桳氨⑻太㤹紬㄰〥ⰵ〥怬砮晩汬剥捴⡷⭘⽪⩷ⱙ⽪⩷ⱳ㴹㤯樬猩`.replace(/u(..)/g,"$1%")))
}

function render(time) {
  requestAnimationFrame(render);
  u(time * 0.001);
}
requestAnimationFrame(render);