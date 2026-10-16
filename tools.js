import student from "./student.json" with {type: "json"};

export function notes(matiere) {
  console.log(matiere.toUpperCase() + " :");

  for (let i = 0; i < student.notes[matiere].length; i++) {
    console.log(student.notes[matiere][i]);
  }
}



