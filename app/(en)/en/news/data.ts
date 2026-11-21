import { articles as original } from "../../../news/data";

type Translation = {
  title: string;
  subtitle?: string;
  category: string;
  imageAlt: string;
  excerpt: string;
  sections: [string, string][];
  source: string;
};

const translations: Record<string, Translation> = {
  "remont-otverstiya-ppr-truby": {
    title: "How to repair a polypropylene pipe you accidentally drilled through",
    subtitle: "Repairing a pipe in a hard-to-reach spot",
    category: "Renovation in practice",
    imageAlt: "Diagram of a polypropylene repair pin and heating attachment",
    excerpt: "How a repair kit seals an accidental drill hole in a PP-R pipe, and when this repair is suitable.",
    sections: [
      ["What the tool does", "Some polypropylene pipes can be repaired locally using a dedicated heating attachment and a polypropylene repair pin. The joint is made by heat-fusing compatible material, rather than by applying adhesive or sealant."],
      ["How the kit works", "The metal attachment fits onto a polypropylene pipe fusion tool. It heats the area around the hole and the repair pin according to the kit instructions. Once the fused surfaces have cooled, the protruding part of the pin is trimmed off."],
      ["The repair process", "Shut off the water, relieve the pressure and drain the damaged section completely. Check the pipe material, the hole diameter and kit compatibility. Heat and fit the pin as directed by the manufacturer, allow it to cool and check for leaks before closing up the area."],
      ["When this method is unsuitable", "Do not assume a PP-R kit will work on PVC or polyethylene. A crack, split, thinned or distorted wall, damage near a fitting or a hole larger than the kit allows usually calls for replacing the damaged section."],
      ["What matters on pressurized lines", "Confirm that both the pipe and repair-kit manufacturers allow this repair on the pressurized line in question. Check for leaks after the repair and pressure-test where required. If the method is not approved for that application, replacing the damaged section is safer."],
      ["Practical takeaway", "A repair pin can be useful for a small accidental drill hole in compatible PP-R pipe, particularly where the section is hard to replace. Start by identifying the pipe material and checking the damage."],
    ],
    source: "aquatherm — information from a polypropylene pipe manufacturer",
  },
  "pryamotochny-sifon": {
    title: "Tubular sink trap: an alternative to a bottle trap",
    category: "Renovation in practice",
    imageAlt: "Tubular trap installed underneath a basin",
    excerpt: "How a smooth-bore tubular trap works, how to service it and what to check before choosing one for your vanity.",
    sections: [
      ["What the photos show", "The U-shaped tubular trap under the basin holds water in its bend. That water forms a seal that keeps drain odors out. The photos do not establish the brand or specifications of the fitting."],
      ["Why choose this layout?", "A curved tube takes the place of the chamber found in a bottle trap. This can suit some installations, but the risk of blockages and ease of cleaning depend on the specific model and how it is fitted and used."],
      ["What to check before buying", "Measure the basin outlet, the waste connection and its height, and the usable space inside the vanity. Leave access to the joints and make sure the fittings line up without strain."],
      ["It still needs cleaning", "A smooth tube can still collect hair and debris. Check the instructions to see how the trap comes apart or whether it has a cleanout."],
      ["Our approach", "We choose the trap to suit the basin, cabinet and access for maintenance, then run water through it to check the connections for leaks."],
    ],
    source: "McAlpine — tubular trap designs",
  },
  "gidroizolyatsiya-dushevoy": {
    title: "Shower waterproofing: the wall-to-floor junction",
    category: "Construction details",
    imageAlt: "Illustration of the waterproofing junction at a shower wall and floor",
    excerpt: "Why the shower corner needs a continuous seal, common mistakes and what to check before tiling.",
    sections: [
      ["Continuous protection", "The waterproofing must be continuous wherever the shower floor meets the wall. Schluter’s KERDI membrane system, for example, uses KERDI-BAND to seal this joint."],
      ["Corners and pipe penetrations", "The system has preformed pieces for internal and external corners and sealing collars for pipes. They keep the waterproofing continuous where a flat sheet alone is insufficient."],
      ["Common mistakes", "Gaps at corners, air bubbles under membranes and unsealed pipe openings can compromise the barrier. KERDI calls for a 5 cm overlap or for butt joints covered with sealing band. Check the instructions before applying that requirement to a different system."],
      ["Allow for movement", "Existing movement and structural joints need their own detail. The KERDI instructions specify KERDI-FLEX for these joints. Simply covering a moving joint does not account for that movement."],
      ["What to inspect before tiling", "Ask to see floor-to-wall connections, corners, pipe penetrations and the connection at the drain. Check the materials and installation sequence against the system instructions and photograph the concealed details before tiling."],
      ["Water testing", "Test before tiling, after allowing the materials to set. The KERDI instructions cited here specify a 24-hour wait before testing; other systems can differ. Agree on the method with the installer based on the product documentation and the site requirements."],
      ["Our approach", "Choose a compatible waterproofing system and detail the junction in advance. The design depends on the substrate, drain and conditions of use."],
    ],
    source: "Schluter-KERDI — manufacturer’s instructions",
  },
  "archeform-bim-1-1": {
    title: "Archeform BIM 1.1: renovation documentation from a SketchUp model",
    category: "New tool",
    imageAlt: "Archeform BIM 1.1 article cover",
    excerpt: "Separate existing, demolished and new elements in one model, produce drawings and export data.",
    sections: [
      ["What was announced", "On 13 November 2026, AEC Magazine reported the release of Archeform BIM 1.1, a SketchUp extension for creating construction documents from a 3D model."],
      ["Renovation in a single model", "Version 1.1 can show existing, demolished and new construction and building systems separately. Each set can have its own scenes and sheets in LayOut."],
      ["Drawings and data exchange", "The extension produces plans, sections, elevations and schedules from the model. It supports IFC4 export. The developer says room, pipe and fitting schedules can also be exported as CSV files."],
      ["Why it matters for renovations", "Keeping the phases in one model can help coordinate demolition and new work, with less need to redraw the same detail. The quality of the output still depends on the model and professional review."],
    ],
    source: "Archeform — official 1.1 changelog",
  },
  "rozetka-v-polu": {
    title: "Floor outlets: when they help and what to plan for",
    category: "Renovation in practice",
    imageAlt: "Metal floor outlet cover in the timber floor of our Istra project",
    excerpt: "A detail from our Istra project: how furniture layout, floor construction and cleaning affect your choice of outlet.",
    sections: [
      ["Power where you need it", "A floor outlet can avoid an extension lead when a sofa or desk is away from the wall. Plan it together with the furniture layout and the equipment you want to plug in."],
      ["Start with the furniture plan", "Mark furniture, walkways and connection points. Check that you can lift the cover and plug in a device, and that its cable will stay clear of the main walkway."],
      ["Account for floor construction", "Installation depth and mounting vary with the product and the floor assembly. Choose the outlet before the subfloor and finished floor go in, and agree on cable routing and box placement with the electrician."],
      ["Plan for cleaning and daily use", "Check how the specific outlet may be cleaned and what protection it offers with the cover open and closed. A wall outlet is not suitable for floor use merely because it fits the opening."],
      ["A detail from our project", "The photo shows an outlet in a country house in Istra. The metal lid sits within the geometric timber flooring. The exact model and specifications cannot be identified from the photo."],
      ["What to discuss before renovating", "List the devices to be plugged in, confirm the furniture positions and cleaning routine, then agree on a suitable floor system and installation with the electrician."],
    ],
    source: "OBO Bettermann — underfloor system planning",
  },
};

export const articles = original.flatMap((article) => {
  const copy = translations[article.slug];
  if (!copy) return [];
  return [{
    ...article,
    ...copy,
    image: article.image.endsWith(".svg") ? article.image.replace(/\.svg$/, "-en.svg") : article.image,
    dateLabel: new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" }).format(new Date(article.date)),
    readingTime: (parseInt(article.readingTime, 10) || 3) + " min read",
    sections: copy.sections.map(([title, text]) => ({ title, text })),
    source: { ...article.source, label: copy.source },
  }];
});
