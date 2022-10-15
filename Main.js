function button() {
	qary = confirm("Перейти на \"WebOS\"? (только на английском языке!)")
	if (qary == true) {
		alert("ok")
		window.location.href = "/webos.php"
	} else {
		alert("ok")
	}
}
function getText(lang) {
	text_eng = "this page in ENGLISH"
	text_rus = "эта страница на Русском"
	text_ukr = "цю сторінку в Україні"
	if (lang == "EN") {
		return text_eng
	}
	if (lang == "RU") {
		return text_rus
	}
	if (lang == "UK") {
		return text_ukr
	}
}