<script>
    /**
   * @type {{ href: any; icon: any; name: any; year: any;}}
   */
     export let step;
</script>

<a href={step.href} target="_blank" class="p-4 xs:m-4 sm:m-6 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-secondary text-center group cursor-pointer hover:border-primary-dark duration-200">
    <div class="bg-primary grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration 200">
        <img src={step.icon} alt="">
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{step.name}</h3>
    <h1 class="">{step.year}</h1>
    <slot />
    <div class="flex flex-1 justify-between gap-4 items-center">
        <div class="ml-auto cursor-pointer hover:text-primary-dark duration-200 relative after:absolute after:top-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
            <p class="relative z-4">Check It out &rarr;</p>
        </div>
    </div>
</a>