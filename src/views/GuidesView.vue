<script lang="ts" setup>
import VideoPreview from '@/components/academy/videos/VideoPreview.vue'
import { ref } from 'vue'

const tags = ['All', 'Positioning', 'Beginner', 'Setup', 'Teamplay']
const selectedTag = ref('All')
</script>

<template>
	<div class="min-h-screen bg-background">
		<div class="max-w-6xl mx-auto px-6 py-12">
			<div class="mb-6">
				<h1 class="text-4xl font-bold mb-4">Guides</h1>

				<!-- Tag Filter -->
				<div class="flex gap-2 flex-wrap">
					<button v-for="tag in tags" :key="tag" @click="selectedTag = tag" :class="[
						'px-3 py-1.5 text-sm font-medium rounded-full transition-colors cursor-pointer',
						selectedTag === tag
							? 'bg-primary text-primary-foreground'
							: 'bg-muted text-muted-foreground hover:bg-muted/80'
					]">
						{{ tag }}
					</button>
				</div>
			</div>

			<div class="space-y-8">
				<!-- Row 1 -->
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<VideoPreview />
					<VideoPreview />
					<VideoPreview />
				</div>

				<!-- Row 2 -->
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<VideoPreview />
					<VideoPreview />
					<VideoPreview />
				</div>

				<!-- Row 3 -->
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<VideoPreview />
					<VideoPreview />
					<VideoPreview />
				</div>

				<!-- Row 4 -->
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<VideoPreview />
					<VideoPreview />
					<VideoPreview />
				</div>
			</div>
		</div>
	</div>
</template>