interface Shelter {
    name: string
    address: string
    hasBathroom: boolean
    canAccomodateGuests: boolean
    isWaterproof: boolean
}

class House implements Shelter {
    name: string
    address: string
    hasBathroom: boolean
    canAccomodateGuests: boolean
    isWaterproof: boolean
    floors: number
    cost: number
}

class Tent implements Shelter {
    name: string
    address: string
    hasBathroom: boolean
    canAccomodateGuests: boolean
    isWaterproof: boolean
    maxOccupants: number
}