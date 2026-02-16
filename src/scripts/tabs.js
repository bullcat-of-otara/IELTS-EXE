// Tab Switching Logic
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.content-section');

    function switchTab(tabId) {
        // Deactivate all
        tabs.forEach(t => {
            t.classList.remove('bg-slate-800', 'text-neon-green', 'border-neon-green');
            t.classList.add('border-transparent');
            // Hide cursor
            const cursor = t.querySelector('.cursor-indicator');
            if (cursor) cursor.classList.add('opacity-0');
        });
        sections.forEach(s => s.classList.add('hidden'));

        // Activate clicked
        const activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.classList.add('bg-slate-800', 'text-neon-green', 'border-neon-green');
            activeTab.classList.remove('border-transparent');

            // Show cursor
            const cursor = activeTab.querySelector('.cursor-indicator');
            if (cursor) cursor.classList.remove('opacity-0');
        }

        const targetId = tabId.replace('tab-', 'section-');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.animate([
                { opacity: 0, transform: 'translateY(10px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ], {
                duration: 300,
                easing: 'ease-out'
            });
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.id);
        });
    });

    // Default to Home or restore state? logic here if needed
    // For now, Sidebar component script handles initial load, but we can centralize here if we moved logic out.
    // The Sidebar.astro script block is sufficient for now, but this file is good for separation if needed later.
});
