<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar"

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar"

interface AppSidebarProps extends SidebarProps {
	title?: string
}

const props = withDefaults(defineProps<AppSidebarProps>(), {
	title: "Menu",
})
</script>

<template>
	<Sidebar class="top-(--header-height) h-[calc(100svh-var(--header-height))]!" v-bind="props">
		<SidebarHeader>
			<h1 class="font-bold">{{ title }}</h1>
		</SidebarHeader>
		<SidebarContent>
		</SidebarContent>
		<SidebarFooter>
		</SidebarFooter>
	</Sidebar>
</template>
