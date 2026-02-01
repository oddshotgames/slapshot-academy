<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar"

import {
	Sidebar,
	SidebarContent,
} from "@/components/ui/sidebar"

interface AppSidebarProps extends SidebarProps {
	title?: string
}

const props = defineProps<AppSidebarProps>()
</script>

<template>
	<Sidebar class="top-(--header-height) h-[calc(100svh-var(--header-height))]!" v-bind="props">
		<SidebarContent>
			<slot />
		</SidebarContent>
	</Sidebar>
</template>
