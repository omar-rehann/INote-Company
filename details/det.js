let icon = document.querySelector(".bars");
let links = document.querySelector(".links");
const all_links = document.querySelectorAll(".links ul li a");
let order_button = document.querySelector(".order a");
let langauage = document.querySelector("select");
let text_background = document.querySelector(".background .text").children;
let boxes = document.querySelectorAll(".boxes .box");
let about = document.querySelector(".about .text");
let det = document.querySelectorAll(".details .row .box .text");
console.log(det[1].children)
let footer = document.querySelector(".footer");







// sidebar event 
icon.onclick = function() {
    links.classList.toggle("active");
    if (icon.classList.contains("fa-bars-staggered")) {
        icon.classList.remove("fa-bars-staggered");
        icon.classList.add("fa-x");
    } else {
        icon.classList.add("fa-bars-staggered");
        icon.classList.remove("fa-x");
    }
};

// change language
langauage.addEventListener("change", function() {
    let langauage_select = this.value;
    all_links.forEach(link => {
        if (langauage_select === "Arabic") {
            link.textContent = link.getAttribute("data-lang");
        } else {
            link.textContent = link.getAttribute("data-lang") === "الصفحه الرئيسية" ? "Home" :
                link.getAttribute("data-lang") === "الخدمات" ? "Services" :
                link.getAttribute("data-lang") === "المدونة" ? "Blog" :
                link.getAttribute("data-lang") === " عن الشركه " ? "About Company" :
                link.getAttribute("data-lang") === "انضم إلينا" ? "Join Us" :
                link.getAttribute("data-lang") === "طلب السعر" ? "Order Price" : link.textContent;
        }
    });

    if (langauage_select === "Arabic") {
        // start header
        order_button.textContent = "طلب السعر ";
        text_background[0].textContent = "تفاصيل المشروع | آي نوت تيك";
        text_background[1].textContent = "مواضيع تلهمك وتواكب أحدث اتجاهات التكنولوجيا، التصميم، والتسويق الرقمي";
        // start boxes
        boxes[0].children[1].textContent = "فريق العمل";
        boxes[0].children[2].textContent = "يضم فريقنا نخبة من المتخصصين في التصميم والبرمجة والتسويق، يعملون بشغف لتحويل أفكارك إلى واقع رقمي ناجح";
        boxes[1].children[1].textContent = "تطوير المواقع والتطبيقات";
        boxes[1].children[2].textContent = "نقدّم لك حلولاً متكاملة في تصميم المواقع وتطوير تطبيقات الموبايل لنعزز حضورك الرقمي ونزيد من نمو أعمالك";
        boxes[2].children[1].textContent = "خدمات التسويق";
        boxes[2].children[2].textContent = "نقدّم خدمات تسويقية ذكية تشمل إدارة المحتوى، الحملات الإعلانية، وتحسين محركات البحث لنساعدك على الوصول لجمهورك المستهدف بفعالية";
        boxes[3].children[1].textContent = "التحليلات والرؤى";
        boxes[3].children[2].textContent = "استفد من الرؤى المستندة إلى البيانات لتحسين استراتيجياتك من خلال خدمات التحليلات والتقارير المتقدمة المصممة خصيصًا لتلبية احتياجات عملك.";
        boxes[4].children[1].textContent = "حلول الأمن السيبراني";
        boxes[4].children[2].textContent = "احمِ أصولك الرقمية باستخدام خدمات الأمن السيبراني القوية لدينا، والتي تشمل التدقيق، واكتشاف التهديدات، وتصميم أنظمة آمنة.";
        boxes[5].children[1].textContent = "خدمات السحابة";

        // start detials
        det[0].children[0].textContent = "1- واجهة الحجز السريع";
        det[0].children[1].textContent = "2- مصممة لتوفير تجربة حجز سهلة وسريعة للمستخدم. تتيح اختيار وجهة الرحلة، تاريخ الذهاب والعودة، وعدد الركاب، مع إمكانية الحجز مباشرة عبر الإنترنت.";
        det[0].children[2].textContent = "3- تدعم التحقق الفوري من توفر المقاعد، وتعرض الأسعار بشكل ديناميكي حسب الوجهة والتوقيت، مما يساعد المستخدم على اتخاذ قرار سريع.";
        det[0].children[3].textContent = "4- تم تطويرها باستخدام تقنيات حديثة مثل HTML5 وCSS3 وJavaScript، مع توافق كامل مع الأجهزة المحمولة ومختلف أحجام الشاشات.";
        det[0].children[4].textContent = "5- تتميز بتصميم نظيف وسهل الاستخدام، مع دعم ثنائي اللغة (العربية والإنجليزية)، مما يجعلها مناسبة للمستخدمين المحليين والدوليين.";

        det[1].children[0].textContent = "2- عرض الرحلات المتاحة";
        det[1].children[1].textContent = "1- شاشة \"عرض الرحلات المتاحة\" تُعد خطوة محورية في رحلة الحجز، حيث تعرض للمستخدم كل الخيارات المتاحة بناءً على البيانات التي أدخلها مثل الوجهة، التواريخ، وعدد الركاب.";
        det[1].children[2].textContent = "2- يتم عرض الرحلات في تصميم بطاقات أنيق يحتوي على وقت الانطلاق، وقت الوصول، توفر المقاعد، والأسعار. يمكن للمستخدم تصفية النتائج حسب الشركة أو المسار أو درجة السفر.";
        det[1].children[3].textContent = "3- تحتوي كل بطاقة على زر \"احجز الآن\"، مما يتيح للمستخدم الانتقال مباشرة إلى اختيار المقاعد والدفع. تم تحسين الواجهة للسرعة والوضوح.";
        det[1].children[4].textContent = "4- يدعم النظام التحديثات اللحظية، مما يضمن عرض معلومات دقيقة ومحدثة دائمًا. كما يعزز دعم اللغات المتعددة سهولة الوصول للمستخدمين حول العالم.";

        det[2].children[0].textContent = "3- اختيار المقعد بسهولة";
        det[2].children[1].textContent = "1- مصمم لتوفير تجربة حجز سهلة وسريعة، حيث يتيح اختيار وجهة الرحلة، التواريخ، وعدد الركاب، مع إمكانية الحجز مباشرة عبر الإنترنت.";
        det[2].children[2].textContent = "2- تعرض واجهة اختيار المقاعد خريطة مرئية لتوزيع المقاعد داخل الباص، مما يسمح للمستخدم باختيار المقعد المناسب حسب التوفر والموقع والراحة.";
        det[2].children[3].textContent = "3- يتم تمييز المقاعد بالألوان لتوضيح حالتها (متاحة، محجوزة، مميزة). يمكن للمستخدم تمرير المؤشر أو الضغط لعرض تفاصيل المقعد قبل التأكيد.";
        det[2].children[4].textContent = "4- يدعم النظام التحديث اللحظي ويمنع الحجز المكرر، مما يضمن عملية حجز سلسة وموثوقة لجميع الركاب.";




        // start footer
        footer.children[0].children[0].children[0].children[0].textContent = "شركة I Note";
        footer.children[0].children[0].children[0].children[4].textContent = "تُقدّم شركة I Note حلولًا رقمية مبتكرة في تطوير وتصميم المواقع والتطبيقات. نساعد الشركات على تحقيق أهدافها من خلال تصميم عصري، أنظمة ذكية، وتجربة مستخدم سلسة. مهمتنا هي دمج الإبداع بالتقنية لبناء منتجات موثوقة، قابلة للتوسع، وذات تأثير فعّال.";
        footer.children[0].children[1].children[0].children[0].textContent = "رابط مهم 1";
        footer.children[0].children[1].children[0].children[1].textContent = "رابط مهم 2";
        footer.children[0].children[1].children[0].children[2].textContent = "رابط مهم 3";
        footer.children[0].children[1].children[0].children[3].textContent = "رابط مهم 4";
        footer.children[0].children[1].children[0].children[4].textContent = "رابط مهم 5";
        footer.children[0].children[1].children[0].children[5].textContent = "رابط مهم 6";
        footer.children[0].children[1].children[0].children[6].textContent = "رابط مهم 7";
        footer.children[0].children[1].children[0].children[7].textContent = "رابط مهم 8";
        footer.children[0].children[2].children[0].children[0].children[0].innerHTML = '<i class="fas fa-map-marker-alt fa-fw" style="color: white;"></i> مصر، الجيزة، داخل منطقة أبو الهول، الغرفة رقم 220';
        footer.children[0].children[2].children[0].children[1].children[0].innerHTML = '<i class="far fa-clock fa-fw" style="color: white;"></i> ساعات العمل: من 10:00 صباحًا حتى 6:00 مساءً';
        footer.children[0].children[2].children[0].children[3].children[0].children[1].textContent = "+20123456789";
        footer.children[0].children[2].children[0].children[3].children[0].children[2].textContent = "+20198765432";
    } else {
        // start header
        order_button.textContent = "Order Price";
        text_background[0].textContent = "Project Details | iNoteTech";
        text_background[1].textContent = "Topics that inspire you and keep pace with the latest trends in technology, design, and digital marketing";
        boxes[0].children[1].textContent = "Our Team";
        boxes[0].children[2].textContent = "Our team includes elite specialists in design, development, and marketing—driven by passion to turn your ideas into successful digital realities.";
        boxes[1].children[1].textContent = "Web & App Development";
        boxes[1].children[2].textContent = "We offer comprehensive solutions in website design and mobile app development to enhance your digital presence and accelerate your business growth.";
        boxes[2].children[1].textContent = "Marketing Services";
        boxes[2].children[2].textContent = "We provide smart marketing services including content management, ad campaigns, and SEO to help you reach your target audience effectively.";
        boxes[3].children[1].textContent = "Analytics & Insights ";
        boxes[3].children[2].textContent = "Leverage data-driven insights to optimize your strategies with our advanced analytics and reporting services tailored to your business needs.";
        boxes[4].children[1].textContent = "Cybersecurity Solutions";
        boxes[4].children[2].textContent = "Protect your digital assets with our robust cybersecurity services, including audits, threat detection, and secure system architecture.";
        boxes[5].children[1].textContent = "Cloud Services";
        boxes[5].children[2].textContent = "Scale your business with our reliable cloud solutions, offering seamless integration, storage, and management for optimal performance.";
        // start detials
        det[0].children[0].textContent = "1- Quick Booking Interface";
        det[0].children[1].textContent = "2- Designed to provide users with a fast and simple booking experience. It allows selecting the trip destination, departure and return dates, and number of passengers, with direct online booking.";
        det[0].children[2].textContent = "3- Supports instant seat availability checks and displays dynamic pricing based on destination and timing, helping users make quick decisions.";
        det[0].children[3].textContent = "4- Developed using modern technologies such as HTML5, CSS3, and JavaScript, with full compatibility across mobile devices and screen sizes.";
        det[0].children[4].textContent = "5- Features a clean and intuitive design with bilingual support (Arabic & English), making it suitable for both local and international users.";

        det[1].children[0].textContent = "2- Available Trips Display";
        det[1].children[1].textContent = "1- The \"Available Trips\" screen is a key step in the booking journey. It presents all available options based on the user’s input, such as destination, travel dates, and number of passengers.";
        det[1].children[2].textContent = "2- Trips are displayed in a clean, card-based layout showing departure time, arrival time, seat availability, and pricing. Users can filter results by company, route, or travel class.";
        det[1].children[3].textContent = "3- Each trip card includes a “Book Now” button, allowing users to proceed directly to seat selection and payment. The interface is optimized for speed and clarity.";
        det[1].children[4].textContent = "4- The system supports real-time updates, ensuring that users always see the most accurate and up-to-date trip information. Multilingual support enhances accessibility for global users.";

        det[2].children[0].textContent = "3- Easy Seat Selection";
        det[2].children[1].textContent = "1- Designed to provide users with a fast and simple booking experience. It allows selecting the trip destination, travel dates, and number of passengers, with direct online booking.";
        det[2].children[2].textContent = "2- The seat selection interface displays a visual map of the bus layout, allowing users to choose their preferred seats based on availability, location, and comfort.";
        det[2].children[3].textContent = "3- Seats are color-coded to indicate availability, reserved status, and premium options. Users can hover or tap to view seat details before confirming.";
        det[2].children[4].textContent = "4- The system supports real-time updates and prevents double booking, ensuring a smooth and reliable reservation process for all passengers.";


        // start footer
        footer.children[0].children[0].children[0].children[0].textContent = "I Note Company";
        footer.children[0].children[0].children[0].children[4].textContent = "I Note Company delivers innovative digital solutions in web and app development. We help businesses achieve their goals through modern design, smart systems, and seamless user experiences. Our mission is to combine creativity and technology to build reliable, scalable, and impactful products.";
        footer.children[0].children[1].children[0].children[0].textContent = "Important Link 1";
        footer.children[0].children[1].children[0].children[1].textContent = "Important Link 2";
        footer.children[0].children[1].children[0].children[2].textContent = "Important Link 3";
        footer.children[0].children[1].children[0].children[3].textContent = "Important Link 4";
        footer.children[0].children[1].children[0].children[4].textContent = "Important Link 5";
        footer.children[0].children[1].children[0].children[5].textContent = "Important Link 6";
        footer.children[0].children[1].children[0].children[6].textContent = "Important Link 7";
        footer.children[0].children[1].children[0].children[7].textContent = "Important Link 8";
        footer.children[0].children[2].children[0].children[0].children[0].innerHTML = '<i class="fas fa-map-marker-alt fa-fw" style="color: white;"></i>       Egypt, Giza, Inside The Sphinx, Room Number 220 ';
        footer.children[0].children[2].children[0].children[1].children[0].innerHTML = '<i class="far fa-clock fa-fw" style="color: white;"></i>  Business Hours: From 10:00 To 18:00 ';
        footer.children[0].children[2].children[0].children[3].children[0].children[1].textContent = "+20123456789";
        footer.children[0].children[2].children[0].children[3].children[0].children[2].textContent = "+20198765432";



    }
});