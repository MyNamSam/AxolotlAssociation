import React from "react";

export default function Facts() {
  const imgFacts = [
    {
      image:
        "https://images.pexels.com/photos/8838034/pexels-photo-8838034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Although referred to as the \"Mexican walking fish,\" axolotls are amphibians that belong to the Ambystomatidae family of salamanders, not fish.",
    },
    {
      image:
        "https://images.pexels.com/photos/19252036/pexels-photo-19252036/free-photo-of-close-up-of-an-axolotl-in-a-aquarium.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Axolotls are indigenous to Mexico's lake complex of Xochimilco and Chalco, however Lake Chalco no longer exists. Because to habitat loss, pollution, and invasive species, the majority of the current population lives in captivity.",
    },
    {
      image:
        "https://images.pexels.com/photos/10424379/pexels-photo-10424379.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Axolotls are well known for their extraordinary ability for regeneration. They are the focus of much scientific study because they can regenerate sections of their brains, hearts, spinal cords, and limbs without leaving scars.",
    },
    {
      image:
        "https://images.pexels.com/photos/18145368/pexels-photo-18145368/free-photo-of-purple-tropical-axolotl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "In their natural habitats, axolotls can be brown, black, or albino (white with pink or red gills). Additionally, distinct color variants including leucistic (pale with black eyes), golden, and melanoid have been produced through selective breeding.",
    },
  ];

  return (
    <div className="bg-slate-200 pb-2">
      <h2 className="text-2xl font-semibold ml-1">Facts About the Axolotls</h2>
      <p className="text-gray-800 mb-2">
        A paedomorphic salamander, the axolotl (Ambystoma mexicanum) is aquatic
        and gilled all its life. It does not change form like other salamanders
        do, and it keeps its juvenile traits until adulthood. Located in Mexico
        City&apos;s Xochimilco Lake, axolotls are a severely endangered species. They
        can have a variety of colors and feature a long tail, flat head, and
        limbs that resemble lizards. Here are some more interesting facts about
        these amazing amphibians:
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {imgFacts.map((fact, index) => (
          <div
            key={index}
            style={{
              border: "3px solid #37762c",
              borderRadius: "5px",
              padding: "10px",
              maxWidth: "300px",
              textAlign: "center",
              boxShadow: "1px 5px 10px #37762c",
            }}
          >
            <img
              src={fact.image}
              alt={`Axolotl fact ${index + 1}`}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p style={{ marginTop: "10px", color: "dark gray" }}>
              {fact.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
