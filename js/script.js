function Order(size, crust, toppings){
    this.sizeValue = size;
    this.crustValue = crust;
    this.toppingsValue = toppings;
}

Order.prototype.orderValue = function () {
    return this.sizeValue + this.crustValue + this.toppingsValue;
}

$(document).ready(function () {
    $("#submit-btn").click(function (event) {
        event.preventDefault();

        var size = $("#pick1").val();
        var crust = $("#pick2").val();
        var toppings = $("#pick3").val();
        var quantity = $("#quantities").val();
        var sizeValue = 0;
        var crustValue = 0;
        var toppingsValue = 0;
        if (size == "small") {
            sizeValue += 350;
        } else if (size == "medium") {
            sizeValue += 550;
        } else if (size == "large") {
            sizeValue += 800;
        }
        if (crust == "crispy") {
            crustValue += 150;
        } else if (crust == "stuffed") {
            crustValue += 180;
        } else if (crust == "gluten-free") {
            crustValue += 100;
        }
        if (toppings == "bacon") {
            toppingsValue += 100;
        } else if (toppings == "beef") {
            toppingsValue += 150;
        } else if (toppings == "pepperoni") {
            toppingsValue += 120;
        }

        var topOrder = new Order(sizeValue, crustValue, toppingsValue);

        $("#myorder").append('<tr><td id="size">' + size +
        '</td><td id="crust">' + crust +
        '</td><td id="toppings">' + toppings +
        '</td><td id="quantities">' + quantity +
        '</td><td id="total">' + topOrder.orderValue()*quantity +
        '</td></tr>')
    
    $("#myorder").show();
    
        
    
});


$("#location").click(function(event) {
    event.preventDefault();
    var delivery = $("#delivery").val();
    if(delivery == "yes"){
        $(".delivered").show();
        $(".delivery").hide();
    }
    else if(delivery == "no"){
        $(".nondelivered").show();
        $(".delivery").hide();
    }
});



$("#locationYes").click(function(event) {
    event.preventDefault();

    $("#myOrder").hide();
    $(".delivered").hide();
    var name = $("input#name").val();
    var phone = $("input#phone").val();
    var location = $("input#userLocation").val();
    
    function totalAmount() {
        var totalCost = (topOrder() * quantity )+ 150;
        return totalCost;
    }


    $("#forDelivery").append("Hi " + name + ", your order has been received and will be delivered to " + location + " at an extra cost of Ksh 150.");
    $("#checkout").show();

    $("#checkout").click(function(event) {
        event.preventDefault();

        $("#yourName").text(name);
        $("#yourPhone").text(phone);
        $("#deliveryLocation").text(location);
        $("#checkoutAlert").show();
        $("#locationYes").hide();
        $(this).hide();
    })
})

$("#locationNo").click(function(event) {
    event.preventDefault();

    $("#myorder").hide();
    $(".nondelivered").hide();
    var name = $("input#name1").val();
    var phone = $("input#phone1").val();

    $("#forDelivery").append("Hi " + name + ", thank you for shopping with us. You can pick your order at our store.");
    $("#checkout").show();

    $("#checkout").click(function(event) {
        event.preventDefault();

        $("#yourTotal").text();
        $("#nameOne").text(name);
        $("#phoneOne").text(phone);
        $("#checkoutOne").show();
        $("#locationNo").hide();
        $(this).hide();
    });
})
})