// ============================================================
// EDIT THIS FILE to update your site. No HTML needed.
// Text supports [link text](https://url), **bold** and *italics*.
// To add something, copy one {...} block in a list and edit it.
// ============================================================
const SITE = {
  name: "Geffen Cooper",
  affiliation: "Ph.D. Candidate · UT Austin ECE",
  headshot: "https://geffen-cooper.github.io/assets/img/headshot.jpg",   // or "assets/headshot.jpg"
  links: [   // buttons appear in this order; icon: resume | scholar | github | linkedin | email
    { label: "Résumé",   icon: "resume",   url: "https://geffen-cooper.github.io/assets/pdf/Resume_Geffen_Cooper_UT_Austin.pdf" },  // or "assets/Resume.pdf"
    { label: "Scholar",  icon: "scholar",  url: "https://scholar.google.com/citations?user=g0MnbrcAAAAJ" },
    { label: "GitHub",   icon: "github",   url: "https://github.com/geffen-cooper" },
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/geffen-cooper-48017819b" },
    { label: "Email",    icon: "email",    url: "mailto:geffen@utexas.edu" }
  ],

  about: [
    "I'm a fourth-year Ph.D. student in the [System Level Design group](https://radum.ece.utexas.edu/) at UT Austin, advised by Professor [Radu Marculescu](https://www.ece.utexas.edu/people/faculty/radu-marculescu). Before my Ph.D., I graduated from UC Santa Barbara in 2022 with a B.S. in Computer Engineering.",
    "I build machine learning systems for **batteryless, energy-harvesting sensors**: devices that run entirely on ambient power and transmit data only when they can. The core challenge is reliable, real-time inference when the sensor goes dark unpredictably and every packet costs energy.",
    "My work spans the full stack, from energy harvesting circuits to the algorithms that run on top of them."
  ],

  // The centerpiece. Replace the placeholder text with your real write-up.
  system: {
    title: "Batteryless Wearable Sensing System",
    text: [
      "Custom solar-harvesting accelerometer nodes stream asynchronous data for on-device human activity recognition, with no batteries.",
      "**Problem:** what was hard about this. **What I built:** the hardware, firmware and algorithms you owned. **Result:** your numbers (power in µW, latency, accuracy)."
    ],
    video: "",                                  // e.g. "assets/demo.mp4"
    poster: "",                                 // optional preview image for the video
    gallery: [                                  // add or remove freely
      { image: "assets/system/node.jpg",     caption: "Harvesting node (replace with your photo)" },
      { image: "assets/system/pcb.jpg",      caption: "Custom PCB" },
      { image: "assets/system/diagram.png",  caption: "System architecture" }
    ]
  },

  lastUpdated: "November 3, 2026",   // edit this when you update the site

  // selected: true  -> shown by default. All entries show under "All publications".
  // image, pdf, and doi are optional.
  publications: [
    { 
      image: "https://geffen-cooper.github.io/assets/img/publication_preview/learned_sampling.png", 
      badge: "BSN 2025", 
      selected: true,
      title: "Batteryless Gesture Recognition via Learned Sampling", 
      authors: "**Geffen Cooper**, Radu Marculescu",
      where: "IEEE 21st International Conference on Body Sensor Networks · Oct 2025",
      pdf: "https://geffen-cooper.github.io/assets/pdf/Batteryless_Gesture_Recognition_via_Learned_Sampling.pdf",
      doi: "https://doi.org/10.1109/BSN.2025.example" 
    },
    { 
      image: "https://geffen-cooper.github.io/assets/img/publication_preview/packet_pruning.png", 
      badge: "BSN 2024 · Oral", 
      selected: true,
      title: "Packet Pruning: Finding Better Energy Spending Policies for Batteryless Human Activity Recognition", 
      authors: "**Geffen Cooper**, Radu Marculescu",
      where: "IEEE 20th International Conference on Body Sensor Networks · Oct 2024",
      pdf: "https://geffen-cooper.github.io/assets/pdf/Packet_Pruning_Finding_Better_Energy_Spending_Policies_for_Batteryless_Human_Activity_Recognition.pdf",
      doi: "" 
    },
    { 
      image: "https://geffen-cooper.github.io/assets/img/publication_preview/sensor_selection.png", 
      badge: "IoTDI 2024", 
      selected: true,
      title: "Beyond Thresholds: A General Approach to Sensor Selection for Practical Deep Learning-based HAR", 
      authors: "**Geffen Cooper**, Radu Marculescu",
      where: "IEEE/ACM 9th International Conference on IoT Design and Implementation · May 2024",
      pdf: "https://geffen-cooper.github.io/assets/pdf/Beyond_Thresholds_A_General_Approach_to_Sensor_Selection_for_Practical_Deep_Learning-based_HAR.pdf",
      doi: "" 
    },
    { 
      image: "https://geffen-cooper.github.io/assets/img/publication_preview/KEH.png", 
      badge: "IoTDI 2024 · Demo", 
      selected: true,
      title: "Demo: A Prototype for Machine Learning with Batteryless Sensors", 
      authors: "**Geffen Cooper**, Tianda Huang, Radu Marculescu",
      where: "IEEE/ACM 9th International Conference on IoT Design and Implementation · May 2024",
      pdf: "https://geffen-cooper.github.io/assets/pdf/Demo_Abstract_A_Prototype_for_Machine_Learning_with_Batteryless_Sensors.pdf",
      doi: "" 
    },
    { 
      badge: "IoTDI 2024 · Demo", 
      title: "Demo Abstract: Online Training and Inference for On-Device Monocular Depth Estimation",
      authors: "Allen-Jasmin Farcas, **Geffen Cooper**, Hyun Joon Song, Afnan Mir, Vincent Liew, Chloe Tang, Prithvi Senthilkumar, Tiani Chen-Troester, Radu Marculescu",
      where: "IEEE/ACM 9th International Conference on IoT Design and Implementation · May 2024",
      pdf: "",
      doi: "" 
    },
    { 
      badge: "IEEE Access 2024", 
      title: "Three Decades of Low Power: From Watts to Wisdom",
      authors: "Mustafa Munir, Saloni Modi, **Geffen Cooper**, Huntae Kim, Radu Marculescu",
      where: "IEEE Access, vol. 12 · 2024",
      pdf: "",
      doi: "" 
    }
  ],

  news: [   // newest first
    { date: "May 2026", text: "Passed my [progress review](https://cloud.wikis.utexas.edu/wiki/spaces/ECEHandbook/pages/73368896/Progress+Review), entering the final year of my Ph.D." },
    { date: "Aug 2025", text: "Paper accepted at [IEEE BSN 2025](https://bsn.embs.org/2025/)." },
    { date: "Jun 2025", text: "Started a data science internship at [Wiliot](https://www.wiliot.com/), working on IoT intelligence at scale." },
    { date: "Jan 2025", text: "Poster received an award at [GAIN 2025](https://sites.utexas.edu/gain/gain-2025-winners/)." },
    { date: "Nov 2024", text: "Advanced to doctoral candidacy." },
    { date: "Aug 2024", text: "[NSF proposal](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2428656) for *Batteryless Frontiers in Edge AI* funded." },
    { date: "Jul 2024", text: "IEEE BSN 2024 paper accepted as an oral. Co-organized the [WAIRE](https://sites.google.com/utexas.edu/ieebsn-waire) workshop on AI + Energy Harvesting." },
    { date: "Jan 2024", text: "One paper and two demos accepted at [IoTDI 2024](https://conferences.computer.org/iotDI/2024/)." }
  ],
  newsVisible: 5   // the rest sit behind a "Show older" button
};