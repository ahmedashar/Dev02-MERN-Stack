export class User {
    id;
    name;
    image;
    email;

    constructor(data) {
        this.id = data.id;
        this.name = this.getFullName(data.first_name, data.last_name);
        this.image = data.avatar;
        this.email = data.email;
    }

    getFullName(fn, ln) {
        /*
        logic
        */

        return `${fn} ${ln}`;
    }

}
