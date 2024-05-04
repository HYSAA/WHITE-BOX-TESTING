class UserProfile {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getEmail() {
        return this.email;
    }

    updateName(newName) {
        this.name = newName;
    }

    updateAge(newAge) {
        this.age = newAge;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
    }
}

module.exports = UserProfile;
