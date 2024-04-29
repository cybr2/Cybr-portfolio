import Image from "next/image"
import { myImg1, myImg, myImg2 } from "@/public"


function Projects() {
    return (
        <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 section " id="projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">projects</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image src={myImg2} alt="user image" priority className="h-3/4 w-3/4 min-sm:h-100 min-sm:w-100 rounded-lg bg-contain" />
                <div className="mt-10">
                    Project Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quasi perspiciatis repudiandae ipsam aut facere unde adipisci sequi ad quas corporis cum voluptatem, velit veritatis, repellendus magnam? Modi, molestias dolorum.
                    In voluptatibus necessitatibus ad vel maxime commodi natus laboriosam, et corporis ullam eveniet ratione adipisci molestias possimus dignissimos? Perspiciatis optio odit vitae eveniet explicabo excepturi illo dolore amet tenetur sequi.
                    Voluptatem consequuntur tenetur aliquid odio porro repellat. Iusto nisi necessitatibus animi quos similique natus voluptatum unde saepe quibusdam, minima, dolorem illo tenetur. Quam, molestias amet! Culpa odit placeat soluta fugiat.
                    Doloremque, nam nulla. Veniam pariatur magnam debitis odio aliquid facilis illo ea atque at magni blanditiis voluptas soluta, deleniti neque sit corporis, inventore labore rerum accusamus eligendi possimus veritatis fugit?
                </div>
            </div>
        </section>

    )
}

export default Projects
