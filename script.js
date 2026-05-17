// ============================================================
// DATA
// ============================================================
let students = [
  {id:'CS-2021-045',name:'Arjun Sharma',dept:'Computer Science',sem:5,math:88,physics:76,cs:94,chem:71,eng:85,risk:'low'},
  {id:'CS-2021-046',name:'Priya Iyer',dept:'Computer Science',sem:5,math:54,physics:48,cs:62,chem:50,eng:55,risk:'high'},
  {id:'EE-2021-012',name:'Rahul Verma',dept:'Electrical Eng.',sem:5,math:92,physics:88,cs:78,chem:80,eng:82,risk:'low'},
  {id:'ME-2022-033',name:'Sneha Patel',dept:'Mechanical Eng.',sem:3,math:45,physics:42,cs:38,chem:48,eng:60,risk:'critical'},
  {id:'CS-2022-067',name:'Amit Singh',dept:'Computer Science',sem:3,math:71,physics:65,cs:80,chem:68,eng:73,risk:'medium'},
  {id:'PH-2021-009',name:'Kavya Nair',dept:'Physics',sem:5,math:95,physics:97,cs:82,chem:90,eng:88,risk:'excellent'},
  {id:'CS-2023-018',name:'Vikram Rao',dept:'Computer Science',sem:1,math:60,physics:55,cs:70,chem:52,eng:65,risk:'medium'},
  {id:'CE-2021-044',name:'Meera Joshi',dept:'Civil Eng.',sem:5,math:38,physics:41,cs:35,chem:44,eng:50,risk:'high'},
  {id:'CS-2021-052',name:'Rohan Mehta',dept:'Computer Science',sem:5,math:82,physics:79,cs:88,chem:75,eng:80,risk:'low'},
  {id:'EE-2022-021',name:'Ananya Das',dept:'Electrical Eng.',sem:3,math:66,physics:60,cs:58,chem:62,eng:70,risk:'medium'},
  {id:'CS-2021-058',name:'Deepak Kumar',dept:'Computer Science',sem:5,math:30,physics:35,cs:40,chem:38,eng:45,risk:'critical'},
  {id:'ME-2023-007',name:'Pooja Sharma',dept:'Mechanical Eng.',sem:1,math:77,physics:72,cs:65,chem:70,eng:75,risk:'low'},
];

const pyqData = [
  {year:2024,subject:'Mathematics',type:'End Semester',questions:60,category:'math',difficulty:'Hard'},
  {year:2023,subject:'Mathematics',type:'Mid Semester',questions:30,category:'math',difficulty:'Medium'},
  {year:2024,subject:'Physics',type:'End Semester',questions:55,category:'physics',difficulty:'Hard'},
  {year:2023,subject:'Physics',type:'Mid Semester',questions:28,category:'physics',difficulty:'Medium'},
  {year:2022,subject:'Physics',type:'End Semester',questions:55,category:'physics',difficulty:'Medium'},
  {year:2024,subject:'Computer Science',type:'End Semester',questions:50,category:'cs',difficulty:'Hard'},
  {year:2023,subject:'Computer Science',type:'Mid Semester',questions:25,category:'cs',difficulty:'Medium'},
  {year:2022,subject:'Computer Science',type:'End Semester',questions:50,category:'cs',difficulty:'Easy'},
  {year:2024,subject:'Chemistry',type:'End Semester',questions:60,category:'chem',difficulty:'Hard'},
  {year:2023,subject:'Chemistry',type:'Mid Semester',questions:30,category:'chem',difficulty:'Medium'},
  {year:2021,subject:'Mathematics',type:'End Semester',questions:60,category:'math',difficulty:'Easy'},
];

const materialsData = [
  {title:'Complete Mathematics Formula Sheet',type:'formula',icon:'📐',size:'2.4 MB',updated:'May 2025',category:'formula'},
  {title:'Physics Chapter 1-5 Notes',type:'notes',icon:'📖',size:'8.1 MB',updated:'Apr 2025',category:'notes'},
  {title:'Data Structures & Algorithms — Full Notes',type:'notes',icon:'💻',size:'12.3 MB',updated:'May 2025',category:'notes'},
  {title:'Organic Chemistry Reaction Maps',type:'notes',icon:'🧪',size:'5.2 MB',updated:'Mar 2025',category:'notes'},
  {title:'Calculus — 100 Practice Problems',type:'practice',icon:'🧮',size:'3.7 MB',updated:'Apr 2025',category:'practice'},
  {title:'Introduction to Machine Learning — Video Series',type:'video',icon:'🎬',size:'Online',updated:'May 2025',category:'video'},
  {title:'Thermodynamics Explainer Videos',type:'video',icon:'🎥',size:'Online',updated:'Apr 2025',category:'video'},
  {title:'English Grammar & Writing Skills Guide',type:'notes',icon:'📝',size:'4.8 MB',updated:'Jan 2025',category:'notes'},
  {title:'Physics Formulas — Quick Reference',type:'formula',icon:'⚡',size:'1.2 MB',updated:'May 2025',category:'formula'},
  {title:'CS Mock Tests — Previous Semesters',type:'practice',icon:'🎯',size:'6.5 MB',updated:'May 2025',category:'practice'},
];

const badges = [
  {icon:'🔥',name:'12-Day Streak',locked:false},
  {icon:'🎯',name:'Perfect Score',locked:false},
  {icon:'📚',name:'Bookworm',locked:false},
  {icon:'⚡',name:'Fast Learner',locked:false},
  {icon:'🌟',name:'Top 10%',locked:false},
  {icon:'🏆',name:'Month Champion',locked:true},
  {icon:'🤖',name:'AI Explorer',locked:false},
  {icon:'💡',name:'Problem Solver',locked:true},
  {icon:'🎓',name:'Honor Roll',locked:true},
  {icon:'🚀',name:'Rocket Scorer',locked:true},
];

