  // ============================================================
  // Montana boundary — loaded from js/data/montana-boundary.js
  // which sets window.MT_GEOJSON_RING (the same coordinate ring).
  // ============================================================
  const MT_GEOJSON_RING = window.MT_GEOJSON_RING;

  // (original embedded array kept below as a no-op so this file's line
  //  references in errors stay close to the single-file version)
  const _MT_RING_UNUSED = [[-111.044275,45.001345],[-111.056207,44.935901],[-111.055629,44.933578],[-111.056888,44.866658],[-111.055495,44.666262],[-111.055208,44.624927],[-111.048974,44.474072],[-111.106574,44.48633],[-111.122654,44.493659],[-111.131379,44.499925],[-111.139455,44.517112],[-111.219236,44.622616],[-111.323669,44.724474],[-111.377682,44.751744],[-111.394815,44.751351],[-111.481536,44.709186],[-111.489008,44.705553],[-111.516588,44.643707],[-111.525764,44.604883],[-111.601249,44.55421],[-111.617502,44.553035],[-111.631505,44.552022],[-111.704218,44.560205],[-111.737191,44.54306],[-111.806528,44.515459],[-111.843295,44.528225],[-111.849293,44.539837],[-111.870504,44.564033],[-111.947941,44.556776],[-112.078471,44.533551],[-112.187115,44.534452],[-112.221698,44.543519],[-112.229477,44.549494],[-112.235864,44.555194],[-112.246665,44.56101],[-112.258297,44.564334],[-112.274083,44.564334],[-112.299009,44.559348],[-112.339721,44.538577],[-112.347199,44.520298],[-112.3566,44.493127],[-112.358926,44.48628],[-112.371294,44.472108],[-112.38708,44.460476],[-112.410345,44.462968],[-112.473207,44.480027],[-112.544224,44.483763],[-112.68816,44.49885],[-112.71911,44.504344],[-112.781294,44.484888],[-112.812087,44.45137],[-112.822046,44.434109],[-112.822046,44.420831],[-112.823373,44.406225],[-112.824701,44.393611],[-112.829247,44.385427],[-112.83134,44.38166],[-112.849266,44.371038],[-112.875822,44.374357],[-112.9703,44.426933],[-113.003544,44.450814],[-113.027147,44.495915],[-113.05677,44.618657],[-113.053529,44.621187],[-113.049349,44.62938],[-113.051504,44.63695],[-113.101082,44.718832],[-113.134617,44.763149],[-113.158206,44.780847],[-113.207878,44.80804],[-113.247166,44.82295],[-113.278382,44.812706],[-113.329491,44.788645],[-113.341704,44.784853],[-113.353631,44.791395],[-113.455071,44.865424],[-113.475838,44.894648],[-113.498745,44.942314],[-113.494446,44.948597],[-113.480836,44.95031],[-113.472715,44.948123],[-113.447199,44.971924],[-113.445915,44.979918],[-113.445751,45.018351],[-113.449349,45.045745],[-113.463961,45.063194],[-113.47377,45.0617],[-113.485278,45.063519],[-113.576453,45.130311],[-113.57636,45.133771],[-113.566179,45.14312],[-113.565979,45.149335],[-113.599506,45.191114],[-113.650064,45.23471],[-113.674409,45.249411],[-113.738729,45.329741],[-113.760924,45.406501],[-113.774156,45.465372],[-113.76576,45.483228],[-113.772915,45.512322],[-113.786269,45.521385],[-113.810117,45.530924],[-113.813456,45.550002],[-113.802009,45.579096],[-113.804871,45.589112],[-113.813933,45.600559],[-113.835396,45.61296],[-113.896681,45.641451],[-113.93422,45.682232],[-113.9426,45.686362],[-113.971565,45.700636],[-113.987759,45.705247],[-114.015633,45.696127],[-114.019315,45.692937],[-114.022534,45.67962],[-114.03493,45.647967],[-114.135249,45.557465],[-114.187852,45.542151],[-114.247828,45.545489],[-114.309613,45.469432],[-114.350819,45.468542],[-114.36662,45.491616],[-114.460542,45.561283],[-114.473759,45.563278],[-114.514196,45.564734],[-114.551286,45.559007],[-114.560855,45.564575],[-114.561773,45.565109],[-114.563652,45.637412],[-114.561046,45.639906],[-114.550834,45.6426],[-114.545574,45.642928],[-114.54182,45.641305],[-114.515411,45.652842],[-114.500925,45.666715],[-114.495421,45.703321],[-114.497553,45.710677],[-114.504869,45.722176],[-114.528667,45.731636],[-114.547763,45.743309],[-114.566172,45.773864],[-114.514596,45.840785],[-114.509303,45.845531],[-114.498809,45.850676],[-114.44868,45.858891],[-114.39376,45.89402],[-114.401552,45.963195],[-114.412007,45.978057],[-114.429638,45.986638],[-114.465376,45.996077],[-114.483379,46.008047],[-114.490578,46.022872],[-114.4912,46.034059],[-114.4912,46.044003],[-114.476284,46.062026],[-114.467583,46.081914],[-114.468205,46.099937],[-114.476284,46.112988],[-114.48312,46.129147],[-114.472643,46.162202],[-114.426885,46.289671],[-114.378,46.435371],[-114.385297,46.467162],[-114.346528,46.535789],[-114.331093,46.607649],[-114.331093,46.630248],[-114.337942,46.641205],[-114.341336,46.642803],[-114.349584,46.646684],[-114.370129,46.654217],[-114.422176,46.652163],[-114.44683,46.645314],[-114.461211,46.639151],[-114.481943,46.631993],[-114.592264,46.632861],[-114.594707,46.633558],[-114.614423,46.639188],[-114.635868,46.65951],[-114.642713,46.673145],[-114.641745,46.679286],[-114.641322,46.686404],[-114.642692,46.694622],[-114.644747,46.702155],[-114.655704,46.711743],[-114.667346,46.719276],[-114.675505,46.719516],[-114.69063,46.719961],[-114.717645,46.713994],[-114.739253,46.715167],[-114.76718,46.738828],[-114.825923,46.781949],[-114.853279,46.799794],[-114.888146,46.808573],[-114.920459,46.827697],[-114.927837,46.83599],[-114.938713,46.869021],[-114.936015,46.899761],[-114.975789,46.932865],[-115.072985,47.01376],[-115.099178,47.048129],[-115.193221,47.133026],[-115.200547,47.139154],[-115.266723,47.181101],[-115.29211,47.209861],[-115.294785,47.220914],[-115.320184,47.255717],[-115.339201,47.261623],[-115.421645,47.271736],[-115.479255,47.282089],[-115.52369,47.298919],[-115.551309,47.333856],[-115.561439,47.351887],[-115.576836,47.366825],[-115.661341,47.402663],[-115.69057,47.415059],[-115.721084,47.42235],[-115.729861,47.447287],[-115.725931,47.466934],[-115.712178,47.488546],[-115.729861,47.518016],[-115.739684,47.537663],[-115.735755,47.555346],[-115.721207,47.576323],[-115.718072,47.592675],[-115.706284,47.637864],[-115.72377,47.696671],[-115.729123,47.703102],[-115.919291,47.857406],[-116.007254,47.944968],[-116.048421,47.97682],[-116.048424,47.977126],[-116.04932,48.066644],[-116.049368,48.072134],[-116.049398,48.075395],[-116.049415,48.07722],[-116.049353,48.21546],[-116.049226,48.502058],[-116.049023,48.957947],[-116.049025,48.958351],[-116.049193,49.000912],[-115.251126,48.999557],[-114.728125,49.000623],[-114.678217,49.000725],[-114.674398,49.000679],[-114.43883,49.001076],[-114.068151,48.999364],[-113.692982,48.997632],[-113.116356,48.998462],[-113.110155,48.99855],[-113.106891,48.998501],[-113.103212,48.99853],[-113.098147,48.998494],[-113.095436,48.998533],[-113.092055,48.998543],[-113.087863,48.998557],[-113.085576,48.998581],[-113.011041,48.998643],[-113.009895,48.998619],[-112.193588,48.998229],[-111.854088,48.998067],[-111.85409,48.998039],[-111.761679,48.997614],[-111.761613,48.99765],[-111.270702,48.997895],[-110.887459,48.998087],[-110.886706,48.998124],[-110.743209,48.998363],[-110.216135,48.999239],[-110.215516,48.999197],[-110.171595,48.999262],[-109.995618,48.999642],[-109.489686,49.000267],[-109.384762,49.000397],[-109.384068,49.000374],[-109.06057,48.999666],[-109.060292,48.999621],[-109.000708,48.999234],[-108.994722,48.999237],[-108.543194,48.999377],[-108.488063,48.999368],[-108.236495,48.999405],[-107.179865,48.999559],[-106.625597,48.99964],[-106.617539,48.999583],[-106.518201,48.999564],[-106.500592,48.999756],[-106.374616,48.999617],[-106.368151,48.999503],[-106.274267,48.999312],[-106.24621,48.999258],[-106.243154,48.999373],[-106.233987,48.999423],[-106.112108,48.999279],[-106.050543,48.999207],[-105.966197,48.999445],[-105.834181,48.999707],[-105.775808,48.999637],[-105.65027,48.999444],[-105.612577,48.999703],[-105.607542,48.999624],[-105.578616,48.999673],[-105.522636,48.999591],[-105.411972,48.999582],[-105.407909,48.99948],[-105.391379,48.999475],[-105.38749,48.999382],[-105.355888,48.999357],[-105.277521,48.999457],[-105.265192,48.9995],[-105.057514,48.999448],[-104.647389,48.999344],[-104.543636,48.999541],[-104.048736,48.999877],[-104.048478,48.987007],[-104.048616,48.966736],[-104.048555,48.963772],[-104.0488,48.958997],[-104.048627,48.957124],[-104.048698,48.951823],[-104.048872,48.94963],[-104.04877,48.943301],[-104.048701,48.940331],[-104.048807,48.933636],[-104.048744,48.912113],[-104.048746,48.906858],[-104.048643,48.902609],[-104.048719,48.879921],[-104.048893,48.875739],[-104.048883,48.874008],[-104.048824,48.867539],[-104.048652,48.865734],[-104.0489,48.847387],[-104.048569,48.797052],[-104.048537,48.788552],[-104.048548,48.751356],[-104.04834,48.747133],[-104.047883,48.664191],[-104.047849,48.663163],[-104.047861,48.658856],[-104.047865,48.65745],[-104.047887,48.649911],[-104.047819,48.648631],[-104.047582,48.633984],[-104.047582,48.633976],[-104.04762,48.627015],[-104.047586,48.625644],[-104.04793,48.62019],[-104.048212,48.599055],[-104.047974,48.591606],[-104.047811,48.56277],[-104.047783,48.539737],[-104.047648,48.531489],[-104.047876,48.530798],[-104.047513,48.525913],[-104.047675,48.517852],[-104.047555,48.49414],[-104.047392,48.467086],[-104.047259,48.452941],[-104.047294,48.452529],[-104.047192,48.447251],[-104.04709,48.445903],[-104.04696,48.421065],[-104.047134,48.411057],[-104.046969,48.390675],[-104.046913,48.389433],[-104.046913,48.389429],[-104.046654,48.374773],[-104.046371,48.374154],[-104.046332,48.34229],[-104.046039,48.256761],[-104.045861,48.255097],[-104.045645,48.246179],[-104.045729,48.244586],[-104.045692,48.241415],[-104.04556,48.193913],[-104.045424,48.192473],[-104.045498,48.176249],[-104.045399,48.16439],[-104.04412,47.996107],[-104.044162,47.992836],[-104.043933,47.971515],[-104.043497,47.95449],[-104.043329,47.949554],[-104.04223,47.891031],[-104.041662,47.862282],[-104.041869,47.841699],[-104.042567,47.808237],[-104.042432,47.805358],[-104.042384,47.803256],[-104.043199,47.747292],[-104.043242,47.747106],[-104.044621,47.45938],[-104.044797,47.438445],[-104.045069,47.397461],[-104.045333,47.343452],[-104.045313,47.331955],[-104.045307,47.330128],[-104.045121,47.276969],[-104.045155,47.27393],[-104.045088,47.271406],[-104.045057,47.266868],[-104.045091,47.265953],[-104.045159,47.263874],[-104.045081,47.092813],[-104.045018,47.081202],[-104.045354,47.078574],[-104.045259,47.063901],[-104.045227,47.057502],[-104.045195,47.053639],[-104.045052,47.040863],[-104.045076,47.037589],[-104.045566,46.941231],[-104.045535,46.934009],[-104.045542,46.933887],[-104.045402,46.725423],[-104.045403,46.722177],[-104.04537,46.721332],[-104.045572,46.713881],[-104.045474,46.708738],[-104.045271,46.641449],[-104.045271,46.641443],[-104.045335,46.540929],[-104.045462,46.341895],[-104.045469,46.324545],[-104.045633,46.280188],[-104.04667,46.000001],[-104.045443,45.94531],[-104.04403,45.881975],[-104.04403,45.881971],[-104.044009,45.871974],[-104.043814,45.868385],[-104.041937,45.557915],[-104.041647,45.550691],[-104.041717,45.539122],[-104.041145,45.503367],[-104.041274,45.499994],[-104.041764,45.490789],[-104.04041,45.393474],[-104.040114,45.374214],[-104.040265,45.345356],[-104.040358,45.335946],[-104.040274,45.212891],[-104.040128,44.999987],[-104.057698,44.997431],[-104.470117,44.998453],[-104.470422,44.998453],[-104.663882,44.998869],[-104.665171,44.998618],[-104.759855,44.999066],[-104.765063,44.999183],[-105.01824,45.000437],[-105.019284,45.000329],[-105.025266,45.00029],[-105.038405,45.000345],[-105.076607,45.000347],[-105.848065,45.000396],[-105.918995,44.997771],[-105.928184,44.993647],[-106.024814,44.993688],[-106.263586,44.993788],[-106.888773,44.995885],[-106.892875,44.995947],[-107.080624,44.996791],[-107.13418,45.000109],[-107.607824,45.000929],[-107.608854,45.00086],[-107.911495,45.000948],[-108.125666,45.001011],[-108.249345,44.999458],[-108.565921,45.000578],[-108.578484,45.000484],[-108.621313,45.000408],[-109.062262,44.999623],[-109.08301,44.99961],[-109.103445,45.005904],[-109.263431,45.005345],[-109.269294,45.005283],[-109.798687,45.002188],[-110.025544,45.003602],[-110.026347,45.003665],[-110.110103,45.003905],[-110.221343,44.996176],[-110.547165,44.992459],[-110.552433,44.992237],[-110.705272,44.992324],[-110.750767,44.997948],[-110.875772,45.002101],[-111.044275,45.001345]];

  const MT_LATLNG_RING = MT_GEOJSON_RING.map(([lng, lat]) => [lat, lng]);

  // Montana extent
  const MT_BOUNDS = L.latLngBounds([[44.35, -116.10], [49.05, -103.95]]);

  // ============================================================
  // Map
  // ============================================================
  const map = L.map('map', {
    zoomControl: true,
    minZoom: 6, maxZoom: 14,
    maxBounds: MT_BOUNDS.pad(0.05),
    maxBoundsViscosity: 1.0
  }).fitBounds(MT_BOUNDS);

  const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);
  const topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17, attribution: '© OpenTopoMap (CC-BY-SA)'
  });
  const satellite = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 19, attribution: 'Tiles © Esri — Maxar, Earthstar Geographics' }
  );
  const satLabels = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 19, attribution: '' }
  );
  // Hybrid: when satellite is selected, also show place labels
  satellite.on('add', () => satLabels.addTo(map));
  satellite.on('remove', () => map.removeLayer(satLabels));

  // ============================================================
  // BLM Lands — exact polygons from BLM National SMA (BLM-only)
  // Tile layer for the visual, feature query for click identification.
  // ============================================================
  const BLM_SERVICE = 'https://gis.blm.gov/arcgis/rest/services/lands/BLM_Natl_SMA_Cached_BLM_Only/MapServer';
  const blmTiles = L.esri.tiledMapLayer({
    url: BLM_SERVICE,
    opacity: 0.7,
    maxNativeZoom: 13,
    maxZoom: 19,
    attribution: 'BLM National SMA'
  });

  // ============================================================
  // Bear layers — live from MT FWP feature services
  // ============================================================
  const FWP_BASE = 'https://services3.arcgis.com/Cdxz8r11hT0MGzg1/arcgis/rest/services';
  const SVC_DISTRIB  = `${FWP_BASE}/WILD_DISTRIB_BEARS_REGS/FeatureServer/0`;
  const SVC_RECOVERY = `${FWP_BASE}/WILD_GRIZZLYBEAR_RECOVAREAS_MT/FeatureServer/0`;
  const SVC_OCCUPIED = `${FWP_BASE}/WILD_DISTRIB_GRIZZLYBEAR_EOR_MT_22/FeatureServer/0`;

  // Generalized distribution polygons — styled by BEAR attribute
  const distribLayer = L.esri.featureLayer({
    url: SVC_DISTRIB,
    style: (feature) => {
      const v = (feature.properties.BEAR || '').toUpperCase();
      if (v.includes('GRIZZLY') && v.includes('BLACK'))
        return { color:'#54278f', fillColor:'#9e9ac8', fillOpacity:0.35, weight:0.6 };
      if (v.includes('GRIZZLY'))
        return { color:'#54278f', fillColor:'#807dba', fillOpacity:0.40, weight:0.6 };
      if (v.includes('BLACK'))
        return { color:'#08519c', fillColor:'#9ecae1', fillOpacity:0.35, weight:0.6 };
      return { color:'#525252', fillColor:'#bdbdbd', fillOpacity:0.25, weight:0.6 };
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(`<strong>Bear distribution</strong><br>${feature.properties.BEAR || ''}`, { sticky: true });
    }
  });

  const recoveryLayer = L.esri.featureLayer({
    url: SVC_RECOVERY,
    style: { color: '#67000d', fillColor: '#a50f15', fillOpacity: 0.30, weight: 2 },
    onEachFeature: (feature, layer) => {
      const n = feature.properties.GBRZ_NAME || feature.properties.NAME || 'Recovery Zone';
      layer.bindTooltip(`<strong>Grizzly Recovery Zone</strong><br>${n}`, { sticky: true });
    }
  });

  const occupiedLayer = L.esri.featureLayer({
    url: SVC_OCCUPIED,
    style: { color: '#7a0177', fillColor: '#dd3497', fillOpacity: 0.25, weight: 1.5, dashArray: '5,5' },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip('<strong>Grizzly Estimated Occupied Range (2022)</strong>', { sticky: true });
    }
  });

  // ============================================================
  // Population — major cities sized by population
  // ============================================================
  const cities = [
    { name: 'Billings',     pop: 117116, lat: 45.7833, lng: -108.5007 },
    { name: 'Missoula',     pop:  76000, lat: 46.8721, lng: -113.9940 },
    { name: 'Great Falls',  pop:  60000, lat: 47.5053, lng: -111.3008 },
    { name: 'Bozeman',      pop:  56000, lat: 45.6770, lng: -111.0429 },
    { name: 'Butte',        pop:  35000, lat: 46.0038, lng: -112.5348 },
    { name: 'Helena',       pop:  34000, lat: 46.5891, lng: -112.0391 },
    { name: 'Kalispell',    pop:  27000, lat: 48.1958, lng: -114.3137 },
    { name: 'Havre',        pop:   9700, lat: 48.5500, lng: -109.6841 },
    { name: 'Miles City',   pop:   8400, lat: 46.4083, lng: -105.8406 },
    { name: 'Whitefish',    pop:   8200, lat: 48.4111, lng: -114.3374 },
    { name: 'Lewistown',    pop:   5900, lat: 47.0625, lng: -109.4283 },
    { name: 'Sidney',       pop:   6400, lat: 47.7167, lng: -104.1561 },
    { name: 'Glendive',     pop:   4900, lat: 47.1056, lng: -104.7125 },
    { name: 'Glasgow',      pop:   3300, lat: 48.1972, lng: -106.6361 },
    { name: 'Wolf Point',   pop:   2500, lat: 48.0906, lng: -105.6414 }
  ];
  const populationLayer = L.layerGroup();
  cities.forEach(c => {
    const km = Math.max(6, Math.sqrt(c.pop) / 4);
    L.circle([c.lat, c.lng], {
      radius: km * 1000,
      color: '#cc4c02', fillColor: '#fe9929',
      fillOpacity: 0.40, weight: 1
    }).bindTooltip(`${c.name}: ${c.pop.toLocaleString()}`, { sticky: true }).addTo(populationLayer);
    L.circleMarker([c.lat, c.lng], {
      radius: 3, color: '#7a2900', fillColor: '#7a2900', fillOpacity: 1, weight: 1
    }).addTo(populationLayer);
  });

  // ============================================================
  // Live radar — NEXRAD base reflectivity via Iowa State Mesonet
  // (TMS tiles, CORS-friendly, refreshed by cache-busting every 5 min)
  // ============================================================
  const radarLayer = L.layerGroup();
  function refreshRadar() {
    const v = Date.now();
    const url = `https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913/{z}/{x}/{y}.png?v=${v}`;
    const next = L.tileLayer(url, {
      opacity: 0.7, tileSize: 256,
      maxNativeZoom: 12, maxZoom: 19,
      attribution: 'NEXRAD via Iowa State Mesonet'
    });
    radarLayer.eachLayer(l => radarLayer.removeLayer(l));
    radarLayer.addLayer(next);
    const el = document.getElementById('radar-stamp');
    if (el) el.textContent = `Radar: ${new Date().toLocaleTimeString()}`;
  }
  refreshRadar();
  setInterval(refreshRadar, 5 * 60 * 1000);

  // ============================================================
  // Storm forecast — Open-Meteo hourly precipitation forecast,
  // rendered as a smooth bilinear-interpolated canvas overlay
  // (looks continuous like radar, not blocky)
  // ============================================================
  const STORM_HOURS = 4;
  const STORM_LA1 = 49.0, STORM_LA2 = 44.4;
  const STORM_LO1 = -116.0, STORM_LO2 = -104.0;
  const STORM_NX = 24, STORM_NY = 16; // 384 samples ≈ 33–36 km spacing
  const STORM_DX = (STORM_LO2 - STORM_LO1) / (STORM_NX - 1);
  const STORM_DY = (STORM_LA1 - STORM_LA2) / (STORM_NY - 1);

  let stormGrid = null; // 2D array [y][x] of max precipitation (inches)

  function lerpColor(a, b, t) {
    return [
      a[0] + (b[0] - a[0]) * t,
      a[1] + (b[1] - a[1]) * t,
      a[2] + (b[2] - a[2]) * t,
      a[3] + (b[3] - a[3]) * t
    ];
  }
  // Precipitation color scale (RGBA, 0–255). Tuned to fade in gently and
  // saturate to deep purple for heavy rain, similar feel to NEXRAD purples.
  const STORM_STOPS = [
    [0.005, [212, 212, 241,  60]],
    [0.05,  [180, 180, 230, 110]],
    [0.10,  [247, 104, 161, 150]],
    [0.25,  [197,  27, 138, 180]],
    [0.50,  [122,   1, 119, 200]],
    [1.00,  [ 84,  39, 143, 220]]
  ];
  function colorForPrecip(v) {
    if (v < STORM_STOPS[0][0]) return [0, 0, 0, 0];
    for (let i = 1; i < STORM_STOPS.length; i++) {
      const [vUp, cUp] = STORM_STOPS[i];
      const [vLo, cLo] = STORM_STOPS[i - 1];
      if (v <= vUp) {
        const t = (v - vLo) / (vUp - vLo);
        return lerpColor(cLo, cUp, t);
      }
    }
    return STORM_STOPS[STORM_STOPS.length - 1][1];
  }

  function interpolatePrecip(lat, lng) {
    if (!stormGrid) return 0;
    if (lat > STORM_LA1 || lat < STORM_LA2 || lng < STORM_LO1 || lng > STORM_LO2) return 0;
    const fx = (lng - STORM_LO1) / STORM_DX;
    const fy = (STORM_LA1 - lat) / STORM_DY;
    const x0 = Math.floor(fx), x1 = Math.min(x0 + 1, STORM_NX - 1);
    const y0 = Math.floor(fy), y1 = Math.min(y0 + 1, STORM_NY - 1);
    const tx = fx - x0, ty = fy - y0;
    const v00 = stormGrid[y0][x0], v10 = stormGrid[y0][x1];
    const v01 = stormGrid[y1][x0], v11 = stormGrid[y1][x1];
    return v00 * (1 - tx) * (1 - ty) +
           v10 * tx       * (1 - ty) +
           v01 * (1 - tx) * ty +
           v11 * tx       * ty;
  }

  // Custom canvas tile layer that paints interpolated precipitation
  const StormGrid = L.GridLayer.extend({
    createTile(coords) {
      const tile = document.createElement('canvas');
      const size = this.getTileSize();
      tile.width = size.x; tile.height = size.y;
      if (!stormGrid) return tile;
      const ctx = tile.getContext('2d');
      const img = ctx.createImageData(size.x, size.y);
      const data = img.data;
      const bounds = this._tileCoordsToBounds(coords);
      const nw = bounds.getNorthWest();
      const se = bounds.getSouthEast();
      const dLat = (nw.lat - se.lat) / size.y;
      const dLng = (se.lng - nw.lng) / size.x;
      for (let py = 0; py < size.y; py++) {
        const lat = nw.lat - (py + 0.5) * dLat;
        for (let px = 0; px < size.x; px++) {
          const lng = nw.lng + (px + 0.5) * dLng;
          const v = interpolatePrecip(lat, lng);
          const c = colorForPrecip(v);
          const idx = (py * size.x + px) * 4;
          data[idx]     = c[0];
          data[idx + 1] = c[1];
          data[idx + 2] = c[2];
          data[idx + 3] = c[3];
        }
      }
      ctx.putImageData(img, 0, 0);
      return tile;
    }
  });
  const stormCanvas = new StormGrid({ opacity: 1, tileSize: 256, maxZoom: 19 });
  const stormLayer = L.layerGroup([stormCanvas]);

  // Click-anywhere tooltip on the storm forecast: piggyback on map click,
  // but a static permanent tooltip would be visual noise. Instead, expose
  // the interpolated value via mousemove on the canvas layer.
  let stormHover = null;
  stormCanvas.on('mousemove', (e) => {
    const v = interpolatePrecip(e.latlng.lat, e.latlng.lng);
    if (!stormHover) {
      stormHover = L.tooltip({ permanent: false, sticky: true, direction: 'top' });
    }
    stormHover.setLatLng(e.latlng).setContent(
      v < 0.005 ? 'No measurable precip forecast'
                : `~${v.toFixed(2)}″ peak · next ${STORM_HOURS}h`
    );
    if (!map.hasLayer(stormHover)) stormHover.addTo(map);
  });
  stormCanvas.on('mouseout', () => {
    if (stormHover && map.hasLayer(stormHover)) map.removeLayer(stormHover);
  });

  let lastStormFetch = 0;
  async function refreshStormForecast() {
    // Build full lat/lng list (row-major, north→south, west→east)
    const allLats = [], allLngs = [];
    for (let yi = 0; yi < STORM_NY; yi++) {
      for (let xi = 0; xi < STORM_NX; xi++) {
        allLats.push((STORM_LA1 - yi * STORM_DY).toFixed(3));
        allLngs.push((STORM_LO1 + xi * STORM_DX).toFixed(3));
      }
    }
    // Cache hit? Paint immediately while we refresh in background.
    const cached = cacheGet('mt-storm-v1', 20 * 60 * 1000);
    if (cached) {
      stormGrid = cached;
      stormCanvas.redraw();
      lastStormFetch = Date.now();
    }

    // Batch into requests of ≤ 96 locations (well under Open-Meteo's limit)
    const BATCH = 96;
    const results = new Array(allLats.length);
    try {
      const batchPromises = [];
      for (let s = 0; s < allLats.length; s += BATCH) {
        const e = Math.min(s + BATCH, allLats.length);
        const bLat = allLats.slice(s, e), bLng = allLngs.slice(s, e);
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${bLat.join(',')}&longitude=${bLng.join(',')}` +
                    `&hourly=precipitation&forecast_hours=${STORM_HOURS}` +
                    `&precipitation_unit=inch&timezone=auto`;
        batchPromises.push(
          fetchWithRetry(url, `Storm batch ${s}`).then(j => ({ start: s, list: Array.isArray(j) ? j : [j] }))
        );
      }
      const batches = await Promise.all(batchPromises);
      batches.forEach(({ start, list }) => {
        list.forEach((loc, i) => { results[start + i] = loc; });
      });

      // Build 2D grid
      const grid = [];
      let peak = 0, raining = 0;
      for (let yi = 0; yi < STORM_NY; yi++) {
        const row = [];
        for (let xi = 0; xi < STORM_NX; xi++) {
          const idx = yi * STORM_NX + xi;
          const loc = results[idx];
          const arr = (loc && loc.hourly && loc.hourly.precipitation) || [];
          const v = arr.length ? Math.max(...arr) : 0;
          row.push(v);
          if (v > peak) peak = v;
          if (v > 0.01) raining++;
        }
        grid.push(row);
      }
      stormGrid = grid;
      stormCanvas.redraw();
      cacheSet('mt-storm-v1', grid);
      lastStormFetch = Date.now();

      const el = document.getElementById('storm-stamp');
      if (el) {
        el.textContent = raining === 0
          ? `Forecast: clear next ${STORM_HOURS}h`
          : `Forecast next ${STORM_HOURS}h · peak ${peak.toFixed(2)}″`;
      }
      console.log(`Storm forecast: ${raining} cells with rain, peak ${peak.toFixed(2)}".`);
    } catch (e) {
      console.warn('Storm forecast failed:', e);
      const el = document.getElementById('storm-stamp');
      if (el) el.textContent = `Forecast: ${e.message || 'unavailable'}`;
      if (!cached) setTimeout(() => { if (map.hasLayer(stormLayer)) refreshStormForecast(); }, 90000);
    }
  }
  // Only fetch when the storm layer is actually turned on (it's off by
  // default anyway). Throttle to 5 min so toggling rapidly is fine.
  stormLayer.on('add', () => {
    if (Date.now() - lastStormFetch > 5 * 60 * 1000) refreshStormForecast();
  });
  setInterval(() => { if (map.hasLayer(stormLayer)) refreshStormForecast(); }, 15 * 60 * 1000);

  // ============================================================
  // Wind — SVG arrows at each grid point (direction + speed)
  // Pulled from Open-Meteo. Reliable, no external library.
  // ============================================================
  const windGroup = L.layerGroup();

  function windColor(mph) {
    if (mph >= 30) return '#b00020';
    if (mph >= 20) return '#ef476f';
    if (mph >= 12) return '#ff9f1c';
    if (mph >= 5)  return '#2a9d8f';
    return '#5c8fc4';
  }
  function windArrowIcon(speedMph, fromDegrees) {
    // fromDegrees is "where the wind is coming FROM" (meteorological).
    // Rotate arrow to point WHERE it's blowing TO.
    const toDir = (fromDegrees + 180) % 360;
    const col = windColor(speedMph);
    // Length scales with speed up to a cap
    const len = Math.min(8 + speedMph * 0.6, 22);
    return L.divIcon({
      className: '',
      html: `<div style="transform:rotate(${toDir}deg);position:relative;width:34px;height:34px">
        <svg viewBox="-17 -17 34 34" width="34" height="34" style="overflow:visible">
          <line x1="0" y1="${len}" x2="0" y2="${-len}" stroke="${col}" stroke-width="2.5" stroke-linecap="round"/>
          <polyline points="-5,${-len+5} 0,${-len} 5,${-len+5}" stroke="${col}" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
        </svg>
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) rotate(${-toDir}deg);
                    font:700 10px/1 -apple-system,sans-serif;color:#222;text-shadow:0 0 3px #fff,0 0 3px #fff;
                    background:rgba(255,255,255,0.85);border-radius:8px;padding:0 3px;pointer-events:none">
          ${Math.round(speedMph)}
        </div>
      </div>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });
  }

  // ============================================================
  // Open-Meteo cache + retry helpers
  // ============================================================
  function cacheGet(key, maxAgeMs) {
    try {
      const raw = sessionStorage.getItem(key);
      if (!raw) return null;
      const { t, v } = JSON.parse(raw);
      if (Date.now() - t > maxAgeMs) return null;
      return v;
    } catch (e) { return null; }
  }
  function cacheSet(key, v) {
    try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), v })); }
    catch (e) {}
  }
  // Fetch with automatic retry on 429 (exponential backoff up to 4 tries).
  async function fetchWithRetry(url, label) {
    const delays = [0, 30000, 60000, 120000]; // ms before each attempt
    for (let i = 0; i < delays.length; i++) {
      if (delays[i]) await new Promise(r => setTimeout(r, delays[i]));
      let r;
      try { r = await fetch(url); }
      catch (e) { throw new Error(`${label}: network error — ${e.message}`); }
      if (r.status === 429) {
        console.warn(`${label}: 429 received, attempt ${i + 1}/${delays.length}`);
        if (i === delays.length - 1) throw new Error(`${label}: rate-limited (429) after ${delays.length} attempts`);
        continue;
      }
      if (!r.ok) throw new Error(`${label}: HTTP ${r.status}`);
      return r.json();
    }
  }

  let lastWindFetch = 0;
  async function refreshWind() {
    const la1 = 49.0, la2 = 44.4;
    const lo1 = -116.0, lo2 = -104.0;
    const ny = 6, nx = 9; // 54 arrows — readable, not cluttered
    const dx = (lo2 - lo1) / (nx - 1);
    const dy = (la1 - la2) / (ny - 1);
    const lats = [], lngs = [];
    for (let yi = 0; yi < ny; yi++) {
      for (let xi = 0; xi < nx; xi++) {
        lats.push((la1 - yi * dy).toFixed(3));
        lngs.push((lo1 + xi * dx).toFixed(3));
      }
    }
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats.join(',')}&longitude=${lngs.join(',')}` +
                `&current=wind_speed_10m,wind_direction_10m&wind_speed_unit=mph`;

    function paint(list) {
      windGroup.eachLayer(l => windGroup.removeLayer(l));
      list.forEach((loc, i) => {
        const cw = loc && loc.current;
        if (!cw) return;
        const lat = parseFloat(lats[i]);
        const lng = parseFloat(lngs[i]);
        if (!isInMontana(lat, lng)) return;
        const speed = cw.wind_speed_10m || 0;
        const dir   = cw.wind_direction_10m || 0;
        L.marker([lat, lng], {
          icon: windArrowIcon(speed, dir),
          interactive: true, keyboard: false
        }).bindTooltip(`Wind: ${Math.round(speed)} mph from ${Math.round(dir)}°`, { sticky: true })
          .addTo(windGroup);
      });
    }

    // Cache hit? Show it immediately while we refresh in the background.
    const cached = cacheGet('mt-wind-v1', 30 * 60 * 1000);
    if (cached) { paint(cached); lastWindFetch = Date.now(); }

    try {
      const j = await fetchWithRetry(url, 'Wind');
      const list = Array.isArray(j) ? j : [j];
      paint(list);
      cacheSet('mt-wind-v1', list);
      lastWindFetch = Date.now();
      console.log(`Wind: ${list.length} arrows loaded.`);
    } catch (e) {
      console.warn(e.message);
      // If we have nothing on screen (no cache, network failed) keep retrying every 90s.
      if (!cached) setTimeout(() => { if (map.hasLayer(windGroup)) refreshWind(); }, 90000);
    }
  }
  // Fetch only when the layer is visible. Refetch on every add, but
  // throttle to 5 min so toggling rapidly doesn't slam the API.
  function maybeRefreshWind() {
    if (Date.now() - lastWindFetch > 5 * 60 * 1000) refreshWind();
  }
  windGroup.on('add', maybeRefreshWind);
  setInterval(() => { if (map.hasLayer(windGroup)) refreshWind(); }, 30 * 60 * 1000);

  // ============================================================
  // USFS Trails — hiking/backpacking (NFS) and off-road (MVUM)
  // Layer fetches features in the current viewport automatically.
  // ============================================================
  const SVC_TRAILS_NFS  = 'https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_TrailNFSPublish_01/MapServer/0';
  const SVC_TRAILS_MVUM = 'https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_MVUM_01/MapServer/2';

  const hikingTrailsLayer = L.esri.featureLayer({
    url: SVC_TRAILS_NFS,
    minZoom: 9,
    style: { color: '#5a3a1e', weight: 2, opacity: 0.85, dashArray: '4,3' },
    onEachFeature: (feature, layer) => {
      const p = feature.properties || {};
      const name = p.TRAIL_NAME || p.NAME || `Trail ${p.TRAIL_NO || ''}`.trim();
      const cls  = p.TRAIL_CLASS || '';
      const length = p.GIS_MILES != null ? `${(+p.GIS_MILES).toFixed(1)} mi` : '';
      layer.bindTooltip(`<strong>🥾 ${name}</strong>${cls ? `<br>${cls}` : ''}${length ? `<br>${length}` : ''}`, { sticky: true });
      layer.bindPopup(`
        <div class="popup-content">
          <h3>🥾 ${name}</h3>
          ${cls ? `<div class="row"><span class="label">Class:</span> ${cls}</div>` : ''}
          ${length ? `<div class="row"><span class="label">Length:</span> ${length}</div>` : ''}
          ${p.TRAIL_NO ? `<div class="row"><span class="label">Trail #:</span> ${p.TRAIL_NO}</div>` : ''}
        </div>`);
    }
  });

  const ohvTrailsLayer = L.esri.featureLayer({
    url: SVC_TRAILS_MVUM,
    minZoom: 9,
    style: { color: '#d35400', weight: 2.5, opacity: 0.9 },
    onEachFeature: (feature, layer) => {
      const p = feature.properties || {};
      const name = p.RTE_CN_NAME || p.NAME || p.TRAIL_NAME || `Route ${p.RTE_NO || p.TRAIL_NO || ''}`.trim();
      const vehicles = [];
      if (p.ATV === 'Y') vehicles.push('ATV');
      if (p.MOTORCYCLE === 'Y') vehicles.push('Motorcycle');
      if (p.OTHER_OHV_LT50INCHES === 'Y') vehicles.push('OHV <50″');
      if (p.OTHER_OHV_GT50INCHES === 'Y') vehicles.push('OHV >50″');
      if (p.HIGHCLEARANCE === 'Y' || p.HIGH_CLEARANCE_VEHICLE === 'Y') vehicles.push('High-clearance');
      const vehStr = vehicles.length ? vehicles.join(', ') : '';
      const season = (p.SEASONAL && p.SEASONAL !== 'N') ? `${p.SEASONAL_START || ''}–${p.SEASONAL_END || ''}` : '';
      const tip = `<strong>🏍 ${name}</strong>${vehStr ? `<br>${vehStr}` : ''}`;
      layer.bindTooltip(tip, { sticky: true });
      layer.bindPopup(`
        <div class="popup-content">
          <h3>🏍 ${name}</h3>
          ${vehStr ? `<div class="row"><span class="label">Allowed:</span> ${vehStr}</div>` : ''}
          ${season ? `<div class="row"><span class="label">Season:</span> ${season}</div>` : ''}
        </div>`);
    }
  });

  // ============================================================
  // Campsites — USFS Recreation Opportunities, filtered to camping types
  // ============================================================
  const SVC_CAMP = 'https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_RecreationOpportunities_01/MapServer/0';
  const campsitesLayer = L.esri.featureLayer({
    url: SVC_CAMP,
    where: "markertype IN ('Campground Camping','RV Camping','Dispersed Camping','Group Camping','Horse Camping','OHV Camping','Cabin Rentals')",
    pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
      radius: 5, color: '#063', fillColor: '#1dbb6a', fillOpacity: 0.9, weight: 1.2
    }),
    onEachFeature: (feature, layer) => {
      const p = feature.properties || {};
      const name = p.PUBLIC_NAME || p.NAME || p.RECAREANAME || p.SITE_NAME || 'Campsite';
      const type = p.markertype || '';
      const forest = p.FORESTNAME || p.FORESTORGCODE || '';
      const open = p.OPEN_SEASON_START && p.OPEN_SEASON_END ? `Open ${p.OPEN_SEASON_START}–${p.OPEN_SEASON_END}` : '';
      const html = `
        <div class="popup-content">
          <h3>🏕 ${name}</h3>
          <div class="row"><span class="label">Type:</span> ${type}</div>
          ${forest ? `<div class="row"><span class="label">Forest:</span> ${forest}</div>` : ''}
          ${open ? `<div class="row"><span class="label">Season:</span> ${open}</div>` : ''}
        </div>`;
      layer.bindTooltip(`${name} — ${type}`, { sticky: true });
      layer.bindPopup(html);
    }
  });

  // ============================================================
  // Live city weather badges (Open-Meteo, batched)
  // ============================================================
  const wxBadgeLayer = L.layerGroup();
  const wxIcon = (code) => {
    if (code === 0 || code === 1) return '☀️';
    if (code === 2) return '⛅';
    if (code === 3) return '☁️';
    if (code >= 45 && code <= 48) return '🌫';
    if (code >= 51 && code <= 67) return '🌧';
    if (code >= 71 && code <= 77) return '🌨';
    if (code >= 80 && code <= 82) return '🌦';
    if (code >= 85 && code <= 86) return '🌨';
    if (code >= 95) return '⛈';
    return '·';
  };
  let lastCityWxFetch = 0;
  async function refreshCityWeather() {
    const lats = cities.map(c => c.lat).join(',');
    const lngs = cities.map(c => c.lng).join(',');
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lngs}` +
                `&current=temperature_2m,weather_code&temperature_unit=fahrenheit`;

    function paint(list) {
      wxBadgeLayer.eachLayer(l => wxBadgeLayer.removeLayer(l));
      cities.forEach((c, i) => {
        const cw = list[i] && list[i].current;
        if (!cw) return;
        const html = `<div class="wx-badge">
            <span class="icon">${wxIcon(cw.weather_code)}</span>
            <span class="temp">${Math.round(cw.temperature_2m)}°F</span>
            <span class="city"> ${c.name}</span>
          </div>`;
        const marker = L.marker([c.lat, c.lng], {
          icon: L.divIcon({ className: '', html, iconSize: null, iconAnchor: [0, 14] }),
          interactive: false, keyboard: false
        });
        wxBadgeLayer.addLayer(marker);
      });
    }

    const cached = cacheGet('mt-citywx-v1', 20 * 60 * 1000);
    if (cached) { paint(cached); lastCityWxFetch = Date.now(); }

    try {
      const j = await fetchWithRetry(url, 'City temps');
      const list = Array.isArray(j) ? j : [j];
      paint(list);
      cacheSet('mt-citywx-v1', list);
      lastCityWxFetch = Date.now();
      console.log(`City temps: loaded ${cities.length} cities.`);
    } catch (e) {
      console.warn(e.message);
      if (!cached) setTimeout(() => { if (map.hasLayer(wxBadgeLayer)) refreshCityWeather(); }, 90000);
    }
  }
  wxBadgeLayer.on('add', () => {
    if (Date.now() - lastCityWxFetch > 5 * 60 * 1000) refreshCityWeather();
  });
  setInterval(() => { if (map.hasLayer(wxBadgeLayer)) refreshCityWeather(); }, 10 * 60 * 1000);

  // ============================================================
  // "BLM land" labels at high zoom — query feature service in view
  // ============================================================
  const blmLabelsLayer = L.layerGroup();
  const BLM_LABEL_MIN_ZOOM = 9;
  const BLM_LAYER_URL_FOR_LABELS = `${BLM_SERVICE}/2`;
  let blmLabelToken = 0;
  async function refreshBlmLabels() {
    // Only run when labels are enabled in the layer control
    if (!map.hasLayer(blmLabelsLayer)) return;
    const z = map.getZoom();
    if (z < BLM_LABEL_MIN_ZOOM) {
      blmLabelsLayer.clearLayers();
      return;
    }
    const b = map.getBounds();
    const myToken = ++blmLabelToken;
    // Pull up to the service's max (2000) every time — we keep response size
    // small via aggressive geometry simplification.
    const cap = 2000;
    // Simplify polygon geometry server-side — we only need centroids anyway.
    // 0.005°≈500m at MT latitudes; 0.05°≈5km. Aggressive at low zoom so the
    // response stays under ~200 KB even with 2000 features.
    const simplify = z >= 12 ? '0.005' : z >= 10 ? '0.02' : '0.05';
    const params = new URLSearchParams({
      geometry: JSON.stringify({
        xmin: b.getWest(), ymin: b.getSouth(),
        xmax: b.getEast(), ymax: b.getNorth(),
        spatialReference: { wkid: 4326 }
      }),
      geometryType: 'esriGeometryEnvelope',
      inSR: '4326',
      spatialRel: 'esriSpatialRelIntersects',
      outFields: 'ADMIN_UNIT_NAME',
      returnGeometry: 'true',
      outSR: '4326',
      maxAllowableOffset: simplify,
      resultRecordCount: String(cap),
      f: 'json'
    });
    try {
      const r = await fetch(`${BLM_LAYER_URL_FOR_LABELS}/query?${params}`);
      if (!r.ok) return;
      const j = await r.json();
      if (myToken !== blmLabelToken) return;
      blmLabelsLayer.clearLayers();
      if (!j.features || !j.features.length) return;

      // Track placed labels in pixel space so we don't stack labels on top of each other.
      // Shrink the dedupe distance at higher zooms where parcels are visually larger.
      const placed = [];
      const MIN_PX = z >= 12 ? 44 : z >= 10 ? 38 : 60;

      j.features.forEach(f => {
        const rings = f.geometry && f.geometry.rings;
        if (!rings || !rings.length) return;
        // Pick the largest ring by bbox area; compute centroid
        let best = rings[0], bestArea = 0;
        rings.forEach(ring => {
          let minx=Infinity,miny=Infinity,maxx=-Infinity,maxy=-Infinity;
          ring.forEach(([x,y])=>{ if(x<minx)minx=x; if(y<miny)miny=y; if(x>maxx)maxx=x; if(y>maxy)maxy=y; });
          const a = (maxx-minx)*(maxy-miny);
          if (a > bestArea) { bestArea = a; best = ring; }
        });
        let sx=0, sy=0;
        best.forEach(([x,y])=>{ sx+=x; sy+=y; });
        const cx = sx / best.length, cy = sy / best.length;

        // Pixel-distance dedupe
        const px = map.latLngToContainerPoint([cy, cx]);
        for (const p of placed) {
          if (Math.hypot(px.x - p.x, px.y - p.y) < MIN_PX) return;
        }
        placed.push(px);

        L.marker([cy, cx], {
          icon: L.divIcon({ className:'', html:'<div class="blm-label">BLM</div>', iconSize:[32, 14], iconAnchor:[16, 7] }),
          interactive: false, keyboard: false
        }).addTo(blmLabelsLayer);
      });
    } catch (e) { /* ignore */ }
  }
  map.on('moveend zoomend', refreshBlmLabels);
  // Trigger when the user toggles the BLM labels layer on
  map.on('overlayadd', (e) => { if (e.layer === blmLabelsLayer) refreshBlmLabels(); });
  // Trigger once on initial load
  map.whenReady(() => setTimeout(refreshBlmLabels, 250));

  // ============================================================
  // Saved pins — sync with Supabase when logged in, fall back to
  // localStorage otherwise. The popup "Save pin here" button calls
  // window.__addPin, which routes to whichever backend is active.
  // ============================================================
  const PIN_KEY = 'mt-map-pins-v1';
  const pinsLayer = L.layerGroup();
  let savedPins = [];

  function useSupabasePins() {
    return !!(window.MTAuth && window.MTAuth.isConfigured() && window.MTAuth.getSession());
  }
  function loadLocalPins() {
    try { savedPins = JSON.parse(localStorage.getItem(PIN_KEY) || '[]'); }
    catch (e) { savedPins = []; }
  }
  function persistLocalPins() {
    try { localStorage.setItem(PIN_KEY, JSON.stringify(savedPins)); } catch (e) {}
  }

  function renderPin(pin) {
    const m = L.marker([pin.lat, pin.lng]);
    m._pinId = pin.id;
    const ts = pin.t || (pin.created_at ? Date.parse(pin.created_at) : Date.now());
    const dateStr = new Date(ts).toLocaleString();
    m.bindPopup(`
      <div class="popup-content">
        <h3>📌 Saved pin</h3>
        <div class="row"><span class="label">Coordinates:</span><br>${pin.lat.toFixed(5)}°, ${pin.lng.toFixed(5)}°</div>
        ${pin.label ? `<div class="row"><span class="label">Label:</span> ${pin.label}</div>` : ''}
        <div class="row"><small style="color:#888">Saved ${dateStr}</small></div>
        <div class="popup-actions">
          <button data-action="inspect-pin" data-id="${pin.id}">Inspect</button>
          <button class="danger" data-action="delete-pin" data-id="${pin.id}">Delete</button>
        </div>
      </div>
    `);
    pinsLayer.addLayer(m);
    return m;
  }

  async function reloadAllPins() {
    pinsLayer.eachLayer(l => pinsLayer.removeLayer(l));
    if (useSupabasePins()) {
      try {
        const remote = await window.MTAuth.pins.list();
        savedPins = remote.map(p => ({
          id: p.id, lat: +p.lat, lng: +p.lng, label: p.label || '',
          created_at: p.created_at
        }));
      } catch (e) { savedPins = []; }
    } else {
      loadLocalPins();
    }
    savedPins.forEach(renderPin);
  }

  window.__addPin = async function (lat, lng, label) {
    if (!isInMontana(lat, lng)) return;
    if (useSupabasePins()) {
      try {
        const row = await window.MTAuth.pins.add(lat, lng, label || null);
        const pin = { id: row.id, lat: +row.lat, lng: +row.lng, label: row.label || '', created_at: row.created_at };
        savedPins.push(pin);
        renderPin(pin).openPopup();
      } catch (e) { alert('Could not save pin: ' + (e.message || e)); }
    } else {
      const pin = { id: 'p' + Date.now() + Math.random().toString(36).slice(2,6), lat, lng, label: label || '', t: Date.now() };
      savedPins.push(pin); persistLocalPins();
      renderPin(pin).openPopup();
    }
  };

  window.__deletePin = async function (id) {
    if (useSupabasePins()) {
      try { await window.MTAuth.pins.remove(id); } catch (e) { alert('Delete failed: ' + e.message); return; }
    }
    savedPins = savedPins.filter(p => String(p.id) !== String(id));
    if (!useSupabasePins()) persistLocalPins();
    pinsLayer.eachLayer(l => { if (String(l._pinId) === String(id)) pinsLayer.removeLayer(l); });
    map.closePopup();
  };

  window.__inspectPin = function (id) {
    const pin = savedPins.find(p => String(p.id) === String(id));
    if (!pin) return;
    map.closePopup();
    map.fire('contextmenu', { latlng: L.latLng(pin.lat, pin.lng) });
  };

  // Initial load + reload whenever auth state changes
  if (window.MTAuth && window.MTAuth.ready) {
    window.MTAuth.ready.then(reloadAllPins);
    window.MTAuth.onChange(reloadAllPins);
  } else {
    loadLocalPins();
    savedPins.forEach(renderPin);
  }

  // ============================================================
  // Add base + overlays in z-order
  // ============================================================
  blmTiles.addTo(map);
  blmLabelsLayer.addTo(map);
  radarLayer.addTo(map);
  distribLayer.addTo(map);
  occupiedLayer.addTo(map);
  recoveryLayer.addTo(map);
  campsitesLayer.addTo(map);
  windGroup.addTo(map);
  wxBadgeLayer.addTo(map);
  pinsLayer.addTo(map);
  // stormLayer + populationLayer OFF by default

  // ============================================================
  // Montana clip mask — everything outside MT is solid gray.
  // Outer ring covers a large area; inner ring (hole) is MT.
  // Mask is non-interactive so clicks still pass through.
  // ============================================================
  const worldOuter = [[40, -120],[40, -100],[52, -100],[52, -120]];
  const mask = L.polygon([worldOuter, MT_LATLNG_RING], {
    color: '#444', weight: 1.5,
    fillColor: '#e8e8e8', fillOpacity: 1,
    interactive: false
  }).addTo(map);

  // Layer control with a master "Hide all / Show all" button
  const allOverlays = [
    blmTiles, blmLabelsLayer, campsitesLayer, hikingTrailsLayer, ohvTrailsLayer,
    distribLayer, occupiedLayer, recoveryLayer, radarLayer, stormLayer,
    windGroup, wxBadgeLayer, pinsLayer, populationLayer
  ];
  const layerControl = L.control.layers(
    { 'Street map': osm, 'Topo map': topo, 'Satellite': satellite },
    {
      '🟧 BLM Land': blmTiles,
      '🏷 BLM labels (zoom ≥ 10)': blmLabelsLayer,
      '🏕 Campsites (USFS)': campsitesLayer,
      '🥾 Hiking & backpacking trails': hikingTrailsLayer,
      '🏍 Off-road / OHV trails (MVUM)': ohvTrailsLayer,
      '🟪 Bear distribution (FWP)': distribLayer,
      '🩷 Grizzly occupied range 2022': occupiedLayer,
      '🟥 Grizzly Recovery Zones': recoveryLayer,
      '🌧 Live radar (NOAA)': radarLayer,
      '🔮 Storm forecast (next 4 hr)': stormLayer,
      '💨 Wind animation': windGroup,
      '🌡 Live city temperatures': wxBadgeLayer,
      '📌 Saved pins': pinsLayer,
      '🟠 Population (cities)': populationLayer
    },
    { collapsed: true, position: 'topright' }
  ).addTo(map);

  // Inject master toggle button at the top of the overlays list
  function updateMasterButton() {
    const btn = document.getElementById('master-toggle');
    if (!btn) return;
    const anyOn = allOverlays.some(l => map.hasLayer(l));
    if (anyOn) {
      btn.textContent = '✕ Hide all overlays';
      btn.classList.remove('off-state');
    } else {
      btn.textContent = '✓ Show all overlays';
      btn.classList.add('off-state');
    }
  }
  function masterToggle() {
    const anyOn = allOverlays.some(l => map.hasLayer(l));
    if (anyOn) {
      allOverlays.forEach(l => { if (map.hasLayer(l)) map.removeLayer(l); });
    } else {
      allOverlays.forEach(l => { if (!map.hasLayer(l)) l.addTo(map); });
    }
    updateMasterButton();
  }
  // Wait a tick so the control's DOM exists, then inject the row
  setTimeout(() => {
    const container = layerControl.getContainer();
    const overlaysList = container.querySelector('.leaflet-control-layers-overlays');
    if (!overlaysList) return;
    const row = L.DomUtil.create('div', 'layer-master-row');
    row.innerHTML = `<button id="master-toggle" type="button">✕ Hide all overlays</button>`;
    overlaysList.parentNode.insertBefore(row, overlaysList);
    const btn = row.querySelector('button');
    L.DomEvent.disableClickPropagation(row);
    btn.addEventListener('click', masterToggle);
    updateMasterButton();
  }, 0);
  // Keep button label in sync when user toggles individual overlays
  map.on('overlayadd overlayremove', updateMasterButton);

  // ============================================================
  // Search bar — coordinates or town/place (Nominatim, MT-biased)
  // ============================================================
  const searchControl = L.control({ position: 'topleft' });
  searchControl.onAdd = function () {
    const div = L.DomUtil.create('div', 'search-control');
    div.innerHTML = `
      <input type="text" id="mt-search" placeholder="Town or lat, lng…" />
      <button id="mt-search-go" type="button">Go</button>
      <span class="hint" id="radar-stamp">Radar: loading…</span>
      <span class="hint" id="storm-stamp" style="color:#7a3680">Forecast: loading…</span>
    `;
    L.DomEvent.disableClickPropagation(div);
    L.DomEvent.disableScrollPropagation(div);
    return div;
  };
  searchControl.addTo(map);

  function goTo(lat, lng) {
    map.flyTo([lat, lng], 11, { duration: 0.8 });
    setTimeout(() => map.fire('click', { latlng: L.latLng(lat, lng) }), 850);
  }

  async function doSearch() {
    const input = document.getElementById('mt-search');
    const q = (input.value || '').trim();
    if (!q) return;

    const coordRe = /^\s*(-?\d{1,3}(?:\.\d+)?)\s*[,\s]+\s*(-?\d{1,3}(?:\.\d+)?)\s*$/;
    const m = q.match(coordRe);
    if (m) {
      const lat = parseFloat(m[1]);
      const lng = parseFloat(m[2]);
      if (Math.abs(lat) <= 90 && Math.abs(lng) <= 180) {
        if (!isInMontana(lat, lng)) {
          input.style.borderColor = '#b00020';
          input.title = 'Coordinates are outside Montana';
          return;
        }
        input.style.borderColor = '#ccc'; input.title = '';
        goTo(lat, lng);
        return;
      }
    }

    // Geocode via Nominatim, biased to Montana
    const params = new URLSearchParams({
      q: `${q}, Montana, USA`,
      format: 'json', limit: '1',
      bounded: '1',
      viewbox: '-116.10,49.05,-103.95,44.35'
    });
    try {
      const r = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
        headers: { 'Accept-Language': 'en' }
      });
      const j = await r.json();
      if (j && j.length) {
        const lat = parseFloat(j[0].lat), lng = parseFloat(j[0].lon);
        input.style.borderColor = '#ccc'; input.title = '';
        goTo(lat, lng);
      } else {
        input.style.borderColor = '#b00020';
        input.title = 'No results in Montana';
      }
    } catch (e) {
      input.style.borderColor = '#b00020';
      input.title = 'Search failed';
    }
  }

  // Defer wiring until DOM nodes from the control are present
  setTimeout(() => {
    const btn = document.getElementById('mt-search-go');
    const inp = document.getElementById('mt-search');
    if (btn) btn.addEventListener('click', doSearch);
    if (inp) inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSearch(); });
  }, 0);

  // Legend — collapsible <details>
  const legend = L.control({ position: 'bottomright' });
  legend.onAdd = () => {
    const det = L.DomUtil.create('details', 'legend');
    det.innerHTML = `
      <summary>Legend</summary>
      <div class="body">
        <div class="group"><em>BLM</em>
          <div class="item"><div class="swatch" style="background:#ffd966;border-color:#a67c00"></div>BLM-administered land</div>
        </div>
        <div class="group"><em>Bears (MT FWP)</em>
          <div class="item"><div class="swatch" style="background:#a50f15"></div>Grizzly Recovery Zone</div>
          <div class="item"><div class="swatch" style="background:#dd3497"></div>Grizzly Occupied Range 2022</div>
          <div class="item"><div class="swatch" style="background:#807dba"></div>Grizzly distribution</div>
          <div class="item"><div class="swatch" style="background:#9e9ac8"></div>Grizzly + Black bear</div>
          <div class="item"><div class="swatch" style="background:#9ecae1"></div>Black bear distribution</div>
        </div>
        <div class="group"><em>Population</em>
          <div class="item"><div class="swatch" style="background:#fe9929"></div>City (size ∝ pop.)</div>
        </div>
        <div class="group"><em>Camping, trails & wind</em>
          <div class="item"><div class="swatch" style="background:#1dbb6a;border-radius:50%"></div>USFS campsite</div>
          <div class="item"><div class="swatch" style="background:repeating-linear-gradient(90deg,#5a3a1e 0 4px,transparent 4px 7px)"></div>Hiking / backpacking trail</div>
          <div class="item"><div class="swatch" style="background:#d35400"></div>Off-road / OHV trail (MVUM)</div>
          <div class="item"><div class="swatch" style="background:linear-gradient(90deg,#5c8fc4,#2a9d8f,#ff9f1c,#ef476f,#b00020)"></div>Wind arrows (color = speed)</div>
        </div>
        <div class="group"><em>Live weather</em>
          <div class="item"><div class="swatch" style="background:#43c0e8"></div>Live radar (NOAA NWS)</div>
          <div class="item"><div class="swatch" style="background:linear-gradient(90deg,#d4d4f1,#f768a1,#7a0177)"></div>Storm forecast (next 4 hr)</div>
          <div class="item"><div class="swatch" style="background:#fff;border-color:#5c8fc4"></div>City temperature badges</div>
        </div>
      </div>
    `;
    L.DomEvent.disableClickPropagation(det);
    L.DomEvent.disableScrollPropagation(det);
    return det;
  };
  legend.addTo(map);

  // ============================================================
  // Helpers
  // ============================================================
  function pointInRing(lat, lng, ringLatLng) {
    let inside = false;
    for (let i = 0, j = ringLatLng.length - 1; i < ringLatLng.length; j = i++) {
      const yi = ringLatLng[i][0], xi = ringLatLng[i][1];
      const yj = ringLatLng[j][0], xj = ringLatLng[j][1];
      const intersect = ((yi > lat) !== (yj > lat)) &&
        (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }
  const isInMontana = (lat, lng) => pointInRing(lat, lng, MT_LATLNG_RING);

  async function queryFeatureAt(serviceUrl, lat, lng, fields) {
    const params = new URLSearchParams({
      geometry: JSON.stringify({ x: lng, y: lat, spatialReference: { wkid: 4326 } }),
      geometryType: 'esriGeometryPoint',
      inSR: '4326',
      spatialRel: 'esriSpatialRelIntersects',
      outFields: fields,
      returnGeometry: 'false',
      f: 'json'
    });
    const r = await fetch(`${serviceUrl}/query?${params.toString()}`);
    if (!r.ok) throw new Error(`${serviceUrl} responded ${r.status}`);
    const j = await r.json();
    return (j.features && j.features.length) ? j.features.map(f => f.attributes) : [];
  }

  // BLM query — service contains BLM lands only, so any hit ⇒ BLM
  const BLM_LAYER_URL = `${BLM_SERVICE}/2`;
  async function checkBLM(lat, lng) {
    const attrs = await queryFeatureAt(BLM_LAYER_URL, lat, lng, 'ADMIN_UNIT_NAME,ADMIN_AGENCY_CODE,ADMIN_UNIT_TYPE');
    return attrs.length ? { isBLM: true, info: attrs[0] } : { isBLM: false };
  }

  async function checkBears(lat, lng) {
    const [recov, occ, dist] = await Promise.all([
      queryFeatureAt(SVC_RECOVERY, lat, lng, 'GBRZ_NAME,NAME,AREA_SQMI').catch(()=>[]),
      queryFeatureAt(SVC_OCCUPIED, lat, lng, 'OBJECTID').catch(()=>[]),
      queryFeatureAt(SVC_DISTRIB,  lat, lng, 'BEAR').catch(()=>[])
    ]);
    // Compose tiered likelihood
    if (recov.length) {
      return {
        likelihood: 'Very High',
        cls: 'very-high',
        detail: `Inside Grizzly Recovery Zone: ${recov[0].GBRZ_NAME || recov[0].NAME}`
      };
    }
    if (occ.length) {
      return {
        likelihood: 'High',
        cls: 'high',
        detail: 'Inside Grizzly Estimated Occupied Range (FWP, 2022)'
      };
    }
    if (dist.length) {
      const species = dist.map(d => d.BEAR).filter(Boolean).join(' / ');
      return {
        likelihood: 'Moderate',
        cls: 'moderate',
        detail: species ? `General distribution: ${species}` : 'In general bear distribution range'
      };
    }
    return { likelihood: 'Low', cls: 'low', detail: 'Outside mapped bear ranges' };
  }

  async function getWeather(lat, lng) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}` +
                `&current=temperature_2m,wind_speed_10m,wind_direction_10m,weather_code` +
                `&temperature_unit=fahrenheit&wind_speed_unit=mph` +
                `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max` +
                `&timezone=auto&forecast_days=7`;
    let r;
    try { r = await fetch(url); }
    catch (e) { throw new Error('network error: ' + e.message); }
    if (r.status === 429) throw new Error('Open-Meteo rate limit hit — try again in a minute');
    if (!r.ok) throw new Error(`Open-Meteo returned ${r.status}`);
    const j = await r.json();
    // Normalize new-API response into the shape the rest of the code expects.
    const cur = j.current ? {
      temperature: j.current.temperature_2m,
      windspeed:   j.current.wind_speed_10m,
      winddirection: j.current.wind_direction_10m,
      weathercode: j.current.weather_code
    } : (j.current_weather || null);
    const dailyRaw = j.daily || null;
    // The new API uses weather_code (snake_case); rename so existing code works.
    const daily = dailyRaw ? {
      time: dailyRaw.time,
      weathercode: dailyRaw.weather_code || dailyRaw.weathercode,
      temperature_2m_max: dailyRaw.temperature_2m_max,
      temperature_2m_min: dailyRaw.temperature_2m_min,
      precipitation_probability_max: dailyRaw.precipitation_probability_max
    } : null;
    return { current: cur, daily };
  }
  const wxCodes = {
    0:'Clear',1:'Mostly clear',2:'Partly cloudy',3:'Overcast',
    45:'Fog',48:'Rime fog',
    51:'Light drizzle',53:'Drizzle',55:'Heavy drizzle',
    61:'Light rain',63:'Rain',65:'Heavy rain',
    66:'Freezing rain',67:'Heavy freezing rain',
    71:'Light snow',73:'Snow',75:'Heavy snow',77:'Snow grains',
    80:'Light showers',81:'Showers',82:'Heavy showers',
    85:'Snow showers',86:'Heavy snow showers',
    95:'Thunderstorm',96:'T-storm w/ hail',99:'Severe t-storm'
  };

  // ============================================================
  // Custom long-press → fire contextmenu (mobile-friendly)
  // Leaflet's built-in contextmenu doesn't always fire on touch
  // devices, so we implement it ourselves with touchstart/end.
  // ============================================================
  (function () {
    const mapEl = map.getContainer();
    const PRESS_MS = 500;
    const MOVE_TOL = 12; // px
    let pressTimer = null;
    let startX = 0, startY = 0, startLatLng = null;

    function clear() {
      if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
    }
    mapEl.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) { clear(); return; }
      const t = e.touches[0];
      startX = t.clientX; startY = t.clientY;
      const rect = mapEl.getBoundingClientRect();
      const pt = L.point(t.clientX - rect.left, t.clientY - rect.top);
      try { startLatLng = map.containerPointToLatLng(pt); }
      catch (e) { startLatLng = null; return; }
      pressTimer = setTimeout(() => {
        pressTimer = null;
        if (startLatLng) map.fire('contextmenu', { latlng: startLatLng });
      }, PRESS_MS);
    }, { passive: true });
    mapEl.addEventListener('touchmove', (e) => {
      if (!pressTimer || !e.touches[0]) return;
      const t = e.touches[0];
      if (Math.abs(t.clientX - startX) > MOVE_TOL ||
          Math.abs(t.clientY - startY) > MOVE_TOL) clear();
    }, { passive: true });
    mapEl.addEventListener('touchend',   clear, { passive: true });
    mapEl.addEventListener('touchcancel', clear, { passive: true });
  })();

  // ============================================================
  // Popup button handlers — use delegation so they survive
  // popup re-renders and work reliably on mobile.
  // ============================================================
  map.on('popupopen', (e) => {
    const root = e.popup.getElement(); if (!root) return;
    root.querySelectorAll('[data-action]').forEach(btn => {
      if (btn._mtWired) return;
      btn._mtWired = true;
      btn.addEventListener('click', (ev) => {
        ev.preventDefault(); ev.stopPropagation();
        const act = btn.dataset.action;
        if (act === 'save-pin') {
          window.__addPin(parseFloat(btn.dataset.lat), parseFloat(btn.dataset.lng));
        } else if (act === 'delete-pin') {
          window.__deletePin(btn.dataset.id);
        } else if (act === 'inspect-pin') {
          window.__inspectPin(btn.dataset.id);
        } else if (act === 'load-weather') {
          window.__loadWeather(parseFloat(btn.dataset.lat), parseFloat(btn.dataset.lng));
        }
      });
    });
  });

  // ============================================================
  // Lazy weather loader — called from the "Show weather" button
  // ============================================================
  window.__loadWeather = async function (lat, lng) {
    const wxRow      = document.getElementById('wx-row');
    const lineRow    = document.getElementById('wx-line-row');
    const lineEl     = document.getElementById('wx-line');
    const forecastRow = document.getElementById('wx-forecast-row');
    const forecastEl  = document.getElementById('wx-forecast');
    if (wxRow) wxRow.style.display = 'none';
    if (lineRow) lineRow.style.display = '';
    if (lineEl) { lineEl.textContent = 'loading…'; lineEl.classList.add('loading'); }

    try {
      const { current: w, daily: d } = await getWeather(lat, lng);
      if (lineEl) {
        if (!w) {
          lineEl.textContent = 'unavailable';
        } else {
          const cond = wxCodes[w.weathercode] ?? `code ${w.weathercode}`;
          lineEl.textContent = `${Math.round(w.temperature)}°F · ${cond} · wind ${Math.round(w.windspeed)} mph`;
        }
        lineEl.classList.remove('loading');
      }
      if (forecastRow && forecastEl && d && d.time && d.time.length) {
        const dayNames   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const now = new Date();
        const todayStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
        forecastEl.innerHTML = d.time.map((iso, i) => {
          const dt   = new Date(iso + 'T12:00:00');
          const dow  = dayNames[dt.getDay()];
          const mon  = monthNames[dt.getMonth()];
          const dom  = dt.getDate();
          const hi   = Math.round(d.temperature_2m_max[i]);
          const lo   = Math.round(d.temperature_2m_min[i]);
          const code = d.weathercode[i];
          const pp   = d.precipitation_probability_max ? d.precipitation_probability_max[i] : null;
          const isToday = iso === todayStr;
          const dowLabel = isToday ? `Today · ${dow}` : dow;
          return `<div class="day${isToday ? ' today' : ''}">
            <div class="dow">${dowLabel}</div>
            <div class="date">${mon} ${dom}</div>
            <div class="icon" title="${wxCodes[code] || ''}">${wxIcon(code)}</div>
            <div><span class="hi">${hi}°</span> / <span class="lo">${lo}°</span></div>
            ${pp != null ? `<div class="precip">${pp}%💧</div>` : ''}
          </div>`;
        }).join('');
        forecastRow.style.display = '';
      }
    } catch (err) {
      console.warn('Weather fetch failed:', err);
      if (lineEl) {
        lineEl.textContent = (err && err.message) ? err.message : 'unavailable';
        lineEl.classList.remove('loading');
      }
    }
  };

  // ============================================================
  // Right-click handler (left-click does nothing / just closes popups)
  // ============================================================
  map.on('contextmenu', async (e) => {
    if (e.originalEvent) L.DomEvent.preventDefault(e.originalEvent);
    const { lat, lng } = e.latlng;
    if (!isInMontana(lat, lng)) {
      L.popup({ maxWidth: 220 })
        .setLatLng([lat, lng])
        .setContent('<div class="popup-content"><em>Outside Montana — click within the state boundary.</em></div>')
        .openOn(map);
      return;
    }

    L.popup({ maxWidth: 360, minWidth: 280 })
      .setLatLng([lat, lng])
      .setContent(`
        <div class="popup-content">
          <h3>📍 Location Details</h3>
          <div class="row"><span class="label">Coordinates:</span><br>
            ${lat.toFixed(5)}°, ${lng.toFixed(5)}°
          </div>
          <div class="row" id="wx-row">
            <button class="wx-btn" data-action="load-weather" data-lat="${lat}" data-lng="${lng}">
              ☀️ Show weather & 7-day forecast
            </button>
          </div>
          <div class="row" id="wx-line-row" style="display:none">
            <span class="label">Weather:</span> <span id="wx-line" class="loading">loading…</span>
          </div>
          <div class="row" id="wx-forecast-row" style="display:none">
            <span class="label">7-day forecast:</span>
            <div id="wx-forecast" class="forecast"></div>
          </div>
          <div class="row"><span class="label">BLM land:</span>
            <span id="blm-line" class="loading">checking…</span>
          </div>
          <div class="row"><span class="label">Bear likelihood:</span>
            <span id="bear-line" class="loading">checking…</span>
          </div>
          <div class="popup-actions">
            <button data-action="save-pin" data-lat="${lat}" data-lng="${lng}">📌 Save pin here</button>
          </div>
          ${useSupabasePins()
            ? ''
            : '<div class="signin-hint">Tip: <a href="login.html">log in</a> to sync your pins across devices.</div>'}
        </div>
      `)
      .openOn(map);

    // Weather is now lazy: only fetched when the user clicks the
    // "Show weather" button inside the popup. (handled via the
    // delegated popupopen handler — see window.__loadWeather below.)

    checkBLM(lat, lng).then(res => {
      const el = document.getElementById('blm-line'); if (!el) return;
      if (res.isBLM) {
        const unit = (res.info && (res.info.ADMIN_UNIT_NAME || res.info.ADMIN_UNIT_TYPE)) || 'BLM-administered';
        el.innerHTML = `<span class="yes">Yes</span> — ${unit}`;
      } else {
        el.innerHTML = `<span class="no">No</span> <small style="color:#888">(not on BLM surface)</small>`;
      }
      el.classList.remove('loading');
    }).catch(() => {
      const el = document.getElementById('blm-line');
      if (el) { el.textContent = 'could not determine'; el.classList.remove('loading'); }
    });

    checkBears(lat, lng).then(res => {
      const el = document.getElementById('bear-line'); if (!el) return;
      el.innerHTML = `<span class="${res.cls}">${res.likelihood}</span><br><small style="color:#666">${res.detail}</small>`;
      el.classList.remove('loading');
    }).catch(() => {
      const el = document.getElementById('bear-line');
      if (el) { el.textContent = 'could not determine'; el.classList.remove('loading'); }
    });
  });
