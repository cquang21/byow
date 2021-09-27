/* JS FUNCTIONALITY 

1. Change wine type color x3
2. Change label color (NOTE: Couldn't get #3 to behave, might be an issue with the source image)
3. User input changes wine name x1
! May not get to below
4. Order button triggers modal 
5. Nvermind button on modal

*/


// Change wine type
const label = document.querySelector('#label-style');

const whiteLabelButton = document.getElementById('whiteLabel');
whiteLabelButton.addEventListener('click', whiteLabelApply);
function whiteLabelApply() {
  label.classList.remove('label01');
  label.classList.remove('label03');
  label.classList.add('label02')
}

const blueLabelButton = document.getElementById('blueLabel');
blueLabelButton.addEventListener('click', blueLabelApply);
function blueLabelApply() {
  label.classList.remove('label02');
  label.classList.remove('label03');
  label.classList.add('label01')
}

/* 
const pinkLabelButton = document.getElementById('pinkLabel');
pinkLabelButton.addEventListener('click', pinkLabelApply);
function pinkLabelApply() {
  label.classList.remove('label01');
  label.classList.remove('label02');
  label.classList.add('label03');
} */

//Changes Wine Type
const wineColor = document.querySelector('#wine-color');

const redButton = document.getElementById('redwine');

redButton.addEventListener('click', redWineApply);
function redWineApply() {
  wineColor.classList.remove('whitewinebottle');
  wineColor.classList.remove('rosebottle');
  wineColor.classList.add('redwinebottle');
}

const whiteButton = document.getElementById('whitewine');

whiteButton.addEventListener('click', whiteWineApply);
function whiteWineApply() {
  wineColor.classList.remove('redwinebottle');
  wineColor.classList.remove('rosebottle');
  wineColor.classList.add('whitewinebottle');
}

const roseButton = document.getElementById('rose');

roseButton.addEventListener('click', roseWineApply);

function roseWineApply() {
  wineColor.classList.remove('whitewinebottle');
  wineColor.classList.remove('redwinebottle');
  wineColor.classList.add('rosebottle');
 
}

//Brand wine

const form = document.querySelector('#wineform')
const wineBrandInput = document.querySelector('#wine-brand-input')
const brandPar = document.querySelector('#brand')

form.addEventListener('submit', replaceBrand);

function replaceBrand(event) {
  
  event.preventDefault();

// Get user value
  let brandParReplace = wineBrandInput.value;
  
  let stringText = brandPar.innerText
  let str = stringText.length

  if(str > 5) {
    brandPar.innerText = brandParReplace; 
  }

  else {
    alert("Please keep your name to under 5 characters.")
  }



  // Get user value > Replace value in p with user input > Clear textfield.

}

//above code doesnt work