const aiResponses = {
  default: [
    "Great question! Let me explain this clearly...\n\nThis is a fundamental concept that appears frequently in exams. The key idea is to break it down step by step and understand the underlying principles rather than memorizing.",
    "I understand your doubt. Here's a clear explanation:\n\nStart with the basics and build up logically. Practice 5-10 similar problems after understanding the concept, and you'll find it becomes intuitive.",
    "That's an important topic! Here's what you need to know:\n\n📌 Focus on the core formula/concept\n📌 Understand WHY it works, not just HOW\n📌 Connect it to real-world applications\n📌 Solve 2-3 examples yourself",
  ],
  newton: "Newton's Laws of Motion:\n\n1️⃣ **First Law (Inertia):** An object remains at rest or in uniform motion unless acted upon by an external force.\n\n2️⃣ **Second Law (F=ma):** Force equals mass times acceleration. If F = 10N and m = 2kg, then a = 5 m/s²\n\n3️⃣ **Third Law:** For every action, there is an equal and opposite reaction.\n\n💡 Tip: Always draw a free body diagram first!",
  gradient: "Gradient Descent Explained:\n\nImagine you're on a hilly terrain and want to reach the lowest point. Gradient descent is an optimization algorithm that does exactly this for ML models!\n\n📐 **Formula:** θ = θ - α × ∇J(θ)\n\nWhere:\n• θ = model parameters\n• α = learning rate (step size)\n• ∇J = gradient of loss function\n\n🔑 Key: If learning rate α is too large → overshooting. Too small → very slow convergence.",
  quadratic: "Quadratic Equations:\n\nFor ax² + bx + c = 0:\n\n**Quadratic Formula:**\nx = (-b ± √(b² - 4ac)) / 2a\n\n**Discriminant (D = b² - 4ac):**\n• D > 0: Two distinct real roots\n• D = 0: One repeated real root\n• D < 0: No real roots (complex)\n\n**Example:** x² - 5x + 6 = 0\na=1, b=-5, c=6\nx = (5 ± √(25-24)) / 2 = (5±1)/2\n∴ x = 3 or x = 2 ✓",
  recursion: "Recursion in Computer Science:\n\nRecursion is when a function calls itself to solve smaller subproblems!\n\n```\ndef factorial(n):\n    if n == 0:  # base case\n        return 1\n    return n * factorial(n-1)  # recursive case\n```\n\n**Key Rules:**\n1. Always have a base case (stopping condition)\n2. Each call should move toward the base case\n3. Trust the recursive call!\n\n**Time Complexity of factorial:** O(n)\n**Space Complexity:** O(n) due to call stack",
};

const quotes = [
  '"The expert in anything was once a beginner." — Helen Hayes',
  '"Education is not the filling of a pail, but the lighting of a fire." — W.B. Yeats',
  '"Success is the sum of small efforts repeated day in and day out." — Robert Collier',
  '"The more that you read, the more things you will know." — Dr. Seuss',
  '"Believe you can and you\'re halfway there." — Theodore Roosevelt',
];

let currentRole = 'student';
let isEditing = false;
let pyqFilter = 'all';
let matFilter = 'all';
let charts = {};

// Simple demo credentials (role -> { id: password })
const demoCredentials = {
  student: {
    'student1': 's1234',
    'student123': '1234'
  },
  faculty: {
    'faculty1': 'f1234',
    'faculty123': '1234'
  },
  admin: {
    'admin': 'admin'
  }
};

// Events and placement data (shared between faculty and students)
let events = [
  {title:'IEEE Student Branch Meeting', location:'Auditorium', datetime:'Fri 2:00 PM', type:'Technical', desc:'Learn about IEEE membership benefits and networking opportunities.'},
  {title:'IET Membership Drive', location:'Engineering Block', datetime:'Wed 3:00 PM', type:'Technical', desc:'Explore IET professional credentials and career advancement paths.'},
  {title:'CIS Certification Seminar', location:'Computer Lab', datetime:'Sat 10:00 AM', type:'Technical', desc:'Discover cybersecurity certifications and professional growth paths.'}
];

let placementStats = {
  rate: 94,
  avgCTC: 7.2,
  highest: 24.5,
  lowest: 3.5,
  topCompanies: ['Google','Microsoft','Amazon','TCS','Infosys']
};

let placementRecords = [
  {student:'Meghana', company:'Google', package:40, role:'Software Engineer', year:2025, location:'Bangalore', notes:'Strong coding skills and excellent project demo.'},
  {student:'Arjun', company:'Microsoft', package:32, role:'Product Analyst', year:2025, location:'Hyderabad', notes:'Great problem solving and communication.'},
  {student:'Priya', company:'TCS', package:11, role:'Software Developer', year:2025, location:'Mumbai', notes:'Committed preparation and good academic record.'}
];

// ============================================================
// INIT
// ============================================================
window.addEventListener('load', () => {
  initParticles();
  renderPYQ();
  renderMaterials();
  renderBadges();
  renderAdminLog();
  document.getElementById('motivationQuote').textContent = quotes[Math.floor(Math.random() * quotes.length)];
  renderEvents();
  renderPlacementPanel();
  renderPlacementRecords();
  renderFacultyEvents();
  renderFacultyPlacementList();
});

// ============================================================
// NAVIGATION
// ============================================================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  // Init charts when showing dashboards
  if (page === 'student') setTimeout(initStudentCharts, 100);
  if (page === 'faculty') { setTimeout(initFacultyCharts, 100); renderStudentTable(); renderMarksTable(); renderRiskAlerts(); }
}

function showLogin(role) {
  currentRole = role || 'student';
  document.querySelectorAll('.role-btn').forEach((b,i) => {
    b.classList.remove('active');
    if ((i===0&&role==='student')||(i===1&&role==='faculty')||(i===2&&role==='admin')) b.classList.add('active');
  });
  showPage('login');
}

