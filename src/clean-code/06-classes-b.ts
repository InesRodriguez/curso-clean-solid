(() => {
  //No aplicando el principio de responsabilidad unica
  type Gender = 'M' | 'F';
  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthDate: Date;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }
  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, name, gender, birthDate }: UserProps) {
      super({ name, gender, birthDate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }
    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }
  class UserSettings extends User {
    workingDirectory: string;
    lastOpenFolder: string;
    constructor({ workingDirectory, lastOpenFolder, email, role, name, gender, birthDate }: UserSettingsProps) {
      super({ email, role, name, gender, birthDate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: 'usr/home',
    lastOpenFolder: 'home',
    email: 'fernando@google.com',
    role: 'Admin',
    name: 'Fermando',
    gender: 'M',
    birthDate: new Date('1992-12-21')
  });
  console.log({ userSettings });
  console.log(userSettings.checkCredentials());
})();
