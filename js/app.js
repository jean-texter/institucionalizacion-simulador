
// =========================================
// EDUSIM - SISTEMA DE ACCESO
// =========================================

// Contraseña inicial
const PASSWORD = "123";

// Elementos HTML
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");

const togglePassword = document.getElementById("togglePassword");

// =========================================
// MOSTRAR / OCULTAR CONTRASEÑA
// =========================================

togglePassword.addEventListener("click", () => {

    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";

    togglePassword.innerHTML = isPassword
        ? '<i class="bi bi-eye-slash"></i>'
        : '<i class="bi bi-eye"></i>';

});

// =========================================
// VALIDACIÓN DE ACCESO
// =========================================

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const enteredPassword = passwordInput.value;

    if (enteredPassword === PASSWORD) {

        // Guardar sesión de acceso
        sessionStorage.setItem("edusim_access", "true");

        // Ir al panel principal
        window.location.href = "dashboard.html";

    } else {

        // Mostrar mensaje de error
        loginError.classList.add("show");

        // Limpiar campo
        passwordInput.value = "";

        passwordInput.focus();

    }

});

// =========================================
// OCULTAR ERROR AL ESCRIBIR
// =========================================

passwordInput.addEventListener("input", () => {
    loginError.classList.remove("show");
});
