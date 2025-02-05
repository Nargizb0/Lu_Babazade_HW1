console.log("JS file connected");

const smileyface = document.querySelector('#smile');
function iconLogId() {
    console.log(this.id);
}
smileyface.addEventListener('click', iconLogId);

const recorddisc = document.querySelector('#disc');
function iconLogId() {
    console.log(this.id);
}
recorddisc.addEventListener('click', iconLogId);

const laughingface = document.querySelector('#laugh');
function iconLogId() {
    console.log(this.id);
}
laughingface.addEventListener('click', iconLogId);
