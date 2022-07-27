import './index.css'
import icon from './asssets/icon.png'
console.log('icon', icon)
console.log('hello webpack')

const img = document.createElement('img')

img.src = icon

document.body.appendChild(img)
