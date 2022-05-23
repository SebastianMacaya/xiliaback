const fs = require("fs");
const archivo = JSON.parse(fs.readFileSync("./userData.json", (encoding = "utf8")));

class Users {
    async create(req, res) {
        const dataTemporal = archivo;
        const newUser = req.body;
        newUser.id = dataTemporal.length + 1;
        dataTemporal.push(newUser);
        await fs.promises.writeFile("userData.json", JSON.stringify(dataTemporal));
        res.json({ data: newUser, status: "Fue creado el usuario" });
    }


    async getAll(req, res) {
        const dataTemporal = archivo;
        res.json(dataTemporal);
    }


    async findById(req, res) {
        const dataTemporal = archivo;
        let id = req.params.id;
        let text = dataTemporal.find((val) => id == val.id);
        return res.json(text ? text : { error: "Usuario no encontrado" });
    }
    async updateById(req, res) {
        const dataTemporal = archivo;
        const id = req.params.id;
        const temporal = req.body;
        temporal.id = id;
        if (id <= dataTemporal.length) {
            dataTemporal[id - 1] = temporal;
            await fs.promises.writeFile("./userData.json", JSON.stringify(dataTemporal));
            res.json({ nota: "Fue modificado el usuario" });
        } else {
            res.json({ nota: "No existe ese usuario" });
        }

    }

    async deleteById(req, res) {
        const dataTemporal = archivo;
        const id = req.params.id;
        const temporal = {
            id: id,
        };
        dataTemporal[id - 1] = temporal;
        await fs.promises.writeFile("./userData.json", JSON.stringify(dataTemporal));
        res.json({ nota: "Fue borrado el usuario" });
    }
}


module.exports = new Users();