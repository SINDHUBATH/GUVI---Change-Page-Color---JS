const printName = () => {
    const username = window.prompt("What is your name ?");
    const name = document.createElement("h1");
    name.innerText = username.toUpperCase();
    document.body.append(name);
};

let colorCycle;
const changeColors = (theme) => {
    let colors = theme === 'light' ? ['cornsilk', 'pink', 'lightcyan', 'peachpuff'] : ['aquamarine', 'darkmagenta', 'darkcyan', 'greenyellow'];
    let idx = 0;
    const colorSwitcher = () => {
        if (idx === colors.length) {
            idx = 0;
        }
        document.body.style.backgroundColor = colors[idx];
        idx++
        console.log(idx)
    }
    colorCycle = setInterval(colorSwitcher, 2000);
}

const stopChangeColors = () => clearInterval(colorCycle);

let theme = 'light';
const chageTheme = () => {
    stopChangeColors();
    theme = theme === 'light' ? 'dark' : 'light';
    changeColors(theme)
}
