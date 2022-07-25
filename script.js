let userInputs = [];
  
  window.addEventListener("load", function(){
    rocketForm.addEventListener("submit", function(event) {
      userInputs.push(document.querySelector("input[name=testName]"));
      userInputs.push(document.querySelector("input[name=testDate]"));
      userInputs.push(document.querySelector("input[name=rocketType]"));
      userInputs.push(document.querySelector("input[name=boosterCount]"));
      let radios = document.getElementsByName("windRating");
      let missingRadio = true;

      for(let i =0; i < radios.length; i++){
        if(radios[i].checked){
          userInputs.push(radios[i]);
          missingRadio = false;
        }
      }
      for (let i = 0; i < userInputs.length; i++){

        if(!userInputs[i].value || missingRadio){
          alert("All fields are required.");
          event.preventDefault();
          break;
        }
      } 
    });
  });