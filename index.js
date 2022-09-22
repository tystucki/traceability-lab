const suggestionsBtn = document.getElementById('suggestionsButton')

const getSuggestion = () => {
    axios.get("http://localhost:6050/api/suggestions/")
    .then(res => {
        cosnt data = res.data;
        alert(data)
    });
}

suggestionsBtn.addEventListener('click', getSuggestion)