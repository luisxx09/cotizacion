<template>

  <div class="Proyecto">
    <h2>Detalle de Cotizacion</h2>
    <!-- fecha -->
    <form>
    Fecha
    <input type="datetime-local"/>
    </form>
    <!-- seleccion de cliente -->

    <!-- tabla de productos -->
    <div id="invoice">
   <h2> Productos de:</h2>
    <h3 class="client-name">Pedro Almonte</h3>
    <div class="invoice overflow-auto">
    
        <div style="min-width: 600px">
            <main>
                <table border="0" cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th class="text-left">NOMBRE</th>
                            <th class="text-right">DETALLE</th>
                            <th class="text-right">CANTIDAD</th>
                            <th class="text-right">PRECIO UNIDAD</th>
                            <th class="text-right">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="no">04</td>
                            <td class="text-left">
                                Youtube channel
                            </td>
                            <td class="text-left unit">
                                 <a target="_blank" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                                   Useful videos
                               </a> 
                               to improve your Javascript skills. Subscribe and stay tuned :
                            </td>
                            <td class="qty">100</td>
                            <td class="total subtotal">$100.00</td>
                            <td class="total">$100.00</td>
                        </tr>
                        <tr>
                            <td class="no">01</td>
                           <td class="text-left">
                                Youtube channel
                            </td>
                            <td class="text-left unit">
                                 <a target="_blank" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                                   Useful videos
                               </a> 
                               to improve your Javascript skills. Subscribe and stay tuned :
                            </td>
                            <td class="qty">100</td>
                            <td class="total subtotal">$100.00</td>
                            <td class="total">$100.00</td>
                        </tr>
                        <tr>
                            <td class="no">02</td>
                            <td class="text-left">
                                Youtube channel
                            </td>
                            <td class="text-left unit">
                                 <a target="_blank" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                                   Useful videos
                               </a> 
                               to improve your Javascript skills. Subscribe and stay tuned :
                            </td>
                            <td class="qty">100</td>
                            <td class="total subtotal">$100.00</td>
                            <td class="total">$100.00</td>
                        </tr>
                        <tr>
                            <td class="no">03</td>
                             <td class="text-left">
                                Youtube channel
                            </td>
                            <td class="text-left unit">
                                 <a target="_blank" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                                   Useful videos
                               </a> 
                               to improve your Javascript skills. Subscribe and stay tuned :
                            </td>
                            <td class="qty">100</td>
                            <td class="total subtotal">$100.00</td>
                            <td class="total">$100.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3"></td>
                            <td colspan="2">SUBTOTAL</td>
                            <td>$5,200.00</td>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td colspan="2">TAX 25%</td>
                            <td>$1,300.00</td>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td colspan="2">GRAND TOTAL</td>
                            <td>$6,500.00</td>
                        </tr>
                    </tfoot>
                </table>

                <div class="toolbar hidden-print border-top pt-3">
                    <div class="text-right">
                        <button class="btn btn-info"><i class="fa fa-file-pdf-o"></i> Imprimir</button>
                    </div>
            </div>
            </main>
        </div>
        <div></div>
    </div>
    </div> 
    
    </div>  
</template>
<!-- JS -->
<script>
export default {
    methods: {
     fecha() {
         var date = new Date()
     }
    }
}
</script>
