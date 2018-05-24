// alert(document.location);


  //var prayerTime;

  //var testing=2;
 //alert();


 chrome.storage.sync.set({
  // 'manualTimingStatus':false,
'notificationsTime':0,
   'notificationSoundStatus':true,
   'notificationShowStatus':true,
   'FirstHour':12,
   'FirstMinute':0,
   'SecondHour':12,
   'SecondMinute':0,
   'ThirdHour':12,
   'ThirdMinute':0,
   'FourthHour':12,
   'FourthMinute':0,
   'FifthHour':12,
   'FifthMinute':0,
   'SixthHour':12,
   'SixthMinute':0
 }, function() {
   console.log("Successfully Default Value set for the first time");
 });


var optionsFirst = {
  type: "basic",
  title: "Prayer Time",
  message: "Fajr Prayer Time",
  iconUrl: "icon6.png"
};



var optionsSecond = {
  type: "basic",
  title: "Prayer Time",
  message: "Juma Prayer Time",
  iconUrl: "icon6.png"
};

var optionsThird = {
  type: "basic",
  title: "Prayer Time",
  message: "Dhuhr Prayer Time",
  iconUrl: "icon6.png"
};

var optionsFourth = {
  type: "basic",
  title: "Prayer Time",
  message: "Asr Prayer Time",
  iconUrl: "icon6.png"
};

var optionsFifth = {
  type: "basic",
  title: "Prayer Time",
  message: "Magrib Prayer Time",
  iconUrl: "icon6.png"
};

var optionsSixth = {
  type: "basic",
  title: "Prayer Time",
  message: "Isha Prayer Time",
  iconUrl: "icon6.png"
};



function creationCallback() {

          chrome.storage.sync.get([
          'notificationSoundStatus'
        ], function(items) {
console.log(items.notificationSoundStatus);

if(items.notificationSoundStatus==true)
{
    var audio = new Audio('/NotificationSound/solemn.mp3');
audio.play();
console.log("Popup done with alarm sound!");
}
else
{
  console.log("Popup done without alarm sound!!");
}
});

}

var firstTimeCheck=true;
if(firstTimeCheck)
{
  prayerTimeInterval=setInterval(getPrayerTimes, 1000);
}


  var time = setInterval(runFunction, 60000);

// var time = setInterval(runFunction, 60000);

var notificationsTime=0;


// $.when(getPrayerTimes()).then(runFunction());
var prayerTime;
var manualTimingStatus;
var prayerTimeInterval;

var notificationsTimeFirstHour,notificationsTimeFirstMinute,notificationsTimeSecondHour,notificationsTimeSecondminute,
    notificationsTimeThirdHour,notificationsTimeThirdMinute,notificationsTimeFourthHour,notificationsTimeFourthminute,
    notificationsTimeFifthHour,notificationsTimeFifthMinute,notificationsTimeSixthHour,notificationsTimeSixthminute;



