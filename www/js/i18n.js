/**
 * DailyFlow - Internationalization (i18n) Module
 * Supported Languages: English (en), Türkçe (tr), Português (pt), Deutsch (de), Français (fr), Nederlands (nl)
 */

const SUPPORTED_LANGUAGES = ["en", "tr", "pt", "de", "fr", "nl"];
const DEFAULT_LANGUAGE = "en";

const translations = {
  en: {
    // Navigation & Sidebar
    navDashboard: "Dashboard / Tasks",
    navFocus: "Pomodoro Focus",
    navFinance: "Finance Tracker",
    navPrivacy: "Privacy Policy",
    sidebarNavigation: "Navigation",
    openNavigation: "Open navigation",
    closeNavigation: "Close navigation",
    chooseTheme: "Choose theme",
    selectLanguage: "Select language",

    // Dashboard Quick Notes & This Week
    quickNotesEyebrow: "QUICK NOTES",
    quickNotesPlaceholder: "Write something to remember...",
    calendarEyebrow: "THIS WEEK",
    calendarTagline: "Plan · Focus · Achieve",

    // Stats Grid
    statTotalTasks: "total tasks",
    statInProgress: "in progress",
    statCompleted: "completed",

    // Tasks Panel & Form
    tasksTitle: "Tasks",
    listDescription: "Planned for today",
    tasksRemainingSingle: "1 task remaining",
    tasksRemainingPlural: "{n} tasks remaining",
    clearCompleted: "Clear completed",
    newTaskPlaceholder: "Add a new task...",
    priorityLow: "Low priority",
    priorityMedium: "Medium priority",
    priorityHigh: "High priority",
    priorityLowShort: "Low",
    priorityMedShort: "Med",
    priorityHighShort: "High",
    addBtn: "Add",
    filterAll: "All",
    filterActive: "Active",
    filterCompleted: "Completed",
    searchPlaceholder: "Search tasks...",
    emptyStateTitle: "All caught up",
    emptyStateDesc: "You can start by adding a new task.",

    // Web Download Card
    webDownloadBadge: "GOOGLE PLAY",
    webDownloadTitle: "Get DailyFlow for Android",
    webDownloadDesc: "Organize your tasks, focus timers, and budget directly on your phone.",
    gpTagline: "GET IT ON",

    // Schedule / Calendar Modal
    calendarScheduleEyebrow: "SCHEDULE",
    calendarTitle: "Select date and time",
    tabDate: "Date",
    tabTime: "Time",
    presetToday: "Today",
    presetTomorrow: "Tomorrow",
    presetWeekend: "This Weekend",
    resetToToday: "Reset to Today",
    hourColLabel: "Hour (1-12)",
    minuteColLabel: "Minute (00-59)",
    calendarNoteLabel: "Add note",
    calendarNotePlaceholder: "Write a note for this time...",
    saveToTasks: "Save to Tasks",
    savedCheck: "Saved ✓",
    selectionSummaryDefault: "Today at 10:00 AM",
    summaryAt: "at",
    taskSavedWithAlarm: "Saved & Alarm set 🔔",
    taskSavedToTasks: "Saved to Tasks.",

    // Pomodoro Focus View
    focusBack: "← Dashboard",
    pomodoroEyebrow: "DAILYFLOW FOCUS",
    pomodoroTitle: "Pomodoro Focus",
    modeClassic: "Classic",
    modeStudy: "Study",
    modeDeepWork: "Deep Work",
    pomodoroStatusFocus: "Focus Time",
    pomodoroStatusBreak: "Break Time",
    pomodoroStart: "Start",
    pomodoroPause: "Pause",
    pomodoroResume: "Resume",
    pomodoroReset: "Reset",

    // Finance View
    financeBack: "← Dashboard",
    financeEyebrow: "MONEY CONTROL",
    financeTitle: "Finance Tracker",
    financeSubtitle: "Keep your everyday spending visible and intentional.",
    financeBadge: "EXPENSES",
    budgetLabel: "Budget:",
    budgetSet: "Set",
    budgetEditorTitle: "🎯 Monthly Budget",
    budgetInputPlaceholder: "Set monthly budget",
    budgetSave: "Save Budget",
    budgetClear: "Clear",
    budgetRemaining: "{amount} remaining",
    budgetOverBy: "Over budget by {amount} ({pct}%)",
    financeThisMonth: "This month",
    financeStatusNoBudget: "Set a monthly budget",
    expenseTitlePlaceholder: "Expense title (e.g. Groceries)",
    expenseAmountPlaceholder: "Amount",
    financeAddExpense: "Add Expense",
    recentExpenses: "Recent expenses",
    financeItemCountSingle: "item",
    financeItemCountPlural: "items",
    financeEmpty: "No expenses yet.",
    expenseToastDeleted: "Expense deleted",
    undo: "Undo",

    // Expense Categories
    categoryTransfers: "Transfers",
    categoryShopping: "Shopping",
    categoryFood: "Food & Beverages",
    categoryUtility: "Utility/Bills",
    categoryEntertainment: "Entertainment",
    categoryVacation: "Vacation",

    // Custom Date Picker
    dpSelectDate: "Select date",
    dpMonths: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ],
    dpWeekdays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    calendarWeekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dpClear: "Clear",
    dpToday: "Today",

    // Theme Modal
    themePickerEyebrow: "PERSONALIZE YOUR FLOW",
    themePickerTitle: "Theme Picker",
    themePickerCopy: "Match your workspace to the mood you want to work in.",
    themeDefaultTitle: "Default Light Sage",
    themeDefaultSub: "Soft & calm",
    themeDarkTitle: "Dark Sage",
    themeDarkSub: "Deep & focused",
    themeMatchaTitle: "Matcha Garden 🌸",
    themeMatchaSub: "Fresh & botanical",
    themeCafeTitle: "Café Royal ♠️",
    themeCafeSub: "Warm & vintage",
    themeUnlockBadge: "🔒 Unlock for 24 Hours",
    themeConfirmCancel: "Cancel",
    themeWatchAd: "Watch ad & unlock",
    themeConfirmTitle: "A little more green today?",
    themeConfirmCopy: "Watch a short ad to use this theme for 24 hours.",
    themeAdTitle: "Your garden is getting ready",
    themeAdCopy: "The theme will unlock when the short ad simulation ends.",

    // Privacy Policy Modal
    privacyBadge: "Privacy & Data Security",
    privacyTitle: "Privacy Policy",
    privacySubtitle: "DailyFlow is built with an offline-first, zero-tracking philosophy.",
    privacyCard1Title: "100% Local Device Storage",
    privacyCard1Desc: "All your tasks, daily quick notes, Pomodoro records, and finance transactions are saved exclusively on your local device storage. Your personal information never leaves your phone or browser.",
    privacyCard2Title: "Zero Tracking & No Remote Servers",
    privacyCard2Desc: "DailyFlow does not operate remote user tracking databases or transmit telemetry. We never collect, monitor, share, or sell any personal or financial data to third parties.",
    privacyCard3Title: "On-Device Local Notifications",
    privacyCard3Desc: "Task reminders and alarms are scheduled directly through your device's operating system (Local Notifications). No external cloud servers receive or process your reminder schedule.",
    privacyCard4Title: "Complete User Ownership",
    privacyCard4Desc: "You have full sovereignty over your data at all times. Clearing application data or uninstalling the app permanently purges all stored entries from your device.",
    privacyFooterNote: "Questions or inquiries about our privacy practices? Contact us at"
  },

  tr: {
    // Navigation & Sidebar
    navDashboard: "Gösterge Paneli / Görevler",
    navFocus: "Pomodoro Odak",
    navFinance: "Finans Takibi",
    navPrivacy: "Gizlilik Politikası",
    sidebarNavigation: "Navigasyon",
    openNavigation: "Menüyü aç",
    closeNavigation: "Menüyü kapat",
    chooseTheme: "Tema seç",
    selectLanguage: "Dil seçin",

    // Dashboard Quick Notes & This Week
    quickNotesEyebrow: "HIZLI NOTLAR",
    quickNotesPlaceholder: "Hatırlamak için bir şeyler yaz...",
    calendarEyebrow: "BU HAFTA",
    calendarTagline: "Planla · Odaklan · Başar",

    // Stats Grid
    statTotalTasks: "toplam görev",
    statInProgress: "devam eden",
    statCompleted: "tamamlanan",

    // Tasks Panel & Form
    tasksTitle: "Görevler",
    listDescription: "Bugün için planlandı",
    tasksRemainingSingle: "1 görev kaldı",
    tasksRemainingPlural: "{n} görev kaldı",
    clearCompleted: "Tamamlananları temizle",
    newTaskPlaceholder: "Yeni bir görev ekle...",
    priorityLow: "Düşük öncelik",
    priorityMedium: "Orta öncelik",
    priorityHigh: "Yüksek öncelik",
    priorityLowShort: "Düşük",
    priorityMedShort: "Orta",
    priorityHighShort: "Yüksek",
    addBtn: "Ekle",
    filterAll: "Tümü",
    filterActive: "Aktif",
    filterCompleted: "Tamamlanan",
    searchPlaceholder: "Görevlerde ara...",
    emptyStateTitle: "Her şey tamam",
    emptyStateDesc: "Yeni bir görev ekleyerek başlayabilirsiniz.",

    // Web Download Card
    webDownloadBadge: "GOOGLE PLAY",
    webDownloadTitle: "DailyFlow'u Android için İndir",
    webDownloadDesc: "Görevlerinizi, odak sayaçlarınızı ve bütçenizi doğrudan telefonunuzda yönetin.",
    gpTagline: "HEMEN İNDİRİN",

    // Schedule / Calendar Modal
    calendarScheduleEyebrow: "PLANLAMA",
    calendarTitle: "Tarih ve saat seçin",
    tabDate: "Tarih",
    tabTime: "Saat",
    presetToday: "Bugün",
    presetTomorrow: "Yarın",
    presetWeekend: "Bu Hafta Sonu",
    resetToToday: "Bugüne Sıfırla",
    hourColLabel: "Saat (1-12)",
    minuteColLabel: "Dakika (00-59)",
    calendarNoteLabel: "Not ekle",
    calendarNotePlaceholder: "Bu zaman için bir not yazın...",
    saveToTasks: "Görevlere Kaydet",
    savedCheck: "Kaydedildi ✓",
    selectionSummaryDefault: "Bugün saat 10:00",
    summaryAt: "saat",
    taskSavedWithAlarm: "Kaydedildi & Hatırlatıcı kuruldu 🔔",
    taskSavedToTasks: "Görevlere kaydedildi.",

    // Pomodoro Focus View
    focusBack: "← Gösterge Paneli",
    pomodoroEyebrow: "DAILYFLOW ODAK",
    pomodoroTitle: "Pomodoro Odak",
    modeClassic: "Klasik",
    modeStudy: "Ders",
    modeDeepWork: "Derin Odak",
    pomodoroStatusFocus: "Odaklanma Zamanı",
    pomodoroStatusBreak: "Mola Zamanı",
    pomodoroStart: "Başlat",
    pomodoroPause: "Duraklat",
    pomodoroResume: "Devam Et",
    pomodoroReset: "Sıfırla",

    // Finance View
    financeBack: "← Gösterge Paneli",
    financeEyebrow: "PARA YÖNETİMİ",
    financeTitle: "Finans Takibi",
    financeSubtitle: "Günlük harcamalarınızı görünür ve kontrollü tutun.",
    financeBadge: "HARCAMALAR",
    budgetLabel: "Bütçe:",
    budgetSet: "Ayarla",
    budgetEditorTitle: "🎯 Aylık Bütçe",
    budgetInputPlaceholder: "Aylık bütçeyi girin",
    budgetSave: "Bütçeyi Kaydet",
    budgetClear: "Temizle",
    budgetRemaining: "{amount} kaldı",
    budgetOverBy: "Bütçe {amount} aşıldı (%{pct})",
    financeThisMonth: "Bu ay",
    financeStatusNoBudget: "Aylık bir bütçe belirleyin",
    expenseTitlePlaceholder: "Harcama başlığı (örn. Market)",
    expenseAmountPlaceholder: "Tutar",
    financeAddExpense: "Harcama Ekle",
    recentExpenses: "Son harcamalar",
    financeItemCountSingle: "harcama",
    financeItemCountPlural: "harcama",
    financeEmpty: "Henüz harcama yok.",
    expenseToastDeleted: "Harcama silindi",
    undo: "Geri Al",

    // Expense Categories
    categoryTransfers: "Transferler",
    categoryShopping: "Alışveriş",
    categoryFood: "Yiyecek & İçecek",
    categoryUtility: "Faturalar",
    categoryEntertainment: "Eğlence",
    categoryVacation: "Tatil",

    // Custom Date Picker
    dpSelectDate: "Tarih seç",
    dpMonths: [
      "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
      "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ],
    dpWeekdays: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],
    calendarWeekdays: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
    dpClear: "Temizle",
    dpToday: "Bugün",

    // Theme Modal
    themePickerEyebrow: "AKIŞINI KİŞİSELLEŞTİR",
    themePickerTitle: "Tema Seçici",
    themePickerCopy: "Çalışma alanınızı modunuza uygun hale getirin.",
    themeDefaultTitle: "Varsayılan Açık Adaçayı",
    themeDefaultSub: "Yumuşak & sakin",
    themeDarkTitle: "Koyu Adaçayı",
    themeDarkSub: "Derin & odaklı",
    themeMatchaTitle: "Matcha Bahçesi 🌸",
    themeMatchaSub: "Taze & botanik",
    themeCafeTitle: "Café Royal ♠️",
    themeCafeSub: "Sıcak & nostaljik",
    themeUnlockBadge: "🔒 24 Saatliğine Aç",
    themeConfirmCancel: "İptal",
    themeWatchAd: "Reklam izle & aç",
    themeConfirmTitle: "Bugün biraz daha mı yeşil?",
    themeConfirmCopy: "Bu temayı 24 saat kullanmak için kısa bir reklam izleyin.",
    themeAdTitle: "Bahçeniz hazırlanıyor",
    themeAdCopy: "Kısa reklam simülasyonu bittiğinde tema açılacaktır.",

    // Privacy Policy Modal
    privacyBadge: "Gizlilik & Veri Güvenliği",
    privacyTitle: "Gizlilik Politikası",
    privacySubtitle: "DailyFlow, önce-çevrimdışı ve sıfır-takip felsefesiyle inşa edilmiştir.",
    privacyCard1Title: "%100 Yerel Cihaz Depolaması",
    privacyCard1Desc: "Tüm görevleriniz, günlük hızlı notlarınız, Pomodoro kayıtlarınız ve finans işlemleriniz yalnızca yerel cihaz depolamanızda saklanır. Kişisel bilgileriniz telefonunuzu veya tarayıcınızı asla terk etmez.",
    privacyCard2Title: "Sıfır Takip & Uzak Sunucu Yok",
    privacyCard2Desc: "DailyFlow harici kullanıcı takip veritabanları işletmez ve telemetri göndermez. Kişisel veya finansal verileriniz asla toplanmaz, izlenmez, paylaşılmaz veya üçüncü taraflara satılmaz.",
    privacyCard3Title: "Cihaz İçi Yerel Bildirimler",
    privacyCard3Desc: "Görev hatırlatıcıları ve alarmlar doğrudan cihazınızın işletim sistemi (Yerel Bildirimler) üzerinden zamanlanır. Hiçbir harici bulut sunucusu hatırlatma takviminizi almaz veya işlemez.",
    privacyCard4Title: "Kullanıcıya Ait Tam Kontrol",
    privacyCard4Desc: "Verileriniz üzerinde her zaman tam kontrole sahipsiniz. Uygulama verilerini temizlemek veya uygulamayı kaldırmak, depolanan tüm kayıtları cihazınızdan kalıcı olarak siler.",
    privacyFooterNote: "Gizlilik uygulamalarımızla ilgili soru veya talepleriniz için bize ulaşın:"
  },

  pt: {
    // Navigation & Sidebar
    navDashboard: "Painel / Tarefas",
    navFocus: "Foco Pomodoro",
    navFinance: "Controle Financeiro",
    navPrivacy: "Política de Privacidade",
    sidebarNavigation: "Navegação",
    openNavigation: "Abrir navegação",
    closeNavigation: "Fechar navegação",
    chooseTheme: "Escolher tema",
    selectLanguage: "Selecionar idioma",

    // Dashboard Quick Notes & This Week
    quickNotesEyebrow: "NOTAS RÁPIDAS",
    quickNotesPlaceholder: "Escreva algo para lembrar...",
    calendarEyebrow: "ESTA SEMANA",
    calendarTagline: "Planejar · Focar · Conquistar",

    // Stats Grid
    statTotalTasks: "total de tarefas",
    statInProgress: "em andamento",
    statCompleted: "concluídas",

    // Tasks Panel & Form
    tasksTitle: "Tarefas",
    listDescription: "Planejado para hoje",
    tasksRemainingSingle: "1 tarefa restante",
    tasksRemainingPlural: "{n} tarefas restantes",
    clearCompleted: "Limpar concluídas",
    newTaskPlaceholder: "Adicionar uma nova tarefa...",
    priorityLow: "Baixa prioridade",
    priorityMedium: "Média prioridade",
    priorityHigh: "Alta prioridade",
    priorityLowShort: "Baixa",
    priorityMedShort: "Média",
    priorityHighShort: "Alta",
    addBtn: "Adicionar",
    filterAll: "Todas",
    filterActive: "Ativas",
    filterCompleted: "Concluídas",
    searchPlaceholder: "Pesquisar tarefas...",
    emptyStateTitle: "Tudo em dia",
    emptyStateDesc: "Você pode começar adicionando uma nova tarefa.",

    // Web Download Card
    webDownloadBadge: "GOOGLE PLAY",
    webDownloadTitle: "Baixe o DailyFlow para Android",
    webDownloadDesc: "Organize suas tarefas, timers de foco e orçamento diretamente no celular.",
    gpTagline: "DISPONÍVEL NO",

    // Schedule / Calendar Modal
    calendarScheduleEyebrow: "AGENDAMENTO",
    calendarTitle: "Selecione data e hora",
    tabDate: "Data",
    tabTime: "Hora",
    presetToday: "Hoje",
    presetTomorrow: "Amanhã",
    presetWeekend: "Este fim de semana",
    resetToToday: "Redefinir para hoje",
    hourColLabel: "Hora (1-12)",
    minuteColLabel: "Minuto (00-59)",
    calendarNoteLabel: "Adicionar nota",
    calendarNotePlaceholder: "Escreva uma nota para este horário...",
    saveToTasks: "Salvar nas Tarefas",
    savedCheck: "Salvo ✓",
    selectionSummaryDefault: "Hoje às 10:00",
    summaryAt: "às",
    taskSavedWithAlarm: "Salvo e alarme definido 🔔",
    taskSavedToTasks: "Salvo nas tarefas.",

    // Pomodoro Focus View
    focusBack: "← Painel",
    pomodoroEyebrow: "DAILYFLOW FOCO",
    pomodoroTitle: "Foco Pomodoro",
    modeClassic: "Clássico",
    modeStudy: "Estudo",
    modeDeepWork: "Trabalho Profundo",
    pomodoroStatusFocus: "Tempo de Foco",
    pomodoroStatusBreak: "Tempo de Pausa",
    pomodoroStart: "Iniciar",
    pomodoroPause: "Pausar",
    pomodoroResume: "Retomar",
    pomodoroReset: "Redefinir",

    // Finance View
    financeBack: "← Painel",
    financeEyebrow: "CONTROLE FINANCEIRO",
    financeTitle: "Controle Financeiro",
    financeSubtitle: "Mantenha seus gastos diários visíveis e conscientes.",
    financeBadge: "DESPESAS",
    budgetLabel: "Orçamento:",
    budgetSet: "Definir",
    budgetEditorTitle: "🎯 Orçamento Mensal",
    budgetInputPlaceholder: "Definir orçamento mensal",
    budgetSave: "Salvar Orçamento",
    budgetClear: "Limpar",
    budgetRemaining: "{amount} restante",
    budgetOverBy: "Acima do orçamento por {amount} ({pct}%)",
    financeThisMonth: "Este mês",
    financeStatusNoBudget: "Defina um orçamento mensal",
    expenseTitlePlaceholder: "Título da despesa (ex: Mercado)",
    expenseAmountPlaceholder: "Valor",
    financeAddExpense: "Adicionar Despesa",
    recentExpenses: "Despesas recentes",
    financeItemCountSingle: "despesa",
    financeItemCountPlural: "despesas",
    financeEmpty: "Nenhuma despesa ainda.",
    expenseToastDeleted: "Despesa excluída",
    undo: "Desfazer",

    // Expense Categories
    categoryTransfers: "Transferências",
    categoryShopping: "Compras",
    categoryFood: "Alimentos e Bebidas",
    categoryUtility: "Contas/Serviços",
    categoryEntertainment: "Entretenimento",
    categoryVacation: "Férias",

    // Custom Date Picker
    dpSelectDate: "Selecionar data",
    dpMonths: [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ],
    dpWeekdays: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    calendarWeekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    dpClear: "Limpar",
    dpToday: "Hoje",

    // Theme Modal
    themePickerEyebrow: "PERSONALIZE SEU FLUXO",
    themePickerTitle: "Seletor de Temas",
    themePickerCopy: "Combine seu espaço de trabalho com a sua vibe de hoje.",
    themeDefaultTitle: "Sage Claro Padrão",
    themeDefaultSub: "Suave e calmo",
    themeDarkTitle: "Sage Escuro",
    themeDarkSub: "Profundo e focado",
    themeMatchaTitle: "Jardim Matcha 🌸",
    themeMatchaSub: "Fresco e botânico",
    themeCafeTitle: "Café Real ♠️",
    themeCafeSub: "Aconchegante e vintage",
    themeUnlockBadge: "🔒 Desbloquear por 24 Horas",
    themeConfirmCancel: "Cancelar",
    themeWatchAd: "Ver anúncio e desbloquear",
    themeConfirmTitle: "Um pouco mais de verde hoje?",
    themeConfirmCopy: "Assista a um breve anúncio para usar este tema por 24 horas.",
    themeAdTitle: "Seu jardim está sendo preparado",
    themeAdCopy: "O tema será desbloqueado quando a simulação do anúncio terminar.",

    // Privacy Policy Modal
    privacyBadge: "Privacidade e Segurança",
    privacyTitle: "Política de Privacidade",
    privacySubtitle: "O DailyFlow foi construído com uma filosofia offline-first e zero rastreamento.",
    privacyCard1Title: "100% Armazenamento Local no Dispositivo",
    privacyCard1Desc: "Todas as suas tarefas, notas diárias, registros Pomodoro e transações financeiras são salvos exclusivamente no armazenamento local do seu dispositivo.",
    privacyCard2Title: "Zero Rastreamento e Sem Servidores Remotos",
    privacyCard2Desc: "O DailyFlow não opera bancos de dados remotos de rastreamento de usuários nem transmite telemetria. Nunca coletamos ou compartilhamos seus dados.",
    privacyCard3Title: "Notificações Locais no Dispositivo",
    privacyCard3Desc: "Lembretes e alarmes de tarefas são programados diretamente pelo sistema operacional do dispositivo (Notificações Locais).",
    privacyCard4Title: "Controle Total do Usuário",
    privacyCard4Desc: "Você tem soberania total sobre seus dados. Limpar os dados do aplicativo ou desinstalá-lo exclui permanentemente todos os registros do seu dispositivo.",
    privacyFooterNote: "Dúvidas ou solicitações sobre nossas práticas de privacidade? Entre em contato pelo e-mail"
  },

  de: {
    // Navigation & Sidebar
    navDashboard: "Übersicht / Aufgaben",
    navFocus: "Pomodoro-Fokus",
    navFinance: "Finanz-Tracker",
    navPrivacy: "Datenschutzerklärung",
    sidebarNavigation: "Navigation",
    openNavigation: "Navigation öffnen",
    closeNavigation: "Navigation schließen",
    chooseTheme: "Design wählen",
    selectLanguage: "Sprache wählen",

    // Dashboard Quick Notes & This Week
    quickNotesEyebrow: "SCHNELLE NOTIZEN",
    quickNotesPlaceholder: "Schreiben Sie etwas zum Merken...",
    calendarEyebrow: "DIESE WOCHE",
    calendarTagline: "Planen · Fokussieren · Erreichen",

    // Stats Grid
    statTotalTasks: "Aufgaben gesamt",
    statInProgress: "in Bearbeitung",
    statCompleted: "abgeschlossen",

    // Tasks Panel & Form
    tasksTitle: "Aufgaben",
    listDescription: "Für heute geplant",
    tasksRemainingSingle: "1 Aufgabe übrig",
    tasksRemainingPlural: "{n} Aufgaben übrig",
    clearCompleted: "Erledigte löschen",
    newTaskPlaceholder: "Neue Aufgabe hinzufügen...",
    priorityLow: "Niedrige Priorität",
    priorityMedium: "Mittlere Priorität",
    priorityHigh: "Hohe Priorität",
    priorityLowShort: "Niedrig",
    priorityMedShort: "Mittel",
    priorityHighShort: "Hoch",
    addBtn: "Hinzufügen",
    filterAll: "Alle",
    filterActive: "Aktiv",
    filterCompleted: "Erledigt",
    searchPlaceholder: "Aufgaben durchsuchen...",
    emptyStateTitle: "Alles erledigt",
    emptyStateDesc: "Sie können mit einer neuen Aufgabe beginnen.",

    // Web Download Card
    webDownloadBadge: "GOOGLE PLAY",
    webDownloadTitle: "DailyFlow für Android herunterladen",
    webDownloadDesc: "Organisieren Sie Aufgaben, Fokus-Timer und Finanzen direkt auf Ihrem Smartphone.",
    gpTagline: "JETZT BEI",

    // Schedule / Calendar Modal
    calendarScheduleEyebrow: "ZEITPLAN",
    calendarTitle: "Datum und Uhrzeit wählen",
    tabDate: "Datum",
    tabTime: "Uhrzeit",
    presetToday: "Heute",
    presetTomorrow: "Morgen",
    presetWeekend: "Dieses Wochenende",
    resetToToday: "Auf Heute zurücksetzen",
    hourColLabel: "Stunde (1-12)",
    minuteColLabel: "Minute (00-59)",
    calendarNoteLabel: "Notiz hinzufügen",
    calendarNotePlaceholder: "Notiz für diese Zeit schreiben...",
    saveToTasks: "In Aufgaben speichern",
    savedCheck: "Gespeichert ✓",
    selectionSummaryDefault: "Heute um 10:00 Uhr",
    summaryAt: "um",
    taskSavedWithAlarm: "Gespeichert & Wecker gestellt 🔔",
    taskSavedToTasks: "In Aufgaben gespeichert.",

    // Pomodoro Focus View
    focusBack: "← Übersicht",
    pomodoroEyebrow: "DAILYFLOW FOKUS",
    pomodoroTitle: "Pomodoro-Fokus",
    modeClassic: "Klassisch",
    modeStudy: "Lernen",
    modeDeepWork: "Fokussiert",
    pomodoroStatusFocus: "Fokuszeit",
    pomodoroStatusBreak: "Pausezeit",
    pomodoroStart: "Starten",
    pomodoroPause: "Pause",
    pomodoroResume: "Fortsetzen",
    pomodoroReset: "Zurücksetzen",

    // Finance View
    financeBack: "← Übersicht",
    financeEyebrow: "FINANZKONTROLLE",
    financeTitle: "Finanz-Tracker",
    financeSubtitle: "Behalten Sie Ihre alltäglichen Ausgaben sichtbar und bewusst im Blick.",
    financeBadge: "AUSGABEN",
    budgetLabel: "Budget:",
    budgetSet: "Festlegen",
    budgetEditorTitle: "🎯 Monatsbudget",
    budgetInputPlaceholder: "Monatsbudget festlegen",
    budgetSave: "Budget speichern",
    budgetClear: "Löschen",
    budgetRemaining: "{amount} übrig",
    budgetOverBy: "Budget um {amount} überschritten ({pct}%)",
    financeThisMonth: "Diesen Monat",
    financeStatusNoBudget: "Monatliches Budget festlegen",
    expenseTitlePlaceholder: "Ausgabenbezeichnung (z. B. Lebensmittel)",
    expenseAmountPlaceholder: "Betrag",
    financeAddExpense: "Ausgabe hinzufügen",
    recentExpenses: "Letzte Ausgaben",
    financeItemCountSingle: "Eintrag",
    financeItemCountPlural: "Einträge",
    financeEmpty: "Noch keine Ausgaben.",
    expenseToastDeleted: "Ausgabe gelöscht",
    undo: "Rückgängig",

    // Expense Categories
    categoryTransfers: "Überweisungen",
    categoryShopping: "Einkaufen",
    categoryFood: "Essen & Trinken",
    categoryUtility: "Rechnungen",
    categoryEntertainment: "Unterhaltung",
    categoryVacation: "Urlaub",

    // Custom Date Picker
    dpSelectDate: "Datum wählen",
    dpMonths: [
      "Januar", "Februar", "März", "April", "Mai", "Juni",
      "Juli", "August", "September", "Oktober", "November", "Dezember"
    ],
    dpWeekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    calendarWeekdays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    dpClear: "Löschen",
    dpToday: "Heute",

    // Theme Modal
    themePickerEyebrow: "GESTALTEN SIE IHREN FLOW",
    themePickerTitle: "Design-Auswahl",
    themePickerCopy: "Passen Sie Ihren Arbeitsbereich an Ihre aktuelle Stimmung an.",
    themeDefaultTitle: "Standard Helles Salbei",
    themeDefaultSub: "Sanft & ruhig",
    themeDarkTitle: "Dunkles Salbei",
    themeDarkSub: "Tief & konzentriert",
    themeMatchaTitle: "Matcha-Garten 🌸",
    themeMatchaSub: "Frisch & botanisch",
    themeCafeTitle: "Café Royal ♠️",
    themeCafeSub: "Warm & klassisch",
    themeUnlockBadge: "🔒 Für 24 Stunden freischalten",
    themeConfirmCancel: "Abbrechen",
    themeWatchAd: "Werbung ansehen & freischalten",
    themeConfirmTitle: "Heute etwas mehr Grün?",
    themeConfirmCopy: "Sehen Sie sich eine kurze Werbung an, um dieses Thema 24 Stunden lang zu nutzen.",
    themeAdTitle: "Ihr Garten wird vorbereitet",
    themeAdCopy: "Das Design wird freigeschaltet, sobald die kurze Werbesimulation endet.",

    // Privacy Policy Modal
    privacyBadge: "Datenschutz & Sicherheit",
    privacyTitle: "Datenschutzerklärung",
    privacySubtitle: "DailyFlow basiert auf einem Offline-First- und Zero-Tracking-Prinzip.",
    privacyCard1Title: "100% lokaler Gerätespeicher",
    privacyCard1Desc: "Alle Ihre Aufgaben, täglichen Notizen, Pomodoro-Aufzeichnungen und Finanztransaktionen werden ausschließlich im lokalen Speicher Ihres Geräts gespeichert.",
    privacyCard2Title: "Kein Tracking & keine Remote-Server",
    privacyCard2Desc: "DailyFlow betreibt keine Tracking-Datenbanken und überträgt keine Telemetriedaten. Ihre Daten verlassen niemals Ihr Gerät.",
    privacyCard3Title: "Geräteinterne lokale Benachrichtigungen",
    privacyCard3Desc: "Erinnerungen und Alarme werden direkt über das Betriebssystem Ihres Geräts gesteuert.",
    privacyCard4Title: "Volle Datenhoheit des Nutzers",
    privacyCard4Desc: "Sie haben jederzeit die volle Kontrolle über Ihre Daten. Das Löschen von App-Daten entfernt alle Einträge dauerhaft.",
    privacyFooterNote: "Fragen zum Datenschutz? Kontaktieren Sie uns unter"
  },

  fr: {
    // Navigation & Sidebar
    navDashboard: "Tableau de bord / Tâches",
    navFocus: "Focus Pomodoro",
    navFinance: "Suivi Financier",
    navPrivacy: "Politique de Confidentialité",
    sidebarNavigation: "Navigation",
    openNavigation: "Ouvrir le menu",
    closeNavigation: "Fermer le menu",
    chooseTheme: "Choisir un thème",
    selectLanguage: "Choisir la langue",

    // Dashboard Quick Notes & This Week
    quickNotesEyebrow: "NOTES RAPIDES",
    quickNotesPlaceholder: "Écrivez quelque chose à retenir...",
    calendarEyebrow: "CETTE SEMAINE",
    calendarTagline: "Planifier · Concentrer · Réussir",

    // Stats Grid
    statTotalTasks: "tâches au total",
    statInProgress: "en cours",
    statCompleted: "terminées",

    // Tasks Panel & Form
    tasksTitle: "Tâches",
    listDescription: "Prévu pour aujourd'hui",
    tasksRemainingSingle: "1 tâche restante",
    tasksRemainingPlural: "{n} tâches restantes",
    clearCompleted: "Effacer les terminées",
    newTaskPlaceholder: "Ajouter une nouvelle tâche...",
    priorityLow: "Priorité basse",
    priorityMedium: "Priorité moyenne",
    priorityHigh: "Priorité haute",
    priorityLowShort: "Basse",
    priorityMedShort: "Moyenne",
    priorityHighShort: "Haute",
    addBtn: "Ajouter",
    filterAll: "Toutes",
    filterActive: "Actives",
    filterCompleted: "Terminées",
    searchPlaceholder: "Rechercher des tâches...",
    emptyStateTitle: "Tout est à jour",
    emptyStateDesc: "Vous pouvez commencer par ajouter une tâche.",

    // Web Download Card
    webDownloadBadge: "GOOGLE PLAY",
    webDownloadTitle: "Téléchargez DailyFlow pour Android",
    webDownloadDesc: "Organisez vos tâches, minuteurs de concentration et budget directement sur votre téléphone.",
    gpTagline: "DISPONIBLE SUR",

    // Schedule / Calendar Modal
    calendarScheduleEyebrow: "PLANIFICATION",
    calendarTitle: "Choisir la date et l'heure",
    tabDate: "Date",
    tabTime: "Heure",
    presetToday: "Aujourd'hui",
    presetTomorrow: "Demain",
    presetWeekend: "Ce week-end",
    resetToToday: "Revenir à aujourd'hui",
    hourColLabel: "Heure (1-12)",
    minuteColLabel: "Minute (00-59)",
    calendarNoteLabel: "Ajouter une note",
    calendarNotePlaceholder: "Écrivez une note pour ce créneau...",
    saveToTasks: "Enregistrer dans les tâches",
    savedCheck: "Enregistré ✓",
    selectionSummaryDefault: "Aujourd'hui à 10:00",
    summaryAt: "à",
    taskSavedWithAlarm: "Enregistré & Alarme définie 🔔",
    taskSavedToTasks: "Enregistré dans les tâches.",

    // Pomodoro Focus View
    focusBack: "← Tableau de bord",
    pomodoroEyebrow: "DAILYFLOW FOCUS",
    pomodoroTitle: "Focus Pomodoro",
    modeClassic: "Classique",
    modeStudy: "Étude",
    modeDeepWork: "Travail Profond",
    pomodoroStatusFocus: "Temps de Concentration",
    pomodoroStatusBreak: "Temps de Pause",
    pomodoroStart: "Démarrer",
    pomodoroPause: "Pause",
    pomodoroResume: "Reprendre",
    pomodoroReset: "Réinitialiser",

    // Finance View
    financeBack: "← Tableau de bord",
    financeEyebrow: "GESTION DE L'ARGENT",
    financeTitle: "Suivi Financier",
    financeSubtitle: "Gardez vos dépenses quotidiennes visibles et maîtrisées.",
    financeBadge: "DÉPENSES",
    budgetLabel: "Budget :",
    budgetSet: "Définir",
    budgetEditorTitle: "🎯 Budget Mensuel",
    budgetInputPlaceholder: "Définir le budget mensuel",
    budgetSave: "Enregistrer le budget",
    budgetClear: "Effacer",
    budgetRemaining: "{amount} restant",
    budgetOverBy: "Budget dépassé de {amount} ({pct}%)",
    financeThisMonth: "Ce mois-ci",
    financeStatusNoBudget: "Définir un budget mensuel",
    expenseTitlePlaceholder: "Titre de la dépense (ex. Courses)",
    expenseAmountPlaceholder: "Montant",
    financeAddExpense: "Ajouter une dépense",
    recentExpenses: "Dépenses récentes",
    financeItemCountSingle: "dépense",
    financeItemCountPlural: "dépenses",
    financeEmpty: "Aucune dépense pour le moment.",
    expenseToastDeleted: "Dépense supprimée",
    undo: "Annuler",

    // Expense Categories
    categoryTransfers: "Virements",
    categoryShopping: "Achats",
    categoryFood: "Alimentation",
    categoryUtility: "Factures",
    categoryEntertainment: "Divertissement",
    categoryVacation: "Vacances",

    // Custom Date Picker
    dpSelectDate: "Choisir une date",
    dpMonths: [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ],
    dpWeekdays: ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
    calendarWeekdays: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    dpClear: "Effacer",
    dpToday: "Aujourd'hui",

    // Theme Modal
    themePickerEyebrow: "PERSONNALISEZ VOTRE FLUX",
    themePickerTitle: "Sélecteur de Thème",
    themePickerCopy: "Adaptez votre espace à l'ambiance dans laquelle vous souhaitez travailler.",
    themeDefaultTitle: "Sauge Clair par Défaut",
    themeDefaultSub: "Doux & serein",
    themeDarkTitle: "Sauge Sombre",
    themeDarkSub: "Profond & concentré",
    themeMatchaTitle: "Jardin Matcha 🌸",
    themeMatchaSub: "Frais & botanique",
    themeCafeTitle: "Café Royal ♠️",
    themeCafeSub: "Chaleureux & rétro",
    themeUnlockBadge: "🔒 Débloquer pour 24 Heures",
    themeConfirmCancel: "Annuler",
    themeWatchAd: "Regarder une pub & débloquer",
    themeConfirmTitle: "Un peu plus de vert aujourd'hui ?",
    themeConfirmCopy: "Regardez une courte annonce pour utiliser ce thème pendant 24 heures.",
    themeAdTitle: "Votre jardin se prépare",
    themeAdCopy: "Le thème sera déverrouillé à la fin de la courte simulation publicitaire.",

    // Privacy Policy Modal
    privacyBadge: "Confidentialité & Sécurité",
    privacyTitle: "Politique de Confidentialité",
    privacySubtitle: "DailyFlow est conçu selon une philosophie hors-ligne d'abord et sans aucun suivi.",
    privacyCard1Title: "Stockage 100% Local sur l'Appareil",
    privacyCard1Desc: "Toutes vos tâches, notes, sessions Pomodoro et dépenses sont conservées exclusivement sur la mémoire de votre appareil.",
    privacyCard2Title: "Zéro Pistage & Aucun Serveur Distant",
    privacyCard2Desc: "DailyFlow ne gère aucune base de données distante et ne transmet aucune télémétrie. Vos données ne sont jamais vendues.",
    privacyCard3Title: "Notifications Locales sur l'Appareil",
    privacyCard3Desc: "Les rappels et alarmes de tâches sont gérés directement par le système d'exploitation de votre téléphone.",
    privacyCard4Title: "Souveraineté Totale de l'Utilisateur",
    privacyCard4Desc: "Vous avez un contrôle absolu sur vos données. La désinstallation supprime définitivement tous les enregistrements.",
    privacyFooterNote: "Des questions sur notre politique de confidentialité ? Contactez-nous à"
  },

  nl: {
    // Navigation & Sidebar
    navDashboard: "Dashboard / Taken",
    navFocus: "Pomodoro-Focus",
    navFinance: "Financiën-Tracker",
    navPrivacy: "Privacybeleid",
    sidebarNavigation: "Navigatie",
    openNavigation: "Navigatie openen",
    closeNavigation: "Navigatie sluiten",
    chooseTheme: "Thema kiezen",
    selectLanguage: "Taal kiezen",

    // Dashboard Quick Notes & This Week
    quickNotesEyebrow: "SNELLE NOTITIES",
    quickNotesPlaceholder: "Schrijf iets om te onthouden...",
    calendarEyebrow: "DEZE WEEK",
    calendarTagline: "Plannen · Focussen · Bereiken",

    // Stats Grid
    statTotalTasks: "taken in totaal",
    statInProgress: "bezig",
    statCompleted: "voltooid",

    // Tasks Panel & Form
    tasksTitle: "Taken",
    listDescription: "Gepland voor vandaag",
    tasksRemainingSingle: "1 taak resterend",
    tasksRemainingPlural: "{n} taken resterend",
    clearCompleted: "Voltooide wissen",
    newTaskPlaceholder: "Voeg een nieuwe taak toe...",
    priorityLow: "Lage prioriteit",
    priorityMedium: "Normale prioriteit",
    priorityHigh: "Hoge prioriteit",
    priorityLowShort: "Laag",
    priorityMedShort: "Gem",
    priorityHighShort: "Hoog",
    addBtn: "Toevoegen",
    filterAll: "Alle",
    filterActive: "Actief",
    filterCompleted: "Voltooid",
    searchPlaceholder: "Taken doorzoeken...",
    emptyStateTitle: "Helemaal bij",
    emptyStateDesc: "Je kunt beginnen door een nieuwe taak toe te voegen.",

    // Web Download Card
    webDownloadBadge: "GOOGLE PLAY",
    webDownloadTitle: "Download DailyFlow voor Android",
    webDownloadDesc: "Organiseer je taken, focustimers en budget rechtstreeks op je telefoon.",
    gpTagline: "ONTDEK HET OP",

    // Schedule / Calendar Modal
    calendarScheduleEyebrow: "PLANNING",
    calendarTitle: "Selecteer datum en tijd",
    tabDate: "Datum",
    tabTime: "Tijd",
    presetToday: "Vandaag",
    presetTomorrow: "Morgen",
    presetWeekend: "Dit weekend",
    resetToToday: "Terug naar Vandaag",
    hourColLabel: "Uur (1-12)",
    minuteColLabel: "Minuut (00-59)",
    calendarNoteLabel: "Notitie toevoegen",
    calendarNotePlaceholder: "Schrijf een notitie voor dit tijdstip...",
    saveToTasks: "Opslaan in taken",
    savedCheck: "Opgeslagen ✓",
    selectionSummaryDefault: "Vandaag om 10:00",
    summaryAt: "om",
    taskSavedWithAlarm: "Opgeslagen & Alarm ingesteld 🔔",
    taskSavedToTasks: "Opgeslagen in taken.",

    // Pomodoro Focus View
    focusBack: "← Dashboard",
    pomodoroEyebrow: "DAILYFLOW FOCUS",
    pomodoroTitle: "Pomodoro-Focus",
    modeClassic: "Klassiek",
    modeStudy: "Studie",
    modeDeepWork: "Diepe Focus",
    pomodoroStatusFocus: "Focustijd",
    pomodoroStatusBreak: "Pauzetijd",
    pomodoroStart: "Starten",
    pomodoroPause: "Pauze",
    pomodoroResume: "Hervatten",
    pomodoroReset: "Resetten",

    // Finance View
    financeBack: "← Dashboard",
    financeEyebrow: "GELDBEHEER",
    financeTitle: "Financiën-Tracker",
    financeSubtitle: "Houd je dagelijkse uitgaven overzichtelijk en bewust.",
    financeBadge: "UITGAVEN",
    budgetLabel: "Budget:",
    budgetSet: "Instellen",
    budgetEditorTitle: "🎯 Maandbudget",
    budgetInputPlaceholder: "Maandbudget instellen",
    budgetSave: "Budget opslaan",
    budgetClear: "Wissen",
    budgetRemaining: "{amount} resterend",
    budgetOverBy: "Budget overschreden met {amount} ({pct}%)",
    financeThisMonth: "Deze maand",
    financeStatusNoBudget: "Stel een maandbudget in",
    expenseTitlePlaceholder: "Omschrijving (bijv. Boodschappen)",
    expenseAmountPlaceholder: "Bedrag",
    financeAddExpense: "Uitgave toevoegen",
    recentExpenses: "Recente uitgaven",
    financeItemCountSingle: "uitgave",
    financeItemCountPlural: "uitgaven",
    financeEmpty: "Nog geen uitgaven.",
    expenseToastDeleted: "Uitgave verwijderd",
    undo: "Ongedaan maken",

    // Expense Categories
    categoryTransfers: "Overboekingen",
    categoryShopping: "Winkelen",
    categoryFood: "Eten & Drinken",
    categoryUtility: "Vaste Lasten",
    categoryEntertainment: "Vermaak",
    categoryVacation: "Vakantie",

    // Custom Date Picker
    dpSelectDate: "Selecteer datum",
    dpMonths: [
      "Januari", "Februari", "Maart", "April", "Mei", "Juni",
      "Juli", "Augustus", "September", "Oktober", "November", "December"
    ],
    dpWeekdays: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
    calendarWeekdays: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
    dpClear: "Wissen",
    dpToday: "Vandaag",

    // Theme Modal
    themePickerEyebrow: "PERSONALISEER JE FLOW",
    themePickerTitle: "Themakiezer",
    themePickerCopy: "Stem je werkruimte af op de sfeer waarin je wilt werken.",
    themeDefaultTitle: "Standaard Licht Salie",
    themeDefaultSub: "Zacht & rustig",
    themeDarkTitle: "Donker Salie",
    themeDarkSub: "Diep & gefocust",
    themeMatchaTitle: "Matcha Tuin 🌸",
    themeMatchaSub: "Fris & botanisch",
    themeCafeTitle: "Café Royal ♠️",
    themeCafeSub: "Warm & vintage",
    themeUnlockBadge: "🔒 Ontgrendel voor 24 Uur",
    themeConfirmCancel: "Annuleren",
    themeWatchAd: "Bekijk advertentie & ontgrendel",
    themeConfirmTitle: "Vandaag een beetje meer groen?",
    themeConfirmCopy: "Bekijk een korte advertentie om dit thema 24 uur te gebruiken.",
    themeAdTitle: "Je tuin wordt klaargemaakt",
    themeAdCopy: "Het thema wordt ontgrendeld zodra de korte advertentiesimulatie eindigt.",

    // Privacy Policy Modal
    privacyBadge: "Privacy & Gegevensbeveiliging",
    privacyTitle: "Privacybeleid",
    privacySubtitle: "DailyFlow is gebouwd met een offline-first en nul-tracking filosofie.",
    privacyCard1Title: "100% Lokale Apparaat-opslag",
    privacyCard1Desc: "Al je taken, dagelijkse notities, Pomodoro-sessies en uitgaven worden uitsluitend op je lokale apparaat bewaard.",
    privacyCard2Title: "Geen Tracking & Geen Externe Servers",
    privacyCard2Desc: "DailyFlow gebruikt geen tracking-databases en verzendt geen telemetrie. We verkopen je gegevens nooit.",
    privacyCard3Title: "Lokale Meldingen op het Apparaat",
    privacyCard3Desc: "Herinneringen en alarmen worden rechtstreeks via het besturingssysteem van je telefoon gepland.",
    privacyCard4Title: "Volledig Eigenaarschap van de Gebruiker",
    privacyCard4Desc: "Je hebt te allen tijde volledige controle over je data. Het wissen van app-gegevens verwijdert alles permanent.",
    privacyFooterNote: "Vragen over ons privacybeleid? Neem contact op via"
  }
};

