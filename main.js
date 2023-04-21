function makeRap(){
    const kpop = document.querySelector('input').value
   fetch(`/api/${kpop}`)
   .then(response => response.json())
   .then((data) => {
   console.log(data);
  document.querySelector('#result').textContent = ` your favorite bias: ${kpop}`
  document.querySelector('#age').textContent = `Age: ${data.age}`
  document.querySelector('#govNam').textContent = `Gov Name: ${data.birthName}`
  document.querySelector('#birthLoc').textContent =  `BirthLocation: ${data.birthLocation}`
  document.querySelector('#birth').textContent =  `Birthday: ${data.birthday}`
  document.querySelector('#position').textContent = `Position: ${data.position}`
   })
  }
  document.querySelector('button').addEventListener('click', makeRap)
alert('working')