const dropEl = document.querySelector(".dropdown");
const containerEl = document.querySelector(".landing");


dropEl.addEventListener("click",()=>{
    console.log("clicked")
    document.querySelector(".drop-content").style.display ="block";
})
containerEl.addEventListener("click", () => {
        document.querySelector(".drop-content").style.display = "none";
});