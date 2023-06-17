$("#cfgnum").hide();
         $("#pdanum").hide();
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
      { //show dfa of numbers
         $("#graph2").show();
         $("#cfgnum").hide();
         $("#pdanum").hide();
      }
      else if($("#regEx").text()  === '(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*' && $("#Dfa").text() === "CFG")
      {
         window.location.replace("letters.html");
      }
      else if($("#regEx").text()  === '(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*' && $("#Dfa").text() === "CFG")
      { //show cfg of numbers
         $("#cfgnum").show();
         $("#graph2").hide();
         $("#pdanum").hide();
      }
      else if($("#regEx").text()  === '(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*' && $("#Dfa").text() === "PDA")
      {
         window.location.replace("letters.html");
      }
      else if($("#regEx").text()  === '(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*' && $("#Dfa").text() === "PDA")
      { //show pda of numbers
         $("#pdanum").show();
         $("#graph2").hide();
         $("#cfgnum").hide();
      }
      return false;
} );

//DFA 2 Chosen
var regexChosen = "(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*";

$('#inpBox').keypress(function(event) {
   var validCharacters1 = ['a', 'b',];
   var validCharacters2 = [ '0', '1'];
   var inputChar = String.fromCharCode(event.which);

      if(regexChosen  === '(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*'){
          // Check if the entered character is valid
          if (validCharacters1.indexOf(inputChar) === -1) {
            event.preventDefault(); // Prevent the character from being entered
         }     
      }
      else if(regexChosen  === '(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*'){
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
   var isValid = false;
   if (regexChosen === "(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*") {
      isValid = /^((b|aa|ab)(a|b)*(bb|aba|ab)*(aaa|bbb)(a|b)(a|b|ab)*)$/.test(inputString); } 
   else if (regexChosen ===  "(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*") {
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

//Animation: It will show the flow of the string.

const numbers = new DFA(
   ["1", "0"],
                  ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8','q9','q10','q11'],
                  "q0",
                  ["q6","q8","q10"],
                  {
                    "q0.0":"q2", "q0.1":"q1",
                    "q1.0":"q3", "q1.1":"q4",
                    "q2.0":"q4", "q2.1":"q3",
                    "q3.0":"q4", "q3.1":"q4",
                    "q4.0":"q6", "q4.1":"q5",
                    "q5.0":"q6", "q5.1":"q7",
                    "q6.0":"q7", "q6.1":"q5",
                    "q7.0":"q8", "q7.1":"q8",
                    "q8.0":"q8", "q8.1":"q8",
                    
                  } 
            )

$("#strSimulate").on( "click", async function() {
      var userInput = $("#inpBox").val(); 
      var result = numbers.execute(userInput);  //validating
      for (let index = 0; index < numbers.path.length; index++) {
      const graph2 = numbers.path[index];
      let current_state = document.getElementById(graph2)
      if (numbers.path.length-1 === index){
         if (!result){
            current_state.classList.add("invalid_state")
            await sleep(1000)
            current_state.classList.remove("invalid_state")
            await sleep(500)
         } else {
            current_state.classList.add("valid_state")
            await sleep(1000)
            current_state.classList.remove("valid_state")
            await sleep(500)
         }} else {
            current_state.classList.add("valid_state")
            await sleep(1000)
            current_state.classList.remove("valid_state")
            await sleep(500)
         }
      }
   
   function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
}); 
