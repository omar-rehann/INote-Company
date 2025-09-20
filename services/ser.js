let icon = document.querySelector(".bars");
let links = document.querySelector(".links");
const all_links = document.querySelectorAll(".links ul li a");
let order_button = document.querySelector(".order a");
let langauage = document.querySelector("select");
let text_background = document.querySelector(".background .text").children;
let boxes = document.querySelectorAll(".boxes .box");
let about = document.querySelector(".about .text");
let servicrs = document.querySelectorAll(".servies .card .card-body p");






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
        text_background[0].textContent = "   انضم الينا | آي نوت تيك";
        text_background[1].textContent = " مواضيع تلهمك وتواكب أحدث اتجاهات التكنولوجيا، التصميم، والتسويق الرقمي ";
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
        // start services
        servicrs[0].textContent = "نختص في تصميم واجهات مستخدم بديهية وإجراء تحليل دقيق للمتطلبات لضمان أن تكون برمجياتك وظيفية وسهلة الاستخدام. فريقنا يقدم حلولًا قابلة للتوسع مصممة خصيصًا لتلبية احتياجات عملك، مع دعم مستمر للحفاظ على ازدهار مشروعك.";

        servicrs[1].textContent = "تكمن خبرتنا في تطوير حلول برمجية مرنة وقوية، مدعومة بحملات تسويقية استراتيجية. نقدم خدمات شاملة من تصميم المفهوم إلى الدعم بعد الإطلاق، مما يضمن نجاح مشروعك على المدى الطويل.";

        servicrs[2].textContent = "نركز على بناء مواقع إلكترونية متجاوبة وتطبيقات قابلة للتوسع، مع التركيز القوي على تجربة المستخدم والموثوقية التقنية. نهجنا الشامل يتضمن تحديثات دورية ودعمًا مخصصًا لدفع مشروعك إلى الأمام.";

        servicrs[3].textContent = "تشمل خدماتنا تطوير برمجيات مبتكرة وإنشاء مواقع إلكترونية ديناميكية، مقترنة باستراتيجيات تسويقية فعالة. نضمن تنفيذًا سلسًا للمشروع من التخطيط الأولي إلى التسليم النهائي، مع تحسين مستمر لتحقيق النجاح.";

        servicrs[4].textContent = "نقدم حلول برمجية مخصصة وتصميمات مواقع إلكترونية جذابة، مدعومة بتحليل سوقي شامل وصيانة مستمرة. هدفنا هو تحويل رؤيتك إلى واقع من خلال خدمات عالية الجودة وموثوقة تضمن استدامة المشروع.";

        servicrs[5].textContent = "يبرع فريقنا في إنشاء برمجيات ومواقع إلكترونية تركز على المستخدم، مدعومة بالتسويق الاستراتيجي والدعم الفني المستمر. نحن نرشد مشروعك من الفكرة إلى التنفيذ، مما يضمن التكيف والنجاح في بيئة تنافسية.";

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
        text_background[0].textContent = "Join Us | iNoteTech";
        text_background[1].textContent = "Topics that inspire you and keep up with the latest trends in technology, design, and digital marketing";
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
        // start services

        // Assign unique Arabic text content to each <p> element

        // Assign unique text content to each <p> element
        servicrs[0].textContent = "We specialize in crafting intuitive user interfaces and conducting precise requirements analysis to ensure your software is both functional and user-friendly. Our team delivers scalable solutions tailored to your business needs, with ongoing support to keep your project thriving.";

        servicrs[1].textContent = "Our expertise lies in developing flexible and robust software solutions, complemented by strategic marketing campaigns. We provide end-to-end services, from concept design to post-launch support, ensuring your project achieves long-term success.";

        servicrs[2].textContent = "We focus on building responsive websites and scalable applications, with a strong emphasis on user experience and technical reliability. Our comprehensive approach includes regular updates and dedicated support to drive your project forward.";

        servicrs[3].textContent = "Our services encompass innovative software development and dynamic website creation, paired with effective marketing strategies. We ensure seamless project execution from initial planning to final delivery, with continuous optimization for success.";

        servicrs[4].textContent = "We deliver customized software solutions and engaging web designs, backed by thorough market analysis and ongoing maintenance. Our goal is to transform your vision into reality with reliable, high-quality services that ensure project longevity.";

        servicrs[5].textContent = "Our team excels in creating user-centric software and websites, supported by strategic marketing and consistent technical support. We guide your project from ideation to execution, ensuring adaptability and success in a competitive landscape.";
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