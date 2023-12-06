import mongoose from "mongoose";
//drlcocodrlcoco
//W3HLsbk5bhca5L7x
//wMcr7ciltjuxk0uo
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://atlas-sql-6570b5106219a603eb8a5627-xr28e.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin");
        /* await mongoose.connect("mongodb+srv://drlcocodrlcoco:<W3HLsbk5bhca5L7x>@reactnodefullstackproje.2mzo1r9.mongodb.net/?retryWrites=true&w=majority"); */
        console.log("Se ha conectado a base de datos correctamente");
    } catch (error) {
        console.log(error);
    }
};