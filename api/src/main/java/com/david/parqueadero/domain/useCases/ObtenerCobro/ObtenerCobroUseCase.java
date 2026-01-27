package com.david.parqueadero.domain.useCases.ObtenerCobro;

import com.david.parqueadero.domain.model.Parqueo;
import com.david.parqueadero.domain.useCases.RegistrarSalida.CalcularCobroUseCase;
import com.david.parqueadero.domain.useCases.RegistrarSalida.CalcularTiempoUseCase;
import com.david.parqueadero.domain.useCases.RegistrarSalida.VerificarVehiculoActivoUseCase;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Component
public class ObtenerCobroUseCase {
    private final VerificarVehiculoActivoUseCase verificarVehiculoActivoUseCase;
    private final CalcularTiempoUseCase calcularTiempoUseCase;
    private final CalcularCobroUseCase calcularCobroUseCase;

    public ObtenerCobroUseCase(VerificarVehiculoActivoUseCase verificarVehiculoActivoUseCase, CalcularTiempoUseCase calcularTiempoUseCase, CalcularCobroUseCase calcularCobroUseCase) {
        this.verificarVehiculoActivoUseCase = verificarVehiculoActivoUseCase;
        this.calcularTiempoUseCase = calcularTiempoUseCase;
        this.calcularCobroUseCase = calcularCobroUseCase;
    }

    public BigDecimal obtenerCobro(String placa) {
        Parqueo parqueoActivo = verificarVehiculoActivoUseCase.verificarVehiculoActivo(placa);
        long horasEstacionamiento = calcularTiempoUseCase.calcularTiempo(parqueoActivo.getHoraIngreso(), LocalDateTime.now());
        return calcularCobroUseCase.calcularCobro(parqueoActivo, horasEstacionamiento);
    }
}
