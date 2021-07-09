interface Food {
    name: string
    color: Color 
    size: Size
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

enum Size {
    SMALL,
    MEDIUM,
    LARGE
}



/**
 * TODO: Create Two food classes for example: Vegetable and Fruits that extend Food interface
 */