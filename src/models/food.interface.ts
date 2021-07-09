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

class Vegetable implements Food {
    name: string;
    color: Color = Color.GREEN;
    size: Size = Size.MEDIUM;
    calories: number = 35;
    vitamins: Vitamin[] = [
        Vitamin.A,
        Vitamin.B,
        Vitamin.C
    ];
}

class Fruit implements Food {
    name: string;
    color: Color;
    size: Size = Size.SMALL;
    calories: number = 75;
    vitamins: Vitamin[] = [
        Vitamin.A,
        Vitamin.B,
        Vitamin.C,
        Vitamin.D,
        Vitamin.IDK
    ];
    
}