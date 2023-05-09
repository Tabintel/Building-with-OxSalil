fetch("https://github.com/public-apis/public-apis")
.then((response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  console.log(response);
  return response.json();
})
.then((data) => {
  console.log(data);
  // display the data on the page
})
.catch((error) => {
  console.error("Error fetching data:", error);
});
