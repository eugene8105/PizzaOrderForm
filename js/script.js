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

    var checkedSize = $("input[name=size]:checked");
    var size = checkedSize.data("size");

    var checkedCrust = $("input[name=crust]:checked");
    var crust = checkedCrust.data("crust");

    if (checkedSize.length > 0) {
        // $("#size").html(size.val());
        $("#size").text(size);
    } else {
        // $("#size").html("You did not make size selection.");
        $("#size").text("You did not make size selection.");
    }

    if (checkedCrust.length > 0) {
        // $("#crust").html(crust.val());
        $("#crust").text(crust.val());
    } else {
        // $("#crust").html("You did not make size selection.");
        $("#crust").text("You did not make size selection.");
    }

    // need to write for Crust

    // for meat
    var meatChecked = $("input[name=meats]:checked");
    if (meatChecked.length > 0) {

        var meatResult = meatChecked.length;

        meatsChecked.each(function () {
            meatResult += (this).val() + "<br/>"
        });

        $("#meat").text(meatResult);
    } else {
        $("#meat").text("You did not select any meat.");
    }

    // for veggies
    var veggiesdChecked = $("input[name=veggies]:checked");
    if (veggiesdChecked.length > 0) {

        var veggiesResult = veggiesdChecked.length;

        meatsChecked.each(function () {
            veggiesResult += (this).val() + "<br/>"
        });

        $("#veggies").text(veggiesResult);
    } else {
        $("#veggies").text("You did not select any veggies.");
    }

}

function hideShow() {

    // will show block inside tag with id del_info
    $("#del_info").css("display", "block");

    // will hide block inside tag with id confirmation
    $("#confirmation").css("display", "none");
}






