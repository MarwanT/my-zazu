interface Zazu {
    name: string
    lastName: string
    dob: Date
    canSwim: boolean
    canFly: boolean
    canWalk: boolean
    type: ZazuType
}

enum ZazuType {
    Animal = "animal",
    Manager = "plant",
}

class Dog implements Zazu {
    name: string
    lastName: string
    dob: Date
    canSwim: boolean
    canFly: boolean
    canWalk: boolean
    type: ZazuType

    public constructor(name: string = "dogName", lastName: string = "dogLastName", dob: Date = new Date()) {
        this.name = name;
        this.lastName = lastName;
        this.dob = dob;
        this.canSwim = true;
        this.canFly = false;
        this.canWalk = true;
        this.type = ZazuType.Animal
    }
}

// TODO: Create Two type of Zazus for example: Cat, Dog, Animal