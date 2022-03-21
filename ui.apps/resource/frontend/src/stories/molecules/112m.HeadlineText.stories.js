import React from 'react';
import HeadlineText from '../../components/molecules/headline-text/HeadlineText';


const gapObject = {
    "Default": '',
    "No Gap": 'mb-0'
}

export default {
    title: 'Molecules/Headline Text',
    component: HeadlineText,
    argTypes: {
        orientation: {
            control: { type: "inline-check", options: ["orientation-right"] }
        },
        gap: {
            control: { type: "select", options: gapObject }
        },
    }
};
// start
const Template = (args) => <HeadlineText {...args} >
    <h1>h1 Strukturnachbildung</h1>
    <h2>h2 Unterüberschrift</h2>
    <h3>1. h3</h3>
    <p>Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat
    reprehenderit repudiandae vitae. Aperiam blanditiis distinctio earum ex impedit iure labore natus, nihil
            similique ut voluptas.</p>
    <h4>2. h4</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores cumque deleniti dolorum eveniet
    fugiat iure iusto laboriosam magni nam nemo nulla optio provident quasi rem rerum temporibus, velit veritatis.
        </p>
    <h5>3. h5</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero
            maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</p>
    <p>usw.</p>
    <h6>3. h6</h6>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero
            maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</p>
    <p>usw.</p>
</HeadlineText>;

export const HeadlineWithText = Template.bind({});
HeadlineWithText.args = {
    customClass: "",
}
// start
const Template2 = (args) => <HeadlineText {...args} >
    <p><b>Unordered List: </b></p>
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three
                    <ul>
                <li>four</li>
                <li>five</li>
                <li>six
                        <ul>
                        <li>seven</li>
                        <li>eight</li>
                        <li>nine
                            <ul>
                                <li>ten</li>
                                <li>eleven</li>
                                <li>twelve</li>
                            </ul>
                        </li>
                        <li>thirteen</li>
                    </ul>
                </li>
                <li>fourteen</li>
            </ul>
        </li>
        <li>fifteen</li>
        <li>sixteen</li>
    </ul>

    <p><b>Ordered List: </b></p>
    <ol>
        <li>one</li>
        <li>two</li>
        <li>three
                    <ol>
                <li>four</li>
                <li>five</li>
                <li>six
                        <ol>
                        <li>seven</li>
                        <li>eight</li>
                        <li>nine
                            <ol>
                                <li>ten</li>
                                <li>eleven</li>
                                <li>twelve</li>
                            </ol>
                        </li>
                        <li>thirteen</li>
                    </ol>
                </li>
                <li>fourteen</li>
            </ol>
        </li>
        <li>fifteen</li>
        <li>sixteen</li>
    </ol>
</HeadlineText>;

export const List = Template2.bind({});


// start
const Template3 = (args) => <HeadlineText {...args} >
    <h2>Inline Text Elements</h2>

    <h5>Highlight : mark tag</h5>
    <p>You can use the mark tag to <mark>highlight</mark> text.</p>

    <h5>Deleted part: del tag</h5>
    <p><del>This line of text is meant to be treated as deleted text.</del></p>

    <h5>Mark up text that is no longer correct: s tag</h5>
    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>

    <h5>A text with  a new, inserted part: ins tag</h5>
    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>

    <h5>Mark up a misspelled word with the u tag:</h5>
    <p><u>This line of text will render as underlined</u></p>

    <h5>Define a smaller text:</h5>
    <p><small>This line of text is meant to be treated as fine print.</small></p>

    <h5>Define important text in a document:</h5>
    <p><strong>This line rendered as bold text.</strong></p>

    <h5>Mark up emphasized text in a document:</h5>
    <p><em>This line rendered as italicized text.</em></p>

    <h5>Superscript text:</h5>
    <p>This text contains <sup>superscript</sup> text.</p>

    <h5>Subscript text:</h5>
    <p>This text contains <sub>subscript</sub> text.</p>
</HeadlineText>;

export const HeadlineTextLineThrough = Template3.bind({});

