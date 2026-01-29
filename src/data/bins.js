 const publicBins = [
  // --- RAJKOT (25) ---
  { id: 1, name: "Race Course Ground - Main Gate", type: "general", lat: 22.3045, lng: 70.7932 },
  { id: 2, name: "Race Course - Children Park", type: "plastic", lat: 22.3061, lng: 70.7954 },
  { id: 3, name: "Shastri Maidan Entrance", type: "paper", lat: 22.3012, lng: 70.8015 },
  { id: 4, name: "RMC Central Office - Dhebar Road", type: "ewaste", lat: 22.2921, lng: 70.8028 },
  { id: 5, name: "Crystal Mall - Main Entrance", type: "plastic", lat: 22.2795, lng: 70.7621 },
  { id: 6, name: "Raiya Road Civic Center", type: "general", lat: 22.2954, lng: 70.7689 },
  { id: 7, name: "Amin Marg Junction", type: "plastic", lat: 22.2858, lng: 70.7741 },
  { id: 8, name: "Aji Dam Garden - Entry Gate", type: "general", lat: 22.2731, lng: 70.8354 },
  { id: 9, name: "Yagnik Road - Indira Statue", type: "paper", lat: 22.2987, lng: 70.7965 },
  { id: 10, name: "Kotecha Chowk Market Area", type: "general", lat: 22.2912, lng: 70.7812 },
  { id: 11, name: "Kalavad Road - KKV Hall", type: "plastic", lat: 22.2811, lng: 70.7663 },
  { id: 12, name: "Trikon Baug Bus Stand", type: "general", lat: 22.2995, lng: 70.8001 },
  { id: 13, name: "Bhaktinagar Station Road", type: "ewaste", lat: 22.2815, lng: 70.8102 },
  { id: 14, name: "Saurashtra University Gate", type: "paper", lat: 22.2934, lng: 70.7588 },
  { id: 15, name: "Nana Mava Road Civic Center", type: "plastic", lat: 22.2745, lng: 70.7728 },
  { id: 16, name: "Jubilee Garden - Museum Side", type: "general", lat: 22.3024, lng: 70.8039 },
  { id: 17, name: "Sorathiyawadi Circle", type: "paper", lat: 22.2842, lng: 70.8164 },
  { id: 18, name: "Gondal Road - Malaviya Chowk", type: "general", lat: 22.2941, lng: 70.7988 },
  { id: 19, name: "150 Feet Ring Road - Raiya Circle", type: "plastic", lat: 22.3058, lng: 70.7675 },
  { id: 20, name: "Big Bazar - Ring Road", type: "glass", lat: 22.2764, lng: 70.7638 },
  { id: 21, name: "Pradyuman Park - Main Gate", type: "general", lat: 22.2782, lng: 70.8521 },
  { id: 22, name: "Bapu Nagar - Jilla Garden", type: "plastic", lat: 22.3115, lng: 70.8124 },
  { id: 23, name: "Mavdi Main Road Market", type: "general", lat: 22.2688, lng: 70.7835 },
  { id: 24, name: "Metoda GIDC - Entry Gate", type: "ewaste", lat: 22.2351, lng: 70.7024 },
  { id: 25, name: "Reliance Mall - 150ft Ring Rd", type: "glass", lat: 22.2855, lng: 70.7542 },

  // --- AHMEDABAD (10) ---
  { id: 101, name: "Sabarmati Riverfront Event Centre", type: "general", lat: 23.0246, lng: 72.5701 },
  { id: 102, name: "Alpha One Mall - Vastrapur", type: "plastic", lat: 23.0402, lng: 72.5325 },
  { id: 103, name: "Kankaria Lake Gate 3", type: "paper", lat: 23.0062, lng: 72.5997 },
  { id: 104, name: "AMC Office Danapith", type: "ewaste", lat: 23.0232, lng: 72.5889 },
  { id: 105, name: "Vastrapur Lake Garden", type: "plastic", lat: 23.0361, lng: 72.5298 },
  { id: 106, name: "Law Garden Night Market", type: "general", lat: 23.0255, lng: 72.5621 },
  { id: 107, name: "Iscon Cross Road Junction", type: "paper", lat: 23.0231, lng: 72.5065 },
  { id: 108, name: "CG Road Shopping Plaza", type: "glass", lat: 23.0304, lng: 72.5612 },
  { id: 109, name: "Science City Main Entry", type: "ewaste", lat: 23.0754, lng: 72.5021 },
  { id: 110, name: "Manek Chowk Area", type: "general", lat: 23.0241, lng: 72.5925 },

  // --- SURAT (10) ---
  { id: 201, name: "Dumas Beach Promenade", type: "general", lat: 21.0744, lng: 72.7121 },
  { id: 202, name: "VR Mall Magdalla Road", type: "plastic", lat: 21.1512, lng: 72.7667 },
  { id: 203, name: "SMC HQ Muglisara", type: "ewaste", lat: 21.2023, lng: 72.8195 },
  { id: 204, name: "Gopi Talav Main Entrance", type: "paper", lat: 21.1915, lng: 72.8312 },
  { id: 205, name: "Science Centre City Light", type: "glass", lat: 21.1645, lng: 72.7934 },
  { id: 206, name: "Surat Railway Station Exit", type: "general", lat: 21.2045, lng: 72.8405 },
  { id: 207, name: "Sarthana Nature Park", type: "plastic", lat: 21.2291, lng: 72.8981 },
  { id: 208, name: "Adajan Honey Park Road", type: "paper", lat: 21.1944, lng: 72.7925 },
  { id: 209, name: "Vesu Canal Walkway", type: "general", lat: 21.1412, lng: 72.7821 },
  { id: 210, name: "Varachha Lambe Hanuman Rd", type: "plastic", lat: 21.2185, lng: 72.8552 },

  // --- VADODARA (5) ---
  { id: 301, name: "Sayaji Baug Main Gate", type: "general", lat: 22.3121, lng: 73.1932 },
  { id: 302, name: "Inorbit Mall Entrance", type: "plastic", lat: 22.3085, lng: 73.1584 },
  { id: 303, name: "VMC Khanderao Market", type: "ewaste", lat: 22.2982, lng: 73.2014 },
  { id: 304, name: "Laxmi Vilas Palace Gate", type: "paper", lat: 22.2941, lng: 73.1915 },
  { id: 305, name: "Alkapuri RC Dutt Road", type: "glass", lat: 22.3095, lng: 73.1725 },

  // --- KUTCH (5) ---
  { id: 401, name: "Bhuj Haat Entrance", type: "general", lat: 23.2425, lng: 69.6669 },
  { id: 402, name: "Hamirsar Lake Walkway", type: "plastic", lat: 23.2485, lng: 69.6631 },
  { id: 403, name: "Mandvi Beach Main Area", type: "paper", lat: 22.8254, lng: 69.3485 },
  { id: 404, name: "Gandhidham Railway Stn", type: "general", lat: 23.0762, lng: 70.1285 },
  { id: 405, name: "Anjar New Market Area", type: "plastic", lat: 23.1121, lng: 70.0245 },

  // --- ANAND & KHEDA (5) ---
  { id: 501, name: "Amul Dairy Gate Anand", type: "general", lat: 22.5565, lng: 72.9515 },
  { id: 502, name: "V.V. Nagar Mota Bazar", type: "plastic", lat: 22.5524, lng: 72.9242 },
  { id: 503, name: "Nadiad Santram Mandir Rd", type: "paper", lat: 22.6912, lng: 72.8615 },
  { id: 504, name: "Karamsad Medical Hospital", type: "ewaste", lat: 22.5412, lng: 72.8985 },
  { id: 505, name: "Anand Railway Station", type: "general", lat: 22.5615, lng: 72.9642 },

  // --- GANDHINAGAR (5) ---
  { id: 601, name: "Akshardham Temple Parking", type: "general", lat: 23.2301, lng: 72.6741 },
  { id: 602, name: "Sector 21 Market Center", type: "paper", lat: 23.2365, lng: 72.6482 },
  { id: 603, name: "Mahatma Mandir Entry", type: "plastic", lat: 23.2255, lng: 72.6361 },
  { id: 604, name: "Indroda Park Main Gate", type: "general", lat: 23.1954, lng: 72.6582 },
  { id: 605, name: "Infocity IT Park Area", type: "ewaste", lat: 23.1885, lng: 72.6285 },

  // --- SOUTH GUJARAT (Valsad/Bharuch) (5) ---
  { id: 701, name: "Tithal Beach Promenade", type: "general", lat: 20.6012, lng: 72.9021 },
  { id: 702, name: "Bharuch Railway Stn Exit", type: "plastic", lat: 21.7104, lng: 73.0015 },
  { id: 703, name: "Vapi GIDC Char Rasta", type: "ewaste", lat: 20.3712, lng: 72.9154 },
  { id: 704, name: "Ankleshwar GIDC Gate 1", type: "general", lat: 21.6254, lng: 73.0185 },
  { id: 705, name: "Valsad Azad Chowk", type: "paper", lat: 20.6085, lng: 72.9321 },

  // --- NORTH GUJARAT (Mehsana/Patan) (5) ---
  { id: 801, name: "Mehsana Modhera Cross Rd", type: "general", lat: 23.5912, lng: 72.3615 },
  { id: 802, name: "Rani Ki Vav Entry Patan", type: "paper", lat: 23.8585, lng: 72.1021 },
  { id: 803, name: "Modhera Sun Temple Area", type: "plastic", lat: 23.5835, lng: 72.1325 },
  { id: 804, name: "Palanpur Railway Station", type: "general", lat: 24.1724, lng: 72.4385 },
  { id: 805, name: "Ambaji Temple Entry", type: "general", lat: 24.3315, lng: 72.8512 }
];

export default publicBins