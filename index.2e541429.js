var e=Object.values(document.querySelectorAll(".population")).map(function(e){return+e.textContent.replaceAll(",","")}),t=e.reduce(function(e,t){return e+t},0),n=t/e.length,o=t.toLocaleString("en-US"),l=n.toLocaleString("en-US");document.querySelector(".total-population").textContent=o,document.querySelector(".average-population").textContent=l;
//# sourceMappingURL=index.2e541429.js.map
