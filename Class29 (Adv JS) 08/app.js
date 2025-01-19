
// https://reqres.in/api/users?page=1
const user_card_container = document.getElementById('user_card_container');
import { User } from "./models/user.model.js";
import { StorageService } from "./services/storage.service.js";


const fetchUsers = async () => {
    const cached_users = StorageService.users.get();
    if (cached_users) {
        return cached_users;
    }
    try {
        const res = await fetch('https://reqres.in/api/users?page=1');
        const body = await res.json();
        const users = body.data.map(u => new User(u));
        StorageService.users.set(users);
        return users;
    } catch (error) {
        console.error("Unable to fetch users:", error);
    }
}

const renderUsers = async () => {
    const users = await fetchUsers();
    console.log(users);

    user_card_container.innerHTML = users.map(u => {
        return `
         <div class="card" style="width: 18rem;">
            <img src="${u.image}" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title">${u.name}</h5>
              <p class="card-text">${u.email}</p>
              <a href="#" class="btn btn-primary">${u.id}</a>
            </div>
          </div>
        `
    })

}
renderUsers()