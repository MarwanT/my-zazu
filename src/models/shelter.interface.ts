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
/**
 * TODO: Create At least Two type of shelters extend the Shelter interface
 */