// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Benjamin
// Created on: Mar 2025
// This file contains the JS functions for index.html


function myButtonClicked() {
  // input
  const streetnumber = document.getElementById("street-number").value
  const streetname = document.getElementById("street-name").value

  // output
  document.getElementById("answer").innerHTML = 
  "Your address is:- " + streetname + " , " + streetnumber + "."
}
