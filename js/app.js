var coffees= {};
var teas= {};
var others= {};



function rowFill(){
    console.log('rowfill2');
    console.log(coffees);
    $.each(coffees, function(idx, prod){
        alert("inside the each loop");
        console.log('rowfilliside');
        console.log(prod);
        console.log(idx);
        $(".row1").append(`<img src="images/${idx}.jpg" /> `);
    })
}

function loadData() {
    $.getJSON("data/products.json", function(data){
        console.log(data);
        coffees= data.coffee;
        teas= data.tea;
        others= data.other;
        console.log(coffees);
        console.log(teas);
        console.log(others);
    })
}



    $(document).ready(function () {
        loadData();
        console.log(others);
        console.log('rowfill');
        rowFill();
    });

