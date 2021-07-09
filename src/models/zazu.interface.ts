interface Zazu {
    name: string
    lastName: string
    dob: Date
    canSwim: boolean
    canFly: boolean
    canWalk: boolean
    type: ZazuType // TODO: Create Type enum listing two options at least: Animal or Plant
}

enum ZazuType {
    Animal = "animal",
    Manager = "plant",
}



// TODO: Create Two type of Zazus for example: Cat, Dog, Animal