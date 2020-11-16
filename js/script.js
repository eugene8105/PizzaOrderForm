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

function showOrder(event) {
    event.preventDefault();

    var checkedSize = $("input[name=size]:checked");
    var size = selectedRadioButton.data("size");

    var checkedCrust = $("input[name=crust]:checked");
    var crust = selectedRadioButton.data("crust");

    if (checkedSize.length > 0) {
        $("#size").html(checkedSize.val());
    } else {
        $("#size").html("You did not make size selection.");
    }

    // need to write for Crust

    // for meat
    var meatChecked = $("input[name=meats]:checked");
    if (meatChecked.length > 0) {

        var meatResult = meatChecked.length;

        meatsChecked.each(function () {
            meatResult += (this).val() + "<br/>"
        });

        $("#meat").html(meatResult.val());
    } else {
        $("#meat").html("You did not select any meat.");
    }

    // for veggies
    var veggiesdChecked = $("input[name=veggies]:checked");
    if (veggiesdChecked.length > 0) {

        var veggiesResult = veggiesdChecked.length;

        meatsChecked.each(function () {
            veggiesResult += (this).val() + "<br/>"
        });

        $("#veggies").html(veggiesResult.val());
    } else {
        $("#veggies").html("You did not select any veggies.");
    }

}

function hideShow() {

    // will show block inside tag with id del_info
    $("#del_info").css("display", "block");

    // will hide block inside tag with id confirmation
    $("#confirmation").css("display", "none");
}






