class Alumn {
    constructor(name) {
        this.name = name;
        this._createSubjects();
    }

    _createSubjects() {
        this.subjects = [];
    }

    addSubject(subject) {
        this.subjects.push(subject);
    }

    calcAverage() {
        let total = 0;
        this.subjects.forEach(function (subject) {
            total += subject.note;
        });

        return total / subjects.length;
    }
}

class Teacher {
    constructor(name, dni) {
        this.name = name;
        this.dni = dni;
    }
}

class Subject {
    constructor(name, note) {
        this.name = name;
        this.note = note;
    }
}

var alumn = new Alumn("Eustakio");
var subjects = ["DIW", "DAW", "DWC", "DWS"];
subjects.forEach(function (item)  {
    let subject = new Subject(item, Math.round(Math.random() * 10));
    alumn.addSubject(subject);
});

console.log(alumn.subjects);
console.log("Media: " + alumn.calcAverage());
