


$(document).ready(function() {
  $("#imagetoggler").click(function(){
  $("img").toggle();
  });

  //for(let first = 0; first<O first++){
  //letterArray.push(new letter(random(A,O)))

let letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];//array of letters for matching exam
//  const shuffleArray = letterArray => {

    for (let i = letterArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      const temp = letterArray [i];
      letterArray [i] = letterArray [j];
      letterArray [j] = temp;
        }

          $("#alpha").text(letterArray[0])
//  }

$("#ans").click(function(){
  $("#").show();
});

  $("#p1").click(function(){
  	$("#p2").toggle();
  	$("#p3").toggle();
  	});

});










/*
This is for testing purposes

here is code for teletype
index.html:   atom://teletype/portal/3e18ff4d-5823-4484-be1f-427fbb6bfe19
script.js:    atom://teletype/portal/3e18ff4d-5823-4484-be1f-427fbb6bfe19
stlye.CSS:    atom://teletype/portal/3e18ff4d-5823-4484-be1f-427fbb6bfe19



code for interactive text input:
<textarea id="w3review" name="w3review" rows="4" cols="50">
  At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
  </textarea>


*/
