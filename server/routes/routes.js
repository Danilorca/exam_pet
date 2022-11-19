const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
  app.get("/api/pets", PetController.findAll);
  app.get("/api/pets/:id", PetController.findOne);
  app.post("/api/pets/", PetController.createOne);
  app.put("/api/pets/:id", PetController.updateOne);
  app.delete("/api/pets/:id", PetController.deleteOne);
}