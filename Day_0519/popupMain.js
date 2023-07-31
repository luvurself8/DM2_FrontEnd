window.addEventListener('load', function () {
    let popup = this.window.open('popup.html', 'newWin', 'width=500, height=600, left=30, top=20');

    popup.focus();
});
 
document.getElementById('move').addEventListener('click', function () { 
    // location.href = "http://google.com";
    // location.replace("http://google.com");
    location.assign("http://google.com");
}) 