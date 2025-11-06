// Daftar kalkulator (bisa ditambah terus)
const kalkulatorList = [
  { nama: "Bore-Up CC", icon: "Cylinder", id: "boreup" },
  { nama: "Kompresi Mesin", icon: "Compression", id: "kompresi" },
  { nama: "Rasio Gigi", icon: "Gear", id: "gigi" },
  { nama: "Power Estimasi", icon: "Horsepower", id: "power" },
  { nama: "Klep Calculator", icon: "Valve", id: "klep" },
  { nama: "Noken As", icon: "Cam", id: "noken" },
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('kalkulatorList');
  kalkulatorList.forEach(k => {
    const card = document.createElement('div');
    card.className = 'kalkulator-card';
    card.innerHTML = `
      <h3>${k.icon} ${k.nama}</h3>
      <p>Klik untuk mulai</p>
    `;
    card.onclick = () => bukaKalkulator(k.id);
    container.appendChild(card);
  });
});

function bukaKalkulator(id) {
  alert(`Membuka: ${id.toUpperCase()} Calculator`);
  // Nanti di sini akan load konten kalkulator via JS atau iframe
}