function runFunction() {

  if(!firstTimeCheck){
  //alert("kjsdr");

  var date = new Date();
console.log("Hour "+date.getHours()+" Minute "+date.getMinutes())

var currentDay=date.getDay();
console.log(currentDay);



          chrome.storage.sync.get([
          'manualTimingStatus','FirstHour','FirstMinute','SecondHour','SecondMinute',
          'ThirdHour','ThirdMinute','FourthHour','FourthMinute',
          'FifthHour','FifthMinute','SixthHour','SixthMinute'
          ,'notificationsTime','notificationShowStatus','notificationSoundStatus'
        ], function(items) {

// if(items.manualTimingStatus==false || items.manualTimingStatus==undefined)
// {
//    prayerTimeInterval=setInterval(getPrayerTimes, 1000);
// }
//
// else if(items.manualTimingStatus==true)
if(true)
{
  console.log("Notifications "+items.FirstHour);
console.log("Notifications "+items.FirstMinute);
console.log("Notifications "+items.SecondHour);
console.log("Notifications "+items.SecondMinute);

  console.log("Notifications "+items.ThirdHour);
console.log("Notifications "+items.ThirdMinute);
console.log("Notifications "+items.FourthHour);
console.log("Notifications "+items.FourthMinute);

  console.log("Notifications "+items.FifthHour);
console.log("Notifications "+items.FifthMinute);
console.log("Notifications "+items.SixthHour);
console.log("Notifications "+items.SixthMinute);


console.log("Notifications "+items.notificationsTime);
notificationsTime=items.notificationsTime;

if(items.notificationsTime==undefined)
notificationsTime=0;

notificationsTimeFirstMinute=items.FirstMinute-notificationsTime;
notificationsTimeFirstHour=items.FirstHour;
if(notificationsTimeFirstMinute<0)
{
    notificationsTimeFirstMinute=60+notificationsTimeFirstMinute;
    notificationsTimeFirstHour--;
    if(notificationsTimeFirstHour<0)
      notificationsTimeFirstHour=24+notificationsTimeFirstHour;
}

notificationsTimeSecondminute=items.SecondMinute-notificationsTime;
notificationsTimeSecondHour=items.SecondHour;
if(notificationsTimeSecondminute<0)
{
    notificationsTimeSecondminute=60+notificationsTimeSecondminute;
    notificationsTimeSecondHour--;
    if(notificationsTimeSecondHour<0)
      notificationsTimeSecondHour=24+notificationsTimeSecondHour;
}






notificationsTimeThirdMinute=items.ThirdMinute-notificationsTime;
notificationsTimeThirdHour=items.ThirdHour;
if(notificationsTimeThirdMinute<0)
{
    notificationsTimeThirdMinute=60+notificationsTimeThirdMinute;
    notificationsTimeThirdHour--;
    if(notificationsTimeThirdHour<0)
      notificationsTimeThirdHour=24+notificationsTimeThirdHour;
}

notificationsTimeFourthminute=items.FourthMinute-notificationsTime;
notificationsTimeFourthHour=items.FourthHour;
if(notificationsTimeFourthminute<0)
{
    notificationsTimeFourthminute=60+notificationsTimeFourthminute;
    notificationsTimeFourthHour--;
    if(notificationsTimeFourthHour<0)
      notificationsTimeFourthHour=24+notificationsTimeFourthHour;
}




notificationsTimeFifthMinute=items.FifthMinute-notificationsTime;
notificationsTimeFifthHour=items.FifthHour;
if(notificationsTimeFifthMinute<0)
{
    notificationsTimeFifthMinute=60+notificationsTimeFifthMinute;
    notificationsTimeFifthHour--;
    if(notificationsTimeFifthHour<0)
      notificationsTimeFifthHour=24+notificationsTimeFourthHour;
}

notificationsTimeSixthminute=items.SixthMinute-notificationsTime;
notificationsTimeSixthHour=items.SixthHour;
if(notificationsTimeSixthminute<0)
{
    notificationsTimeSixthminute=60+notificationsTimeSixthminute;
    notificationsTimeSixthHour--;
    if(notificationsTimeSixthHour<0)
      notificationsTimeSixthHour=24+notificationsTimeSixthHour;
}





console.log(" notificationsTimeFirstHour "+notificationsTimeFirstHour+" notificationsTimeFirstMinute "+notificationsTimeFirstMinute);
console.log(" notificationsTimeSecondHour "+notificationsTimeSecondHour+" notificationsTimeSecondminute "+notificationsTimeSecondminute);


console.log(" notificationsTimeThirdHour "+notificationsTimeThirdHour+" notificationsTimeThirdMinute "+notificationsTimeThirdMinute);
console.log(" notificationsTimeFourthHour "+notificationsTimeFourthHour+" notificationsTimeFourthminute "+notificationsTimeFourthminute);

console.log(" notificationsTimeFifthHour "+notificationsTimeFifthHour+" notificationsTimeFifthMinute "+notificationsTimeFifthMinute);
console.log(" notificationsTimeSixthHour "+notificationsTimeSixthHour+" notificationsTimeSixthminute "+notificationsTimeSixthminute);

if(items.notificationShowStatus==true && items.notificationShowStatus!=undefined)
{


  if(date.getHours()==notificationsTimeFirstHour && date.getMinutes()==notificationsTimeFirstMinute)
{
  chrome.notifications.create(optionsFirst, creationCallback);
}
else if(date.getHours()==notificationsTimeSecondHour && date.getMinutes()==notificationsTimeSecondminute && date.getDay==5)
{
  chrome.notifications.create(optionsSecond, creationCallback);
}


else  if(date.getHours()==notificationsTimeThirdHour && date.getMinutes()==notificationsTimeThirdMinute && date.getDay!=5)
{
  chrome.notifications.create(optionsThird, creationCallback);
}
else if(date.getHours()==notificationsTimeFourthHour && date.getMinutes()==notificationsTimeFourthminute)
{
  chrome.notifications.create(optionsFourth, creationCallback);
}


 else if(date.getHours()==notificationsTimeFifthHour && date.getMinutes()==notificationsTimeFifthMinute)
{
  chrome.notifications.create(optionsFifth, creationCallback);
}
else if(date.getHours()==notificationsTimeSixthHour && date.getMinutes()==notificationsTimeSixthminute)
{
  chrome.notifications.create(optionsSixth, creationCallback);
}

}

}

        });

}
}

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

      console.log("Successfully Saving Done From Background !!!");



    });

  });

  if(prayerTime!=undefined)
  {
    //alert();
    clearInterval(prayerTimeInterval);
    firstTimeCheck=false;
  }

}
