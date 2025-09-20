let icon = document.querySelector(".bars");
let links = document.querySelector(".links");
const all_links = document.querySelectorAll(".links ul li a");
let order_button = document.querySelector(".order a");
let langauage = document.querySelector("select");
let text_background = document.querySelector(".background .text").children;
let boxes = document.querySelectorAll(".boxes .box");
let about = document.querySelector(".about .text");
let vison = document.querySelector(".see .row");
let team_continer = document.querySelector(".team .continer");
let team_content = document.querySelectorAll(".content .box");
let services = document.querySelector(".services .continer");
let content_services = document.querySelector(".services .content .row ");
let more_than = document.querySelector(".services .end a");
let project = document.querySelector(".project .container ");
let project_content = document.querySelector(".project .content .text ");
let all_project = document.querySelector(".project .end a");
let contact = document.querySelector(".contact .row .box");
let footer = document.querySelector(".footer");
AOS.init({
    duration: 2000, // مدة الحركة (بالـ ms)
});
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
        text_background[0].textContent = "آي نوت تك للبرمجيات";
        text_background[1].textContent = "روّاد في بناء المتاجر الإلكترونية والمواقع والتطبيقات";
        text_background[2].textContent = "انضم إلينا";
        text_background[3].textContent = "أحدث المشاريع";
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
        // start about
        about.children[0].textContent = "من نحن";
        about.children[1].textContent = "+5 سنوات من الخبرة";
        about.children[2].textContent = "تُعد آي نوت تك وكالة رقمية متخصصة في التسويق الرقمي، تطوير المواقع، وتطبيقات الجوال. نصمم حلولًا مبتكرة تساعد عملاءنا على النمو والتميّز في السوق الرقمي. نعمل بشغف ونقدّم نتائج حقيقية.";
        about.children[3].children[1].children[0].textContent = "الدعم الفني";
        about.children[3].children[1].children[1].textContent = "في آي نوت تك، نهتم بتجربة العميل بعد التسليم بقدر اهتمامنا بجودة المشروع. نوفر دعمًا فنيًا مستمرًا لضمان عمل موقعك أو تطبيقك بكفاءة، ونكون دائمًا على استعداد لحل أي مشكلة أو استفسار بسرعة واحترافية.";
        about.children[about.children.length - 1].children[1].children[0].textContent = "الحلول التقنية";
        about.children[about.children.length - 1].children[1].children[1].textContent = "في آي نوت تك، نقدم باقة متكاملة من الحلول التقنية تشمل التخطيط، التطوير، والتسويق—لنجعل فكرتك واقعًا رقميًا سلسًا يحقق أهدافك بأقل جهد وأعلى عائد.";
        // start vision
        vison.children[0].children[0].textContent = "رؤيتنا";
        vison.children[0].children[1].textContent = "شريكك الرقمي للنجاح";
        vison.children[0].children[2].textContent = "في آي نوت تك، نطمح إلى أن نكون الشريك التقني الرائد للشركات في العالم العربي من خلال تقديم حلول رقمية ذكية، متكاملة، ومصممة بدقة لتواكب تطورات السوق وتُسهم في نجاح عملائنا على المدى الطويل.";
        vison.children[0].children[3].textContent = "نتخيل مستقبلًا تكون فيه الابتكار والتكنولوجيا في متناول كل شركة، مما يمكّنها من الازدهار في بيئة رقمية تنافسية. هدفنا هو سد الفجوة بين الفكرة والتنفيذ من خلال حلول موثوقة، قابلة للتوسع، ومصممة حول المستخدم.";
        vison.children[0].children[4].textContent = "من خلال الدمج بين الإبداع والخبرة التقنية والتفكير الاستراتيجي، نسعى لإعادة تعريف طريقة تفاعل الشركات مع التكنولوجيا. نحن نؤمن ببناء أنظمة رقمية ليست فقط عملية، بل أيضًا جاهزة للمستقبل—مصممة لتتطور مع نموك.";
        vison.children[0].children[5].textContent = "رؤيتنا تتجاوز مجرد التطوير؛ إنها تتعلق بإحداث تأثير حقيقي. سواء كنت شركة ناشئة تبحث عن أول حضور رقمي أو مؤسسة تسعى للتحول الرقمي، فإن آي نوت تك ملتزمة بأن تكون الشريك الموثوق في كل خطوة على الطريق.";
        // start team
        team_continer.children[0].textContent = "آراء العملاء";
        team_continer.children[1].textContent = "شريكك الرقمي للنجاح";

        team_content[0].children[0].children[1].textContent = "عمر ريحان ";
        team_content[0].children[0].children[2].textContent = "مطور واجهه اماميه   ";
        team_content[0].children[2].textContent = "ساعدني هذا المسار على تحسين مهاراتي في تصميم واجهات المستخدم وبناء مشاريع واقعية ومتجاوبة. أنصح به بشدة لكل من يسعى ليصبح مطور واجهات أمامية.";

        team_content[1].children[0].children[1].textContent = "علي محمد";
        team_content[1].children[0].children[2].textContent = "مطور فلستاك";
        team_content[1].children[2].textContent = "قدّم لي مسار الفلستاك أساسًا قويًا في تقنيات الواجهة الأمامية والخلفية. إنه حزمة متكاملة للمتعلمين الجادين.";

        team_content[2].children[0].children[1].textContent = "محمد رمضان";
        team_content[2].children[0].children[2].textContent = "مطور تطبيقات موبايل";
        team_content[2].children[2].textContent = "كان مسار تطبيقات الموبايل عمليًا ومليئًا بالتطبيقات الواقعية. أنشأت عدة تطبيقات وتعلمت كيفية تحسين الأداء عبر مختلف الأجهزة.";

        team_content[3].children[0].children[1].textContent = "لؤي زيدان";
        team_content[3].children[0].children[2].textContent = "الأمن السيبراني";
        team_content[3].children[2].textContent = "قدّم لي هذا المسار مقدمة قوية في الاختراق الأخلاقي، وأمن الشبكات، وتحليل التهديدات الواقعية. إنه ضروري لكل من يرغب في دخول مجال الأمن السيبراني.";

        team_content[4].children[0].children[1].textContent = "محمود عثمان";
        team_content[4].children[0].children[2].textContent = "مطور الواجهة الخلفية";
        team_content[4].children[2].textContent = "ساعدني مسار الواجهة الخلفية على إتقان واجهات البرمجة، قواعد البيانات، والمنطق الخاص بالخادم. أصبحت الآن واثقًا من قدرتي على بناء تطبيقات ويب قابلة للتوسع.";
        services.children[0].textContent = "خدماتنا";
        services.children[1].textContent = "+200 عمل موثوق";
        content_services.children[0].children[0].children[1].children[0].textContent = "تطوير المواقع";
        content_services.children[0].children[0].children[1].children[1].textContent = "نقوم ببناء مواقع سريعة وقابلة للتوسع باستخدام أحدث الأطر البرمجية وكود نظيف. سواء كانت صفحة هبوط أو تطبيق ويب متكامل، نقدم تجربة رقمية سلسة.";

        content_services.children[1].children[0].children[1].children[0].textContent = "تصميم واجهات وتجربة المستخدم";
        content_services.children[1].children[0].children[1].children[1].textContent = "فريق التصميم لدينا يبتكر واجهات تفاعلية تجذب المستخدمين وتحقق النتائج. نركز على سهولة الاستخدام، الوصول، والتناسق البصري عبر جميع الأجهزة.";

        content_services.children[2].children[0].children[1].children[0].textContent = "الهوية البصرية والعلامة التجارية";
        content_services.children[2].children[0].children[1].children[1].textContent = "نساعد الشركات على التميز من خلال شعارات مخصصة، ألوان متناسقة، وأنظمة تصميم تعكس قيمها وتبني علاقة قوية مع جمهورها.";

        content_services.children[3].children[0].children[1].children[0].textContent = "التوثيق التقني";
        content_services.children[3].children[0].children[1].children[1].textContent = "نُعد توثيقًا احترافيًا ثنائي اللغة يُبسّط الأنظمة المعقدة ويُعزز وضوح المنتج للمستخدمين والمطورين حول العالم.";

        content_services.children[4].children[0].children[1].children[0].textContent = "الاستشارات والتخطيط";
        content_services.children[4].children[0].children[1].children[1].textContent = "من التخطيط إلى الإطلاق، نقدم إرشادات تقنية تساعدك على اتخاذ قرارات ذكية وتوسيع حضورك الرقمي بكفاءة.";
        more_than.innerHTML = '<i class="fa-solid fa-right-long fa-beat" style="color: #f0f2f4; margin-right: 10px;"></i> اعرف المزيد';
        project.children[0].textContent = "أكثر من 200 مشروع موثوق";
        project.children[1].textContent = "مشروعاتنا";
        project.children[2].textContent = "نقدم لمحة عن بعض أعمالنا والحلول التقنية التي قدمناها في مجال تطوير وتصميم المواقع والتطبيقات.";
        project_content.children[0].textContent = "لوحة تحكم لإدارة طلبات المطاعم بسلاسة";
        project_content.children[1].textContent = "نقدم نظامًا ذكيًا لحجز الباصات يُمكّن شركات النقل من إدارة الرحلات والمقاعد والمدفوعات بسهولة ومرونة. ويوفر للمستخدمين تجربة حجز سلسة وآمنة من خلال واجهة بسيطة تدعم التتبع الفوري والتحديثات المباشرة.";
        project_content.children[2].textContent = "تم تصميم الحل لدينا لتبسيط العمليات وتقليل الأخطاء اليدوية وتعزيز رضا العملاء. من خلال أدوات تحكم سهلة وإشعارات فورية، يستمتع كل من المسؤولين والمستخدمين بتجربة خالية من التعقيدات ومخصصة لاحتياجات النقل الحديثة.";
        all_project.innerHTML = '<i class="fa-solid fa-right-long fa-beat" style="color: #f0f2f4; margin-right: 10px;"></i> كل الأعمال';
        contact.children[0].textContent = "تواصل معنا في أي وقت";
        contact.children[1].textContent = "اتصل بنا";
        contact.children[2].textContent = "تواصل معنا على مدار الساعة وسنرد عليك في أقرب وقت ممكن.";
        contact.children[3].innerHTML = '<i class="fa-solid fa-money-check-dollar" style="color: black; margin-right: 10px;"></i> طلب عرض سعر';
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
        text_background[0].textContent = "Eye Note Tech for Software";
        text_background[1].textContent = "Pioneers in Building E-Commerce Stores, Websites, and Applications";
        text_background[2].textContent = "Join Us";
        text_background[3].textContent = "Latest Projects";
        // start boxes
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
        // start about
        about.children[0].textContent = "About Us";
        about.children[1].textContent = "+5 Years of Experience";
        about.children[2].textContent = "iNote Tech is a specialized digital agency in digital marketing, website development, and mobile applications. We design innovative solutions that help our clients grow and stand out in the digital market. We work with passion and deliver real results.";
        about.children[3].children[1].children[0].textContent = "Technical Support";
        about.children[3].children[1].children[1].textContent = "At iNote Tech, we care about the client experience after delivery just as much as we care about project quality. We provide continuous technical support to ensure your website or app runs efficiently, and we’re always ready to solve any issue or inquiry with speed and professionalism.";
        about.children[about.children.length - 1].children[1].children[0].textContent = "Tech Solutions";
        about.children[about.children.length - 1].children[1].children[1].textContent = "At iNote Tech, we offer a complete package of tech solutions including planning, development, and marketing—turning your idea into a seamless digital reality that achieves your goals with minimal effort and maximum return.";
        // start vison
        vison.children[0].children[0].textContent = "Our Vision";
        vison.children[0].children[1].textContent = "Your Digital Partner for Success";
        vison.children[0].children[2].textContent = "At iNote Tech, we aspire to be the leading technology partner for businesses across the Arab world by delivering smart, integrated, and precisely crafted digital solutions that keep pace with market developments and contribute to our clients’ long-term success.";
        vison.children[0].children[3].textContent = "We envision a future where innovation and technology are accessible to every business, empowering them to thrive in a competitive digital landscape. Our goal is to bridge the gap between ideas and execution through reliable, scalable, and user-centric solutions.";
        vison.children[0].children[4].textContent = "By combining creativity, technical expertise, and strategic thinking, we aim to redefine how businesses interact with technology. We believe in building digital ecosystems that are not only functional but also future-ready—designed to evolve with your growth.";
        vison.children[0].children[5].textContent = "Our vision goes beyond development; it’s about creating meaningful impact. Whether it’s a startup looking for its first online presence or an enterprise seeking digital transformation, iNote Tech is committed to being the trusted partner every step of the way.";
        // start team

        team_continer.children[0].textContent = "Client Testimonials";
        team_continer.children[1].textContent = "Your Digital Partner for Success";

        team_content[0].children[0].children[1].textContent = "Omar Rehan";
        team_content[0].children[0].children[2].textContent = "Front End Developer";
        team_content[0].children[2].textContent = "This track helped me sharpen my UI/UX skills and build responsive, real-world projects. Highly recommended for aspiring front-end developers.";

        team_content[1].children[0].children[1].textContent = "Ali Mohmaed";
        team_content[1].children[0].children[2].textContent = "Fullstack Developer";
        team_content[1].children[2].textContent = "The fullstack track gave me a solid foundation in both front-end and back-end technologies. It’s a complete package for serious learners.";

        team_content[2].children[0].children[1].textContent = "Mohmaed Ramadan";
        team_content[2].children[0].children[2].textContent = "Mobile Application Developer";
        team_content[2].children[2].textContent = "The mobile app track was practical and hands-on. I built several apps and learned how to optimize performance across devices.";

        team_content[3].children[0].children[1].textContent = "Loay Zidan";
        team_content[3].children[0].children[2].textContent = "Cybersecurity";
        team_content[3].children[2].textContent = "This track introduced me to ethical hacking, network security, and real-world threat analysis. It’s a must for anyone entering cybersecurity.";
        team_content[4].children[0].children[1].textContent = "Mahmoud Osman";
        team_content[4].children[0].children[2].textContent = "Back-End Developer";
        team_content[4].children[2].textContent = "The back-end track helped me master APIs, databases, and server-side logic. I now feel confident building scalable web applications.";
        services.children[0].textContent = "Our Services";
        services.children[1].textContent = "200+ Trusted Projects";
        // start service 
        content_services.children[0].children[0].children[1].children[0].textContent = "Web Development";
        content_services.children[0].children[0].children[1].children[1].textContent = "We build fast, scalable websites using modern frameworks and clean code. Whether it's a landing page or a full-stack app, we deliver seamless digital experiences.";
        content_services.children[1].children[0].children[1].children[0].textContent = "UI/UX Design";
        content_services.children[1].children[0].children[1].children[1].textContent = "Our design team creates intuitive interfaces that engage users and drive results. We focus on usability, accessibility, and visual harmony across all devices.";

        content_services.children[2].children[0].children[1].children[0].textContent = "Branding & Identity";
        content_services.children[2].children[0].children[1].children[1].textContent = "We help businesses stand out with custom logos, color schemes, and design systems that reflect their values and connect with their audience.";
        content_services.children[3].children[0].children[1].children[0].textContent = "Technical Documentation";
        content_services.children[3].children[0].children[1].children[1].textContent = "We craft bilingual, professional documentation that simplifies complex systems and enhances product clarity for global users and developers.";
        content_services.children[4].children[0].children[1].children[0].textContent = "Consulting & Strategy";
        content_services.children[4].children[0].children[1].children[1].textContent = "From project planning to deployment, we offer expert guidance to help you make informed tech decisions and scale your digital presence effectively.";
        more_than.textContent = "More Than";
        project.children[0].textContent = "200+ Trusted Projects";
        project.children[1].textContent = "Our Projects";
        project.children[2].textContent = "Here’s a glimpse of some of our work and the technical solutions we’ve delivered in web and app development and design.";
        project_content.children[0].textContent = "Dashboard for Seamless Restaurant Order Management";
        project_content.children[1].textContent = "We offer a smart bus booking system that empowers transport companies to manage trips, seats, and payments with ease and flexibility. It provides users with a smooth and secure booking experience through a simple interfacethat supports real - time tracking and instant updates."
        project_content.children[2].textContent = "Our solution is designed to streamline operations, reduce manual errors, and enhance customer satisfaction. With intuitive controls and instant notifications, both administrators and users enjoy a hassle-free experience tailored   to modern transportation needs.";
        all_project.textContent = "All Project";
        contact.children[0].textContent = "Contact Us Anytime";
        contact.children[1].textContent = "Get in Touch";
        contact.children[2].textContent = "Reach out to us 24/7 and we’ll get back to you as soon as possible.";
        contact.children[3].textContent = "Request a Quote";
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