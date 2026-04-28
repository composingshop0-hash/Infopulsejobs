// ================================
//   INFOPULSEJOBS - JAVASCRIPT
//   script.js
// ================================


// --- FILTER JOBS BY CATEGORY ---
function filterJobs(btn, cat) {

  // Remove active from all tabs
  var tabs = document.querySelectorAll('.filter-tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  // Set clicked tab as active
  btn.classList.add('active');

  // Show/hide job cards
  var cards = document.querySelectorAll('.job-card');
  for (var j = 0; j < cards.length; j++) {
    if (cat === 'all' || cards[j].getAttribute('data-cat') === cat) {
      cards[j].style.display = 'block';
    } else {
      cards[j].style.display = 'none';
    }
  }
}


// --- APPLY JOB BUTTON ---
function applyJob(name) {
  // Replace this alert with your actual job link later
  alert('Redirecting to application page for: ' + name);
}


// --- SEARCH FUNCTION ---
document.addEventListener('DOMContentLoaded', function () {

  var searchBtn = document.querySelector('.search-btn');
  var searchInput = document.querySelector('.search-box input');
  var searchSelect = document.querySelector('.search-box select');

  if (searchBtn) {
    searchBtn.addEventListener('click', function () {
      var keyword = searchInput.value.toLowerCase();
      var category = searchSelect.value;

      var cards = document.querySelectorAll('.job-card');
      var found = 0;

      for (var i = 0; i < cards.length; i++) {
        var title = cards[i].querySelector('.job-title').innerText.toLowerCase();
        var org = cards[i].querySelector('.job-org').innerText.toLowerCase();
        var cat = cards[i].getAttribute('data-cat');

        var matchKeyword = keyword === '' || title.includes(keyword) || org.includes(keyword);
        var matchCategory = category === 'All Categories' || getCatLabel(cat) === category;

        if (matchKeyword && matchCategory) {
          cards[i].style.display = 'block';
          found++;
        } else {
          cards[i].style.display = 'none';
        }
      }

      if (found === 0) {
        alert('No jobs found for your search. Try different keywords.');
      }
    });
  }

});


// Helper: match category value to select option
function getCatLabel(cat) {
  var map = {
    'gov':     'Government Jobs',
    'private': 'Private Jobs',
    'intern':  'Internships',
    'scholar': 'Scholarships',
    'loan':    'Govt Loan / Scheme'
  };
  return map[cat] || '';
}