const loginFormHandler = async function(e) {
    e.preventDefault();
  
    const usernameEl = document.querySelector("#username-input-login");
    const passwordEl = document.querySelector("#password-input-login");
    fetch("/api/bloggers/login", {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };
  
  document.querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);