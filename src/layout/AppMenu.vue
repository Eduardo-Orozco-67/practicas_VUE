<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'UI Components',
        items: [
            { label: 'RFC', icon: 'pi pi-fw pi-check-square', to: '/uikit/rfc'},
            { label: 'Punto de venta', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
            { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
            { label: 'Consumo de Api', icon: 'pi pi-fw pi-id-card', to: '/uikit/api' },
            { label: 'Consumo de Api 2', icon: 'pi pi-fw pi-id-card', to: '/uikit/api2' },
            { label: 'Graficas', icon: 'pi pi-fw pi-id-card', to: '/uikit/graficas' },
            { label: 'chat', icon: 'pi pi-fw pi-id-card', to: '/uikit/chat' },
        ]
    },
    
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <li>
        
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>
