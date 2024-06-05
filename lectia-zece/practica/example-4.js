/*
## Example 4 - Notes

Write a `Notes` class that manages the collection of notes in the `items` property.
A note is an object with `text` and `priority` properties. Add a static
property `Priority` to the class, which will store the object with priorities.


Add methods`addNote(note)`, `removeNote(text)` and
`updatePriority(text, newPriority)`.
*/

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

class Notes {
  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };
  constructor(notes) {
    this.items = notes;
  }
  addNote(note) {
    this.items.push(note);
    console.log(`Nota ${JSON.stringify(note)} a fost adaugata!`);
  }
  removeNote(text) {
    const index = this.items.findIndex((el) => el.text === text);
    if (index === -1) {
      console.log("Nu avem nicio nota cu acel text");
      return;
    }
    this.items.splice(index, 1);
    console.log(`Nota cu textul ${text} a fost eliminata!`);
  }
  updateNote(text, newPriority) {
    const index = this.items.findIndex((el) => el.text === text);
    if (index === -1) {
      console.log("Nu avem nicio nota cu acel text");
      return;
    }
    this.items[index].priority = newPriority;
    console.log(
      `Nota cu textul ${text} a fost updatata cu priopritatea ${newPriority}!`
    );
  }
}
const myNotes = new Notes([]);
// myNotes.Priority.LOW // o sa primim undefined pentru ca proprietatile si metodele statice POT FII ACCESATE DOAR DE CLASA DIN CARE ELE FAC PARTE
//NU POT FII ACCESATE DE INSTANTELE DE CLASA

myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: "My second note",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote("My first note");
myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
myNotes.addNote({ text: "My third note", priority: Notes.Priority.HIGH });
console.log(myNotes.items);

myNotes.updateNote("My second note", Notes.Priority.HIGH);
myNotes.updateNote("My first note", Notes.Priority.HIGH);
console.log(myNotes.items);
