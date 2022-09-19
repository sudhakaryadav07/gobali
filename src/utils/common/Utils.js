import moment from "moment";

export const DateDayGenerator = async (val) => {
    let date = [];
    let i = 0;
    while (i < val) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        date.push(moment(d).format('YYYY-MM-DD'))
        i++
    }
    return date;
};


export const nullChecker = (val) => !val ? " - " : val;


export const showAlert = (msg) => {
    try {
        const snackbar = document.getElementById("snackbar");
        snackbar.className = "show";
        snackbar.innerHTML = `${msg}`;
        setTimeout(function () { snackbar.className = ""; }, 5000);
    } catch (err) {
        console.log('err: ', err);
    }
}

