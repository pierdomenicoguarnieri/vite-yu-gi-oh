# Vite Yu-Gi-Oh

## Consegna

### Parte 1

**Descrizione:**

Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all’API di Vite Yu Gi Oh
Documentazione: https://ygoprodeck.com/api-guide/

**Bonus:**

Creare un componente che mostri il numero totale di risultati ottenuti.

### Parte 2

**Descrizione:**

Oggi terminate l’esercizio inserendo la ricerca per “Type”.
La ricerca deve partire da una select posta in un componente figlio rispetto a dove viene fatta la chiamata API.

**Bonus:**

Aggiungere la paginazione next/prev dal footer

---

## Spiegazione della soluzione

Ho scelto questa soluzione in quanto ho ritenuto più vantaggioso salvare tutto il risultato dell'API all'interno di un array e poi clonarlo e visualizzare tramite lo slice 20 carte alla volta. Per cambiare la paginata delle card al click del bottone next cambio l'offset e di conseguenza effettuerò lo slice dell'array totale da indici diversi. Per filtrare le carte attraverso per tipo eseguo diversi passaggi:

  - Con un if salvo tutti i type delle card in un array

  - Stampo dinamicamente le option

  - Tramite una funzione con l'emit cambio il valore della proprietà newType e successivamente in App.vue richiamo l'evento e invoco la funziona getApi che mi restituirà l'API filtrata per tipo.