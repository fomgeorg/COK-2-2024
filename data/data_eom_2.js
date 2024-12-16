window.dataLoaded = false;
let title_of_eom = themeOfDEC;
const data = {
    "index_1":{
        "subtitle": "Изучите правила безопасной работы.",
        "step_of_popup": "Изучите правила безопасной работы",
        "paragraph_1":[
            {"image": true, "image_path": "./content/page_content/img1_1.png", "img_sign": "Тренажер «Пульт бурильщика»", "left_img": true},
            {"text": `
                      <b>При работе важно соблюдать правила безопасной работы:</b> 
                     <p> <ol class='ul_custom'>
                        <li>Осмотрите и примените средства индивидуальной защиты: специальную одежду, обувь, перчатки, каску, защитные очки.</li>
                        <li>Проверьте наличие и целостность необходимых для работы материалов.</li>
                        <li>Проверьте оснащённость рабочего места необходимым оборудованием, инвентарём и инструментами.</li>
                        <li>При обнаружении неисправностей сообщите ответственному лицу и до устранения неполадок к работе не приступайте.</li>
                        <li>Убедитесь, что рабочее место правильно и безопасно организовано.</li>
                        <li>Выполните трудовые действия.</li>
                        <li>Уберите рабочее место.</li>
                      <ol>  </p>`}
        ]
    },
    "index_2":{
        "subtitle": "Изучите устройство ступени турбобура.",
        "step_of_popup": "Изучите устройство ступени турбобура",
        "paragraph_1":[
            {"text": `
                <p>Ступень турбобура является основным элементом забойного двигателя и представляет сложный сборочный узел. На рисунке показаны устройство и принцип действия этого узла.</p>
                <pСтатор (1) – гладкое кольцо, внутри которого по диаметру расположены лопатки (5) уникальной формы. Концы лопаток соединены ободом (3). Ротор – кольцо (2) с лопатками (6), изогнутыми в противоположную сторону лопаткам статора. Концы лопаток ротора соединены ободом (4). Статор и ротор между собой соединены с зазором, чтобы свободно вращаться ротору вокруг статора.</p>
                
                `}
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/page_content/img2_1.png", "img_sign": " ", "left_img": true},
            {"text": `
                      <b>Ступень турбобура</b> 
                     <p> <ol class='ul_custom'>
                        <li>статор</li>
                        <li>ступень ротора</li>
                        <li>наружный и внутренний ободы</li>
                        <li>пята</li>
                        <li>лопатка статора</li>
                        <li>лопатка ротора</li>
                      <ol>  
                      </p>`}
        ],
        "paragraph_3":[
            {"text": `
                
                     <p> Геометрия формы лопаток существенно влияет на рабочие характеристики турбобура – это зависимость мощности, перепада давления, КПД и момента на турбине от числа оборотов вала. Чем больше количество таких ступеней в забойном двигателе, тем мощнее двигатель. <br>
                     <p>Лопатки и ротора, и статора идентичны, только выгнуты противоположно, что уменьшает их износ.</p>
                      </p>`}
        ],

    },
    "index_3":{
        "subtitle": "Изучите подготовку долот к работе.",
        "step_of_popup": "Изучите подготовку долот к работе",
        "test": [{
            "type": 3
        }, {
            "image": true,
            "image_path": "./content/tests_content/01_01.png"
        }, {
            "answers": ["статор", "ступень ротора", "наружный и внутренний ободы", "пята", "лопатка статора", "лопатка  ротора"]
        }]
    },
    "index_4":{
        "subtitle": "Изучите конструкцию турбобуров (с одной секцией и турбобур-отклонитель).",
        "step_of_popup": "Изучите конструкцию турбобуров (с одной секцией и турбобур-отклонитель)",
        "paragraph_1": [
            {"text": `
                <p>
                <b class='blue_header'>Турбобур с одной секцией</b> </p>
                <p>
                Конструкция турбобура с одной секцией представлена на рисунке. Он состоит из статора (1) и ротора (2). Для ограничения их перемещений установлен упор (3). Указанные элементы (1,2,3) расположены в корпусе шпинделя (4) и соединены с валом (5). Последний через резьбу соединён с переводником (6) для установки долота. Корпус (8) турбобура крепится к колонне бурильных труб через переводник верхний (7). Контргайка (9) стопорит гайку роторную (10). Опора средняя (11) ориентирует ротор относительно статора.
                </p>
                `},
        ],
        "paragraph_2":[
            {"text": false},
            {"image": true, "image_path": "./content/page_content/img4_01.png", "img_sign": " ", "left_img": true}
        ],
        "paragraph_3":[
            {"image": true, "image_path": "./content/page_content/img4_02.png", "img_sign": " ", "left_img": true},
            {"text": `
                      <b>Турбобур с одной секцией</b> 
                     <p> <ol class='ul_custom'>
                        <li>статор;</li>
                        <li>ротор;</li>
                        <li>упор;</li>
                        <li>шпиндель;</li>
                        <li>вал;</li>
                        <li>переводник вала;</li>
                        <li>переводник верхний;</li>
                        <li>корпус;</li>
                        <li>контргайка;</li>
                        <li>гайка роторная;</li>
                        <li>опора средняя.</li>
                      <ol>  
                      </p>`}
        ],
        "paragraph_4": [
            {"text": "<p><b class='blue_header'>Турбобур-отклонитель типа ТО (аббревиатура)</b></p>"},
            {"text": `
                <p>
                Шпиндельные турбобуры-отклонители типа ТО обеспечивают интенсивное отклонение долот для достижения зенитного угла в соответствии с проектным профилем (в заданном направлении). Он состоит из турбинной секции (15) и (17) и шпиндельной секции – отклонителя (2) и (5). Они соединяются искривлёнными переводниками (12) и (14).  Шарнирное соединение (11) передает вращение валам секций, а секция турбин имеет независимую подвеску в виде упорно-радиальных подшипников (6) и (22).
                </p>
                `},
        ],
        "paragraph_5": [
            {"image": true, "image_path": "./content/page_content/img4_03.png", "img_sign": " ", "left_img": true},
            {"text": `
                      <b>Турбобур с одной секцией</b> 
                     <p> 
                     <table>
                        <tr>
                            <td style='border: 0px;'>
                                1 – переводник вала; <br>
                                2, 5 –  корпус и вал шпиндельной секции; <br>
                                3 – гайка шпинделя;<br>
                                4, 9, 10, 16, 24, 25 – кольца регулировочные;<br>
                                6, 22 – упорно-радиальные подшипники;<br>
                                7 – сальник;<br>
                                8 – опора нижняя; <br>
                            </td>
                            <td style='border: 0px;'>
                                11 – шарнирное соединение; <br>
                                12, 14 – переводники; <br>
                                13, 26 –  полумуфты;<br>
                                15, 17 – корпус и вал турбинной секции;<br>
                                18 – опора средняя;<br>
                                19 – ротор; <br>
                                20 – статор;<br>
                                21, 23 – фонари;<br>
                                27 – переводник.<br>
                            </td>
                        </tr>
                     </table>
                     </p> `}
        ],
        "paragraph_6":[
            {"text": false},
            {"image": true, "image_path": "./content/page_content/img4_04.png", "img_sign": "Турбобур-отклонитель", "left_img": true}
        ],
    },
    "index_5":{
        "subtitle": "Обозначьте на рисунке элементы турбобура с одной секцией.",
        "step_of_popup": "Обозначьте на рисунке элементы турбобура с одной секцией",
        "test": [{
            "type": 3
        }, {
            "image": true,
            "image_path": "./content/tests_content/05_01.png"
        }, {
            "answers": ["статор", "ротор", "упор", "шпиндель", "вал", "переводник вала", "переводник верхний", "корпус", "контргайка", "гайка роторная", "опора средняя"]
        }]
    },
    "index_6":{
        "subtitle": "Изучите устройство двигательного узла винтового забойного двигателя.",
        "step_of_popup": "Изучите устройство двигательного узла винтового забойного двигателя",
        "paragraph_1": [
            {"text": `
                <p>
                <b class='blue_header'>Винтовой забойный двигатель</b> – это гидравлическая машина планетарно-роторного действия. Это значит, что из-за эксцентриситета (смещение осей статора и ротора на величину е) стальной ротор (2), имея наружные винтовые зубья  левого направления, обкатывается относительно статора (1) под действием гидравлической силы, совершает планетарное движение (ротор движется по часовой стрелке, а статор – против). Таким образом, между зубьями ротора и статора образуются рабочие камеры – объёмы, так что в них давление жидкости и создаёт вращающий момент, который передаётся долоту. Собственно, именно поэтому винтовые забойные двигатели относят к машинам объёмного действия.
                <br>
                Внутренняя поверхность статора защищена специальной резиной, материал которой определяет ресурс работы винтовой пары, её надёжность и долговечность.
                </p>
                `},
        ],
        "paragraph_2":[
            {"text": false},
            {"image": true, "image_path": "./content/page_content/img6_01.png", "img_sign": " ", "left_img": true}
        ],
    },
    "index_7":{
        "subtitle": "Обозначьте на рисунке элементы двигательного узла винтового забойного двигателя.",
        "step_of_popup": "Обозначьте на рисунке элементы двигательного узла винтового забойного двигателя",
        "test": [{
            "type": 3
        }, {
            "image": true,
            "image_path": "./content/tests_content/07_01.png"
        }, {
            "answers": ["статор", "ротор"]
        }]
    },
    "index_8":{
        "subtitle": "Изучите конструкцию винтового забойного двигателя.",
        "step_of_popup": "Изучите конструкцию винтового забойного двигателя",
        "paragraph_1": [
            {"text": `
                <p>
                Винтовой забойный двигатель состоит из двигательного и шпиндельного узлов, соединённых переводником (3). В корпусе шпинделя (2) посредством резьбового соединения размещён вал шпинделя, который и соединяется с бурильной трубой. Противоположный конец вала шпинделя со стороны винтовой пары (двигательного узла) соединяется с долотом. Двигательный узел содержит планетарный механизм (7), статор (6), ротор (5) и шарнирное соединение (4) в виде карданного или торсионного валов. <br>
                </p>
                <p style='text-align: center;'><b>Устройство винтового забойного двигателя</b></p>
                `},
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/page_content/img8_01.png", "img_sign": " ", "left_img": true},
            {"text": `
                <p> 
                1 – вал шпинделя <br>
                2 – шпиндель <br>
                3 – переводник <br>
                4 – шарнирное соединение <br>
                5 – ротор <br>
                6 – статор <br>
                7 – планетарный механизм <br>
                </p>
                <br>
                `}
        ],
        "paragraph_3":[
            
            {"image": true, "image_path": "./content/page_content/img8_02.png", "img_sign": "Винтовой забойный двигатель", "left_img": true}  
        ],
    },
    "index_9":{
        "subtitle": "Обозначьте на рисунке элементы конструкции винтового забойного двигателя.",
        "step_of_popup": "Обозначьте на рисунке элементы конструкции винтового забойного двигателя",
        "test": [{
            "type": 3
        }, {
            "image": true,
            "image_path": "./content/tests_content/09_01.png"
        }, {
            "answers": ["вал шпинделя", "шпиндель", "переводник", "шарнирное соединение", "ротор", "статор", "планетарный"]
        }]
    },
    "index_10":{
        "subtitle": "Изучите взаимосвязь параметров режима бурения и способа бурения.",
        "step_of_popup": "Изучите взаимосвязь параметров режима бурения и способа бурения",
        "paragraph_1":[
            {"text": `
                <p> 
                При бурении роторным способом параметры режима бурения – осевая нагрузка на долото (Рд), проходка на долото (h) и подача промывочного раствора (Q) – не влияют друг на друга. В бурении забойными двигателями осевая нагрузка (Рд) на долото зависит от подачи промывочного раствора (Q). В турбинном бурении обороты долота (n) и осевая нагрузка (Рд) будут зависеть от величины подачи промывочного раствора (Q). Скорость вращения долота (v) не изменяется при бурении электробуром, но по силе тока (I) судят о работе долота и так создают оптимальные осевые нагрузки на долото (Рд).
                <br>
                <p style='text-align: center;'><b>Параметры режимов бурения</b></p>
                `}
        ],
        "paragraph_2":[
            {"text": false},
            {"image": true, "image_path": "./content/page_content/img10_01.png", "img_sign": "Винтовой забойный двигатель", "left_img": true}  
        ],
    },
    "index_11":{
        "subtitle": "При бурении каким способом обороты долота и осевая нагрузка будут зависеть от величины подачи промывочного раствора.",
        "step_of_popup": "При бурении каким способом обороты долота и осевая нагрузка будут зависеть от величины подачи промывочного раствора",
        "test":[
            {"type": 1},
            {"answers": [
                "ротором",
                "турбобуром",
                "гидравлическим забойным двигателем",
                "электробуром"
            ]},
            {"correct_answer": [1]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_12":{
        "subtitle": "Расшифруйте условные обозначения долот, классифицируемых по типу корпуса и разбуриваемой горной породе.",
        "step_of_popup": "Расшифруйте условные обозначения долот, классифицируемых по типу корпуса и разбуриваемой горной породе",
        "paragraph_1":[
            {"text": `
                <p> 
                Зависимости регулируемых параметров турбинного бурения будут справедливы, если подача промывочной жидкости:
                </p>
                `}
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/page_content/img12_01.png", "img_sign": "Графики зависимостей регулируемых параметров турбинного бурения при Q=const"} ,
            {"text": `
                <p> 1. Прямо пропорциональна скорости вращения турбины (рис.): </p>
                 <p>   <span class="math_equation">$$ \\frac{n_1}{n_2} = \\frac{Q_1}{Q_2} $$</span> </p>
                <p> где n – скорость (частота) вращения турбины  <br>
                (индексы: 1 – вначале бурения, 2 – после изменения параметра); <br> 
                Q – подача промывочной жидкости; <br> </p>
                <p>
                2. Перепад давления (p) и вращательный момент (M) турбины прямо пропорциональны её квадрату: <br></p>
                 <p>
                    <span class="math_equation">$$ \\frac{p_1}{p_2} = \\left( \\frac{Q_1}{Q_2} \\right)^2 $$</span> 
                    <span class="math_equation">$$ \\frac{M_1}{M_2} = \\left( \\frac{Q_1}{Q_2} \\right)^2 $$</span> 
                 </p>
                <p> 3. Мощность (N) турбины прямо пропорциональна её кубу: <br>
                </p> 
                <p>
                    <span class="math_equation">$$ \\frac{N_1}{N_2} = \\left( \\frac{Q_1}{Q_2} \\right)^3 $$</span>
                </p>
                `}
        ],
    },
    "index_13":{
        "subtitle": "Изучите варианты исполнения PDC долот.",
        "step_of_popup": "Изучите варианты исполнения PDC долот",
        "test":[
            {"type": 9},
            {"description": " "},
            {"definitions": [
                "<p class='popup_zoom_plc zoom_paragraph hidden_button_custom'><span class='p_custom'>Вращательный момент турбины </span></p>",
                "<p class='popup_zoom_plc zoom_paragraph hidden_button_custom'><span class='p_custom'>Перепад давления  на турбине </span></p>",
                "<p class='popup_zoom_plc zoom_paragraph hidden_button_custom'><span class='p_custom'>Скорость вращения турбины </span></p>",
                "<p class='popup_zoom_plc zoom_paragraph hidden_button_custom'><span class='p_custom'>Мощность турбины </span></p>"
            ]},
            {"answers": [
                "<p class='popup_zoom_plc center_center_custom hidden_button_custom'><span class='math_equation'>$$ \\frac{n_1}{n_2} = \\frac{Q_1}{Q_2} $$</span></p>",
                "<p class='popup_zoom_plc center_center_custom hidden_button_custom'><span class='math_equation'>$$ \\frac{p_1}{p_2} = \\left( \\frac{Q_1}{Q_2} \\right)^2 $$</span></p>",
                "<p class='popup_zoom_plc center_center_custom hidden_button_custom'><span class='math_equation'>$$ \\frac{M_1}{M_2} = \\left( \\frac{Q_1}{Q_2} \\right)^2 $$</span></p>",
                "<p class='popup_zoom_plc center_center_custom hidden_button_custom'><span class='math_equation'>$$ \\frac{N_1}{N_2} = \\left( \\frac{Q_1}{Q_2} \\right)^3 $$</span></p>"
            ]},
            {"correct_answer_type_10": [3, 2, 1, 4]},
            {"image": true, "image_path": "./content/empty_img.png", "image_sgn": " ."}
        ],
    },
    "index_14":{
        "subtitle": "Изучите текст, описывающий зависимость крутящего момента М турбины от частоты вращения ротора n.",
        "step_of_popup": "Изучите текст, описывающий зависимость крутящего момента М турбины от частоты вращения ротора n",
        "paragraph_1":[
            {"image": true, "image_path": "./content/page_content/img14_01.png", "img_sign": "Зависимость момента от частоты вращения турбины"},
            {"text": `
                <p> 
                Различают два режима работы турбины – тормозной и холостой (рис.) в зависимости от значений момента и частоты вращения турбины:
                </p>
                <p>- <b>тормозной</b> – точка 1 на графике: момент М достигает максимального значения, если к валу турбины приложить такую нагрузку, чтобы его вращение прекратилось (n = 0); </p>
                <p><b class='blue_header'>Описание:</b> участок ОМТ на рисунке – это крутящий момент турбобура, когда вращение вала отсутствует.</p>
                <p>- <b>холостой</b> – точка 2 на графике: частота вращения вала турбины n достигает максимального, если момент М = 0, то есть нужно снять нагрузку.</p>
                <p><b class='blue_header'>Описание:</b> крутящий момент уменьшается, а частота вращения вала растёт,  достигает максимального значения – отрезок Оnх. Скорость вращения вала будет меняться и вызывать изменения, кроме момента, и КПД, и мощности.
                </p>
                `}
        ],
    },
    "index_15":{
        "subtitle": "Ознакомьтесь с испытанием работы электродвигателя на холостом ходу и испытанием возбудителей.",
        "step_of_popup": "Ознакомьтесь с испытанием работы электродвигателя на холостом ходу и испытание возбудителей",
        "test": [{
            "type": 3
        }, {
            "image": true,
            "image_path": "./content/tests_content/15_01.png"
        }, {
            "answers": ["тормозной", "холостой"]
        }]
    },
        "index_16": {
        "subtitle": "Изучите правила и порядок эксплуатации забойных двигателей.",
        "step_of_popup": "Изучите правила и порядок эксплуатации забойных двигателей",
        "paragraph_1": [
            {"image": true, "image_path": "./content/page_content/img16_01.png", "img_sign": " ", "unique": true, "left_img": true},
            {"text": `
                <p> 
                Все готовые к эксплуатации забойные двигатели имеют паспорт, который содержит следующую информацию:
                <ol class='ul_custom'>
                    <li> Учётный номер забойного двигателя;</li>
                    <li> Эксплуатационные характеристики;</li>
                    <li> Работа в скважинах;</li>
                    <li> Первичная причина отказа забойного двигателя.</li>
                </ol>
                После разборки и подробного осмотра забойного двигателя в ремонтном цехе, определяется окончательная причина отказа.
                </p>
                `}
        ],
        "paragraph_2": [
            {"text": ` 
                <br>
                <b class='blue_header'>Порядок эксплуатации забойного двигателя на буровой</b>
                `},
        ],
        "paragraph_3": [
            {"text": `
                <div class="container_custom">
                <div class="step_custom">
                    <div class="step_custom-title">01.</div>
                    <p>Осмотр наружный</p>
                </div>
                <div class="step_custom">
                    <div class="step_custom-title">02.</div>
                    <p>Забойный двигатель не допускается к бурению, если обнаружены внешние дефекты</p>
                </div>
                <div class="step_custom_uniq">
                    <div class="step_custom-title">03.</div>
                    <p>Пробный запуск (опрессовка) выполняют перед спуском забойного двигателя в скважину следующим образом:</p>
                    <div class="sub-step">
                        <p>3.1. Забойный двигатель в собранном виде соединяют с ведущей трубой и опускают в скважину так, чтобы вал был виден.</p>
                        <p>3.2. Включают буровой насос, измеряют давление, при котором вал начал вращаться. У забойного двигателя не должно быть рывков, биений, вибраций при давлении 1-1,5 МПа.</p>
                    </div>
                </div>
                <div class="step_custom">
                    <div class="step_custom-title">04.</div>
                    <p>Насос выключают – вал постепенно замедляется и плавно останавливается. Если при выполнении действий, указанных в пункте 3 нарушены условия, забойный двигатель прирабатывают 10-15 минут. Если и это не сработало – забойный двигатель признают непригодным и отправляют для проверки и ремонта.</p>
                </div>
                <div class="step_custom">
                    <div class="step_custom-title">05.</div>
                    <p>Включается буровой насос, начинается промывка скважины, забойный двигатель запущен и работает вхолостую.</p>
                </div>
                <div class="step_custom">
                    <div class="step_custom-title">06.</div>
                    <p>Бурильная колонна спускается. Долото вращается вокруг своей оси и перемещается по вертикали, коснувшись забоя скважины, осевая нагрузка растёт (рис.). Чем она больше, тем частота вращения вала становится меньше.</p>
                </div>
                <div class="step_custom">
                    <div class="step_custom-title">07.</div>
                    <p>Если возникает перегрузка забойного двигателя – производится его остановка. Долото приподнимают над забоем лебёдкой на несколько метров, затем бурение продолжают.</p>
                </div>
                <div class="step_custom">
                    <div class="step_custom-title">08.</div>
                    <p>Для смены долота, для оценки отклонения вала забойного двигателя от оси в радиальном и осевом направлениях (люфт) его поднимают на поверхность. Допускаемое отклонение осевое – 5-6 мм, радиальное – 3 мм. Если эти нормы нарушены – забойный двигатель заменяют.</p>
                </div>
            </div>
                `}
        ],
        "paragraph_4": [
            {"image": true, "image_path": "./content/page_content/img16_03.png", "img_sign": " ", "unique": true, "left_img": true},
            {"text": `
                <p> 
                Требования по обеспечению нормативного времени работы забойного двигателя сводятся к контролю: 
                <ol class='ul_custom'>
                    <li>Утечек в бурильных трубах;</li>
                    <li>Качества бурового раствора;</li>
                    <li>Системы очистки бурового раствора, чтобы снизить  износ опор и турбины;</li>
                </ol>
                После завершения эксплуатации на буровой забойного двигателя вывозят на ремонт.
                </p>
                `}
        ],
    },
        "index_17": {
        "subtitle": "Установите соответствие между кодом износа резцов и их описанием.",
        "step_of_popup": "Установите соответствие между кодом износа резцов и их описанием",
        "test":[
            {"type": 9},
            {"description": " "},
            {"definitions": [
                "WT",
                "ВТ",
                "LN",
                "LT",
                "СТ",
                "PN"
            ]},
            {"answers": [
                "Износ резцов",
                "Потеря насадки",
                "Сломанные зубки/резцы",
                "Потеря резцов",
                "Закупорка насадок",
                "Дробление/сколы резцов"
            ]},
            {"correct_answer_type_10": [1, 3, 2, 4, 6, 5]},
            {"image": true, "image_path": "./content/empty_img.png", "image_sgn": " ."}
        ],
    },
        "index_18": {
        "subtitle": "Изучите правильность проведения оценки износа долот по стандарту IADC.",
        "step_of_popup": "Изучите правильность проведения оценки износа долот по стандарту IADC",
        "paragraph_1": [
            {"image": true, "image_path": "./content/page_content/img18_1.png", "img_sign": "Рисунок. Обозначения износа долот"},
            {"text": `
                     <p>В зависимости от профиля долота, месторасположения поверхности износа (С – внутренняя конусная, N – торцевая,  T – наружная конусная,  S – плечевая,  G – калибрующая, A – вся площадь долота), зон его распределения (внутренние или внешние резцы), степени износа резца (0-8) заполняют таблицу (рис.).
                     </p>
                     <p><b class='blue_header'> 1 и 2</b> колонки заполняют по таблице элементов долота и исполнению (0-8), <br><br>
                           <b class='blue_header'>3</b> – таблица кодов износа,  <br><br>
                            <b class='blue_header'>4</b> –  месторасположение основного износа, <br><br>
                           <b class='blue_header'>5</b> – не заполняют, <br><br>
                           <b class='blue_header'> 6</b> – значение измеренного диаметра калибр-кольцом,<br><br>
                           <b class='blue_header'> 7</b> – месторасположение вторичного износа, <br><br>
                            <b class='blue_header'>8</b> – таблица причин износа  (рис.) <br><br>
                     </p>
                     <p>
                        В случае возникновения инцидентов с породоразрушающим инструментом расследование причин проводится совместно обеими сторонами (производитель и потребитель) на основании данных станции ГТИ. В буровых бригадах, где нет станции ГТИ, претензии не рассматриваются.
                     </p>`}
        ],
        "paragraph_2": [
            {"text": `<br>
                <p><b class='blue_header'>Таблица. Оформление износа долот по IADC</b><p>`}
        ],
        "paragraph_3": [
            {"image": true, "image_path": "./content/page_content/img18_2.png", "img_sign": " "}
        ]
    },
        "index_19": {
        "subtitle": "Установите соответствие между характером износа долота и его условным обозначением.",
        "step_of_popup": "Установите соответствие между характером износа долота и его условным обозначением",
        "test":[
            {"type": 9},
            {"description": " "},
            {"definitions": [
                "LN",
                "WT",
                "BT",
                "CT",
                "PN",
                "LT"
            ]},
            {"answers": [
                "Износ резцов",
                "Потеря насадки",
                "Сломанные зубки/резцы",
                "Потеря резцов",
                "Закупорка насадок",
                "Сколы/дробление резцов"
            ]},
            {"correct_answer_type_10": [2, 1, 3, 6, 5, 4]},
            {"image": true, "image_path": "./content/empty_img.png", "image_sgn": " ."}
        ],
    },
    "index_20": {
        "subtitle": "Результаты",
        "step_of_popup": "Результаты",
        "result": []
    }
}
window.dataLoaded = true;