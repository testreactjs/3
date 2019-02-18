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
  staffMemberProfile: {
    getPath(id) {
      return `${BASE_URL}/api/v1/staff_members/${id}/profile`;
    },
  },
};
