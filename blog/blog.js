let icon = document.querySelector(".bars");
let links = document.querySelector(".links");
const all_links = document.querySelectorAll(".links ul li a");
let order_button = document.querySelector(".order a");
let langauage = document.querySelector("select");
let text_background = document.querySelector(".background .text").children;
let boxes = document.querySelectorAll(".boxes .box");
let about = document.querySelector(".about .text");
let blog_continer = document.querySelector(".blogs .continer");
let blog_content = document.querySelectorAll(".content .card");
/*
blog_content[0].children[1].children[0].textContent = "Digital Transformation for SMEs";
blog_content[0].children[1].children[1].textContent = "Discover how small businesses can adopt digital tools to boost productivity and reduce costs.";
blog_content[0].children[1].children[2].textContent = "Read More";
blog_content[1].children[1].children[0].textContent = "Modern UI/UX Design Trends";
blog_content[1].children[1].children[1].textContent = "Explore the latest trends in user interface and experience design for web and mobile apps.";
blog_content[1].children[1].children[2].textContent = "Read More";
blog_content[2].children[1].children[0].textContent = "AI in Digital Marketing";
blog_content[2].children[1].children[1].textContent = "Learn how artificial intelligence is transforming campaign strategies and customer engagement.";
blog_content[2].children[1].children[2].textContent = "Read More";
blog_content[3].children[1].children[0].textContent = "Cybersecurity for Startups";
blog_content[3].children[1].children[1].textContent = "Simple steps to secure your data and protect your business from digital threats..";
blog_content[3].children[1].children[2].textContent = "Read More";
blog_content[4].children[1].children[0].textContent = "Smart E-Commerce Strategies";
blog_content[4].children[1].children[1].textContent = "Build a successful online store with modern tools and customer-centric design.";
blog_content[4].children[1].children[2].textContent = "Read More";
blog_content[5].children[1].children[0].textContent = "Web App Development Tools";
blog_content[5].children[1].children[1].textContent = "Discover powerful frameworks and libraries for building fast, secure web applications..";
blog_content[5].children[1].children[2].textContent = "Read More";
blog_content[6].children[1].children[0].textContent = "SEO Best Practices";
blog_content[6].children[1].children[1].textContent = "A complete guide to improving your website’s visibility and attracting organic traffic.";
blog_content[6].children[1].children[2].textContent = "Read More";
blog_content[7].children[1].children[0].textContent = "Remote Work Essentials";
blog_content[7].children[1].children[1].textContent = "Top tools and tips for managing remote teams and maintaining productivity.";
blog_content[7].children[1].children[2].textContent = "Read More";
blog_content[8].children[1].children[0].textContent = "Advanced JavaScript Techniques";
blog_content[8].children[1].children[1].textContent = "Master modern JavaScript features to build dynamic and interactive web experiences.";
blog_content[8].children[1].children[2].textContent = "Read More";
blog_content[9].children[1].children[0].textContent = "Building a Digital Brand";
blog_content[9].children[1].children[1].textContent = "Create a strong visual identity that reflects your values and attracts loyal customers.";
blog_content[9].children[1].children[2].textContent = "Read More";
blog_content[10].children[1].children[0].textContent = "Data Analytics for Growth";
blog_content[10].children[1].children[1].textContent = "Use analytics tools to understand user behavior and optimize your business performance.";
blog_content[10].children[1].children[2].textContent = "Read More";
blog_content[11].children[1].children[0].textContent = "Content Marketing Strategy";
blog_content[11].children[1].children[1].textContent = "Craft compelling content that builds trust and drives engagement across platforms.";
blog_content[11].children[1].children[2].textContent = "Read More";

*/

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
        text_background[0].textContent = "المدونة  آي نوت تيك";
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
        // start blog
        blog_continer.children[0].textContent = "استكشف مدونة آي نوت تيك";
        blog_continer.children[1].textContent = "اكتشف مقالات ملهمة تعزز إبداعك وتبقيك في صدارة عالم التكنولوجيا، التصميم، والتسويق الرقمي. سواء كنت مطورًا أو مصممًا أو رائد أعمال، تقدم لك المدونة رؤى جديدة ونصائح عملية مصممة خصيصًا لمسيرتك المهنية.";
        blog_content[0].children[1].children[0].textContent = "التحول الرقمي للشركات الصغيرة";
        blog_content[0].children[1].children[1].textContent = "اكتشف كيف يمكن للشركات الصغيرة اعتماد الأدوات الرقمية لتعزيز الإنتاجية وتقليل التكاليف.";

        blog_content[1].children[1].children[0].textContent = "اتجاهات تصميم واجهات المستخدم الحديثة";
        blog_content[1].children[1].children[1].textContent = "استكشف أحدث الاتجاهات في تصميم واجهات وتجربة المستخدم لتطبيقات الويب والموبايل.";

        blog_content[2].children[1].children[0].textContent = "الذكاء الاصطناعي في التسويق الرقمي";
        blog_content[2].children[1].children[1].textContent = "تعرّف على كيف يغيّر الذكاء الاصطناعي استراتيجيات الحملات وتفاعل العملاء.";

        blog_content[3].children[1].children[0].textContent = "أمن المعلومات للشركات الناشئة";
        blog_content[3].children[1].children[1].textContent = "خطوات بسيطة لحماية بياناتك وتأمين شركتك من التهديدات الرقمية.";

        blog_content[4].children[1].children[0].textContent = "استراتيجيات التجارة الإلكترونية الذكية";
        blog_content[4].children[1].children[1].textContent = "أنشئ متجرًا إلكترونيًا ناجحًا باستخدام أدوات حديثة وتصميم يركز على العميل.";

        blog_content[5].children[1].children[0].textContent = "أدوات تطوير تطبيقات الويب";
        blog_content[5].children[1].children[1].textContent = "اكتشف مكتبات وأطر عمل قوية لبناء تطبيقات ويب سريعة وآمنة.";

        blog_content[6].children[1].children[0].textContent = "أفضل ممارسات تحسين محركات البحث";
        blog_content[6].children[1].children[1].textContent = "دليل شامل لتحسين ظهور موقعك في نتائج البحث وزيادة الزوار.";

        blog_content[7].children[1].children[0].textContent = "أساسيات العمل عن بُعد";
        blog_content[7].children[1].children[1].textContent = "أفضل الأدوات والنصائح لإدارة الفرق عن بُعد بكفاءة عالية.";

        blog_content[8].children[1].children[0].textContent = "تقنيات JavaScript المتقدمة";
        blog_content[8].children[1].children[1].textContent = "أتقن ميزات JavaScript الحديثة لبناء تجارب ويب تفاعلية وديناميكية.";

        blog_content[9].children[1].children[0].textContent = "بناء العلامة التجارية الرقمية";
        blog_content[9].children[1].children[1].textContent = "أنشئ هوية بصرية قوية تعكس قيمك وتجذب العملاء المخلصين.";

        blog_content[10].children[1].children[0].textContent = "تحليلات البيانات للنمو";
        blog_content[10].children[1].children[1].textContent = "استخدم أدوات التحليل لفهم سلوك المستخدم وتحسين أداء عملك.";

        blog_content[11].children[1].children[0].textContent = "استراتيجية التسويق بالمحتوى";
        blog_content[11].children[1].children[1].textContent = "أنشئ محتوى جذابًا يبني الثقة ويعزز التفاعل عبر المنصات المختلفة.";
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
        text_background[0].textContent = "Blog | iNoteTech";
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
        // start blog
        blog_continer.children[0].textContent = "Explore the iNoteTech Blog"

        blog_continer.children[1].textContent = "Discover insightful articles that fuel your creativity and keep you ahead in the world of technology, design, and digital marketing. Whether you're a developer, designer, or entrepreneur, our blog delivers fresh perspectives and practicaltips tailored to your journey.";
        blog_content[0].children[1].children[0].textContent = "Digital Transformation for SMEs";
        blog_content[0].children[1].children[1].textContent = "Discover how small businesses can adopt digital tools to boost productivity and reduce costs.";
        blog_content[1].children[1].children[0].textContent = "Modern UI/UX Design Trends";
        blog_content[1].children[1].children[1].textContent = "Explore the latest trends in user interface and experience design for web and mobile apps.";
        blog_content[2].children[1].children[0].textContent = "AI in Digital Marketing";
        blog_content[2].children[1].children[1].textContent = "Learn how artificial intelligence is transforming campaign strategies and customer engagement.";
        blog_content[3].children[1].children[0].textContent = "Cybersecurity for Startups";
        blog_content[3].children[1].children[1].textContent = "Simple steps to secure your data and protect your business from digital threats..";
        blog_content[4].children[1].children[0].textContent = "Smart E-Commerce Strategies";
        blog_content[4].children[1].children[1].textContent = "Build a successful online store with modern tools and customer-centric design.";
        blog_content[5].children[1].children[0].textContent = "Web App Development Tools";
        blog_content[5].children[1].children[1].textContent = "Discover powerful frameworks and libraries for building fast, secure web applications..";
        blog_content[6].children[1].children[0].textContent = "SEO Best Practices";
        blog_content[6].children[1].children[1].textContent = "A complete guide to improving your website’s visibility and attracting organic traffic.";
        blog_content[7].children[1].children[0].textContent = "Remote Work Essentials";
        blog_content[7].children[1].children[1].textContent = "Top tools and tips for managing remote teams and maintaining productivity.";
        blog_content[8].children[1].children[0].textContent = "Advanced JavaScript Techniques";
        blog_content[8].children[1].children[1].textContent = "Master modern JavaScript features to build dynamic and interactive web experiences.";
        blog_content[9].children[1].children[0].textContent = "Building a Digital Brand";
        blog_content[9].children[1].children[1].textContent = "Create a strong visual identity that reflects your values and attracts loyal customers.";
        blog_content[10].children[1].children[0].textContent = "Data Analytics for Growth";
        blog_content[10].children[1].children[1].textContent = "Use analytics tools to understand user behavior and optimize your business performance.";
        blog_content[11].children[1].children[0].textContent = "Content Marketing Strategy";
        blog_content[11].children[1].children[1].textContent = "Craft compelling content that builds trust and drives engagement across platforms.";
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