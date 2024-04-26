const apiUrl = 'https://reqres.in/api/users';
const fetchButton = document.getElementById('fetchUsers');
fetchButton.addEventListener('click', async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayUsers(data.data);
    } catch (error) {
        console.error('Error:', error);
    }
});
function displayUsers(users) {
    const userListContainer = document.getElementById('userList');
    userListContainer.innerHTML = ''; 

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            <p>Name: ${user.first_name} ${user.last_name}</p>
            <p>Email: ${user.email}</p>
        `;
        userListContainer.appendChild(userCard);
    });
}
