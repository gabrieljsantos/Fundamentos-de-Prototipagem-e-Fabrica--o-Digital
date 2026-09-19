import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "dist");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ["index.html", "styles.css", "relatorio.html"]) {
  await cp(path.join(root, file), path.join(output, file));
}

await cp(path.join(root, "conteudos"), path.join(output, "conteudos"), { recursive: true });
console.log("Site da raiz copiado para dist/ para publicação.");
