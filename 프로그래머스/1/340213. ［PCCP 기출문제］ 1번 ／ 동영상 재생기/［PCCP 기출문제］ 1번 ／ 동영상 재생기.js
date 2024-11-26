function toSeconds(time) {
  const [minute, second] = time.split(":");
  return minute * 60 + Number(second);
}

function solution(video_len, pos, op_start, op_end, commands) {
  let position = toSeconds(pos);
  const videoLen = toSeconds(video_len);
  const opStart = toSeconds(op_start);
  const opEnd = toSeconds(op_end);

  if (opStart <= position && position <= opEnd) position = opEnd;

  commands.forEach((command) => {
    position += command === "next" ? 10 : -10;
    position = Math.max(0, Math.min(position, videoLen));
    if (opStart <= position && position <= opEnd) position = opEnd;
  });

  const minute = Math.floor(position / 60).toString().padStart(2, "0");
  const second = (position % 60).toString().padStart(2, "0");
  return minute + ":" + second;
}
// function solution(video_len, pos, op_start, op_end, commands) {
//   // 시간을 분으로 변환하는 함수
//   function toMinutes(time) {
//       const [h, m] = time.split(":");
//       return Number(h) * 60 + Number(m);
//   }
//   // 모든 시간을 분으로 변환한다.
//   let mPos = toMinutes(pos);
//   const mOpStart = toMinutes(op_start);
//   const mOpEnd = toMinutes(op_end);
//   const mVideo = toMinutes(video_len);

//   // 현재 위치가 오프닝 구간인 경우 오프닝이 끝나는 위치로 이동
//   if (mPos >= mOpStart && mPos <= mOpEnd) mPos = mOpEnd;

//   // 사용자의 입력을 반복문을 통해 계산한다.
//   commands.forEach((p) => {
//     // next, prev 명령어에 따라 10초씩 이동한다.
//     mPos += p === "next" ? 10 : -10;

//     // 현재 위치가 0 미만이거나 영상 길이를 넘어가면 0 또는 영상 길이로 설정한다.
//     if (mPos < 0) mPos = 0;

//     // 영상 길이를 넘어가면 영상 길이로 설정한다.
//     if (mPos > mVideo) mPos = mVideo;

//     // 현재 위치가 오프닝 구간인 경우 오프닝이 끝나는 위치로 이동한다.
//     if (mPos >= mOpStart && mPos <= mOpEnd) mPos = mOpEnd;
//   });

//   // 분을 시간으로 변환하여 리턴한다.
//   const h = Math.floor(mPos / 60) + "";
//   const m = (mPos % 60) + "";

//   return `${h.padStart(2, "0")}:${m.padStart(2, "0")}`;
// }

