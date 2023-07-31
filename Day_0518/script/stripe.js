let tbl = document.getElementsByTagName("tr");
console.log(tbl);

for (let i = 1; i < tbl.length; ++i) {
    if (i % 2 == 1) {
        tbl[i].style.backgroundColor="#ffc";
    }
}
