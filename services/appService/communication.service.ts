const englishToNumeric = (message: string) => {
  const keyMap: any = {
    a: "2",
    b: "22",
    c: "222",
    d: "3",
    e: "33",
    f: "333",
    g: "4",
    h: "44",
    i: "444",
    j: "5",
    k: "55",
    l: "555",
    m: "6",
    n: "66",
    o: "666",
    p: "7",
    q: "77",
    r: "777",
    s: "7777",
    t: "8",
    u: "88",
    v: "888",
    w: "9",
    x: "99",
    y: "999",
    z: "9999",
    " ": "0",
  };

  let numericMessage = "";

  for (let char of message.toLowerCase()) {
    if (keyMap.hasOwnProperty(char)) {
      if (
        numericMessage.length > 0 &&
        numericMessage.slice(-1)[0] === keyMap[char][0]
      ) {
        numericMessage += `.${keyMap[char]}`;
      } else {
        numericMessage += keyMap[char];
      }
    }
  }
  return numericMessage;
};

const numericToEnglish = (numericMessage: string) => {
  const keyMap: any = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
    "0": " ",
    "*": ".",
    ".": "",
  };

  let englishMessage = "";
  let currentChar = "";
  let currentSequence = "";

  for (let digit of numericMessage) {
    if (digit === currentChar) {
      currentSequence += digit;
    } else {
      if (currentChar !== "") {
        const decodedChar = decodeSequence(
          currentSequence,
          keyMap[currentChar]
        );
        englishMessage += decodedChar;
        currentSequence = "";
      }
      currentChar = digit;
      currentSequence = digit;
    }
  }
  if (currentChar !== "" && currentChar !== ".") {
    const decodedChar = decodeSequence(currentSequence, keyMap[currentChar]);
    englishMessage += decodedChar;
  }
  return englishMessage;
};

const decodeSequence = (sequence: string, characters: string) => {
  if (sequence === ".") {
    return "";
  }
  const sequenceLength = sequence.length;
  const indexInCharacters = (sequenceLength - 1) % characters.length;
  return characters[indexInCharacters];
};

export default {
  englishToNumeric,
  numericToEnglish,
};
