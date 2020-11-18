$(document).ready(
    function () {
        // event handlers
        $("#tabs a").click(showTab);
        // $("input").changed(showOrder);

    });

function showTab(event) {

    event.preventDefault();

    $(this).tab("show");
    showOrder();
}

function showOrder() {
    // event.preventDefault();

    // Size (small $7, medium $9, large $12)
    // Crust (thin, pan, gluten free)
    // Meats ($1.50 each)
    // Veggies ($1.00 each)
    // tax 5.1 %
    // delivery fee $2 
    var deliveryFee = 2;
    var sizeCost = 0;
    var meatCost = 1.50;
    var veggiesCost = 1.00;

    var taxCost = 0.051;

    var totalNoTax = 0;
    var calcTaxes = 0;
    var totalCost = 0;

    // checking size of the pizza selected
    var checkedSize = $("input[name=size]:checked");
    var size = checkedSize.data("size");

    if (size === "small") {
        sizeCost = 7;
    } else if (size === "medium") {
        sizeCost = 9;
    } else if (size === "large") {
        sizeCost = 12;
    }

    if (checkedSize.length > 0) {
        // $("#size").html(size.val());
        $("#size").text(size);
    } else {
        // $("#size").html("You did not make size selection.");
        $("#size").text("You did not make size selection.");
    }

    // checking crust selected
    var checkedCrust = $("input[name=crust]:checked");
    var crust = checkedCrust.data("crust");

    if (checkedCrust.length > 0) {
        // $("#crust").html(crust.val());
        $("#crust").text(crust);
    } else {
        // $("#crust").html("You did not make size selection.");
        $("#crust").text("You did not make size selection.");
    }

    // for meat
    var meatsChecked = $("input[name=meats]:checked");
    if (meatsChecked.length > 0) {

        // will calculate meat
        meatCost = meatCost * meatsChecked.length;

        var meatResult = meatsChecked.length;

        meatsChecked.each(function () {
            meatResult += $(this).val() + "<br/>"
        });

        // if it's not going to work, chenge back to .html
        $("#meat").html(meatResult);
    } else {
        $("#meat").html("You did not select any meat.");
    }

    // for veggies
    var veggiesChecked = $("input[name=veggies]:checked");
    if (veggiesChecked.length > 0) {

        // will calculate veggies
        veggiesCost = veggiesCost * veggiesChecked.length;

        var veggiesResult = veggiesChecked.length;

        veggiesChecked.each(function () {
            veggiesResult += $(this).val() + "<br/>"
        });
        // if it's not going to work, chenge back to .html
        $("#veggies").html(veggiesResult);
    } else {
        $("#veggies").html("You did not select any veggies.");
    }

    var name = $("#name").val();
    var address = $("#address").val();
    var fullOuput = name + "<br> " + address;
    // if it's not going to work, chenge back to .html
    $("#delivery").html(fullOuput);

    // Display the subtotal, c (use a rate of 5.1 %), delivery fee ($2), and the total amount due
    // Format all amounts to two decimal places.

    // calculation
    totalNoTax = sizeCost + meatCost + veggiesCost;

    calcTaxes = taxCost * totalNoTax;

    totalCost = calcTaxes + totalNoTax + deliveryFee;

    $("#delivery").html(deliveryFee.toFixed(2));
    $("#subtotal").html(totalNoTax.toFixed(2));
    $("#taxTotal").html(calcTaxes.toFixed(2));
    $("#totalDue").html(totalCost.toFixed(2));
}



// function hideShow() {

//     // will show block inside tag with id del_info
//     $("#del_info").css("display", "block");

//     // will hide block inside tag with id confirmation
//     $("#confirmation").css("display", "none");
// }






