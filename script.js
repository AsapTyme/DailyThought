// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Check if we're on the article page
    const isArticlePage = document.body.classList.contains('article-view');
    
    if (isArticlePage) {
      initializeArticleView();
    } else {
      initializeLandingPage();
    }
  
    // Initialize dark mode toggle (works for both pages)
    initializeDarkModeToggle();
  });
  
  // Function to initialize dark mode
  function initializeDarkModeToggle() {
    const mode = document.getElementById("mode");
    if (mode) {
      // Check for saved preference in localStorage
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      
      // Apply saved preference if it exists
      if (savedDarkMode) {
        document.body.classList.add("dark-mode");
        mode.checked = true;
      }
      
      // Add event listener to toggle dark mode
      mode.addEventListener("click", (e) => {
        document.body.classList.toggle("dark-mode");
        // Save preference to localStorage
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
      });
    }
  }
  
  // Functions for the landing page
  function initializeLandingPage() {
    // Add any landing page specific initializations here
    console.log("Landing page initialized");
    
    // Add click event listeners to article links
    const articleLinks = document.querySelectorAll('.article-link');
    articleLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // You can add transitions or other effects when navigating to articles
        console.log("Navigating to article:", link.getAttribute('href'));
      });
    });
    
    // Initialize scrolling effects for article previews
    initializeScrollEffects();
  }
  
  function initializeScrollEffects() {
    // Add smooth scrolling to the blog header container
    const blogHeaderContainer = document.querySelector('.blog-header-container');
    if (blogHeaderContainer) {
      // Optional: Add custom scroll behavior here
    }
  }
  
  // Functions for the article view page
  function initializeArticleView() {
    // Load article content based on the URL parameter
    loadArticleContent();
    
    // Initialize highlight style selector
    const highlight = document.getElementById("highlight-style");
    if (highlight) {
      highlight.addEventListener("change", (e) => setHighlightStyle(e.target.value));
      setHighlightStyle(highlight.value);
    }
    
    // Initialize GSAP ScrollTrigger for text highlighting
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.utils.toArray(".text-highlight").forEach((highlight) => {
        ScrollTrigger.create({
          trigger: highlight,
          start: "-100px center",
          onEnter: () => highlight.classList.add("active")
        });
      });
    }
  }
  
  // Helper function to set highlight style
  function setHighlightStyle(value) {
    document.body.setAttribute("data-highlight", value);
  }
  
  // Function to load article content based on URL parameter
  function loadArticleContent() {
    // Get article ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (!articleId) return;
    
    // Articles data with unique content for each
    const articles = {
      "1": {
        title: "The Carbon in our Apple Pies",
        subtitle: "The Only Home We've Ever Known",
        author: "Jane Doe",
        authorImage: "/assets/author3.jpg",
        content: `
        <p>Galaxies ship of the imagination across the centuries at the edge of forever take root and flourish billions upon billions. Stirred by starlight how far away not a sunrise but a galaxyrise Sea of Tranquility concept of the number one dispassionate extraterrestrial observer. The carbon in our apple pies emerged into consciousness Sea of Tranquility something incredible is waiting to be known made in the interiors of collapsing stars inconspicuous motes of rock and gas.</p>
      
        <p>Great turbulent clouds something incredible is waiting to be known Jean-François Champollion hundreds of thousands science hearts of the stars. <mark class="text-highlight">Bits of moving fluff</mark> another world brain is the seed of intelligence how far away bits of moving fluff realm of the galaxies? Cosmic fugue a still more glorious dawn awaits rings of Uranus dream of the mind's eye not a sunrise but a galaxyrise the only home we've ever known.</p>
      
        <p>Quasar intelligent beings cosmic ocean realm of the galaxies Jean-François Champollion descended from astronomers? <mark class="text-highlight">Flatland prime number concept of the number one Euclid the carbon in our apple pies bits of moving fluff</mark>. Star stuff harvesting star light inconspicuous motes of rock and gas the ash of stellar alchemy encyclopaedia galactica bits of moving fluff the only home we've ever known. Made in the interiors of collapsing stars the ash of stellar alchemy made in the interiors of collapsing stars not a sunrise but a galaxyrise made in the interiors of collapsing stars something incredible is waiting to be known.</p>
      
        <p>Permanence of the stars billions upon billions tingling of the spine culture realm of the galaxies corpus callosum. Hydrogen atoms rich in mystery vastness is bearable only through love prime number paroxysm of global death another world. Encyclopaedia galactica emerged into consciousness the sky calls to us at the edge of forever across the centuries emerged into consciousness. <mark class="text-highlight">At the edge of forever descended from astronomers vanquish the impossible descended from astronomers another world invent the universe</mark>.</p>
      
        <p>Galaxies Hypatia trillion radio telescope paroxysm of global death emerged into consciousness. Vanquish the impossible Orion's sword hearts of the stars muse about are creatures of the cosmos made in the interiors of collapsing stars? Made in the interiors of collapsing stars two ghostly white figures in coveralls and helmets are softly dancing dream of the mind's eye Apollonius of Perga <mark class="text-highlight">inconspicuous motes of rock and gas</mark> Apollonius of Perga?</p>
        `
      },
      "2": {
        title: "Lullaby of the Mind's Eye",
        subtitle: "Exploring the Cosmic Consciousness",
        author: "John Smith",
        authorImage: "/assets/author2.jpg",
        content: `
        <p>The quiet murmur of lymphatic rivers, spiraling like nebulae in silence. Tendons hum with forgotten symphonies. <mark class="text-highlight">Whispers of mitochondria</mark> dance in cellular cathedrals. Breath—a holy thing—folding and unfolding the body like origami shaped by ancient winds. <mark class="text-highlight">Bioluminescent threads of renewal</mark> stretch through veins like light through stained glass, refracted by time, by healing, by stillness not yet born.</p>

        <p>Cartilage prayers, synovial hymns, rhythms rising through marrow and memory. A single heartbeat, echoed across galaxies of thought. Fingernails as calendars, skin as parchment, each freckle a fingerprint of the divine. Muscle remembers. Scar tissue sings. <mark class="text-highlight">Histories of healing written in fascia</mark>. Not a body, but a forest—regrowth inevitable, but never identical. You are not what you shed.</p>

        <p>Serotonin tides under moonlight. The gut—a second brain, a dreaming one. <mark class="text-highlight">Organs aligned like planets in retrograde</mark>, misfiring and finding each other again in spiral. You were whole before language, before diagnosis. You are still whole. The fever is a messenger. The ache is an architect. The cells forgive you while they rebuild you in silence.</p>

        `
      },
      "3": {
        title: "Billions Upon Billions",
        subtitle: "The Cost of Your Time",
        author: "Emily Chen",
        authorImage: "/assets/author1.jpg",
        content: `
        <p>Value is a mirror, and I held it wrong for years. <mark class="text-highlight">Currency of becoming</mark> spends itself through sacrifice, not salary. The paycheck is not the prize. Worth is not a receipt. The internal economy—grit, patience, self-trust—pays out in weeks that don't taste like survival. <mark class="text-highlight">Grind reborn as intention</mark>. I stopped calling it hustle when I realized I was bleeding for someone else's dream.</p>

        <p>The bank is not the altar. I am the altar. <mark class="text-highlight">Money as mirrored energy</mark>, circling through my palms like smoke with weight. I count not dollars but yeses: yes to sleep, yes to saying no, yes to not flinching when I look in the mirror. The budget became a boundary. The debt, a teacher. The savings, a spell.</p>

        <p>Coins in a jar echo like mantras. <mark class="text-highlight">Abundance is the absence of fear</mark>, not the presence of stuff. I decluttered my thoughts and watched my balance grow. I watered my mindset, and a paycheck bloomed in my inbox. Self-worth compounds. Investments in boundaries pay interest. And what is credit but a story we tell about who we’ll be tomorrow?</p>

        <p>Now I spend with love, not lack. <mark class="text-highlight">Financial freedom isn’t a number—it’s an exhale</mark>. I cash checks written by my past self and thank them. I tithe to the version of me that refused to quit. The receipts become relics, and every cent a seed. I do not chase money—I magnetize value. I do not hoard—I harvest.</p>

        `
      }
    };
    
    // Update the article with the selected data
    const article = articles[articleId];
    if (article) {
      document.getElementById('article-title').textContent = article.title;
      document.getElementById('article-subtitle').textContent = article.subtitle;
      document.getElementById('article-author').textContent = article.author;
      document.getElementById('about-author-name').textContent = article.author;

      const authorImages = document.querySelectorAll('.author img, .aboutTheAuthor img');
      authorImages.forEach(img => {
        img.src = article.authorImage;
        img.alt = article.author;
      });
      
      // Update the article content with the article-specific content
      document.getElementById('article-content').innerHTML = article.content;
      
      // Update page title
      document.title = article.title + " | Modern Minimalist Blog";
    }
  }