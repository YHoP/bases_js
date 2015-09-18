describe('convertToArray', function() {
  it("Convert inputted number to an array", function() {
    expect(convertToArray("123")).to.eql(["1", "2", "3"]);
  });
});

describe('reverseArray', function() {
  it("Reverse inputted array to new array", function() {
    expect(reverseArray(["1", "2", "3"])).to.eql(["3", "2", "1"]);
  });
});

describe('isBinary', function() {
  it("If inputted number is binary, return true", function() {
    expect(isBinary("1")).to.equal(true);
  });
  it("If inputted number is not binary, return false", function() {
    expect(isBinary("8")).to.equal(false);
  });
});

describe('isBinaryArray', function() {
  it("If number can be converted to binary array, return true", function() {
    expect(isBinaryArray("1010")).to.equal(true);
  });
  it("If number can not be converted to binary array, return false", function() {
    expect(isBinaryArray("12345")).to.equal(false);
  });
});

describe('BinaryToDecimal', function() {
  it("Convert inputted binary string to decimal", function() {
    expect(BinaryToDecimal("1111")).to.equal(15);
  });
});
