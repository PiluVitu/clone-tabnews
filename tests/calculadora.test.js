const value = Math.random().toFixed(1) * 10;
const condition = value % 2 === 0;

test("espero que o numero random seja par", () => {
  condition
    ? console.log(`O número ${value} é par`)
    : console.log(`O número ${value} é impar`);
  expect(condition).toBe(true);
});
