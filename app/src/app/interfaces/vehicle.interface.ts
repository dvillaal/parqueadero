export interface Vehicle {
  vehiculo : {
    placa: string;
    tipo: string;
  },
  horaIngreso: string;
  horaSalida: string | null;
}
