
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const defaultUser = document.getElementById("defaultUser");
const defaultPassword = document.getElementById("defaultPassword");
const signInBtn = document.getElementById("signInBtn");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const userNameValue = userName.value;
  const passwordValue = password.value;

  // Username check
  if (userNameValue.trim() === " ") {
    defaultUser.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Please enter <span class="text-green-600 font-bold">'admin'</span>`;
    defaultUser.classList.remove("text-purple-600", "text-green-500");
    defaultUser.classList.add("text-red-500", "animate-bounce");
    return;
  } else if (userNameValue !== "admin") {
    defaultUser.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Wrong user name. Please enter <span class="text-green-600 font-bold">'admin'</span>`;
    defaultUser.classList.remove("text-purple-600", "text-green-500");
    defaultUser.classList.add("text-red-500", "animate-bounce");
    return;
  } else {
    defaultUser.classList.remove("text-red-500", "animate-bounce", "text-purple-600");
    defaultUser.classList.add("text-green-500");
    defaultUser.innerHTML = `<i class="fa-regular fa-circle-check"></i> Correct your user name`;
  }

  // Password check
  if (passwordValue.trim() === " ") {
    defaultPassword.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Please enter <span class="text-green-600 font-bold">'admin123'</span>`;
    defaultPassword.classList.remove("text-purple-600", "text-green-500");
    defaultPassword.classList.add("text-red-500", "animate-bounce");
    return;
  } else if (passwordValue !== "admin123") {
    defaultPassword.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Wrong password. Please enter <span class="text-green-600 font-bold">'admin123'</span>`;
    defaultPassword.classList.remove("text-purple-600", "text-green-500");
    defaultPassword.classList.add("text-red-500", "animate-bounce");
    return;
  } else {
    defaultPassword.classList.remove("text-red-500", "animate-bounce", "text-purple-600");
    defaultPassword.classList.add("text-green-500");
    defaultPassword.innerHTML = `<i class="fa-regular fa-circle-check"></i> Correct your password`;

    window.location.href = "home.html";
  }

  console.log(userNameValue, passwordValue);
});