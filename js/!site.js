var td_order = {

    getCurrentOrderDetails: function () {

        $.ajax({
            type: "POST",
            url: "/Customer/GetSiteUserCustomerDetails",
            //data: { id: id },
            dataType: "json",
            success: function (data) {
                if (data.currentOrderID !== null) {
                    $("#CurrentOrderLink").attr("href", data.currentOrderLink);
                    $("#CurrentOrderItemCount").html(data.currentOrderItemCount);
                    $("#CurrentOrderRef").html(data.currentOrderRef);
                    $("#CurrentOrderDetails").fadeIn("fast");
                }
                // SiteCustomerCount
                $("#CurrentCustomerName").html(data.customerName);
            },
            error: function () {
                td_core.serverError("Something went wrong loading the Customer Details. Please ensure you have been allocated a Customer. Try refreshing hte page and if the error persists, contact us.");
            }
        });

    }
}

var td_core = {
    navigateToUrl: function (url) {
        document.location = url;
    },

    focusElement: function (id) {
        const element = document.getElementById(id);
        element.focus();
    },

    scrollToElement: function (element, timeInMS, offSetTop) {

        if (!timeInMS) {
            timeInMS = 1000;
        }

        if (!offSetTop) {
            offSetTop = 0;
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $(element).offset().top - offSetTop
        }, timeInMS);
    },

    serverError: function (message) {
        if (!message) {
            message = "Something went wrong. Please contact support if the problem persists.";
        }
        alert(message);
    }
};