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
			path: '/esports',
			name: 'esports',
			component: () => import('../views/EsportsView.vue')
		},
		{
			path: '/communities',
			name: 'communities',
			component: () => import('../views/CommunitiesView.vue')
		},
		{
			path: '/guides',
			name: 'guides',
			component: () => import('../views/GuidesView.vue')
		},
		{
			path: '/concepts',
			name: 'concepts',
			component: () => import('../views/ConceptsView.vue')
		}
	],
})

export default router
