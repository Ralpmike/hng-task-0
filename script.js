const timeUtc = document.getElementById("utctime");

function updateUTCTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  timeUtc.innerText = utcTime.slice(0, -3);
}
updateUTCTime();
setInterval(updateUTCTime, 1000);
