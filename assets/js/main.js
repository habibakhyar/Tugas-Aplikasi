function calculateDaysBetweenDates(begin, end){
    var oneDay = 24*60*60*1000;
    return Math.round(Math.abs((begin.getTime() - end.getTime())/(oneDay)));
}