interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    constructor(persona: IPersonData) {
        this._name = 'Ivan';
        this._secondName = 'Petrov';
        this._age = 20;
    }
    getData(): IPersonData {
        const persona = {
            name: 'Ivan',
            secondName: 'Petrov',
            age: 20,
        };
        return persona;
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    readonly _phone: string = '+7(555)555-55-50';

    constructor(persone: IStudentData) {
        super(persone);
        this._phone = '+7(555)555-55-50';
    }
    getData(): IStudentData {
        const IStudent = {
            name: 'Ivan',
            secondName: 'Petrov',
            age: 20,
            phone: '+7(555)555-55-50',
        };
        return IStudent;
    }
}
