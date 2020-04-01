var 말모이;
const 보여주는곳 = document.getElementById("보여주는곳");
const 찾을말치 = document.getElementById("찾을말치");

/**
 * @param 보여줄말 {낱말} - 보여줄 낱말*/
const 모습만들기 = function(보여줄말) {
	//할것: 이거하고 내리매무새만 만들면 돌아가기는 돌아감
	var 만든것 = '';
	보여줄말.늘들온말.하나하나(function(들온말) {
		만든것 += `${들온말.말}(${들온말.밑})[${들온말.바꿈꼴 ? 들온말.바꿈꼴 : ''}]/`;
	});
	보여줄말.늘맨말.하나하나(function(맨말) {
		만든것 += `${맨말.말}[${맨말.바꿈꼴 ? 맨말.바꿈꼴 : ''}]/`;
	});
	return 만든것;
};

/**
 @param 찾을말 {String} - 찾을 말*/
const 찾아보여주기 = function(찾을말) {
	var 만든것 = '';
	말모이서찾기(말모이, 찾을말).하나하나(function(찾은말) {
		만든것 += 모습만들기(찾은말) + "<br>";
	});
	보여주는곳.innerHTML = 만든것;
};

말모이읽기(function(만든것) {
	말모이 = 만든것;
});