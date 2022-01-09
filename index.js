function malert(text) {
    const newAlert = document.querySelector("#alert");
    newAlert.style.display = 'block';
    document.querySelector('#body').innerText = text;
}
const closeAlert = () => {
    const alrt = document.body.querySelector('#alert');
    alrt.style.display = 'none';
}