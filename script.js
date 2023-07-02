// Create Variables

var saveEl = $('.saveBtn');


var dayEl = dayjs().format('dddd, MMMM D');
var hourEl = ["#hour-9","#hour-10","#hour-11",
  "#hour-12",
  "#hour-1",
  "#hour-2",
  "#hour-3",
  "#hour-4",
  "#hour-5"];
var getHour  = dayjs().hour();
var now = getHour - 8;
var currentHour = $(hourEl[now-1]);

$(document).ready(function () {

//Display Date
$('#currentDay').text(dayEl);

  



// Create function for getting the current time
// And create the class accordingly

  function timeDisplay(){
      if(getHour >= 9 && getHour <= 17)
        {
          currentHour.addClass('present');
          for(i=0;i<now;i++){
          currentHour = $(hourEl[i]);
          currentHour.addClass('past');
        }
          for(i=now;i<9;i++)
        {
          currentHour = $(hourEl[i]);
          currentHour.addClass('future');
        }
      }
      else if(getHour >= 0 && getHour<=8)
      {
        for(i=0;i<hourEl.length;i++)
        {
        currentHour = $(hourEl[i]);
        currentHour.addClass('future');
      }
      } 
      else
      {
        for(i=0;i<hourEl.length;i++)
        {
        currentHour = $(hourEl[i]);
        currentHour.addClass('past');
        }
      }
    }

// On clicking the savebutton store the data in the localStorage

    $(".saveBtn").on("click", function () {
      var enteredText = $(this).siblings(".description").val();
      var savedTime = $(this).parent().attr("id");

      localStorage.setItem(savedTime,enteredText);
      console.log("save");
    });

// Get the item from the localStorage and display
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));


    timeDisplay();

});





