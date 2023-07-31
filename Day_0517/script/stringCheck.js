/* [ 첫번째 예 ] 이벤트 소스는 버튼!

1) 아이디는 공백을 포함하지 않은 상태로 3~5자 여야 함
2) 비밀번호는 공백을 포함하지 않은 상태로 3~5자 여야 함
3) 비밀번호 확인은 공백을 포함하지 않은 상태로 3~5자 여야하고,
   위 2)번의 값과 동일해야 한다.
4) 모든 조건을 만족하면 결과를 경고창에 갈무리하여 출력   
*/

//============== 두 번째 코드==============
// 아이디 체크
let correct = false;


let userid = document.getElementById("userid");
userid.addEventListener('keyup', function () {
    let idcheck = document.getElementById('idcheck');
    let data = this.value;

    if (data.includes(' ')) {
        idcheck.innerHTML = '공백없이 입력해주세요';
        correct = false;
        return;
    }
    if (data.length < 3 || data.length > 5) {
        idcheck.innerHTML = '3~5자 이내로 입력해주세요';
        correct = false;
        return;
    }
    correct = true;
    clear();
});

// 비밀번호 체크
let userpwd = document.getElementById("userpwd");
userpwd.addEventListener('keyup', function () {
    let pwd1 = document.getElementById('pwd1');
    let data = this.value;

    if (data.includes(' ')) {
        pwd1.innerHTML = '공백없이 입력해주세요';
        correct = false;
        return;
    }
    if (data.length < 3 || data.length > 5) {
        pwd1.innerHTML = '3~5자 이내로 입력해주세요';
        correct = false;

        return;
    }
    pwd1.innerHTML = '';
    // 비번과 비번확인값이 같은지 체크
    if (document.getElementById('pwdcheck').value !== data) {
        document.getElementById("pwd1").innerHTML = "비밀번호와 비밀번호 확인값이 같아야 합니다.";
        correct = false;
        return;
    }

    clear();
    correct = true;
});

// 비밀번호 확인 체크
let pwdcheck = document.getElementById("pwdcheck");
pwdcheck.addEventListener('keyup', function () {
    let pwd2 = document.getElementById('pwd2');
    let data = this.value;

    // 비번과 비번확인값이 같은지 체크
    if (document.getElementById('userpwd').value !== data) {
        document.getElementById('pwd1').innerHTML = "비밀번호와 비밀번호 확인값이 같아야 합니다.";
        correct = false;

        return;
    }
    clear();

    correct = true;
});

// 버튼 이벤트
let btn = document.getElementById("btn");
btn.addEventListener('click', function () {
    if (!correct) {
        alert("데이터를 정확히 입력해주세요");
        return;
    }
    let userid = document.getElementById("userid");
    let userpwd = document.getElementById("userpwd");
    let pwdcheck = document.getElementById("pwdcheck");

    let collectData = `가입이 완료되었습니다.\n- 아이디: ${userid.value}\n- 비밀번호: ${userpwd.value}\n- 비밀번호 확인: ${pwdcheck.value} `;
    alert(collectData);
});

function clear() {
    let idcheck = document.getElementById('idcheck');
    let pwd1 = document.getElementById('pwd1');
    let pwd2 = document.getElementById('pwd2');

    idcheck.innerHTML = '';
    pwd1.innerHTML = '';
    pwd2.innerHTML = '';
}


//============== 첫 번째 코드==============
// btn.addEventListener('click', check_first);
// '   hello hi   ' ==> 'hello hi'
function check_first() {
    let userid = document.getElementById("userid");
    let userpwd = document.getElementById("userpwd");
    let pwdcheck = document.getElementById("pwdcheck");

    // 아이디 조건 체크
    if (userid.value.includes(' ')) {
        alert("공백없이 입력하세요");
        userid.select();
        userid.focus();
        return;
    }
    if (userid.value.length < 3 || userid.value.length > 5) {
        alert("아이디는 3~5자 이내로 입력해주세요");
        userid.select();
        userid.focus();
        return;
    }

    // 비번 조건 체크
    if (userpwd.value.includes(' ')) {
        alert("비밀번호는 공백없이 입력하세요");
        userpwd.select();
        userpwd.focus();
        return;
    }
    if (userpwd.value.length < 3 || userpwd.value.length > 5) {
        alert("비밀번호는 3~5자 이내로 입력해주세요");
        userpwd.select();
        userpwd.focus();
        return;
    }

    // 비번 확인 조건 체크
    if (pwdcheck.value.includes(' ')) {
        alert("비밀번호 확인은 공백없이 입력하세요");
        pwdcheck.select();
        pwdcheck.focus();
        return;
    }
    if (pwdcheck.value.length < 3 || pwdcheck.value.length > 5) {
        alert("비밀번호 확인은 3~5자 이내로 입력해주세요");
        pwdcheck.select();
        pwdcheck.focus();
        return;
    }

    // 비번과 비번확인값이 같은지 체크
    if (userpwd.value !== pwdcheck.value) {
        alert("비밀번호와 비밀번호 확인값이 같아야 합니다.");
        pwdcheck.select();
        pwdcheck.focus();
        return;
    }

    let collectData = `- 아이디: ${userid.value}\n- 비밀번호: ${userpwd.value}\n- 비밀번호 확인: ${pwdcheck.value} `;
    alert(collectData);
}