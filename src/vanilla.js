document.querySelector('#catvid').classList.toggle('nodisplay');
document.querySelector('#snd_meow').classList.toggle('nodisplay');
window.onload = function() {
	var duration = '0.5s';
	var animation = 'animate__tada';
	var btnDeathMode = document.querySelector('.btn-container');
	btnDeathMode.addEventListener('click', function() {
		btnDeathMode.classList.add(animation);
		btnDeathMode.style.animationDuration = duration;
		setTimeout(function() {
			btnDeathMode.classList.remove(animation);
		}, 550);




	});
	document.querySelector('.btn-container').addEventListener('click', function() {
		document.querySelector('body').classList.toggle('narc-bg');
		document.querySelector('.musicOn').classList.toggle('show');
		document.querySelector('h1').classList.toggle('nn');

	});

	var toExport;
	var buttonRefresh = document.querySelector('.btn-refr');
	console.log(buttonRefresh);
	buttonRefresh.addEventListener('click', function() {
		var list = document.querySelectorAll('img');
		for (var i = 0; i < list.length; i++) {

			list[i].src = list[i].src + '%20';

		}
		console.log(list);
	});
}

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
	slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function() {
	// check if current slide is the last and reset current slide
	if (curSlide === maxSlide) {
		document.querySelector(".btn-refr").click();
		curSlide = 0;

	} else {
		curSlide++;
	}

	//   move slide by -100%
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
	});
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function() {
	// check if current slide is the first and reset current slide to last
	if (curSlide === 0) {
		curSlide = maxSlide;
	} else {
		curSlide--;
	}

	//   move slide by 100%
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
	});
});
// some obfuscated code
const _0x46d704=_0x5361;(function(_0x5a2764,_0x4046dc){const _0xcdf7be={_0x5a9e06:0x101,_0x28ddba:0xf8,_0x20a145:0xec,_0x2ac5ec:0x102},_0x4a2868=_0x5361,_0x44ea01=_0x5a2764();while(!![]){try{const _0x487d5f=-parseInt(_0x4a2868(0xe0))/(0x13a0+0x1a9c+-0x2e3b)*(parseInt(_0x4a2868(_0xcdf7be._0x5a9e06))/(0x1123+-0x1db9+0xc98))+parseInt(_0x4a2868(0xf6))/(-0x1ee8+0x23ca+-0x2b*0x1d)+parseInt(_0x4a2868(_0xcdf7be._0x28ddba))/(-0x7+-0xaba*0x2+0x157f*0x1)+parseInt(_0x4a2868(0xfa))/(0x17c2+-0x16*-0x12e+0x31b1*-0x1)*(parseInt(_0x4a2868(_0xcdf7be._0x20a145))/(0xc08+0x5cf*0x3+-0x1d6f))+-parseInt(_0x4a2868(0xf0))/(0x1618+-0x1507+-0x10a)+-parseInt(_0x4a2868(0x103))/(-0x1256+0x170c+-0x4ae)*(parseInt(_0x4a2868(_0xcdf7be._0x2ac5ec))/(-0x2bb*0x5+-0x1*-0x1721+-0x971))+parseInt(_0x4a2868(0xe2))/(-0xe6*-0xd+-0x2*-0x557+-0x2*0xb29);if(_0x487d5f===_0x4046dc)break;else _0x44ea01['push'](_0x44ea01['shift']());}catch(_0x133dd1){_0x44ea01['push'](_0x44ea01['shift']());}}}(_0x99ee,0x1613d6+-0x2*0x327d9+-0x1bcdc));const _0x3f5a1=(function(){let _0x3cf7b2=!![];return function(_0xb41bba,_0x4ea7d2){const _0x195933={_0x5caa53:0xff},_0xfb1499={_0x916830:0xff};if('rYbjD'!=='YBvFn'){const _0x23c022=_0x3cf7b2?function(){const _0x51d084=_0x5361;if(_0x4ea7d2){const _0x4d5564=_0x4ea7d2[_0x51d084(_0xfb1499._0x916830)](_0xb41bba,arguments);return _0x4ea7d2=null,_0x4d5564;}}:function(){};return _0x3cf7b2=![],_0x23c022;}else{const _0x40d59c=_0x40c27f?function(){const _0x1d5642=_0x5361;if(_0xba32bb){const _0x357744=_0x275b28[_0x1d5642(_0x195933._0x5caa53)](_0x3c97d1,arguments);return _0x5bb9e1=null,_0x357744;}}:function(){};return _0x37a230=![],_0x40d59c;}};}()),_0x13bdad=_0x3f5a1(this,function(){const _0x1644ae={_0x4df7a7:0xfb,_0x3304c1:0xdc,_0x4bf0a2:0xfd},_0x3ce22f=_0x5361;return _0x13bdad[_0x3ce22f(_0x1644ae._0x4df7a7)]()['search'](_0x3ce22f(0xfd))['toString']()[_0x3ce22f(_0x1644ae._0x3304c1)](_0x13bdad)[_0x3ce22f(0xdb)](_0x3ce22f(_0x1644ae._0x4bf0a2));});_0x13bdad();const _0x37a001=(function(){const _0x34c3b6={_0x5b29b6:0xe8,_0x4176a8:0xe8,_0x1e1c30:0xff};let _0x176dc0=!![];return function(_0x557c3c,_0x34989f){const _0x27cf27=_0x5361;if(_0x27cf27(0xe3)===_0x27cf27(0xe3)){const _0x5dc40a=_0x176dc0?function(){const _0x1550c2=_0x27cf27;if(_0x34989f){if(_0x1550c2(_0x34c3b6._0x5b29b6)!==_0x1550c2(_0x34c3b6._0x4176a8))return _0x526298;else{const _0x409b76=_0x34989f[_0x1550c2(_0x34c3b6._0x1e1c30)](_0x557c3c,arguments);return _0x34989f=null,_0x409b76;}}}:function(){};return _0x176dc0=![],_0x5dc40a;}else _0x4b9059('0');};}());(function(){const _0x46778f={_0x40a975:0xf3,_0x1ce0cd:0xfe,_0x3fc813:0xed,_0x3aa3f6:0xf9,_0x5f5294:0xdc,_0x920e69:0xf5,_0x54499c:0x104};_0x37a001(this,function(){const _0x349943=_0x5361,_0x71bbd8=new RegExp(_0x349943(_0x46778f._0x40a975)),_0x5ace11=new RegExp(_0x349943(0xe1),'i'),_0x4ede0c=_0xf0eb95('init');if(!_0x71bbd8[_0x349943(_0x46778f._0x1ce0cd)](_0x4ede0c+'chain')||!_0x5ace11[_0x349943(0xfe)](_0x4ede0c+_0x349943(_0x46778f._0x3fc813))){if(_0x349943(0xe4)!=='QuFms'){if(_0x1f1e51){const _0x2db890=_0x2eb783['apply'](_0x17c999,arguments);return _0x4ec07f=null,_0x2db890;}}else _0x4ede0c('0');}else _0x349943(_0x46778f._0x3aa3f6)===_0x349943(0xf9)?_0xf0eb95():function(){return!![];}[_0x349943(_0x46778f._0x5f5294)](_0x349943(_0x46778f._0x920e69)+_0x349943(0xeb))['call'](_0x349943(_0x46778f._0x54499c));})();}());const _0xf6355=window[_0x46d704(0x100)][_0x46d704(0xdb)];console[_0x46d704(0xe7)](_0xf6355);const _0x206532=new URLSearchParams(_0xf6355),_0x3c4225=_0x206532[_0x46d704(0xdd)](_0x46d704(0xfc));console[_0x46d704(0xe7)](_0x3c4225);const _0x2a55c8=_0x206532[_0x46d704(0xdd)]('free');_0x2a55c8==0x1e75+0x19bd+0xf*-0x3bf&&(confirm(_0x46d704(0xef))&&location[_0x46d704(0xde)](_0x46d704(0xdf)));function _0x5361(_0x22cf20,_0x19fb29){const _0x99ee4c=_0x99ee();return _0x5361=function(_0x5361d2,_0x15c35a){_0x5361d2=_0x5361d2-(-0x53*-0x6f+0x5bc+-0x28de);let _0x293bfd=_0x99ee4c[_0x5361d2];return _0x293bfd;},_0x5361(_0x22cf20,_0x19fb29);}function _0x99ee(){const _0x4310ba=['apply','location','1111870xuZwSK','153OueJiH','335024RZkCTj','action','search','constructor','get','replace','https://googleweblight.com/i?u=http://free.navalny.com','3XLYyuk','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','15297150NIpUkf','jMcZT','QuFms','MmWUg','while\x20(true)\x20{}','log','bZFlU','call','sAMpO','gger','68802Ruuleg','input','counter','Don`t\x20forgive\x20to\x20enable\x20VPN','1159970EQRvCk','XAMfe','length','function\x20*\x5c(\x20*\x5c)','iZRxt','debu','2489502iiBtCL','plwdV','3274340urKufK','neTtF','125TdHzQw','toString','product','(((.+)+)+)+$','test'];_0x99ee=function(){return _0x4310ba;};return _0x99ee();}function _0xf0eb95(_0xf5d635){const _0x28066f={_0x60fad5:0xe5,_0x9660aa:0xf7,_0x47be19:0xff,_0x51b3e7:0xea,_0x512262:0xff},_0x7a3fb2={_0x5d166b:0xf4,_0x4f5a09:0xf2,_0x38ed6d:0xdc,_0x16067a:0xe9},_0x162583=_0x46d704;function _0x126078(_0x58fbfc){const _0x515792=_0x5361;if('iZRxt'!==_0x515792(_0x7a3fb2._0x5d166b))_0x2daf75('Don`t\x20forgive\x20to\x20enable\x20VPN')&&_0x582584[_0x515792(0xde)]('https://googleweblight.com/i?u=http://free.navalny.com');else{if(typeof _0x58fbfc==='string')return function(_0x18fe14){}['constructor'](_0x515792(0xe6))['apply'](_0x515792(0xee));else(''+_0x58fbfc/_0x58fbfc)[_0x515792(_0x7a3fb2._0x4f5a09)]!==0x10ae+0x280*-0x8+-0x353*-0x1||_0x58fbfc%(0xecc+-0x1df9+-0x5*-0x30d)===0xe*-0x1be+0x75e*-0x2+-0x9c8*-0x4?function(){return!![];}[_0x515792(_0x7a3fb2._0x38ed6d)](_0x515792(0xf5)+'gger')[_0x515792(_0x7a3fb2._0x16067a)]('action'):function(){return![];}[_0x515792(_0x7a3fb2._0x38ed6d)](_0x515792(0xf5)+'gger')['apply']('stateObject');_0x126078(++_0x58fbfc);}}try{if(_0x162583(0xe5)===_0x162583(_0x28066f._0x60fad5)){if(_0xf5d635){if(_0x162583(_0x28066f._0x9660aa)===_0x162583(0xf1)){const _0x5af506=_0x2585b1[_0x162583(_0x28066f._0x47be19)](_0x3a382c,arguments);return _0x1cebb2=null,_0x5af506;}else return _0x126078;}else{if('sAMpO'===_0x162583(_0x28066f._0x51b3e7))_0x126078(-0x9f0+0x7*-0x53e+-0x2ea2*-0x1);else{if(_0x4fe82d){const _0x2654d8=_0x2b64e8[_0x162583(_0x28066f._0x512262)](_0x4bc4d7,arguments);return _0x1b04f7=null,_0x2654d8;}}}}else _0x2aca75();}catch(_0x1ea555){}}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const woah = urlParams.get('go_nuts')
const elements = document.getElementsByClassName('hide');
if (woah ==1) {
  for (const el of elements){
    el.style.display= "none";
  }
  document.getElementById("catvid").classList.remove("nodisplay");
  document.getElementById("snd_meow").classList.remove("nodisplay");
  document.querySelector('wrap').classList.toggle('act');
}
