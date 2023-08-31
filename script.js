document.querySelectorAll(".yt-spec-touch-feedback-shape")[9].click();
document.querySelectorAll(".ytd-menu-service-item-renderer")[8].click();
st = "";
document.querySelectorAll(".segment-text").forEach((el) => {
    st+=el.textContent;
});
copy(st);
