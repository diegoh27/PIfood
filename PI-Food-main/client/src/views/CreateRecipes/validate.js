


const validate = (form) => {

    let error = {};

    const regexName = /^(?!\s)(?=.*\S).{4,60}$/;
    const onlyNumber = /^[0-9]+$/; 
    const regexStepsAndSummary = /^\s*\S.*$/;
    const regexHealth = /^(?=.*[1-9])([1-9]|[1-9][0-9]|100)$/;
    const regexPrice = /^(?:\d+(?:\.\d*)?|\.\d+)$|^\d+$/;
    const imageRegex = /^(?=.*\S)(https?):\/\/\S+\.(png|jpe?g|gif)$/;
    const regexSteps = /^(?=\S)(?=(?:\S*\s){1}\S*\s)(?=.*[a-zA-Z]){4}[\sa-zA-Z]*\S+$/;

    // if((form.name).length <= 1) error.name = "Name is Required";

    // if((form.name).length > 60) error.name = "Name Large";

    if(!regexName.test(form.name)){
        error.name = "The name must have between 4 and 60 characters...";
    }

    if(!imageRegex.test(form.image)) {
        error.image = "Required Url From Image, type data:image/jpeg is not allowed...";
    };
   
    if(!regexStepsAndSummary.test(form.summary)){  
        error.summary = "Summary is Required..."
    };

    if(!regexHealth.test(form.healthScore)){
        error.healthScore = "Health Score is required in 1 to 100...";
    }
    
    if(!regexPrice.test(form.pricePerServing)){
        error.pricePerServing = "Price per serving is requiered in number...";

    }

    if(!onlyNumber.test(form.readyInMinutes)){
        error.readyInMinutes = "Time in minutes is required in number...";
    }

    if(!regexSteps.test(form.steps)){
        error.steps = "Steps must have a minimum of 2 spaces on a line, a minimum of 4 characters (cannot end with spaces)"
    }
    console.log(form.diets.length);
    
    


    // if(form.healthScore.length === 0) error.healthScore = "Health Score is Required";

    // if(form.healthScore > 100) error.healthScore = "Health Score Max";

    // if(!onlyNumber.test(form.healthScore)) error.healthScore = "Health Score is Only Number";




    return error;

}


    //   name, ya
    //   image, ya 
    //   summary, ya
    //   stepByStep,
    //   healthScore,
    //   diets


export default validate;