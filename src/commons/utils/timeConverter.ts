// converts dates to 12 hours

export const convertTo12Hour = (time_str) => {
    let options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    let timeString: string = new Date(time_str).toLocaleTimeString('en-US', options);

    // Split the timeString to extract hours and minutes
    let [hours, minutePart]: string[] = timeString.split(':');

    // Ensure minutePart exists before splitting further
    let minutes: string = '';
    let period: string = '';

    if (minutePart) {
        let [minuteValue, periodValue] = minutePart.split(' ');
        minutes = minuteValue || '';
        period = periodValue || '';
    }
    return {hr: parseInt(hours), minutes: parseInt(minutes), period: period}

}



export function convertTo24Hour(fromHour, fromMinute, fromPeriod, toHour, toMinute, toPeriod) {
    // Handle "from" time conversion
    if (fromPeriod === "AM" && fromHour === 12) {
        fromHour = 0;
    } else if (fromPeriod === "PM" && fromHour !== 12) {
        fromHour += 12;
    }

    // Handle "to" time conversion
    if (toPeriod === "AM" && toHour === 12) {
        toHour = 0;
    } else if (toPeriod === "PM" && toHour !== 12) {
        toHour += 12;
    }

    // Get today's date
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const day = today.getDate().toString().padStart(2, '0');

    // Construct 24-hour format time strings
    const fromTime = `${year}-${month}-${day} ${fromHour.toString().padStart(2, '0')}:${fromMinute.toString().padStart(2, '0')}:00`;
    const toTime = `${year}-${month}-${day} ${toHour.toString().padStart(2, '0')}:${toMinute.toString().padStart(2, '0')}:00`;

    return { from: new Date(fromTime), to: new Date(toTime) };
}


export const getTimeDiff = (end_time_val?, start_time_val?) => {
        var end_time = new Date(end_time_val)
        var now = start_time_val ? new Date(start_time_val) : new Date(new Date().toISOString().slice(0, -1))
        console.log(now, "\n", end_time)
        var date_diff = Math.abs(end_time - now)


        var hours = date_diff/(1000*60*60)
        var absoluteHrs = Math.floor(hours)
        var h = absoluteHrs > 9 ? absoluteHrs : '0' + absoluteHrs 

        var minutes = (hours - absoluteHrs) * 60;
        var absoluteMinutes = Math.floor(minutes);
        var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;


        // console.log(h, m, "Hours and minutes")

        var seconds = (minutes - absoluteMinutes) * 60;
        var absoluteSeconds = Math.floor(seconds);
        var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

        const time_diff = {h: h, m:m, s:s}
        return time_diff
    }

export function add_to_time(added_value, time_value?: Date) {
    // Create a new Date object from time_value to avoid mutating the original date
    let new_time = time_value ? new Date(time_value): new Date();

    // Add hours, minutes, and seconds from added_value
    if (added_value.h) new_time.setHours(new_time.getHours() + parseInt(added_value.h));
    if (added_value.m) new_time.setMinutes(new_time.getMinutes() + added_value.m);
    if (added_value.s) new_time.setSeconds(new_time.getSeconds() + added_value.s);

    return new_time;
}

// Example usage
// const time = {
//     fromHour: 12,
//     fromMinute: 0,
//     fromPeriod: "AM",
//     toHour: 12,
//     toMinute: 0,
//     toPeriod: "AM"
// };

// const result = convertTo24Hour(time.fromHour, time.fromMinute, time.fromPeriod, time.toHour, time.toMinute, time.toPeriod);
// console.log(result);
