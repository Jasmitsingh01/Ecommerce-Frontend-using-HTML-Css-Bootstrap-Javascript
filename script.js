// Gobal element

const dropdown=document.querySelectorAll('.dropdown');


const FooterText = [
  {
    heading: "Women",
    LinksText: ["Dresses", "Pants", "Skirt"],
    Urls: ["women.html", "women.html", "women.html"],
  },
  {
    heading: "Men",
    LinksText: ["Shirts", "Pants", "Hoodies"],
    Urls: ["men.html", "men.html", "men.html"],
  },
  {
    heading: "kids",
    LinksText: [" ", " ", ""],
    Urls: [],
  },
  {
    heading: "Links",
    LinksText: ["Home", "Login", "Contact"],
    Urls: ["/", "login.html", "contact.html"],
  },
];

//  Genral functions   for cerating html elemrnt.
function creatingDivs() {
  return document.createElement("div");
}
function creatingButtons() {
  return document.createElement("button");
}

function creatingAnchortaG() {
  return document.createElement("a");
}
function creatingLiTag() {
  return document.createElement("li");
}
function creatingUlTag() {
  return document.createElement("ul");
}

function creatingNavTag() {
  return document.createElement("nav");
}

function creatingh5Tag() {
  return document.createElement("h5");
}

/*
------------------------------------------------------------------------------------------------------- Creating The Header Section-------------------------------------------------------------------------------------------------------------------
*/
const Header = document.createElement("header");

const topNav_containerFluid = creatingDivs(); // Top Nav Bar.

topNav_containerFluid.className = "container-fluid bg-dark"; // Adding basis classes to it.

const row = creatingDivs(); // In top nav divide into two parts Logos area and Search bar.

row.className = "row";

const colFirst = creatingDivs(); // creating first column for logo.

colFirst.className =
  "col col-lg-3 col-12 p-2 d-flex justify-content-lg-start justify-content-between";

const h1 = document.createElement("h1"); // creating the actuall logo.

h1.className = "fs-1 text-light";

h1.innerText = "Ecommerce"; // Give text to Logo || you should customize it.

h1.style.cursor = "pointer"; // cusor on hover

const toogleButton = creatingButtons(); // creating a menu button which show only in 'md' to 'sm' devices.

toogleButton.className = "btn btn-outline-secondary text-light d-lg-none  ";

toogleButton.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Adding fontawsome icon to button.

const colSecond = creatingDivs(); // Here come second column which contaion search bar section.

colSecond.className =
  "col col-lg-9  col-12  p-2 d-lg-flex d-none flex-lg-row flex-column container-fluid	align-items-center";

const form = document.createElement("form"); // creating a search bar

form.className = "d-flex flex-grow-1";

const input = document.createElement("input"); // search input

input.className = "outline-primary border-0 rounded-bottom-left w-75 px-1";

input.placeholder = "Search";

const buttonForm = creatingButtons(); // search button

buttonForm.type = "submit";

buttonForm.className = "btn rounded-0 w-25 p-md-2 p-sm-3 ps-0 button rounded-top-right ";

buttonForm.innerText = "Search";

const loginWapper = creatingDivs(); // login warpper (div to become a block level elemnt)

const loginButton = creatingButtons(); // login button use to move the user to login page.

loginButton.innerText = "Login";

loginButton.className = "btn rounded button ms-lg-5 my-lg-0 my-4";

const cartButton = document.createElement("a"); // cart link to move to cart page

cartButton.href = "cart.html";

cartButton.className = " rounded mx-lg-5 my-lg-0 my-4 color-y fs-2 ";

cartButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';

/*  
---------------------------------------------------------------------------------------------------------------------Align Tags || Managing dom tree -------------------------------------------------------------------------------------------------------
*/
/* 

                                                                                                                                Header
                                                                                                                                  |
                                                                                                                                  |
                                                                                                                                  |
                                                                                                                                topnav
                                                                                                                                  |
                                                                                                                                  |
                                                                                                                                  |
                                                                                                                                 row
                                                                                                                                  |
                                                                                                                                  |
                                                                                                    ----------------------------------------------------------------
                                                                                                    |                                                               |
                                                                                                    |                                                               |
                                                                                                    |                                                               | 
                                                                                              ----colFirst----                                              ----colSecond---- 
                                                                                              |              |                                              |         |       |
                                                                                              |              |                                              |         |       |   
                                                                                              |              |                                              |         |       |
                                                                                              |              |                                  --form(search)--      login     cart
                                                                                            Logo(h1)        ToggleButton                        |               |      +wrapper
                                                                                                                                                |               |
                                                                                                                                                |               |
                                                                                                                                              input            button

*/
Header.appendChild(topNav_containerFluid); // Header child -> topnav

topNav_containerFluid.appendChild(row); // topnav -> row

row.appendChild(colFirst); // row -> colFirst

row.appendChild(colSecond); // row -> colSecond

colFirst.appendChild(h1); //  colFirst -> h1

colFirst.appendChild(toogleButton); //  colFirst -> toogleButtons (justify-content:space-between)

