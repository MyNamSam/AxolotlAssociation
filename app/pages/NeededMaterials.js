import React from "react";

export default function NeededMaterials() {
  return (
    <div className="bg-slate-200">
      <h2 className="text-2xl font-semibold ml-1">Needed Materials</h2>
      <section>
        <h3 className="text-xl underline ml-1">What Do I Need?</h3>
        <p className="text-gray-800 mb-2">
          Axolotls require specialized equipment and supplies for proper care
          and conservation. Having the proper tools guarantees the safety and
          wellbeing of these unusual animals, whether you're establishing an
          axolotl habitat or supporting conservation initiatives.
        </p>
      </section>
      <img
          src="https://images.pexels.com/photos/8837942/pexels-photo-8837942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Axolotl_Header"
          className="w-96 flex m-auto h-auto pt-2 pb-2"
        />
      <section>
        <h3 className="text-xl underline ml-1">Habitat Setup</h3>
        <ul className="text-gray-800 mb-2">
          <li>
            <strong>- Tank:</strong> A 20-gallon tank or more to give enough
            room for swimming.
          </li>
          <li>
            <strong>- Filtration System:</strong> A gentle filter to maintain
            the water's purity without producing significant currents.
          </li>
          <li>
            <strong>- Substrate:</strong> Use bare-bottom or fine sand to
            prevent eating hazards.
          </li>
          <li>
            <strong>- Hiding Spots:</strong> Ornaments, plants, and caves to
            make the space comfortable.
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-xl underline ml-1">Food and Nutrition</h3>
        <ul className="text-gray-800 mb-2">
          <li>
            <strong>- Pellets:</strong> High-quality axolotl pellets as an
            essential food.
          </li>
          <li>
            <strong>- Live Food:</strong> For extra nutrition, try brine
            shrimp, earthworms, or bloodworms.
          </li>
          <li>
            <strong>- Frozen Food:</strong> Frozen bloodworms that are both
            convenient and nourishing.
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-xl underline ml-1">Maintenance Tools</h3>
        <ul className="text-gray-800 mb-2">
          <li>
            <strong>- Water Test Kit:</strong> Always keep an eye on water's pH,
            ammonia, and nitrate levels.
          </li>
          <li>
            <strong>- Water Conditioner:</strong> Eliminates dangerous
            substances from tap water, such as chlorine.
          </li>
          <li>
            <strong>- Gravel Vacuum:</strong> For routine cleaning of the tank
            substrate.
          </li>
          <li>
            <strong>- Net:</strong> Use a soft net to handle axolotls safely.
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-xl underline ml-1">Where to Get Materials</h3>
        <p className="text-gray-800 mb-2">
          These supplies are available at your neighborhood pet store or from
          trusted online vendors such as:{" "}
        </p>
        <ul className="text-rose-800 font-bold">
          <li className=" hover:text-rose-950">
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Amazon
            </a>
          </li>
          <li className=" hover:text-rose-950">
            <a
              href="https://www.petland.ca/search?q=axolotl"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Petland
            </a>
          </li>
          <li className=" hover:text-rose-950">
            <a
              href="https://www.axolotlplanet.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Axolotl Planet
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
