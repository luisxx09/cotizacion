<template>
  <div id="app">
    <div id="nav">
      <router-link to="/formulario_cotizacion">Formulario de Cotizacion &nbsp;</router-link>
      <router-link to="/lista_cotizacion">Lista de Cotizacion &nbsp;</router-link>
      <router-link to="/generacion_cotizacion">Generacion de Cotizacion &nbsp;</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap/dist/css/bootstrap-grid.css';
@import '~bootstrap/dist/css/bootstrap-reboot.css';

@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import './assets/css/styles.css';
</style>
