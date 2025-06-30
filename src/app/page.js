export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-100 min-h-screen p-0">
      {/* Header Section */}
      <section className="mb-12 text-center">
        
        <img
  src="/logo.png"
  alt="شعار العيادة"
  className="mx-auto mb-4 w-30 h-30 object-cover mt-4"
  // إذا تريد الحواف دائرية أضف rounded-full، إذا لا احذفها
        />


        <h1 className="text-4xl font-bold mb-4 text-blue-700">اهلا بكم في عيادات ايرس للعيون والليزر</h1>
        <p className="text-lg text-gray-700 mb-6">
          رعاية مختصة، تكنولوجيا حديثة، وبيئة ترحيبية
        </p>
        <p className="text-base text-gray-600">
          [✨ صحتك تبدأ من عيونك… ورؤيتك تبدأ من آيرس]
        </p>

      </section>



      {/* Services Section */}
<section className="w-full max-w-3xl mb-12">
  <h2 className="text-2xl font-semibold text-blue-700 mb-4">خدماتنا</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="bg-white rounded-xl p-6 shadow border-2 border-blue-400 text-right">
      <h3 className="font-bold mb-2 ">فحص النظر الشامل</h3>
      <p className="text-gray-600">أحدث الأجهزة للكشف المبكر عن مشاكل العيون</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow border-2 border-blue-400 text-right">
      <h3 className="font-bold mb-2">تصحيح النظر بالليزر</h3>
      <p className="text-gray-600">عمليات الليزك والسمايل برو بأعلى درجات الأمان</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow border-2 border-blue-400 text-right">
      <h3 className="font-bold mb-2">علاج الماء الأبيض</h3>
      <p className="text-gray-600">أحدث طرق علاج الساد وجراحة العدسات المتقدمة</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow border-2 border-blue-400 text-right">
      <h3 className="font-bold mb-2">علاج أمراض الشبكية</h3>
      <p className="text-gray-600">متابعة وعلاج أمراض الشبكية والسكر بإشراف اطباء مختصين</p>
    </div>
  </div>
</section>


<section className="w-full max-w-3xl mb-12">
  <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-right">من نحن</h2>
  <div className="bg-white rounded-xl p-6  shadow text-gray-700 text-right border shadow border-2 border-blue-400">
    <p>
      تأسست عيادتنا بهدف تقديم أفضل رعاية صحية للعيون من خلال فريق طبي متكامل وأجهزة متطورة. نؤمن بأن كل مريض يستحق العناية الفردية وخطة علاج مناسبة لاحتياجاته
      <br /><br />
      يضم كادرنا نخبة من الأطباء ذوي الخبرة الطويلة في جميع مجالات طب وجراحة العيون. نسعى دائماً لتوفير أحدث التقنيات الطبية لضمان نتائج دقيقة وتجربة علاج مريحة وآمنة لكل مراجعينا
    </p>
  </div>
</section>

<section className="w-full max-w-3xl mb-12 contact-us-section">
  <h2 className="text-2xl font-semibold text-blue-700 mb-4">تواصل معنا</h2>
  <div className="bg-white rounded-xl p-6 shadow text-gray-700 shadow border-2 border-blue-400">
    <form className="flex flex-col gap-4">
      <div>
        <label className="block mb-1 font-bold text-right" htmlFor="name">الاسم</label>
        <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded text-right" placeholder="اكتب اسمك هنا" required />
      </div>
      <div>
        <label className="block mb-1 font-bold text-right" htmlFor="phone">رقم الهاتف</label>
        <input type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded text-right" placeholder="رقم الهاتف" required />
      </div>
      <div>
        <label className="block mb-1 font-bold text-right" htmlFor="message">رسالتك</label>
        <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded text-right" rows={4} placeholder="كيف يمكننا مساعدتك؟" required />
      </div>
      <button type="submit" className="bg-blue-700 text-white font-bold py-2 rounded hover:bg-blue-800 transition text-middle">إرسال</button>
    </form>
  </div>
</section>

