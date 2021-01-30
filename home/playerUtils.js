export function makeUser(formData) {
    const user = {
        name: formData.get('username'),
        starter: formData.get('starters'),
        hp: 100,
        willpower: 10,
        completed: {}
    };
    return user;
}

export function saveUser(data) {
    const stringyUser = JSON.stringify(data);
    localStorage.setItem('USER', stringyUser);
}
