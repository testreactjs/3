import axios from 'axios'

const members = 'https://purrweb-internship.herokuapp.com/api/v1/staff_members';
const config = { headers: {'Authorization': 'Token token="f4d91314f64309521727d059b271fe9b"'} };
export const getAllMembers = () => {
  axios.get(members, config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });

}
