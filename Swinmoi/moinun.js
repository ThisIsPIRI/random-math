"use strict";

document.바가름로찾기 = document.getElementById;
const 누리쪽 = document;
EventTarget.prototype.귀더하기 = EventTarget.prototype.addEventListener;
ajaxRequester.가져오기 = ajaxRequester.request;
const 안고치손 = ajaxRequester; //안 고치고 가져오(AJAX)는 손

var 흔한모이, 안흔모이, 엮맞모이;
const 보여주는곳 = 누리쪽.바가름로찾기("보여주는곳");
const 찾을말치 = 누리쪽.바가름로찾기("찾을말치");
const 안흔찾기 = 누리쪽.바가름로찾기("안흔찾기");
const 엮맞찾기 = 누리쪽.바가름로찾기("엮맞찾기");
찾을말치.귀더하기("keydown", function(일어남) {
	if(일어남.key == "Enter")
		찾아보여주기(찾을말치.value);
});

const 낱말모습만들기 = function(보여줄말) {
	var 만든것 = `<span class="말">${보여줄말.말}</span>`;
	if(보여줄말.밑)
		만든것 += `<span class="밑">${보여줄말.밑}</span>`;
	if(보여줄말.바꿈꼴)
		만든것 += `<span class="바꿈꼴">[${보여줄말.바꿈꼴}]</span>`;
	if(보여줄말.붙임)
		만든것 += `<sup>${보여줄말.붙임}</sup>`;
	만든것 += ', ';
	return 만든것;
};
/**
 * @param 보여줄말 {낱말} - 보여줄 낱말*/
const 다듬모습만들기 = function(보여줄말) {
	var 만든것 = "<p class=\"다듬은말줄\"><span class=\"들온말\">";
	보여줄말.늘들온말.하나하나(function(들온말) {
		만든것 += 낱말모습만들기(들온말);
	});
	만든것 = 만든것.작은줄(0, 만든것.length - 2);
	만든것 += "</span> -> <span class=\"맨말\">";
	보여줄말.늘맨말.하나하나(function(맨말) {
		만든것 += 낱말모습만들기(맨말);
	});
	만든것 = 만든것.작은줄(0, 만든것.length - 2);
	if(보여줄말.붙임)
		만든것 += "</span></p><p class=\"붙임\">" + 보여줄말.붙임.join("<br>") + "</p>";
	return 만든것;
};

/**
 @param 찾을말 {글씨줄} - 찾을 말*/
const 찾아보여주기 = function(찾을말) {
	var 만든것 = '';
	var 찾을모이 = [흔한모이];
	if(안흔찾기.checked)
		찾을모이.넣기(안흔모이);
	if(엮맞찾기.checked)
		찾을모이.넣기(엮맞모이);
	찾을말 = 찾을말.빈곳깎기();
	var 늘찾은말 = 말모이서찾기(찾을모이, 찾을말);
	if(늘찾은말.length === 0) {
		const 찾을말끝 = 찾을말.작은줄(찾을말.length - 2, 찾을말.length);
		if(찾을말끝 === "하다" || 찾을말끝 === "되다")
			늘찾은말 = 말모이서찾기(찾을모이, 찾을말.작은줄(0, 찾을말.length - 2));
		if(늘찾은말.length === 0)
			만든것 = "이 말은 우리 말모이에 없는 것 같습니다.<br>\
			움직씨나 그림씨라면 -다 꼴로 찾아 보세요.<br>\
			'안 흔한 말' '엮은이가 맞춘말'을 켜 보세요.";
	}
	늘찾은말.하나하나(function(찾은말) {
		만든것 += 다듬모습만들기(찾은말);
	});
	보여주는곳.innerHTML = 만든것;
};

//할것: 안고치를 한대에 모두 쏘도록
안고치손.가져오기("manuri.swin", function(읽은모이) {
	흔한모이 = 말모이아롬읽기(읽은모이);
	안고치손.가져오기("anhen.swin", function(읽은안흔모이) {
		안흔모이 = 말모이아롬읽기(읽은안흔모이);
		안고치손.가져오기("yemat.swin", function(읽은엮맞모이) {
			엮맞모이 = 말모이아롬읽기(읽은엮맞모이);
			보여주는곳.innerHTML = "";
		});
	});
});
