document.querySelectorAll(".yt-spec-touch-feedback-shape")[9].click();
setTimeout(() => {
    document.querySelectorAll(".ytd-menu-service-item-renderer")[8].click();
}, 500);
var st="";
setTimeout(() => {
document.querySelectorAll(".segment-text").forEach((el) => {
    st+=el.textContent;
});
copy(st);
}, 1000);
