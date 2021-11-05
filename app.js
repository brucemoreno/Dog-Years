var myAge = 3.0;
/* my actual age */

var earlyYears = 2.0;
/* first 2 years of a dog is bigger than next ones */

var dogEarlyYears = earlyYears * 10.5;

var laterYears = myAge - 2.0;
/* this is the remaining years that will have different value for earlyYears */

var dogLaterYears = laterYears * 4.0;
/* after the first 2 years, this is will be the pattern for dog x human age difference */

const DOGGO = dogLaterYears + dogEarlyYears;

console.log(DOGGO);
