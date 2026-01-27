package com.david.parqueadero.domain.useCases.RegistrarSalida;

import com.david.parqueadero.domain.model.Parqueo;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Component
public class CalcularTiempoUseCase {
    public long calcularTiempo(LocalDateTime horaIngreso, LocalDateTime horaSalida) {
        return ChronoUnit.HOURS.between(horaIngreso, horaSalida);
    }
}
