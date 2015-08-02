var journal = [];
function addEntry(events,didTurnIntoSquirrel) {
  journal.push({
    events: events,
    squirrel: didTurnIntoSquirrel
  });
}

addEntry(["work","gym","NSP","touched tree"],false);
addEntry(["1","4","5","10"],false);
addEntry(["eat nutella","gym","NSP","touched tree"],true);

console.log(journal);
