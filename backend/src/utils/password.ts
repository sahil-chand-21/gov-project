import bcrypt from "bcryptjs";

const SALT_ROUNDS = 12;

export async function hashPassword(
    password: string
): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(
    password: string,
    passwordHash: string
): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
}


//Login mein plaintext password database se compare nahi hota. bcrypt.compare() submitted password ko stored hash ke against verify karta hai.