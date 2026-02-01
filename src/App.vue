<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/academy/AppHeader.vue'
</script>

<template>
	<div class="h-screen [--header-height:calc(--spacing(14))]">
		<AppHeader />
		<RouterView />
	</div>
</template>
