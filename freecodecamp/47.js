function periodIsLate(last, today, cycleLength)
{
    let dif = (today-last)/(60 * 60 * 24 * 1000);
    if (dif>cycleLength)
        return true;
    else return false;
}