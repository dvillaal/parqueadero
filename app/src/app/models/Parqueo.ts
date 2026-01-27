class Parqueo {
    id: number;
    vehiculo: Vehicle;
    horaIngreso: Date;
    horaSalida?: Date;

    constructor(id: number, vehiculo: Vehicle, horaIngreso: Date, horaSalida?: Date) {
        this.id = id;
        this.vehiculo = vehiculo;
        this.horaIngreso = horaIngreso;
        this.horaSalida = horaSalida;
    }
}
