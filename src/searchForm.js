import get from './getElement'
import presentDrinks from './presentDrinks'

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const form = get('.search-form')
const input = get('[name="drink"]')


form.addEventListener('keyup', function (e) {
    e.preventDefault()
    const value = input.value
    if (!value) return
    presentDrinks(`${baseUrl}${value}`)
})