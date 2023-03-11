$(document).ready(function(){
    $(".btn-all").click(function(){
        $(".Tshirt").show();
        $(".Shoes").show();
        $(".Shirts").show();
        $(".Sneakers").show();
        $(".Watchs").show();
        
    });
    $(".btn-Shoes").click(function(){
        $(".Tshirt").hide();
        $(".Shoes").show();
        $(".Shirts").hide();
        $(".Sneakers").hide();
        $(".Watchs").hide();

        
    });
    $(".btn-Tshirt").click(function(){
        $(".Tshirt").show();
        $(".Shoes").hide();
        $(".Shirts").hide();
        $(".Sneakers").hide();
        $(".Watchs").hide();
        
        
    });

    $(".btn-Shirts").click(function(){
        $(".Tshirt").hide();
        $(".Shoes").hide();
        $(".Shirts").show();
        $(".Sneakers").hide();
        $(".Watchs").hide();
        
        
        
    });

    $(".btn-Sneakers").click(function(){
        $(".Tshirt").hide();
        $(".Shoes").hide();
        $(".Shirts").hide();
        $(".Sneakers").show();
        $(".Watchs").hide();
        
        
        
    });

    $(".btn-Watchs").click(function(){
        $(".Tshirt").hide();
        $(".Shoes").hide();
        $(".Shirts").hide();
        $(".Sneakers").hide();
        $(".Watchs").show();
        
        
    });

});

$(document).ready(function(){
    $("")
});