function selectRole(role, el) {
  currentRole = role;
  document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function doLogin() {
  const id = document.getElementById('loginId').value.trim();
  const pw = document.getElementById('loginPw').value.trim();
  if (!id || !pw) { showToast('Please enter credentials','error'); return; }
  // Validate against demo credentials per role
  const allowed = demoCredentials[currentRole] && demoCredentials[currentRole][id];
  if (!allowed || allowed !== pw) {
    showToast('Invalid ID or password for selected role', 'error');
    return;
  }
  showToast(`Welcome ${id}! Logging in as ${currentRole}...`, 'success');
  setTimeout(() => showPage(currentRole), 800);
}

function quickDemo() {
  currentRole = 'student';
  showToast('Loading Student Demo...', 'info');
  setTimeout(() => showPage('student'), 600);
}

// ============================================================
// TABS
// ============================================================
function showStudentTab(tab, el) {
  console.log('showStudentTab called with tab=', tab);
  // hide all student tabs
  document.querySelectorAll('[id^="stab-"]').forEach(t => t.classList.remove('active'));
  const target = document.getElementById('stab-' + tab);
  if (!target) {
    console.error('showStudentTab: target tab not found:', 'stab-' + tab);
    showToast(`Tab not found: ${tab}`, 'error');
    return;
  }
  target.classList.add('active');
  document.querySelectorAll('.sidebar .sidebar-item').forEach(i => i.classList.remove('active'));
  if (el) el.classList.add('active');
  if (tab === 'performance') setTimeout(initStudentPerfCharts, 100);
}

function showFacultyTab(tab, el) {
  document.querySelectorAll('[id^="ftab-"]').forEach(t => t.classList.remove('active'));
  document.getElementById('ftab-' + tab).classList.add('active');
  document.querySelectorAll('#page-faculty .sidebar-item').forEach(i => i.classList.remove('active'));
  if (el) el.classList.add('active');
  if (tab === 'analytics') setTimeout(initFacultyAnalyticsCharts, 100);
}

// ============================================================
// CHARTS
// ============================================================
function destroyChart(id) { if (charts[id]) { charts[id].destroy(); delete charts[id]; } }

function initStudentCharts() {
  destroyChart('sTrend');
  const ctx = document.getElementById('sTrendChart');
  if (!ctx) return;
  charts['sTrend'] = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
      datasets: [{
        label: 'Score %',
        data: [68,71,74,70,77,79,81,80,83,82],
        borderColor: '#00d4ff',
        backgroundColor: 'rgba(0,212,255,0.08)',
        tension: 0.4, fill: true, pointBackgroundColor: '#00d4ff', pointRadius: 4
      }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
      scales: { x: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' } }, y: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' }, min: 50, max: 100 } } }
  });
}

function initStudentPerfCharts() {
  destroyChart('sRadar'); destroyChart('sBar'); destroyChart('sAtt');
  const r = document.getElementById('sRadarChart');
  if (r) charts['sRadar'] = new Chart(r, {
    type: 'radar',
    data: {
      labels: ['Math','Physics','CS','Chemistry','English'],
      datasets: [{ label:'Score', data: [88,76,94,71,85],
        backgroundColor: 'rgba(0,212,255,0.15)', borderColor: '#00d4ff', pointBackgroundColor: '#00d4ff' }]
    },
    options: { responsive: true, maintainAspectRatio: false,
      scales: { r: { min: 0, max: 100, grid: { color: '#1a2d4a' }, ticks: { color: '#64748b', backdropColor: 'transparent' }, pointLabels: { color: '#94a3b8' } } },
      plugins: { legend: { display: false } } }
  });
  const b = document.getElementById('sBarChart');
  if (b) charts['sBar'] = new Chart(b, {
    type: 'bar',
    data: {
      labels: ['Math','Physics','CS','Chemistry','English'],
      datasets: [{ data: [88,76,94,71,85], backgroundColor: ['#00d4ff','#ffb800','#00ff88','#8b5cf6','#ff4466'] }]
    },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' } }, y: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' }, min: 0, max: 100 } } }
  });
  const a = document.getElementById('sAttChart');
  if (a) charts['sAtt'] = new Chart(a, {
    type: 'bar',
    data: {
      labels: ['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
      datasets: [{ data: [92,88,95,90,87,93,91,96,89,91], backgroundColor: 'rgba(0,255,136,0.3)', borderColor: '#00ff88', borderWidth: 1 }]
    },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' } }, y: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' }, min: 70, max: 100 } } }
  });
}

function initFacultyCharts() {
  destroyChart('fDist'); destroyChart('fRisk');
  const d = document.getElementById('fDistChart');
  if (d) charts['fDist'] = new Chart(d, {
    type: 'doughnut',
    data: {
      labels: ['Excellent','On Track','Medium Risk','High Risk','Critical'],
      datasets: [{ data: [8,32,14,6,2], backgroundColor: ['#00ff88','#00d4ff','#ffb800','#ff4466','#8b5cf6'] }]
    },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'right', labels: { color: '#94a3b8', padding: 12 } } } }
  });
  const r = document.getElementById('fRiskChart');
  if (r) charts['fRisk'] = new Chart(r, {
    type: 'line',
    data: {
      labels: ['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
      datasets: [
        { label: 'High Risk', data: [12,11,10,13,11,9,8,9,8,8], borderColor: '#ff4466', backgroundColor: 'rgba(255,68,102,0.08)', tension: 0.4, fill: true },
        { label: 'Medium Risk', data: [18,17,16,15,16,15,14,14,14,14], borderColor: '#ffb800', backgroundColor: 'rgba(255,184,0,0.06)', tension: 0.4, fill: true }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#94a3b8' } } },
      scales: { x: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' } }, y: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' } } } }
  });
}

function initFacultyAnalyticsCharts() {
  destroyChart('fHist'); destroyChart('fSub');
  const avgs = students.map(s => Math.round((s.math+s.physics+s.cs+s.chem+s.eng)/5));
  const bins = [0,0,0,0,0]; // <50,50-60,60-70,70-80,80+
  avgs.forEach(a => { if(a<50) bins[0]++; else if(a<60) bins[1]++; else if(a<70) bins[2]++; else if(a<80) bins[3]++; else bins[4]++; });
  const h = document.getElementById('fHistChart');
  if (h) charts['fHist'] = new Chart(h, {
    type: 'bar',
    data: { labels: ['<50','50-60','60-70','70-80','80+'], datasets: [{ data: bins, backgroundColor: ['#ff4466','#ffb800','#8b5cf6','#00d4ff','#00ff88'] }] },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' } }, y: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' } } } }
  });
  const subjects = ['Math','Physics','CS','Chemistry','English'];
  const subAvgs = subjects.map((_,i) => {
    const vals = [students.map(s=>s.math), students.map(s=>s.physics), students.map(s=>s.cs), students.map(s=>s.chem), students.map(s=>s.eng)];
    return Math.round(vals[i].reduce((a,b)=>a+b,0)/vals[i].length);
  });
  const sb = document.getElementById('fSubChart');
  if (sb) charts['fSub'] = new Chart(sb, {
    type: 'bar',
    data: { labels: subjects, datasets: [{ data: subAvgs, backgroundColor: ['#00d4ff','#ffb800','#00ff88','#8b5cf6','#ff4466'] }] },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' } }, y: { grid: { color: '#1a2d4a' }, ticks: { color: '#64748b' }, min: 0, max: 100 } } }
  });
}

