// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const PAPER = '/paper/food-insecurity';

/**
 * Manually built so the left rail doubles as the paper's own table of
 * contents (a "default template" left sidebar), instead of a doc-nav
 * sidebar on the left plus a separate on-page TOC on the right.
 *
 * Each link's #anchor must match the {#anchor} at the end of a heading
 * in whitepaper.md. If you rename a heading's anchor, change it here too.
 */

const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'food-insecurity',
      label: 'Food Insecurity at UCSB',
      className: 'sidebar-paper-title',
    },
    {
      type: 'html',
      value: '<div class="sidebar-contents-label">Contents</div>',
      defaultStyle: true,
    },
    {type: 'link', label: '1. Introduction', href: `${PAPER}#introduction`},
    {type: 'link', label: '2. The Problem', href: `${PAPER}#the-problem`},
    {type: 'link', label: '3. Our Study', href: `${PAPER}#our-study`},
    {type: 'link', label: '4. Our Solution', href: `${PAPER}#our-solution`},
    {type: 'link', label: '5. How It Would Work', href: `${PAPER}#how-it-would-work`},
    {type: 'link', label: '6. Conclusion', href: `${PAPER}#conclusion`},
    {
      type: 'link',
      label: 'Appendix',
      href: `${PAPER}#appendix`,
      className: 'sidebar-contents-minor',
    },
  ],
};

export default sidebars;
