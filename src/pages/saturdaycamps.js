import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const SaturdayCamps = () => {
    return (
        <div>
        <Header />
        <div>
      <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base">
        <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
          Traditional Day Camp
        </p>
        <p>
          Campers are divided into grade-level groups. Activities could include
          climbing wall, field games, big swing, hiking trails, archery,
          slingshots, crafts, games, snack shack, hayride, giant bounce pillow,
          petting farm, GaGa Ball, loud singing, funny skits, and memorable
          Bible stories.
        </p>
        <p>
          Purchase camp&nbsp;
          <a
            href="https://www.royalridges.upcsites.org/saturday-day-camp.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-200 uppercase text-lg mt-4"
          >
            here
          </a>
        </p>
        <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
          Day Horse Camp
        </p>
        <p>
          Campers have the opportunity to take riding lessons from our skilled
          instructors, learn exciting information in horse science, grow
          valuable skills like grooming and saddling, and make friends along the
          way!
        </p>
        <p>
          Purchase camp&nbsp;
          <a
            href="https://www.royalridges.upcsites.org/saturday-day-camp.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-200 uppercase text-lg mt-4"
          >
            here
          </a>
        </p>
        <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
          Paintball Camp
        </p>
        <p>
          Campers get to learn and play the extreme sport of Paintball. In the
          morning, campers learn the finer points of the game while fine-tuning
          their skills. Team building activities help teach communication skills
          while we grow our character through a Bible Study. The last three
          hours of the day are game-time, where it is time to sling paint!
        </p>
        <p>
          Purchase camp&nbsp;
          <a
            href="https://www.royalridges.upcsites.org/saturday-day-camp.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-200 uppercase text-lg mt-4"
          >
            here
          </a>
        </p>
      </div>
    </div>
    <Footer />
        </div>
    );
}

export default SaturdayCamps;