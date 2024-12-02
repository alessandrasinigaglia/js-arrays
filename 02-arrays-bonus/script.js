const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [...teachers].reverse();
console.log('Elenco insegnanti invertito:', reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(name => name.length >= 5);
console.log('Insegnanti con nomi lunghi (>= 5 caratteri):', longNames);

// 3. Rimuovi 'Ed' dall'array teachers
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Ed') {
    teachers.splice(i, 1);
    break;
  }
}
console.log('Elenco insegnanti dopo la rimozione di Ed:', teachers);