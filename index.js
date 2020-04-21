const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '8defcb8a',
      s: 'avengers'
    }
  });

  console.log(response.data);
}

fetchData();