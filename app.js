// Data dan Konfigurasi
const cardThemes = {
    green: {
        gradient: 'linear-gradient(135deg, #0d9668 0%, #14b8a6 50%, #0d9668 100%)',
        bannerGradient: 'linear-gradient(90deg, #0a7b54 0%, #0d9668 100%)',
        accentColor: '#0d9668',
        bottomBar: 'linear-gradient(90deg, #0d9668, #14b8a6, #0d9668)',
        photoBorder: '#0d9668',
        photoBg: '#e0f2f1',
        statusColor: '#0d9668'
    },
    blue: {
        gradient: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #1d4ed8 100%)',
        bannerGradient: 'linear-gradient(90deg, #1a3fb0 0%, #1d4ed8 100%)',
        accentColor: '#1d4ed8',
        bottomBar: 'linear-gradient(90deg, #1d4ed8, #3b82f6, #1d4ed8)',
        photoBorder: '#1d4ed8',
        photoBg: '#dbeafe',
        statusColor: '#1d4ed8'
    },
    red: {
        gradient: 'linear-gradient(135deg, #b91c1c 0%, #ef4444 50%, #b91c1c 100%)',
        bannerGradient: 'linear-gradient(90deg, #991b1b 0%, #b91c1c 100%)',
        accentColor: '#b91c1c',
        bottomBar: 'linear-gradient(90deg, #b91c1c, #ef4444, #b91c1c)',
        photoBorder: '#b91c1c',
        photoBg: '#fee2e2',
        statusColor: '#b91c1c'
    },
    purple: {
        gradient: 'linear-gradient(135deg, #7e22ce 0%, #a855f7 50%, #7e22ce 100%)',
        bannerGradient: 'linear-gradient(90deg, #6b21a8 0%, #7e22ce 100%)',
        accentColor: '#7e22ce',
        bottomBar: 'linear-gradient(90deg, #7e22ce, #a855f7, #7e22ce)',
        photoBorder: '#7e22ce',
        photoBg: '#f3e8ff',
        statusColor: '#7e22ce'
    },
    orange: {
        gradient: 'linear-gradient(135deg, #c2410c 0%, #f97316 50%, #c2410c 100%)',
        bannerGradient: 'linear-gradient(90deg, #9a3412 0%, #c2410c 100%)',
        accentColor: '#c2410c',
        bottomBar: 'linear-gradient(90deg, #c2410c, #f97316, #c2410c)',
        photoBorder: '#c2410c',
        photoBg: '#ffedd5',
        statusColor: '#c2410c'
    },
    navy: {
        gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #1e3a5f 100%)',
        bannerGradient: 'linear-gradient(90deg, #172e4d 0%, #1e3a5f 100%)',
        accentColor: '#1e3a5f',
        bottomBar: 'linear-gradient(90deg, #1e3a5f, #2563eb, #1e3a5f)',
        photoBorder: '#1e3a5f',
        photoBg: '#e0e7ff',
        statusColor: '#1e3a5f'
    },
    teal: {
        gradient: 'linear-gradient(135deg, #0f766e 0%, #2dd4bf 50%, #0f766e 100%)',
        bannerGradient: 'linear-gradient(90deg, #0d5f58 0%, #0f766e 100%)',
        accentColor: '#0f766e',
        bottomBar: 'linear-gradient(90deg, #0f766e, #2dd4bf, #0f766e)',
        photoBorder: '#0f766e',
        photoBg: '#ccfbf1',
        statusColor: '#0f766e'
    },
    pink: {
        gradient: 'linear-gradient(135deg, #be185d 0%, #ec4899 50%, #be185d 100%)',
        bannerGradient: 'linear-gradient(90deg, #9d174d 0%, #be185d 100%)',
        accentColor: '#be185d',
        bottomBar: 'linear-gradient(90deg, #be185d, #ec4899, #be185d)',
        photoBorder: '#be185d',
        photoBg: '#fce7f3',
        statusColor: '#be185d'
    }
};

