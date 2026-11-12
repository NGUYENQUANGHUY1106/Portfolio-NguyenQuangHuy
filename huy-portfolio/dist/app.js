const icons = {
  box: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="M3 8v9l9 5 9-5V8M12 13v9M7 5.8l9 5"/>',
  bag: '<path d="M5 7h14l2 14H3L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2M9 12h.01M15 12h.01"/>',
  cart: '<path d="M2 3h3l3 12h11l3-9H6M8 18h11"/><circle cx="9" cy="21" r="1"/><circle cx="18" cy="21" r="1"/>',
  chat: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2V11.5A8.5 8.5 0 0 1 10.5 3h2a8.5 8.5 0 0 1 8.5 8.5Z"/><path d="M7 10h10M7 14h6"/>'
};

// shortcut: Ảnh dự án chưa được cung cấp; thay phần bìa đồ họa khi có ảnh chụp thật.
const projects = [
  {
    name: 'StorePro', subtitle: 'Hệ thống quản lý kho', type: 'Dự án cá nhân', status: 'Đang phát triển', icon: 'box', color: '#326b86', glow: '#136a7430',
    description: 'Quản lý sản phẩm, nhập xuất và tồn kho. Từ thiết kế dữ liệu đến API và phân quyền theo gian hàng.',
    tags: ['Python', 'Django REST Framework', 'PostgreSQL', 'Figma'],
    github: 'https://github.com/NGUYENQUANGHUY1106/Warehouse-Management',
    problem: 'Quản lý tập trung sản phẩm, nhập/xuất kho, tồn kho, đơn hàng và hoạt động vận hành.',
    role: 'Tự phân tích yêu cầu, thiết kế Figma, lập trình frontend và backend.',
    solution: 'Xây dựng backend Django REST Framework và dữ liệu PostgreSQL; xác thực, RBAC, giới hạn dữ liệu theo gian hàng và quản lý sản phẩm. Các module nhập/xuất kho, tồn kho, đơn hàng và báo cáo đã có backend, đang tiếp tục kết nối giao diện.',
    result: 'Đang phát triển, chưa công bố triển khai production. Theo README hiện tại, một số giao diện và biểu đồ còn dùng dữ liệu mẫu. ReactJS và Tailwind CSS nằm trong định hướng frontend của bản mô tả dự án.',
    source: 'Trạng thái được đối chiếu với README của repository ngày 12/11/2026.'
  },
  {
    name: 'QuangHuy Store', subtitle: 'Website thương mại điện tử thể thao', type: 'Dự án cá nhân', status: 'Fullstack Web', icon: 'bag', color: '#527f96', glow: '#6650a52e',
    description: 'Trải nghiệm mua sắm đồ thể thao, từ tìm kiếm sản phẩm và giỏ hàng đến xử lý đơn và quản trị.',
    tags: ['Python', 'Django', 'PostgreSQL', 'JavaScript'],
    github: 'https://github.com/NGUYENQUANGHUY1106/QuangHuy_Store-',
    problem: 'Xây dựng website bán đồ thể thao có luồng mua sắm và vận hành quản trị.',
    role: 'Phân tích nghiệp vụ, thiết kế dữ liệu, xây dựng frontend và backend Django.',
    solution: 'Đăng ký/đăng nhập và RBAC; quản lý sản phẩm/SKU, tìm kiếm/lọc, yêu thích/đánh giá, giỏ hàng, thanh toán COD, đơn hàng và đổi trả. Kiểm soát tồn kho bằng Django ORM và Database Transaction.',
    result: 'Phát triển hệ thống thương mại điện tử từ giao diện mua sắm đến quản lý đơn hàng trong phạm vi dự án cá nhân. Chưa có số liệu người dùng thực tế được xác nhận.',
    source: 'Chức năng chính được đối chiếu với README; chưa kiểm thử vận hành repository.'
  },
  {
    name: 'Django E-Commerce', subtitle: 'Website bán hàng trực tuyến', type: 'Dự án cá nhân', status: 'Fullstack Web', icon: 'cart', color: '#327564', glow: '#116d5b2b',
    description: 'Thực hành xây dựng luồng mua sắm hoàn chỉnh, với Django ORM và các thao tác bất đồng bộ.',
    tags: ['Python', 'Django', 'MySQL', 'AJAX / Fetch'],
    github: 'https://github.com/NGUYENQUANGHUY1106/FULL-STACK/tree/master/DoAn',
    problem: 'Xây dựng trải nghiệm mua sắm trực tuyến với các chức năng thiết yếu.',
    role: 'Thiết kế cơ sở dữ liệu, model Django ORM và chức năng frontend/backend.',
    solution: 'Đăng nhập/đăng ký, CRUD sản phẩm, tìm kiếm/lọc, giỏ hàng, đặt hàng, tính tổng tiền và gửi email xác nhận. Sử dụng JavaScript, AJAX và Fetch API cho các thao tác không đồng bộ.',
    result: 'Theo nội dung hồ sơ, dự án hoàn thiện quy trình từ tìm kiếm sản phẩm đến đặt hàng trong phạm vi dự án cá nhân.',
    source: 'Thông tin theo hồ sơ cung cấp; chưa xác minh được mã nguồn thư mục DoAn qua trình duyệt.'
  },
  {
    name: 'Realtime Chat', subtitle: 'Ứng dụng trò chuyện Java', type: 'Dự án học tập', status: 'Lập trình mạng', icon: 'chat', color: '#886434', glow: '#8f612a28',
    description: 'Khám phá cách nhiều client kết nối và trao đổi tin nhắn thời gian thực qua TCP Socket.',
    tags: ['Java', 'TCP Socket', 'Swing'],
    github: 'https://github.com/NGUYENQUANGHUY1106/Chat_DACS4',
    problem: 'Cho phép trao đổi tin nhắn theo thời gian thực giữa nhiều client.',
    role: 'Thiết kế giao diện và xử lý truyền thông phía client/server.',
    solution: 'Xây dựng ứng dụng Java sử dụng TCP Socket và Java Swing; thực hành quản lý kết nối và trao đổi tin nhắn giữa client và server.',
    result: 'Ứng dụng thực hành lập trình mạng. Không công bố số lượng người dùng hoặc số liệu hiệu năng chưa được kiểm chứng.',
    source: 'Thông tin theo hồ sơ cung cấp; repository công khai, chưa kiểm thử ứng dụng Java.'
  }
];

