import { parse, format } from "https://deno.land/std@0.95.0/datetime/mod.ts";

console.log(parse("20-01-2019", "dd-MM-yyyy")); // output : new Date(2019, 0, 20)
console.log(parse("2019-01-20", "yyyy-MM-dd")); // output : new Date(2019, 0, 20)

console.log(format(new Date(2019, 0, 20), "dd-MM-yyyy")); // output : "20-01-2019";
console.log(format(new Date(2019, 0, 20), "yyyy-MM-dd")); // output : "2019-01-20";
