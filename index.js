const plus =  document.getElementById("fas-plusbtn");
plus.addEventListener("click",function(){

   //For counting the number of Iphone.
    const iphnvalue = document.getElementById("iphonevalue").value;
    const iphnvaluenum = parseFloat(iphnvalue);
    const finalvalue = iphnvaluenum + 1;
    document.getElementById("iphonevalue").value=finalvalue;

    //For counting the price of Iphone.
    var finalprice = 1219 ;
    const Iphoneprice = document.getElementById("Iphoneprice").innerText;
    const Iphonepricenum= parseFloat(Iphoneprice);
     finalprice = finalprice + Iphonepricenum;
    document.getElementById("Iphoneprice").innerText = finalprice;

    // For counting the subtotal for Iphone.
    var total_subtotal = 1219;
    const subtotal_value = document.getElementById("subtotal-value").innerText;
    const subtotal_valuenum = parseFloat(subtotal_value);
     total_subtotal = total_subtotal + subtotal_valuenum;
    document.getElementById("subtotal-value").innerText= total_subtotal;
    
    //For calculating the total value for Iphone
    var totalof_iphone = 1219;
    const totalvalue = document.getElementById("totalvalue").innerText;
    const totalvaluenumber = parseFloat(totalvalue);
    totalof_iphone = totalof_iphone + totalvaluenumber;
    document.getElementById("totalvalue").innerText=totalof_iphone;
})
// Iphone minus button all works
const minus = document.getElementById("fas-minusbtn");
minus.addEventListener("click",function(){
    
   //For counting the number of Iphone.
    const iphnvalue = document.getElementById("iphonevalue").value;
        const iphnvaluenum = parseFloat(iphnvalue);
        const finalvalue = iphnvaluenum - 1;
        document.getElementById("iphonevalue").value=finalvalue;
    //For counting the price of Iphone.
        var finalprice = 1219 ;
        const Iphoneprice = document.getElementById("Iphoneprice").innerText;
        const Iphonepricenum= parseFloat(Iphoneprice);
         finalprice =  Iphonepricenum - finalprice;
        document.getElementById("Iphoneprice").innerText = finalprice;
    // for counting the subtotalvalue of iphone
    var total_subtotal = 1219;
    const subtotal_value = document.getElementById("subtotal-value").innerText;
    const subtotal_valuenum = parseFloat(subtotal_value);
     total_subtotal =   subtotal_valuenum - total_subtotal;
    document.getElementById("subtotal-value").innerText= total_subtotal;
    
    // For calculating total value 
    var totalof_iphone = 1219;
    const totalvalue = document.getElementById("totalvalue").innerText;
    const totalvaluenumber = parseFloat(totalvalue);
    totalof_iphone = totalvaluenumber - totalof_iphone;
    document.getElementById("totalvalue").innerText=totalof_iphone;
   })









   // Iphone Casing-plus button all works

    const casing_plus = document.getElementById("casing-plus");
    casing_plus.addEventListener("click",function(){

    // For counting Iphone-Casing number.
        const iphnvalue = document.getElementById("iphone-casingvalue").value;
        const iphnvaluenum = parseFloat(iphnvalue);
        const finalvalue = iphnvaluenum + 1;
        document.getElementById("iphone-casingvalue").value=finalvalue;
    // For counting Iphone-Casing price.
        var finalprice = 59 ;
        const Iphoneprice = document.getElementById("Iphone-casingprice").innerText;
        const Iphonepricenum= parseFloat(Iphoneprice);
         finalprice = finalprice + Iphonepricenum;
        document.getElementById("Iphone-casingprice").innerText = finalprice;

        // FOr counting Subtotal value 
        var total_subtotal = 59;
        const subtotal_value = document.getElementById("subtotal-value").innerText;
        const subtotal_valuenum = parseFloat(subtotal_value);
         total_subtotal = total_subtotal + subtotal_valuenum;
        document.getElementById("subtotal-value").innerText= total_subtotal;
    
      // For calculating totalvue
      var totalof_iphone = 59;
      const totalvalue = document.getElementById("totalvalue").innerText;
      const totalvaluenumber = parseFloat(totalvalue);
      totalof_iphone = totalof_iphone + totalvaluenumber;
      document.getElementById("totalvalue").innerText=totalof_iphone;
    })

    // Iphone Casing-minus button all works

    const casing_minus = document.getElementById("casing-minus");
    casing_minus.addEventListener("click",function(){
   //For counting the number of Iphone-casing
        const iphnvalue = document.getElementById("iphone-casingvalue").value;
        const iphnvaluenum = parseFloat(iphnvalue);
        const finalvalue = iphnvaluenum - 1;
        document.getElementById("iphone-casingvalue").value=finalvalue;  

    // For counting Iphone-Casing price.
        var finalprice = 59 ;
        const Iphoneprice = document.getElementById("Iphone-casingprice").innerText;
        const Iphonepricenum= parseFloat(Iphoneprice);
         finalprice =  Iphonepricenum - finalprice;
        document.getElementById("Iphone-casingprice").innerText = finalprice;
    
    // For counting Iphone-casing subtotal
    var total_subtotal = 59;
    const subtotal_value = document.getElementById("subtotal-value").innerText;
    const subtotal_valuenum = parseFloat(subtotal_value);
     total_subtotal =   subtotal_valuenum - total_subtotal;
    document.getElementById("subtotal-value").innerText= total_subtotal;
    
    // For calculating totalvalue
    var totalof_iphone = 59;
    const totalvalue = document.getElementById("totalvalue").innerText;
    const totalvaluenumber = parseFloat(totalvalue);
    totalof_iphone = totalvaluenumber - totalof_iphone;
    document.getElementById("totalvalue").innerText=totalof_iphone;
    })