const skills = [
  { name: 'Backend', subtitle: 'Logic & hệ thống', icon: '{ }', tags: ['Python', 'Django', 'Django REST Framework', 'Flask', 'RESTful API', 'Django ORM', 'JWT / RBAC'] },
  { name: 'Frontend', subtitle: 'Giao diện & trải nghiệm', icon: '&lt;/&gt;', tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'ReactJS · Hooks · Context', 'React Router', 'Tailwind CSS', 'Fetch / Axios', 'Redux Toolkit · cơ bản'] },
  { name: 'Database', subtitle: 'Tổ chức & truy vấn dữ liệu', icon: '▤', tags: ['MySQL', 'PostgreSQL', 'Thiết kế dữ liệu quan hệ', 'Chỉ mục & tối ưu truy vấn cơ bản'] },
  { name: 'Công cụ', subtitle: 'Quy trình làm việc', icon: '⌘', tags: ['Git', 'GitHub', 'Figma · UI / Wireframe / Prototype', 'Jira'] }
];
const chips = tags => tags.map(tag => `<span class="chip">${tag}</span>`).join('');
document.querySelector('#project-grid').innerHTML = projects.map((p, i) => `
  <article class="project-card reveal" style="--project-color:${p.color};--glow:${p.glow}">
    <button class="project-art" type="button" data-project="${i}" aria-label="Xem chi tiết ${p.name}">
      <span class="art-number">DỰ ÁN / 0${i + 1}</span><span class="art-decor"></span>
      <span class="art-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[p.icon]}</svg></span>
      <span class="art-name">${p.name}</span><span class="art-type">${p.subtitle}</span><span class="art-caption">Ảnh minh họa · Chờ ảnh thực tế</span>
    </button>
    <div class="project-info"><div class="project-meta"><span>${p.type}</span><span class="project-state ${i === 0 ? 'wip' : ''}">${p.status}</span></div>
      <h3>${p.name}</h3><p class="project-subtitle">${p.subtitle}</p><p class="project-description">${p.description}</p>
      <div class="chips">${chips(p.tags)}</div><div class="project-footer"><a href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a><button data-project="${i}" type="button" aria-label="Xem chi tiết ${p.name}">Xem chi tiết <span>→</span></button></div>
    </div>
  </article>`).join('');
document.querySelector('#skills').innerHTML = skills.map(s => `<div class="skill-row reveal"><div class="skill-name"><span aria-hidden="true">${s.icon}</span><div><h3>${s.name}</h3><small>${s.subtitle}</small></div></div><div class="chips">${chips(s.tags)}</div></div>`).join('');

