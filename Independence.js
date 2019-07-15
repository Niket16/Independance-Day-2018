alert("Please upvote guys👍😍");

var text="JAY HIND";
var word=text.split("");
var i=0;
var interval = setInterval(writeText,100);
function writeText(){
    var p=document.getElementById("jayhind");
    p.style.color = "DarkYellow";
    if ( i<word.length)
    {
        p.innerHTML+= word[i];
        i++
    }
    else
    {
        clearInterval(interval);
    }
}
