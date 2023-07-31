/*
CSS의 속성값에 접근
1) style : 
    - 읽기는 직접 태그에 스타일을 지정했을 때만 읽어올 수 있다.
    - 내부스타일이나 외부 스타일로 지정한 경우는 빈문자열("")

    - 쓰기는 태그에 style 속성으로 직접 적용
    element.style.XXX

2) className
    - 특정 요소에 지정된 클래스의 이름을 읽거나 쓸 수 있다.
    element.className = 클래스명
    element.className += 클래스명  (클래스스타일를 추가함)

3) classList
*/
document.getElementById("toDark").addEventListener('click', function () { 
    let ptag = document.getElementById("target");
    document.body.classList.toggle("toDark");
    ptag.classList.toggle("test1");
    ptag.classList.toggle("test2");
});

// className으로 작업한 거
/*
document.getElementById("toDark").addEventListener('click', function () { 
    let ptag = document.getElementById("target");
    
    if(document.body.className  === '') {
        document.body.className = "toDark"; 
        ptag.className = "";
    } else {
        document.body.className = ""
        ptag.className += "test1 test2";
    }
});
*/

document.getElementById("btn").addEventListener('click', function () {
    let h2tag = document.getElementById("one");
    let ptag = document.getElementById("target");

    //console.log(`글자색 : ${h2tag.style.color}, ${ typeof h2tag.style.color}`);
    //console.log(`글자크기 : ${ h2tag.style.fontSize}, ${ typeof h2tag.style.fontSize}` );

    //h2tag.style.color = "#0F0";
    //h2tag.style.backgroundColor = "#FF0";

    console.log(h2tag.className);
    console.log(ptag.className);

    h2tag.className = "test3"; 
    ptag.className += " test3"; 
});