const dialog = document.querySelector('#project-dialog');
let previousFocus;
document.querySelector('#project-grid').addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (!button) return;
  const p = projects[Number(button.dataset.project)];
  previousFocus = button;
  document.querySelector('#dialog-content').innerHTML = `<span class="mono">${p.type} / ${p.status}</span><h2 id="dialog-title">${p.name}</h2><p class="dialog-subtitle">${p.subtitle}</p><div class="chips">${chips(p.tags)}</div><h3>Bài toán</h3><p>${p.problem}</p><h3>Vai trò của tôi</h3><p>${p.role}</p><h3>Giải pháp & chức năng</h3><p>${p.solution}</p><h3>Kết quả & trạng thái</h3><p>${p.result}</p><p class="dialog-notice">${p.source}</p><a class="button primary" href="${p.github}" target="_blank" rel="noopener noreferrer">Xem mã nguồn trên GitHub <span>↗</span></a>`;
  dialog.showModal();
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => previousFocus?.focus({ preventScroll: true }));

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Mở menu');
  navigation.classList.remove('is-open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.nav-wrap')) closeMenu(); });

const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.remove('is-waiting');
      revealObserver.unobserve(entry.target);
    }
  }, { threshold: 0.08 });
  for (const element of reveals) {
    if (!motionPreference.matches) element.classList.add('is-waiting');
    revealObserver.observe(element);
  }
  const activeSections = new Set();
  const sectionObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) activeSections.add(entry.target.id);
      else activeSections.delete(entry.target.id);
    }
    const current = [...document.querySelectorAll('main section[id]')].find(section => activeSections.has(section.id));
    if (!current) return;
    for (const link of navigation.querySelectorAll('a')) {
      const active = link.hash === `#${current.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }, { rootMargin: '-15% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}

const pieces = [...document.querySelectorAll('.build-piece')];
const swarm = document.querySelector('#swarm');
const skipAnimation = document.querySelector('#skip-animation');
const replay = document.querySelector('#replay');
let animations = [];
let timers = [];
let building = false;
function finishBuild() {
  timers.forEach(clearTimeout);
  timers = [];
  animations.forEach(animation => animation.cancel());
  animations = [];
  pieces.forEach(piece => piece.classList.remove('is-building', 'is-built'));
  swarm.replaceChildren();
  skipAnimation.hidden = true;
  replay.disabled = false;
  building = false;
  if (document.activeElement === skipAnimation) replay.focus({ preventScroll: true });
}
function buildPage() {
  finishBuild();
  if (motionPreference.matches || typeof Element.prototype.animate !== 'function') return;
  building = true;
  replay.disabled = true;
  skipAnimation.hidden = false;
  pieces.forEach(piece => piece.classList.add('is-building'));
  const cursors = ['Giao diện', 'Nội dung', 'Hình ảnh'].map((name, i) => {
    const cursor = document.createElement('div');
    cursor.className = 'swarm-cursor';
    cursor.style.setProperty('--cursor-color', ['#38bdf8', '#a5a0ff', '#6ee7b7'][i]);
    cursor.innerHTML = `<svg viewBox="0 0 24 28"><path d="M2 1v23l6-6 5 9 4-2-5-9h9L2 1Z"/></svg><span>${name}</span>`;
    swarm.append(cursor);
    return cursor;
  });
  const positions = cursors.map((_, i) => ({ x: innerWidth * .5 + i * 35, y: innerHeight * .45 + i * 30 }));
  pieces.forEach((piece, i) => {
    const index = piece.classList.contains('portrait-scene') ? 2 : i % 2;
    timers.push(setTimeout(() => {
      const rect = piece.getBoundingClientRect();
      const x = Math.max(12, Math.min(innerWidth - 105, rect.left + Math.min(rect.width * .75, 180)));
      const y = Math.max(85, Math.min(innerHeight - 50, rect.top + rect.height * .6));
      const from = positions[index];
      const animation = cursors[index].animate([{ transform: `translate(${from.x}px,${from.y}px)` }, { transform: `translate(${x}px,${y}px)` }], { duration: 420, easing: 'cubic-bezier(.25,.75,.25,1)', fill: 'forwards' });
      animations.push(animation);
      positions[index] = { x, y };
      timers.push(setTimeout(() => { piece.classList.remove('is-building'); piece.classList.add('is-built'); }, 170));
    }, i * 160));
  });
  timers.push(setTimeout(finishBuild, pieces.length * 160 + 950));
}
skipAnimation.addEventListener('click', finishBuild);
replay.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
  // Chờ sự kiện cuộn về đầu trang kết thúc trước khi dựng lại.
  timers.push(setTimeout(buildPage, 100));
});
window.addEventListener('scroll', () => { if (building) finishBuild(); }, { passive: true });
window.addEventListener('resize', () => { if (building) finishBuild(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && building) finishBuild(); });
motionPreference.addEventListener('change', () => {
  if (motionPreference.matches) {
    finishBuild();
    reveals.forEach(element => element.classList.remove('is-waiting'));
  }
});
if (!motionPreference.matches && (!location.hash || location.hash === '#gioi-thieu')) buildPage();
