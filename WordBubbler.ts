import * as fs from "fs";
import * as path from "path";

function lerArquivo(nomeArquivo: string): string[] {
  const conteudo = fs.readFileSync(nomeArquivo, "utf-8");
  // Separa as palavras e filtra vazios
  return conteudo.split(/\s+/).filter((palavra) => palavra.length > 0);
}

function bubbleSort(vetor: string[]): void {
  const n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (vetor[j].localeCompare(vetor[j + 1]) > 0) {
        [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];
      }
    }
  }
}

// Função principal
function main() {
  const nomeArquivoEntrada = process.argv[2];
  if (!nomeArquivoEntrada) {
    console.log("Informe o nome do arquivo de entrada como argumento.");
    return;
  }

  const palavras = lerArquivo(nomeArquivoEntrada);
  bubbleSort(palavras);

  const { dir, name } = path.parse(nomeArquivoEntrada);
  const nomeArquivoSaida = path.join(dir, `${name}_ord.txt`);
  fs.writeFileSync(nomeArquivoSaida, palavras.join("\n"), "utf-8");
  console.log(`Arquivo ordenado salvo em: ${nomeArquivoSaida}`);
}

main();
