const arrayOne = [
    {
      name: "Salil",
      age: 24,
      place: "Goa"
    },
    {
      name: "Sam",
      age: 23,
      place: "Nigeria"
    },
    {
      name: "John",
      age: 16,
      place: "New York"
    },
    {
      name: "Emmanuel",
      age: 21,
      place: "Dubai"
    }
  ];
  
  function filterPeopleByAge(array) {
    return array.filter(person => person.age >= 18);
  }
  
  console.log(filterPeopleByAge(arrayOne));
  
  // Output: [{name: "Salil", age: 24, place: "Goa"}, {name: "Sam", age: 23, place: "Nigeria"}]
  