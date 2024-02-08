
let addtodo=document.querySelector("#addtodo")
  addtodo.addEventListener("click",()=>{
    localStorage.removeItem("login");
  window.location.replace("index.html");

  })


