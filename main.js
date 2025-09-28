const chart = document.querySelector("#chart").getContext("2d");


new Chart(chart,{
    type:'line' ,
    data:{
        labels : ['Jan', 'Feb' ,'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets : [
            {
            label : "BTC",
            data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
            borderColor : "red",
            borderWidth: 2
            },
        {
            label : "ETH" ,
            data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844] ,
            borderColor : "blue",
            borderWidth : 2

        }
    ]
    },
    options : {
        responsive : true
    }
})



const showMenu = document.querySelector("#menu")
const closeMenu = document.querySelector("#close")
const sidebar = document.querySelector("aside")

showMenu.addEventListener("click",()=>{
  sidebar.style.display = "block"
})

closeMenu.addEventListener("click",()=>{
  sidebar.style.display = "none"
})



const dark = document.querySelector("#dark")
const light = document.querySelector("#light")

// Dark Mode
dark.addEventListener("click", () => {
document.body.classList.remove("light")
document.body.classList.add("dark")
light.style.display = "block"
dark.style.display = "none"
localStorage.setItem("mode", "dark")
})

// Light Mode
light.addEventListener("click", () => {
document.body.classList.remove("dark")
document.body.classList.add("light")
light.style.display = "none"
dark.style.display = "block"
localStorage.setItem("mode", "light")
})

// لما الصفحة تفتح، اقرأ من localStorage
window.addEventListener("load", () => {
const savedMode = localStorage.getItem("mode") 
document.body.classList.add(savedMode)
  if (savedMode === "dark") {
    light.style.display = "block"
    dark.style.display = "none"
  } else {
    light.style.display = "none"
    dark.style.display = "block"
  }
})
