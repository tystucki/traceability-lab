const suggestionsBtn = document.getElementById('suggestionsButton')

const getSuggestion = () => {
    axios.get("./api/controller.js/suggestion")
    .then(res => {
        const data = res.data;
        alert(data)
    });
}

suggestionsBtn.addEventListener('click', getSuggestion)