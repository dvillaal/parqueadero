import {Component, computed, inject, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AutoComplete} from 'primeng/autocomplete';
import {ParkService} from '@services/park.service';
import {ParkStoreService} from '@services/park-store.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-exit-search-bar',
  imports: [
    FormsModule,
    AutoComplete
  ],
  templateUrl: './exit-search-bar.component.html',
})

export class ExitSearchBarComponent {
  parkService = inject(ParkService);
  parkStoreService = inject(ParkStoreService);

  vehicles = this.parkService.vehicles;

  placas = computed(() =>
    this.vehicles().map(v => v.vehiculo.placa)
  )

  selectedPlaca = '';
  filteredPlacas: string[] = [];

  filterVehicles(event: AutoCompleteCompleteEvent) {
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

  onSelect(selectedPlaca: string) {
    const vehicle = this.vehicles().find(v => v.vehiculo.placa === selectedPlaca) ?? null;
    this.parkStoreService.setSelectedVehicle(vehicle);
    this.parkService.getPaymentAmount(selectedPlaca).subscribe(res => {
      this.parkStoreService.setPaymentAmount(res);
    })
  }

}
