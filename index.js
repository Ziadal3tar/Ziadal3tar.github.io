window.addEventListener('scroll', function () {
  if (scrollY >= 670) {
    document.getElementById('nav').classList.add("bg-green")
  } else if (scrollY <= 670) {
    document.getElementById('nav').classList.remove("bg-green")
  }
});
document.getElementById('get').addEventListener('click',get)
function get() {
   formData = new FormData();
   data={name:'ziad', age:15}

  fetch('http://localhost:3000/proj/allProduct', {
    method: 'POST',
body:JSON.stringify({ id:'sfhahsf89ashdjaws'}),
headers: {
  'Content-Type': 'application/json'
}
  }).then(function (res) { return res.json() })
  .then(function (res) { console.log(res); })
}

