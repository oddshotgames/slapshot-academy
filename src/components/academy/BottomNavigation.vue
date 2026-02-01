<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import type { NavigationRoute } from '@/composables/useRouteNavigation'

defineProps<{
	previousRoute: NavigationRoute | null
	nextRoute: NavigationRoute | null
}>()
</script>

<template>
	<div class="absolute bottom-0 left-0 right-0 border-t bottom-nav z-10">
		<nav class="w-4xl mx-auto py-4 px-6 flex justify-between items-center">
			<div class="flex-1">
				<RouterLink v-if="previousRoute" :to="previousRoute.url"
					class="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-white/20 transition-colors">
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
					{{ previousRoute.title }}
				</RouterLink>
			</div>

			<div class="flex-1 flex justify-end">
				<RouterLink v-if="nextRoute" :to="nextRoute.url"
					class="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-white/20 transition-colors">
					{{ nextRoute.title }}
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</RouterLink>
			</div>
		</nav>
	</div>
</template>

<style scoped>
.bottom-nav {
	border-color: var(--color-sidebar);
}
</style>