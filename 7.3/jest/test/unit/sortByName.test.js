const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const result = sorting.sortByName(input);

    const expected = [
      
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
      
    ];

    expect(result).toEqual(expected);
  });

  test("Books names should be sorted in ascending order", () => {
    const input = ["Гарри Поттер", "Властелин Колец", "Властелин Колец"];
    const result = sorting.sortByName(input);

    const expected = ["Властелин Колец", "Властелин Колец", "Гарри Поттер"];

   expect(result).toEqual(expected);
  });

  test("Throws exeption if called without param", () => {
    expect(() => sorting.sortByName()).toThrow();
  });
});

