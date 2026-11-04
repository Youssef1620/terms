// ============================================
// FIKRA Terms Badge – Public page
// Loads terms from Firestore (no login needed)
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyBCqfxuilglqJeZtqroK_VBGR8MHmRogCE",
  authDomain: "center-management-eef29.firebaseapp.com",
  projectId: "center-management-eef29",
  storageBucket: "center-management-eef29.firebasestorage.app",
  messagingSenderId: "888174413602",
  appId: "1:888174413602:web:cda66895a70e1a2b29477b",
  measurementId: "G-NJVZZJW3MC"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ---------- Fallback content (used if Firestore is empty / offline) ----------
const FALLBACK = {
  pageTitle_ar: "بنود وأساسيات العمل مع تيم فكرة",
  pageTitle_en: "Terms & Basics of Working with Fikra Team",
  pageSub_ar: "الشروط والأحكام الأساسية للتعاون معنا",
  pageSub_en: "Core terms and conditions for collaborating with us",
  footer_ar: "FIKRA Creative Digital Studio · جميع الحقوق محفوظة",
  footer_en: "FIKRA Creative Digital Studio · All rights reserved",
  terms: [
    {
      title_ar: "التواصل والدعم أثناء العمل",
      title_en: "Communication & Support During Work",
      body_ar: `بتشتغل مباشرة مع <strong>الليدر</strong>، بيتواصل معاك، بيظبط معاك الحاجة، بيعدلها، ويقولك على كل تفصيلة. بيفضل متواصل معاك على مدار فترة الشغل كلها.
          في الخلفية، باقي التيم بيشتغل على التعديلات. هتشوف الحاجة وهي بتتعدل قدامك.
          <br><br>
          التواصل يتم عن طريق <span class="highlight">Discord</span> أو <span class="highlight">WhatsApp</span> — حسب اللي تحبه.`,
      body_en: `You work directly with the <strong>leader</strong>. He communicates with you, adjusts everything, makes edits, and keeps you informed on every detail. He stays in touch throughout the entire project period.
          In the background, the rest of the team works on the modifications. You get to see the work being updated live.
          <br><br>
          Communication happens via <span class="highlight">Discord</span> or <span class="highlight">WhatsApp</span> — whichever you prefer.`
    },
    {
      title_ar: "ضمان السنة والصيانة",
      title_en: "One-Year Warranty & Maintenance",
      body_ar: `بعد التسليم، معاك <strong>سنة كاملة</strong> أي صيانة أو تعديل (إضافة أو حذف) بيكون <span class="highlight">بنص السعر</span>.
          بعد انتهاء السنة، بترجع الأسعار للسعر الكامل من أول وجديد.
          <br><br>
          لو عملت معانا أكتر من <strong>٣–٤ تعديلات</strong> خلال السنة، بنمدد معاك <span class="highlight">سنة زيادة</span> بنفس الخصومات.`,
      body_en: `After delivery, you get a full <strong>one year</strong> of any maintenance or modifications (additions or removals) at <span class="highlight">half price</span>.
          After the year ends, prices return to the full rate.
          <br><br>
          If you request more than <strong>3–4 modifications</strong> during the year, we extend your discount period by an <span class="highlight">extra year</span>.`
    },
    {
      title_ar: "إحالة صديق — خصم ٥٠٪",
      title_en: "Refer a Friend — 50% Off",
      body_ar: `لو جبت حد من زمايلك أو معارفك يشتغل معانا، <strong>أنت والشخص اللي جبته</strong> بتاخدوا <span class="highlight">خصم ٥٠٪</span> على أول مشروع.
          <br><br>
          الخصم ده بيتراكم مع الخصومات التانية، فممكن يوصل لـ <span class="highlight">حوالي ٧٥٪ إجمالي</span>.
          الخصم ده ساري خلال فترة السنة فقط. حتى لو جبت أكتر من شخص، الخصم الأقصى بيفضل ٧٥٪.`,
      body_en: `If you bring a friend or acquaintance to work with us, <strong>both you and the person you referred</strong> get a <span class="highlight">50% discount</span> on the first project.
          <br><br>
          This stacks with other discounts and can reach approximately <span class="highlight">75% total</span>.
          The referral discount is valid only during the one-year period. Even with multiple referrals, the maximum discount remains 75%.`
    },
    {
      title_ar: "الاستلام النهائي والمسؤولية",
      title_en: "Final Acceptance & Responsibility",
      body_ar: `بمجرد ما تستلم الشغل وتوافق عليه، <strong>مفيش رجوع</strong> — الشغل بقى بتاعك.
          هتفضل معانا طول فترة الدعم، وهتشوف التطورات بنفسك.
          <br><br>
          المواقع المتوسطة عادةً بتخلص في <span class="highlight">يوم أو يومين</span>، والمشاريع الكبيرة أقصى حاجة <span class="highlight">أسبوع ونص</span> حسب ضغط الشغل. بتاخد رقم دور وهنقولك فاضل كام.
          <br><br>
          <strong>مهم:</strong> إحنا مش مسؤولين عن أي تعديلات بتعملها أنت بنفسك بعد ما نفتح لك صلاحيات الأدمن. أي مشكلة تحصل بعد كده هتحتاج تدفع عشان نصلحها (وبتطبق عليها خصم الـ ٥٠٪ طالما لسه جوه السنة).`,
      body_en: `Once you receive and accept the work, <strong>there is no return</strong> — the work is yours.
          You stay with us throughout the support period and can see the progress yourself.
          <br><br>
          Medium websites usually take <span class="highlight">1–2 days</span>. Large projects take up to <span class="highlight">1.5 weeks</span> depending on workload. You receive a queue number and we keep you updated.
          <br><br>
          <strong>Important:</strong> We are not responsible for any changes you make yourself after we grant you admin access. Any issues that occur afterward will require paid fixes (still at 50% discount if within the one-year period).`
    }
  ]
};

