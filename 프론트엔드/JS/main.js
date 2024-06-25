function count() {
  const button = document.getElementById('count-button');
  const countLabel = document.getElementById('count');
  
  let count = button.textContent;
  countLabel.textContent = count;
}


function selectnum_Button(){  
    const container = document.querySelector('.button-container');

    for (let i = 0; i < 3; i++) {
        const button = document.createElement('button'); 
        button.textContent = `${i}명`; 
        button.onclick = function() {
          location.href = `./${i}.html`; 
        };
        container.appendChild(button); 
    }
}