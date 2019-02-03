class Plot {
    constructor(id) {
        this.id       = id;
        this.owner    = null;
        this.plant    = null;
        this.location = null;
    }

    getID() {
        return this.id;
    }

    getOwnerName() {
        return this.owner.name;
    }

    getPlantName() {
        return this.plant.name;
    }

    getLocation() {
        return this.location;
    }

    getGoogleMapsLocation() {
        return {
            lat: this.location[0],
            lon: this.location[1]
        };
    }
}

class Owner {
    constructor(id) {
        this.id   = id;
        this.name = null;
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}

class Plant {
    constructor(id) {

    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}