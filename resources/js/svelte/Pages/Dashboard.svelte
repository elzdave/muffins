<script>
  import { inertia } from "@inertiajs/inertia-svelte";
  import Contact from "../Components/Contact.svelte";
  import { route } from "../../shared/utils/index";

  let people = [
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
      imgAlt: "a person's image",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "mailto:janecooper@example.com",
      phone: "https://wa.me",
    },
    {
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
      imgAlt: "a person's image",
      name: "Cody Fisher",
      title: "Lead Security Associate",
      role: "Admin",
      email: "mailto:codyfisher@example.com",
      phone: "https://wa.me",
    },
    {
      img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
      imgAlt: "a person's image",
      name: "Esther Howard",
      title: "Assurance Administrator",
      role: "Admin",
      email: "mailto:estherhoward@example.com",
      phone: "https://wa.me",
    },
    {
      img: "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
      imgAlt: "a person's image",
      name: "Jenny Wilson",
      title: "Chief Accountability Analyst",
      role: "Admin",
      email: "mailto:jennywilson@example.com",
      phone: "https://wa.me",
    },
    {
      img: "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
      imgAlt: "a person's image",
      name: "Kristin Watson",
      title: "Investor Data Orchestrator",
      role: "Admin",
      email: "mailto:kristinwatson@example.com",
      phone: "https://wa.me",
    },
    {
      img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
      imgAlt: "a person's image",
      name: "Cameron Williamson",
      title: "Product Infrastructure Executive",
      role: "Admin",
      email: "mailto:cameronwilliamson@example.com",
      phone: "https://wa.me",
    },
    {
      img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
      imgAlt: "a person's image",
      name: "Courtney Henry",
      title: "Investor Factors Associate",
      role: "Admin",
      email: "mailto:courtneyhenry@example.com",
      phone: "https://wa.me",
    },
    {
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
      imgAlt: "a person's image",
      name: "Theresa Webb",
      title: "Global Division Officer",
      role: "Admin",
      email: "mailto:theresawebb@example.com",
      phone: "https://wa.me",
    },
  ];
</script>

<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {#each people as person}
    <li
      class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <Contact {...person} />
    </li>
  {/each}
</ul>
