// como la lectura de archivos son procesos asincronos --> uso await
// await Deno.writeTextFile("text.txt", "Hello Deno!!");

const text = await Deno.readTextFile("text.txt");
console.log(text);
