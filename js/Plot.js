class Plot {
    constructor(id) {
        var plot = getPlot(id);

        this.id       = id;
        this.owner    = new Owner(plot.owner);
        this.plant    = new Plant(plot.plant);
        this.location = plot.location;
    }

    getID() {
        return this.id;
    }

    getOwnerName() {
        return this.owner.getName();
    }

    getPlantName() {
        return this.plant.getName();
    }

    getLocation() {
        return this.location;
    }

    getGoogleMapsLocation() {
        return {
            lat: this.location[0],
            lng: this.location[1]
        };
    }
}

class Owner {
    constructor(id) {
        var owner = getOwner(id);

        this.id   = id;
        this.name = owner.name;
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
        var plant = getPlant(id);

        this.id   = id;
        this.name = plant.name;
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}