let currentLang = localStorage.getItem('fikra_terms_lang') || 'ar';
let liveData = null; // from Firestore

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('fikra_terms_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  render();
}

function getData() {
  return liveData || FALLBACK;
}

function render() {
  const data = getData();
  const isAr = currentLang === 'ar';

  document.getElementById('main-title').textContent = isAr ? data.pageTitle_ar : data.pageTitle_en;
  document.getElementById('main-sub').textContent = isAr ? data.pageSub_ar : data.pageSub_en;
  document.getElementById('footer').textContent = isAr ? data.footer_ar : data.footer_en;

  const list = document.getElementById('terms-list');
  const terms = data.terms || [];

  if (!terms.length) {
    list.innerHTML = `<div class="loading-state">${isAr ? 'لا توجد بنود حالياً' : 'No terms available'}</div>`;
    return;
  }

  list.innerHTML = terms.map((term, i) => `
    <article class="term-card">
      <div class="term-header">
        <div class="term-num">${i + 1}</div>
        <h2 class="term-title">${isAr ? (term.title_ar || '') : (term.title_en || '')}</h2>
      </div>
      <div class="term-body">${isAr ? (term.body_ar || '') : (term.body_en || '')}</div>
    </article>
  `).join('');
}

// Load from Firestore
async function loadTerms() {
  try {
    const doc = await db.collection('content').doc('terms').get();
    if (doc.exists && doc.data().terms?.length) {
      liveData = doc.data();
    }
  } catch (e) {
    console.warn('Could not load terms from Firestore, using fallback', e);
  }
  render();
}

// Real-time updates (so when you edit from Hub, the public page updates live)
function listenTerms() {
  db.collection('content').doc('terms').onSnapshot(snap => {
    if (snap.exists && snap.data().terms?.length) {
      liveData = snap.data();
      render();
    }
  }, err => console.warn('Realtime listener error', err));
}

// Init
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

setLang(currentLang);
loadTerms();
listenTerms();
