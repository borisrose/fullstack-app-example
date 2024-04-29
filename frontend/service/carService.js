export class CarService {

    // cette méthode sera appelée sur la classe même
    static async getCars(){
        // await ça veut attend que la promesse soit tenu 
        // pour passer à l'instruction située en-dessous
        const apiResponse = await fetch('http://localhost:3000/products')
        return await apiResponse.json();
    }
}
