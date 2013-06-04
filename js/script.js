$(document).ready(function(){
  $("#withdraw_checking_button").on("submit", calculate_checking_withdrawl);
  
  $("#withdraw_savings_button").on("submit", calculate_savings_withdrawl);

  $("#deposit_checking_button").on("submit", calculate_checking_deposit);

  $("#deposit_savings_button").on("submit", calculate_savings_deposit);

  // WITHDRAWL

  function calculate_checking_withdrawl(event){
    var withdrawl = parseInt($("#withdraw_checking").val());
    var balance = parseInt($("#checking_balance").text());
    var balance = balance - withdrawl;
    var checking_balance = $("#checking_balance").text(balance);

    event.preventDefault();
  }

  function calculate_savings_withdrawl(event){
    var withdrawl = parseInt($("#withdraw_savings").val());
    var balance = parseInt($("#savings_balance").text());
    var balance = balance - withdrawl;
    var savings_balance = $("#savings_balance").text(balance);

    event.preventDefault();
  }

  // DEPOSIT

  function calculate_checking_deposit(event){
    var deposit = parseInt($("#deposit_checking").val());
    var balance = parseInt($("#checking_balance").text());
    var balance = balance + deposit;
    var checking_balance = $("#checking_balance").text(balance);

    event.preventDefault();
  }

  function calculate_savings_deposit(event){
    var deposit = parseInt($("#deposit_savings").val());
    var balance = parseInt($("#savings_balance").text());
    var balance = balance + deposit;
    var savings_balance = $("#savings_balance").text(balance);

    event.preventDefault();
  }

});