<script>

    /**
   * @type {number}
   */
    export let y;

    let tabs = [
        {name: "Projects", link: "#projects"},
        {name: "About Me", link: "#about"},
    ];

    function goTop(){
        document.body.scrollIntoView()
    }
</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border ' + (y>0 ? ' py-4 bg-primary border-primary border-b-primary-dark' : ' py-6 bg-transparent border-transparent')}>
    <button on:click={goTop}>
        <h1 class="font-medium">
            <p class="font-bold poppins text-lg">Long Vu</p>
        </h1>
    </button>
    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:text-secondary">
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
    <a href="#footer" target="_self" class="relative overflow-hidden px-4 py-2 group rounded-full bg-white text-primary-dark">
        <div class="absolute top-0 right-full w-full h-full bg-secondary opacity-20 group-hover:translate-x-full z-0 duration-200"/>
        <h4 class="relative z-9">Get In Touch</h4>
    </a>
</header>