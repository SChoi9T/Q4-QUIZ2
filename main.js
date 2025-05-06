    // get rating js event
    function rating(){
        var sub1 = parseInt(document.getElementById("sci-grade").value);
        var sub2 = parseInt(document.getElementById("math-grade").value);
        var sub3 = parseInt(document.getElementById("ss-grade").value);

        // Average Formula: (sub1 + sub2 + sub3) / 3
        let AVE = ((sub1 + sub2 + sub3) / 3).toFixed(2);
    
        // Average Grade Rating
        if (AVE <= 70 && AVE <= 74.99) {
            window.alert("Your Average is " + AVE + " - Poor");
        } 
        else if (AVE >= 75 && AVE <= 79.99) {
            window.alert("Your Average is " + AVE + " - Needs Improvement");
        } 
        else if (AVE >= 80 && AVE <= 86.99) {
            window.alert("Your Average is " + AVE + " - Satisfactory");
        } 
        else if (AVE >= 87 && AVE <= 93.99) {
            window.alert("Your Average is " + AVE + " - Above Satisfactory");
        }
        else if (AVE >= 94 && AVE <= 100) {
            window.alert("Your Average is " + AVE + " - Excellent");
        } 
        // If there are no values put
        else {
            window.alert("Please enter valid numbers for all subjects.");
        }
    }

    // refresh js event
    function refresh(){
        window.location.reload();
    }