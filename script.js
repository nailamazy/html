document.addEventListener('DOMContentLoaded', () => {
    // --- Elements Map ---
    const inputs = {
        univName: document.getElementById('univNameInput'),
        univAddress: document.getElementById('univAddressInput'),
        name: document.getElementById('nameInput'),
        nim: document.getElementById('nimInput'),
        faculty: document.getElementById('facultyInput'),
        major: document.getElementById('majorInput'),
        degree: document.getElementById('degreeInput'),
        year: document.getElementById('yearInput'),
        validity: document.getElementById('validityInput'),
        status: document.getElementById('statusInput'),
        officialTitle: document.getElementById('officialTitleInput'),
        officialName: document.getElementById('officialNameInput')
    };

    const display = {
        univName: document.getElementById('cardUnivName'),
        univAddress: document.getElementById('cardAddress'),
        name: document.getElementById('cardName'),
        nim: document.getElementById('cardNim'),
        faculty: document.getElementById('cardFaculty'),
        major: document.getElementById('cardMajor'),
        degree: document.getElementById('cardDegree'),
        year: document.getElementById('cardYear'),
        validity: document.getElementById('cardValidity'),
        status: document.getElementById('cardStatus'),
        officialTitle: document.getElementById('cardOfficialTitle'),
        officialName: document.getElementById('cardOfficialName'),
        qr: document.getElementById('cardQr'),
        sn: document.getElementById('cardSn')
    };

    // --- Inputs Logic ---
    console.log('Setting up input listeners...');
    Object.keys(inputs).forEach(key => {
        const input = inputs[key];
        const target = display[key];

        console.log(`Checking ${key}: input=${!!input}, target=${!!target}`);

        if (input && target) {
            input.addEventListener('input', () => {
                console.log(`${key} changed to: ${input.value}`);
                target.textContent = input.value;
                if (key === 'nim') {
                    // Update QR and SN
                    display.qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${input.value}`;
                    if (display.sn) display.sn.textContent = `${input.value}-A1`;
                }
            });
            console.log(`✓ Listener attached for ${key}`);
        } else {
            console.warn(`✗ Missing elements for ${key}`);
        }
    });

    // --- File Uploads ---
    function setupUpload(inputId, imgId, fallbackId = null) {
        const input = document.getElementById(inputId);
        const img = document.getElementById(imgId);
        const fallback = fallbackId ? document.getElementById(fallbackId) : null;

        // Find the custom button wrapper sibling or parent
        const wrapper = input.closest('.file-upload-wrapper');
        const customBtn = wrapper ? wrapper.querySelector('.file-upload-btn') : null;

        if (!input) return;

        // Trigger input click when custom button is clicked
        if (customBtn) {
            customBtn.addEventListener('click', () => {
                input.click();
            });
        }

        input.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    img.src = e.target.result;
                    img.style.display = 'block';
                    if (fallback) fallback.style.display = 'none';

                    // Update button text to show filename
                    if (customBtn) customBtn.innerHTML = `<i class="fa-solid fa-check"></i> ${file.name.substring(0, 10)}...`;
                }
                reader.readAsDataURL(file);
            }
        });
    }

    setupUpload('logoInput', 'cardLogo');
    setupUpload('photoInput', 'cardPhoto');
    setupUpload('officialSigInput', 'cardOfficialSigImg', 'cardOfficialSigText');


    // --- Color Theme ---
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const color = e.target.style.backgroundColor;
            document.documentElement.style.setProperty('--accent', color);

            // Force update for embedded styles if needed
            const greenBar = document.querySelector('.green-bar');
            if (greenBar) greenBar.style.backgroundColor = color;

            // Update security pattern color
            const pattern = document.querySelector('.security-pattern');
            if (pattern) {
                // Re-inject stylesheet rule for pattern if needed, but simpler to just toggle class or let variable handle it
                // Variable should work if scope is root
            }
        });
    });

    // --- Random Data ---
    document.getElementById('randomDataBtn').addEventListener('click', () => {
        const names = ["Ahmad Fauzi", "Siti Aminah", "Budi Santoso", "Dewi Sartika", "Rizky Ramadhan"];
        const rand = names[Math.floor(Math.random() * names.length)];
        const nim = "24" + Math.floor(Math.random() * 1000000);

        inputs.name.value = rand;
        inputs.nim.value = nim;

        // Trigger events
        inputs.name.dispatchEvent(new Event('input'));
        inputs.nim.dispatchEvent(new Event('input'));
    });

    // --- Download ---
    const downloadButton = document.getElementById('downloadBtn');
    console.log('Download button found:', !!downloadButton);

    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            console.log('Download button clicked!');
            const card = document.getElementById('idCard');
            const overlay = document.getElementById('loadingOverlay');

            if (!card) {
                console.error('Card element not found!');
                alert('Error: Card element not found');
                return;
            }

            console.log('Starting html2canvas...');
            overlay.style.display = 'flex';

            html2canvas(card, {
                scale: 3,
                useCORS: true,
                allowTaint: true
            }).then(canvas => {
                console.log('Canvas generated successfully');
                const link = document.createElement('a');
                link.download = `KTM_${inputs.nim.value}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
                overlay.style.display = 'none';
                console.log('Download initiated');
            }).catch(e => {
                console.error('html2canvas error:', e);
                alert('Error download: ' + e.message);
                overlay.style.display = 'none';
            });
        });
    } else {
        console.error('Download button not found in DOM!');
    }
});
