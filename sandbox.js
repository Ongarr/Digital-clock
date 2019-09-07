const clock = document.querySelector('.clock');

Number.prototype.zeroPad = function() {
    return ('0'+this).slice(-2);
 };

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span>${h.zeroPad()}</span> :
    <span>${m.zeroPad()}</span> :
    <span>${s.zeroPad()}</span>
    `;

    clock.innerHTML = html;

};

setInterval(tick, 1000);