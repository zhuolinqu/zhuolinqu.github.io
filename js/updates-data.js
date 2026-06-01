// ============================================================
//  SITE DATA FILE — Edit this file to update your website
// ============================================================
//
//  HOW TO ADD A NEW ENTRY:
//  1. Copy the template block below
//  2. Paste it ANYWHERE in the "entries" array — no need to
//     maintain order; entries are sorted automatically by date
//  3. Fill in the fields, save, and upload to GitHub
//  4. Set  highlight: true  to also show it on the homepage
//
//  TEMPLATE — copy from here:
// ─────────────────────────────────────────────────
//    {
//      date: "YYYY-MM",    e.g. "2026-09"
//      year: YYYY,         e.g. 2026
//      type: "talk",       "talk" | "paper" | "grant" | "news"
//      authors: "A, B, and C",   include for papers, delete for other types
//      title: "...",
//      venue: "...",
//      link: "...",        URL — DELETE this line if no link
//      note: "...",        short note — DELETE this line if none
//      photoLink: "...",   path to photo — DELETE this line if none
//      highlight: false    change to true to show on homepage
//    },
// ─────────────────────────────────────────────────
//
//  TYPES EXPLAINED:
//    "talk"  — conference talks, seminar talks, invited lectures
//    "paper" — paper accepted or published
//    "grant" — grants, fellowships, awards received
//    "news"  — anything else: organizing events, media, workshops
//
//  TO HIGHLIGHT ON HOMEPAGE: set  highlight: true
//  TO REMOVE FROM HOMEPAGE:  set  highlight: false
//  (entries remain on the Updates page regardless)
//
// ============================================================

