export default {
    get(storeKey: string) {
        return JSON.parse(<string>localStorage.getItem(storeKey));
    },
    set(storeKey: string, item: string) {
        localStorage.setItem(storeKey, JSON.stringify(item));
    },
};
