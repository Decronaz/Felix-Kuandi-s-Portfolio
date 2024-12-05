const scrollbar = document.getElementById("scrollbar");
const thumb = document.getElementById("scrollbar-thumb");

function updateThumb() {
  const bodyHeight = document.body.scrollHeight;
  const viewportHeight = window.innerHeight;

  const thumbHeight = (viewportHeight / bodyHeight) * scrollbar.offsetHeight;
  thumb.style.height = `${thumbHeight}px`;

  const scrollRatio = window.scrollY / (bodyHeight - viewportHeight);
  thumb.style.top = `${scrollRatio * (scrollbar.offsetHeight - thumbHeight)}px`;
}

let isDragging = false;
let startY, startTop;

thumb.addEventListener("mousedown", (e) => {
  isDragging = true;
  startY = e.clientY;
  startTop = parseFloat(thumb.style.top) || 0;
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const deltaY = e.clientY - startY;
    const newTop = Math.min(
      Math.max(0, startTop + deltaY),
      scrollbar.offsetHeight - thumb.offsetHeight,
    );
    thumb.style.top = `${newTop}px`;

    const scrollRatio = newTop / (scrollbar.offsetHeight - thumb.offsetHeight);
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    window.scrollTo(0, scrollRatio * maxScroll);
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("scroll", updateThumb);
window.addEventListener("resize", updateThumb);

updateThumb();
