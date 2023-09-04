document.querySelectorAll(".yt-spec-button-shape-next")[8].click();
setTimeout(() => {
    document.querySelectorAll("ytd-menu-service-item-renderer").forEach((el) => {
        if (el.textContent=="\n  \n  Show transcript\n  \n  \n\n\n") {
             el.click();   
        }
    });
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
