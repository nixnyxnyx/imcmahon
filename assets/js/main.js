// light/dark toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const isDarkModeOn = document.querySelector('#dark-mode-prompt');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
        $("#btn-outline1").removeClass('btn-outline-dark').addClass('btn-outline-light');
        $("#btn-outline2").removeClass('btn-outline-dark').addClass('btn-outline-light');
        isDarkModeOn.innerHTML = `Dark Mode Enabled`;
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
        $("#btn-outline1").removeClass('btn-outline-light').addClass('btn-outline-dark');
        $("#btn-outline2").removeClass('btn-outline-light').addClass('btn-outline-dark');
        isDarkModeOn.innerHTML = `Light Mode On`;
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        $("#btn-outline1").removeClass('btn-outline-dark').addClass('btn-outline-light');
        $("#btn-outline2").removeClass('btn-outline-dark').addClass('btn-outline-light');
        isDarkModeOn.innerHTML = `Dark Mode Enabled`;
    }
}