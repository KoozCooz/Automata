$("#cfglet").hide();
$("#pdalet").hide();
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
         $("#graph1").show();
         $("#cfglet").hide();
         $("#pdalet").hide();
      }
      else if($("#regEx").text()  === '(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*' && $("#Dfa").text() === "DFA")
      {
         window.location.replace("numbers.html");
      }
      else if($("#regEx").text()  === '(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*' && $("#Dfa").text() === "CFG")
      {
         $("#cfglet").show();
         $("#graph1").hide();
         $("#pdalet").hide();
         
      }
      else if($("#regEx").text()  === '(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*' && $("#Dfa").text() === "CFG")
      {
         window.location.replace("numbers.html");
      }
      else if($("#regEx").text()  === '(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*' && $("#Dfa").text() === "PDA")
      {
         $("#pdalet").show();
         $("#graph1").hide();
         $("#cfglet").hide();
      }
      else if($("#regEx").text()  === '(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*' && $("#Dfa").text() === "PDA")
      {
         window.location.replace("numbers.html");
      }
      return false;
} );

   var regexChosen = "(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*";
   
   $('#inpBox').keypress(function(event) {
      var validCharacters1 = ['a', 'b',];
      var validCharacters2 = [ '0', '1'];
      var inputChar = String.fromCharCode(event.which);
   
         if(regexChosen  == '(b+aa+ab) (a+b)* (bb + aba + ab)* (aaa+bbb) (a+b) (a+b+ab)*'){
             // Check if the entered character is valid
             if (validCharacters1.indexOf(inputChar) === -1) {
               event.preventDefault(); // Prevent the character from being entered
            }     
         }
         else if(regexChosen  == '(1+0)* (11 + 00 + 101 + 010) (1+0+11+00+101)* (11+00) (11+00+101)* (1+0) (1+0+11)*'){
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
   
   const letters = new DFA(
      ["a", "b"],
      ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8','q9','q10','q11'],
      "q0",
      ["q6","q8","q11"],
      {
         "q0.a":"q1", "q0.b":"q2",
         "q1.a":"q2", "q1.b":"q2",
         "q2.a":"q3", "q2.b":"q7",
         "q3.a":"q4", "q3.b":"q7",
         "q4.a":"q5", "q4.b":"q7",
         "q5.a":"q8", "q5.b":"q6",
         "q6.a":"q8", "q6.b":"q11",
         "q7.a":"q3", "q7.b":"q9",
         "q8.a":"q8", "q8.b":"q6",
         "q9.a":"q3", "q9.b":"q10",
         "q10.a":"q8", "q10.b":"q11",
         "q11.a":"q8", "q11.b":"q11",
      } 
   )
   
   $("#strSimulate").on( "click", async function() {
         
         var userInput = $("#inpBox").val(); 
         var result = letters.execute(userInput);  //validating
         for (let index = 0; index < letters.path.length; index++) {
         const graph1 = letters.path[index];
         let current_state = document.getElementById(graph1)
         if (letters.path.length-1 === index){
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

