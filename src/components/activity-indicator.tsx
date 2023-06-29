import clonedeep from "lodash.clonedeep";
import lottie, { AnimationItem } from "lottie-web";
import { createSignal, onCleanup, onMount } from "solid-js";
import animationData from "../assets/camera-aperture.json";

export const ActivityIndicator = () => {
	const [animationRef, setAnimationRef] = createSignal<AnimationItem | null>(
		null,
	);

	onCleanup(() => {
		// Cleanup code, stop the animation if necessary
		animationRef()?.destroy();
	});

	onMount(() => {
		const container = document.getElementById("container") as HTMLElement;
		const animation = lottie.loadAnimation({
			container,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: clonedeep(animationData),
		});

		animation.setSpeed(2.5);
		setAnimationRef(animation);
	});

	return <div id="container" class="w-56"></div>;
};
