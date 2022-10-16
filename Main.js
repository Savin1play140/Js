var ad_block;
var ad_text = [
	"gmp14", //1
	"gmp14 top", //2
	"gmp", //3
	"gmp top", //4
	"author top", //5
	"kyb co.", //6
	"gmp co.", //7
	"ByteLite co.", //8
	"ByteLite lib.", //9
	"YouTube gmp", //10
	"YouTube kyb", //11
	"kub and gmp", //12
	"gmp and kub", //13
	"top 1, top 2", //14
	"server ByteLite", //15
	"server ByteLite Minecraft", //16
	"1140", //17
	"1440", //18
	"kyb", //19
	"kyb top", //20
	"kybomaster", //21
	"kybomaster top", //22
	"fact: this site is mostly OOP", //23
	" Minecraft server: bytelite.ru:19132", //24
];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function connectAd() {
	ad_block = document.getElementsByTagName('ad');
	for (let i=0;i<ad_block.length;i++){
		rand = getRandomInt(24);
		ad_block[i].innerHTML = ad_text[rand];
	}
	return true;
}
function clearAd() {
	ad_block = document.getElementsByTagName('ad');
	for (let i=0;i<ad_block.length;i++){
		ad_block[i].innerText = "";
	}
	return true;
}
window.onload = function()
{
	connectAd();
	console.log("enabled ad");
}
