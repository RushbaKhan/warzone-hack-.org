import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'warzone hacks',
		title: 'warzone hacks gallery',
		subtitle: 'Simple warzone hacks visuals — ESP, wallhack, aimbot, and radar for Call of Duty: Warzone on PC.',
		lead: 'Warzone Hacks helps you spot operators, AI soldiers, loot, and extracts with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'warzone hacks esp', copy: 'See players through walls with warzone hacks esp and wallhack overlays.' },
			{ title: 'warzone hacks radar', copy: 'Track nearby threats with warzone hacks radar before you push or extract.' },
			{ title: 'warzone hacks aimbot', copy: 'Use soft aim and aimbot controls tuned for Warzone matches on Windows PC.' },
		],
		updatesLabel: 'warzone hacks updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Warzone Hacks',
		title: 'Galería Call of Duty: Warzone',
		subtitle: 'Visuales de Call of Duty: Warzone con loadouts, peleas de escuadrón y combate raid — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Warzone Hacks está pensado para el loop BR de Call of Duty: Warzone: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Verdansk y Resurgence para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Call of Duty: Warzone', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Warzone Hacks',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Warzone Hacks',
		title: 'Galerie Call of Duty: Warzone',
		subtitle: 'Visuels Call of Duty: Warzone — loadouts, combats d\'escouade et raid — avec ESP, radar et Aimbot.',
		lead: 'Warzone Hacks suit la boucle BR de Call of Duty: Warzone : lire la carte, suivre les escouades, loot et survivre au extract.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Verdansk et Resurgence pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Call of Duty: Warzone', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Warzone Hacks',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Warzone Hacks',
		title: 'Call of Duty: Warzone Galerie',
		subtitle: 'Call of Duty: Warzone-Bilder zu Loadouts, Squad-Kämpfen und raid — mit ESP, Radar und Aimbot.',
		lead: 'Warzone Hacks passt zur Raid-Schleife von Call of Duty: Warzone: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Verdansk und Resurgence für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Call of Duty: Warzone Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Warzone Hacks Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Warzone Hacks',
		title: 'Galeria Call of Duty: Warzone',
		subtitle: 'Visuais de Call of Duty: Warzone com loadouts, combates de esquadrão e raid — com ESP, radar e Aimbot.',
		lead: 'Warzone Hacks segue o loop BR do Call of Duty: Warzone: ler o mapa, rastrear esquadrões, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Verdansk e Resurgence para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Call of Duty: Warzone', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Warzone Hacks',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Warzone Hacks',
		title: 'Galleria Call of Duty: Warzone',
		subtitle: 'Immagini Call of Duty: Warzone — loadout, scontri di squadra e raid — con ESP, radar e Aimbot.',
		lead: 'Warzone Hacks è pensato per il loop BR di Call of Duty: Warzone: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Verdansk e Resurgence per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Call of Duty: Warzone', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Warzone Hacks',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Warzone Hacks',
		title: 'Call of Duty: Warzone galerij',
		subtitle: 'Call of Duty: Warzone-beelden van loadouts, squadgevechten en raid — met ESP, radar en Aimbot.',
		lead: 'Warzone Hacks volgt de raid-loop va Call of Duty: Warzone: kaart lezen, vijandelijke squads volgen, looten en de extract overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Customs en Resurgence voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Call of Duty: Warzone Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Warzone Hacks updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Warzone Hacks',
		title: 'Galeria Call of Duty: Warzone',
		subtitle: 'Grafiki Call of Duty: Warzone — loadouty, walki drużynowe i raid — z ESP, radar i Aimbot.',
		lead: 'Warzone Hacks pasuje do pętli BR Call of Duty: Warzone: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Verdansk i Resurgence dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Call of Duty: Warzone', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Warzone Hacks',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Warzone Hacks',
		title: 'Галерея Call of Duty: Warzone',
		subtitle: 'Визуалы Call of Duty: Warzone — лоадауты, бои отрядов и raid — с ESP, радаром и Aimbot.',
		lead: 'Warzone Hacks создан для рейд-циклу Call of Duty: Warzone: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Verdansk и Resurgence для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Call of Duty: Warzone', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Warzone Hacks',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Warzone Hacks',
		title: 'Call of Duty: Warzone galerisi',
		subtitle: 'Loadout, takım savaşları ve raid görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Warzone Hacks, Call of Duty: Warzone BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Verdansk ve Resurgence\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Call of Duty: Warzone Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Warzone Hacks güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Warzone Hacks',
		title: 'معرض Call of Duty: Warzone',
		subtitle: 'صور Call of Duty: Warzone — loadouts ومعارك الفرق وraid — مع ESP ورادار وAimbot.',
		lead: 'Warzone Hacks مبني لحلقة BR في Call of Duty: Warzone: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Customs وResurgence لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Call of Duty: Warzone', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Warzone Hacks',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Warzone Hacks',
		title: 'Call of Duty: Warzone ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのCall of Duty: Warzoneビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Warzone HacksはCall of Duty: WarzoneのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'VerdanskとResurgenceで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Call of Duty: Warzoneエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Warzone Hacks更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Warzone Hacks',
		title: 'Call of Duty: Warzone 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Call of Duty: Warzone 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Warzone Hacks는 Call of Duty: Warzone BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Verdansk와 Resurgence에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Call of Duty: Warzone 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Warzone Hacks 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Warzone Hacks',
		title: 'Call of Duty: Warzone 图库',
		subtitle: 'Call of Duty: Warzone 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Warzone Hacks 为 Call of Duty: Warzone BR 循环设计：读图、追踪敌方小队、搜刮并在 extract 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Verdansk 和 Resurgence 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Call of Duty: Warzone 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Warzone Hacks 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Warzone Hacks',
		title: 'Call of Duty: Warzone गैलरी',
		subtitle: 'Loadout, squad fights और raid visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Warzone Hacks Call of Duty: Warzone BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और extract survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Customs और Resurgence पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Call of Duty: Warzone Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Warzone Hacks updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Warzone Hacks',
		title: 'Galeri Call of Duty: Warzone',
		subtitle: 'Visual Call of Duty: Warzone — loadout, pertempuran squad, dan raid — dengan ESP, radar, dan Aimbot.',
		lead: 'Warzone Hacks untuk loop BR Call of Duty: Warzone: baca peta, lacak squad musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Customs dan Resurgence untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Call of Duty: Warzone', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Warzone Hacks',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Warzone Hacks',
		title: 'แกลเลอรี Call of Duty: Warzone',
		subtitle: 'ภาพ Call of Duty: Warzone — loadout การต่อสู้ทีม และ raid — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Warzone Hacks สำหรับลูป BR ของ Call of Duty: Warzone: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Customs และ Resurgence เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Call of Duty: Warzone', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Warzone Hacks',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Warzone Hacks',
		title: 'Thư viện Call of Duty: Warzone',
		subtitle: 'Hình ảnh Call of Duty: Warzone — loadout, chiến đấu squad và raid — với ESP, radar và Aimbot.',
		lead: 'Warzone Hacks cho vòng BR Call of Duty: Warzone: đọc bản đồ, theo dõi squad địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Customs và Resurgence để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Call of Duty: Warzone', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Warzone Hacks',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Warzone Hacks',
		title: 'Галерея Call of Duty: Warzone',
		subtitle: 'Візуали Call of Duty: Warzone — loadout, бої загонів і raid — з ESP, радаром і Aimbot.',
		lead: 'Warzone Hacks для рейд-циклу Call of Duty: Warzone: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Customs і Resurgence для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Call of Duty: Warzone', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Warzone Hacks',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Warzone Hacks',
		title: 'Galerie Call of Duty: Warzone',
		subtitle: 'Call of Duty: Warzone vizuály — loadouty, squad souboje a match — s ESP, radarem a Aimbot.',
		lead: 'Warzone Hacks pro BR smyčku Call of Duty: Warzone: číst mapu, sledovat nepřátelské squady, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Customs a Resurgence pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Call of Duty: Warzone', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Warzone Hacks',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Warzone Hacks',
		title: 'Galerie Call of Duty: Warzone',
		subtitle: 'Vizualuri Call of Duty: Warzone — loadout, lupte de squad și raid — cu ESP, radar și Aimbot.',
		lead: 'Warzone Hacks pentru bucla BR Call of Duty: Warzone: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Customs și Resurgence pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Call of Duty: Warzone', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Warzone Hacks',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Warzone Hacks',
		title: 'Call of Duty: Warzone galleri',
		subtitle: 'Call of Duty: Warzone-bilder — loadouts, squadstrider och raid — med ESP, radar och Aimbot.',
		lead: 'Warzone Hacks för Call of Duty: Warzone:s raid-loop: läs kartan, spåra fiendesquads, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Customs och Resurgence för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Call of Duty: Warzone Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Warzone Hacks uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
