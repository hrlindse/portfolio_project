
//populates option drop downs
function dropDown(option){
    //html snippet
    var html = ``;
    $.each( option, function (index, item) {
        html += `<select class =" ${index}">`;
        //parse through lists
        $.each( item, function(index2, opt) {
            //parse through options
            $.each( opt, function(index3, choose) {
                html +=`<option> ${choose} </option>`;
            })
        })
        html += `</select>`;
        html += `<br />`;
    })
    $(".options").html(html);
}

function expand(type) {
    if (type == "coffee") {
        $(".expand").html(
            `<div class="square"><h2>Coffee</h2></div>
    <div class="square"><h2>Latte</h2></div>
    <div class="square"><h2>Mocha</h2></div>
    <div class="square"><h2>Cappuccino</h2></div> `);
    }
    if (type == "tea") {
        $(".expand").html(
            `<div class="square"><h2>Oolong</h2></div>
    <div class="square"><h2>Green Tea</h2></div>
    <div class="square"><h2>White Tea</h2></div>
    <div class="square"><h2>Earl Grey</h2></div> 
    <div class="square"><h2>Black Tea</h2></div> 
    <div class="square"><h2>Herbal Tea</h2></div> 
`);
    }
    if (type == "other") {
        $(".expand").html(
            `<div class="square"><h2>Hot Chocolate</h2></div>
    <div class="square"><h2>Bottled Water</h2></div> `);
    }

}


function productFill(fileName) {

    var file= "data/";
    file+= fileName;
    file += ".json"

    // get json file, get name from variable passed through click
    $.getJSON(file, function (products) {
        var prod = products;
        //fill product info
        $.each(prod, function (index, prods) {
            $("#name").html(`${prods.name}`);
            $(".price").html(`${prods.price}`);
            dropDown(prods.options);
            $(".description").html(prods.description);
            $(".ingredients").html(`${prods.ingredients}`);
            var image= fileName+".jpg";
            $(".img").html(`<img src="images/${image}"/>`)

        })
    })
}



    $(document).ready(function () {
        //add header and footer to page
        $.get("header.html", function (data) {
            $(".header").append(data);
        });
        $.get("footer.html", function (data) {
            $("footer").html(data);
        });
        productFill('coffee');
        })

