/*  eenvoudige browsertest voor dhtml zaken    alert((isNS6) ? "u heeft netscape 6": "u heeft geen netscape 6");  */var isNS  = (document.layers) ? true : false;var isIE  = (document.all) ? true : false;var isDom = (document.getElementById) ? true : false;var isNS4 = (document.layers) ? true : false;var isIE4 = (document.all && !document.getElementById) ? true : false;var isIE5 = (document.all && document.getElementById) ? true : false;var isNS6 = (!document.all && document.getElementById) ? true : false;/*  eenvoudige style routine voor de belangrijkste browsers    syntax: var theStyle = getStyleObject('ObjectId');                theStyle.fontSize = ....                     */function getStyleObject(objectId) {    if(document.getElementById && document.getElementById(objectId)) {		return document.getElementById(objectId).style;			// dus W3C DOM    } else if (document.all && document.all(objectId)) {		return document.all(objectId).style;					// dus IE4 DOM    } else if (document.layers && document.layers[objectId]) {		return document.layers[objectId];						// dus N4 DOM (vindt geen geneste layers!)    } else {		return false;											// dus Niets	}}/*  eenvoudige Object routine voor de belangrijkste browsers    syntax: var myObject = getObject('ObjectId');                myObject.innerHTML = ....                     */function getObject(objectId) {    if(document.getElementById && document.getElementById(objectId)) {		return document.getElementById(objectId);				// dus W3C DOM    } else if (document.all && document.all(objectId)) {		return document.all(objectId);							// dus IE4 DOM    } else if (document.layers && document.layers[objectId]) {		return document.layers[objectId];						// dus N4 DOM (vindt geen geneste layers!)    } else {		return false;											// dus Niets	}}/*  eenvoudige move routine voor layers of divs    syntax:  moveObject('ObjectId', offsetH, offsetV);      */function moveObject(objectId, myOffsetH, myOffsetV) {	var element = getStyleObject(objectId);	var positieH = parseInt(element.left) + myOffsetH;	positieH = (isNS4) ? positieH : positieH + "px";	element.left = positieH;	var positieV = parseInt(element.top) + myOffsetV;	positieV = (isNS4) ? positieV : positieV + "px";	element.top = positieV;}