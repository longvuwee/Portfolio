<script>
// @ts-nocheck

    import Step from "./Step.svelte";

    let steps = [
        {name: 'Astral Appetite', icon: './icons/giving-icon.png', href: 'https://comet-cupboard.vercel.app'},
        {name: 'UTD Hangout', icon: './icons/friend-icon.png', href: 'https://www.figma.com/proto/RgkAsQHpK6W8qijngEyIG7/HangOut-App?type=design&t=8ZGACQQnzhRgfQhN-1&scaling=scale-down&page-id=0%3A1&node-id=3-8&starting-point-node-id=3%3A8&show-proto-sidebar=1&mode=design'},
        {name: '', icon: '', href: ''},
    ]

    let benefits = [
        {trait: 'A open minded person,', description: 'I listen to people '},
        {trait: 'Enthusiastic about coding,', description: ''},
        {trait: 'And a big gamer', description: 'In my downtime, I spend my time playing competive games that feeds into my competitive side. '}
    ]

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-smeilbold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span style="color: #82aeca" class="poppins">Long</span> Vu <br/>Software <span style="color: #82aeca;" class="poppins">Engineer</span>
            </h2>
            <p class="sm:text-lg md:text-xl">My <span style="color: #82aeca" class="poppins">favorite tech</span> include C++, Java, HTML, <br>TailwindCSS & Svelte
            </p>
            <a href="" target="_blank" class="blueShadow mx-auto lg:ml-0 sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-primary-dark cursor-pointer">
                <div class="absolute top-0 right-full w-full h-full bg-secondary opacity-20 group-hover:translate-x-full duration-200"/>
                <h4 class="relative">Get In Touch &rarr;</h4>
            </a>
        </div>
        <div class="relative grid place-items-center ">
            <img src={"images/profile1.png"} alt="Profile png" class=" max-h-[70vh] object-cover">
        </div>
    </section>
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-secondary">see</span> my work?</h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
            <Step step={steps[0]}>
                <p class="poppins">Astral Appetite is a recipe website designed to utilize foods within a donation pantry at UTD. Created with <span class="poppins text-secondary">Sveltekit & TailwindCSS</span>. Sveltekit is a Javascript framework.</p>
            </Step>
            <Step step={steps[1]}>
                <p class="poppins">UTD Hangout is a moblie application made to connect students at universities through a matching. Designed utilizing <span class="poppins text-secondary">Figma.</span></p>
            </Step>
        </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-secondary after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-secondary py-4">

            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-secondary">about </span>me.</h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p class="poppins text-4xl sm:text-5xl md:text-6xl text-black">0{index+1}</p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">{benefit.trait}</h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <p class="mx-auto xs:text-xl sm:text-2xl md:text-3xl">I'm <span class="poppins text-secondary">longing</span> to know more about you too </p>
    </section>
</main>