const namaLaki = ["Hendra Wijaya", "Andi Prasetyo", "Budi Santoso", "Rizki Ramadhan", "Fajar Nugroho", "Dimas Saputra", "Arif Rahman", "Gilang Pratama"];
const namaPerempuan = ["Nadia Permata", "Siti Nurhaliza", "Dewi Anggraini", "Putri Rahayu", "Anisa Fitri", "Maya Sari", "Rina Kartika", "Dian Puspita"];
const tempatLahirList = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Semarang", "Medan", "Makassar", "Palembang", "Denpasar", "Malang", "Bogor", "Tangerang", "Bekasi", "Depok", "Serang", "Pandeglang", "Solo", "Pontianak", "Banjarmasin", "Manado"];
const fakultasList = ["Fakultas Ilmu Sosial dan Politik", "Fakultas Keguruan dan Ilmu Pendidikan", "Fakultas Teknik", "Fakultas Ekonomi dan Bisnis", "Fakultas Hukum", "Fakultas Kedokteran", "Fakultas MIPA", "Fakultas Pertanian", "Fakultas Ilmu Budaya", "Fakultas Psikologi", "Fakultas Ilmu Komunikasi", "Fakultas Farmasi"];
const jenjangList = ["D3", "D4", "S1", "S2", "S3"];
const dosenWaliList = ["Dr. Dedi Kurniawan, S.T., M.T.", "Prof. Dr. Siti Aminah, M.Pd.", "Dr. Bambang Susanto, M.Si.", "Dr. Rina Wulandari, M.Hum.", "Prof. Dr. Ahmad Hidayat, M.Sc.", "Dr. Dewi Lestari, S.Pd., M.Ed.", "Dr. Agus Prasetyo, M.Eng.", "Prof. Dr. Nurul Huda, M.A."];
const bulanList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

// Placeholder signature base64
const signaturePlaceholders = [
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMCAyMCBRIDI1IDE1IDQwIDIwIFQgNzAgMjAgUSA4NSAyNSAxMDAgMjAiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNSAyNSBRIDMwIDEwIDUwIDI1IFQgODUgMjUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMCAyMCBRIDQwIDE1IDYwIDIwIFQgOTAgMTUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMCAxNSBRIDI1IDI1IDQwIDE1IFQgNzAgMjAgUSA4NSAxNSAxMDAgMjAiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+'
];

let currentStudent = null;
let currentUniversity = null;
let currentTheme = 'green';
let photoDataUrl = null;
let logoDataUrl = null;

// Generate random student data
function generateRandomStudent() {
    const isLaki = Math.random() > 0.5;
    const names = isLaki ? namaLaki : namaPerempuan;
    const nama = names[Math.floor(Math.random() * names.length)];
    const tempat = tempatLahirList[Math.floor(Math.random() * tempatLahirList.length)];
    const fakultas = fakultasList[Math.floor(Math.random() * fakultasList.length)];
    const jenjang = jenjangList[Math.floor(Math.random() * jenjangList.length)];
    const dosen = dosenWaliList[Math.floor(Math.random() * dosenWaliList.length)];

    const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0');
    const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0');
    const year = Math.floor(Math.random() * 5 + 2002).toString();

    const nim = '2024' + Math.floor(Math.random() * 9000000 + 1000000).toString();
    const sigIdx = Math.floor(Math.random() * signaturePlaceholders.length);

    const masaDay = Math.floor(Math.random() * 28 + 1);
    const masaMonth = bulanList[Math.floor(Math.random() * 12)];
    const masaYear = Math.floor(Math.random() * 3 + 2027);

    const diterbitDay = Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0');
    const diterbitMonth = Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0');
    const diterbitYear = Math.floor(Math.random() * 2 + 2025);

    return {
        nama,
        nim,
        tempatLahir: tempat,
        tanggalLahir: `${day}/${month}/${year}`,
        fakultas,
        programStudi: "Ilmu Komunikasi",
        jenjang,
        tahunAkademik: "2024 - 2028",
        masaAktif: `${masaDay} - ${masaMonth} - ${masaYear}`,
        dosenWali: dosen,
        jenisKelamin: isLaki ? "Laki-laki" : "Perempuan",
        photoUrl: null,
        noKartu: `KTM-${nim}-${new Date().getFullYear()}`,
        diterbitkan: `${diterbitDay}/${diterbitMonth}/${diterbitYear}`,
        signatureIndex: sigIdx
    };
}

