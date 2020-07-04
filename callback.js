callbacks.promise, async / (await boilWater());
console.log(`chop carrots`);

function boilWater() {
  console.log(`boiling...`);
  setTimeout(() => {
    console.log(`done`);
    console.log(`add carrot`);
    setTimeout(() => {
      console.log(`carrot done`);
    }, 5000);
    console.log(`chop onions`);
  }, 10000);
}
