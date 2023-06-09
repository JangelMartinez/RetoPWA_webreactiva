export const audioDate = (publishAudio) =>{

    const date = new Date(publishAudio*1000)
    const dateDay = date.getDay().toString().lenght === 1 ? '0' + date.getDay() : date.getDate()
    const dateMonth = date.getMonth().toString().length === 1 ? '0' + date.getMonth() : date.getMonth()
    const dateYear = date.getFullYear()
    const datePubilsh = dateDay  + ' / ' + dateMonth + ' / ' + dateYear
    return datePubilsh
}