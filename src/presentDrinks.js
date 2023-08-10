import fetchDrinks from "./fetchDrinks"
import displayDrinks from './displayDrinks'
import setDrinks from './setDrinks'
const showDrinks = async (url) => {
    // fetch drinks
    const data = await fetchDrinks(url)

    // display drinks
    const section = await displayDrinks(data)
    if (section) {
        setDrinks(section)
    }
} 
export default showDrinks