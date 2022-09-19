export default class AuthSession {
    async set(key, value) {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (error) {
            throw error;
        }
    }

    async get(key) {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            throw error;
        }
    }

    async clear() {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            throw error;
        }
    }


}



