const setDrinks = (section) => {
    section.addEventListener('click', function (e) {
        //e.preventDefault()
        const id = e.target.parentElement.dataset.id
        //JSON.stringnify JSON.parse
        localStorage.setItem('drink', id)
    })
}
export default setDrinks