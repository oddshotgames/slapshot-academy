<script lang="ts" setup>
import {
	SidebarInset,
	SidebarProvider,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarGroupContent,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarMenu,
} from "@/components/ui/sidebar"
import AppSidebar from "@/components/academy/AppSidebar.vue"
import BottomNavigation from "@/components/academy/BottomNavigation.vue"
import { RouterLink, RouterView } from "vue-router"
import { useRouteNavigation } from "@/composables/useRouteNavigation"

const { routes, isActiveRoute, previousRoute, nextRoute } = useRouteNavigation('concepts')
</script>

<template>
	<SidebarProvider>
		<AppSidebar variant="inset">
			<SidebarGroup>
				<SidebarGroupLabel>Getting Started</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem v-for="route in routes" :key="route.key">
							<SidebarMenuButton as-child :is-active="isActiveRoute(route.url)">
								<RouterLink :to="route.url">
									<span>{{ route.title }}</span>
								</RouterLink>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</AppSidebar>
		<SidebarInset class="relative">
			<main class="w-4xl mx-auto pb-20">
				<RouterView />
			</main>
			<BottomNavigation :previous-route="previousRoute" :next-route="nextRoute" />
		</SidebarInset>
	</SidebarProvider>
</template>
