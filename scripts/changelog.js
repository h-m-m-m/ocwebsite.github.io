function readFile(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }


var text2 = readFile("./misc/changelog.txt");

var head = document.getElementById("descr");
var changelogtext = document.getElementsByClassName("changelog");

var text = "";
var text3;

text3 = text2.split("[n]")
for (let i=0;i<text3.length;i++){
    text = text + text3[i] + "\n";
}

window.onload = function(){
    changelogtext[0].innerHTML = text
}

head.onload = function(){
    head.setAttribute("content", text)
}
