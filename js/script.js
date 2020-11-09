$(document).ready(
    function () {
        // event handlers
        $("#tabs a").click(showTab);

    });

    function showTab(event) {
        event.preventDefault();
        $(this).tab("show");
    }

    