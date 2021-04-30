export function dateFormatter(date) {
    let cleanDate = new Date (date)
    let dateString = String(cleanDate)
    return dateString.slice(0,21)
}