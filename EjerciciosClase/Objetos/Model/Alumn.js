class Alumn {
    constructor(name) {
        this.name = name;
        this._createSubjects();
    }

    _createSubjects() {
        this.subjects = [];
    }

    addSubject(subject) {
        subjects.push(subject);
    }

    calcAverage() {
        let total = 0;
        this.subjects.forEach(function (subject) {
            total += subject.note;
        });

        return total / subjects.length;
    }
}