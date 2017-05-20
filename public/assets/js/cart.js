$(".shoppingbasket").on("click", function(){
    console.log("SHOOPPPPINNGG")
    var obj = displayCart();
    var newObj = {
        obj
    }
    console.log(obj)
    $.post("/checkout/items", newObj).done(function(data){
        console.log(data);
    })
})

