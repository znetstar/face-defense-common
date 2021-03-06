
/**
 * Represents a Face that will be used for detection.
 */
export default class Face {
    /**
     * 
     * @param id - Unqiue ID for the face.
     * @param name - Friendly name for the face.
     * @param image - An `Uint8Array` containing an image of the face.
     * @param autostart - If the face should be automatically loaded when the application starts.
     */
    constructor(public id: number, public name: string, public image: Uint8Array, public autostart : boolean = false) {

    }
}