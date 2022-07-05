const getIncome = document.querySelector("#income");
const getExp1 = document.querySelector("#exp1");
const getExp2 = document.querySelector("#exp2");
const getExp3 = document.querySelector("#exp3");
const getExp4 = document.querySelector("#exp4");

const submitBtn = document.querySelector("#submitBtn")

submitBtn.addEventListener("submit", function (e) {
    e.preventDefault();
})

submitBtn.addEventListener("click", function() {
    localStorage.setItem("userIncome", getIncome.value);
    localStorage.setItem("userExp1", getExp1.value);
    localStorage.setItem("userExp2", getExp2.value);
    localStorage.setItem("userExp3", getExp3.value);
    localStorage.setItem("userExp4", getExp4.value);
    if (localStorage.key = false) {
        localStorage.key = 0;
    }
});