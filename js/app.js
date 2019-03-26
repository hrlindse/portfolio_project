var products= {};



function rowFill(){
    $.each(appUsers, function(idx, user){
        $(".row1").append(``);
        })
}

function loadData() {
    $.getJSON("data/products.json", function(data){
        console.log(data);
        products= data;
        initListeners();
    })
}

    $(document).ready(function () {
        loadData();
    })

