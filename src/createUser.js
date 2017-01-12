const user = {
  firstName: '',
  lastName: '',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

module.exports = ({ firstName, lastName }) => {
  return Object.assign({}, user, {
    firstName,
    lastName,
  });
};
