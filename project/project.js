let icon = document.querySelector(".bars");
let links = document.querySelector(".links");
const all_links = document.querySelectorAll(".links ul li a");
let order_button = document.querySelector(".order a");
let langauage = document.querySelector("select");
let text_background = document.querySelector(".background .text").children;
let boxes = document.querySelectorAll(".boxes .box");
let about = document.querySelector(".about .text");
let allProject = document.querySelectorAll(".projects .box");
console.log(allProject[2].children[0].children[1].children[0])
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
        text_background[0].textContent = "اعمالنا | آي نوت تيك";
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


        boxes[5].children[2].textContent = "نمِّ أعمالك من خلال حلول السحابة الموثوقة لدينا، والتي توفر تكاملًا سلسًا، وتخزينًا فعالًا، وإدارة مثالية للأداء.";
        // start projects 
        allProject[0].children[0].children[1].children[0].innerHTML = "اسم المشروع: <span>نظام حجز رحلات الباص</span>";
        allProject[0].children[0].children[1].children[1].innerHTML = "نوع الخدمة: <span>تطبيق موبايل</span>";
        allProject[0].children[0].children[1].children[2].textContent = "هذا التطبيق يسهل عملية حجز رحلات الباص من خلال منصة سريعة وسهلة وآمنة. يتميز بجداول زمنية مباشرة، اختيار المقاعد، ودمج الدفع الإلكتروني، مما يعزز تجربة المستخدم وتخطيط الرحلات. تم تصميمه بواجهة متجاوبة ودعم ثنائي اللغة، ليخدم المسافرين المحليين والدوليين.";
        allProject[0].children[0].children[1].children[3].textContent = "عرض التفاصيل";

        allProject[1].children[0].children[1].children[0].innerHTML = "اسم المشروع: <span>نظام حجز رحلات الباص</span>";
        allProject[1].children[0].children[1].children[1].innerHTML = "نوع الخدمة: <span>تطوير ويب</span>";
        allProject[1].children[0].children[1].children[2].textContent = "هذا التطبيق يسهل عملية حجز رحلات الباص من خلال منصة سريعة وسهلة وآمنة. يتميز بجداول زمنية مباشرة، اختيار المقاعد، ودمج الدفع الإلكتروني، مما يعزز تجربة المستخدم وتخطيط الرحلات. تم تصميمه بواجهة متجاوبة ودعم ثنائي اللغة، ليخدم المسافرين المحليين والدوليين.";
        allProject[1].children[0].children[1].children[3].textContent = "عرض التفاصيل";

        allProject[2].children[0].children[1].children[0].innerHTML = "اسم المشروع: <span>نظام إدارة المطاعم</span>";
        allProject[2].children[0].children[1].children[1].innerHTML = "نوع الخدمة: <span>تطبيق ويب</span>";
        allProject[2].children[0].children[1].children[2].textContent = "هذا التطبيق يسهل عملية حجز رحلات الباص من خلال منصة سريعة وسهلة وآمنة. يتميز بجداول زمنية مباشرة، اختيار المقاعد، ودمج الدفع الإلكتروني، مما يعزز تجربة المستخدم وتخطيط الرحلات. تم تصميمه بواجهة متجاوبة ودعم ثنائي اللغة، ليخدم المسافرين المحليين والدوليين.";
        allProject[2].children[0].children[1].children[3].textContent = "عرض التفاصيل";

        allProject[3].children[0].children[1].children[0].innerHTML = "اسم المشروع: <span>تطبيق التوصيل</span>";
        allProject[3].children[0].children[1].children[1].innerHTML = "نوع الخدمة: <span>تطبيق موبايل</span>";
        allProject[3].children[0].children[1].children[2].textContent = "هذا التطبيق يسهل عملية حجز رحلات الباص من خلال منصة سريعة وسهلة وآمنة. يتميز بجداول زمنية مباشرة، اختيار المقاعد، ودمج الدفع الإلكتروني، مما يعزز تجربة المستخدم وتخطيط الرحلات. تم تصميمه بواجهة متجاوبة ودعم ثنائي اللغة، ليخدم المسافرين المحليين والدوليين.";
        allProject[3].children[0].children[1].children[3].textContent = "عرض التفاصيل";

        allProject[4].children[0].children[1].children[0].innerHTML = "اسم المشروع: <span>نظام نقل السيارات</span>";
        allProject[4].children[0].children[1].children[1].innerHTML = "نوع الخدمة: <span>تطبيق موبايل</span>";
        allProject[4].children[0].children[1].children[2].textContent = "هذا التطبيق يسهل عملية حجز رحلات الباص من خلال منصة سريعة وسهلة وآمنة. يتميز بجداول زمنية مباشرة، اختيار المقاعد، ودمج الدفع الإلكتروني، مما يعزز تجربة المستخدم وتخطيط الرحلات. تم تصميمه بواجهة متجاوبة ودعم ثنائي اللغة، ليخدم المسافرين المحليين والدوليين.";
        allProject[4].children[0].children[1].children[3].textContent = "عرض التفاصيل";

        allProject[5].children[0].children[1].children[0].innerHTML = "اسم المشروع: <span>نظام حجز رحلات الباص</span>";
        allProject[5].children[0].children[1].children[1].innerHTML = "نوع الخدمة: <span>تطبيق موبايل</span>";
        allProject[5].children[0].children[1].children[2].textContent = "هذا التطبيق يسهل عملية حجز رحلات الباص من خلال منصة سريعة وسهلة وآمنة. يتميز بجداول زمنية مباشرة، اختيار المقاعد، ودمج الدفع الإلكتروني، مما يعزز تجربة المستخدم وتخطيط الرحلات. تم تصميمه بواجهة متجاوبة ودعم ثنائي اللغة، ليخدم المسافرين المحليين والدوليين.";
        allProject[5].children[0].children[1].children[3].textContent = "عرض التفاصيل";

        allProject[6].children[0].children[1].children[0].innerHTML = "اسم المشروع: <span>نظام حجز رحلات الباص</span>";
        allProject[6].children[0].children[1].children[1].innerHTML = "نوع الخدمة: <span>تطوير ويب</span>";
        allProject[6].children[0].children[1].children[2].textContent = "هذا التطبيق يسهل عملية حجز رحلات الباص من خلال منصة سريعة وسهلة وآمنة. يتميز بجداول زمنية مباشرة، اختيار المقاعد، ودمج الدفع الإلكتروني، مما يعزز تجربة المستخدم وتخطيط الرحلات. تم تصميمه بواجهة متجاوبة ودعم ثنائي اللغة، ليخدم المسافرين المحليين والدوليين.";
        allProject[6].children[0].children[1].children[3].textContent = "عرض التفاصيل";



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
        text_background[0].textContent = "Our Work | iNoteTech";
        text_background[1].textContent = "Topics that inspire you and keep up with the latest trends in technology, design, and digital marketing"; // start boxes
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
        // start projects
        allProject[0].children[0].children[1].children[0].innerHTML = "Project Name: <span>Bus Trip Booking System</span>";
        allProject[0].children[0].children[1].children[1].innerHTML = "Service Type: <span>Mobile Application</span>";
        allProject[0].children[0].children[1].children[2].textContent = "This mobile application streamlines bus trip reservations with a fast, intuitive, and secure platform. Featuring real-time schedules, seat selection, and digital payment integration, it enhances travel planning and user experience. Designed with a responsive UI and bilingual support, it caters to both local and international travelers.";
        allProject[0].children[0].children[1].children[3].textContent = "Show Details";

        allProject[1].children[0].children[1].children[0].innerHTML = "Project Name: <span>Bus Trip Booking System</span>";
        allProject[1].children[0].children[1].children[1].innerHTML = "Service Type: <span>Web Development</span>";
        allProject[1].children[0].children[1].children[2].textContent = "This mobile application streamlines bus trip reservations with a fast, intuitive, and secure platform. Featuring real-time schedules, seat selection, and digital payment integration, it enhances travel planning and user experience. Designed with a responsive UI and bilingual support, it caters to both local and international travelers.";
        allProject[1].children[0].children[1].children[3].textContent = "Show Details";

        allProject[2].children[0].children[1].children[0].innerHTML = "Project Name: <span>Restaurant Management System</span>";
        allProject[2].children[0].children[1].children[1].innerHTML = "Service Type: <span>Web Application</span>";
        allProject[2].children[0].children[1].children[2].textContent = "This mobile application streamlines bus trip reservations with a fast, intuitive, and secure platform. Featuring real-time schedules, seat selection, and digital payment integration, it enhances travel planning and user experience. Designed with a responsive UI and bilingual support, it caters to both local and international travelers.";
        allProject[2].children[0].children[1].children[3].textContent = "Show Details";

        allProject[3].children[0].children[1].children[0].innerHTML = "Project Name: <span>Delivery Application</span>";
        allProject[3].children[0].children[1].children[1].innerHTML = "Service Type: <span>Mobile Application</span>";
        allProject[3].children[0].children[1].children[2].textContent = "This mobile application streamlines bus trip reservations with a fast, intuitive, and secure platform. Featuring real-time schedules, seat selection, and digital payment integration, it enhances travel planning and user experience. Designed with a responsive UI and bilingual support, it caters to both local and international travelers.";
        allProject[3].children[0].children[1].children[3].textContent = "Show Details";

        allProject[4].children[0].children[1].children[0].innerHTML = "Project Name: <span>Car Transportation System</span>";
        allProject[4].children[0].children[1].children[1].innerHTML = "Service Type: <span>Mobile Application</span>";
        allProject[4].children[0].children[1].children[2].textContent = "This mobile application streamlines bus trip reservations with a fast, intuitive, and secure platform. Featuring real-time schedules, seat selection, and digital payment integration, it enhances travel planning and user experience. Designed with a responsive UI and bilingual support, it caters to both local and international travelers.";
        allProject[4].children[0].children[1].children[3].textContent = "Show Details";

        allProject[5].children[0].children[1].children[0].innerHTML = "Project Name: <span>Bus Trip Booking System</span>";
        allProject[5].children[0].children[1].children[1].innerHTML = "Service Type: <span>Mobile Application</span>";
        allProject[5].children[0].children[1].children[2].textContent = "This mobile application streamlines bus trip reservations with a fast, intuitive, and secure platform. Featuring real-time schedules, seat selection, and digital payment integration, it enhances travel planning and user experience. Designed with a responsive UI and bilingual support, it caters to both local and international travelers.";
        allProject[5].children[0].children[1].children[3].textContent = "Show Details";

        allProject[6].children[0].children[1].children[0].innerHTML = "Project Name: <span>Bus Trip Booking System</span>";
        allProject[6].children[0].children[1].children[1].innerHTML = "Service Type: <span>Web Development</span>";
        allProject[6].children[0].children[1].children[2].textContent = "This mobile application streamlines bus trip reservations with a fast, intuitive, and secure platform. Featuring real-time schedules, seat selection, and digital payment integration, it enhances travel planning and user experience. Designed with a responsive UI and bilingual support, it caters to both local and international travelers.";
        allProject[6].children[0].children[1].children[3].textContent = "Show Details";
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