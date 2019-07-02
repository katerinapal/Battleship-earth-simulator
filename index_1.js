document.getElementById('earth-stats').onclick = function() {
	$.planetDisplay.show();
}

document.getElementById('weapon-stats').onclick = function() {
	$.weaponDisplay.show();
}

document.getElementById('element25').onclick = function() {
	$.weaponDisplay.hide();
}

document.getElementById('wReplace').onclick = function() {
	$.weaponDisplay.delete();
}

document.getElementById('wPrev').onclick = function() {
	$.weaponDisplay.ClickPrevNext(-1);
}

document.getElementById('wNext').onclick = function() {
	$.weaponDisplay.ClickPrevNext(1);
}

document.getElementById('element45').onclick = function() {
	$.planetDisplay.hide();
}

document.getElementById('health').onchange = function() {
	$.planetDisplay.updatePercents(this);
}

document.getElementById('water').onchange = function() {
	$.planetDisplay.updatePercents(this);
}

document.getElementById('fire').onchange = function() {
	$.planetDisplay.updatePercents(this);
}

document.getElementById('air').onchange = function() {
	$.planetDisplay.updatePercents(this);
}

document.getElementById('element72').onclick = function() {
	$.saveGame();
}

document.getElementById('element79').onclick = function() {
	$.destinyDisplay.destroyClick();
}

document.getElementById('element83').onclick = function() {
	$.destinyDisplay.peaceClick();
}

document.getElementById('element87').onclick = function() {
	$.destinyDisplay.takeoverClick();
}

document.getElementById('element93').onclick = function() {
	location.reload();
}

document.getElementById('element98').onclick = function() {
	$.play_Click(false);
}

document.getElementById('resumeGame').onclick = function() {
	$.play_Click(true);
}