// Get data from form
function getFormData() {
    return {
        nama: document.getElementById('input-nama').value || 'Nama Lengkap',
        nim: document.getElementById('input-nim').value || '0000000000',
        tempatLahir: document.getElementById('input-tempat').value || 'Tempat Lahir',
        tanggalLahir: document.getElementById('input-tanggal').value || '01/01/2000',
        fakultas: document.getElementById('input-fakultas').value,
        programStudi: document.getElementById('input-prodi').value || 'Program Studi',
        jenjang: document.getElementById('input-jenjang').value,
        tahunAkademik: document.getElementById('input-tahun').value || '2024 - 2028',
        masaAktif: document.getElementById('input-masa').value || '01 - Januari - 2028',
        dosenWali: document.getElementById('input-dosen').value || 'Dr. Nama Dosen, S.T., M.T.',
        photoUrl: photoDataUrl,
        noKartu: `KTM-${document.getElementById('input-nim').value || '0000000000'}-${new Date().getFullYear()}`,
        diterbitkan: new Date().toLocaleDateString('id-ID').replace(/\//g, '/'),
        signatureIndex: Math.floor(Math.random() * signaturePlaceholders.length)
    };
}

function getUniversityData() {
    return {
        name: document.getElementById('input-univ').value || 'Universitas Negeri Yogyakarta',
        address: document.getElementById('input-alamat').value || 'Jl. Colombo No.1, Karang Malang',
        logoUrl: logoDataUrl
    };
}

// Load form with data
function loadFormData(student, university) {
    document.getElementById('input-nama').value = student.nama || '';
    document.getElementById('input-nim').value = student.nim || '';
    document.getElementById('input-tempat').value = student.tempatLahir || '';
    document.getElementById('input-tanggal').value = student.tanggalLahir || '';
    document.getElementById('input-fakultas').value = student.fakultas || 'Fakultas Keguruan dan Ilmu Pendidikan';
    document.getElementById('input-prodi').value = student.programStudi || '';
    document.getElementById('input-jenjang').value = student.jenjang || 'S1';
    document.getElementById('input-tahun').value = student.tahunAkademik || '';
    document.getElementById('input-masa').value = student.masaAktif || '';
    document.getElementById('input-dosen').value = student.dosenWali || '';
    document.getElementById('input-univ').value = university.name || '';
    document.getElementById('input-alamat').value = university.address || '';
}

// Format tanggal lahir
function formatTTL(student) {
    const bulanMap = {
        "01": "Januari", "02": "Februari", "03": "Maret", "04": "April",
        "05": "Mei", "06": "Juni", "07": "Juli", "08": "Agustus",
        "09": "September", "10": "Oktober", "11": "November", "12": "Desember"
    };

    const parts = student.tanggalLahir.split("/");
    if (parts.length === 3) {
        const bulan = bulanMap[parts[1]] || parts[1];
        return `${student.tempatLahir}, ${parseInt(parts[0])} ${bulan} ${parts[2]}`;
    }
    return `${student.tempatLahir}, ${student.tanggalLahir}`;
}

// Render card
function renderCard() {
    const theme = cardThemes[currentTheme];
    const student = currentStudent;
    const university = currentUniversity;

    const photoDisplay = student.photoUrl
        ? `<img src="${student.photoUrl}" style="width: 100%; height: 100%; object-fit: cover;">`
        : `<div class="card-photo-placeholder" style="color: ${theme.accentColor}">Foto<br>Mahasiswa</div>`;

    const logoDisplay = university.logoUrl
        ? `<img src="${university.logoUrl}" class="card-logo" style="background: white;">`
        : `<div class="card-logo" style="background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 10px; color: white; font-weight: 600;">LOGO</div>`;

    const logoSmallDisplay = university.logoUrl
        ? `<img src="${university.logoUrl}" class="card-logo-small" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; opacity: 0.4;">`
        : `<div class="card-logo-small" style="width: 38px; height: 38px; border-radius: 50%; background: ${theme.photoBg}; border: 1px solid ${theme.photoBorder}33; display: flex; align-items: center; justify-content: center; font-size: 7px; color: ${theme.accentColor}; opacity: 0.6; font-weight: 600;">LOGO</div>`;

    const cardHTML = `
        <div class="card-header" style="background: ${theme.gradient}">
            ${logoDisplay}
            <div class="card-header-text">
                <div class="card-header-small">REPUBLIK INDONESIA</div>
                <div class="card-header-title">${university.name.toUpperCase()}</div>
                <div class="card-header-address">${university.address}</div>
            </div>
        </div>
        
        <div class="card-banner" style="background: ${theme.bannerGradient}">
            <span class="card-banner-text">KARTU TANDA MAHASISWA</span>
        </div>
        
        <div class="card-body">
            <div class="card-photo" style="border: 2px solid ${theme.photoBorder}; background: ${theme.photoBg}">
                ${photoDisplay}
            </div>
            
            <div class="card-info">
                <table>
                    <tr>
                        <td class="label-col">Nama</td>
                        <td class="colon-col">:</td>
                        <td class="value-col value-bold">${student.nama}</td>
                    </tr>
                    <tr>
                        <td class="label-col">NIM</td>
                        <td class="colon-col">:</td>
                        <td class="value-col value-bold">${student.nim}</td>
                    </tr>
                    <tr>
                        <td class="label-col">TTL</td>
                        <td class="colon-col">:</td>
                        <td class="value-col">${formatTTL(student)}</td>
                    </tr>
                    <tr>
                        <td class="label-col">Fakultas</td>
                        <td class="colon-col">:</td>
                        <td class="value-col">${student.fakultas}</td>
                    </tr>
                    <tr>
                        <td class="label-col">Program Studi</td>
                        <td class="colon-col">:</td>
                        <td class="value-col">${student.programStudi}</td>
                    </tr>
                    <tr>
                        <td class="label-col">Jenjang</td>
                        <td class="colon-col">:</td>
                        <td class="value-col">${student.jenjang}</td>
                    </tr>
                    <tr>
                        <td class="label-col">Tahun Akademik</td>
                        <td class="colon-col">:</td>
                        <td class="value-col">${student.tahunAkademik}</td>
                    </tr>
                    <tr>
                        <td class="label-col">Masa Aktif</td>
                        <td class="colon-col">:</td>
                        <td class="value-col">${student.masaAktif}</td>
                    </tr>
                    <tr>
                        <td class="label-col">Status</td>
                        <td class="colon-col">:</td>
                        <td class="value-col" style="color: ${theme.statusColor}; font-weight: 700;">Mahasiswa Aktif</td>
                    </tr>
                </table>
            </div>
            
            <div class="card-qr">
                <div id="qr-code"></div>
                <span class="card-qr-text">SCAN QR</span>
            </div>
        </div>
        
        <div class="card-footer">
            <div class="card-footer-left">
                <div>No. Kartu: ${student.noKartu}</div>
                <div>Diterbitkan: ${student.diterbitkan}</div>
                <div style="margin-top: 4px;">
                    <svg id="barcode"></svg>
                </div>
            </div>
            
            <div class="card-signature">
                <div class="card-signature-label">Dosen Wali,</div>
                <img src="${signaturePlaceholders[student.signatureIndex]}" class="card-signature-img">
                <div class="card-signature-name">${student.dosenWali}</div>
            </div>
            
            ${logoSmallDisplay}
        </div>
        
        <div class="card-bottom-bar" style="background: ${theme.bottomBar}"></div>
    `;

    document.getElementById('ktm-card').innerHTML = cardHTML;

    // Generate QR Code
    new QRCode(document.getElementById('qr-code'), {
        text: student.noKartu,
        width: 58,
        height: 58,
        correctLevel: QRCode.CorrectLevel.M
    });

    // Generate Barcode
    JsBarcode('#barcode', student.noKartu || 'KTM-0000', {
        width: 1,
        height: 22,
        fontSize: 0,
        margin: 0,
        displayValue: false,
        background: 'transparent'
    });
}

// Download card as image
function downloadCard() {
    const card = document.getElementById('ktm-card');

    html2canvas(card, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `KTM-${currentStudent.nim}.png`;
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Handle photo upload
function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            photoDataUrl = event.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Handle logo upload
function handleLogoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            logoDataUrl = event.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Generate initial random card
    currentStudent = generateRandomStudent();
    currentUniversity = {
        name: 'Universitas Negeri Yogyakarta',
        address: 'Jl. Colombo No.1, Karang Malang',
        logoUrl: null
    };
    loadFormData(currentStudent, currentUniversity);
    renderCard();

    // Apply button - use form data
    document.getElementById('apply-btn').addEventListener('click', () => {
        currentStudent = getFormData();
        currentUniversity = getUniversityData();
        renderCard();
    });

    // Generate button - create random data
    document.getElementById('generate-btn').addEventListener('click', () => {
        photoDataUrl = null;
        logoDataUrl = null;
        currentStudent = generateRandomStudent();
        currentUniversity = {
            name: 'Universitas Negeri Yogyakarta',
            address: 'Jl. Colombo No.1, Karang Malang',
            logoUrl: null
        };
        loadFormData(currentStudent, currentUniversity);
        renderCard();
    });

    // Reset button - clear form
    document.getElementById('reset-btn').addEventListener('click', () => {
        photoDataUrl = null;
        logoDataUrl = null;
        document.getElementById('input-nama').value = '';
        document.getElementById('input-nim').value = '';
        document.getElementById('input-tempat').value = '';
        document.getElementById('input-tanggal').value = '';
        document.getElementById('input-prodi').value = '';
        document.getElementById('input-tahun').value = '';
        document.getElementById('input-masa').value = '';
        document.getElementById('input-dosen').value = '';
        document.getElementById('input-photo').value = '';
        document.getElementById('input-logo').value = '';
    });

    // Download button
    document.getElementById('download-btn').addEventListener('click', downloadCard);

    // Theme selector
    document.getElementById('theme-select').addEventListener('change', (e) => {
        currentTheme = e.target.value;
        renderCard();
    });

    // Photo upload
    document.getElementById('input-photo').addEventListener('change', handlePhotoUpload);

    // Logo upload
    document.getElementById('input-logo').addEventListener('change', handleLogoUpload);
});