// ============================================================
// STUDENT TABLE
// ============================================================
function renderStudentTable(filter='') {
  const tbody = document.getElementById('studentTbody');
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(filter.toLowerCase()) ||
    s.id.toLowerCase().includes(filter.toLowerCase()) ||
    s.dept.toLowerCase().includes(filter.toLowerCase())
  );
  tbody.innerHTML = filtered.map((s,i) => {
    const ri = students.indexOf(s);
    const riskTag = {low:'tag-green',medium:'tag-amber',high:'tag-red',critical:'tag-red',excellent:'tag-cyan'}[s.risk];
    const riskLabel = {low:'🟢 Low',medium:'🟡 Medium',high:'🔴 High',critical:'🚨 Critical',excellent:'⭐ Excellent'}[s.risk];
    return `<tr>
      <td style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:var(--text3)">${s.id}</td>
      <td style="font-weight:500">${s.name}</td>
      <td style="color:var(--text2);font-size:0.85rem">${s.dept}</td>
      <td style="text-align:center">Sem ${s.sem}</td>
      <td><span class="tag ${riskTag}">${riskLabel}</span></td>
      <td style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
        <button class="btn btn-sm" style="background:rgba(0,212,255,0.1);color:var(--cyan);border:1px solid rgba(0,212,255,0.3)" onclick="viewStudent(${ri})">View</button>
        <button class="btn btn-sm" style="background:rgba(255,184,0,0.1);color:var(--amber);border:1px solid rgba(255,184,0,0.3)" onclick="editStudent(${ri})">Edit</button>
        <button class="btn btn-sm btn-red" onclick="deleteStudent(${ri})">Delete</button>
      </td>
    </tr>`;
  }).join('');
  updateKPIs();
}

function filterStudents() { renderStudentTable(document.getElementById('studentSearch').value); }

function viewStudent(i) {
  const s = students[i];
  const avg = ((s.math+s.physics+s.cs+s.chem+s.eng)/5).toFixed(1);
  document.getElementById('viewStudentTitle').textContent = `👤 ${s.name}`;
  document.getElementById('viewStudentBody').innerHTML = `
    <div class="grid-2" style="gap:0.75rem;margin-bottom:1rem">
      <div class="kpi cyan"><div class="kpi-label">Student ID</div><div style="font-family:'JetBrains Mono',monospace;color:var(--cyan);font-size:1rem">${s.id}</div></div>
      <div class="kpi amber"><div class="kpi-label">Average Score</div><div class="kpi-value amber">${avg}%</div></div>
    </div>
    <div style="font-family:'Rajdhani',sans-serif;font-weight:600;margin-bottom:0.75rem">Subject-wise Marks</div>
    ${['math','physics','cs','chem','eng'].map((sub,si) => {
      const labels = ['Mathematics','Physics','Computer Science','Chemistry','English'];
      const v = s[sub]; const color = v>=80?'var(--green)':v>=60?'var(--cyan)':v>=50?'var(--amber)':'var(--red)';
      return `<div class="subject-bar"><div class="subject-info"><span class="name">${labels[si]}</span><span class="score" style="color:${color}">${v}/100</span></div><div class="bar-track"><div class="bar-fill" style="width:${v}%;background:${color}"></div></div></div>`;
    }).join('')}
    <div style="margin-top:1rem;display:flex;gap:0.75rem">
      <span class="tag ${{low:'tag-green',medium:'tag-amber',high:'tag-red',critical:'tag-red',excellent:'tag-cyan'}[s.risk]}">${{low:'🟢 Low Risk',medium:'🟡 Medium Risk',high:'🔴 High Risk',critical:'🚨 Critical',excellent:'⭐ Excellent'}[s.risk]}</span>
      <span class="tag tag-cyan">Sem ${s.sem}</span>
      <span class="tag tag-purple">${s.dept}</span>
    </div>
  `;
  openModal('viewStudentModal');
}

function editStudent(i) {
  const s = students[i];
  document.getElementById('edit_idx').value = i;
  document.getElementById('edit_name').value = s.name;
  document.getElementById('edit_dept').value = s.dept;
  document.getElementById('edit_sem').value = s.sem;
  document.getElementById('edit_risk').value = s.risk;
  openModal('editStudentModal');
}

function saveEditStudent() {
  const i = parseInt(document.getElementById('edit_idx').value);
  students[i].name = document.getElementById('edit_name').value;
  students[i].dept = document.getElementById('edit_dept').value;
  students[i].sem = parseInt(document.getElementById('edit_sem').value);
  students[i].risk = document.getElementById('edit_risk').value;
  closeModal('editStudentModal');
  renderStudentTable(); renderMarksTable(); renderRiskAlerts();
  showToast('Student updated successfully!', 'success');
}

function deleteStudent(i) {
  if (!confirm(`Delete ${students[i].name}? This cannot be undone.`)) return;
  students.splice(i, 1);
  renderStudentTable(); renderMarksTable(); renderRiskAlerts(); updateKPIs();
  showToast('Student removed', 'info');
}

// ============================================================
// ADD STUDENT
// ============================================================
function addStudent() {
  const name = document.getElementById('ns_name').value.trim();
  const id = document.getElementById('ns_id').value.trim();
  if (!name || !id) { showToast('Name and ID are required', 'error'); return; }
  const math = parseInt(document.getElementById('ns_math').value)||70;
  const physics = parseInt(document.getElementById('ns_physics').value)||70;
  const cs = parseInt(document.getElementById('ns_cs').value)||70;
  const chem = parseInt(document.getElementById('ns_chem').value)||70;
  const eng = parseInt(document.getElementById('ns_eng').value)||70;
  const avg = (math+physics+cs+chem+eng)/5;
  const risk = avg>=80?'low':avg>=65?'medium':avg>=50?'high':'critical';
  students.push({
    id, name,
    dept: document.getElementById('ns_dept').value,
    sem: parseInt(document.getElementById('ns_sem').value),
    math, physics, cs, chem, eng, risk
  });
  closeModal('addStudentModal');
  // Reset
  ['ns_name','ns_id','ns_math','ns_physics','ns_cs','ns_chem','ns_eng'].forEach(id => document.getElementById(id).value='');
  renderStudentTable(); renderMarksTable(); renderRiskAlerts(); updateKPIs();
  showToast(`${name} added successfully!`, 'success');
}

