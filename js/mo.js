let UI = document.getElementById('UI'); 
let Development = document.getElementById('Development'); 
let Management = document.getElementById('Management'); 
let Data = document.getElementById('Data'); 
let mo = document.querySelectorAll('.mo');
mo.onclick = function () { 
  mo.forEach(ele => {
    ele.className.remove('active')
  })

  }
UI.onclick = function () {
    let DataElements = document.querySelectorAll('.Data');
        DataElements.forEach(element => {
            element.style.display = 'inline-block';
        });
    let DevelopmentElements = document.querySelectorAll('.Development');
        DevelopmentElements.forEach(element => {
            element.style.display = 'inline-block';
        });
    let ManagementElements = document.querySelectorAll('.Management');
        ManagementElements.forEach(element => {
            element.style.display = 'inline-block';
        });
        let UIElements = document.querySelectorAll('.UI');
        UIElements.forEach(element => {
            element.style.display = 'inline-block';
        });
        Development.classList.remove('active');
        Data.classList.remove('active');
        Management.classList.remove('active');
        UI.classList.add('active');
}
Development.onclick = function () {
  let DataElements = document.querySelectorAll('.Data');
        DataElements.forEach(element => {
            element.style.display = 'none';
        });
    let UIElements = document.querySelectorAll('.UI');
        UIElements.forEach(element => {
            element.style.display = 'none';
        });
    let ManagementElements = document.querySelectorAll('.Management');
        ManagementElements.forEach(element => {
            element.style.display = 'none';
        });
        let DevelopmentElements = document.querySelectorAll('.Development');
        DevelopmentElements.forEach(element => {
            element.style.display = 'inline-block';
        });
        UI.classList.remove('active');
        Data.classList.remove('active');
        Management.classList.remove('active');
        Development.classList.add('active');
}
Management.onclick = function () {
  let DataElements = document.querySelectorAll('.Data');
        DataElements.forEach(element => {
            element.style.display = 'none';
        });
    let DevelopmentElements = document.querySelectorAll('.Development');
        DevelopmentElements.forEach(element => {
            element.style.display = 'none';
        });
            let UIElements = document.querySelectorAll('.UI');
        UIElements.forEach(element => {
            element.style.display = 'none';
        });
    let ManagementElements = document.querySelectorAll('.Management');
        ManagementElements.forEach(element => {
            element.style.display = 'inline-block';
        });
        Development.classList.remove('active');
        Data.classList.remove('active');
        UI.classList.remove('active');
        Management.classList.add('active');
}
Data.onclick = function () {
  let ManagementElements = document.querySelectorAll('.Management');
        ManagementElements.forEach(element => {
            element.style.display = 'none';
        });
    let DevelopmentElements = document.querySelectorAll('.Development');
        DevelopmentElements.forEach(element => {
            element.style.display = 'none';
        });
    let UIElements = document.querySelectorAll('.UI');
        UIElements.forEach(element => {
            element.style.display = 'none';
        });
    let DataElements = document.querySelectorAll('.Data');
        DataElements.forEach(element => {
            element.style.display = 'inline-block';
        });
        Development.classList.remove('active');
        UI.classList.remove('active');
        Management.classList.remove('active');
        Data.classList.add('active');
}



let serves = document.querySelectorAll('.serves');
let arrowRight = document.getElementById('arrowRight')
let arrowLeft = document.getElementById('arrowLeft')
let number = 0;
let numberFull = serves.length;
console.log(arrowLeft);
arrowLeft.onclick = function () {
  if (number == 0) {
    console.log(number);
    serves.forEach(ele => {
      ele.classList.add('d-none');
    });

    serves[number].classList.add('d-flex');
    serves[number].classList.remove('d-none');
    number = numberFull-1
  } else {
    console.log(number);
    serves.forEach(ele => {
      ele.classList.add('d-none');
    });

    serves[number].classList.add('d-flex');
    serves[number].classList.remove('d-none');
    number--;
  }
}

arrowRight.onclick = function () {
  if (number == numberFull - 1) {
    console.log(number);
    serves.forEach(ele => {
      ele.classList.add('d-none');
    });

    serves[number].classList.add('d-flex');
    serves[number].classList.remove('d-none');
    number = 0;
  } else {
    console.log(number);
    serves.forEach(ele => {
      ele.classList.add('d-none');
    });

    serves[number].classList.add('d-flex');
    serves[number].classList.remove('d-none');
    number ++
  }
}





let textJs = document.querySelectorAll('.textJs');
let colorEnd = document.querySelectorAll('.colorEnd');
let PargrafEnd = document.querySelectorAll('.PargrafEnd');
let up = document.querySelectorAll('.up');
let down = document.querySelectorAll('.down');

textJs.forEach((element, index) => {
  element.onclick = function () {
    colorEnd[index].classList.toggle('active');
    PargrafEnd[index].classList.toggle('d-none');
    up[index].classList.toggle('d-none');
    down[index].classList.toggle('d-none');
  }
});
