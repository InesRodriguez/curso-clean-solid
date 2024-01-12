(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true }
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map((file) => file.flagged);

  //Malos
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const today = new Date();

  // días transcurridos - elapsed time in days
  const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const numberOfFilesInDirectory = 33;

  // primer nombre - first name
  const firstName = 'Fernando';

  // primer apellido - last name
  const lastName = 'Herrera';

  // días desde la última modificación - days since modification
  const daysSinceLastModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent = 6;

  // Nombres optimos para variables Booleanas
  const isOpen = true;
  const canWrite = true;
  const hasFruit = true;
  const isActive = false;
  const isEMpty = false;

  // Nombres optimos para variables numericas
  const maxFruits = 5;
  const minFruits = 1;
  const totalFruits = 3;
  const totalOfCars = 4;

  // Nombres poco optimos para funciones
  const createUserIfNotExists = () => ({});
  const updateUserIfFieldsValid = () => ({});

  //Nombres optimos para funciones
  const createUser = () => ({});
  const updateUser = () => ({});

  
})();
