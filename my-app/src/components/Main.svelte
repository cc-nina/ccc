<script>
    import Step from "./Step.svelte";

    import Profile from "./Profile.svelte";

    let steps = [
        {
            name: "Project1",
            icon: "fa-solid fa-marker",
            link:
                "https://www.google.com",
        },
        {
            name: "Project2",
            icon: "fa-solid fa-volume-high",
            link:
                "https://www.bing.com",
        },
        {
            name: "Project3",
            icon: "fa-solid fa-handshake-simple",
            link:
                "https://duckduckgo.com/",
        },
    ];

    let benefits = [
        {
            name: "Educate",
            description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos. ", 
            col: "text-[#EF5D60] poppins text-4xl sm:text-5xl font-semibold md:text-6xl",
        },
        {
            name: "Empower",
            description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos. ", 
            col: "text-[#EC4067] poppins text-4xl sm:text-5xl font-semibold md:text-6xl",
        },
        {
            name: "Exchange",
            description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos. ", 
            col: "text-[#A01A7D] poppins text-4xl sm:text-5xl font-semibold md:text-6xl",
        },
    ];

    let profiles = [
        {
            name: "Isabella Guo",
            role: "Founder/Executive Director",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Emily Han",
            role: "Head of Admin Affairs",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        }, 
        {
            name: "Devanga Dassanayake",
            role: "Social Affairs Department Head",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Jeremy Niu",
            role: "Social Affairs Coordinator",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        }, 
        {
            name: "Nafisa Chakera",
            role: "Social Affairs Coordinator",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Viona So",
            role: "Social Affairs Coordinator",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Emily Dong",
            role: "Publicity Department Head",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Zanobia Ahmed",
            role: "Graphic Design",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        }, 
        {
            name: "Sophie Jiang",
            role: "Graphic Design",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Lee",
            role: "Graphic Design",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Megan Zhao",
            role: "Photography and Media Coordinator",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Bhadra Thumpayil",
            role: "Exchange Sector Head",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Ananya Kolluru",
            role: "Exchange Sector Coordinator",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        }, 
        {
            name: "Hannah Chan",
            role: "Exchange Sector Coordinator",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Suey Li",
            role: "Educate Sector Head",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Yolanda Yu",
            role: "Educate Sector Coordinator",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        }, 
        {
            name: "Megan Lee",
            role: "Educate Sector Coordinator",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Anjali Pathmanathan",
            role: "Editor-in-Chief",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Rajan Sooknanan",
            role: "Editor",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Cindy Zhao",
            role: "Writer",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Alyssa Yan",
            role: "Writer",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Rishika Narang",
            role: "Empower Sector Head",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Olita Kong",
            role: "Empower Sector Coordinator",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        }, 
        {
            name: "Madelyn Young",
            role: "Empower Sector Coordinator",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
        {
            name: "Krisha Patel",
            role: "Empower Sector Coordinator",
            desc: "Lorem",
            pic: "images/team/headshot.png",
        },
    ]


</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! We're <span class="poppins text-[#F3DCCE]">FFLS</span>:
            </h2>
            <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
                The <span class="poppins italic  text-[#F3DCCE]">Future Female Leaders Society</span>.
            </h3>
            <p class="text-base sm:text-lg md:text-xl">
                Our <span class=" text-[#F3DCCE]"> mission</span> is to lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#contact">
                <button
                    class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-[#311847]"
                >
                    <div
                        class="absolute top-0 right-full w-full h-full bg-[#F3DCCE] opacity-100 group-hover:translate-x-full z-0 duration-200"
                    />
                    <h4 class="relative z-9">Get in touch &rarr;</h4>
                </button>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"images/profile.png"}
                alt="giant logo or related image"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div>
        <!-- <div  class="flex p-0.5 relative max-w-[700px] w-full mx-auto">
            <div
                class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
            >
                <div
                    class="bg-gradient-to-r absolute inset-[-20px]  from-violet-800 to-indigo-800 specialSpin"
                />
            </div>

            <img
                src={"images/zetane-engine.jpeg"}
                alt="Zetane Engine"
                class="w-full h-full object-cover z-[2]"
            />
        </div> -->
    </section>
    
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-[#F3DCCE] after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-[#F3DCCE] py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl playfair">
                A bit <span class="playfair text-[#F3DCCE]">about</span> our sectors.
            </h3>
        </div>
        
        

        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            <!--mission statement-->
            <div class="flex gap-6 sm:gap-8">

                <div class="flex flex-col gap-6 sm:gap-8">
                    <p>Mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission statement mission</p>
                </div>
            </div>
            <!--educate-->    
            <div class="flex gap-6 sm:gap-8">

                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl text-[#EF5D60] playfair">
                            {benefits[0].name}
                        </h3>
                        <p>{benefits[0].description}</p>
                    </div>
            </div>
            <!--empower-->
            <div class="flex gap-6 sm:gap-8">

                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl text-[#EC4067] playfair">
                            {benefits[1].name}
                        </h3>
                        <p>{benefits[1].description}</p>
                    </div>
            </div>
            <!--exchange-->
            <div class="flex gap-6 sm:gap-8">

                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl text-[#A01A7D] playfair">
                        {benefits[2].name}
                    </h3>
                    <p>{benefits[2].description}</p>
            </div>
        </div>
        </div>
    </section>
    <section
        id="team"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-[#F3DCCE] after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-[#F3DCCE] py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Who we are
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl playfair">
                More about our <span class="playfair text-[#F3DCCE]">team</span>.
            </h3>
        </div>
        <h5 class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            Our <span class="text-[#F3DCCE]">Team</span> 
        </h5>
       
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            {#each profiles as profile, index}
            <Profile profile={profiles[index]}>
            </Profile>
            {/each}
        </div>




    </section>
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-[#F3DCCE] after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-[#F3DCCE] py-4">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of our endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl playfair">
                
                Curious about our <span class="playfair text-[#F3DCCE]">projects</span>?
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus <strong
                        class="text-[#F3DCCE]"
                        >qui blanditiis praesentium voluptatum deleniti atque corrupti!</strong
                    > Uos dolores et quas molestias excepturi sint occaecati cupiditate non.
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus <strong
                        class="text-[#F3DCCE]"
                        >qui blanditiis praesentium voluptatum deleniti atque corrupti!</strong
                    > Uos dolores et quas molestias excepturi sint occaecati cupiditate non.
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus <strong
                        class="text-[#F3DCCE]"
                        >qui blanditiis praesentium voluptatum deleniti atque corrupti!</strong
                    > Uos dolores et quas molestias excepturi sint occaecati cupiditate non.
                </p>
            </Step>
        </div>
    </section>
</main>