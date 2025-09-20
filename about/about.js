let icon = document.querySelector(".bars");
let links = document.querySelector(".links");
const all_links = document.querySelectorAll(".links ul li a");
let order_button = document.querySelector(".order a");
let langauage = document.querySelector("select");
let text_background = document.querySelector(".background .text").children;
let boxes = document.querySelectorAll(".boxes .box");
let about = document.querySelector(".about .text");
let about_two = document.querySelector(".about ");
let footer = document.querySelector(".footer");

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
about_two.children[2].children[0].children[0].children[4].children[1].children[0].textContent = "Long - Term Partnership ";
about_two.children[2].children[0].children[0].children[4].children[1].children[1].textContent = "At iNoteTech, we build lasting relationships with our clients based on trust and ongoing support to achieve mutual success."; // change language
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
        text_background[0].textContent = " عن الشركة | آي نوت تيك";
        text_background[1].textContent = " مواضيع تلهمك وتواكب أحدث اتجاهات التكنولوجيا، التصميم، والتسويق الرقمي";

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
        about_two.children[1].children[1].children[0].children[0].textContent = "قيادة مستقبل التحول الرقمي";
        about_two.children[1].children[1].children[0].children[1].textContent = "+ رؤيتنا";
        about_two.children[1].children[1].children[0].children[2].textContent = "نحن نؤمن بأن التكنولوجيا ليست مجرد أدوات، بل هي أساس التقدم والاستدامة. رؤيتنا هي أن نصبح الشريك التقني الرائد للشركات التي تسعى للنمو الذكي، من خلال تقديم حلول برمجية وتسويقية متكاملة تتكيف مع تغيرات السوق وتتجاوز توقعات العملاء.";
        about_two.children[1].children[1].children[0].children[3].children[1].children[0].textContent = "الابتكار المستمر";
        about_two.children[1].children[1].children[0].children[3].children[1].children[1].textContent = "في iNoteTech، نطور حلولنا باستمرار لمواكبة أحدث اتجاهات التكنولوجيا.";

        about_two.children[1].children[1].children[0].children[4].children[1].children[0].textContent = "شراكة طويلة الأمد";
        about_two.children[1].children[1].children[0].children[4].children[1].children[1].textContent = "في iNoteTech، نبني علاقات دائمة مع عملائنا على أساس الثقة والدعم المستمر لتحقيق النجاح المشترك.";
        about_two.children[2].children[0].children[0].children[0].textContent = "قيادة مستقبل التحول الرقمي";
        about_two.children[2].children[0].children[0].children[1].textContent = "+ رؤيتنا";

        about_two.children[2].children[0].children[0].children[2].textContent = "نحن نؤمن بأن التكنولوجيا ليست مجرد أدوات، بل هي أساس التقدم والاستدامة. رؤيتنا هي أن نصبح الشريك التقني الرائد للشركات التي تسعى للنمو الذكي، من خلال تقديم حلول برمجية وتسويقية متكاملة تتكيف مع تغيرات السوق وتتجاوز توقعات العملاء.";
        about_two.children[2].children[0].children[0].children[4].children[1].children[0].textContent = "شراكة طويلة الأمد";
        about_two.children[2].children[0].children[0].children[4].children[1].children[1].textContent = "في iNoteTech، نبني علاقات دائمة مع عملائنا على أساس الثقة والدعم المستمر لتحقيق النجاح المشترك.";
        about_two.children[2].children[0].children[0].children[3].children[1].children[0].textContent = "الابتكار المستمر";
        about_two.children[2].children[0].children[0].children[3].children[1].children[1].textContent = "في iNoteTech، نطور حلولنا باستمرار لمواكبة أحدث اتجاهات التكنولوجيا.";
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
        text_background[0].textContent = "About the Company | iNoteTech";
        text_background[1].textContent = "Topics that inspire you and keep pace with the latest trends in technology, design, and digital marketing.";
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

        // start about
        about.children[0].textContent = "About Us";
        about.children[1].textContent = "+5 Years of Experience";
        about.children[2].textContent = "iNote Tech is a specialized digital agency in digital marketing, website development, and mobile applications. We design innovative solutions that help our clients grow and stand out in the digital market. We work with passion and deliver real results.";
        about.children[3].children[1].children[0].textContent = "Technical Support";
        about.children[3].children[1].children[1].textContent = "At iNote Tech, we care about the client experience after delivery just as much as we care about project quality. We provide continuous technical support to ensure your website or app runs efficiently, and we’re always ready to solve any issue or inquiry with speed and professionalism.";
        about.children[about.children.length - 1].children[1].children[0].textContent = "Tech Solutions";
        about.children[about.children.length - 1].children[1].children[1].textContent = "At iNote Tech, we offer a complete package of tech solutions including planning, development, and marketing—turning your idea into a seamless digital reality that achieves your goals with minimal effort and maximum return.";
        about_two.children[1].children[1].children[0].children[0].textContent = "Leading the Future of Digital Transformation";
        about_two.children[1].children[1].children[0].children[1].textContent = "+ Our Vision";
        about_two.children[1].children[1].children[0].children[2].textContent = "We believe that technology is not just a set of tools—it’s the foundation of progress and sustainability. Our vision is to become the leading tech partner for companies seeking smart growth, by delivering integrated software and marketing solutions that adapt to market shifts and exceed customer expectations.";
        about_two.children[1].children[1].children[0].children[3].children[1].children[0].textContent = "Continuous Innovation";

        about_two.children[1].children[1].children[0].children[3].children[1].children[1].textContent = "At iNoteTech, we continuously evolve our solutions to stay ahead of the latest tech trends.";
        about_two.children[1].children[1].children[0].children[4].children[1].children[0].textContent = "Long-Term Partnership";

        about_two.children[1].children[1].children[0].children[4].children[1].children[1].textContent = "At iNoteTech, we build lasting relationships with our clients based on trust and ongoing support to achieve mutual success.";
        about_two.children[2].children[0].children[0].children[0].textContent = "Leading the Future of Digital Transformation";
        about_two.children[2].children[0].children[0].children[1].textContent = "+ Our Vision";

        about_two.children[2].children[0].children[0].children[2].textContent = "We believe that technology is not just a set of tools—it’s the foundation of progress and sustainability. Our vision is to become the leading tech partner for companies seeking smart growth, by delivering integrated software and marketing solutions that adapt to market shifts and exceed customer expectations.";
        about_two.children[2].children[0].children[0].children[4].children[1].children[0].textContent = "Long - Term Partnership ";
        about_two.children[2].children[0].children[0].children[4].children[1].children[1].textContent = "At iNoteTech, we build lasting relationships with our clients based on trust and ongoing support to achieve mutual success.";
        about_two.children[2].children[0].children[0].children[3].children[1].children[0].textContent = "Continuous Innovation";
        about_two.children[2].children[0].children[0].children[3].children[1].children[1].textContent = "At iNoteTech, we continuously evolve our solutions to stay ahead of the latest tech trends.";
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