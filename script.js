document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const inputs = {
        univName: document.getElementById('univNameInput'),
        univAddress: document.getElementById('univAddressInput'),
        name: document.getElementById('nameInput'),
        nim: document.getElementById('nimInput'),
        pob: document.getElementById('pobInput'),
        dob: document.getElementById('dobInput'),
        faculty: document.getElementById('facultyInput'),
        major: document.getElementById('majorInput'),
        degree: document.getElementById('degreeInput'),
        validity: document.getElementById('validityInput')
    };

    const display = {
        univName: document.getElementById('cardUnivName'),
        univAddress: document.getElementById('cardAddress'),
        name: document.getElementById('cardName'),
        nim: document.getElementById('cardNim'),
        pob: document.getElementById('cardPob'),
        dob: document.getElementById('cardDob'),
        faculty: document.getElementById('cardFaculty'),
        major: document.getElementById('cardMajor'),
        degree: document.getElementById('cardDegree'),
        validity: document.getElementById('cardValidity'),
        qr: document.getElementById('cardQr')
    };

    const fileInputs = {
        logo: document.getElementById('logoInput'),
        photo: document.getElementById('photoInput')
    };

    const images = {
        logo: document.getElementById('cardLogo'),
        photo: document.getElementById('cardPhoto')
    };

    // --- Format Date Helper ---
    function formatDate(dateString) {
        if (!dateString) return '';
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    }

    // --- Event Listeners : Text Inputs ---
    Object.keys(inputs).forEach(key => {
        const input = inputs[key];
        const target = display[key];
        
        if (input && target) {
            input.addEventListener('input', () => {
                let value = input.value;
                
                // Special handling
                if (key === 'dob') {
                    target.textContent = formatDate(value);
                } else {
                    target.textContent = value;
                }

                // Update QR Code if NIM changes
                if (key === 'nim') {
                    display.qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
                }
            });
        }
    });

    // --- Init Dates ---
    if(inputs.dob.value) {
        display.dob.textContent = formatDate(inputs.dob.value);
    }

    // --- Event Listeners : File Uploads ---
    function handleFileUpload(inputElement, imgElement, fileNameId) {
        inputElement.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imgElement.src = e.target.result;
                }
                reader.readAsDataURL(file);
                
                // Update filename text
                const fileNameSpan = document.getElementById(fileNameId);
                if(fileNameSpan) fileNameSpan.textContent = file.name;
            }
        });
    }

    handleFileUpload(fileInputs.logo, images.logo, 'logoFileName');
    handleFileUpload(fileInputs.photo, images.photo, 'photoFileName');


    // --- Download Functionality ---
    document.getElementById('downloadBtn').addEventListener('click', () => {
        const cardElement = document.getElementById('idCard');
        const btn = document.getElementById('downloadBtn');
        const loading = document.getElementById('loadingOverlay');

        // Show loading
        loading.style.display = 'flex';
        btn.disabled = true;

        html2canvas(cardElement, {
            scale: 3, // High resolution
            useCORS: true, 
            backgroundColor: null
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `KTM-${inputs.name.value}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            // Hide loading
            loading.style.display = 'none';
            btn.disabled = false;
        }).catch(err => {
            console.error(err);
            alert("Gagal mendownload gambar.");
            loading.style.display = 'none';
            btn.disabled = false;
        });
    });

    // --- Random Data (Optional for testing) ---
    document.getElementById('randomDataBtn').addEventListener('click', async () => {
        try {
            const res = await fetch('https://randomuser.me/api/?nat=id');
            const data = await res.json();
            const user = data.results[0];

            inputs.name.value = `${user.name.first} ${user.name.last}`;
            inputs.pob.value = user.location.city;
            inputs.dob.value = user.dob.date.split('T')[0];
            
            // Trigger events
            inputs.name.dispatchEvent(new Event('input'));
            inputs.pob.dispatchEvent(new Event('input'));
            inputs.dob.dispatchEvent(new Event('input'));
            
            // Random Photo
            images.photo.src = user.picture.large;
            
        } catch (e) {
            console.log("Offline mode or API error");
        }
    });

});
