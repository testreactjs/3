const config = {
  headers: {'Authorization': 'Token token="f4d91314f64309521727d059b271fe9b"'}
};
axios.get('https://purrweb-internship.herokuapp.com/api/v1/staff_members/340', config)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});