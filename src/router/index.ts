import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue')
		},
		{
			path: '/concepts',
			name: 'concepts',
			component: () => import('../views/ConceptsView.vue'),
			redirect: '/concepts/intro',
			children: [
				{
					path: 'intro',
					name: 'concepts-intro',
					component: () => import('../views/concepts/SlapshotIntro.vue'),
					meta: {
						title: 'Introduction to Slapshot'
					}
				},
				{
					path: 'formats',
					name: 'formats',
					component: () => import('../views/concepts/FormatsConcept.vue'),
					meta: {
						title: 'Formats'
					}
				},
			],
		},
		{
			path: '/guides',
			name: 'guides',
			component: () => import('../views/GuidesView.vue')
		},
		{
			path: '/esports',
			name: 'esports',
			component: () => import('../views/EsportsView.vue'),
			redirect: '/esports/intro',
			children: [
				{
					path: 'intro',
					name: 'esports-intro',
					component: () => import('../views/esports/EsportsIntro.vue'),
					meta: {
						title: 'Esports in Slapshot'
					}
				},
				{
					path: 'regions',
					name: 'regions',
					component: () => import('../views/esports/EsportsRegions.vue'),
					meta: {
						title: 'Regions'
					}
				},
			],
		},
		{
			path: '/communities',
			name: 'communities',
			component: () => import('../views/CommunitiesView.vue'),
		},
	],
})

interface Route {
	title: string
	url: string
	key: string
}

export type { Route }
export default router
