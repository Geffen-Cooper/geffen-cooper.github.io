// ============================================================
// EDIT THIS FILE to update your site. No HTML needed.
// Text supports [link text](https://url), **bold** and *italics*.
// To add something, copy one {...} block in a list and edit it.
// ============================================================
const SITE = {
  name: "Geffen Cooper",
  affiliation: "Ph.D. Candidate · UT Austin ECE",
  headshot: "assets/img/headshot.jpg",   // or "assets/headshot.jpg"
  links: [   // buttons appear in this order; icon: resume | scholar | github | linkedin | email
    { label: "Resume",   icon: "resume",   url: "https://geffen-cooper.github.io/assets/pdf/resume.pdf" },  // or "assets/Resume.pdf"
    { label: "Scholar",  icon: "scholar",  url: "https://scholar.google.com/citations?user=g0MnbrcAAAAJ" },
    { label: "GitHub",   icon: "github",   url: "https://github.com/geffen-cooper" },
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/geffen-cooper-48017819b" },
    { label: "Email",    icon: "email",    url: "mailto:geffen@utexas.edu" }
  ],

  about: [
    "My name is Geffen Cooper. I am a fifth-year (final year) Ph.D. student in the [System Level Design (SLD)](https://radum.ece.utexas.edu/) group at UT Austin advised by Professor [Radu Marculescu](https://www.ece.utexas.edu/people/faculty/radu-marculescu). Before my Ph.D., I graduated from UC Santa Barbara (UCSB) in 2022 with a B.S. in computer engineering.",
    "My research focuses on machine learning with *batteryless* sensors, with applications in wearables and multisensor human activity recognition.",
    "I really enjoy building things that interact with the physical world, working across hardware and software and pushing beyond the boundaries of existing systems."
  ],

  // The centerpiece. Replace the placeholder text with your real write-up.
  system: {
    title: "Batteryless Wearable Sensing System",
    text: [
      "To support my research on batteryless sensing, I built a custom solar-powered accelerometer node. The device works by harvesting energy from indoor light via a small solar panel. This energy is stored in two small capacitors. When enough energy is accumulated, the device reads data from an accelerometer and advertise it over BLE (Bluetooth Low Energy).",
      "Since the sensors only operate when energy is available, we get a sparse, asynchronous data stream as shown below. My research explores how the sensors should spend energy to acquire data, and how the resulting data is processed for **applications like human activity recognition**."
    ],
    video: "assets/video/batteryless_demo_2026.mp4",                                  // e.g. "assets/demo.mp4"
    poster: "",                                 // optional preview image for the video
    gallery: [                                  // add or remove freely
      { image: "assets/img/wearable.png",     caption: "**Wearable Form Factor**: the devices sit in a 3D-printed case with a velcro strap. An amorphous solar panel is attached on top." },
      { image: "assets/img/PCB.png",      caption: "**Custom PCB**: the front of the PCB (left) has the nRF52832 (BLE-based MCU), BMA400 (accelerometer), two 200 uF Tantalum capacitors for energy storage, a debug port, and jumpers to enable different operating modes. The back of the PCB (right) has the DFM8001 (PMIC) for power management and a coin battery used for data collection. The board can operate in a *batteryless* mode, where it only uses energy harvested via the solar panel, and a *battery-powered* mode where it is continuously powered by a coin battery for data collection or debugging." },
    ]
  },

  lastUpdated: "Nov. 3, 2026",   // edit this when you update the site

  // selected: true  -> shown by default. All entries show under "All publications".
  // image, pdf, and doi are optional.
  publications: [
    { 
      image: "assets/img/bhar.png", 
      badge: "CODES 2026", 
      selected: true,
      title: "BHAR: A System-Level Optimization Framework for Multisensor Batteryless Human Activity Recognition", 
      authors: "**Geffen Cooper**, Nathan Tsao, Filippos Fotiadis, Ufuk Topcu, Radu Marculescu",
      where: "IEEE Trans. on Computer-Aided Design of Integrated Circuits and Systems · Oct 2026",
      pdf: "assets/pdf/BHAR.pdf",
      doi: "" 
    },
    { 
      image: "assets/img/learned_sampling.png", 
      badge: "BSN 2025", 
      selected: true,
      title: "Batteryless Gesture Recognition via Learned Sampling", 
      authors: "**Geffen Cooper**, Radu Marculescu",
      where: "IEEE 21st International Conference on Body Sensor Networks · Oct 2025",
      pdf: "assets/pdf/Batteryless_Gesture_Recognition.pdf",
      doi: "https://doi.org/10.1109/BSN66969.2025.11337480" 
    },
    { 
      image: "assets/img/packet_pruning.png", 
      badge: "BSN 2024 · Oral", 
      selected: true,
      title: "Packet Pruning: Finding Better Energy Spending Policies for Batteryless Human Activity Recognition", 
      authors: "**Geffen Cooper**, Radu Marculescu",
      where: "IEEE 20th International Conference on Body Sensor Networks · Oct 2024",
      pdf: "assets/pdf/Packet_Pruning.pdf",
      doi: "https://doi.org/10.1109/BSN63547.2024.10780463" 
    },
    { 
      image: "assets/img/sensor_selection.png", 
      badge: "IoTDI 2024", 
      selected: true,
      title: "Beyond Thresholds: A General Approach to Sensor Selection for Practical Deep Learning-based HAR", 
      authors: "**Geffen Cooper**, Radu Marculescu",
      where: "IEEE/ACM 9th International Conference on IoT Design and Implementation · May 2024",
      pdf: "assets/pdf/Beyond_Thresholds.pdf",
      doi: "https://doi.org/10.1109/IoTDI61053.2024.00005" 
    },
    { 
      image: "assets/img/KEH.png", 
      badge: "IoTDI 2024 · Demo", 
      selected: true,
      title: "Demo Abstract: A Prototype for Machine Learning with Batteryless Sensors", 
      authors: "**Geffen Cooper**, Tianda Huang, Radu Marculescu",
      where: "IEEE/ACM 9th International Conference on IoT Design and Implementation · May 2024",
      pdf: "assets/pdf/Demo_Abstract_A_Prototype.pdf",
      doi: "https://doi.org/10.1109/IoTDI61053.2024.00027" 
    },
    { 
      image: "assets/img/OTI.png",
      badge: "IoTDI 2024 · Demo", 
      title: "Demo Abstract: Online Training and Inference for On-Device Monocular Depth Estimation",
      authors: "Allen-Jasmin Farcas, **Geffen Cooper**, Hyun Joon Song, Afnan Mir, Vincent Liew, Chloe Tang, Prithvi Senthilkumar, Tiani Chen-Troester, Radu Marculescu",
      where: "IEEE/ACM 9th International Conference on IoT Design and Implementation · May 2024",
      pdf: "assets/pdf/Demo_Abstract_Online_Training_and_Inference.pdf",
      doi: "https://doi.org/10.1109/IoTDI61053.2024.00026" 
    },
    { 
      image: "assets/img/lpn.png",
      badge: "IEEE Access 2024", 
      title: "Three Decades of Low Power: From Watts to Wisdom",
      authors: "Mustafa Munir, Saloni Modi, **Geffen Cooper**, Huntae Kim, Radu Marculescu",
      where: "IEEE Access, vol. 12 · 2024",
      pdf: "assets/pdf/Three_Decades.pdf",
      doi: "https://doi.org/10.1109/ACCESS.2024.3361484" 
    },
    { 
      image: "assets/img/sorting.png",
      badge: "ITC 2022", 
      title: "Autonomous System for Sorting Objects at the Edge",
      authors: "**Geffen Cooper**, Vincent Benenati, Bethany Long, Kat Copeland, Tyler Ekaireb, Satish Kumar, B.S. Manjunath, Yogananda Isukapalli",
      where: "International Telemetering Conference · 2022",
      pdf: "assets/pdf/ITC_2022.pdf",
      doi: "https://repository.arizona.edu/items/9ff62241-d02a-46b8-a313-0cc85b07d275" 
    },
    { 
      image: "assets/img/face_detection.png",
      badge: "ITC 2021", 
      title: "Edge Machine Learning for Face Detection",
      authors: "**Geffen Cooper**, B.S. Manjunath, Yogananda Isukapalli",
      where: "International Telemetering Conference · 2021",
      pdf: "assets/pdf/ITC_2021.pdf",
      doi: "https://repository.arizona.edu/items/69d19eb3-c64e-4cea-88d0-d15756f9a1cb" 
    }
  ],

  news: [   // newest first
    { date: "June 2026", text: "Our [CODES (ESWEEK)](https://esweek.org/codes-isss/) paper was accepted." },
    { date: "May 2026", text: "I passed my [progress review](https://cloud.wikis.utexas.edu/wiki/spaces/ECEHandbook/pages/73368896/Progress+Review) as I enter the final year of my Ph.D." },
    { date: "Aug 2025", text: "Our [IEEE BSN 2025](https://bsn.embs.org/2025/) paper was accepted." },
    { date: "Jun 2025", text: "I started a data science internship at [Wiliot](https://www.wiliot.com/)." },
    { date: "Jan 2025", text: "My poster presented at [GAIN](https://sites.utexas.edu/gain/gain-2025-winners/) received an award." },
    { date: "Nov 2024", text: "I advanced to doctoral candidacy." },
    { date: "Aug 2024", text: "Our [NSF proposal](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2428656&HistoricalAwards=false) for *Batteryless Frontiers in Edge AI* was accepted." },
    { date: "Jul 2024", text: "Our [IEEE BSN 2024](https://bsn.embs.org/2024/) paper (oral presentation) was accepted and our [WAIRE](https://sites.google.com/utexas.edu/ieebsn-waire) (AI + Energy Harvesting) workshop was also accepted. I also received a [travel award](https://bsn.embs.org/2024/contributors/awards/) to attend the conference in Chicago." },
    { date: "Jan 2024", text: "One [IoTDI](https://conferences.computer.org/iotDI/2024/) paper and two demos were accepted. We received a professional development award to present these works in Hong Kong." },
    { date: "Aug 2022", text: "I start my Ph.D. at UT Austin" },
  ],
  newsVisible: 5   // the rest sit behind a "Show older" button
};