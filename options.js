$(function(){

  //alert("options");


var prayerTime,resetDefault;

          $( document ).ready(function() {
   // console.log( "ready!" );

          chrome.storage.sync.get([
          'FirstHour','FirstMinute','SecondHour','SecondMinute',
          'ThirdHour','ThirdMinute','FourthHour','FourthMinute',
          'FifthHour','FifthMinute','SixthHour','SixthMinute',
          'notificationsTime','notificationShowStatus','notificationSoundStatus'
        ], function(items) {
console.log(items.FirstHour);

$('#FirstHourManual').val(items.FirstHour);
$('#FirstMinuteManual').val(items.FirstMinute);
$('#SecondHourManual').val(items.SecondHour);
$('#SecondMinuteManual').val(items.SecondMinute);



$('#ThirdHourManual').val(items.ThirdHour);
$('#ThirdMinuteManual').val(items.ThirdMinute);
$('#FourthHourManual').val(items.FourthHour);
$('#FourthMinuteManual').val(items.FourthMinute);




$('#FifthHourManual').val(items.FifthHour);
$('#FifthMinuteManual').val(items.FifthMinute);
$('#SixthHourManual').val(items.SixthHour);
$('#SixthMinuteManual').val(items.SixthMinute);




$('#notificationTimeBefore').val(items.notificationsTime);
$('#notificationShowStatus').prop('checked',items.notificationShowStatus);
$('#notificationSoundStatus').prop('checked',items.notificationSoundStatus);
//$('#notificationTimeBefore').val(items.notificationsTime);

//$('.myCheckbox').prop('checked', true);
//console.log(items.notificationShowStatus);


          // 'notificationsTime':$('#notificationTimeBefore').val(),
          // 'notificationShowStatus':$('#notificationShowStatus').is(':checked'),
          // 'notificationSoundStatus':$('#notificationSoundStatus').is(':checked')

        });

});

  $('#buttonSaveManualTime').click(

    function(){
      //alert("stre5t");
     // var FazrPrayerHourSet=$('#FazrPrayerHourSet').val();
      // var FazrPrayerMinuteSet=$('#FazrPrayerMinuteSet').val();
      // var JumaPrayerHourSet=$('#JumaPrayerHourSet').val();
      // var JumaPrayerMinuteSet=$('#JumaPrayerMinuteSet').val();
      //console.log(FazrPrayerHourSet+FazrPrayerMinuteSet+JumaPrayerHourSet+JumaPrayerMinuteSet)
      //var flag=FazrPrayerHourSet;
      if(true)
      {
        chrome.storage.sync.set({

          'manualTimingStatus':true,

          'FirstHour': $('#FirstHourManual').val(),
          'FirstMinute': $('#FirstMinuteManual').val(),
          'SecondHour': $('#SecondHourManual').val(),
          'SecondMinute': $('#SecondMinuteManual').val(),

          'ThirdHour': $('#ThirdHourManual').val(),
          'ThirdMinute': $('#ThirdMinuteManual').val(),
          'FourthHour': $('#FourthHourManual').val(),
          'FourthMinute': $('#FourthMinuteManual').val(),


          'FifthHour': $('#FifthHourManual').val(),
          'FifthMinute': $('#FifthMinuteManual').val(),
          'SixthHour': $('#SixthHourManual').val(),
          'SixthMinute': $('#SixthMinuteManual').val(),


          'notificationsTime':$('#notificationTimeBefore').val(),
          'notificationShowStatus':$('#notificationShowStatus').is(':checked'),
          'notificationSoundStatus':$('#notificationSoundStatus').is(':checked')

         // 'FazrHour': FazrPrayerHourSet
          // 'FazrMinute': FazrPrayerMinuteSet,
          // 'JumaHour': JumaPrayerHourSet,
          // 'JumaMinute': JumaPrayerMinuteSet

        }, function() {

          console.log("Successfully manual time is saved !");
          alert("Successfully new settings is saved !");
        //   chrome.storage.sync.get(['FazrHour','FazrMinute','JumaHour','JumaMinute'],function(time){
        //     // $('#total').text(budget.total);
        //     // $('#limit').text(budget.limit);
        //     console.log(time.JumaPrayerMinuteSet);
        // });

        chrome.storage.sync.get([
          'FirstHour'
        ], function(items) {
console.log("OK"+items.FirstHour);
        });


        });
      }
    }
  );

  $('#buttonResetDefault').click(

    function(){

      //var resetDefault=true;


 resetDefault=setInterval(getPrayerTimes,1000);


        chrome.storage.sync.set({
          'manualTimingStatus':false,
'notificationsTime':0,
          'notificationSoundStatus':true,
          'notificationShowStatus':true


         // 'FazrHour': FazrPrayerHourSet
          // 'FazrMinute': FazrPrayerMinuteSet,
          // 'JumaHour': JumaPrayerHourSet,
          // 'JumaMinute': JumaPrayerMinuteSet

        }, function() {

          console.log("Successfully Resetting default Done!");

alert("Successfully Resetting to Default Done!");




        });


    });

  $('#buttonNotificationSettings').click(
    function(){
      //alert();
    console.log($('#notificationShowStatus').is(':checked')+$('#notificationTimeBefore').val()+$('#notificationSoundStatus').is(':checked'));

        chrome.storage.sync.set({

          'notificationsTime':$('#notificationTimeBefore').val(),
          'notificationShowStatus':$('#notificationShowStatus').is(':checked'),
          'notificationSoundStatus':$('#notificationSoundStatus').is(':checked')


        }, function() {

          console.log("Successfully Notifications Setting  Saved !!!");


alert("Successfully Notifications Setting  Saved !!!");



        });


  });



  function getPrayerTimes() {

    var anHttpRequest = new XMLHttpRequest();


    var HttpClientNew = function() {



      this.get = function(aUrl, aCallback) {

        anHttpRequest.onreadystatechange = function() {
          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
            aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open("GET", aUrl, true);


        anHttpRequest.send(null);



      }
    }




    var client = new HttpClientNew();
    client.get('http://api.aladhan.com/timingsByCity?city=Dhaka&country=AE&method=2', function(response) {


      //alert("Hey I'm OK now");
      var jsonObject = JSON.parse(anHttpRequest.responseText);
      console.log(jsonObject);



      var fajrPrayerTime = jsonObject.data.timings.Fajr;
      var JumaPrayerTime= "13.00";
      var duhrPrayerTime = jsonObject.data.timings.Dhuhr;
      var asrPrayerTime = jsonObject.data.timings.Asr;
      var magribPrayerTime = jsonObject.data.timings.Maghrib;
      var ishaPrayerTime = jsonObject.data.timings.Isha;

       prayerTime = [
        fajrPrayerTime,
        JumaPrayerTime,
        duhrPrayerTime,
        asrPrayerTime,
        magribPrayerTime,
        ishaPrayerTime
      ];

      if(prayerTime!=undefined)
      clearInterval(resetDefault);

      var firstHour=parseInt(prayerTime[0].charAt(0)+prayerTime[0].charAt(1));
      if(firstHour>12)
        firstHour=firstHour-12;
      var secondHour=parseInt(prayerTime[1].charAt(0)+prayerTime[1].charAt(1));
      if(secondHour>12)
        secondHour=secondHour-12;
      var thirdHour=parseInt(prayerTime[2].charAt(0)+prayerTime[2].charAt(1));
      if(thirdHour>12)
        thirdHour=thirdHour-12;
      var fourthHour=parseInt(prayerTime[3].charAt(0)+prayerTime[3].charAt(1));
      if(fourthHour>12)
        fourthHour=fourthHour-12;
      var fifthHour=parseInt(prayerTime[4].charAt(0)+prayerTime[4].charAt(1));
      if(fifthHour>12)
        fifthHour=fifthHour-12;
      var sixthHour=parseInt(prayerTime[5].charAt(0)+prayerTime[5].charAt(1));
      if(sixthHour>12)
        sixthHour=sixthHour-12;

      chrome.storage.sync.set({
        'notificationsTime':0,
        // 'manualTimingStatus':true,
        'FirstHour': parseInt(prayerTime[0].charAt(0)+prayerTime[0].charAt(1)),
        'FirstMinute': parseInt(prayerTime[0].charAt(3)+prayerTime[0].charAt(4)),

              'SecondHour': parseInt(prayerTime[1].charAt(0)+prayerTime[1].charAt(1)),
        'SecondMinute':parseInt(prayerTime[1].charAt(3)+prayerTime[1].charAt(4)),

              'ThirdHour': parseInt(prayerTime[2].charAt(0)+prayerTime[2].charAt(1)),
        'ThirdMinute': parseInt(prayerTime[2].charAt(3)+prayerTime[2].charAt(4)),

              'FourthHour': parseInt(prayerTime[3].charAt(0)+prayerTime[3].charAt(1)),
        'FourthMinute':parseInt(prayerTime[3].charAt(3)+prayerTime[3].charAt(4)),

              'FifthHour': parseInt(prayerTime[4].charAt(0)+prayerTime[4].charAt(1)),
        'FifthMinute': parseInt(prayerTime[4].charAt(3)+prayerTime[4].charAt(4)),

              'SixthHour': parseInt(prayerTime[5].charAt(0)+prayerTime[5].charAt(1)),
        'SixthMinute':parseInt(prayerTime[5].charAt(3)+prayerTime[5].charAt(4)),
        // 'FazrMinute': FazrPrayerMinuteSet,
        // 'JumaHour': JumaPrayerHourSet,
        // 'JumaMinute': JumaPrayerMinuteSet

      }, function() {

        console.log("Successfully Saving Done From Background from Options !!!");



      });

    });

    if(prayerTime!=undefined)
    {
      //alert();
    //  clearInterval(resetDefault);
    //  firstTimeCheck=false;
    }

  }

}
);
