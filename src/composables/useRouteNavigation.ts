import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export interface NavigationRoute {
	title: string
	url: string
	key: string
}

export function useRouteNavigation(routeName: string) {
	const router = useRouter()
	const route = useRoute()

	const routes = computed(() => {
		const parentRoute = router.getRoutes().find(route => route.name === routeName)
		return parentRoute?.children?.map(child => ({
			title: (child.meta?.title as string) || (child.name as string) || 'Untitled',
			url: `/${routeName}/${child.path}`,
			key: (child.name as string) || child.path
		})) || []
	})

	const isActiveRoute = (routeUrl: string) => {
		return route.path === routeUrl
	}

	const currentRouteIndex = computed(() => {
		return routes.value.findIndex(r => isActiveRoute(r.url))
	})

	const previousRoute = computed((): NavigationRoute | null => {
		const index = currentRouteIndex.value
		return index > 0 ? routes.value[index - 1] ?? null : null
	})

	const nextRoute = computed((): NavigationRoute | null => {
		const index = currentRouteIndex.value
		return index >= 0 && index < routes.value.length - 1 ? routes.value[index + 1] ?? null : null
	})

	return {
		routes,
		isActiveRoute,
		currentRouteIndex,
		previousRoute,
		nextRoute
	}
}