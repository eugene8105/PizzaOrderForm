$(document).ready(
    function () {
        // event handlers
        $("#tabs a").click(showTab);

    });

function showTab(event) {

    event.preventDefault();

    $(this).tab("show");
}

    // var selectedRadioButton = $("input[name=rank]:checked");
    // var rank = selectedRadioButton.data("rank-name");

    // // jQuery, get me every <input> where the name is "soap"
    //         // that are checked
    //         var checkedBoxes = $("input[name=soap]:checked");

    //         // Declare a variable to hold the subtotal
    //         var subtotal = 0;
    //         // Declare a variable to hold the soap names
    //         var soapNames = "";

    //         // For each checked box...
    //         checkedBoxes.each(function () {
    //             // Get the "data-price" attribute
    //             // jQuery converts this to a number -- hooray!!
    //             subtotal += $(this).data("price");
    //             // Also get the value attribute of the checkbox
    //             soapNames += $(this).val();
    //             soapNames += "<br>";
    //         });

    // // Put data on the screen
    //         // Using .html allows you to output tags to be rendered
    //         $("#info1").html(soapNames);
    //         // 2 decimal places for amounts
    //         $("#info2").text(subtotal.toFixed(2));