function getStoredLanguage() {
  try {
    const saved = localStorage.getItem("dailyflow_language");
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch (e) {}
  return DEFAULT_LANGUAGE;
}

function t(key, fallback = "") {
  const lang = getStoredLanguage();
  const dict = translations[lang] || translations[DEFAULT_LANGUAGE];
  return (dict && dict[key] !== undefined) ? dict[key] : fallback;
}

function applyLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    lang = DEFAULT_LANGUAGE;
  }

  try {
    localStorage.setItem("dailyflow_language", lang);
  } catch (e) {}

  document.documentElement.lang = lang;

  const dict = translations[lang] || translations[DEFAULT_LANGUAGE];
  if (!dict) return;

  // 1. Text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // 2. Placeholder attributes with data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // 3. Title attributes with data-i18n-title
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (dict[key] !== undefined) {
      el.setAttribute("title", dict[key]);
    }
  });

  // 4. Aria label elements with data-i18n-aria
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  // 5. Update options selection in Language Dropdown
  document.querySelectorAll("#langPickerPopup .custom-select-option").forEach((opt) => {
    const optLang = opt.getAttribute("data-lang");
    const isSel = optLang === lang;
    opt.classList.toggle("selected", isSel);
    opt.setAttribute("aria-selected", isSel ? "true" : "false");
  });

  // 6. Update task priority trigger display if priority exists
  const priorityInput = document.querySelector("#priorityInput");
  const taskPriorityDisplay = document.querySelector("#taskPriorityDisplay");
  if (priorityInput && taskPriorityDisplay) {
    const pVal = priorityInput.value || "medium";
    if (pVal === "low") taskPriorityDisplay.textContent = dict.priorityLow || "Low priority";
    else if (pVal === "high") taskPriorityDisplay.textContent = dict.priorityHigh || "High priority";
    else taskPriorityDisplay.textContent = dict.priorityMedium || "Medium priority";
  }

  // 7. Update expense category trigger display if exists
  const expenseCatSelect = document.querySelector("#expenseCategory");
  const expenseCategoryDisplay = document.querySelector("#expenseCategoryDisplay");
  if (expenseCatSelect && expenseCategoryDisplay) {
    const val = expenseCatSelect.value || "Transfers";
    let key = "categoryTransfers";
    if (val === "Shopping") key = "categoryShopping";
    else if (val === "Food & Beverages") key = "categoryFood";
    else if (val === "Utility/Bills") key = "categoryUtility";
    else if (val === "Entertainment") key = "categoryEntertainment";
    else if (val === "Vacation") key = "categoryVacation";
    expenseCategoryDisplay.textContent = dict[key] || val;
  }

  // 8. Update calendar weekdays row if exists
  const monthWeekdaysEl = document.querySelector(".month-weekdays");
  if (monthWeekdaysEl && dict.calendarWeekdays) {
    monthWeekdaysEl.innerHTML = dict.calendarWeekdays.map((w) => `<span>${w}</span>`).join("");
  }

  // 9. Re-render dynamic components safely if functions exist
  if (typeof renderCustomDatePicker === "function") {
    try { renderCustomDatePicker(); } catch (e) {}
  }
  if (typeof renderCalendarDates === "function") {
    try { renderCalendarDates(); } catch (e) {}
  }
  if (typeof renderMonthPicker === "function") {
    try { renderMonthPicker(); } catch (e) {}
  }
  if (typeof renderFinance === "function") {
    try { renderFinance(); } catch (e) {}
  }
  if (typeof updatePomodoroDisplay === "function") {
    try { updatePomodoroDisplay(); } catch (e) {}
  }
  if (typeof renderTasks === "function") {
    try { renderTasks(); } catch (e) {}
  }
  if (typeof updateStats === "function") {
    try { updateStats(); } catch (e) {}
  }
  if (typeof updateTimeSelection === "function") {
    try { updateTimeSelection(); } catch (e) {}
  }

  window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

function closeLangPicker() {
  const popup = document.querySelector("#langPickerPopup");
  const trigger = document.querySelector("#langPickerTrigger");
  if (popup) {
    popup.hidden = true;
    popup.style.display = "none";
    popup.classList.remove("is-open");
  }
  if (trigger) {
    trigger.setAttribute("aria-expanded", "false");
    trigger.classList.remove("active");
  }
}

function initI18n() {
  applyLanguage(getStoredLanguage());
  if (typeof initLanguagePicker === "function") {
    initLanguagePicker();
  }
}

// Expose globally
window.translations = translations;
window.applyLanguage = applyLanguage;
window.getStoredLanguage = getStoredLanguage;
window.t = t;
window.initI18n = initI18n;
window.closeLangPicker = closeLangPicker;
