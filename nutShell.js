const input = "mounikakolliboyina@Mounikas-MacBook ";
let currentDir = "~";
const files = [];

const promptText = function () {
  return prompt(input + currentDir + " % ");
};


const executeEcho = function (args) {
  console.log(args.join(" "));
};


const currentDirectory = function (args) {
  currentDir = args[0].split("/").at(-1) + " ~";

  return currentDir;
};

const storeFiles = function (args) {

  files.push(args);
};

const displayFiles = function () {
  console.log(files.join(" "));
};

const executeCommands = function (cmd) {
  const [command, ...args] = cmd.split(" ");

  switch (command) {
    case "echo": return executeEcho(args);
    case "cd": return currentDirectory(args);
    case "touch": return storeFiles(args);
    case "ls": return displayFiles();
    case "mkdir": return storeFiles(args);
  }

};


while (true) {
  const command = promptText();

  executeCommands(command);
}

