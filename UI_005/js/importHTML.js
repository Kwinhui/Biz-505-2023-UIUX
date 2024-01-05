const importHtml = (tag, file) => {
  // FileInputStream 와 비슷
  const xhr = new XMLHttpRequest();
  // http 프로토콜을 이용해 XML을 Request(요청)
  // XML = Exchange Markup Language
  xhr.open("GET", file, true);
  // file을 local에서 읽어서 나에게 보낼 준비를 해라
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // 브라우저가 정상적으로 파일을 받았으면
      tag.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
};
