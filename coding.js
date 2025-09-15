// ปุ่ม "ไม่"
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

  noBtn.style.position = "absolute"; // สำคัญ ต้องให้ปุ่มขยับได้
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// ปุ่ม "ใช่"
yesBtn.addEventListener("click", () => {
  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 1000); // กำหนดเวลา delay ได้ เช่น 1000 = 1 วิ
});
