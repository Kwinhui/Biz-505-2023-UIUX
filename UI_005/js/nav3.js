// DOM 객체를 변수에 할당하여 JS 코드에서 사용할 준비하기
// li.main_nav 요소를 모두 selector 해서 nav_list에 담아라
// nav_list 는 list타입
const nav_list = document.querySelectorAll("li.main_nav");

// const nav_click_handler = (event) => {
//   js에선 매개변수가 있어도 되고 없어도 됨
//   const target = event.target;
//   const nav_text = target.innerText;

//   alert(nav_text + " 메뉴 클릭");
// };

// call-back 함수
nav_list.forEach((item) => {
  item.addEventListener("click", (event) => {
    const target = event.target;
    const nav_text = target.innerText;
    alert(nav_text + " 메뉴 클릭");
  });
});
