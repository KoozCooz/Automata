 $( ".reg1" ).on( "click", function() {
      $("#regEx").text("(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*");
   } );

$( ".reg2" ).on( "click", function() {
      $("#regEx").text("(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*");

   } );

  $(".dfa" ).on( "click", function() {
      $("#Dfa").text("DFA");
   } );

$(".pda" ).on( "click", function() {
      $("#Dfa").text("PDA");
   } );  

   $(".cfg" ).on( "click", function() {
      $("#Dfa").text("CFG");
   } );

 $("#calcExecute" ).on( "click", function() {
   var regChosen = $("#regEx").text();
   var dfaChosen = $("#Dfa").text();
   $(".regexChosen").text(regChosen);
   $(".automataChosen").text(dfaChosen);

      if($("#regEx").text()  === '(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*' && $("#Dfa").text() === "DFA")
      {
         window.location.replace("letters.html");
      }
      else if($("#regEx").text()  === '(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*' && $("#Dfa").text() === "DFA")
      {
         window.location.replace("numbers.html");
      }
      else if($("#regEx").text()  === '(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*' && $("#Dfa").text() === "CFG")
      {
         window.location.replace("letters.html");
      }
      else if($("#regEx").text()  === '(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*' && $("#Dfa").text() === "CFG")
      {
         window.location.replace("numbers.html");
      }
      else if($("#regEx").text()  === '(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*' && $("#Dfa").text() === "PDA")
      {
         window.location.replace("letters.html");
      }
      else if($("#regEx").text()  === '(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*' && $("#Dfa").text() === "PDA")
      {
         window.location.replace("numbers.html");
      }
      return false;
} );

$('#inpBox').keypress(function(event) {
   var validCharacters1 = ['a', 'b',];
   var validCharacters2 = [ '0', '1'];
   var inputChar = String.fromCharCode(event.which);

      if($("#regEx").text()  === '(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*'){
          // Check if the entered character is valid
          if (validCharacters1.indexOf(inputChar) === -1) {
            event.preventDefault(); // Prevent the character from being entered
         }     
      }
      else if($("#regEx").text()  === '(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*'){
         if (validCharacters2.indexOf(inputChar) === -1) {
            event.preventDefault(); // Prevent the character from being entered
         }
      }
      else{
         event.preventDefault();
      }
 });
//Validation: If the string is not valid or valid
 $("#calcExecuteInput").on( "click", function() {
   
   var inputString = $("#inpBox").val(); 
   var selectedDFA = $("#regEx").text();
   var isValid = false;
   if (selectedDFA === "(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*") {
      isValid = /^((b|aa|ab)(a|b)*(bb|aba|ab)*(aaa|bbb)(a|b)(a|b|ab)*)$/.test(inputString); } 
   else if (selectedDFA ===  "(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*") {
      isValid =/^((1|0)*(11|00|101|010)(1|0|11|00|101)*(11|00)(11|00|101)*(1|0)(1|0|11)*)*$/.test(inputString);
   }
   if (isValid) {
   $("#calcValidate").text("VALID");
   $("#calcValidate").css('background-color', 'green');
   }
   else {
      $("#calcValidate").text("NOT VALID");
      $("#calcValidate").css('background-color', 'red');
   }
}); 

