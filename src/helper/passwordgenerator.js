/** Genrate  Password with specials
 * @param {number} [length=8] - The length of the password.
 * @param {object} options - An object containing the following optional properties:
 * @param {boolean} [options.upper=true] - Whether or not to include uppercase letters.
 * @param {boolean} [options.special=true] - Whether or not to include special characters.
 * @param {boolean} [options.num=true] - Whether or not to include numbers.
 * @param {boolean} [options.lower=true] - Whether or not to include lowercase letters.
 * @returns {string} A randomly generated password.
 */
export function generatePasswordWithOptions(
  length = 8,
  { upper = true, special = true, num = true, lower = true } = {}
) {
  const charset = lower ? "abcdefghijklmnopqrstuvwxyz" : "";
  const caps = upper ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const nums = num ? "0123456789" : "";

  const types = {
    boolean: "@#$&",
    string: special,
  };
  const specials = Object.keys(types).includes(typeof special) ? types[typeof special] : "";
  let password = "";

  const applied = {
    upper: false,
    lower: false,
    special: false,
    num: false,
  };

  const str = charset + caps + nums + specials;

  const errMessage = `
Password conditions restriciting characters for use.
Currently only these character can be used "${str}".
Please allow more characters to be used for generating password.
`;

  if (str.length < length) throw new Error(errMessage);

  for (let i = 0; i < length; i += 1) {
    if (upper && !applied.upper) {
      password += caps.charAt(Math.floor(Math.random() * caps.length));
      applied.upper = true;
    } else if (num && !applied.num) {
      password += nums.charAt(Math.floor(Math.random() * nums.length));
      applied.num = true;
    } else if (special && !applied.special) {
      password += specials.charAt(Math.floor(Math.random() * specials.length));
      applied.special = true;
    } else if (lower && !applied.lower) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
      applied.lower = true;
    } else {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
  }
  return password;
}

export function passwordGenerator(regex, length = 8, options = {}, count = 1) {
  const randomPassword = generatePasswordWithOptions(length, options);
  if (!regex) return randomPassword;

  const testRegex = regex.test(randomPassword);
  if (count > 100) throw new Error(`CANNOT GENERATE PASSWORD FOR REGEX ${regex}`);
  if (!testRegex) return passwordGenerator(regex, length, options, count + 1);

  return randomPassword;
}
