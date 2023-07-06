window.addEventListener('DOMContentLoaded', function() {
    const btn = this.document.getElementById("sidebar__btn");
    const sidebar = this.document.getElementById("sidebar");
    const mainside = this.document.getElementById("mainside");
    const content = this.document.getElementById("mainside__content");
    var isClose = false;
    btn.addEventListener("click", function(){
        if (!isClose) {
            sidebar.style.animation = "closeToLeft linear 0.35s";
            setTimeout(() => {
                mainside.style.left = "0";
                mainside.style.width = "calc(100% - 184px)";
                content.style.gridTemplateColumns = "auto auto auto auto auto";
                mainside.style.padding = "40px 92px 0 92px"
                sidebar.style.display = "none";
                isClose = true;
            }, 300);
        } else {
            sidebar.style.display = "flex";
            sidebar.style.animation = "openFromLeft linear 0.3s";
            mainside.style.left = "240px";
            mainside.style.width = "calc(100% - 536px)";
            mainside.style.padding = "40px 148px 0 148px";
            content.style.gridTemplateColumns = "auto auto auto auto";
            setTimeout(() => {
                isClose = false;
            }, 300);
        }
    })
})