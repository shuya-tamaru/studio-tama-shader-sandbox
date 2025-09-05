export function splitString(input: string): [string, string] {
  const pattern = /(?<=】)\s*/;
  const parts = input.split(new RegExp(pattern, "u"), 2);
  return [parts[0], parts[1]];
}
