const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/exam_pet", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("BASES DE DATOS READY"))
	.catch(err => console.log("Algo salió mal", err));