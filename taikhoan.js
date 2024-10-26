function toggleForm() {
    const loginForm = document.querySelector('.form-box');
    const registerForm = document.querySelector('.form-box.hidden');

    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
}
