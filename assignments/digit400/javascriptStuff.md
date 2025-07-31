# Document

```javascript
function bunny() {
    alert ('Hi there! Looks like the page loaded! Yay!');
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', changeColor, false)
    buttons[1].addEventListener('click', changeColor2, false)
    buttons[2].addEventListener('click', newFunction, false)
    buttons[3].addEventListener('click', anotherFunction, false)
}
```


# buttons

## [#]
Provides which button

# Event

## 'click'

# Selectors

## getElementsByTagName

## getElementsByClassName

##getElementById
No s



# Variables

## let

## var

## const


# Function

## name
Will be the second thing in `window.addEventListener('DOMContentLoaded', bunny, false);`
In this case, it's 'bunny'

## changeColor

```javascript
function changeColor() {
    var p1 = document.getElementById("colorToggle")
    {
        p1.style.backgroundColor = "skyblue";
    }
}
```
Changes the color of the first paragraph element

```javascript
function changeColor2() {
    var pars = document.getElementsByTagName('p')
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "pink";
    }
}
```
Changes the color of all paragraph elements


`pars` gets all the paragraphs through `var pars = document.getElementsByTagName('p')`

`pars.length` takes the pars variable and gets the number of paragraphs



# Query Selector

```javascript
var buttons = document.querySelectorAll('.button')
```
querySelectorAll grabs all the button classes in CSS