// ============================================================
// MARKS TABLE
// ============================================================
function renderMarksTable(filter='') {
  const tbody = document.getElementById('marksTbody');
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(filter.toLowerCase()) ||
    s.id.toLowerCase().includes(filter.toLowerCase())
  );
  tbody.innerHTML = filtered.map((s) => {
    const ri = students.indexOf(s);
    const avg = ((s.math+s.physics+s.cs+s.chem+s.eng)/5).toFixed(1);
    const riskColor = {low:'var(--green)',medium:'var(--amber)',high:'var(--red)',critical:'var(--red)',excellent:'var(--cyan)'}[s.risk];
    return `<tr id="markrow-${ri}">
      <td style="font-weight:500">${s.name}<br><span style="font-size:0.75rem;color:var(--text3)">${s.id}</span></td>
      <td><input class="editable-input" value="${s.math}" onchange="updateMark(${ri},'math',this.value)"></td>
      <td><input class="editable-input" value="${s.physics}" onchange="updateMark(${ri},'physics',this.value)"></td>
      <td><input class="editable-input" value="${s.cs}" onchange="updateMark(${ri},'cs',this.value)"></td>
      <td><input class="editable-input" value="${s.chem}" onchange="updateMark(${ri},'chem',this.value)"></td>
      <td><input class="editable-input" value="${s.eng}" onchange="updateMark(${ri},'eng',this.value)"></td>
      <td id="avg-${ri}" style="font-family:'JetBrains Mono',monospace;font-weight:600;color:var(--cyan)">${avg}</td>
      <td id="risk-${ri}" style="color:${riskColor};font-weight:600">${s.risk.toUpperCase()}</td>
      <td><button class="btn btn-green btn-xs" onclick="saveMarks(${ri})">Save</button></td>
    </tr>`;
  }).join('');
}

function filterMarks() { renderMarksTable(document.getElementById('marksSearch').value); }

function updateMark(i, field, val) {
  students[i][field] = Math.max(0, Math.min(100, parseInt(val)||0));
  const avg = (students[i].math+students[i].physics+students[i].cs+students[i].chem+students[i].eng)/5;
  students[i].risk = avg>=80?'low':avg>=65?'medium':avg>=50?'high':'critical';
  const avgEl = document.getElementById('avg-'+i);
  const riskEl = document.getElementById('risk-'+i);
  if (avgEl) avgEl.textContent = avg.toFixed(1);
  if (riskEl) {
    riskEl.textContent = students[i].risk.toUpperCase();
    riskEl.style.color = {low:'var(--green)',medium:'var(--amber)',high:'var(--red)',critical:'var(--red)'}[students[i].risk];
  }
}

function saveMarks(i) {
  showToast(`${students[i].name}'s marks saved!`, 'success');
  renderRiskAlerts(); updateKPIs();
}

// ============================================================
// RISK ALERTS
// ============================================================
function renderRiskAlerts() {
  const list = document.getElementById('riskAlertList');
  const atRisk = students.filter(s => s.risk==='high'||s.risk==='critical').sort((a,b)=>{
    const order = {critical:0,high:1};
    return order[a.risk]-order[b.risk];
  });
  list.innerHTML = atRisk.map((s,i) => {
    const ri = students.indexOf(s);
    const avg = ((s.math+s.physics+s.cs+s.chem+s.eng)/5).toFixed(1);
    const isCrit = s.risk==='critical';
    return `<div class="alert-card ${isCrit?'':'medium'}">
      <div class="alert-info">
        <div class="alert-name">${isCrit?'🚨':'⚠️'} ${s.name} <span style="font-size:0.78rem;color:var(--text3)">(${s.id})</span></div>
        <div class="alert-detail">${s.dept} • Sem ${s.sem} • Avg Score: ${avg}% • ${s.risk.toUpperCase()} RISK</div>
        <div class="alert-detail" style="margin-top:0.3rem">Low: Math ${s.math} • Physics ${s.physics} • Chem ${s.chem}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:0.5rem">
        <button class="btn btn-sm" style="background:rgba(255,184,0,0.1);color:var(--amber);border:1px solid rgba(255,184,0,0.3)" onclick="showToast('Intervention email sent to ${s.name}','success')">📧 Alert</button>
        <button class="btn btn-sm btn-outline" onclick="editStudent(${ri})">✏️ Edit</button>
      </div>
    </div>`;
  }).join('') || '<div style="color:var(--text3);text-align:center;padding:2rem">🎉 No high-risk students at this time!</div>';
}

// ============================================================
// KPIs
// ============================================================
function updateKPIs() {
  const high = students.filter(s=>s.risk==='high'||s.risk==='critical').length;
  const med = students.filter(s=>s.risk==='medium').length;
  const good = students.filter(s=>s.risk==='low'||s.risk==='excellent').length;
  document.getElementById('totalStudents').textContent = students.length;
  document.getElementById('highRiskCount').textContent = high;
  document.getElementById('medRiskCount').textContent = med;
  document.getElementById('goodCount').textContent = good;
}

// ============================================================
// PYQ
// ============================================================
function renderPYQ(cat='all') {
  const grid = document.getElementById('pyqGrid');
  const filtered = cat==='all' ? pyqData : pyqData.filter(p=>p.category===cat);
  grid.innerHTML = filtered.map(p => {
    const diffColor = {Easy:'var(--green)',Medium:'var(--amber)',Hard:'var(--red)'}[p.difficulty];
    const icons = {math:'📐',physics:'⚡',cs:'💻',chem:'🧪'};
    return `<div class="pyq-card" onclick="showToast('Opening ${p.subject} ${p.year} paper...','info')">
      <div class="pyq-icon">${icons[p.category]||'📝'}</div>
      <div class="pyq-year">${p.year}</div>
      <div class="pyq-subject">${p.subject}</div>
      <div class="pyq-meta" style="margin:0.25rem 0">${p.type} • ${p.questions} Questions</div>
      <div style="display:flex;gap:0.5rem;margin-top:0.5rem">
        <span class="tag" style="background:rgba(255,184,0,0.1);color:${diffColor};border:1px solid ${diffColor}40">${p.difficulty}</span>
        <span class="tag tag-cyan">PDF</span>
      </div>
    </div>`;
  }).join('');
}

