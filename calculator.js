function display(data) {
    document.getElementById("result").value += data;
}

// display('0')

function calculate() {
    try {
        result.value = eval(result.value);
    }
    catch (err) {
        alert('invalid')
    }
}

function C() {
    result.value = result.value.slice(0, -1);
}

function clearfn() {
    result.value ="";
}