var siteData = {

  // ── UPCOMING TALKS & CONFERENCES ─────────────────────────
  // Add upcoming events here. Remove them once they've passed
  // (or move them into "entries" below as type: "talk").
  upcoming: [
    {
      title: "SIAM Conference on the Life Sciences",
      venue: "Ohio, US",
      date: "July 6–9, 2026",
      link: "https://www.siam.org/conferences-events/siam-conferences/ls26/"
    },
    {
      title: "GRC Genetic Biocontrol",
      venue: "Maine, US",
      date: "July 12–17, 2026",
      link: "https://www.grc.org/genetic-biocontrol-conference/2026/"
    },
    {
      title: "SIAM TX-LA Sectional Meeting 2026",
      venue: "Southern Methodist University, Dallas, TX",
      date: "October 30–November 1, 2026",
      link: "https://sites.google.com/view/siam-txla-2026"
    }
  ],

  // ── PAST ENTRIES — newest first ──────────────────────────
  entries: [

    // ── 2026 ─────────────────────────────────────────────
   {
      date: "2026-06", year: 2026, type: "grant", highlight: true,
      title: "Received travel grant from Collaborate @ ICERM: Data-Informed Analysis of Malaria Vector Species Replacement: Modeling IRS-Driven Population Shifts in Uganda",
      venue: "ICERM, Brown University"
    },
	{
      date: "2026-04", year: 2026, type: "paper", highlight: true,
      authors: "Zhuolin Qu and Tong Wu",

      title: "Multistage spatial model for informing release of <em>Wolbachia</em>-infected mosquitoes as disease control",
      venue: "Royal Society Open Science (to appear, 2026)",
      link: "publications/Qu-Wu-RSOS.pdf"
    },
    {
      date: "2026-04", year: 2026, type: "news", highlight: true,
      title: "Hosted the 2026 Texas Differential Equations Conference at UTSA",
      venue: "University of Texas at San Antonio",
      link: "https://txpde2026.github.io/index.html",
      photoLink: "pics/TXDE_2026.JPG"
    },
    {
      date: "2026-04", year: 2026, type: "talk", highlight: true,
      title: "Mathematical Biology Seminar",
      venue: "National Center for Theoretical Sciences of Taiwan",
      link: "https://ncts.ntu.edu.tw/events_1_detail.php?nid=3110"
    },
    {
      date: "2026-04", year: 2026, type: "talk",
      title: "10th Coastal Bend Mathematics & Statistics Conference",
      venue: "Texas A&M University–Corpus Christi",
      link: "https://www.tamucc.edu/science/departments/math-and-statistics/10thcbmsc/index.php"
    },
    {
      date: "2026-04", year: 2026, type: "talk",
      title: "College of Sciences Research Symposium",
      venue: "University of Texas at San Antonio",
      link: "https://sciences.utsa.edu/research-symposium/"
    },
    {
      date: "2026-03", year: 2026, type: "talk",
      title: "2026 Texas Differential Equations Conference",
      venue: "San Antonio, TX",
      link: "https://txpde2026.github.io/index.html"
    },
    {
      date: "2026-02", year: 2026, type: "talk",
      title: "SMB Online Conference on Population Dynamics, Ecology and Evolution",
      venue: "Online"
    },

    // ── 2025 ─────────────────────────────────────────────
    {
      date: "2025-12", year: 2025, type: "paper",
      authors: "Daniela Florez, Ricardo Cortez, James M. Hyman, and Zhuolin Qu",
      title: "Improving <em>Wolbachia</em>-based control programs in urban settings: insights from spatial modeling",
      venue: "PLOS Neglected Tropical Diseases, 19(12): e0013787",
      link: "https://doi.org/10.1371/journal.pntd.0013787"
    },
    {
      date: "2025-10", year: 2025, type: "paper",
      authors: "Asma Azizi, Zhuolin Qu, and Caner Kazanci",
      title: "How human behavior drives the balance of symptomatic and asymptomatic cases in emerging infections",
      venue: "Mathematical Biosciences, 109601",
      link: "publications/Azizi-Qu-Kazanci-Behavior.pdf"
    },
    {
      date: "2025-09", year: 2025, type: "paper",
      authors: "Zhuolin Qu and Lauren Childs",
      title: "Assessing the impact of the <em>Wolbachia</em>-based control of malaria",
      venue: "Mathematical Biosciences, 109466",
      link: "https://doi.org/10.1016/j.mbs.2025.109466"
    },
    {
      date: "2025-09", year: 2025, type: "talk", highlight: true,
      title: "Presented research to math majors at Mathematics Faculty Lightning Talks",
      venue: "University of Texas at San Antonio",
      link: "https://docs.google.com/presentation/d/1eYAKso1nq6GNBagalUpZAVf4q18h5EmuymUAppX4acg/edit?usp=sharing"
    },
    {
      date: "2025-05", year: 2025, type: "paper", highlight: true,
      authors: "Zhuolin Qu*, Denis Patterson*, Lihong Zhao, Joan Ponce, Christina Edholm, Olivia Feldman, and Lauren Childs",
      title: "Mathematical modeling of malaria vaccination with seasonality and immune feedback",
      venue: "PLOS Computational Biology, 21(5): e1012988",
      link: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1012988"
    },
    {
      date: "2025-11", year: 2025, type: "talk",
      title: "Brin Mathematics Research Center Workshop",
      venue: "University of Maryland",
      link: "https://brinmrc.umd.edu/"
    },
    {
      date: "2025-07", year: 2025, type: "talk",
      title: "Mathematical Congress of the Americas 2025",
      venue: "Miami",
      link: "https://www.mca2025.org/event/home/mca-2025"
    },
    {
      date: "2025-07", year: 2025, type: "talk",
      title: "SMB 2025 Annual Meeting",
      venue: "Edmonton, Alberta, Canada",
      link: "https://2025.smb.org/"
    },
    {
      date: "2025-06", year: 2025, type: "grant",
      title: "Received travel grant from Collaborate @ ICERM: Modeling the Impact of Human Movement on Malaria Immune Dynamics",
      venue: "ICERM, Brown University"
    },
    {
      date: "2025-05", year: 2025, type: "talk",
      title: "SIAM Conference on Applications of Dynamical Systems (DS25)",
      venue: "Denver, Colorado",
      link: "https://www.siam.org/conferences-events/siam-conferences/ds25/"
    },
    {
      date: "2025-04", year: 2025, type: "talk",
      title: "9th Coastal Bend Mathematics and Statistics Conference",
      venue: "Texas A&M International University",
      link: "https://www.tamiu.edu/coas/dmps/conferences.shtml"
    },
    {
      date: "2025-03", year: 2025, type: "talk",
      title: "Math & Stat Colloquium (virtual)",
      venue: "CUNY Hunter College"
    },
    {
      date: "2025-02", year: 2025, type: "grant",
      title: "Received travel grant from AIM SQuaREs: Malaria in Children: A Story of Seasonal Prevention, Treatment, Acquired Immunity and Drug Resistance",
      venue: "American Institute of Mathematics"
    },
    {
      date: "2025-01", year: 2025, type: "talk",
      title: "Joint Mathematics Meetings 2025",
      venue: "Seattle, WA",
      link: "https://jointmathematicsmeetings.org/jmm"
    },

    // ── 2024 ─────────────────────────────────────────────
    {
      date: "2024-12", year: 2024, type: "talk",
      title: "14th AIMS Conference on Dynamical Systems",
      venue: "Abu Dhabi, United Arab Emirates",
      link: "https://www.aimsconference.org/conferences/2024/index.html"
    },
    {
      date: "2024-11", year: 2024, type: "talk",
      title: "Eighth Singapore International Dengue Workshop (invited lecture, virtual)",
      venue: "Online"
    },
    {
      date: "2024-09", year: 2024, type: "grant", highlight: true,
      title: "'Empowering Excellence: Women in Mathematics Workshop in San Antonio' — co-organized with Dr. Lale Asik, in conjunction with the AMS Fall Sectional Meeting at UTSA",
      venue: "MAA Tensor Women & Mathematics",
      photoLink: "pics/WIMSATX.jpg"
    },
    {
      date: "2024-09", year: 2024, type: "talk",
      title: "AMS Fall Central Sectional Meeting",
      venue: "University of Texas at San Antonio",
      link: "https://www.ams.org/meetings/sectional/2319_program.html"
    },
    {
      date: "2024-09", year: 2024, type: "talk",
      title: "Applied Math Seminar (virtual)",
      venue: "University of Georgia"
    },
    {
      date: "2024-09", year: 2024, type: "talk",
      title: "Colloquium talk (virtual)",
      venue: "University of West Indies, Mona, Jamaica"
    },
    {
      date: "2024-07", year: 2024, type: "news",
      title: "Organized a special mini-symposium in honor of Mac Hyman at the SIAM Annual Meeting",
      venue: "SIAM Annual Meeting, Spokane, WA",
      link: "https://sites.google.com/view/celebrationformac/"
    },
    {
      date: "2024-07", year: 2024, type: "talk",
      title: "SIAM Annual Meeting",
      venue: "Spokane, WA",
      link: "https://www.siam.org/conferences/cm/conference/an24"
    },
    {
      date: "2024-06", year: 2024, type: "talk",
      title: "Joint Annual Meeting of the Korean Society for Mathematical Biology and the Society for Mathematical Biology",
      venue: "KonKuk University, Seoul, Republic of Korea",
      link: "https://smb2024.org/index.asp"
    },
    {
      date: "2024-05", year: 2024, type: "talk",
      title: "Genetic Biocontrol Gordon Research Conference",
      venue: "Castelldefels, Spain",
      link: "https://www.grc.org/genetic-biocontrol-conference/2024/",
      note: "Presented Wolbachia modeling to an audience of biologists",
      photoLink: "pics/Photo_GRC_Spain.png"
    },
    {
      date: "2024-04", year: 2024, type: "talk",
      title: "AMS Spring Eastern Sectional Meeting",
      venue: "Howard University, Washington DC",
      link: "https://www.ams.org/meetings/sectional/2312_program.html"
    },
    {
      date: "2024-01", year: 2024, type: "talk",
      title: "Joint Mathematics Meetings 2024",
      venue: "San Francisco, CA",
      link: "https://www.jointmathematicsmeetings.org/meetings/national/jmm2024/2300_intro"
    },

    // ── 2023 ─────────────────────────────────────────────
    {
      date: "2023-11", year: 2023, type: "news",
      title: "Workshop on Mathematics of Malaria Transmission Dynamics",
      venue: "Brin Mathematics Research Center, University of Maryland",
      link: "https://brinmrc.umd.edu/programs/workshops/fall23/fall23-workshop-malaria.html"
    },
    {
      date: "2023-11", year: 2023, type: "talk",
      title: "SIAM Texas-Louisiana Sectional Meeting 2023",
      venue: "University of Louisiana at Lafayette",
      link: "https://userweb.ucs.louisiana.edu/~C00424602/SIAMTXLA2023/"
    },
    {
      date: "2023-09", year: 2023, type: "talk",
      title: "AWM Research Symposium",
      venue: "Clark Atlanta University",
      link: "https://awm-math.org/meetings/awm-research-symposium/"
    },
    {
      date: "2023-07", year: 2023, type: "grant", highlight: true,
      title: "Received NSF LEAPS-MPS Award (DMS-2316242) — PI on mathematical modeling of mosquito-borne diseases",
      venue: "National Science Foundation"
    },
    {
      date: "2023-07", year: 2023, type: "talk",
      title: "2023 SMB Annual Meeting",
      venue: "Ohio State University",
      link: "https://www.smb.org/meetings/"
    },
    {
      date: "2023-04", year: 2023, type: "talk",
      title: "AIM Workshop: Multi-scale modeling of malaria",
      venue: "American Institute of Mathematics, San Jose, CA",
      link: "https://aimath.org/workshops/upcoming/multiscalemalaria/"
    },
    {
      date: "2023-03", year: 2023, type: "grant",
      title: "Received AWM Mentoring Travel Grant to collaborate with Dr. Lauren Childs on malaria modeling",
      venue: "Association for Women in Mathematics"
    },
    {
      date: "2023-01", year: 2023, type: "paper",
      authors: "Zhuolin Qu*, Denis Patterson*, Lauren Childs, Christina Edholm, Joan Ponce, Olivia Prosper, and Lihong Zhao",
      title: "Modeling immunity to malaria with an age-structured PDE framework",
      venue: "SIAM Journal on Applied Mathematics",
      link: "publications/Qu et al-malaria-SIAP.pdf"
    },


    {
      date: "2023-03", year: 2023, type: "paper",
      authors: "Daniela Florez, Alyssa Young, Kerlly J. Bernabe, James M. Hyman, and Zhuolin Qu",
      title: "Modeling sustained transmission of <em>Wolbachia</em> among <em>Anopheles</em> mosquitoes: implications for malaria control in Haiti",
      venue: "Tropical Medicine and Infectious Disease, 8(3) (2023): 162",
      link: "https://www.mdpi.com/2414-6366/8/3/162"
    },
    {
      date: "2022-06", year: 2022, type: "paper",
      authors: "Zhuolin Qu, Tong Wu, and James M. Hyman",
      title: "Modeling spatial waves of <em>Wolbachia</em> invasion for controlling mosquito-borne diseases",
      venue: "SIAM Journal on Applied Mathematics, 82(6) (2022): 1903&ndash;1929",
      link: "publications/Qu-Wu-Hyman-SIAP-Modeling-Spatial.pdf"
    },
    {
      date: "2022-01", year: 2022, type: "paper",
      authors: "Hayriye Gulbudak, Zhuolin Qu, Fabio Milner, and Necibe Tuncer",
      title: "Sensitivity analysis in an immuno-epidemiological vector-host model",
      venue: "Bulletin of Mathematical Biology, 84 (2022): 27",
      link: "publications/Gulbudak-Qu-Milner-Tuncer-SA-ImmunoEpi.pdf"
    },
    {
      date: "2021-09", year: 2021, type: "paper",
      authors: "Charles Stoecker, Alisha Monette, Zhuolin Qu, Norine Schmidt, Megan Clare Craig-Kuh, and Patricia Kissinger",
      title: "Cost effectiveness of Check It: a novel community-based Chlamydia screening and expedited treatment program for young Black men",
      venue: "Clinical Infectious Diseases (2021): ciab818",
      link: "publications/Stoecker-Monnette-Qu-NS-MC-Kissinger-CID-Cost.pdf"
    },
    {
      date: "2021-06", year: 2021, type: "paper",
      authors: "Asma Azizi, Jeremy Dewar, Zhuolin Qu, and James M. Hyman",
      title: "Using an agent-based sexual-network model to guide mitigation efforts for controlling Chlamydia",
      venue: "Epidemics, 35 (2021): 100456",
      link: "publications/Azizi-Dewar-Qu-Hyman-Epidemics-Ct.pdf"
    },
    {
      date: "2021-04", year: 2021, type: "paper",
      authors: "Asma Azizi, Zhuolin Qu, Bryan Lewis, and James M. Hyman",
      title: "Generating a heterosexual bipartite network embedded in social network",
      venue: "Applied Network Science, 6 (2021): 30",
      link: "publications/Azizi-Qu-Lewis-Hyman-AppNetworkSci-Ct.pdf"
    },
    {
      date: "2021-02", year: 2021, type: "paper",
      authors: "Zhuolin Qu, Benjamin H. McMahon, Douglas J. Perkins, and James M. Hyman",
      title: "Staged progression epidemic models for the transmission of invasive nontyphoidal Salmonella (iNTS) with treatment",
      venue: "Mathematical Biosciences and Engineering, 18 (2021): 1529&ndash;1549",
      link: "publications/Qu-McMahon-DJ-Hyman-MBE-iNTS.pdf"
    },
    {
      date: "2020-06", year: 2020, type: "paper",
      authors: "Panpim Thongsripong, Zhuolin Qu, Joshua O Yukich, James M Hyman, and Dawn M Wesson",
      title: "An investigation of human-mosquito contact using surveys and its application in assessing dengue viral transmission risk",
      venue: "Journal of Medical Entomology, 57 (2020): 1942&ndash;1954",
      link: "publications/Thongsripong-Qu-Yukish-Hyman-Wesson-JME-Biting.pdf"
    },
    {
      date: "2018-01", year: 2018, type: "paper",
      authors: "Zhuolin Qu, Ling Xue, and James M. Hyman",
      title: "Modeling the transmission of <em>Wolbachia</em> in mosquitoes for controlling mosquito-borne diseases",
      venue: "SIAM Journal on Applied Mathematics, 78 (2018): 826&ndash;852",
      link: "publications/Qu-Modeling-SIAP.pdf"
    },
    // ── 2022 ─────────────────────────────────────────────
    {
      date: "2022-11", year: 2022, type: "talk",
      title: "PDE Seminar",
      venue: "Southern University of Science and Technology"
    },
    {
      date: "2022-11", year: 2022, type: "talk",
      title: "Annual Meeting of the SIAM Texas-Louisiana Section (TXLA22)",
      venue: "University of Houston",
      link: "https://www.math.uh.edu/siamtxla22/"
    },
    {
      date: "2022-10", year: 2022, type: "talk",
      title: "International Conference on Mathematical Modeling and Analysis of Populations in Biological Systems (ICMA-VIII)",
      venue: "University of Louisiana at Lafayette"
    },
    {
      date: "2022-07", year: 2022, type: "talk",
      title: "SIAM Conference on Life Sciences (LS22)",
      venue: "Pittsburgh, PA",
      link: "https://www.siam.org/conferences/cm/conference/ls22"
    },
    {
      date: "2022-06", year: 2022, type: "talk",
      title: "AWM Research Symposium — Recent Developments in Ecological and Epidemiological Modeling",
      venue: "University of Minnesota",
      link: "https://awm-math.org/meetings/awm-research-symposium/"
    },
    {
      date: "2022-04", year: 2022, type: "grant",
      title: "Proposal accepted for NSF-Simons Convergence Accelerator Team (CAT) Award: 'Developing methodologies for spatial and demographic heterogeneity in malaria immune dynamics'",
      venue: "NSF-Simons Center for Multiscale Cell Fate Research"
    },
    {
      date: "2022-04", year: 2022, type: "news",
      title: "Invited colloquium on Wolbachia modeling at The Fields Institute: Mathematics for Public Health",
      venue: "Fields Institute, Toronto",
      link: "https://youtu.be/wgiFBmkJgJ0",
      note: "Recording on YouTube"
    },
    {
      date: "2022-04", year: 2022, type: "talk",
      title: "Fields Institute Mathematics for Public Health Colloquia",
      venue: "Fields Institute, Toronto",
      link: "http://www.fields.utoronto.ca/activities/21-22/public-health-colloquium"
    },
    {
      date: "2022-04", year: 2022, type: "talk",
      title: "Joint Mathematics Meetings 2022 (online)",
      venue: "Online",
      link: "https://www.jointmathematicsmeetings.org/"
    },

    // ── 2021 ─────────────────────────────────────────────
    {
      date: "2021-11", year: 2021, type: "talk",
      title: "SIAM TX-LA Annual Meeting",
      venue: "South Padre Island, TX"
    },
    {
      date: "2021-10", year: 2021, type: "talk",
      title: "Applied Math Seminar",
      venue: "Tulane University"
    },
    {
      date: "2021-06", year: 2021, type: "news",
      title: "AMS Mathematics Research Communities 2021: 'Dynamics of Infectious Diseases' — highly recommended for early-career mathematicians",
      venue: "AMS Mathematics Research Communities",
      link: "https://www.ams.org/programs/research-communities/2021MRC-Diseases"
    },
    {
      date: "2021-01", year: 2021, type: "paper",
      authors: "Zhuolin Qu, Asma Azizi, Norine Schmidt, Megan Craig-Kuhn, Charles Stoecker, James Hyman, and Patricia Kissinger",
      title: "Effect of screening young men for Chlamydia trachomatis on the rates among women",
      venue: "BMJ Open, 11: e040789",
      link: "https://bmjopen.bmj.com/content/11/1/e040789.full"
    },

    // ── 2020 ─────────────────────────────────────────────
    {
      date: "2020-08", year: 2020, type: "news",
      title: "Started tenure-track Assistant Professor position at the University of Texas at San Antonio",
      venue: "Department of Mathematics, UTSA",
      link: "https://math.utsa.edu/"
    },
    {
      date: "2020-02", year: 2020, type: "news",
      title: "Organized the 2nd 'Mardi Gras' workshop on Modeling disease transmission, including COVID-19",
      venue: "Tulane University, New Orleans"
    },

    // ── 2019 ─────────────────────────────────────────────
    {
      date: "2019-11", year: 2019, type: "news",
      title: "Visiting Math-Bio groups at Georgia State University — many engaging conversations with faculty",
      venue: "Georgia State University, Atlanta"
    },
    {
      date: "2019-09", year: 2019, type: "paper",
      authors: "Zhuolin Qu and James M. Hyman",
      title: "Generating a hierarchy of reduced models for a system of differential equations modeling the spread of <em>Wolbachia</em> in mosquitoes",
      venue: "SIAM Journal on Applied Mathematics, 79: 1675–1699",
      link: "publications/Qu-Reduction-SIAP.pdf"
    },
    {
      date: "2019-09", year: 2019, type: "news",
      title: "Interview with Math Horizons: 'Fighting an Epidemic with an Epidemic'",
      venue: "Math Horizons, Mathematical Association of America",
      link: "https://www.tandfonline.com/doi/full/10.1080/10724117.2019.1574148"
    },
    {
      date: "2019-05", year: 2019, type: "talk",
      title: "CMPD5 Conference — presented Model Reduction results",
      venue: "Fort Lauderdale, FL"
    },
    {
      date: "2019-02", year: 2019, type: "news",
      title: "Organized 'Mardi Gras' workshop on Modeling the Spread of Infectious Diseases",
      venue: "Tulane University, New Orleans"
    },
    {
      date: "2019-01", year: 2019, type: "news",
      title: "Wolbachia mosquito research reported by Forbes Magazine",
      venue: "Forbes",
      link: "https://www.forbes.com/sites/rachelcrowell/2019/01/14/something-more-pleasant-than-the-government-shutdown-math-based-mosquito-control/"
    },

    // ── 2017 ─────────────────────────────────────────────
    {
      date: "2017-11", year: 2017, type: "news",
      title: "Visited Math-Bio groups at Shanghai Normal University and Guangzhou University",
      venue: "China"
    },
    {
      date: "2017-09", year: 2017, type: "talk",
      title: "Seminar talk at Tulane School of Public Health and Tropical Medicine — visited the real mosquito lab!",
      venue: "Tulane University School of Public Health"
    },
    {
      date: "2017-02", year: 2017, type: "grant",
      title: "Won 'Award for Excellence in Research and Presentation by a Postdoctoral Fellow' at the 28th Annual Health Sciences Research Days (among ~200 presentations)",
      venue: "Tulane University, New Orleans"
    },

    // ── Numerical Methods papers (field: "numerical") ─────
    // These appear only on the Publications page, not in the Updates feed.
    {
      date: "2022-06", year: 2022, type: "paper", field: "numerical",
      authors: "Zhuolin Qu, Alexander Kurganov, and Tong Wu",
      title: "Well-balanced positivity preserving adaptive moving mesh central-upwind schemes for the Saint-Venant system",
      venue: "ESAIM: Mathematical Modelling and Numerical Analysis, 56 (2022): 1327&ndash;1360",
      link: "https://www.esaim-m2an.org/articles/m2an/abs/2022/04/m2an210164/m2an210164.html"
    },
    {
      date: "2021-01", year: 2021, type: "paper", field: "numerical",
      authors: "Zhuolin Qu, Alexander Kurganov, Olga Rozanova, and Tong Wu",
      title: "Adaptive moving mesh central-upwind schemes for hyperbolic system of PDEs: applications to compressible Euler equations and granular hydrodynamics",
      venue: "Communications on Applied Mathematics and Computation, 3 (2021): 445&ndash;479",
      link: "https://math.sustech.edu.cn/uploads/20191002/519c9619db739e7eafe738f39ff81fe7.pdf"
    },
    {
      date: "2015-10", year: 2015, type: "paper", field: "numerical",
      authors: "Yuanzhen Cheng, Alexander Kurganov, Zhuolin Qu, and Tao Tang",
      title: "Fast and stable explicit operator splitting methods for phase-field models",
      venue: "Journal of Computational Physics, 303 (2015): 45&ndash;65",
      link: "publications/Cheng-Kurganov-Qu-Tang.pdf"
    },
    {
      date: "2015-08", year: 2015, type: "paper", field: "numerical",
      authors: "Chiu-Yen Kao, Alexander Kurganov, Zhuolin Qu, and Ying Wang",
      title: "A fast explicit operator splitting method for modified Buckley-Leverett equations",
      venue: "Journal of Scientific Computing, 64 (2015): 837&ndash;857",
      link: "publications/Kao-Kurganov-Qu-Wang.pdf"
    },
    {
      date: "2013-01", year: 2013, type: "paper", field: "numerical",
      authors: "Alina Chertock, Alexander Kurganov, Zhuolin Qu, and Tong Wu",
      title: "Three-layer approximation of two-layer shallow water equations",
      venue: "Mathematical Modeling and Analysis, 18 (2013): 675&ndash;693",
      link: "publications/Chertock-Kurganov-Qu-Wu.pdf"
    }

  ] // end entries
}; // end siteData
