var inp = document.getElementById("inputDisplay");

function addVal(val) {
    inp.value += val
}

function clrCal() {
    inp.value = "";
}

function back() {
    var val = inp.value.split("");
    val.splice(inp.value.length - 1, 1);
    inp.value = val.join("")

}

function eQual() {
    var res = eval(inp.value)
    inp.value = res;
}
