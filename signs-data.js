const SIGN_DATA = [];
(() => {
  const base = { lat: 40.758, lng: -73.9855 }; // NYC
  for (let i = 1; i <= 32; i++) {
    const jitterLat = (Math.random() - 0.5) * 0.06;
    const jitterLng = (Math.random() - 0.5) * 0.08;
    SIGN_DATA.push({
      id: i,
      city: "New York",
      coords: [base.lat + jitterLat, base.lng + jitterLng],
      venue: `NYC Sign #${i}`,
      img: `https://picsum.photos/seed/nyc${i}/300/160`,
      href: "https://blipbillboards.com/"
    });
  }
  SIGN_DATA.push(
    { id: 101, city: "Chicago", coords: [41.8781, -87.6298], venue: "Chicago Loop", img: "https://picsum.photos/seed/chi1/300/160", href: "https://blipbillboards.com/" },
    { id: 102, city: "Chicago", coords: [41.892, -87.635], venue: "River North Digital", img: "https://picsum.photos/seed/chi2/300/160", href: "https://blipbillboards.com/" },
    { id: 103, city: "Chicago", coords: [41.85, -87.65], venue: "South Side Plaza", img: "https://picsum.photos/seed/chi3/300/160", href: "https://blipbillboards.com/" }
  );
})();
