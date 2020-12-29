window.onload = function () {
  page1.style.display = "block";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
};
function f1() {
  b1.className = "active";
  b2.className = "";
  b3.className = "";
  b4.className = "";
  page1.focus();
  page1.style.display = "block";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
}

function f2() {
  b1.className = "";
  b2.className = "active";
  b3.className = "";
  b4.className = "";
  page2.focus();
  page1.style.display = "none";
  page2.style.display = "block";
  page3.style.display = "none";
  page4.style.display = "none";
}

function f3() {
  b1.className = "";
  b2.className = "";
  b3.className = "active";
  b4.className = "";
  page3.focus();
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "block";
  page4.style.display = "none";
}

function f4() {
  b1.className = "";
  b2.className = "";
  b3.className = "";
  b4.className = "active";
  page4.focus();
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "block";
}
