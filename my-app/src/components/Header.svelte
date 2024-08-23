<script>
    export let y;

    export let tabs = [
        { name: "Projects ", link: "#projects" },
        { name: "About", link: "#about" },
        { name: "Blog", link: "https://medium.com/@futurefemaleleaderssociety" },
    ];
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-[#311847] border-[#F3DCCE]"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="font-medium">
        <b class="font-bold arimo">Future Female Leaders Society</b>
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a
                href={tab.link}
                class="duration-200 hover:text-[#F3DCCE]"
                target={index === 2 ? "_blank" : ""}
            >
                <p>{tab.name}</p>
            </a>
        {/each}
        <!-- <button
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-violet-600 text-white"
        >
            <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 class="relative z-9">Login</h4>
        </button> -->
        <a href="#contact">
            <button
                class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-[#311847]"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-[#F3DCCE] opacity-100 group-hover:translate-x-full z-0 duration-200"
                />
                <h4 class="relative z-9">Get in touch</h4>
            </button>
        </a>
    </div>
</header>