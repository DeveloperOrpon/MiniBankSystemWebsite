const login=document.getElementById("login");
const accountArea =document.getElementById("account-area");
const loginarea= document.getElementById("login-area");
const transion=document.getElementById("transion");
login.addEventListener("click", function(){ 
    loginarea.style.display="none";
    accountArea.style.display="block";
    accountArea.style.marginTop="100px"
    transion.style.display="block";
});
document.getElementById("logout").addEventListener("click",function(){
    loginarea.style.display="block";
    accountArea.style.display="none";
    transion.style.display="none";
})
const maindep=document.getElementById("Deposit");
const mainbalance=document.getElementById("Balance");
var Balance=1200;
var Deposit=0;
document.getElementById("Deposit-btn").addEventListener("click",function(){
    const amount=parseInt(document.getElementById("Deposit-amount").value);
    Deposit=Deposit+amount;
    Balance=Balance+amount;
    maindep.innerHTML="$"+Deposit;
    mainbalance.innerHTML="$"+Balance;

})
let Withdraw=0;
const mainwid=document.getElementById("Withdraw");
document.getElementById("Withdraw-btn").addEventListener("click",function(){
    const amount=parseInt(document.getElementById("Withdraw-amount").value);
    Withdraw=Withdraw+amount;
    Balance=Balance-amount;
    mainwid.innerHTML="$"+Withdraw;
    mainbalance.innerHTML="$"+Balance;

})