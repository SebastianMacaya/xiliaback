class Services {
    constructor(model) {
        this.model = model;
    }

    getAll = async () => {
        try {
            const items = await this.model.find();
            return items;
        } catch (error) {
            console.log(error);
        }
    };

    getById = async (id) => {
        try {
            const item = await this.model.findById(id);
            return item;
        } catch (error) {
            console.log(error);
        }
    };

    createDocument = async (item) => {
        try {
            const document = await this.model.create(item);
            return document;
        } catch (error) {
            console.log(error);
        }
    };

    deleteById = async (id) => {
        try {
            const deleted = await this.model.findByIdAndDelete(id);
            return deleted;
        } catch (error) {
            console.log(error);
        }
    };
}

export default Services;