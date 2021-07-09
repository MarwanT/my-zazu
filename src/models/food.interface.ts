interface Food {
    name: string
    color: Color 
    size: string // TODO: Create enum for size
    calories: number
    vitamins: string // TODO: 1- Create enum with 3 vitamins list | 2- Make this field an array of vitamins
}

enum Color {
    ORANGE,
    BLUE,
    BLACK,
    RED,
    WHITE,
    PINK,
    PURPLE
}



/**
 * TODO: Create Two food classes for example: Vegetable and Fruits that extend Food interface
 */