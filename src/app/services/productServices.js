import db from "../db/db"

export const getProductById = async (id) => {
    const productFromDB = await db.cart.get(Number(id));
    return productFromDB;
}