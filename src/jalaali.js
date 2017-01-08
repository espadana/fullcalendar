// Check if there's an Argument for Jalaali
function checkArgsForJalaali(args) {
	for (var i in args) {
		if (args[i] === true) {
			return true;
		}
	}
	return false;
}

// Delete Jalaali From Arguments
function delJalaaliFromArgs(args) {
	var out = [];
	for (var i in args) {
		if (typeof (args[i]) === "boolean") {
			continue;
		}
		out.push(args[i]);
	}
	return out;
}

// Add Jalaali to Arguments
function addJalaaliToArgs(args, isJalaali) {
	var out = [];
	for (var i in args) {
		out.push(args[i]);
	}
	out.push(isJalaali);
	return out;
}

// Convert English Numbers to Persian
function persianNumber(englishNumbers) {
	var numbers = {
		1: "۱",
		2: "۲",
		3: "۳",
		4: "۴",
		5: "۵",
		6: "۶",
		7: "۷",
		8: "۸",
		9: "۹",
		0: "۰"
	};
	return englishNumbers.toString().replace(/\d/g, function (englishNumbers) {
		return numbers[englishNumbers];
	}).replace(/,/g, "،");
}

function noJalaaliUnit(formatStr, isJalaali) {
	return (isJalaali ? formatStr.replace(/j/g, "") : formatStr);
}

// Convert Unit if Jalaali was enabled
function toJalaaliUnit(formatStr, isJalaali) {
	if (isJalaali) {
		//formatStr=formatStr.replace(/(.*)(\bYY\b|\bYYYY\b|\bYYYYY\b|\bM\b|\bMM\b|\bMMM\b|\bMMMM\b|\bMMMMM\b|\bD\b|\bDD\b|\bDDD\b|\bDDDD\b|\bgg\b|\bgggg\b|\bggggg\b|\byear\b|\bmonth\b|\bw\b)(.*)/g,"$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bYY\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bYYYY\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bYYYYY\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bM\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bMM\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bMMM\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bMMMM\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bMMMMM\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bD\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bDD\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bDDD\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bDDDD\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bgg\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bgggg\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bggggg\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\byear\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bmonth\b)(.*)/g, "$1j$2$3");
		formatStr = formatStr.replace(/(.*)(\bw\b)(.*)/g, "$1j$2$3");
		if (!formatStr.match(/^j.*/g)) {
			formatStr = "j" + formatStr;
		}
	}
	return formatStr;
}
