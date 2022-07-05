const { ModelNotFoundException } = require("@adonisjs/lucid/src/Exceptions");

// Me importo el modelo
const Cupkages = use("App/Models/Cupkage");

class CupkageControllers {
  async getCupcakeAll({ view }) {
    //   como esto se va a conectar a una DB usamos el metodo .all de mySQL
    const cupkages = (await Cupkages.all()).toJSON();

    // --> la info que me devuelve la voy a renderizar en una vista
    return view.render("cupkage", { cupkages });
  }
}

module.exports = CupkageControllers;
