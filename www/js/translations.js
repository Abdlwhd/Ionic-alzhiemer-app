'use strict';

angular.module('alzheimer-app')

    .config(function ($translateProvider, MemoryProvider) {
        $translateProvider
            .translations("en", {
                COMMON : {
                    HELLO : "Hello",
                    FIRST_PAGE : "FIRST PAGE",
                    SECOND_PAGE : "SECOND PAGE",
                    EXERCISE : "EXERCISE",
                    EXIT_INFO : "Do you want to exit from app ?",
                    INFO : "INFO",
                    YES : "YES",
                    NO : "NO",
                    OK : "OK",
                    CLOSE : "CLOSE",
                    CANCEL : "CANCEL",
                    HOME : "HOME",
                    CONTACT_US : "CONTACT US",
                    MESSAGE : "MESSAGE",
                    INFO : "INFO",
                    SEARCH : "Search",
                    MUSIC : "MUSIC",
                    ABOUT_US: "ABOUT US",
                    About_us: "About us",
                    Intro: "Intro",
                    Aim: "Aim",
                    Vision: "Vision",
                    Detail1: "In an essay, article, or book, an introduction is a beginning section which states the purpose and goals of the following writing.This is generally followed by the body and conclusion. The introduction typically describes the scope of the document and gives the brief explanation or summary of the document.",
                    Detail2: "A bulls-eye is an example of an aim. The definition of aim means to point or direct or to try with a particular goal in mind. An example of aim is to point an arrow at a target. An example of aim is to try to save enough money for a new car.",
                    Detail3: "A vision statement describes what a company desires to achieve in the long-run,generally in a time frame of five to ten years, or sometimes even longer. It depicts a vision of what the company will look like in the future and sets a defined direction for the planning and execution of corporate-level strategies.",
                    SETTINGS: "SETTINGS",
                    YOGA: "YOGA",
                    DO_I_HAVE_ALZHEIMER: "DO I HAVE ALZHEIMER?",
                    Dementia1: "Various Alzheimer Self-tests",
                    Dementia2: "Note: All tests are written in english and they do not detect alzheimer. A medical professional diagnosis is required if test results show symptoms of alzheimer.",
                    Dementia31: "Modified CDR Test",
                    Dementia32: "The Clinical Dementia Rating (CDR) test was originally designed to be administered by a trained professional. However, the level of expertise required to administer the test has been modified so that a family member or someone familiar with the individual can answer 6 questions about the person’s mental acuity and receive an immediate result. To be clear, this test questions caregivers not individuals with symptoms.",
                    Dementia41: "SAGE Test",
                    Dementia42: "The Clinical Dementia Rating (CDR) test was originally designed to be administered by a trained professional. However, the level of expertise required to administer the test has been modified so that a family member or someone familiar with the individual can answer 6 questions about the person’s mental acuity and receive an immediate result. To be clear, this test questions caregivers not individuals with symptoms.",
                    Dementia51: "Mini-Cog Test",
                    Dementia52: "The Mini-Cog differs slightly from the SAGE Test in that a test administrator is required and plays an active role. However, only about five minutes are required to administer the test and only one minute is needed to score it and interpret results.The test administration role is not challenging, and any healthy adult can serve in that role, no medical training required.",
                    Dementia61: "MMSE/Folstein Test",
                    Dementia62: "The MMSE or is a 30-point test used to measure thinking ability (or “cognitive impairment”). If you (or your loved one) had reason to suspect that you may be developing Alzheimer’s disease or another dementia, the MMSE is a step toward making a diagnosis. The test is also used by researchers who study Alzheimer’s, in order to know a person’s level or stage of dementia. It is the most widely used test for assessing dementia.",
                    Dementia71: "Memory Quiz",
                    Dementia72: "The Memory Quiz can put your mind at ease about misplacing your car keys occasionally, or it can motivate you to consult with your doctor. The question to ask if you seem to be misplacing your car keys more often is “When you find your keys, then do you remember that you put them there in the first place?”",
                },
                CONTACT_US  : {
                    TITLE : "CONTACT US"
                },
               /*  datepicker : {
                    jan : "Jan",
                    feb : "Feb",
                    mar : "Mar",
                    apr : "Apr",
                    may : "May",
                    june : "June",
                    july : "July",
                    aug : "Aug",
                    sept : "Sept",
                    oct : "Oct",
                    nov : "Nov",
                    dec : "Dec"
                },
          */
            })

            .translations("ar", {
                COMMON : {
                    HELLO : "مرحبا",
                    FIRST_PAGE : "FIRST PAGE",
                    SECOND_PAGE : "SECOND PAGE",
                    EXIT : "خروج",
                    EXIT_INFO : "هل تريد الخروج؟",
                    INFO : "المعلومات",
                    YES : "نعم",
                    NO : "لا",
                    OK : "موافق",
                    CLOSE : "اغلق",
                    CANCEL : "إلغاء",
                    HOME : "الصفحة الرئيسية",
                    CONTACT_US :  "للتواصل معنا",
                    MESSAGE : "رسالة",
                    INFO : "معلومات",
                    SEARCH : "بحث",
                    MUSIC : "موسيقى",
                    About_us: "معلومات عنا",
                    Intro: "مقدمة",
                    Aim: "هدف",
                    Vision: "رؤية",
                    Detail1: "في مقال أو مقال أو كتاب ، المقدمة هي قسم بداية يوضح الغرض من الكتابة التالية وأهدافها ، ويتبعها بشكل عام الجسم والخاتمة. تصف المقدمة عادةً نطاق المستند وتقدم شرحًا موجزًا ​​أو ملخصًا للمستند.",
                    Detail2: "الهدف هو مثال على الهدف. يعني تعريف الهدف الإشارة أو التوجيه أو المحاولة بهدف معين في الاعتبار. مثال على الهدف هو توجيه سهم إلى هدف. مثال على الهدف هو محاولة توفير ما يكفي من المال لشراء سيارة جديدة.",
                    Detail3: "يصف بيان الرؤية ما ترغب الشركة في تحقيقه على المدى الطويل ، بشكل عام في إطار زمني من خمس إلى عشر سنوات ، أو في بعض الأحيان لفترة أطول. إنه يصور رؤية لما ستبدو عليه الشركة في المستقبل ويحدد اتجاهًا محددًا لتخطيط وتنفيذ الاستراتيجيات على مستوى الشركة.",
                    Dementia1: "اختبارات الزهايمر الذاتية المختلفة",
                    Dementia2: "ملحوظة: جميع الاختبارات مكتوبة باللغة الإنجليزية ولا تكشف عن مرض الزهايمر. مطلوب تشخيص طبي متخصص إذا أظهرت نتائج الاختبار أعراض مرض الزهايمر.",
                    Dementia31: "تعديل اختبار CDR",
                    Dementia32: "تم تصميم اختبار تصنيف الخرف السريري (CDR) في الأصل ليتم إدارته بواسطة متخصص مدرب. ومع ذلك ، فقد تم تعديل مستوى الخبرة المطلوبة لإدارة الاختبار بحيث يمكن لأحد أفراد الأسرة أو أي شخص على دراية بالفرد الإجابة على 6 أسئلة حول حدة الشخص العقلية والحصول على نتيجة فورية. لكي نكون واضحين ، فإن هذا الاختبار يستجوب مقدمي الرعاية وليس الأفراد الذين يعانون من الأعراض.",
                    Dementia41: "اختبار SAGE",
                    Dementia42: "تم تصميم اختبار تصنيف الخرف السريري (CDR) في الأصل ليتم إدارته بواسطة متخصص مدرب. ومع ذلك ، فقد تم تعديل مستوى الخبرة المطلوبة لإدارة الاختبار بحيث يمكن لأحد أفراد الأسرة أو أي شخص على دراية بالفرد الإجابة على 6 أسئلة حول حدة الشخص العقلية والحصول على نتيجة فورية. لكي نكون واضحين ، فإن هذا الاختبار يستجوب مقدمي الرعاية وليس الأفراد الذين يعانون من الأعراض.",
                    Dementia51: "اختبار Mini-Cog",
                    Dementia52: "يختلف Mini-Cog قليلاً عن اختبار SAGE من حيث أن مسؤول الاختبار مطلوب ويلعب دورًا نشطًا. ومع ذلك ، لا يلزم إجراء الاختبار سوى حوالي خمس دقائق ، ولا يلزم سوى دقيقة واحدة لتسجيله وتفسير النتائج ، ودور إدارة الاختبار لا يمثل تحديًا ، ويمكن لأي شخص بالغ يتمتع بصحة جيدة أن يؤدي هذا الدور ، دون الحاجة إلى تدريب طبي.",
                    Dementia61: "MMSE / اختبار فولشتاين",
                    Dementia62: "MMSE هو اختبار من 30 نقطة يستخدم لقياس القدرة على التفكير (أو'الضعف الإدراك'). إذا كان لديك (أو أحد أفراد أسرتك) سبب للشك في احتمال إصابتك بمرض الزهايمر أو خرف آخر ، فإن MMSE هي خطوة نحو إجراء التشخيص. يتم استخدام الاختبار أيضًا من قبل الباحثين الذين يدرسون مرض الزهايمر ، من أجل معرفة مستوى أو مرحلة الخرف لدى الشخص. إنه الاختبار الأكثر استخدامًا لتقييم الخرف.",
                    Dementia71: "مسابقة الذاكرة",
                    Dementia72: "يمكن أن يريحك اختبار الذاكرة بشأن وضع مفاتيح سيارتك في غير مكانها من حين لآخر ، أو يمكن أن يحفزك على استشارة طبيبك. السؤال الذي يجب طرحه إذا كان يبدو أنك تضع مفاتيح سيارتك في غير مكانها في كثير من الأحيان هو عندما تعثر على مفاتيحك ، فهل تتذكر أنك وضعتها هناك في المقام الأول؟”"
                },
                CONTACT_US  : {
                    TITLE : "للتواصل معنا"
                },
             /*    datepicker : {
                    jan : "يناير",
                    feb : "فبراير",
                    mar : "مارس",
                    apr : "أبريل",
                    may : "مايو",
                    june : "يونيو",
                    july : "يوليو",
                    aug : "أغسطس",
                    sept : "سبتمبر",
                    oct : "أكتوبر",
                    nov : "نوفمبر",
                    dec : "ديسمبر"
                },               */
            });

        var lang  = (MemoryProvider.$get().get('language')) ? MemoryProvider.$get().get('language') : 'en';
        $translateProvider.preferredLanguage(lang);
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    });
