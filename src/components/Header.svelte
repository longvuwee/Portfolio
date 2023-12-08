<script>
    export let y;

    let tabs = [
        {name: "Projects", link: "#projects"},
        {name: "About Me", link: "#about"},
    ];
</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border broder-solid ' + (y>0 ? ' py-4 bg-primary border-primary-border' : ' py-6 bg-transparent border-transparent')}>
    <h1 class="font-medium">
        <b class="font-bold poppins">Long</b> Vu
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:text-secondary">
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
    <a href="#" target="_blank" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
        <div class="absolute top-0 right-full w-full h-full bg-secondary opacity-20 group-hover:translate-x-full z-0 duration-200"/>
        <h4 class="relative z-9">Get In Touch</h4>
    </a>
</header>