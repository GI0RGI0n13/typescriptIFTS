Utilizzare di continuo i comandi "tsc nomefile.ts" e "node nomefile.js", per coonvertire ed eseguire il codice, può diventare pesante, per questo si inizializza una cartella per lo sviluppo.

Aprire il terminale nella cartella in cui si desidera creare il workspace e digitare i seguenti comandi:

md workspace                             : creerà una cartella chiamata "workspace", il nome dopo "md" in realtà è a scelta
npm init -y                              : creerà il file "package.json" nella cartella
npm install --save-dev typescript        : Installa TypeScript come dipendenza del progetto
npx tsc --init                           : crea un file di configurazione TypeScript "tsconfig.json"

A questo punto, è consigliabile creare una nuova cartella "src" all'interno della cartella principale "workspace"
qui dentro verranno creati i vari file ts con cui lavoreremo.
Successivamemte, lanciare questo comando nella cartella principale "workspace"

mkdir dist                               :creerà una cartella chiamata dist. Qui verranno salvati i file convertiti in js

Per convertire tutti i file .ts durante il lavoro sarà necessario lanciare il comando "tsc"
Per convertirne uno nello specifico si usa "tsc nomefile"

Per sapere tutte le opzioni in "tsconfig.json" andare su https://www.typescriptlang.org/docs/handbook/tsconfig-json.html



    
