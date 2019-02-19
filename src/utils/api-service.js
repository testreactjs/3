const BASE_URL = 'https://purrweb-internship.herokuapp.com';

export default {
  staffMembersApiURL: {
    getPath() {
      return `${BASE_URL}/api/v1/staff_members`;
    },
  },
  staffMember: {
    getPath(id) {
      return `${BASE_URL}/api/v1/staff_members/${id}`;
    },
  },
  updateEmploymentDetails: {
    getPath(id) {
      return `${BASE_URL}/api/v1/staff_members/${id}/update_employment_details`;
    },
  },
  updatePersonalDetails: {
    getPath(id) {
      return `${BASE_URL}/api/v1/staff_members/${id}/update_personal_details`;
    },
  },
  updateContactDetails: {
    getPath(id) {
      return `${BASE_URL}/api/v1/staff_members/${id}/update_contact_details`;
    },
  },
};
