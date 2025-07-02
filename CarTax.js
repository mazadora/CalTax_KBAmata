      function onLoad() {
        document.getElementById("5y").innerHTML = "= 0.00 บาท";
        document.getElementById("6y").innerHTML = "= 0.00 บาท";
        document.getElementById("7y").innerHTML = "= 0.00 บาท";
        document.getElementById("8y").innerHTML = "= 0.00 บาท";
        document.getElementById("9y").innerHTML = "= 0.00 บาท";
        document.getElementById("10y").innerHTML = "= 0.00 บาท";
        document.getElementById("van-tax").innerHTML = "= 0.00 บาท";
        document.getElementById("truck-tax").innerHTML = "= 0.00 บาท";
        document.getElementById("truck-white").innerHTML = "= 0.00 บาท";
        document.getElementById("truck-yellow").innerHTML = "= 0.00 บาท";
      }

      function getCarTax() {
         let cc = parseInt(document.getElementsByName('cc')[0].value) || 0;

        let y5 = calCarTaxByCC(cc, 5);
        let y6 = calCarTaxByCC(cc, 6);
        let y7 = calCarTaxByCC(cc, 7);
        let y8 = calCarTaxByCC(cc, 8);
        let y9 = calCarTaxByCC(cc, 9);
        let y10 = calCarTaxByCC(cc, 10);

        document.getElementById("5y").innerHTML = `= ${y5} บาท`;
        document.getElementById("6y").innerHTML = `= ${y6} บาท`;
        document.getElementById("7y").innerHTML = `= ${y7} บาท`;
        document.getElementById("8y").innerHTML = `= ${y8} บาท`;
        document.getElementById("9y").innerHTML = `= ${y9} บาท`;
        document.getElementById("10y").innerHTML = `= ${y10} บาท`;
      }

      function getVanTax() {
        let kg = parseInt(document.getElementsByName('vanKG')[0].value) || 0;
        let tax = calVanTaxByKG(kg);
         
         document.getElementById("van-tax").innerHTML = `= ${tax} บาท`;
      }

      function getTruckTax() {
        let kg = parseInt(document.getElementsByName('kg')[0].value) || 0;
        let tax = calTruckTaxByKG(kg);
        
        document.getElementById("truck-tax").innerHTML = `= ${tax} บาท`;
      }

      function getTruckWhiteTax() {
        let kg = parseInt(document.getElementsByName('TruckWhite')[0].value) || 0;
        let tax = calTruckWhiteTaxByKG(kg);
        
        document.getElementById("truck-white").innerHTML = `= ${tax} บาท`;
      }

      function getTruckYellowTax() {
        let kg = parseInt(document.getElementsByName('TruckYellow')[0].value) || 0;
        let tax = calTruckYellowTaxByKG(kg);
        
        document.getElementById("truck-yellow").innerHTML = `= ${tax} บาท`;
      }


      function calCarTaxByCC(cc, year) {
         let tax = 0;

         if (year > 10) year = 10;

         if (cc <= 600) tax = cc * 0.5;
         else if (cc <= 1800) tax = (cc * 1.5) - 600;
         else tax = (cc * 4) - 5100;

         if (year > 5) {
          const discountPercentage = (year - 5) * 0.1; // ลด 10% ต่อปี
          tax = tax * (1 - discountPercentage);
        }
        
        return tax.toFixed(2);
      }

      function calVanTaxByKG(kg) {
         let tax = 0;

         if (kg <= 500) tax = 150;
         else if (kg <= 750) tax = 300;
         else if (kg <= 1000) tax = 450;
         else if (kg <= 1250) tax = 800;
         else if (kg <= 1500) tax = 1000;
         else if (kg <= 1750) tax = 1300;
         else if (kg <= 2000) tax = 1600;
         else if (kg <= 2500) tax = 1900;
         else if (kg <= 3000) tax = 2200;
         else if (kg <= 3500) tax = 2400;
         else if (kg <= 4000) tax = 2600;
         else if (kg <= 4500) tax = 2800;
         else if (kg <= 5000) tax = 3000;
         else if (kg <= 6000) tax = 3200;
         else if (kg <= 7000) tax = 3400;
         else tax = 3600;
            
         return tax.toFixed(1);
      }

      function calTruckTaxByKG(kg) {
         let tax = 0;

         if (kg <= 500) tax = 0;
         else if (kg <= 750) tax = 450;
         else if (kg <= 1000) tax = 600;
         else if (kg <= 1250) tax = 750;
         else if (kg <= 1500) tax = 900;
         else if (kg <= 1750) tax = 1050;
         else if (kg <= 2000) tax = 1350;
         else if (kg <= 2500) tax = 1650;
         else if (kg <= 3000) tax = 1950;
         else if (kg <= 3500) tax = 2250;
         else if (kg <= 4000) tax = 2550;
         else if (kg <= 4500) tax = 2850;
         else if (kg <= 5000) tax = 3150;
         else if (kg <= 6000) tax = 3450;
         else if (kg <= 7000) tax = 3750;
         else tax = 4050;
            
         return tax.toFixed(1);
      }

      function calTruckWhiteTaxByKG(kg) {
         let tax = 0;

         if (kg <= 500) tax = 150;
         else if (kg <= 750) tax = 300;
         else if (kg <= 1000) tax = 450;
         else if (kg <= 1250) tax = 800;
         else if (kg <= 1500) tax = 1000;
         else if (kg <= 1750) tax = 1300;
         else if (kg <= 2000) tax = 1600;
         else if (kg <= 2500) tax = 1900;
         else if (kg <= 3000) tax = 2200;
         else if (kg <= 3500) tax = 2400;
         else if (kg <= 4000) tax = 2600;
         else if (kg <= 4500) tax = 2800;
         else if (kg <= 5000) tax = 3000;
         else if (kg <= 6000) tax = 3200;
         else if (kg <= 7000) tax = 3400;
         else tax = 3600;
            
         return tax.toFixed(1);
      }

      function calTruckYellowTaxByKG(kg) {
         let tax = 0;

         if (kg <= 500) tax = 450;
         else if (kg <= 750) tax = 600;
         else if (kg <= 1000) tax = 750;
         else if (kg <= 1250) tax = 900;
         else if (kg <= 1500) tax = 1050;
         else if (kg <= 1750) tax = 1350;
         else if (kg <= 2000) tax = 1650;
         else if (kg <= 2500) tax = 1950;
         else if (kg <= 3000) tax = 2250;
         else if (kg <= 3500) tax = 2550;
         else if (kg <= 4000) tax = 2850;
         else if (kg <= 4500) tax = 3150;
         else if (kg <= 5000) tax = 3450;
         else if (kg <= 6000) tax = 3750;
         else if (kg <= 7000) tax = 4050;
         else tax = 4350;
            
         return tax.toFixed(1);
      }
