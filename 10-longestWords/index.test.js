import { longestWords } from ".";

describe("longestWords", () => {
  it('Dever retornar ["melancia"] quando passamos a lista ["abacaxi", "melancia", "banana"]', () => {
    expect(longestWords(["abacaxi", "melancia", "banana"])).toEqual([
      "melancia",
    ]);
  });

  it('Dever retornar ["aba","vcd", "aba"] quando passamos a lista ["aba", "aa", "ad", "vcd", "aba"]', () => {
    expect(longestWords(["aba", "aa", "ad", "vcd", "aba"])).toEqual([
      "aba",
      "vcd",
      "aba",
    ]);
  });

  it('Dever retornar ["aa"] quando passamos a lista ["aa"]', () => {
    expect(longestWords(["aa"])).toEqual(["aa"]);
  });

  it('Dever retornar ["eeee", "abcd"] quando passamos a lista ["abc", "eeee", "abcd", "dcd"]', () => {
    expect(longestWords(["abc", "eeee", "abcd", "dcd"])).toEqual([
      "eeee",
      "abcd",
    ]);
  });

  it('Dever retornar ["aa", "bb", "cc"] quando passamos a lista ["aa", "bb", "cc"]', () => {
    expect(longestWords(["aa", "bb", "cc"])).toEqual(["aa", "bb", "cc"]);
  });

  it('Dever retornar ["zzzzzz", "abcdef", "aaaaaa"] quando passamos a lista ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]', () => {
    expect(
      longestWords([
        "a",
        "abc",
        "cbd",
        "zzzzzz",
        "a",
        "abcdef",
        "asasa",
        "aaaaaa",
      ])
    ).toEqual(["zzzzzz", "abcdef", "aaaaaa"]);
  });
});
