const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector("body");
//-------------------using forech loop ----------------------
// buttons.forEach(function (button){
//      console.log(button);
//      button.addEventListener('click', function(e){
//           console.log(e);
//           console.log(e.target);
//           if(e.target.id ==='grey'){
//                body.style.backgroundColor =e.target.id;
//           }
//           if(e.target.id ==='white'){
//                body.style.backgroundColor =e.target.id;
//           }
//           if(e.target.id ==='blue'){
//                body.style.backgroundColor =e.target.id;
//           }
//           if(e.target.id ==='yellow'){
//                body.style.backgroundColor =e.target.id;
//           }
//           if(e.target.id ==='purple'){
//                body.style.backgroundColor =e.target.id;
//           }
//});


//---------------------using switch statement-----------
buttons.forech(function (button)){
     button.addEventListerner('click', function(e)){
          console.log(e.target);
switch (e.target.id) {
          case "grey":
               body.style.backgroundColor =e.target.id;
               break;
          
          case "white":
               body.style.backgroundColor =e.target.id;
               break;
          
          case "blue":
               body.style.backgroundColor =e.target.id;
               break;
          
          case "yellow":
               body.style.backgroundColor =e.target.id;
               break;
          
          case "purple":
               body.style.backgroundColor =e.target.id;
               break;
          
          default:  console.log("no chnge");

               break;
     }

}); 
});
