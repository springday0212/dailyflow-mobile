/**
 * DailyFlow - Internationalization (i18n) Module
 * Supported Languages: English (en), Português (pt), Deutsch (de), Français (fr), Nederlands (nl)
 */

const SUPPORTED_LANGUAGES = ["en", "pt", "de", "fr", "nl"];
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
    clearCompleted: "Clear completed",
    newTaskPlaceholder: "Add a new task...",
    priorityLow: "Low priority",
    priorityMedium: "Medium priority",
    priorityHigh: "High priority",
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
    selectionSummaryDefault: "Today at 10:00 AM",

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
    financeThisMonth: "This month",
    financeStatusNoBudget: "Set a monthly budget",
    expenseTitlePlaceholder: "Expense title (e.g. Groceries)",
    expenseAmountPlaceholder: "Amount",
    financeAddExpense: "Add Expense",
    recentExpenses: "Recent expenses",
    financeItemCountSingle: "item",
    financeItemCountPlural: "items",
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
    listDescription: "Planejadas para hoje",
    clearCompleted: "Limpar concluídas",
    newTaskPlaceholder: "Adicionar uma nova tarefa...",
    priorityLow: "Baixa prioridade",
    priorityMedium: "Média prioridade",
    priorityHigh: "Alta prioridade",
    addBtn: "Adicionar",
    filterAll: "Todas",
    filterActive: "Ativas",
    filterCompleted: "Concluídas",
    searchPlaceholder: "Buscar tarefas...",
    emptyStateTitle: "Tudo em dia",
    emptyStateDesc: "Você pode começar adicionando uma nova tarefa.",

    // Web Download Card
    webDownloadBadge: "GOOGLE PLAY",
    webDownloadTitle: "Baixe o DailyFlow para Android",
    webDownloadDesc: "Organize suas tarefas, temporizadores de foco e orçamento direto no seu celular.",
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
    saveToTasks: "Salvar nas tarefas",
    selectionSummaryDefault: "Hoje às 10:00",

    // Pomodoro Focus View
    focusBack: "← Painel",
    pomodoroEyebrow: "DAILYFLOW FOCO",
    pomodoroTitle: "Foco Pomodoro",
    modeClassic: "Clássico",
    modeStudy: "Estudo",
    modeDeepWork: "Foco Profundo",
    pomodoroStatusFocus: "Tempo de Foco",
    pomodoroStatusBreak: "Tempo de Pausa",
    pomodoroStart: "Iniciar",
    pomodoroPause: "Pausar",
    pomodoroResume: "Retomar",
    pomodoroReset: "Reiniciar",

    // Finance View
    financeBack: "← Painel",
    financeEyebrow: "CONTROLE FINANCEIRO",
    financeTitle: "Controle Financeiro",
    financeSubtitle: "Mantenha seus gastos diários visíveis e intencionais.",
    financeBadge: "DESPESAS",
    budgetLabel: "Orçamento:",
    budgetSet: "Definir",
    budgetEditorTitle: "🎯 Orçamento Mensal",
    budgetInputPlaceholder: "Definir orçamento mensal",
    budgetSave: "Salvar Orçamento",
    budgetClear: "Limpar",
    financeThisMonth: "Este mês",
    financeStatusNoBudget: "Defina um orçamento mensal",
    expenseTitlePlaceholder: "Título da despesa (ex: Supermercado)",
    expenseAmountPlaceholder: "Valor",
    financeAddExpense: "Adicionar Despesa",
    recentExpenses: "Despesas recentes",
    financeItemCountSingle: "item",
    financeItemCountPlural: "itens",
    expenseToastDeleted: "Despesa excluída",
    undo: "Desfazer",

    // Expense Categories
    categoryTransfers: "Transferências",
    categoryShopping: "Compras",
    categoryFood: "Alimentação e Bebidas",
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
    dpClear: "Limpar",
    dpToday: "Hoje",

    // Theme Modal
    themePickerEyebrow: "PERSONALIZE SEU FLUXO",
    themePickerTitle: "Seletor de Temas",
    themePickerCopy: "Combine seu espaço de trabalho com o seu humor.",
    themeDefaultTitle: "Verde Sálvia Padrão",
    themeDefaultSub: "Suave e calmo",
    themeDarkTitle: "Sálvia Escuro",
    themeDarkSub: "Profundo e focado",
    themeMatchaTitle: "Matcha Garden 🌸",
    themeMatchaSub: "Fresco e botânico",
    themeCafeTitle: "Café Royal ♠️",
    themeCafeSub: "Aconchegante e vintage",
    themeUnlockBadge: "🔒 Desbloquear por 24 Horas",
    themeConfirmCancel: "Cancelar",
    themeWatchAd: "Ver anúncio e desbloquear",

    // Privacy Policy Modal
    privacyBadge: "Privacidade e Segurança",
    privacyTitle: "Política de Privacidade",
    privacySubtitle: "O DailyFlow foi criado com filosofia offline-first e zero rastreamento.",
    privacyCard1Title: "Armazenamento 100% Local",
    privacyCard1Desc: "Todas as suas tarefas, notas diárias, registros Pomodoro e finanças são salvos exclusivamente no armazenamento local do seu dispositivo. Suas informações nunca saem do seu telefone ou navegador.",
    privacyCard2Title: "Zero Rastreamento e Sem Servidores",
    privacyCard2Desc: "O DailyFlow não opera bancos de dados remotos nem transmite telemetria. Nunca coletamos, monitoramos, compartilhamos ou vendemos dados pessoais ou financeiros a terceiros.",
    privacyCard3Title: "Notificações Locais no Aparelho",
    privacyCard3Desc: "Lembretes e alarmes de tarefas são programados diretamente pelo sistema operacional do seu dispositivo (Notificações Locais). Nenhum servidor externo recebe seus horários.",
    privacyCard4Title: "Soberania Total do Usuário",
    privacyCard4Desc: "Você tem controle total sobre seus dados a qualquer momento. Limpar os dados do aplicativo ou desinstalá-lo apaga permanentemente todos os registros salvos.",
    privacyFooterNote: "Dúvidas sobre nossas práticas de privacidade? Fale conosco em"
  },
  de: {
    // Navigation & Sidebar
    navDashboard: "Übersicht / Aufgaben",
    navFocus: "Pomodoro Fokus",
    navFinance: "Finanz-Tracker",
    navPrivacy: "Datenschutzerklärung",
    sidebarNavigation: "Navigation",
    openNavigation: "Navigation öffnen",
    closeNavigation: "Navigation schließen",
    chooseTheme: "Design wählen",
    selectLanguage: "Sprache wählen",

    // Dashboard Quick Notes & This Week
    quickNotesEyebrow: "SCHNELLNOTIZEN",
    quickNotesPlaceholder: "Schreibe etwas zur Erinnerung...",
    calendarEyebrow: "DIESE WOCHE",
    calendarTagline: "Planen · Fokussieren · Erreichen",

    // Stats Grid
    statTotalTasks: "Gesamtaufgaben",
    statInProgress: "in Bearbeitung",
    statCompleted: "abgeschlossen",

    // Tasks Panel & Form
    tasksTitle: "Aufgaben",
    listDescription: "Für heute geplant",
    clearCompleted: "Erledigte löschen",
    newTaskPlaceholder: "Neue Aufgabe hinzufügen...",
    priorityLow: "Niedrige Priorität",
    priorityMedium: "Mittlere Priorität",
    priorityHigh: "Hohe Priorität",
    addBtn: "Hinzufügen",
    filterAll: "Alle",
    filterActive: "Aktiv",
    filterCompleted: "Erledigt",
    searchPlaceholder: "Aufgaben durchsuchen...",
    emptyStateTitle: "Alles erledigt",
    emptyStateDesc: "Füge eine neue Aufgabe hinzu, um loszulegen.",

    // Web Download Card
    webDownloadBadge: "GOOGLE PLAY",
    webDownloadTitle: "DailyFlow für Android holen",
    webDownloadDesc: "Organisiere deine Aufgaben, Fokus-Timer und dein Budget direkt auf deinem Smartphone.",
    gpTagline: "JETZT BEI",

    // Schedule / Calendar Modal
    calendarScheduleEyebrow: "ZEITPLAN",
    calendarTitle: "Datum und Uhrzeit wählen",
    tabDate: "Datum",
    tabTime: "Uhrzeit",
    presetToday: "Heute",
    presetTomorrow: "Morgen",
    presetWeekend: "Dieses Wochenende",
    resetToToday: "Auf heute zurücksetzen",
    hourColLabel: "Stunde (1-12)",
    minuteColLabel: "Minute (00-59)",
    calendarNoteLabel: "Notiz hinzufügen",
    calendarNotePlaceholder: "Schreibe eine Notiz für diese Zeit...",
    saveToTasks: "In Aufgaben speichern",
    selectionSummaryDefault: "Heute um 10:00 Uhr",

    // Pomodoro Focus View
    focusBack: "← Übersicht",
    pomodoroEyebrow: "DAILYFLOW FOKUS",
    pomodoroTitle: "Pomodoro Fokus",
    modeClassic: "Klassisch",
    modeStudy: "Lernen",
    modeDeepWork: "Tiefe Arbeit",
    pomodoroStatusFocus: "Fokuszeit",
    pomodoroStatusBreak: "Pause",
    pomodoroStart: "Starten",
    pomodoroPause: "Pause",
    pomodoroResume: "Fortsetzen",
    pomodoroReset: "Zurücksetzen",

    // Finance View
    financeBack: "← Übersicht",
    financeEyebrow: "FINANZKONTROLLE",
    financeTitle: "Finanz-Tracker",
    financeSubtitle: "Halte deine täglichen Ausgaben im Blick und plane bewusst.",
    financeBadge: "AUSGABEN",
    budgetLabel: "Budget:",
    budgetSet: "Festlegen",
    budgetEditorTitle: "🎯 Monatliches Budget",
    budgetInputPlaceholder: "Monatsbudget festlegen",
    budgetSave: "Budget speichern",
    budgetClear: "Löschen",
    financeThisMonth: "Diesen Monat",
    financeStatusNoBudget: "Monatsbudget festlegen",
    expenseTitlePlaceholder: "Ausgabentitel (z. B. Lebensmittel)",
    expenseAmountPlaceholder: "Betrag",
    financeAddExpense: "Ausgabe hinzufügen",
    recentExpenses: "Aktuelle Ausgaben",
    financeItemCountSingle: "Eintrag",
    financeItemCountPlural: "Einträge",
    expenseToastDeleted: "Ausgabe gelöscht",
    undo: "Rückgängig",

    // Expense Categories
    categoryTransfers: "Überweisungen",
    categoryShopping: "Einkaufen",
    categoryFood: "Essen & Trinken",
    categoryUtility: "Rechnungen/Nebenkosten",
    categoryEntertainment: "Unterhaltung",
    categoryVacation: "Urlaub",

    // Custom Date Picker
    dpSelectDate: "Datum wählen",
    dpMonths: [
      "Januar", "Februar", "März", "April", "Mai", "Juni",
      "Juli", "August", "September", "Oktober", "November", "Dezember"
    ],
    dpWeekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    dpClear: "Löschen",
    dpToday: "Heute",

    // Theme Modal
    themePickerEyebrow: "PERSONALISIERE DEINEN FLOW",
    themePickerTitle: "Design wählen",
    themePickerCopy: "Passe deinen Arbeitsbereich deiner Stimmung an.",
    themeDefaultTitle: "Helles Salbei (Standard)",
    themeDefaultSub: "Sanft & ruhig",
    themeDarkTitle: "Dunkles Salbei",
    themeDarkSub: "Tief & fokussiert",
    themeMatchaTitle: "Matcha Garden 🌸",
    themeMatchaSub: "Frisch & botanisch",
    themeCafeTitle: "Café Royal ♠️",
    themeCafeSub: "Warm & klassisch",
    themeUnlockBadge: "🔒 Für 24 Stunden freischalten",
    themeConfirmCancel: "Abbrechen",
    themeWatchAd: "Video ansehen & freischalten",

    // Privacy Policy Modal
    privacyBadge: "Datenschutz & Sicherheit",
    privacyTitle: "Datenschutzerklärung",
    privacySubtitle: "DailyFlow basiert auf einem Offline-First- und Zero-Tracking-Prinzip.",
    privacyCard1Title: "100% lokaler Gerätespeicher",
    privacyCard1Desc: "Alle deine Aufgaben, Schnellnotizen, Pomodoro-Einträge und Finanzen werden ausschließlich lokal auf deinem Gerät gespeichert. Deine persönlichen Daten verlassen niemals dein Smartphone oder deinen Browser.",
    privacyCard2Title: "Kein Tracking & keine Server",
    privacyCard2Desc: "DailyFlow betreibt keine externen Tracking-Datenbanken und überträgt keine Telemetriedaten. Wir erfassen, überwachen, teilen oder verkaufen niemals persönliche oder finanzielle Daten an Dritte.",
    privacyCard3Title: "Lokale Benachrichtigungen",
    privacyCard3Desc: "Erinnerungen und Alarme werden direkt über das Betriebssystem deines Geräts geplant. Kein Cloud-Server empfängt oder verarbeitet deine Termine.",
    privacyCard4Title: "Vollständige Datenkontrolle",
    privacyCard4Desc: "Du hast jederzeit die volle Souveränität über deine Daten. Das Löschen von App-Daten oder die Deinstallation entfernt alle Einträge dauerhaft von deinem Gerät.",
    privacyFooterNote: "Fragen zu unseren Datenschutzpraktiken? Kontaktiere uns unter"
  },
  fr: {
    // Navigation & Sidebar
    navDashboard: "Tableau de bord / Tâches",
    navFocus: "Focus Pomodoro",
    navFinance: "Suivi Financier",
    navPrivacy: "Politique de Confidentialité",
    sidebarNavigation: "Navigation",
    openNavigation: "Ouvrir la navigation",
    closeNavigation: "Fermer la navigation",
    chooseTheme: "Choisir un thème",
    selectLanguage: "Choisir la langue",

    // Dashboard Quick Notes & This Week
    quickNotesEyebrow: "NOTES RAPIDES",
    quickNotesPlaceholder: "Écrivez un mémo...",
    calendarEyebrow: "CETTE SEMAINE",
    calendarTagline: "Planifier · Se concentrer · Réussir",

    // Stats Grid
    statTotalTasks: "tâches totales",
    statInProgress: "en cours",
    statCompleted: "terminées",

    // Tasks Panel & Form
    tasksTitle: "Tâches",
    listDescription: "Planifié pour aujourd'hui",
    clearCompleted: "Effacer terminées",
    newTaskPlaceholder: "Ajouter une tâche...",
    priorityLow: "Priorité basse",
    priorityMedium: "Priorité moyenne",
    priorityHigh: "Priorité haute",
    addBtn: "Ajouter",
    filterAll: "Toutes",
    filterActive: "Actives",
    filterCompleted: "Terminées",
    searchPlaceholder: "Rechercher des tâches...",
    emptyStateTitle: "Tout est à jour",
    emptyStateDesc: "Commencez par ajouter une nouvelle tâche.",

    // Web Download Card
    webDownloadBadge: "GOOGLE PLAY",
    webDownloadTitle: "Téléchargez DailyFlow pour Android",
    webDownloadDesc: "Organisez vos tâches, minuteurs de concentration et budget directement sur votre téléphone.",
    gpTagline: "DISPONIBLE SUR",

    // Schedule / Calendar Modal
    calendarScheduleEyebrow: "PROGRAMME",
    calendarTitle: "Sélectionnez date et heure",
    tabDate: "Date",
    tabTime: "Heure",
    presetToday: "Aujourd'hui",
    presetTomorrow: "Demain",
    presetWeekend: "Ce week-end",
    resetToToday: "Réinitialiser à aujourd'hui",
    hourColLabel: "Heure (1-12)",
    minuteColLabel: "Minute (00-59)",
    calendarNoteLabel: "Ajouter une note",
    calendarNotePlaceholder: "Écrivez une note pour ce moment...",
    saveToTasks: "Enregistrer dans les tâches",
    selectionSummaryDefault: "Aujourd'hui à 10:00",

    // Pomodoro Focus View
    focusBack: "← Tableau de bord",
    pomodoroEyebrow: "DAILYFLOW FOCUS",
    pomodoroTitle: "Focus Pomodoro",
    modeClassic: "Classique",
    modeStudy: "Étude",
    modeDeepWork: "Travail Profond",
    pomodoroStatusFocus: "Temps de Focus",
    pomodoroStatusBreak: "Temps de Pause",
    pomodoroStart: "Démarrer",
    pomodoroPause: "Pause",
    pomodoroResume: "Reprendre",
    pomodoroReset: "Réinitialiser",

    // Finance View
    financeBack: "← Tableau de bord",
    financeEyebrow: "CONTRÔLE DU BUDGET",
    financeTitle: "Suivi Financier",
    financeSubtitle: "Gardez vos dépenses quotidiennes visibles et maîtrisées.",
    financeBadge: "DÉPENSES",
    budgetLabel: "Budget :",
    budgetSet: "Définir",
    budgetEditorTitle: "🎯 Budget Mensuel",
    budgetInputPlaceholder: "Définir le budget mensuel",
    budgetSave: "Enregistrer le budget",
    budgetClear: "Effacer",
    financeThisMonth: "Ce mois-ci",
    financeStatusNoBudget: "Définir un budget mensuel",
    expenseTitlePlaceholder: "Titre de la dépense (ex: Courses)",
    expenseAmountPlaceholder: "Montant",
    financeAddExpense: "Ajouter une dépense",
    recentExpenses: "Dépenses récentes",
    financeItemCountSingle: "élément",
    financeItemCountPlural: "éléments",
    expenseToastDeleted: "Dépense supprimée",
    undo: "Annuler",

    // Expense Categories
    categoryTransfers: "Virements",
    categoryShopping: "Achats",
    categoryFood: "Alimentation",
    categoryUtility: "Factures/Charges",
    categoryEntertainment: "Divertissement",
    categoryVacation: "Vacances",

    // Custom Date Picker
    dpSelectDate: "Sélectionner la date",
    dpMonths: [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ],
    dpWeekdays: ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
    dpClear: "Effacer",
    dpToday: "Aujourd'hui",

    // Theme Modal
    themePickerEyebrow: "PERSONNALISEZ VOTRE FLUX",
    themePickerTitle: "Choisir un thème",
    themePickerCopy: "Adaptez votre espace de travail à votre humeur.",
    themeDefaultTitle: "Sauge Clair Standard",
    themeDefaultSub: "Doux & calme",
    themeDarkTitle: "Sauge Foncée",
    themeDarkSub: "Profond & concentré",
    themeMatchaTitle: "Matcha Garden 🌸",
    themeMatchaSub: "Frais & botanique",
    themeCafeTitle: "Café Royal ♠️",
    themeCafeSub: "Chaleureux & vintage",
    themeUnlockBadge: "🔒 Débloquer pendant 24 Heures",
    themeConfirmCancel: "Annuler",
    themeWatchAd: "Regarder une pub & débloquer",

    // Privacy Policy Modal
    privacyBadge: "Confidentialité & Sécurité",
    privacyTitle: "Politique de Confidentialité",
    privacySubtitle: "DailyFlow est conçu selon une philosophie hors-ligne et sans pistage.",
    privacyCard1Title: "Stockage 100% Local",
    privacyCard1Desc: "Toutes vos tâches, notes quotidiennes, sessions Pomodoro et dépenses sont enregistrées exclusivement sur votre appareil. Vos informations ne quittent jamais votre téléphone ou votre navigateur.",
    privacyCard2Title: "Zéro Pistage & Aucun Serveur",
    privacyCard2Desc: "DailyFlow n'exploite aucune base de données de suivi et ne transmet aucune télémétrie. Nous ne collectons, ne partageons et ne vendons aucune donnée personnelle ou financière.",
    privacyCard3Title: "Notifications Locales sur l'Appareil",
    privacyCard3Desc: "Les rappels et alarmes sont programmés directement via le système d'exploitation de votre appareil (Notifications Locales). Aucun serveur cloud ne reçoit votre planning.",
    privacyCard4Title: "Contrôle Absolu de l'Utilisateur",
    privacyCard4Desc: "Vous gardez une souveraineté totale sur vos données à tout moment. Effacer les données de l'application ou la désinstaller supprime définitivement toutes les entrées enregistrées.",
    privacyFooterNote: "Des questions sur nos pratiques de confidentialité ? Contactez-nous à"
  },
  nl: {
    // Navigation & Sidebar
    navDashboard: "Overzicht / Taken",
    navFocus: "Pomodoro Focus",
    navFinance: "Financiën Tracker",
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
    statTotalTasks: "totaal aantal taken",
    statInProgress: "bezig",
    statCompleted: "voltooid",

    // Tasks Panel & Form
    tasksTitle: "Taken",
    listDescription: "Gepland voor vandaag",
    clearCompleted: "Voltooide wissen",
    newTaskPlaceholder: "Nieuwe taak toevoegen...",
    priorityLow: "Lage prioriteit",
    priorityMedium: "Gemiddelde prioriteit",
    priorityHigh: "Hoge prioriteit",
    addBtn: "Toevoegen",
    filterAll: "Alle",
    filterActive: "Actief",
    filterCompleted: "Voltooid",
    searchPlaceholder: "Taken zoeken...",
    emptyStateTitle: "Helemaal bij",
    emptyStateDesc: "Begin met het toevoegen van een nieuwe taak.",

    // Web Download Card
    webDownloadBadge: "GOOGLE PLAY",
    webDownloadTitle: "Download DailyFlow voor Android",
    webDownloadDesc: "Beheer je taken, focustimers en budget direct op je telefoon.",
    gpTagline: "ONTDEK HET OP",

    // Schedule / Calendar Modal
    calendarScheduleEyebrow: "SCHEMA",
    calendarTitle: "Selecteer datum en tijd",
    tabDate: "Datum",
    tabTime: "Tijd",
    presetToday: "Vandaag",
    presetTomorrow: "Morgen",
    presetWeekend: "Dit weekend",
    resetToToday: "Herstellen naar vandaag",
    hourColLabel: "Uur (1-12)",
    minuteColLabel: "Minuut (00-59)",
    calendarNoteLabel: "Notitie toevoegen",
    calendarNotePlaceholder: "Schrijf een notitie voor dit moment...",
    saveToTasks: "Opslaan in taken",
    selectionSummaryDefault: "Vandaag om 10:00",

    // Pomodoro Focus View
    focusBack: "← Overzicht",
    pomodoroEyebrow: "DAILYFLOW FOCUS",
    pomodoroTitle: "Pomodoro Focus",
    modeClassic: "Klassiek",
    modeStudy: "Studie",
    modeDeepWork: "Diep Werk",
    pomodoroStatusFocus: "Focustijd",
    pomodoroStatusBreak: "Pauzetijd",
    pomodoroStart: "Start",
    pomodoroPause: "Pauze",
    pomodoroResume: "Hervatten",
    pomodoroReset: "Herstellen",

    // Finance View
    financeBack: "← Overzicht",
    financeEyebrow: "GELDBEHEER",
    financeTitle: "Financiën Tracker",
    financeSubtitle: "Houd je dagelijkse uitgaven overzichtelijk en bewust.",
    financeBadge: "UITGAVEN",
    budgetLabel: "Budget:",
    budgetSet: "Instellen",
    budgetEditorTitle: "🎯 Maandelijks Budget",
    budgetInputPlaceholder: "Maandbudget instellen",
    budgetSave: "Budget opslaan",
    budgetClear: "Wissen",
    financeThisMonth: "Deze maand",
    financeStatusNoBudget: "Stel een maandbudget in",
    expenseTitlePlaceholder: "Uitgave titel (bijv. Boodschappen)",
    expenseAmountPlaceholder: "Bedrag",
    financeAddExpense: "Uitgave toevoegen",
    recentExpenses: "Recente uitgaven",
    financeItemCountSingle: "item",
    financeItemCountPlural: "items",
    expenseToastDeleted: "Uitgave verwijderd",
    undo: "Ongedaan maken",

    // Expense Categories
    categoryTransfers: "Overboekingen",
    categoryShopping: "Winkelen",
    categoryFood: "Eten & Drinken",
    categoryUtility: "Rekeningen",
    categoryEntertainment: "Amusement",
    categoryVacation: "Vakantie",

    // Custom Date Picker
    dpSelectDate: "Selecteer datum",
    dpMonths: [
      "Januari", "Februari", "Maart", "April", "Mei", "Juni",
      "Juli", "Augustus", "September", "Oktober", "November", "December"
    ],
    dpWeekdays: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
    dpClear: "Wissen",
    dpToday: "Vandaag",

    // Theme Modal
    themePickerEyebrow: "PERSONALISEER JE FLOW",
    themePickerTitle: "Thema kiezen",
    themePickerCopy: "Pas je werkruimte aan op je stemming.",
    themeDefaultTitle: "Standaard Licht Salie",
    themeDefaultSub: "Zacht & rustig",
    themeDarkTitle: "Donker Salie",
    themeDarkSub: "Diep & gefocust",
    themeMatchaTitle: "Matcha Garden 🌸",
    themeMatchaSub: "Fris & botanisch",
    themeCafeTitle: "Café Royal ♠️",
    themeCafeSub: "Warm & vintage",
    themeUnlockBadge: "🔒 Ontgrendel voor 24 Uur",
    themeConfirmCancel: "Annuleren",
    themeWatchAd: "Advertentie kijken & ontgrendelen",

    // Privacy Policy Modal
    privacyBadge: "Privacy & Gegevensbeveiliging",
    privacyTitle: "Privacybeleid",
    privacySubtitle: "DailyFlow is gebouwd met een offline-first en nul-tracking filosofie.",
    privacyCard1Title: "100% Lokale Apparaatopslag",
    privacyCard1Desc: "Al je taken, snelle notities, Pomodoro-sessies en financiën worden uitsluitend lokaal op je apparaat opgeslagen. Je persoonlijke gegevens verlaten nooit je telefoon of browser.",
    privacyCard2Title: "Geen Tracking & Geen Externe Servers",
    privacyCard2Desc: "DailyFlow gebruikt geen externe tracking-databases en verzendt geen telemetrie. We verzamelen, monitoren, delen of verkopen nooit persoonlijke of financiële gegevens aan derden.",
    privacyCard3Title: "Lokale Apparaatmeldingen",
    privacyCard3Desc: "Herinneringen en alarmen worden rechtstreeks via het besturingssysteem van je apparaat gepland. Geen externe cloudservers ontvangen je planning.",
    privacyCard4Title: "Volledige Controle voor de Gebruiker",
    privacyCard4Desc: "Je hebt te allen tijde de volledige controle over je gegevens. Het wissen van app-gegevens of het verwijderen van de app verwijdert permanent alle opgeslagen gegevens van je apparaat.",
    privacyFooterNote: "Vragen over ons privacybeleid? Neem contact met ons op via"
  }
};

