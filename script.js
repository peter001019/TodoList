const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("텍스트를 입력해주세요!");
    }
    else{
        let li = document.createElement("li"); //html 요소 생성
        li.innerHTML = inputBox.value; //element 속 HTML 가져옴
        listContainer.appendChild(li); //요소 추가
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)
//EventListener의 세번째 인수는 동작방식
//false로 지정할 경우 이벤트가 자식 노드부터 부모노드까지 상향식으로 진행
//일반적으로 false 지정

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();