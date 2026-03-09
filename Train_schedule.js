document.addEventListener("DOMContentLoaded", function(){
    displayCurrentWeek();
    displayInfo();
    getDaysOfWeek();
});

function displayCurrentDay()
{
    const today = new Date()
    let weekly_schedule = document.getElementById("weekly_schedule");

}


function displayCurrentWeek() {
    let weekly_schedule = document.getElementById("weekly_schedule");
    const today = new Date();
    // Calculate the date of the first day of the week (Sunday)
    // today.getDate() gets the current day of the month (1-31)
    // today.getDay() gets the current day of the week (0-6, where Sunday is 0)
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - today.getDay());

    // Calculate the date of the last day of the week (Saturday)
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

    // Format the dates for display
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const firstDayString = firstDayOfWeek.toLocaleDateString(undefined, options);
    const lastDayString = lastDayOfWeek.toLocaleDateString(undefined, options);

    console.log(`Current Week: ${firstDayString} to ${lastDayString}`);

    // Example Output: Current Week: Sunday, March 8, 2026 to Saturday, March 14, 2026

    weekly_schedule.innerHTML = "<h3>" + firstDayString + " to " + lastDayString + "</h3>";

    return weekly_schedule;
}

function displayInfo()
{
    let weekly_schedule = document.getElementById("weekly_schedule");
    const today = new Date();
    // Calculate the date of the first day of the week (Sunday)
    // today.getDate() gets the current day of the month (1-31)
    // today.getDay() gets the current day of the week (0-6, where Sunday is 0)
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - today.getDay());

    // Calculate the date of the last day of the week (Saturday)
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

    // Format the dates for display
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const firstDayString = firstDayOfWeek.toLocaleDateString(undefined, options);
    const lastDayString = lastDayOfWeek.toLocaleDateString(undefined, options);

    console.log(`Current Week: ${firstDayString} to ${lastDayString}`);

    // Example Output: Current Week: Sunday, March 8, 2026 to Saturday, March 14, 2026

    weekly_schedule.innerHTML = "<h3>" + firstDayString + " to " + lastDayString + "</h3>";


    localStorage.setItem("Monday Conductor", "Cabe President Wino");
    localStorage.setItem("Tuesday Conductor", "DaddyWilliams");
    localStorage.setItem("Wednesday Conductor", "Efarlito");
    localStorage.setItem("Thursday Conductor", "GMuhney");
    localStorage.setItem("Friday Conductor", "Gabo");
    localStorage.setItem("Saturday Conductor", "ggbiii");
    localStorage.setItem("Sunday Conductor", "Harold");

    localStorage.setItem("Monday VIP", "Cpt the EB");
    localStorage.setItem("Tuesday VIP", "dredogyo");
    localStorage.setItem("Wednesday VIP", "aeset");
    localStorage.setItem("Thursday VIP", "Mushronie");
    localStorage.setItem("Friday VIP", "Jan");
    localStorage.setItem("Saturday VIP", "Badgerfan");
    localStorage.setItem("Sunday VIP", "Jim");

    let monday_info = document.getElementById("Monday_conductor");
    let tuesday_info = document.getElementById("Tuesday_conductor");
    let wednesday_info = document.getElementById("Wednesday_conductor");
    let thursday_info = document.getElementById("Thursday_conductor");
    let friday_info = document.getElementById("Friday_conductor");
    let saturday_info = document.getElementById("Saturday_conductor");
    let sunday_info = document.getElementById("Sunday_conductor");

    monday_info.innerHTML = "Conductor: " +localStorage.getItem("Monday Conductor");
    tuesday_info.innerHTML = "Conductor: " +localStorage.getItem("Tuesday Conductor");
    wednesday_info.innerHTML = "Conductor: " +localStorage.getItem("Wednesday Conductor");
    thursday_info.innerHTML = "Conductor: " +localStorage.getItem("Thursday Conductor");
    friday_info.innerHTML = "Conductor: " +localStorage.getItem("Friday Conductor");
    saturday_info.innerHTML = "Conductor: " + localStorage.getItem("Saturday Conductor");
    sunday_info.innerHTML = "Conductor: " +localStorage.getItem("Sunday Conductor");

    let monday_vip = document.getElementById("Monday_VIP");
    let tuesday_vip = document.getElementById("Tuesday_VIP");
    let wednesday_vip = document.getElementById("Wednesday_VIP");
    let thursday_vip = document.getElementById("Thursday_VIP");
    let friday_vip = document.getElementById("Friday_VIP");
    let saturday_vip = document.getElementById("Saturday_VIP");
    let sunday_vip = document.getElementById("Sunday_VIP");

    monday_vip.innerHTML = "VIP: " + localStorage.getItem("Monday VIP");
    tuesday_vip.innerHTML = "VIP: " + localStorage.getItem("Tuesday VIP");
    wednesday_vip.innerHTML = "VIP: " + localStorage.getItem("Wednesday VIP");
    thursday_vip.innerHTML = "VIP: " + localStorage.getItem("Thursday VIP");
    friday_vip.innerHTML = "VIP: " + localStorage.getItem("Friday VIP");
    saturday_vip.innerHTML = "VIP: " + localStorage.getItem("Saturday VIP");
    sunday_vip.innerHTML = "VIP: " + localStorage.getItem("Sunday VIP");
    console.log(Date(displayCurrentDay()));
}

function updateInfo()
{

}



function getDaysOfWeek() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const days = [];

    // Calculate the date of the first day (Sunday)
    const firstDay = new Date(today);
    firstDay.setDate(today.getDate() - dayOfWeek);
    firstDay.setHours(0, 0, 0, 0); // Set time to midnight for consistency

    // Loop through all 7 days
    for (let i = 0; i < 7; i++) {
        const nextDay = new Date(firstDay);
        nextDay.setDate(firstDay.getDate() + i);
        days.push(nextDay);
    }


    for (let x = 0; x <= 6; x++)
    {
        console.log(days.at(x));
        document.getElementById(x).innerHTML = days.at(x);
    }

    return days;
}

const currentWeek = getDaysOfWeek();
console.log(currentWeek.at(0));
// Example output format:
// [
//   Sun Mar 09 2025 00:00:00 GMT... ,
//   Mon Mar 10 2025 00:00:00 GMT... ,
//   ...
// ]
