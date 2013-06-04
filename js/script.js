$(document).ready(function(){
  $("#withdraw_checking_button").on("submit", calculate_checking_withdrawl);
  
  $("#withdraw_savings_button").on("submit", calculate_savings_withdrawl);

  $("#deposit_checking_button").on("submit", calculate_checking_deposit);

  $("#deposit_savings_button").on("submit", calculate_savings_deposit);

  // WITHDRAWL

  function calculate_checking_withdrawl(event) {
    var withdrawl = parseInt($("#withdraw_checking").val());
    var balance = parseInt($("#checking_balance").text());
    var balance = balance - withdrawl;
    var savings_balance = parseInt($("#savings_balance").text());

    if (balance < 0) {
      $("h3").css("background-color", "red");
      $("#overdraft").text("WARNING: You have overdrawn your account!");
      var overdraft = balance;
      var savings_balance = savings_balance + overdraft;
      balance = 0;
      if (savings_balance < 0) {
        savings_balance = savings_balance + withdrawl;
      }
      var savings_balance = $("#savings_balance").text(savings_balance);
      var checking_balance = $("#checking_balance").text(balance);
      // OVERDRAFT


    }
    var checking_balance = $("#checking_balance").text(balance);

    event.preventDefault();
  }

  function calculate_savings_withdrawl(event){
    var withdrawl = parseInt($("#withdraw_savings").val());
    var balance = parseInt($("#savings_balance").text());
    var balance = balance - withdrawl;
    //OVERDRAFT
    if (balance < 0) {
      balance = balance + withdrawl;
      $("h3").css("background-color", "red");
      $("#overdraft").text("WARNING: You have overdrawn your account!");
    }

  
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