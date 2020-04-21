const fetchData = async (searTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '8defcb8a',
      s: searTerm
    }
  });

  console.log(response.data);
}

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
  fetchData(event.target.value);
})