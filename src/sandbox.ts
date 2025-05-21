type StringOrNum = string | number;
type ObjWithName = { name: string, uid: StringOrNum };

const logDetails = (uid : string | number, item: { name: string }) => {
  console.log(`A product with UID: ${uid} has a name of ${item.name}`);
}

const greet = (user: ObjWithName) => {
  console.log(`Hello ${user.name}, your UID is ${user.uid}`);
}

const greetAgain = (user: ObjWithName) => {
  console.log(`Hello again ${user.name}!`);
}