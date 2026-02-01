<script lang="ts" setup>
import VideoPreview from '@/components/academy/videos/VideoPreview.vue'
import videoTags from '@/data/videos/video-tags'
import videos from '@/data/videos/videos'
import { ref, computed } from 'vue'

const tags = Object.values(videoTags);
tags.unshift('All');

const selectedTag = ref('All')

const relevantVideos = computed(() => {
	if (selectedTag.value === 'All') {
		return videos
	}
	return videos.filter(video => video.tags.includes(selectedTag.value))
})
</script>

<template>
	<main class="flex flex-col h-full">
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
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<VideoPreview v-for="video in relevantVideos" :key="video.source" :video="video" />
					</div>
				</div>
			</div>
		</div>
	</main>
</template>