let switchBtn = document.querySelectorAll('.bestseller ul li');
let imgs = document.querySelectorAll('.bestseller .row .card');

// console.log(switchBtn,imgs);
switchBtn.forEach((li)=>{
    li.addEventListener("click" , removeActive);
    li.addEventListener("click" , manageImgs);

});
function removeActive() {
    switchBtn.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  }
  
  // Manage Imgs
  function manageImgs() {
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    });
  }
// scrol up
let upBtn = document.querySelector('.final i');
upBtn.onclick = _ =>{
    window.scrollTo(
        {
            top:0,
            behavior:"smooth"
        });
}

// search btn
let search = document.querySelector(".boxsearch");
let iconSearch = document.querySelector(".search");
let closeIcon = document.querySelector(".close");
iconSearch.onclick = _ =>{
    search.style.display = "flex";
    search.style.position = "fixed";
    
     
    }
    closeIcon.onclick = _ =>{
     search.style.display = "none"
    }
