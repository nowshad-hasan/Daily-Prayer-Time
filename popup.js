
var value;
var firstHour,firstMinute,secondHour,secondMinute,thirdHour,thirdMinute,fourthHour,fourthMinute,fifthHour,fifthMinute,
sixthHour,sixthMinute;

$(document).ready(function() {


  $('#openOptionsPage').click(

    function(){

      chrome.tabs.create({ url: "options.html" });

    }
  );


  chrome.storage.sync.get(['FirstHour'],function(items){

console.log(items.FirstHour);

if(items.FirstHour!=undefined || items.FirstHour!=null)
{

    displayAnalogTime();
}


});


    function displayAnalogTime() {

          chrome.storage.sync.get(['FirstHour','FirstMinute','SecondHour','SecondMinute',
            'ThirdHour','ThirdMinute','FourthHour','FourthMinute',
          'FifthHour','FifthMinute','SixthHour','SixthMinute'
            ],function(items){



firstHour=items.FirstHour;
firstMinute=items.FirstMinute;
secondHour=items.SecondHour;
secondMinute=items.SecondMinute;

thirdHour=items.ThirdHour;
thirdMinute=items.ThirdMinute;
fourthHour=items.FourthHour;
fourthMinute=items.FourthMinute;


fifthHour=items.FifthHour;
fifthMinute=items.FifthMinute;
sixthHour=items.SixthHour;
sixthMinute=items.SixthMinute;


console.log("From Popup "+firstHour+" "+firstMinute+" "+secondHour+ " "+secondMinute+" "+thirdHour+" "+thirdMinute+" "+fourthHour+
    " "+fourthMinute+" "+fifthHour+" "+fifthMinute+" "+ sixthHour+" "+sixthMinute);

        var canvasFirst = document.getElementById("canvasFirst");
        var ctxFirst = canvasFirst.getContext("2d");
        var radiusFirst = canvasFirst.height / 2;
        ctxFirst.translate(radiusFirst, radiusFirst);
        radiusFirst = radiusFirst * 0.90;
        //setInterval(drawClock1, 1000);
//setInterval(drawClock2, 1000);
drawClock1();

        function drawClock1() {
          console.log("Fazr");
            drawFace(ctxFirst, radiusFirst);
            drawNumbers(ctxFirst, radiusFirst);
            drawTime(ctxFirst, radiusFirst,firstHour,firstMinute);
        }


        var canvasSecond = document.getElementById("canvasSecond");
        var ctxSecond = canvasSecond.getContext("2d");
        var radiusSecond = canvasSecond.height / 2;
        ctxSecond.translate(radiusSecond, radiusSecond);
        radiusSecond = radiusSecond * 0.90;
      //  setInterval(drawClock, 1000);
drawClock2();
        function drawClock2() {
          console.log("Juma");
            drawFace(ctxSecond, radiusSecond);
            drawNumbers(ctxSecond, radiusSecond);
            drawTime(ctxSecond, radiusSecond,secondHour,secondMinute);
        }

        var canvasThird = document.getElementById("canvasThird");
        var ctxThird = canvasThird.getContext("2d");
        var radiusThird = canvasThird.height / 2;
        ctxThird.translate(radiusThird, radiusThird);
radiusThird = radiusThird * 0.90;



        drawClock3();

        function drawClock3() {
          console.log("Duhr");
            drawFace(ctxThird, radiusThird);
            drawNumbers(ctxThird, radiusThird);
            drawTime(ctxThird, radiusThird,thirdHour,thirdMinute);
        }


        var canvasFourth = document.getElementById("canvasFourth");
        var ctxFourth = canvasFourth.getContext("2d");
        var radiusFourth = canvasFourth.height / 2;
        ctxFourth.translate(radiusFourth, radiusFourth);
        radiusFourth = radiusFourth * 0.90;
      //  setInterval(drawClock, 1000);
drawClock4();
        function drawClock4() {
          console.log("Asr");
            drawFace(ctxFourth, radiusFourth);
            drawNumbers(ctxFourth, radiusFourth);
            drawTime(ctxFourth, radiusFourth,fourthHour,fourthMinute);
        }

        var canvasFifth = document.getElementById("canvasFifth");
        var ctxFifth = canvasFifth.getContext("2d");
        var radiusFifth = canvasFifth.height / 2;
        ctxFifth.translate(radiusFifth, radiusFifth);
        radiusFifth = radiusFifth * 0.90;

        drawClock5();

        function drawClock5() {
          console.log("Magrib");
            drawFace(ctxFifth, radiusFifth);
            drawNumbers(ctxFifth, radiusFifth);
            drawTime(ctxFifth, radiusFifth,fifthHour,fifthMinute);
        }


        var canvasSixth = document.getElementById("canvasSixth");
        var ctxSixth = canvasSixth.getContext("2d");
        var radiusSixth = canvasSixth.height / 2;
        ctxSixth.translate(radiusSixth, radiusSixth);
        radiusSixth = radiusSixth * 0.90;
      //  setInterval(drawClock, 1000);
drawClock6();
        function drawClock6() {
          console.log("Isha");
            drawFace(ctxSixth, radiusSixth);
            drawNumbers(ctxSixth, radiusSixth);
            drawTime(ctxSixth, radiusSixth,sixthHour,sixthMinute);
        }

});

console.log("From Popup2 "+firstHour+" "+firstMinute+" "+secondHour+ " "+secondMinute);







    }

    function drawFace(ctx, radius) {
        var grad;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius * 0.1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();
    }

    function drawNumbers(ctx, radius) {
        var ang;
        var num;
        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (num = 1; num < 13; num++) {
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-ang);
        }
    }

    function drawTime(ctx, radius,hour,minute) {
        var now = new Date();
        // var hour = 7;
        // var minute = 42;
        var second = 00;
        //hour
        hour = hour % 12;
        hour = (hour * Math.PI / 6) +
            (minute * Math.PI / (6 * 60)) +
            (second * Math.PI / (360 * 60));
        drawHand(ctx, hour, radius * 0.5, radius * 0.07);
        //minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        drawHand(ctx, minute, radius * 0.8, radius * 0.07);
        // second
        second = (second * Math.PI / 30);
        //drawHand(ctx, second, radius*0.9, radius*0.02);
    }

    function drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }

});
