<script lang="ts">
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Sparkles from '../atoms/Sparkles.svelte';
</script>

<section id="hero">
	<h1 class="hello">Stay healthy while having a great time!</h1>
	<p class="intro">
		Fitworld. The fitness application of the 21st century.
	</p>
	<div class="ctas">
		<Button color="secondary" href="/blog">
			Blog Updates
		</Button>
		<Sparkles>
			<Button color="primary" href="#sib-form-container">
				<EmailIcon slot="icon" />
				Join the waitlist
			</Button>
		</Sparkles>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 80px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			display: flex;
			flex-direction: column;
			margin-bottom: 15px;

			.left {
				text-align: left;
			}
			.right {
				text-align: right;
			}

			@include for-phone-only {
				display: none;
			}
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 20px;
			width: 100%;
		}
	}
</style>
