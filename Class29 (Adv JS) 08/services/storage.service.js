export class StorageService {

    static users = {
        set: (v) => StorageService.setInStorage('users', v),
        get: () => StorageService.getFromStorage('users')
    }

    static token = {
        set: (v) => StorageService.setInStorage('tokens', v),
        get: () => StorageService.getFromStorage('tokens')
    }

    // task: sessionStorage 
    static getFromStorage(key) {
        try {
            let value = localStorage.getItem(key);
            return JSON.parse(value);
        } catch (error) {
            console.log(error);
        }
    }
    static setInStorage(key, val) {
        try {
            let value = JSON.stringify(val);
            localStorage.setItem(key, value)
        } catch (error) {
            console.log(error);
        }
    }
}