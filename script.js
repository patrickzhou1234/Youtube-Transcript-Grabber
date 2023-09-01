document.querySelectorAll(".yt-spec-touch-feedback-shape")[9].click();
setTimeout(() => {
    document.querySelectorAll(".ytd-menu-service-item-renderer")[8].click();
}, 1000);
var st = "";
with ({ copy }) {
    setTimeout(() => {
        document.querySelectorAll(".segment-text").forEach((el) => {
            st += el.textContent + " ";
        });
        copy(st);
    }, 3000);
}
