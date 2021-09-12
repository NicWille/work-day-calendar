let now = dayjs().format('MMMM D @ h : A')
$("#currentDay").html(now)

let currentHour = dayjs().format('H')

for (let i=0; i<=8; i++) {

    let rowHour = $("textarea").get(i)
    let idString = "#" + (i + 9)

    if (parseInt(rowHour.id) < parseInt(currentHour)) $(idString).addClass("past")   
    if (parseInt(rowHour.id) == parseInt(currentHour)) $(idString).addClass("present")
    if (parseInt(rowHour.id) > parseInt(currentHour)) $(idString).addClass("future")
}   

