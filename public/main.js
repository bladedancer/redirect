function redirectFail() {
    console.log("Sending XHR to 8086");
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "http://192.168.1.138:8086/redirectFail");
    req.send();
}

function redirectSucceed() {
    console.log("Sending XHR to 8086");
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "http://192.168.1.138:8086/redirectSucceed");
    req.send();
}

function reqListener() {
    console.log(this.responseText);
  }

(function main() {
    document.getElementById("redirectFail").addEventListener('click', redirectFail);
    document.getElementById("redirectSucceed").addEventListener('click', redirectSucceed);
})();