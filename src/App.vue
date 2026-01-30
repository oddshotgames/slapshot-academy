<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/academy/AppHeader.vue'
import {
	SidebarProvider,
} from "@/components/ui/sidebar"
</script>

<template>
	<div class="h-screen overflow-hidden [--header-height:calc(--spacing(14))]">
		<SidebarProvider class="flex flex-col h-full">
			<AppHeader />
			<div class="w-full">
				<RouterView />
			</div>
		</SidebarProvider>
	</div>
</template>
