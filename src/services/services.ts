class MessageSercice {

    processMessageA(data: any): void {
        console.log("Porcessing message A", data);
    }

    processMessageB(data: any): void {
        console.log("Porcessing message B", data);
    }

}

export default new MessageSercice();