let currentLanguage = DEFAULT_LANGUAGE;

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
  const dict = translations[currentLanguage] || translations.en;
  if (dict && dict[key] !== undefined) {
    return dict[key];
  }
  const enDict = translations.en;
  if (enDict && enDict[key] !== undefined) {
    return enDict[key];
  }
  return fallback;
}

function applyLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    lang = DEFAULT_LANGUAGE;
  }
  currentLanguage = lang;
  try {
    localStorage.setItem("dailyflow_language", lang);
  } catch (e) {}
  document.documentElement.lang = lang;

  const dict = translations[lang] || translations.en;

  // 1. Text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // 2. Placeholder elements with data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // 3. Title elements with data-i18n-title
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (dict[key] !== undefined) {
      el.title = dict[key];
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

  // 8. Re-render dynamic components safely if functions exist
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
  const trigger = document.querySelector("#langPickerTrigger");
  const popup = document.querySelector("#langPickerPopup");

  if (trigger && popup) {
    // Toggle on trigger click
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = !popup.hidden && popup.classList.contains("is-open");
      if (isOpen) {
        closeLangPicker();
      } else {
        if (typeof closeAllCustomPopups === "function") {
          closeAllCustomPopups();
        }
        if (typeof setCustomDatePickerVisibility === "function") {
          setCustomDatePickerVisibility(false);
        }
        popup.hidden = false;
        popup.style.display = "flex";
        popup.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        trigger.classList.add("active");
      }
    });

    // Option clicks
    popup.querySelectorAll(".custom-select-option").forEach((opt) => {
      opt.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const selectedLang = opt.getAttribute("data-lang");
        if (selectedLang) {
          applyLanguage(selectedLang);
        }
        closeLangPicker();
      });
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#langPickerWrap")) {
        closeLangPicker();
      }
    });

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeLangPicker();
      }
    });
  }

  // Apply stored language
  applyLanguage(getStoredLanguage());
}

// Expose globally
window.translations = translations;
window.applyLanguage = applyLanguage;
window.getStoredLanguage = getStoredLanguage;
window.t = t;
window.initI18n = initI18n;
window.closeLangPicker = closeLangPicker;
