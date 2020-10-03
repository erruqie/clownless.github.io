var text = ["$", " $", "w $", "nw $", "inw $", "linw $", "1linw $", "s1linw $", "s1lin $","s1li $","s1l $","s1 $","s $"," $"];
var counter = 0;
var inst = setInterval(change, 300);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
