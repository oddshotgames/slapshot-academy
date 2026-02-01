<script lang="ts" setup>
import {
	SidebarInset,
} from "@/components/ui/sidebar"
import AppSidebar from "@/components/academy/AppSidebar.vue"
import {
	SidebarProvider,
} from "@/components/ui/sidebar"
</script>

<template>
	<SidebarProvider>
		<AppSidebar title="Esports" variant="inset" />
		<SidebarInset>
			<main>
				<h1 class="m-8 text-3xl font-bold">Esports</h1>
				<p class="mx-8 mb-4 text-lg text-muted-foreground">
					This is the esports view.
				</p>
			</main>
		</SidebarInset>
	</SidebarProvider>
</template>