function filterPYQ(cat, el) {
  document.querySelectorAll('#stab-pyq .tab-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  renderPYQ(cat);
}

// ============================================================
// MATERIALS
// ============================================================
function renderMaterials(cat='all') {
  const list = document.getElementById('materialList');
  const filtered = cat==='all' ? materialsData : materialsData.filter(m=>m.category===cat);
  list.innerHTML = filtered.map(m => {
    const typeColor = {notes:'var(--cyan)',video:'var(--purple)',practice:'var(--amber)',formula:'var(--green)'}[m.category];
    return `<div class="material-item" onclick="showToast('Downloading: ${m.title}','success')">
      <div class="material-icon">${m.icon}</div>
      <div class="material-info">
        <div class="material-title">${m.title}</div>
        <div class="material-meta">Size: ${m.size} • Updated: ${m.updated}</div>
      </div>
      <span class="tag" style="background:${typeColor}20;color:${typeColor};border:1px solid ${typeColor}40">${m.type}</span>
      <div class="material-action">↓ Download</div>
    </div>`;
  }).join('');
}

function filterMat(cat, el) {
  document.querySelectorAll('#stab-materials .tab-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  renderMaterials(cat);
}

// ============================================================
// BADGES
// ============================================================
function renderBadges() {
  document.getElementById('badgeGrid').innerHTML = badges.map(b =>
    `<div class="badge ${b.locked?'locked':''}"><div class="badge-icon">${b.icon}</div><div class="badge-name">${b.name}</div>${b.locked?'<div style="font-size:0.65rem;color:var(--text3)">🔒 Locked</div>':''}</div>`
  ).join('');
}

// ============================================================
// EVENTS & PLACEMENTS
// ============================================================
function renderEvents() {
  const list = document.getElementById('studentEventsList');
  if (!list) return;
  list.innerHTML = events.map(e => `
    <div style="background:var(--bg3);border-left:3px solid var(--cyan);padding:1rem;border-radius:8px;">
      <div style="font-weight:600;color:var(--cyan);margin-bottom:0.25rem;">${e.title}</div>
      <div style="font-size:0.85rem;color:var(--text2);margin-bottom:0.25rem;">📍 ${e.location} • 🕒 ${e.datetime}</div>
      <span class="tag ${e.type==='Technical'?'tag-green':''}" style="font-size:0.7rem;">${e.type}</span>
      <p style="font-size:0.8rem;color:var(--text3);margin-top:0.5rem;">${e.desc}</p>
    </div>
  `).join('');
}

function renderPlacementPanel() {
  const panel = document.getElementById('studentPlacementPanel');
  if (!panel) return;
  panel.innerHTML = `
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
        <div>
          <div style="font-weight:600;color:var(--text);margin-bottom:0.25rem;">Placement Rate</div>
          <div style="font-size:0.8rem;color:var(--text3);">Past 2 years</div>
        </div>
        <div style="font-family:'Rajdhani',sans-serif;font-size:1.8rem;font-weight:700;color:var(--green);">${placementStats.rate}%</div>
      </div>
      <div style="background:var(--bg3);height:10px;border-radius:5px;overflow:hidden;margin-bottom:0.5rem;">
        <div style="background:linear-gradient(90deg,var(--green),var(--cyan));height:100%;width:${placementStats.rate}%;border-radius:5px;"></div>
      </div>
    </div>
    <div style="border-top:1px solid var(--border);padding-top:1rem;">
      <div style="font-weight:600;margin-bottom:0.75rem;">🏢 Top Companies</div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0.75rem;">
        ${placementStats.topCompanies.map(c => `<div style="background:var(--bg3);padding:0.75rem;border-radius:6px;border-left:2px solid var(--cyan);"><div style="font-weight:600;font-size:0.9rem;color:var(--cyan);">${c}</div><div style="font-size:0.75rem;color:var(--text3);">Avg CTC</div></div>`).join('')}
      </div>
    </div>
    <div style="border-top:1px solid var(--border);padding-top:1rem;background:linear-gradient(135deg,rgba(0,255,136,0.05),rgba(0,212,255,0.05));padding:1rem;border-radius:8px;">
      <div style="font-weight:600;margin-bottom:0.5rem;">💰 Avg CTC: ₹${placementStats.avgCTC} LPA</div>
      <div style="font-size:0.8rem;color:var(--text3);">Highest: ₹${placementStats.highest} LPA | Lowest: ₹${placementStats.lowest} LPA</div>
    </div>
  `;
}

function renderPlacementRecords() {
  const container = document.getElementById('studentPlacementRecords');
  if (!container) return;
  if (!placementRecords.length) {
    container.innerHTML = '<div style="color:var(--text3);padding:1rem;background:var(--bg3);border-radius:10px;">No placement records yet. Faculty will add placement success stories here.</div>';
    return;
  }
  container.innerHTML = placementRecords.map(r => `
    <div style="background:var(--bg3);border-left:3px solid var(--green);padding:1rem;border-radius:8px;">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;">
        <div style="font-weight:700;color:var(--green);">${r.student} placed at ${r.company}</div>
        <div style="font-size:0.85rem;color:var(--text2);">${r.year} • ${r.location}</div>
      </div>
      <div style="margin-top:0.5rem;font-size:0.95rem;color:var(--text3);">Role: ${r.role} • Package: ₹${r.package} LPA</div>
      <div style="margin-top:0.5rem;font-size:0.85rem;color:var(--text2);">${r.notes}</div>
    </div>
  `).join('');
}

function openAddPlacementModal() {
  document.getElementById('pl_student').value = '';
  document.getElementById('pl_company').value = '';
  document.getElementById('pl_package').value = '';
  document.getElementById('pl_role').value = '';
  document.getElementById('pl_year').value = new Date().getFullYear();
  document.getElementById('pl_location').value = '';
  document.getElementById('pl_notes').value = '';
  openModal('addPlacementModal');
}

function savePlacementRecord() {
  const student = document.getElementById('pl_student').value.trim();
  const company = document.getElementById('pl_company').value.trim();
  const pkg = parseFloat(document.getElementById('pl_package').value) || 0;
  const role = document.getElementById('pl_role').value.trim();
  const year = parseInt(document.getElementById('pl_year').value) || new Date().getFullYear();
  const location = document.getElementById('pl_location').value.trim();
  const notes = document.getElementById('pl_notes').value.trim();
  if (!student || !company || !pkg || !role) {
    showToast('Student name, company, role and package are required', 'error');
    return;
  }
  placementRecords.unshift({ student, company, package: pkg, role, year, location: location || 'Campus', notes });
  renderPlacementRecords();
  renderFacultyPlacementList();
  closeModal('addPlacementModal');
  showToast('Placement record added successfully', 'success');
}

function renderFacultyPlacementList() {
  const container = document.getElementById('facultyPlacementList');
  if (!container) return;
  if (!placementRecords.length) {
    container.innerHTML = '<div style="color:var(--text3);padding:1rem;background:var(--bg3);border-radius:10px;">No placement records yet.</div>';
    return;
  }
  container.innerHTML = placementRecords.map(r => `
    <div style="background:var(--bg3);border-left:3px solid var(--green);padding:1rem;border-radius:8px;display:flex;flex-direction:column;gap:0.25rem;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;"><span style="font-weight:600;color:var(--green);">${r.student}</span><span style="font-size:0.85rem;color:var(--text2);">${r.year}</span></div>
      <div style="font-size:0.95rem;color:var(--text3);">${r.company} — ₹${r.package} LPA • ${r.role}</div>
      <div style="font-size:0.85rem;color:var(--text2);">${r.location} ${r.notes ? '• ' + r.notes : ''}</div>
    </div>
  `).join('');
}

function openAddEventModal() {
  document.getElementById('ev_title').value = '';
  document.getElementById('ev_datetime').value = '';
  document.getElementById('ev_location').value = '';
  document.getElementById('ev_type').value = 'Technical';
  document.getElementById('ev_desc').value = '';
  openModal('addEventModal');
}

function saveEventFromModal() {
  const title = document.getElementById('ev_title').value.trim();
  const datetime = document.getElementById('ev_datetime').value.trim();
  const location = document.getElementById('ev_location').value.trim();
  const type = document.getElementById('ev_type').value;
  const desc = document.getElementById('ev_desc').value.trim();
  if (!title || !datetime || !location) {
    showToast('Title, date/time, and location are required', 'error');
    return;
  }
  const ev = { title, location, datetime, type, desc };
  events.unshift(ev); // add newest first
  renderEvents();
  renderFacultyEvents();
  closeModal('addEventModal');
  showToast('Event added and visible to students', 'success');
}

// Save updated placement stats from modal (faculty)
function savePlacementStats() {
  const rate = parseInt(document.getElementById('pl_rate').value) || placementStats.rate;
  const avg = parseFloat(document.getElementById('pl_avg').value) || placementStats.avgCTC;
  const high = parseFloat(document.getElementById('pl_high').value) || placementStats.highest;
  const low = parseFloat(document.getElementById('pl_low').value) || placementStats.lowest;
  const comps = document.getElementById('pl_companies').value.split(',').map(s=>s.trim()).filter(Boolean);
  placementStats.rate = Math.max(0, Math.min(100, rate));
  placementStats.avgCTC = avg;
  placementStats.highest = high;
  placementStats.lowest = low;
  if (comps.length) placementStats.topCompanies = comps;
  renderPlacementPanel();
  renderFacultyEvents();
  closeModal('placementEditModal');
  showToast('Placement summary updated','success');
}

// Pre-fill placement modal when opened
document.getElementById('placementEditModal')?.addEventListener('click', e => { /* noop to keep modal open on inner clicks */ });

function openPlacementModalPrefill() {
  document.getElementById('pl_rate').value = placementStats.rate;
  document.getElementById('pl_avg').value = placementStats.avgCTC;
  document.getElementById('pl_high').value = placementStats.highest;
  document.getElementById('pl_low').value = placementStats.lowest;
  document.getElementById('pl_companies').value = placementStats.topCompanies.join(',');
  openModal('placementEditModal');
}

// Generate placement advice for students (basic heuristics + AI-like tips)
function generatePlacementAdvice() {
  try {
    // Build context from placementStats and upcoming events
    const topEvents = events.slice(0,4).map(e => `• ${e.title} (${e.type}) — ${e.datetime} at ${e.location}`).join('\n');
    const tips = [];
    tips.push(`Current placement rate is ${placementStats.rate}%. Avg CTC ₹${placementStats.avgCTC} LPA.`);
    tips.push('Attend relevant technical events and workshops to build domain knowledge and network with recruiters.');
    tips.push('Prepare a concise project/demo and a 30–60 second elevator pitch highlighting your impact.');
    tips.push('Practice coding interviews, system design basics, and behavioural questions (STAR method).');
    tips.push('Polish your resume: one page, quantifiable achievements, clear role contributions.');
    tips.push('Use placement drives to connect with alumni and request mock interviews from faculty.');
    tips.push('Top upcoming events:\n' + (topEvents || 'No upcoming events listed.'));
    tips.push('\nTop target companies: ' + (placementStats.topCompanies || []).join(', '));
    const advice = tips.join('\n\n');
    const adviceBody = document.getElementById('placementAdviceBody');
    if (!adviceBody) {
      showToast('Unable to open AI Master advice. UI element not found.', 'error');
      return;
    }
    adviceBody.innerHTML = advice.replace(/\n/g,'<br>');
    openModal('placementAdviceModal');
  } catch (error) {
    console.error('generatePlacementAdvice error:', error);
    showToast('Something went wrong while opening AI Master advice.', 'error');
  }
}

function openStudentAIChat() {
  showStudentTab('ai-teacher');
  setTimeout(() => {
    const input = document.getElementById('chatInput');
    if (input) input.focus();
  }, 100);
}

function renderFacultyEvents() {
  const container = document.getElementById('facultyEventsList');
  if (!container) return;
  container.innerHTML = events.map(e => {
    const color = e.type==='Technical' ? 'var(--cyan)' : 'var(--amber)';
    return `
      <div style="background:var(--bg3);padding:0.75rem;border-radius:8px;border-left:3px solid ${color};display:flex;flex-direction:column;">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:0.25rem;font-weight:600;color:${color};">${e.title}<span class="tag" style="font-size:0.7rem;">${e.type}</span></div>
        <div style="font-size:0.85rem;color:var(--text2);">${e.datetime} • ${e.location}</div>
        <div style="font-size:0.8rem;color:var(--text3);margin-top:0.5rem;">${e.desc}</div>
      </div>
    `;
  }).join('');

  // Update faculty placement summary
  const rateEl = document.getElementById('facultyPlacementRate');
  const avgEl = document.getElementById('facultyPlacementAvg');
  const topEl = document.getElementById('facultyTopRecruiters');
  if (rateEl) rateEl.textContent = placementStats.rate + '%';
  if (avgEl) avgEl.textContent = '₹' + placementStats.avgCTC + ' LPA';
  if (topEl) topEl.textContent = placementStats.topCompanies.join(', ');
}

// ============================================================
// AI TEACHER CHAT
// ============================================================
function getAIResponse(msg) {
  const m = msg.toLowerCase();
  if (m.includes('newton')) return aiResponses.newton;
  if (m.includes('gradient') || m.includes('descent')) return aiResponses.gradient;
  if (m.includes('quadratic')) return aiResponses.quadratic;
  if (m.includes('recursion') || m.includes('recursive')) return aiResponses.recursion;
  return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  appendMsg(msg, 'user');
  // Show typing
  const typing = document.createElement('div');
  typing.className = 'msg msg-ai';
  typing.innerHTML = '<div class="typing-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
  typing.id = 'typing';
  document.getElementById('chatMessages').appendChild(typing);
  scrollChat();
  // Simulate API call via Claude
  callClaudeAI(msg);
}

async function callClaudeAI(userMsg) {
  const typing = document.getElementById('typing');
  if (!window.CLAUDE_API_KEY) {
    if (typing) typing.remove();
    appendMsg(getAIResponse(userMsg), 'ai');
    return;
  }
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Api-Key": window.CLAUDE_API_KEY },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: "You are Prof. AI, an expert academic tutor for college students. Help with subject doubts in Mathematics, Physics, Computer Science, Chemistry, and English. Give clear, structured explanations with examples. Use emojis and formatting to make explanations engaging. Be encouraging and helpful. Keep responses concise (under 300 words).",
        messages: [{ role: "user", content: userMsg }]
      })
    });
    const data = await response.json();
    if (typing) typing.remove();
    const text = data.content?.[0]?.text || getAIResponse(userMsg);
    appendMsg(text, 'ai');
  } catch(e) {
    if (typing) typing.remove();
    appendMsg(getAIResponse(userMsg), 'ai');
  }
}

