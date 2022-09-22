const suggestionsBtn = document.getElementById('suggestionsButton')

const {getSuggestion} = require('./controller');

app.get("/api/suggestion", getSuggestion);

const getSuggestion = () => {
    axios.get("./api//getSuggestion")
    .then(res => {
        const data = res.data;
        alert(data)
    });
}

suggestionsBtn.addEventListener('click', getSuggestion)