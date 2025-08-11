const wars = [
  {
    "title": "Indo-Pak War 1947",
    "description": "India's first war post-independence over Jammu and Kashmir.",
    "image": "https://plus.unsplash.com/premium_photo-1716788654203-23213ba0396c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5kbyUyMCUyMHBhayUyMHdhcnxlbnwwfHwwfHx8MA%3D%3D",
    "url": "https://en.wikipedia.org/wiki/Indo-Pakistani_War_of_1947"
  },
  {
    "title": "Indo-China War 1962",
    "description": "A high-altitude battle between India and China in Ladakh and NEFA.",
    "image": "https://images.unsplash.com/photo-1715327875800-7d7794b391b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5kbyUyMENoaW5hJTIwV2FyJTIwMTk2MiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "url": "https://en.wikipedia.org/wiki/Sino-Indian_War"
  },
  {
    "title": "Indo-Pak War 1965",
    "description": "Fought over Kashmir, it ended with the Tashkent Agreement.",
    "image": "https://images.unsplash.com/photo-1571840615922-50fb24649d4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FyfGVufDB8fDB8fHww",
    "url": "https://en.wikipedia.org/wiki/Indo-Pakistani_War_of_1965"
  },
  {
    "title": "Indo-Pak War 1971",
    "description": "Led to the creation of Bangladesh after India defeated Pakistan.",
    "image": "https://images.unsplash.com/photo-1580922110301-a666f6745565?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2FyfGVufDB8fDB8fHww",
    "url": "https://en.wikipedia.org/wiki/Indo-Pakistani_War_of_1971"
  },
  {
    "title": "Kargil War 1999",
    "description": "India successfully pushed back Pakistani intruders from Kargil peaks.",
    "image": "https://plus.unsplash.com/premium_photo-1682124119930-9c9bc75441fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2FyZ2lsJTIwd2FyfGVufDB8fDB8fHww",
    "url": "https://en.wikipedia.org/wiki/Kargil_War"
  },
  {
    "title": "Goa Liberation 1961",
    "description": "India annexed Goa, Daman, and Diu from Portuguese rule in Operation Vijay.",
    "image": "https://plus.unsplash.com/premium_photo-1716078137386-09bb98549dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FyfGVufDB8fDB8fHww",
    "url": "https://en.wikipedia.org/wiki/Annexation_of_Goa"
  },
  {
    "title": "Operation Blue Star 1984",
    "description": "A military operation to remove militants from the Golden Temple in Amritsar.",
    "image": "https://images.unsplash.com/photo-1573484557356-0a641f19ce96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHdhcnxlbnwwfHwwfHx8MA%3D%3D",
    "url": "https://en.wikipedia.org/wiki/Operation_Blue_Star"
  },
  {
    "title": "Operation Meghdoot 1984",
    "description": "Indian Army secured the Siachen Glacier, gaining strategic advantage.",
    "image": "https://images.unsplash.com/photo-1563804951831-49844db19644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhcnxlbnwwfHwwfHx8MA%3D%3D",
    "url": "https://en.wikipedia.org/wiki/Operation_Meghdoot"
  },
  {
    "title": "Siachen Conflict (Ongoing since 1984)",
    "description": "India maintains control of the Siachen Glacier, the highest battlefield in the world.",
    "image": "https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FyfGVufDB8fDB8fHww",
    "url": "https://en.wikipedia.org/wiki/Siachen_conflict"
  },
  {
    "title": "Operation Pawan 1987–1990",
    "description": "Indian Peace Keeping Force operations in Sri Lanka during the civil conflict.",
    "image": "https://images.unsplash.com/photo-1581291881321-56dee1d7d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHdhcnxlbnwwfHwwfHx8MA%3D%3D",
    "url": "https://en.wikipedia.org/wiki/Operation_Pawan"
  },
  {
    "title": "Operation Cactus 1988",
    "description": "Indian Armed Forces foiled a coup attempt in the Maldives.",
    "image": "https://images.unsplash.com/photo-1718325322924-c1a2db36df2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdGVyJTIwaW4lMjB3YXJ8ZW58MHx8MHx8fDA%3D",
    "url": "https://en.wikipedia.org/wiki/Operation_Cactus"
  },
  {
    "title": "Surgical Strikes 2016",
    "description": "India conducted targeted military strikes on terrorist camps across the Line of Control.",
    "image": "https://images.unsplash.com/photo-1541514431288-76b3c5aa474e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdhcnxlbnwwfHwwfHx8MA%3D%3D",
    "url": "https://en.wikipedia.org/wiki/2016_Indian_Line_of_Control_strike"
  },
  {
    "title": "Balakot Air Strike 2019",
    "description": "Indian Air Force targeted terrorist camps in Balakot, Pakistan after the Pulwama attack.",
    "image": "https://images.unsplash.com/photo-1580922110301-a666f6745565?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2FyfGVufDB8fDB8fHww",
    "url": "https://en.wikipedia.org/wiki/2019_Balakot_airstrike"
  }
]

export default wars;
