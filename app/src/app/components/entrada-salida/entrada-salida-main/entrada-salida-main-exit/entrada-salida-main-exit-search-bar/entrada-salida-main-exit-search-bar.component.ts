import {Component, computed, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AutoComplete} from 'primeng/autocomplete';
import {ParkService} from '@services/park.service';
import {Vehicle} from '../../../../../interfaces/vehicle.interface';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-entrada-salida-main-exit-search-bar',
  imports: [
    FormsModule,
    AutoComplete
  ],
  templateUrl: './entrada-salida-main-exit-search-bar.component.html',
})

export class EntradaSalidaMainExitSearchBarComponent {
  parkService = inject(ParkService);
  vehicles = this.parkService.vehicles;

  placas = computed(() =>
    this.vehicles().map(v => v.vehiculo.placa)
  )

  ngOnInit() {
    console.log(this.placas());
  }

  selectedPlaca: string | undefined;
  filteredPlacas: string[] = [];

  filterVehicles(event: AutoCompleteCompleteEvent) {
    console.log(this.placas())
    let filtered: string[] = [];
    let query = event.query;

    for (let i = 0; i < (this.placas()).length; i++) {
      let placa = (this.placas())[i];
      if (placa.toUpperCase().indexOf(query.toUpperCase()) == 0) {
        filtered.push(placa);
      }
    }
    this.filteredPlacas = filtered;
  }

  onSelect(value: string) {
    console.log('Selected value:', value);
  }

}
