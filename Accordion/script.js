    function myAccordion() {
        const accordionButtons = document.querySelectorAll('.accordion-button');

        accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const collapseId = this.getAttribute('data-bs-target');
            const collapse = document.querySelector(collapseId);
            const allCollapses = document.querySelectorAll('.accordion-collapse');

            allCollapses.forEach(collapse1 => {
            collapse1.classList.remove('show');
            const button = document.querySelector(`[data-bs-target="#${collapse1.id}"]`);
            if (button) {
                button.setAttribute('aria-expanded', 'false');
            }
            });

            if (!collapse.classList.contains('show')) {
            collapse.classList.add('show');
            this.setAttribute('aria-expanded', 'true');
            }
        });
        });
    }

    myAccordion();

