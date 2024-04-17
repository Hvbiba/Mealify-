/*Define the function for Dark Mode
function event_style_1() {
    var y = document.querySelector(".home");
    y.style.backgroundColor = "#37373f";
    var x = document.querySelector(".topbar");
    x.style.backgroundColor = "black";
    var h = document.querySelector("#head");
    h.style.color = "white";
    var p = document.querySelector("#words");
    p.style.color = "white";
    var logo = document.querySelector("#logo");
    logo.style.color = "white";
    var listItems = document.querySelectorAll(".nav-link");
    listItems.forEach(function(item) {
        item.style.color = "white";
    var w = document.querySelector(".link");
    w.style.color = "#FFC300";
    var btn1 = document.querySelector(".btnbook");
    btn1.style.backgroundColor = "#FFC300";
    
    }); 
}
let darkMood = document.querySelector("#dark");
darkMood.addEventListener("click", event_style_1);




let lightMode= document.querySelector("#light");
// Define the function
function myFunction() {
    console.log("Hello World");
    darkMood.removeEventListener("click", event_style_1);
}
// Add event listener
lightMode.addEventListener("click", myFunction);
// Remove event listener 


const toggle = document.getElementById('toggle');
const body = document.body; // Use document.body to target the body element

toggle.addEventListener('click', function(){
    body.classList.toggle('red-background'); // Toggle the class for changing background color
    console.log("done");
});
console.log("done");

 
*/
const toggle = document.getElementById('mode');
let homeGround = document.querySelector(".home");
let navbar = document.querySelector(".topbar");
let text1 = document.querySelector("#head");
let text2 = document.querySelector("#words");
let text3 = document.querySelector("#logo");
let Btn = document.querySelector(".btnbook");
let icon = document.getElementById('closeicon');
let youtubeicon=document.querySelector('#link i');
let Youtube=  document.getElementById('youtube');

toggle.addEventListener('click', function() {

    mode.classList.toggle('darkicon');
    homeGround.classList.toggle('background');
    navbar.classList.toggle('navBar');
    text1.classList.toggle('whitecolor');
    text2.classList.toggle('whitecolor');
    text3.classList.toggle('whitecolor');
    Btn.classList.toggle('darkbtn');
    icon.classList.toggle('darkicon'); 
    youtubeicon.classList.toggle('darkicon');
    Youtube.classList.toggle('videolink');

    const links = document.querySelectorAll('.topbar .navbar-nav a');
    links.forEach(link => {
        //link.addEventListener('click', function() {
            link.classList.toggle('active');
        //});
    });

}); 

    