// Start
const Template4 = (args) => <HeadlineText {...args} >
    <blockquote cite="http://www.worldwildlife.org/who/index.html">
        For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
                 </blockquote>
    <p>Current AEM RTE implementation: <a href="#"> Lorem ipsum dolor</a></p>
    <p><b>I am RTE - Bold</b></p>
    <p><i>I am RTE - Italic</i></p>
    <p><u>I am RTE - Underline</u></p>
    <p style={{ textAlign: "left" }}>I am RTE - Align Text Left <a href="#"> Lorem ipsum dolor 11111111111111</a></p>
    <p style={{ textAlign: "center" }}>I am RTE - Center Text</p>
    <p style={{ textAlign: "right" }}>I am RTE - Align Text Right</p>
    <p style={{ textAlign: "left" }}><a title="Alt Text"
        href="http://localhost:4502/editor.html/content/abbvie-haematologie/de/components/atoms/a0110-text.html#"
        target="_blank">I am RTE - Hyperlink</a></p>
    <p style={{ textAlign: "left" }}>I am RTE - Anchor</p>
    <p style={{ textAlign: "left" }}>I am RTE<sup>Superscript</sup></p>
    <p style={{ textAlign: "left" }}>I am RTE<sub>subscript</sub></p>
    <p style={{ textAlign: "left" }}>I am RTE - Paragraph</p>
    <h1>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 1<sup>4</sup>  <a href="#"> Lorem ipsum dolor 11111111111111</a></h1>
    <h2>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 2<sup>4</sup></h2>
    <h3>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 3<sup>4</sup></h3>
    <h4>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 4<sup>4</sup></h4>
    <p>RTE List Bullet:</p>
    <ul>
        <li><span className="">I am RTE-A</span></li>
        <li>I am RTE-B
                    <ul>
                <li>I am RTE-B1 <a href="#"> Lorem ipsum dolor 11111111111111</a></li>
                <li>I am RTE-B2</li>
                <li>I am RTE-B3</li>
            </ul>
        </li>
        <li>I am RTE-C</li>
    </ul>
    <p>RTE List Number:
                    <br></br>
    </p>
    <ol>
        <li>I am RTE1</li>
        <li>I am RTE2
                    <ol>
                <li>I am RTE2.1</li>
                <li>I am RTE2.2</li>
                <li>I am RTE2.3</li>
            </ol>
        </li>
        <li>I am RTE3</li>
    </ol>

    <section className='cmp-text section'>
        <h1>A0110 / TEXT</h1>
        <h1>Überschrift<sup>h1</sup> (h1) <sup>1, 2, 3, 4</sup></h1>
        <h2>Überschrift<sup>h2</sup> (h2) <sup>5, 6, 7</sup></h2>
        <h3>Überschrift<sup>h3</sup> (h3) <sup>8, 9</sup></h3>
        <h4>Überschrift<sup>h4</sup> (h4) <sup>10</sup></h4>
        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi
        exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit
        ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,
        excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.
        Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,
        excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.
                        Fugit ipsam, vel.</p>
        <p>A list:</p>
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three
                        <ul>
                    <li>four</li>
                    <li>five</li>
                    <li>six
                            <ul>
                            <li>seven</li>
                            <li>eight</li>
                            <li>nine
                                <ul>
                                    <li>ten</li>
                                    <li>eleven</li>
                                    <li>twelve</li>
                                </ul>
                            </li>
                            <li>thirteen</li>
                        </ul>
                    </li>
                    <li>fourteen</li>
                </ul>
            </li>
            <li>fifteen</li>
            <li>sixteen</li>
        </ul>
        <p>An enumeration:</p>
        <ol>
            <li>one</li>
            <li>two</li>
            <li>three
                        <ol>
                    <li>four</li>
                    <li>five</li>
                    <li>six
                            <ol>
                            <li>seven</li>
                            <li>eight</li>
                            <li>nine
                                <ol>
                                    <li>ten</li>
                                    <li>eleven</li>
                                    <li>twelve</li>
                                </ol>
                            </li>
                            <li>thirteen</li>
                        </ol>
                    </li>
                    <li>fourteen</li>
                </ol>
            </li>
            <li>fifteen</li>
            <li>sixteen</li>
        </ol>
        <p>Checklist</p>
        <ul className='checklist'>
            <li className='checked'>Checked Lsit Item</li>
            <li className='unchecked'>unchecked Lsit Item</li>
        </ul>
        <h3>h3</h3>
        <ul>
            <li><a href="#">Link 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore
            doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque
                            quibusdam totam. Fugit ipsam, vel.</a></li>
            <li><a href="#">Link 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore
                            doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis.</a></li>
            <li><a href="#">Link 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore
            doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque
            quibusdam totam. Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis
            dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque
                            eaque quibusdam totam. Fugit ipsam, vel.</a></li>
            <li><a href="#">Link 4</a></li>
            <li><a href="#">...</a></li>
        </ul>
        <h2>h2</h2>
        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#">Commodi, eligendi error
                        incidunt ipsam nam natus</a> repellat veritatis voluptate voluptates. Aperiam consequuntur dolores doloribus
                        ducimus iure, perspiciatis qui ratione repudiandae rerum!</p>
        <ul>
            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Aliquam, aspernatur autem blanditiis enim
                        eos esse eveniet exercitationem facilis fugit id minus neque optio quam quis quos rerum sunt temporibus totam.
                        </li>
            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Amet doloremque eum expedita id nemo omnis
                        recusandae tempora tempore veniam vitae! Ab deleniti maiores natus non odit reiciendis sint tenetur voluptate.
                        </li>
            <li><i>Lorem ipsum</i>: Dolor sit amet, consectetur adipisicing elit. Amet consectetur consequatur ea earum eius
                        eveniet laborum laudantium nam, nemo nisi nostrum numquam odit perferendis perspiciatis quo repellat
                        repudiandae sequi. Nisi?</li>
        </ul>
        <h2>Kontaktdaten und Richtlinienaktualisierungen</h2>
        <h3>Wie kann ich zu AbbVie Kontakt aufnehmen?</h3>
        <p>Wenn Sie Fragen zur Nutzung, Änderung oder Löschung der an uns bereitgestellten personenbezogenen Daten haben
        oder zukünftige Mitteilungen von AbbVie oder eines bestimmten AbbVie-Programms ablehnen möchten, kontaktieren
                        Sie uns, indem Sie einen „Kontakt“-Link auf der besuchten Webseite anklicken, oder senden Sie eine E-Mail an <a
                href="mailto:info.de@abbvie.com">info.de(at)abbvie(dot)com</a>. Bezüglich der Verarbeitung Ihrer
                        personenbezogenen Daten können Sie sich auch direkt mit dem Datenschutzbeauftragten unter <a
                href="mailto:datenschutz.de@abbvie.com">datenschutz.de(at)abbvie(dot)com</a> in Verbindung setzen. Sie können
                        auch ein Schreiben an folgende Adresse richten oder sich telefonisch mit uns in Verbindung setzen:</p>
        <p>
            AbbVie Deutschland GmbH & Co. KG<br></br>
                        Mainzer Straße 81<br></br>
                        65189 Wiesbaden<br></br>
                        eMail: <a href="mailto:info.de@abbvie.com">info.de(at)abbvie(dot)com</a><br></br>
                        Tel.: +49 (0)611 1720 - 0<br></br>
                        Fax.: +49 (0)611 1720 1244
                    </p>
        <p>Geben Sie bitte in Ihren Mitteilungen an uns die für die Registrierung verwendete E-Mail-Adresse (sofern
        zutreffend), die URL der Webseite oder das AbbVie-Programm, für das Sie personenbezogene Daten eingegeben haben
                        (z. B. www.AbbVie.de usw.) sowie eine detaillierte Beschreibung Ihres Anliegens an.</p>
        <h3>Wie erfahre ich, ob AbbVie diese Datenschutzrichtlinie aktualisiert hat?</h3>
        <p>Unbeschadet Ihrer Rechte nach geltendem Gesetz behält sich AbbVie vor, diese Datenschutzrichtlinie zu ändern
        und zu versionieren, um technischen Weiterentwicklungen, Gesetzesänderungen und Vorschriften und guten
                        Geschäftspraktiken zu genügen.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem ipsum iste laboriosam qui, quia
                        repellendus vel! A at ducimus esse illo incidunt nostrum optio quas repudiandae rerum, velit. Tempora.</p>
        <h1>h1 Strukturnachbildung</h1>
        <h2>h2 Unterüberschrift</h2>
        <h3>1. h3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat
        reprehenderit repudiandae vitae. Aperiam blanditiis distinctio earum ex impedit iure labore natus, nihil
                        similique ut voluptas.</p>
        <h3>2. h3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores cumque deleniti dolorum eveniet
        fugiat iure iusto laboriosam magni nam nemo nulla optio provident quasi rem rerum temporibus, velit veritatis.
                    </p>
        <h3>3. h3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero
                        maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</p>
        <p>usw.</p>
        <h1>Listen</h1>
        <h2>ul</h2>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quaerat, repudiandae. Ad in perspiciatis
            tempore? Aliquam aliquid consequatur consequuntur est ex, inventore itaque maxime numquam, possimus
                        praesentium reiciendis, sequi vero.</li>
            <li>Aspernatur deleniti, distinctio doloribus eum ex iusto nemo nesciunt quasi qui quisquam repudiandae saepe
            voluptatibus. Dignissimos enim, et exercitationem fugit harum molestias necessitatibus nesciunt omnis quo
                        recusandae sint tenetur totam.</li>
            <li>Excepturi ipsum minus odit officia reiciendis, rerum! Architecto deserunt dicta esse ex excepturi fugiat id
            magni, nostrum odio optio quaerat recusandae repellat saepe sequi suscipit tempore ut veniam veritatis
                        voluptas.</li>
        </ul>
        <h2>ol</h2>
        <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias dignissimos doloremque eius enim esse
            illo incidunt, laborum neque nisi, nulla obcaecati officiis pariatur possimus quia quisquam, vitae. Hic,
                        sapiente?</li>
            <li>Aperiam atque, et ex laboriosam praesentium soluta? Ad architecto assumenda consectetur deserunt dolorem
            ducimus ea enim excepturi ipsa, minima mollitia neque, officiis quo quod recusandae, repellat tempora? Aperiam
                        eos, inventore.</li>
            <li>Aperiam culpa cum eius neque soluta! Alias aliquam aliquid, architecto culpa doloribus ea eligendi eveniet
            excepturi iusto magni maiores pariatur quam quas repellat repellendus saepe tenetur totam ut, veritatis
                        voluptatem?</li>
        </ol>
        <br></br>
        <h2>Inline Text Elements</h2>
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
        <br></br>
        <h2>Copytext Test</h2>
        <p>Copytext. Lorem Impsum. Das ist ein <a href="#" title="TITLE">Link im Fließtext</a>. Dieses Wort ist
                        <em>betont</em> (em). Dieses Wort ist <i>kursiv</i> (i). Dieses Wort ist <strong>stark betont</strong> (strong).
                        Dieses Wort ist <b>fett</b> (b). Dieses Wort ist <sup>hochgestellt</sup> (sup). Dieses Wort ist
                        <sub>tiefgestellt</sub> (sub).</p>
        <br></br>
        <h2>Special Chars Test</h2>
        <p><a
            href="http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle">http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle</a>
        </p>
        <p>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz, 0123456789<br></br>
                        1234567890„"@!""§$ %{"&"}/()=?{[]} \*+~'#{'>'}{"<"}-,;.:éè-äöu »«ß<br></br>
                        öäüÖÄÜ!"§$%{"&"}/()=?@€,;.:-_+*~#'²³{[]}<br></br>
                        ®™</p>
        <br></br>
        <h2>Footnotes (simulation)</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dicta eveniet ipsam labore laborum maiores,
        nihil officia quisquam quo repellat sit suscipit ullam unde ut veritatis vero. Consequatur,
                        exercitationem?<sup>42</sup></p>
        <p>Nachweis der 17p-Deletion mittels Vysis CLL FISH Sonden Kit.<sup>1,2</sup></p>
        <p>† Die mediane Zeit unter Therapie zum Zeitpunkt der Beurteilung betrug 12 Monate (Spannweite: 0 – 22
                        Monate).<sup>1,2</sup></p>
        <p>‡ Die Wirksamkeitsbeurteilung durch den Prüfer wird für 158 Patienten (Expansionskohorte zum Thema Sicherheit)
        gezeigt. Die mediane Behandlungsdauer für diese 158 Patienten betrug 17 Monate (Spannweite: 0 – 34
                        Monate).<sup>1</sup></p>
        <p>†, ‡, ♥, ♠, ♣, ♦</p>
    </section>
</HeadlineText>;

export const HeadlineTextLine = Template4.bind({});

// start
const Template5 = (args) => <HeadlineText {...args} >
    <p><span className="text-circle">4</span> <span className="text-question"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>
</HeadlineText>;