function appendMsg(text, type) {
  const div = document.createElement('div');
  div.className = `msg msg-${type}`;
  const time = new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
  div.innerHTML = `<div>${text.replace(/\n/g,'<br>')}</div><div class="msg-time">${time}</div>`;
  document.getElementById('chatMessages').appendChild(div);
  scrollChat();
}

function scrollChat() {
  const c = document.getElementById('chatMessages');
  if (c) c.scrollTop = c.scrollHeight;
}

function sendSuggestion(text) {
  document.getElementById('chatInput').value = text;
  sendChat();
}

function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); }
}

// ============================================================
// ADMIN LOG
// ============================================================
function renderAdminLog() {
  const logs = [
    {time:'10:42',msg:'Model v4.2 trained successfully',type:'success'},
    {time:'10:30',msg:'Dataset uploaded: sem5_data.csv',type:'info'},
    {time:'09:55',msg:'Alert sent for 3 at-risk students',type:'warn'},
    {time:'09:22',msg:'Faculty Dr. Nair logged in',type:'info'},
    {time:'08:41',msg:'System backup completed',type:'success'},
    {time:'08:00',msg:'Daily risk scan completed',type:'info'},
    {time:'07:30',msg:'48 institutions synced',type:'success'},
  ];
  document.getElementById('adminLog').innerHTML = logs.map(l => {
    const color = {success:'var(--green)',info:'var(--cyan)',warn:'var(--amber)'}[l.type];
    return `<div style="padding:6px 0;border-bottom:1px solid var(--border);display:flex;gap:0.75rem;"><span style="color:var(--text3)">[${l.time}]</span><span style="color:${color}">${l.msg}</span></div>`;
  }).join('');
}

