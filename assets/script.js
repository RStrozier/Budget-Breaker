const getIncome = document.querySelector("#income");
const getExp1 = document.querySelector("#exp1");
const getExp2 = document.querySelector("#exp2");
const getExp3 = document.querySelector("#exp3");
const getExp4 = document.querySelector("#exp4");

const submitBtn = document.querySelector("#submitBtn");
const addBtn = document.querySelector("#addBtn");



submitBtn.addEventListener("submit", function (e) {
    e.preventDefault();
})

submitBtn.addEventListener("click", function() {
    localStorage.setItem("userIncome", getIncome.value);
    localStorage.setItem("userExp1", getExp1.value);
    localStorage.setItem("userExp2", getExp2.value);
    localStorage.setItem("userExp3", getExp3.value);
    localStorage.setItem("userExp4", getExp4.value);
});
$(document).ready(function(){
    var maxField = 10;
    var addButton = $('.add_button');
    var wrapper = $('.field_wrapper');
    var fieldHTML = '<div><input class="dynExp" type="text" /><a href="javascript:void(0);" class="remove_button"><img src="remove-icon.png"/></a></div>';
    var x = 1;
    
    $(addButton).click(function(){
        if(x < maxField){ 
            x++;
            var expNum = 4;
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
