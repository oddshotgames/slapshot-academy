<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'


import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
const route = useRoute()
</script>

<template>
	<header class="header-gradient sticky top-0 z-50 flex w-full items-center">
		<div class="flex h-(--header-height) w-full items-center gap-2 px-4">
			<RouterLink to="/">
				<Button variant="ghost" class="px-8 cursor-pointer nav-button">
					<img src="/trainer-buddy.png" alt="Slapshot Academy" class="h-6 w-auto" />
					<span class="font-bold">Slapshot Academy</span>
				</Button>
			</RouterLink>
			<Separator orientation="vertical" class="mx-2 h-4" />

			<div class="w-full flex">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink as-child :class="navigationMenuTriggerStyle()" class="nav-button"
								:active="route.path.startsWith('/concepts')">
								<RouterLink to="/concepts">Game Concepts</RouterLink>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink as-child :class="navigationMenuTriggerStyle()" class="nav-button"
								:active="route.path.startsWith('/guides')">
								<RouterLink to="/guides">Guides</RouterLink>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink as-child :class="navigationMenuTriggerStyle()" class="nav-button"
								:active="route.path.startsWith('/esports')">
								<RouterLink to="/esports">Esports</RouterLink>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink as-child :class="navigationMenuTriggerStyle()" class="nav-button"
								:active="route.path.startsWith('/communities')">
								<RouterLink to="/communities">Communities</RouterLink>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	</header>
</template>

<style scoped>
.header-gradient {
	background: linear-gradient(to top, var(--primary), var(--primary-to));
}

.nav-button {
	background-color: transparent;
}

.nav-button:hover {
	background-color: #ffffff17;
}

.nav-button.router-link-active {
	background-color: #ffffff2d;
}
</style>
