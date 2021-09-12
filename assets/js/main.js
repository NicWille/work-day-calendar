let now = dayjs().format('MMMM D @ h : A');
$("#currentDay").html(now);

let currentHour = dayjs().format('H');

for (let i=0; i<=8; i++) {

    var rowHour = $("textarea").get(i);
    let id = (i + 9);
    let idString = "#" + id;
    if (parseInt(rowHour.id) < parseInt(currentHour)) $(idString).addClass("past");
    if (parseInt(rowHour.id) == parseInt(currentHour)) $(idString).addClass("present");
    if (parseInt(rowHour.id) > parseInt(currentHour)) $(idString).addClass("future");

    $(idString).html(localStorage.getItem(id));
};

$( ".saveBtn" ).mousedown(function() {

    let time = $(this).prev().attr("id");
    let text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
});