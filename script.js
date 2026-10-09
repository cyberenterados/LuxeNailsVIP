// Configuration - Cambiar por el número real de la cliente en formato internacional sin + ni espacios
const WHATSAPP_PHONE = "5491100000000";

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Interactive WhatsApp Widget Popup Toggle
    const waToggleBtn = document.getElementById('wa-toggle-btn');
    const waPopup = document.getElementById('wa-popup');
    const waCloseBtn = document.getElementById('wa-close-btn');

    if (waToggleBtn && waPopup) {
        waToggleBtn.addEventListener('click', () => {
            waPopup.classList.toggle('hidden');
        });
    }

    if (waCloseBtn && waPopup) {
        waCloseBtn.addEventListener('click', () => {
            waPopup.classList.add('hidden');
        });
    }

    // 3. FAQ Accordion Toggle
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            
            content.classList.toggle('hidden');
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        });
    });

    // 4. Interactive Combo Builder / Cotizador Logic
    const comboRadios = document.querySelectorAll('input[name="sistema"]');
    const extraCheckboxes = document.querySelectorAll('.extra-option input[type="checkbox"]');
    const locationInput = document.getElementById('user-location');
    const comboSummary = document.getElementById('combo-summary');
    const sendComboBtn = document.getElementById('send-combo-btn');

    function updateComboSummary() {
        // Selected Radio
        let selectedSystem = "Esculpidas en Gel";
        comboRadios.forEach(radio => {
            const parentLabel = radio.closest('.combo-option');
            if (radio.checked) {
                selectedSystem = radio.value;
                if (parentLabel) parentLabel.classList.add('active');
            } else {
                if (parentLabel) parentLabel.classList.remove('active');
            }
        });

        // Selected Extras
        const selectedExtras = [];
        extraCheckboxes.forEach(cb => {
            if (cb.checked) {
                selectedExtras.push(cb.value);
            }
        });

        const extrasText = selectedExtras.length > 0 ? selectedExtras.join(', ') : 'Sin adicionales';
        const locationText = locationInput && locationInput.value.trim() !== '' ? ` (Zona: ${locationInput.value.trim()})` : '';

        if (comboSummary) {
            comboSummary.textContent = `${selectedSystem} + Extras: ${extrasText}${locationText}`;
        }

        return {
            system: selectedSystem,
            extras: extrasText,
            location: locationInput ? locationInput.value.trim() : ''
        };
    }

    // Add Listeners to Builder Elements
    comboRadios.forEach(radio => radio.addEventListener('change', updateComboSummary));
    extraCheckboxes.forEach(cb => cb.addEventListener('change', updateComboSummary));
    if (locationInput) locationInput.addEventListener('input', updateComboSummary);

    // Initial trigger
    updateComboSummary();

    // Send Combo to WhatsApp
    if (sendComboBtn) {
        sendComboBtn.addEventListener('click', () => {
            const data = updateComboSummary();
            
            let message = `Hola! Quisiera solicitar disponibilidad para un servicio a domicilio.%0A%0A`;
            message += `💅 *Sistema elegido:* ${data.system}%0A`;
            message += `🎨 *Adicionales:* ${data.extras}%0A`;
            
            if (data.location) {
                message += `📍 *Ubicación / Zona:* ${data.location}%0A`;
            }

            message += `%0A¿Qué fechas y horarios tienes disponibles?`;

            const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
            window.open(waUrl, '_blank');
        });
    }

});
