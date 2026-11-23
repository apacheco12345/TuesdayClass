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
    
    {
      type: 'category', label: '2. The Problem', link: { type: 'link', href: `${PAPER}#the-problem`}, collapsed: true, items:[
    {type: 'link', label: '2.1 History of the Issue', href: `${PAPER}#history-of-the-issue`, className:'sidebar-sublink'},
    {type: 'link', label: '2.2 Current State of the Research', href: `${PAPER}#current-state-of-the-research`, className:'sidebar-sublink'},
    {type: 'link', label: '2.3 What this looks like at UCSB', href: `${PAPER}#what-this-looks-like-at-ucsb`, className:'sidebar-sublink'},
    ],
    }
    
    {type: 'link', label: '3. Our Study', href: `${PAPER}#our-study`},
    {type: 'link', label: '3.1 Results', href: `${PAPER}#results`, className:'sidebar-sublink'},
    {type: 'link', label: '3.2 Limitations', href: `${PAPER}#limitations`, className:'sidebar-sublink'},
    
    {type: 'link', label: '4. Our Solution', href: `${PAPER}#our-solution`},
    {type: 'link', label: '4.1 Pop-up Events', href: `${PAPER}#pop-up-events`, className:'sidebar-sublink'},
    {type: 'link', label: '4.2 Farmers Market-Style Events in Isla Vista', href: `${PAPER}#farmers-market-events`, className:'sidebar-sublink'},
    {type: 'link', label: '4.3 Cooking Demonstrations', href: `${PAPER}#cooking-demonstrations`, className:'sidebar-sublink'},
    
    {type: 'link', label: '5. How It Would Work', href: `${PAPER}#how-it-would-work`},
    {type: 'link', label: '5.1 Partners', href: `${PAPER}#partners`, className:'sidebar-sublink'},
    {type: 'link', label: '5.2 Timeline', href: `${PAPER}#timeline`, className:'sidebar-sublink'},
    {type: 'link', label: '5.3 Advertising the Events', href: `${PAPER}#advertising-the-events`, className:'sidebar-sublink'},
    {type: 'link', label: '5.4 Measuring Success', href: `${PAPER}#measuring-success`, className:'sidebar-sublink'},
    {type: 'link', label: '5.5 Cost', href: `${PAPER}#cost`, className:'sidebar-sublink'},

    
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
