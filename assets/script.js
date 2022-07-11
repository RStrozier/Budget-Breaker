const getIncome = document.querySelector("#income");
var expArr = new Array();

const submitBtn = document.querySelector("#submitBtn");
const addBtn = document.querySelector("#addBtn");



submitBtn.addEventListener("submit", function (e) {
    e.preventDefault();
})

const getValueInput = (myIndex) =>{
    let inputValue = document.getElementById("exp" + [myIndex]).value; 
    expArr.push(inputValue);
};

submitBtn.addEventListener("click", function() {
    expArr = [];
    localStorage.setItem("userIncome", getIncome.value);

    var exp = Array.prototype.slice.call(document.getElementsByClassName("dynExp"));
    console.log(exp);
    for(var i = 0; i < exp.length; i++)
    {
        console.log(exp[i].value);
        expArr.push(exp[i].value);

    };

    console.log(expArr);

    if (localStorage.getItem("userExpense") === null) {
        localStorage.setItem("userExpense", expArr);
    } else if (localStorage.getItem("userExpense") !== expArr) {
        localStorage.removeItem("userExpense");
        localStorage.setItem("userExpense", expArr);
    };
});



$(document).ready(function(){
    var maxField = 10;
    var addButton = $('.add_button');
    var wrapper = $('.field_wrapper');
    var fieldHTML = '<div><input class="dynExp" type="text" /><a href="javascript:void(0);" class="remove_button"><button type="button">Remove</button></a></div>';
    var x = 0;
    
    $(addButton).click(function(){
        if(x < maxField){ 
            x++;
            var expNum = 0;
            $(wrapper).append(fieldHTML);
            $(".dynExp").each(function(){
                expNum++;
                $(this).attr("id", "exp" + expNum);
                $(this).attr("placeholder", "Expense" + expNum);
            });
        };
    });
    
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });
    
});
