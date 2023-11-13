class Computer {
    constructor(public ram: number, public hdd:number, public cpu:number) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    getRAM() {
        return this.ram;
    }

    getHDD() {
        return this.hdd;
    }

    getCPU() {
        return this.cpu;
    }

    getType() {
        return "Computer";
    }

    toString() {
        return `Type: ${this.getType()}, RAM: ${this.getRAM()}GB, HDD: ${this.getHDD()}GB, CPU: ${this.getCPU()}GHz`;
    }
}

class PC extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu);
    }

    getType() {
        return "PC";
    }
}


class Server extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu);
    }

    getType() {
        return "Server";
    }
}


class ComputerFactory {
    static createComputer(type, ram, hdd, cpu) {
        if (type.toLowerCase() === "pc") {
            return new PC(ram, hdd, cpu);
        } else if (type.toLowerCase() === "server") {
            return new Server(ram, hdd, cpu);
        } else {
            throw new Error("Tipo de computador desconhecido");
        }
    }
}


const pc = ComputerFactory.createComputer("PC", 8, 512, 3.4);
const server = ComputerFactory.createComputer("Server", 32, 1024, 2.8);

console.log(pc.toString());      
console.log(server.toString());  