<script lang="ts">
	import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
	import ButtonLink from "$lib/components/ButtonLink.svelte";
	import Lars from "$lib/assets/headshots/lars-nilsson.webp";
	import { ExternalLink, Mail } from "lucide-svelte";
</script>

<svelte:head>
	<title>Contact Us | SalesSource</title>
	<meta
		name="description"
		content="Connect with Lars Nilsson and the SalesSource team. 25+ years helping B2B technology companies scale pipeline creation and GTM success."
	/>
	<meta
		name="keywords"
		content="contact us, sales, sales source, Lars Nilsson, sales development, GTM advisory"
	/>
	<meta property="og:title" content="Contact Us" />
	<meta
		property="og:description"
		content="Connect with Lars Nilsson and the SalesSource team. 25+ years helping B2B technology companies scale pipeline creation and GTM success."
	/>
	<meta property="og:url" content="https://salessource.com/contact-us" />
</svelte:head>

<GridBackgroundWrapper>
	<section class="content-md">
		<header class="mb-12 lg:mb-16">
			<h1 id="contact-us">Let's Talk</h1>
			<p class="text-subtitle">
				We're here to help B2B technology companies build scalable sales organizations. Reach
				out — we'd love to learn about your GTM goals.
			</p>
		</header>

		<div class="cta-card">
			<div class="cta-image">
				<img
					src={Lars}
					loading="lazy"
					alt="Lars Nilsson, Founder & CEO of SalesSource"
					width="4784"
					height="7175"
				/>
			</div>

			<div class="cta-content">
				<h2 class="text-h4 mt-0 mb-1">Lars Nilsson</h2>
				<p class="text-subtext text-secondary font-semibold mb-6">Founder & CEO</p>

				<p class="text-paragraph mb-8">
					With 25+ years scaling sales organizations at companies like Snowflake, Cloudera,
					and Xerox — and as the pioneer of account-based sales development — Lars has
					helped teams at every stage tackle their toughest GTM challenges. Whether you're
					building your first SDR team or optimizing an enterprise pipeline, he'd love to
					hear what you're working on.
				</p>

				<div class="flex flex-col sm:flex-row gap-4">
					<ButtonLink
						btnType="primary"
						btnText="Connect on LinkedIn"
						icon={ExternalLink}
						href="https://www.linkedin.com/in/lanilsson"
						target="_blank"
						rel="noopener noreferrer"
					/>
					<ButtonLink
						btnType="outlined"
						btnText="Email Us"
						icon={Mail}
						href="mailto:team@salessource.com"
					/>
				</div>
			</div>
		</div>
	</section>
</GridBackgroundWrapper>

<style lang="postcss">
	.cta-card {
		@apply grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 bg-bg-soft rounded-md shadow-sm p-6 lg:p-10;
	}

	.cta-image {
		@apply flex justify-center lg:justify-start;

		& img {
			@apply w-full max-w-[320px] rounded-xl;
		}
	}

	.cta-content {
		@apply lg:col-span-2 flex flex-col justify-center text-center lg:text-left;
	}
</style>
