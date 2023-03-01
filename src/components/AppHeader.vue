<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <div class="wrapper-header">
      <nav class="header__nav-menu">
        <ul class="nav-menu">
          <li class="nav-menu-item">
            <RouterLink to="/">Головна</RouterLink>
          </li>
          <li class="nav-menu-item">
            <RouterLink to="/franyk">Івано-Франківськ</RouterLink>
          </li>
          <li class="nav-menu-item">
            <RouterLink to="/сherkasy">Черкаси</RouterLink>
          </li>
          <li class="nav-menu-item">
            <RouterLink to="/kyiv">Київ</RouterLink>
          </li>
          <li class="nav-menu-item">
            <RouterLink to="/lviv">Львів</RouterLink>
          </li>
          <li class="nav-menu-item">
            <RouterLink to="/odesa">Одеса</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
