

export function loadView(viewName) {
  const main = document.querySelector(".main-content");
  main.innerHTML = "";

  if (viewName === 'home') {
    main.appendChild(renderHome());
  } else if (viewName === 'aboutus') {
    main.appendChild(renderAboutUs());
  } else if (viewName === 'signin') {
    main.appendChild(renderSignIn());
  } else if (viewName === 'signup') {
    main.appendChild(renderSignUp());
  } else if (viewName === 'account') {
    main.appendChild(renderAccount());
  } else {
    main.textContent = "View not implemented yet";
  }
}

function renderHome(){
    
    
}