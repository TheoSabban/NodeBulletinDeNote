
import student from "./student.json" with {type: "json"};
import { notes } from "./tools.js";

console.log(student.prenom, student.nomDeFamille.toUpperCase());
console.log(student.dateDeNaissance);


for (let matiere of Object.keys(student.notes)) {
  notes(matiere);
}


