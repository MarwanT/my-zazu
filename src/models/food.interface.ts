interface Food {
    name: string
    color: Color 
    size: Size
    calories: number
    vitamins: Vitamin[]
}

enum Color {
    ORANGE,
    BLUE,
    BLACK,
    RED,
    WHITE,
    PINK,
    PURPLE,
    GREEN
}

enum Size {
    SMALL,
    MEDIUM,
    LARGE
}

enum Vitamin {
    A,
    B,
    C,
    D,
    IDK
}


/**
 * TODO: Create Two food classes for example: Vegetable and Fruits that extend Food interface
 */