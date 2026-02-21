export class Storage {
    storageAvailable(type){
        try {
            const storage = window[type];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }catch(e){
            return false;
        }
    }
    save(projects){
        if (this.storageAvailable("localStorage")){
            localStorage.setItem("projects", JSON.stringify(projects));
        }
    }
    load(){
        if (!this.storageAvailable("localStorage")) return [];
        const data = localStorage.getItem("projects");
        return data ? JSON.parse(data) : [];
    }
}