colSecond.append(form); // col-seccond -> form

form.appendChild(input); // from->input

form.appendChild(buttonForm); // form ->button

loginWapper.appendChild(loginButton); // loginWapper-> loginButton

colSecond.appendChild(loginWapper); // colSecond -> LoginWapper

colSecond.appendChild(cartButton); // colSecond -> cartButton

const Body = document.querySelector("body"); // SELECT BODY ELEMENT OF HTML AND INSERT BEFORE ITS FIRST ELEMENT

Body.insertBefore(Header, Body.children[0]);

toogleButton.onclick = toggleMenu;

/* 

                                                                                                                                Footer
                                                                                                                                  |
                                                                                                                                  |
                                                                                                                ----------------- | ----------------- 
                                                                                                               row                                  p
                                                                                                                 |
                                                                                                                 |
                                                                                                                 |
                                                                                                        nav       nav        nav                 nav
                                                                                                        |          |         |                    |
                                                                                                     -- |--      --|--     --|-----          ---- |--
                                                                                                    h5     ul    h5  ul     h5    ul         h5     ul
                                                                                                            |         |           |
                                                                                                        li  li li    li li li     li li li       li li li 
                                                                                                         |   |  |     |  |  |      |  |  |        |  |  |
                                                                                                         |   |  |     |  |  |      |  |  |        |  |  |
                                                                                                         a   a  a     a  a  a      a  a  a        a  a  a

                                                                                                        

*/

const Footer = document.createElement("footer"); // Footer

Footer.className = " bg-dark px-md-5 px-2 py-3 text-center ";

const row1 = creatingDivs(); // creating row
row1.className =
  "d-flex justify-content-center align-item-center mb-3 flex-lg-row flex-column border-bottom-light ";
for (let index = 0; index < FooterText.length; index++) {
  // nav section  with heading and different urls
  const nav = creatingNavTag();

  nav.className = " m-auto  w-100 ";

  const h5 = creatingh5Tag(); // Heading of nav

  h5.innerText = FooterText[index].heading;

  h5.className = "text-light fs-4";

  const ul = creatingUlTag();

  for (let i = 0; i < FooterText[index].LinksText.length; i++) {
    // Ul of nav section

    const li = creatingLiTag(); // creating li tag

    const a = creatingAnchortaG(); // creating a anchor tag

    a.href = FooterText[index].Urls[i];

    a.innerText = FooterText[index].LinksText[i];

    a.className = "text-light fs-6";

    li.appendChild(a);

    ul.appendChild(li);
  }
  nav.appendChild(h5);

  nav.appendChild(ul);

  row1.appendChild(nav);
}

const p = document.createElement("p");

p.className = "text-light text-left";

p.innerText = "Copyright©Ecommerce 2022-23";

Footer.appendChild(row1);

Footer.appendChild(p);

Body.appendChild(Footer); // Adding The footer of Body












// toogle Menu
function toggleMenu() {
  
  if (colSecond.classList.contains("d-block")) {
  
    colSecond.classList.replace("d-block", "d-none");
  
  } else {
  
    colSecond.classList.replace("d-none", "d-block");
  
  }
}



// move cards

const widthCard = document.querySelector(".carousel-item");

const  windowCard= document.querySelector(".carousel-inner");

function moveRight() {

  windowCard.scrollLeft = windowCard.scrollLeft + widthCard.clientWidth;

}

function moveLeft() {

  windowCard.scrollLeft = windowCard.scrollLeft - widthCard.clientWidth;

}











// LOGIN 

loginButton.onclick = () => {
  window.location.pathname = "/login.html";
};



// Adding event listerner according To screen sizes
const targetscreen= window.matchMedia('(max-width:992px)');
if (targetscreen.matches) {
  dropdown.forEach((item)=>{
    item.addEventListener('click',()=>{
      
    if(item.children[1].style.display==='block'){
      item.children[1].style.display='none';

    }
    else{
      item.children[1].style.display='block';
    }
    })
  
  })

} else {
  dropdown.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
      
    item.children[1].style.display='block';
    })
  
  })
  dropdown.forEach((item)=>{
    item.addEventListener('mouseout',()=>{
      
      item.children[1].style.display='none';
    })
  
  })
}


// Form validation


const Forms=document.querySelectorAll('.needs-validation');

Forms.forEach((items)=>{
items.addEventListener('submit',(e)=>{
  e.preventDefault();
  const Email=e.target.Email.value;
  const Pass=e.target.password.value;
  const pattern=/^[a-zA-Z0-9]+$/;   // Regex Pattern used;

  if(Email.includes("@")&& Email.includes(".com") && Pass.length >=6 && Pass.length<=20 && pattern.test(Pass) && Email==='admin@admin.com' && Pass==='123456'){
    e.target.Email.classList='form-control border-success border-3';
    e.target.password.classList='form-control border-success border-3';
      alert('Login successfuly');

  }
  
  else{
    e.target.Email.classList='form-control border-danger border-3';
    e.target.password.classList='form-control border-danger border-3';
    alert('Incorrect Password or Email');


  }
 
 

})
})