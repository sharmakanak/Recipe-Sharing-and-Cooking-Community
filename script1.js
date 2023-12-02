function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform backend authentication (not implemented in this example)
  // For demonstration, let's use local storage
  const storedUser = localStorage.getItem(username);

  if (storedUser && JSON.parse(storedUser).password === password) {
    alert('Login successful!');
  } else {
    alert('Invalid credentials');
  }
}

function signup(event) {
  event.preventDefault();
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  // Perform backend signup (not implemented in this example)
  // For demonstration, let's use local storage
  const existingUser = localStorage.getItem(newUsername);

  if (existingUser) {
    alert('Username already exists');
  } else {
    const newUser = { password: newPassword };
    localStorage.setItem(newUsername, JSON.stringify(newUser));
    alert('Signup successful!');
  }
}
