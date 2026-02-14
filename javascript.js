let timerId = null;
let totalSeconds = 0;

const hInput = document.getElementById("hour");
const mInput = document.getElementById("min");
const sInput = document.getElementById("sec");

// 시작 버튼 클릭했을 때
document.getElementById("startBtn").onclick = function () {
  if (timerId !== null) return; // 이미 돌아가고 있으면 무시

  // 만약 새로 시작하는 거라면 입력값 읽어오기
  if (totalSeconds <= 0) {
    totalSeconds =
      (parseInt(hInput.value) || 0) * 3600 +
      (parseInt(mInput.value) || 0) * 60 +
      (parseInt(sInput.value) || 0);
  }

  if (totalSeconds <= 0) return; // 설정한 시간이 없으면 종료

  timerId = setInterval(function () {
    totalSeconds--; // 1초 감소

    if (totalSeconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      alert("시간이 다 됐어요!");
      hInput.value = "";
      mInput.value = "";
      sInput.value = "";
    } else {
      // 화면 업데이트
      let h = Math.floor(totalSeconds / 3600);
      let m = Math.floor((totalSeconds % 3600) / 60);
      let s = totalSeconds % 60;

      hInput.value = h;
      mInput.value = m;
      sInput.value = s;
    }
  }, 1000);
};

// 일시정지 버튼
document.getElementById("pauseBtn").onclick = function () {
  clearInterval(timerId);
  timerId = null;
};

// 초기화 버튼
document.getElementById("resetBtn").onclick = function () {
  clearInterval(timerId);
  timerId = null;
  totalSeconds = 0;
  hInput.value = "";
  mInput.value = "";
  sInput.value = "";
};
