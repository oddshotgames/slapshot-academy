<script lang="ts" setup>
import AppSidebar from "@/components/academy/AppSidebar.vue"
import { SidebarInset } from "@/components/ui/sidebar"
</script>

<template>
	<AppSidebar title="Concepts" />
	<SidebarInset>
		<div class="flex flex-1 flex-col gap-4 p-4">
			<h1 class="m-8 text-3xl font-bold">Concepts</h1>
			<p class="mx-8 mb-4 text-lg text-muted-foreground">
				This is the concepts view.
			</p>
		</div>
	</SidebarInset>
</template>