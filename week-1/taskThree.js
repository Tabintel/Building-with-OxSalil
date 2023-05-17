fetch("https://api.publicapis.org/entries")
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved data here
    console.log(data);
  })
  .catch(error => {
    // Handle errors here
    console.error(error);
  });