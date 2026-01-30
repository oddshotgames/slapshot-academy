<script lang="ts" setup>
import {
	SidebarInset,
} from "@/components/ui/sidebar"
import AppSidebar from "@/components/academy/AppSidebar.vue"
</script>

<template>
	<AppSidebar title="Esports" />
	<SidebarInset>
		<div class="flex flex-col">
			<main class="flex flex-1 flex-col">
				<h1 class="m-8 text-3xl font-bold">Esports</h1>
				<p class="mx-8 mb-4 text-lg text-muted-foreground">
					This is the esports view.
				</p>
			</main>
		</div>
	</SidebarInset>
</template>