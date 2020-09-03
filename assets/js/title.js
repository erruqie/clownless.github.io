var text = ["$", " $", "r $", "3r $", "x3r $", "4x3r $", "m4x3r $", "m4x3 $", "m4x $","m4 $","m $"," $"];
var counter = 0;
var inst = setInterval(change, 300);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
