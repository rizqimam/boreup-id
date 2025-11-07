// ===============================
// Daftar Kalkulator BoreUp.ID
// ===============================
const kalkulatorList = [
  { nama: "Bore-Up CC", icon: "⚙️", id: "cc" },
  { nama: "Kompresi Mesin", icon: "🧮", id: "kompresi" },
  { nama: "Rasio Gigi", icon: "⚡", id: "gigi" },
  { nama: "Power Estimasi", icon: "🏍️", id: "power" },
  { nama: "Klep Calculator", icon: "🔩", id: "klep" },
  { nama: "Noken As", icon: "🔧", id: "noken" },
];

// ===============================
// Inisialisasi Dashboard
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('kalkulatorList');
  if (!container) return;

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

// ===============================
// Fungsi Load Kalkulator Dinamis
// ===============================
async function bukaKalkulator(id) {
  const container = document.getElementById('kalkulator-container');
  container.innerHTML = `
    <div class="loading">
      <p>🔄 Memuat kalkulator ${id.toUpperCase()}...</p>
    </div>
  `;

  try {
    const res = await fetch(`pages/kalkulator-${id}.html`);
    if (!res.ok) throw new Error('File tidak ditemukan');
    const html = await res.text();
    container.innerHTML = html;
    window.scrollTo({ top: container.offsetTop, behavior: 'smooth' });
  } catch (error) {
    container.innerHTML = `
      <div class="error">
        ❌ Gagal memuat kalkulator: ${id.toUpperCase()}<br>
        (${error.message})
      </div>
    `;
  }
}

// ===============================
// Tombol Keluar
// ===============================
function keluar() {
  window.location.href = 'index.html';
}
