<template>
    <div class="Formulario"> 
    <h1>Lista de Cotizaciones</h1>
<!-- Lista -->
      <div id="invoice" class="lista-coticaciones">
        <div class="invoice overflow-auto">
            <div style="min-width: 600px">
                <main>
                    <div class="toolbar hidden-print mb-4">
                        <div class="text-center">
                            <router-link to="/formulario_cotizacion" class="btn btn-primary mb-3 btn-cliente">
                              <i class="fa fa-file-pdf-o"></i>  Nuevo Cliente
                            </router-link> 
                        </div>
                    </div>
                    <table border="0" cellspacing="0" cellpadding="0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th class="text-left">CLIENTE</th>
                                <th class="text-right">DIRECCIÓN</th>
                                <th class="text-right">PRODUCTO</th>
                                <th class="text-right">CANTIDAD</th>
                                <th class="text-right">PRECIO UNIDAD</th>
                                <th class="text-right">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                               <td class="no">04</td>
                                <td class="text-left">
                                  Sara Contreras
                                </td>
                                <td class="text-left unit">
                                    Calle los Palmares 12, Los Guaricamos
                                </td>
                                <td class="qty">Cartón de Huevo</td>
                                <td class="total subtotal">2</td>
                                <td class="total">$100.00</td>
                                <td class="text-left d-flex justify-content-around">
                                    <router-link to="/formulario_cotizacion" class="btn btn-acciones btn-edit btn-info btn-white-link">Editar</router-link>
                                    <button class="btn btn-acciones btn-delete btn-danger">Eliminar</button>
                                    <router-link to="/generacion_cotizacion" class="btn btn-acciones btn-primary btn-white-link">Detalles</router-link>
                                </td>
                            </tr>
                            <tr>
                                <td class="no">04</td>
                                <td class="text-left">
                                    Sara Contreras
                                </td>
                                <td class="text-left unit">
                                    Calle los Palmares 12, Los Guaricamos
                                </td>
                                <td class="qty">Cartón de Huevo</td>
                                <td class="total subtotal">2</td>
                                <td class="total">$100.00</td>
                                <td class="text-left d-flex justify-content-around">
                                    <router-link to="/formulario_cotizacion" class="btn btn-acciones btn-edit btn-info btn-white-link">Editar</router-link>
                                    <button class="btn btn-acciones btn-delete btn-danger">Eliminar</button>
                                    <router-link to="/generacion_cotizacion" class="btn btn-acciones btn-primary btn-white-link">Detalles</router-link>
                                </td>
                            </tr>
                            <tr>
                                <td class="no">01</td>
                                <td class="text-left">
                                    Pedro Almonte
                                </td>
                                <td class="text-left unit">
                                    Zona Colonial, Santo Domingo
                                </td>
                                <td class="qty">Monitor LCD</td>
                                <td class="total subtotal">2</td>
                                <td class="total">$20000.00</td>
                                <td class="text-left d-flex justify-content-around">
                                    <router-link to="/formulario_cotizacion" class="btn btn-acciones btn-edit btn-info btn-white-link">Editar</router-link>
                                    <button class="btn btn-acciones btn-delete btn-danger">Eliminar</button>
                                    <router-link to="/generacion_cotizacion" class="btn btn-acciones btn-primary btn-white-link">Detalles</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
            <div></div>
        </div>
        </div> 
    </div>
</template>>