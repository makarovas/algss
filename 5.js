// graph algs
const graph = {};
graph.tyler = [
  { id: "henry", dog: false },
  { id: "john", dog: false },
  { id: "aimee", dog: false }
];

graph.henry = [
  { id: "peggy  ", dog: false },
  { id: "keli", dog: false }
];

graph.john = [{ id: "keli", dog: false }];

graph.peggy = [];

graph.keli = [{ id: "claire", dog: true }];

graph.claire = [];

function search(name) {
  let searchQueue = [].concat(graph[name]);
  let searched = [];
  while (searchQueue.length) {
    let person = searchQueue.shift();
    if (!searched.find(n => n.id === person.id)) {
      if (person.dog) return `${person.id} has a dog`;
      else {
        searchQueue = searchQueue.concat(graph[person.id]);
        searched.push(person);
      }
    }
  }
  return "there are no friends that have a dog";
}

console.log(search("tyler"));
