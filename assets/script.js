const getIncome = document.querySelector("#income");
// const getExp1 = document.querySelector("#exp1");
// const getExp2 = document.querySelector("#exp2");
// const getExp3 = document.querySelector("#exp3");
// const getExp4 = document.querySelector("#exp4");
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
    localStorage.setItem("userIncome", getIncome.value);
    // localStorage.setItem("userExp1", getExp1.value);
    // localStorage.setItem("userExp2", getExp2.value);
    // localStorage.setItem("userExp3", getExp3.value);
    // localStorage.setItem("userExp4", getExp4.value);




    var exp = Array.prototype.slice.call(document.getElementsByClassName("dynExp"));
    console.log(exp);
    for(var i = 0; i < exp.length; i++)
    {
        console.log(exp[i].value);
        expArr.push(exp[i].value);

    };

    console.log(expArr);

    localStorage.setItem("userExpense", expArr);
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
        }
    });
    
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });
    
});