// ============================================================
// MODALS
// ============================================================
function openModal(id) {
  const el = document.getElementById(id);
  if (!el) {
    console.error(`openModal: element not found: ${id}`);
    return;
  }
  el.classList.add('open');
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) {
    console.error(`closeModal: element not found: ${id}`);
    return;
  }
  el.classList.remove('open');
}
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});

// ============================================================
// TOAST
// ============================================================
function showToast(msg, type='info') {
  const icons = {success:'✓',error:'✕',info:'ℹ'};
  const colors = {success:'var(--green)',error:'var(--red)',info:'var(--cyan)'};
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span style="color:${colors[type]};font-weight:700;font-size:1rem">${icons[type]}</span><span>${msg}</span>`;
  document.getElementById('toastContainer').appendChild(t);
  setTimeout(() => { t.style.animation='slideOut 0.3s ease forwards'; setTimeout(()=>t.remove(),300); }, 3000);
}

// ============================================================
// EDIT MODE
// ============================================================
function toggleEditMode() {
  isEditing = !isEditing;
  const btn = document.getElementById('editModeBtn');
  if (isEditing) {
    document.body.classList.add('edit-mode');
    btn.textContent = '✅ Done Editing';
    btn.classList.add('editing');
    document.querySelectorAll('[data-edit]').forEach(el => {
      el.contentEditable = true;
      el.addEventListener('blur', () => showToast('Content saved','success'));
    });
    showToast('Edit mode ON — click any text to edit','info');
  } else {
    document.body.classList.remove('edit-mode');
    btn.textContent = '✏️ Edit Content';
    btn.classList.remove('editing');
    document.querySelectorAll('[data-edit]').forEach(el => { el.contentEditable = false; });
    showToast('Edit mode OFF — changes saved','success');
  }
}

// ============================================================
// THEME
// ============================================================
function toggleTheme() {
  document.body.classList.toggle('light');
  document.getElementById('themeToggle').textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
}

// ============================================================
// PARTICLES
// ============================================================
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });
  const pts = Array.from({length:80}, () => ({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-.5)*0.4, vy: (Math.random()-.5)*0.4,
    r: Math.random()*1.5+0.5
  }));
  function draw() {
    ctx.clearRect(0,0,W,H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x<0) p.x=W; if (p.x>W) p.x=0;
      if (p.y<0) p.y=H; if (p.y>H) p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = 'rgba(0,212,255,0.6)'; ctx.fill();
    });
    for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++) {
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
      const d=Math.sqrt(dx*dx+dy*dy);
      if (d<120) {
        ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
        ctx.strokeStyle = `rgba(0,212,255,${0.15*(1-d/120)})`; ctx.lineWidth=0.5; ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ============================================================
// NAV LINK ACTIVE
// ============================================================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});