<section className="w-full max-w-3xl mb-12 location-section">
  <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-middle">موقع العيادة</h2>
  <div className="bg-white rounded-xl p-6 shadow text-gray-700 flex flex-col items-center shadow border-2 border-blue-400">
    <p className="mb-4">العراق - بغداد - الكرادة - شارع 42</p>
    <div className="w-full h-72 rounded overflow-hidden shadow">
      <iframe
        title="عيادتنا على الخريطة"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d833.6161470963111!2d44.43746320580889!3d33.306667590011585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1557810c9abc5787%3A0x9b00df23d83abb28!2zSXJpcyBFeWUgQ2xpbmljcyDYp9mK2LHYsyDZhNmE2LnZitmI2YYg2YjYp9mE2YTZitiy2LE!5e0!3m2!1sen!2siq!4v1751188369763!5m2!1sen!2siq"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
      />
    </div>
  </div>
</section>




<footer className="w-full bg-blue-900 text-white text-center py-4 mt-8 rounded-t-xl">
 <div className="flex gap-4 justify-center items-center mt-2">
  <a href="tel:123456789" className="hover:underline">078 700 700 69 - 077 700 700 69</a>
  <a href="mailto:info@irisclinic.com" className="hover:underline">info@irisvisioncenter.com</a>
  <a href="#" className="hover:underline">بغداد - الكرادة - شارع 42</a>

  {/* Social media icons */}
  <a href="https://wa.me/9647770070069" target="_blank" rel="noopener noreferrer" aria-label="واتساب">
    <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.846.502 3.566 1.374 5.03L2 22l5.157-1.347A9.959 9.959 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.953 7.953 0 01-4.032-1.096l-.287-.17-3.062.799.818-2.983-.184-.304A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-6.314c-.202-.101-1.19-.586-1.373-.653-.184-.067-.317-.101-.45.101-.134.202-.517.652-.635.786-.118.134-.234.151-.436.05-.202-.101-.853-.314-1.624-1-.6-.535-1.005-1.197-1.124-1.4-.118-.202-.013-.31.088-.411.091-.09.202-.234.303-.351.101-.118.134-.202.202-.336.067-.134.034-.252-.017-.353-.051-.101-.45-1.086-.617-1.485-.163-.391-.329-.338-.45-.344l-.384-.008c-.134 0-.352.05-.538.252-.184.202-.707.691-.707 1.685 0 .994.724 1.952.825 2.087.101.134 1.426 2.187 3.47 2.984.485.167.863.267 1.158.342.486.116.927.1 1.276.061.389-.046 1.19-.486 1.357-.956.168-.47.168-.872.118-.956-.051-.084-.184-.134-.386-.235z" />
    </svg>
  </a>
  <a href="https://www.facebook.com/iriscenteriq" target="_blank" rel="noopener noreferrer" aria-label="فيسبوك">
    <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.326 24h11.495v-9.294H9.692V11.01h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.406 0 22.676 0" />
    </svg>
  </a>
  <a href="https://www.instagram.com/iris_center_iq" target="_blank" rel="noopener noreferrer" aria-label="انستجرام">
    <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.317.975.974 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.342 2.633-1.317 3.608-.974.975-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.634-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.342-2.634 1.317-3.608.975-.975 2.242-1.255 3.608-1.317C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.332.013 7.052.072c-1.675.077-3.063.638-4.146 1.721C1.023 3.143.462 4.53.385 6.205.325 7.484.312 7.892.312 12s.013 4.516.073 5.795c.077 1.675.638 3.062 1.721 4.146 1.084 1.084 2.471 1.644 4.146 1.721C8.332 23.987 8.74 24 12 24s3.668-.013 4.948-.072c1.675-.077 3.062-.638 4.146-1.721 1.084-1.084 1.644-2.471 1.721-4.146.059-1.279.072-1.687.072-5.795s-.013-4.516-.073-5.795c-.077-1.675-.637-3.062-1.721-4.146-1.084-1.084-2.471-1.644-4.146-1.721C15.668.013 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm7.205-10.406a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
    </svg>
  </a>
</div>
</footer>

    </main>

  )
}