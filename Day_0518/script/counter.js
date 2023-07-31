document.getElementById("mytext").addEventListener('keyup', count);
let result = document.getElementById("result");

function count() {
    let number = 0;
    number = this.value;
    let cnt = number.length;  // 글자수

    if (cnt > 30) {
        this.value = this.value.substring(0, 30);
        result.style.color = "red";
        return;
    }
    result.style.color = "black";
    let data = `글자 수 : ${cnt}`;

    result.innerHTML = data;
}
