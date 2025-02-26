export const handleContentsClick = (data) => {
    console.log(data);
    sendInfo(data);
}

const sendInfo = (data) =>{
    console.log(data);
    fetch("http://localhost:8080/posts", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      }).then(response => {
      if (!response.ok) {
        // 상태코드가 2xx가 아니라면 에러 처리
        throw new Error("정보조회 실패! 서버 응답 코드: " + response.status);
      }
      // JSON 형태로 파싱
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert("게시글 조회 성공!");
      // 여기서 받은 데이터를 화면에 표시하거나 추가 로직을 실행합니다.
    })
    .catch(error => {
      console.error(error);
      alert("게시글 조회 실패");
    });
}