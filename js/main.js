/*
1. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.

2. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write()
в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
*/

var css = [
  {
    property: "color",
    value: "#ff0000"
  },
  {
    property: "font-size",
    value: "14pt"
  },
  {
    property: "text-align",
    value: "center"
  },
  {
    property: "text-decoration",
    value: "underline"
  }
];

function displayText(cssArray, text = "") {
  let cssStyle = ""; 
  // generates css style by cssArray data
  for (let cssProperty of cssArray) {
    console.log(cssProperty);

    // add css property to the styles string
    cssStyle+= `${cssProperty.property}: ${cssProperty.value};`;
  }

  //document.write(`<p style="${cssStyle}">${text}</p>`);
  document.getElementById('container').innerHTML = `<p style="${cssStyle}">${text}</p>`;
}

function showTextFromInput() {
  let textField = document.getElementById('textField');
  //console.log(textField.value);

  displayText(css, textField.value);
}

/*displayText(css, "Hello World!!!");
displayText(css, "Some other text");*/
