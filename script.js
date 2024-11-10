const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

const setValues = (fontSize, bgColor) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}

const initialSetup = () => {
    const bgColor = localStorage.getItem("backgroundColor");
    const fontSize = localStorage.getItem("fontSize");
    if (bgColor && fontSize) {
        setValues(fontSize, bgColor)
    }
    if (!bgColor && !fontSize) {
        setValues("16px", "skyblue")
    }
    if (!bgColor && fontSize) {
        setValues(fontSize, "skyblue")
    }
    if (bgColor && !fontSize) {
        setValues("16px", bgColor)
    }
}

const changefontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize);
};

const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("backgroundColor", selectedBgColor);
};

const clearLocalStorage = () => {
    localStorage.removeItem("backgroundColor");
    localStorage.removeItem("fontSize");
    setValues("16px", "skyblue")
};

selectFontSize.addEventListener("change", changefontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage);

initialSetup();
