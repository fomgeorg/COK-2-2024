window.dataLoaded = false;
    let title_of_eom = themeOfDEC;
    let methodRecomendation = 'Изучите материал о диагностике и испытаниях электрического и электромеханического оборудования. Чтобы перейти к учебному материалу, кликайте на блоки с текстом';
    let dropType = 17;
    let typeOfButtons = 'hexagon'; // Можер быть "hexagon", "lightning", "tiles" или "video" или "custom";
    let timings = [ // если typeOfButtons = 'video'
        { time: 30, name: "ertertetert 1" }, // если typeOfButtons = 'video'
        { time: 40, name: "gdfgdgdg 2" }, // если typeOfButtons = 'video'
        { time: 50, name: "Button 3" }, // если typeOfButtons = 'video'
        { time: 60, name: "Button 4" }, // если typeOfButtons = 'video'
        { time: 70, name: "Button 5" }, // если typeOfButtons = 'video'
        { time: 80, name: "Button 5fghfhfh" }, // если typeOfButtons = 'video'
        { time: 90, name: "Button 5kjkjkjk" }, // если typeOfButtons = 'video'
        { time: 100, name: "Button 5wewqeewqw" }, // если typeOfButtons = 'video'
    ]; // если typeOfButtons = 'video'
    let pathToVideo = './content/page_content/test_video.mp4'; // если typeOfButtons = 'video'
    let videoTitle2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'; // если typeOfButtons = 'video'
    // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let customPage = ``; // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let background_type = dropType;
    let literaListEOM1 = 
    `Нескоромных, В. В. Бурение скважин: учебное пособие / В. В. Нескоромных. – М.: ИНФРА-М, 2019. – 351 с.
    Храменков, В. Г.  Автоматизация управления технологическими процессами бурения нефтегазовых скважин : учебное пособие для среднего профессионального образования / В. Г. Храменков. – М.: Юрайт, 2024. – 415 с.
    Технология и техника бурения : учебное пособие : в 2 частях. Часть 2. Технология бурения скважин / В.С. Войтенко, А.Д. Смычник, А.А. Тухто, С.Ф. Шемет ; под общей редакцией В.С. Войтенко. – М.: ИНФРА-М, 2024. – 613 с.
    Нескоромных, В. В. Бурение скважин : учебное пособие / В.В. Нескоромных. – Москва : ИНФРА-М ; Красноярск : Сибирский федеральный университет, 2023. – 352 с.
    Гладких, Т. Д. Автоматизация технологических процессов в нефтегазовой отрасли : учебное пособие / Т. Д. Гладких. – М.; Вологда : Инфра-Инженерия, 2022. – 152 с.
    Ладенко, А. А. Основы строительства нефтяных и газовых скважин : учебное пособие / А. А. Ладенко. – М.; Вологда : Инфра-Инженерия, 2022. – 196 с.
    Нескоромных, В. В. Основы техники, технологии и безопасности буровых работ: учебное пособие / В. В. Нескоромных. – М: ИНФРА-М. 2019. – 376 с.
    Заливин, В. Г. Аварийные ситуации в бурении на нефть и газ / В. Г. Заливин, А. Г. Вахромеев. – М.: Инфра-Инженерия, 2018. – 508 с.
    Бабаян, Э. В. Конструкция нефтяных и газовых скважин. Осложнения и их преодоления: учебное пособие / Э. В. Бабаян. – М.: Инфра-Инженерия, 2018. – 252 с. ` // Список литературы
    const data = {
        "index_0":{
            "subtitle": "Назначение, виды и устройство забойных двигателей",
            "paragraph_1":[
                {"text": `<p> Для бурения нефтяных и газовых скважин используют забойные двигатели. 
                        <b class='blue_header'>Забойный двигатель </b> – машина, которая погружается на забой и приводит во вращение буровой инструмент – долото (рисунок 1).</p>
                        <p>Для вращения последнего необходима энергия. Если  выходной вал забойного двигателя приводится во вращение от электрической энергии, он именуется электрическим или электробуром. Если энергия жидкости, то есть бурового раствора, приводит во вращение выходной вал двигателя, такой двигатель называется гидравлическим.</p>

                `}
            ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img1_1.png", "img_sign": "Рисунок 1. Схема бурения с забойным двигателем"}
            ]
        },
        "index_1":{
            "subtitle": "Классификация забойных двигателей",
            "paragraph_1":[
                {"text": ` 
                    <p>
                    По способу создания гидравлической энергии двигатели делят на объёмные и динамические. В двигателях объёмного действия жидкость вытесняется из рабочей камеры перемещением поршня, пластины, винтового механизма. Последний забойный двигатель и называется <b> винтовой.</b> <br>
                    В забойных двигателях динамического действия жидкость вытесняется благодаря изменению момента количества движения жидкости в рабочих органах машины. Так жидкость попадает на лопасти турбины под определенным углом и заставляет последнюю вращаться. Такой забойный двигатель называется <b> турбобуром. </b>
                    </p>
                `}
            ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img2_1.png", "img_sign": "Рисунок 2. Классификация забойных двигателей"}
            ]
        },
        "index_2":{
            "subtitle": "Назначение различных видов забойных двигателей",
            "paragraph_1":[
                {"text": ` 
                    <p> <b>Электробуры.</b> Электробур – забойный двигатель, сообщает породоразрушающему инструменту (долоту) посредством электрической энергии. Питание электродвигателя передаётся через закреплённый внутри бурильных труб кабель. Шпиндель заполнен маслом и установлен на подшипниках качения в трубном корпусе (рисунок 3). Вместе с долотом вращается только вал электродвигателя, а его корпус и бурильная колонна остаются неподвижными.</p>
                `}
            ],
            "paragraph_2":[
                {"image": true, "image_path": "./content/page_content/img3_1.png", "img_sign": "Рисунок 4. Устройство долот"},
                {"text": `
                    <ol class='ul_custom'>
                        <li>долото</li>
                        <li>электродвигатель</li>
                        <li>редуктор</li>
                        <li>шпиндель</li>
                    <ol>
                    `}
            ],
            "paragraph_3":[
                {"text": ` <br><b>Характеристика электробуров</b><br>
                    `},
            ],
            "paragraph_4":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img3_2.png", "img_sign": " "}
            ],
            "paragraph_5":[
                {"text": `
                    <p>При эксплуатации электробурами возникают некоторые особенности бурения
                    <ul class='ul_custom'>
                        <li>мощность электробура зависит от бурового раствора, глубины его погружения, от нагрузки, но незначительно;</li>
                        <li>частота вращения вала абсолютно не зависит от бурового раствора;</li>
                        <li>количество бурового раствора зависит от  условий очистки забоя не зависимо от мощности электробура;</li>
                        <li>его рабочие органы не подвергаются абразивному износу из-за герметичности маслонаполнения;</li>
                        <li>процесс бурения автоматизирован, поскольку напрямую зависит от изменений тока и напряжений, вызванных нагрузками на долото;</li>
                        <li>без вращения бурильной колонны упрощается контроль и корректировка угла наклона и азимута. Но возникают сложности при подводе кабеля питания, электробур боится влаги, а она всегда есть в скважине;</li>
                        <li>высокие температуры пагубно влияют на такой двигатель и сложно контролировать его работу: идёт углубление забоя или нет.</li>
                    <ul>
                    </p>
                    `}
            ]
        },
        "index_3":{
            "subtitle": "Гидравлические забойные двигатели – турбобуры и винтовые",
            "step_of_popup": "step 3",
            "paragraph_1":[
                {"image": true, "image_path": "./content/page_content/img4_1.png", "img_sign": "Рисунок 4. Вертикальная и наклонно-направленная скважины", "left_img": true},
                {"text": `
                    <p>
                    Гидравлические забойные двигатели и турбобуры, и винтовые применяют  в следующих случаях:
                    <ul class='ul_custom'>
                        <li>при бурении наклонно-направленных и вертикальных скважин глубиной до 3500 м (рисунок 4);</li>
                        <li>при использовании буровых растворов  плотностью меньше 1700 кг/м<sup>3</sup> (рекомендовано 1200-1300  кг/м<sup>3</sup>);</li>
                        <li>при низких забойных температурах – меньше 150 ℃, в противном случае при больших температурах деформируются эластомеры и резинотехнические опоры.</li>
                    <ul>
                    </p>
                    `}
            ]
        },
        "index_4":{
            "subtitle": "Турбобуры",
            "step_of_popup": "step 4",
            "paragraph_1":[
                {"image": true, "image_path": "./content/page_content/img5_1.png", "img_sign": "Рисунок 5. Общий вид турбобура", "left_img": true},
                {"text": `
                    <p>
                    Турбобур представляет из себя цилиндрический корпус 2, на оси которого расположен вал 1. На нём расположена одна или несколько ступеней турбин  (рисунок 5). Ступень турбины состоит из подвижного элемента – ротора 3 с лопатками 5 и статора 4 с лопатками 6  (рисунок 6). Протекающая  жидкость смещает лопатки ротора относительно неподвижных лопаток статора. Вал 1 начинается вращаться и передаёт вращение шпинделю, который вращает долото.
                    <br>
                    Для увеличения крутящего момента на валу двигателя устанавливается несколько секций турбин – это турбинная секция. Такой турбобур называется многосекционным.
                    </p>
                    `}
                ],
            "paragraph_2":[
                {"image": true, "image_path": "./content/page_content/img5_2.png", "img_sign": "Рисунок 6. Ступень турбины двигателя"},
                {"text": `
                    <ol class='ul_custom'>
                        <li>вал</li>
                        <li>корпус</li>
                        <li>ротор</li>
                        <li>статор</li>
                        <li>лопатки ротора</li>
                        <li>лопатки статора</li>
                    <ol>
                    `}
            ]
        },
        "index_5":{
            "subtitle": "Конструкции и характеристики турбобуров",
            "step_of_popup": "step 5",
            "paragraph_1":[
                {"image": true, "image_path": "./content/page_content/img6_1.png", "img_sign": "Рисунок 7. Турбобур с одной секцией"},
                {"text":`
                    <p>
                    Турбобуры односекционные имеют одну турбинную секцию (около 100 ступеней), применяют для бурения вертикальных скважин – зенитный угол  ствола скважины (отклонение от её вертикальной проекции) не превышает 50 и для бурения наклонно-направленных скважин, в которых верхний интервал вертикальный, а следующие участки с зенитным углом более 50. Габаритный размер односекционного турбобура достигает 8 метров (рисунок 7)
                    </p>
                    <p>
                    Турбобуры секционные имеют две или три секции (до 300-400 ступеней), что  повышает крутящий момент турбины.
                    </p>
                    <p>
                    В зависимости от конструктивной схемы осевой опоры турбобуры выпускают <b> шпиндельными </b> и <b>бесшпиндельными</b>.
                    <b class='blue_header'>Шпиндель</b> – это самостоятельная секция, представляет собой узел осевой опоры (подшипники скольжения и (или) качения).
                    </p>
                    <p>
                    <b class='blue_header'>Бесшпиндельное исполнение </b> применяют в односекционных турбобурах.
                    </p>
                    <p>
                    ГОСТ 26673-90 регламентирует параметры и характеристики бесшпиндельных (аббревиатура – ТБ) и шпиндельных (аббревиатура – ТШ) турбобуров. Для изменения траектории ствола скважины забойный двигатель и должен служить отклонителем. Обычно для этого используют шпиндельные односекционные турбобуры, но для быстрого набора заданного зенитного угла применяют  турбобуры – отклонители типа ТО (аббревиатура ТО).
                    </p>
                    `}
                ]
        },
        "index_6":{
            "subtitle": "Особенности турбинного бурения",
            "step_of_popup": "step 3",
            "paragraph_1":[
                {"text":`
                    <p>
                    Особенности использования турбобуров заключаются в сохранении подачи промывочной жидкости, в возможности регулирования скорости вращения долота, в отсутствии обрыва буровой колонны, поскольку она не вращается. Любой турбине присущи высокие скорости вращения, что требует применения редукторных (понижающих) вставок.
                    </p>
                    <p>
                    Турбобур не моментоёмкий, это значит, что когда растёт нагрузка на нём, он теряет свою скорость и совсем останавливается. Поток жидкости просто протекает через ступени – не возникает крутящего момента – тормозится. Чтобы обеспечить необходимую мощность или крутящий момент для разрушения горной породы требуется использовать многосекционные турбобуры. А они имеют большие габариты, что будет служить ограничением по спуску  двигателя в искривлённую скважину заданного профиля. Достоинства и недостатки бурения турбобурами приведены на схеме.
                    </p>
                    `},
                ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img7_1.png", "img_sign": " "},
                
            ]
        },
        "index_7":{
            "subtitle": "Винтовые гидравлические забойные двигатели",
            "step_of_popup": "step 4",
            "paragraph_1":[
                {"text":`
                    <p>
                        <b class='blue_header'>Винтовой забойный двигатель </b> является гидравлической машиной, которая состоит из двигательного и шпиндельного узлов, соединённых переводником (рисунок 8). <br>
                        <b>Двигательный узел</b> – это винтовое соединение ротора и статора. <br>
                        <b>Шпиндельный узел</b> – главный, поскольку выполняет ряд функций: <br>
                        - передаёт осевую нагрузку породоразрушающему инструменту; <br>
                        - принимает нагрузку от гидравлической энергии бурового раствора; <br>
                        - уплотняет выходной вал; <br>
                        - воспринимает нагрузку посредством подшипников от долота и шарнирного соединения. <br>
                    </p>
                    `}
                ],
            "paragraph_2":[
            {"text": `
                <div class='two_img_custom'>
                    <img src='./content/page_content/img8_1.png'>
                    <img src='./content/page_content/img8_2.png'>
                </div>
                `}
            ],
            "paragraph_3":[
            {"text": `
                <p>
                        <b> Для правильной работы всего механизма винтового забойного двигателя должны выполняться следующие условия: </b> <br>
                    <ol class='ul_custom'>
                        <li>Разное количество зубьев z<sub>1</sub> = z<sub>2</sub> + 1 (количество зубьев ротора – z<sub>2</sub>;  статора – z<sub>1</sub>).</li>
                        <li>Отношение шагов T/t = z<sub>1</sub> /z<sub>2</sub> (T – шаг статора,  t – шаг ротора).</li>
                        <li>Передаточное число i = z<sub>1</sub> /z<sub>2</sub>. Количество зубьев ротора всегда меньше, чем статора на единицу (например,  1:2).  Чем больше число заходов (например, 7:8) ротора, тем будет больше вращающий момент, в тоже время будет меньше частота вращения ротора. Поэтому многозаходная винтовая пара является и двигателем, и выполняет роль редуктора.</li>
                    <ol>
                </p>
                    <p>
                    Винтовые забойные двигатели регламентированы нормативным документом ТУ 39-1230-87.
                    </p>
                     <p>
                    Преимущества винтовых забойных двигателей по сравнению с другими гидравлическими забойными двигателями:
                    <ul class='ul_custom'>
                     <li>увеличенная  проходка за рейс долот;</li>
                     <li>подконтроль работы двигателя;</li>
                     <li>применяются гидромониторные долота.</li>
                    </ul>
                    </p>
                `}
            ],
        },
        "index_8":{
            "subtitle": "Компоновки винтовых забойных двигателей типа РС",
            "step_of_popup": "step 5",
            "paragraph_1":[
               
                {"text":`
                    <p>
                    В настоящее время широкое применение получили винтовые забойные двигатели ООО «Радиус-Сервис» (аббревиатура РС) из-за: <br>
                    - бурения скважин сложного профиля; <br>
                    - надёжности;<br>
                    - увеличенного ресурса рабочих органов (винтовая пара) до 200 моточасов;<br>
                    - управляемости;<br>
                    - высокого крутящего момента – до 19 кН * м;<br>
                    - широкого диапазона плотности промывочной жидкости – 800 до 1600 кг/м<sup>3</sup>.<br>
                    В таблице приведены технические характеристики винтовых забойных двигателей тира РС,  на рисунке 10 их компоновки.
                    </p>
                    `}
                ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img9_1.png", "img_sign": "Рисунок 10. Компоновки винтовых забойных двигателей типа РС"},
            ],
            "paragraph_3":[
                {"text": `<br><b class='blue_header'>Таблица.  Технические характеристики винтовых забойных двигателей типа РС</b>`}
                ],
            "paragraph_4":[
            {"text": false},
            {"image": true, "image_path": "./content/page_content/img9_2.png", "img_sign": "Рисунок 13. Конструктивные особенности снаряда"}    
            ],
        },
        "index_9":{
            "subtitle": "Технические и энергетические характеристики забойных двигателей",
            "step_of_popup": "step 5",
            "paragraph_1":[
                {"text":`
                    <p>К основным эксплуатационным характеристикам при бурении турбобурами и винтовыми  забойными двигателями относятся: 
                    </p>
                    <p>
                    <ol class='ul_custom'>
                        <li> Подача (расход) бурового раствора, Q, л/с; </li>
                        <li> Частота вращения вала шпинделя n, об/мин; </li>
                       <li> Момент силы на валу М, кН * м; </li>
                        <li>  Мощность N, Вт; </li>
                        <li>  Перепад давления ΔР, Па; </li>
                        <li> Коэффициент полезного действия η. </li>
                    <ol>
                    </p>
                    <p>
                    Исследования испытаний турбин показывают, что вращающий момент турбины от частоты вращения ротора зависит линейно и обратно пропорционально: чем больше частота вращения n, тем меньше момент М, и наоборот.
                    </p>
                    `}
                ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img10_1.png", "img_sign": "Рисунок 11. Характеристики забойных двигателей"}    
                ],
            "paragraph_3":[
                {"text": `
                    <p>
                    Поэтому различают два режима работы турбины – тормозной  (n = 0, М = max) и холостой (n = max, М = 0): <br>
                    Режим, при котором мощность турбины достигает максимального значения, называется  <b class='blue_header'>экстремальным</b>, нет вибраций, нарушающих работу турбобура. <br>
                    Режим, при котором коэффициент полезного действия η турбины достигает максимального значения, называется <b class='blue_header'> оптимальным </b>, потери напора минимальны. График такой функции – парабола, ветви которой направлены вниз, и вершина как раз будет соответствовать максимальному значению мощности и КПД (рис. 11, а).
                    </p>
                    <p>
                    Для винтовых забойных двигателей существуют следующие особенности его характеристик: <br>
                    - частота вращения вала пропорциональна расходу (подаче) бурового раствора; <br>
                    - частота вращения вала под нагрузкой падает на 15-20 %; <br>
                    - перепад давления на долоте линейно зависит от его момента. <br>
                    - расход промывочной жидкости необходимо увеличивать на 20-25 % от начальной величины по мере износа винтовой пары для сохранения рабочей характеристики двигателя (рис. 11, б).
                    </p>
                    `}
            ]
        },
        "index_10":{
            "subtitle": "Подбор забойных двигателей к конкретным условиям бурения нефтяных и газовых скважин",
            "step_of_popup": "step 5",
            "paragraph_1":[
                {"text":`
                    <p>Подбор известных способов бурения нефтяных и газовых скважин (роторный, гидравлическими забойными двигателями и электробурами) подчиняется задаче технологии бурения, конкретно: <br>
                   - геологические условия и физико-механические свойства пород; <br>
                   - зоны возможных осложнений (осыпи, обвалы, газонефтеводопроявления, поглощения бурового раствора), пластовые давления продуктивных горизонтов; <br>
                   - возможность самопроизвольного искривления ствола скважины и меры по его устранению; <br>
                   - выбор бурового раствора и его параметров в соответствии с геологическими условиями и интервалами бурения; <br>
                   - выбор типа долот.</p>

                   <p>
                   Этот комплекс работ обуславливает следующие критерии оценки: стоимость 1 м проходки, проходка за рейс и коммерческая скорость.
                    Кроме того, частота вращения долота (об/мин) также может являться ориентиром при выборе способа бурения (таблица).
                   </p>
                   <p>
                    <b class='blue_header'>Таблица. Распределение способов бурения  в зависимости от частоты вращения долота </b>
                   </p>
                    `}
                ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img11_1.png", "img_sign": "Рисунок 15. Процесс работы грунтоноски"}    
                ],
            "paragraph_3":[
                {"text": `
                    <p>Статистика объёмов бурения в нашей стране распределилась следующим образом: основные объёмы достигаются  турбобурами, ВЗД и роторный способы на втором месте, третье место – электробуры (рисунок 12).  Одна из главных причин такого распределения мест – стоимость 1 м проходки – это удельная стоимость одного пробуренного метра горной породы от начала её разрушение до момента работы долота.</p>
                    `},
                {"image": true, "image_path": "./content/page_content/img11_2.png", "img_sign": "Рисунок 12. Статистика объёмов бурения"}    
                ],
        }
        
    };
    const themesOfEOM1 = Object.values(data).map(item => item.subtitle).join('\n');
window.dataLoaded = true;