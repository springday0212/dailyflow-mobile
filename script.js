const storageKey = "dotoday-tasks";
const themeKey = "dotoday-theme";
const matchaExpiryKey = "dailyflow-matcha-expires";
const cafeRoyalExpiryKey = "dailyflow-cafe-royal-expires";
const themeExpiryKeys = { matcha: matchaExpiryKey, "cafe-royal": cafeRoyalExpiryKey };
const themeDetails = {
  matcha: { eyebrow: "MATCHA GARDEN", title: "A little more green today?", adTitle: "Your garden is getting ready" },
  "cafe-royal": { eyebrow: "CAFÉ ROYAL", title: "Time for a coffee break?", adTitle: "The lounge is getting ready" }
};

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const priorityInput = document.querySelector("#priorityInput");
const taskList = document.querySelector("#taskList");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-button");
const quickNotes = document.querySelector("#quickNotes");
const quickNotesStorageKey = "dailyflow_quick_notes";
let activeFilter = "all";
let tasks = loadTasks();

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function formatDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date);
}

function getPriorityLabel(priority) {
  return { high: "High", medium: "Med", low: "Low" }[priority];
}

function getVisibleTasks() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  return tasks.filter((task) => {
    const matchesFilter = activeFilter === "all" || (activeFilter === "active" && !task.completed) || (activeFilter === "completed" && task.completed);
    const matchesSearch = task.title.toLowerCase().includes(searchTerm);
    return matchesFilter && matchesSearch;
  });
}

function renderTasks() {
  const visibleTasks = getVisibleTasks();
  taskList.innerHTML = visibleTasks.map((task, index) => `
    <article class="task-item ${task.completed ? "completed" : ""}" style="animation-delay: ${index * 35}ms">
      <button class="check-button" type="button" data-action="toggle" data-id="${task.id}" aria-label="${task.completed ? "Mark as incomplete" : "Mark as complete"}">${task.completed ? "✓" : ""}</button>
      <div class="task-content">
        <span class="task-name">${escapeHtml(task.title)}</span>
        <div class="task-meta"><span class="priority priority-${task.priority}">${getPriorityLabel(task.priority)}</span>${task.scheduledTime ? `<span>${escapeHtml(task.scheduledTime)}</span>` : ""}<span>${task.createdAt}</span></div>
      </div>
      <div class="task-actions">
        <button class="task-action" type="button" data-action="edit" data-id="${task.id}" aria-label="Edit task">✎</button>
        <button class="task-action delete" type="button" data-action="delete" data-id="${task.id}" aria-label="Delete task">×</button>
      </div>
    </article>
  `).join("");
  emptyState.hidden = visibleTasks.length > 0;
  updateStats();
}

function updateStats() {
  const completed = tasks.filter((task) => task.completed).length;
  const active = tasks.length - completed;
  const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  document.querySelector("#totalCount").textContent = tasks.length;
  document.querySelector("#activeCount").textContent = active;
  document.querySelector("#doneCount").textContent = completed;
  document.querySelector("#allFilterCount").textContent = tasks.length;
  document.querySelector("#completionPercent").textContent = `${percent}%`;
  document.querySelector("#progressBar").style.width = `${percent}%`;
  document.querySelector("#listDescription").textContent = active === 1 
    ? "1 task remaining" 
    : (active > 1 ? `${active} tasks remaining` : "Planned for today");
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = taskInput.value.trim();
  if (!title) return;
  tasks.unshift({ id: Date.now().toString(), title, priority: priorityInput.value, completed: false, createdAt: formatDate() });
  saveTasks();
  taskInput.value = "";
  priorityInput.value = "medium";
  activeFilter = "all";
  filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.filter === activeFilter));
  renderTasks();
  taskInput.focus();
});

taskList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const taskId = button.dataset.id;
  const task = tasks.find((item) => item.id === taskId);
  if (!task) return;
  if (button.dataset.action === "toggle") task.completed = !task.completed;
  if (button.dataset.action === "delete") tasks = tasks.filter((item) => item.id !== taskId);
  if (button.dataset.action === "edit") {
    const nextTitle = window.prompt("Edit task", task.title);
    if (nextTitle === null) return;
    task.title = nextTitle.trim() || task.title;
  }
  saveTasks();
  renderTasks();
});

filterButtons.forEach((button) => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach((item) => item.classList.toggle("active", item === button));
  renderTasks();
}));

searchInput.addEventListener("input", renderTasks);
document.querySelector("#clearCompleted").addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
});

const themeToggle = document.querySelector("#themeToggle");
const themeModal = document.querySelector("#themeModal");
const themePickerView = document.querySelector("#themePickerView");
const themeConfirmView = document.querySelector("#themeConfirmView");
const themeAdView = document.querySelector("#themeAdView");
const themeWatchAd = document.querySelector("#themeWatchAd");
const themeConfirmCancel = document.querySelector("#themeConfirmCancel");
const themeAdProgress = document.querySelector("#themeAdProgress");
const themeAdCountdown = document.querySelector("#themeAdCountdown");
const themeConfirmEyebrow = document.querySelector("#themeConfirmEyebrow");
const themeConfirmTitle = document.querySelector("#themeConfirmTitle");
const themeConfirmCopy = document.querySelector("#themeConfirmCopy");
const themeAdEyebrow = document.querySelector("#themeAdEyebrow");
const themeAdTitle = document.querySelector("#themeAdTitle");
const themeAdCopy = document.querySelector("#themeAdCopy");
const themeOptions = document.querySelectorAll("[data-theme-choice]");
let themeAdTimer = null;
let pendingTheme = "matcha";

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  document.body.dataset.theme = theme === "matcha" || theme === "cafe-royal" ? theme : "";
  localStorage.setItem(themeKey, theme === "matcha" ? "matcha" : theme);
  if (theme === "cafe-royal") localStorage.setItem(themeKey, "cafe-royal");
  themeOptions.forEach((option) => option.classList.toggle("active", option.dataset.themeChoice === theme));
}

function hasActiveTheme(theme) {
  const expiryKey = themeExpiryKeys[theme];
  const expiresAt = Number(localStorage.getItem(expiryKey));
  if (!expiresAt || expiresAt <= Date.now()) {
    localStorage.removeItem(expiryKey);
    return false;
  }
  return true;
}

function getStoredTheme() {
  const storedTheme = localStorage.getItem(themeKey);
  return (storedTheme === "matcha" || storedTheme === "cafe-royal") && hasActiveTheme(storedTheme) ? storedTheme : (storedTheme === "dark" ? "dark" : "light");
}

function updateThemeUnlockCopy(theme) {
  const details = themeDetails[theme];
  themeConfirmEyebrow.textContent = details.eyebrow;
  themeConfirmTitle.textContent = details.title;
  themeConfirmCopy.textContent = "Watch a short ad to use this theme for 24 hours.";
  themeAdEyebrow.textContent = details.eyebrow;
  themeAdTitle.textContent = details.adTitle;
  themeAdCopy.textContent = "The theme will unlock when the short ad simulation ends.";
}

function setThemeModalView(view) {
  themePickerView.hidden = view !== "picker";
  themeConfirmView.hidden = view !== "confirm";
  themeAdView.hidden = view !== "ad";
}

function setThemeModalVisibility(isVisible) {
  themeModal.hidden = !isVisible;
  document.body.classList.toggle("modal-open", isVisible);
  if (isVisible) {
    setThemeModalView("picker");
    themeModal.querySelector(".theme-close").focus();
  } else if (themeAdTimer) {
    clearInterval(themeAdTimer);
    themeAdTimer = null;
  }
}

themeToggle.addEventListener("click", () => setThemeModalVisibility(true));
themeModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-theme-close]")) setThemeModalVisibility(false);
});
themeOptions.forEach((option) => option.addEventListener("click", () => {
  const selectedTheme = option.dataset.themeChoice;
  if (themeExpiryKeys[selectedTheme] && !hasActiveTheme(selectedTheme)) {
    pendingTheme = selectedTheme;
    updateThemeUnlockCopy(selectedTheme);
    setThemeModalView("confirm");
    return;
  }
  applyTheme(selectedTheme);
  setThemeModalVisibility(false);
}));
themeConfirmCancel.addEventListener("click", () => setThemeModalView("picker"));
themeWatchAd.addEventListener("click", () => {
  setThemeModalView("ad");
  themeWatchAd.disabled = true;
  let elapsed = 0;
  themeAdProgress.style.width = "0%";
  themeAdCountdown.textContent = "4";
  themeAdTimer = window.setInterval(() => {
    elapsed += 100;
    themeAdProgress.style.width = `${Math.min((elapsed / 4500) * 100, 100)}%`;
    themeAdCountdown.textContent = String(Math.max(Math.ceil((4500 - elapsed) / 1000), 0));
    if (elapsed >= 4500) {
      clearInterval(themeAdTimer);
      themeAdTimer = null;
      localStorage.setItem(themeExpiryKeys[pendingTheme], String(Date.now() + 86400000));
      applyTheme(pendingTheme);
      setThemeModalVisibility(false);
      themeWatchAd.disabled = false;
    }
  }, 100);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !themeModal.hidden) setThemeModalVisibility(false);
});

const calendarModal = document.querySelector("#calendarModal");
const calendarDialog = calendarModal ? calendarModal.querySelector(".calendar-dialog") : null;
const calendarWidget = document.querySelector("#calendarWidget");
const monthTitle = document.querySelector("#monthTitle");
const yearSelect = document.querySelector("#yearSelect");
const monthDays = document.querySelector("#monthDays");
const hourList = document.querySelector("#hourList");
const minuteList = document.querySelector("#minuteList");
const selectionSummary = document.querySelector("#selectionSummary");
const todayButton = document.querySelector("#todayButton");
const continueButton = document.querySelector("#continueButton");
const calendarNote = document.querySelector("#calendarNote");
const periodButtons = document.querySelectorAll(".period-button");
const pickerTabDate = document.querySelector("#pickerTabDate");
const pickerTabTime = document.querySelector("#pickerTabTime");
const pickerDateBadge = document.querySelector("#pickerDateBadge");
const pickerTimeBadge = document.querySelector("#pickerTimeBadge");
const timeDisplayHour = document.querySelector("#timeDisplayHour");
const timeDisplayMinute = document.querySelector("#timeDisplayMinute");
const minuteIncBtn = document.querySelector("#minuteIncBtn");
const minuteDecBtn = document.querySelector("#minuteDecBtn");
const presetToday = document.querySelector("#presetToday");
const presetTomorrow = document.querySelector("#presetTomorrow");
const presetWeekend = document.querySelector("#presetWeekend");
const calendarNotesKey = "dotoday-calendar-notes";

let pickerDate = new Date();
let pickerMonth = new Date(pickerDate.getFullYear(), pickerDate.getMonth(), 1);
let selectedHourIndex = 9; // 10:00
let selectedMinuteIndex = 0;
let selectedPeriod = "AM";

function setActivePickerTab(tab) {
  const isDate = tab === "date";
  if (pickerTabDate) {
    pickerTabDate.classList.toggle("active", isDate);
    pickerTabDate.setAttribute("aria-selected", String(isDate));
  }
  if (pickerTabTime) {
    pickerTabTime.classList.toggle("active", !isDate);
    pickerTabTime.setAttribute("aria-selected", String(!isDate));
  }
  if (calendarDialog) {
    calendarDialog.dataset.activeTab = tab;
  }
}

if (pickerTabDate) pickerTabDate.addEventListener("click", () => setActivePickerTab("date"));
if (pickerTabTime) pickerTabTime.addEventListener("click", () => setActivePickerTab("time"));

function setCalendarVisibility(isVisible) {
  if (!calendarModal) return;
  calendarModal.hidden = !isVisible;
  document.body.classList.toggle("modal-open", isVisible);
  if (isVisible) {
    setActivePickerTab("date");
    renderMonthPicker();
    renderTimePicker();
    const closeBtn = calendarModal.querySelector(".calendar-close");
    if (closeBtn) closeBtn.focus();
  }
}

if (calendarWidget) calendarWidget.addEventListener("click", () => setCalendarVisibility(true));
if (calendarModal) {
  calendarModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-calendar-close]")) setCalendarVisibility(false);
  });
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && calendarModal && !calendarModal.hidden) setCalendarVisibility(false);
});

function formatSelectedTime() {
  return `${String(selectedHourIndex + 1).padStart(2, "0")}:${String(selectedMinuteIndex).padStart(2, "0")} ${selectedPeriod}`;
}

function updateTimeSelection() {
  if (hourList) {
    hourList.querySelectorAll(".time-option").forEach((option, optionIndex) => {
      const isSelected = optionIndex === selectedHourIndex;
      option.classList.toggle("active", isSelected);
      option.classList.toggle("selected", isSelected);
      option.setAttribute("aria-pressed", String(isSelected));
    });
  }
  if (minuteList) {
    minuteList.querySelectorAll(".time-option").forEach((option) => {
      const minVal = Number(option.dataset.timeMinute);
      const isSelected = minVal === selectedMinuteIndex;
      option.classList.toggle("active", isSelected);
      option.classList.toggle("selected", isSelected);
      option.setAttribute("aria-pressed", String(isSelected));
    });
  }
  if (timeDisplayHour) timeDisplayHour.textContent = String(selectedHourIndex + 1).padStart(2, "0");
  if (timeDisplayMinute) timeDisplayMinute.textContent = String(selectedMinuteIndex).padStart(2, "0");
  if (pickerDateBadge) pickerDateBadge.textContent = pickerDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  if (pickerTimeBadge) pickerTimeBadge.textContent = formatSelectedTime();

  const selectedDate = pickerDate.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" });
  if (selectionSummary) selectionSummary.textContent = `${selectedDate} at ${formatSelectedTime()}`;
}

function renderTimePicker() {
  if (hourList) {
    hourList.innerHTML = Array.from({ length: 12 }, (_, index) => {
      const isSelected = index === selectedHourIndex;
      return `<button class="time-option${isSelected ? " active selected" : ""}" type="button" data-time-index="${index}" aria-pressed="${isSelected}">${String(index + 1).padStart(2, "0")}</button>`;
    }).join("");

    hourList.querySelectorAll(".time-option").forEach((timeButton) => {
      timeButton.addEventListener("click", (event) => {
        event.preventDefault();
        selectedHourIndex = Number(timeButton.dataset.timeIndex);
        updateTimeSelection();
      });
    });
  }

  if (minuteList) {
    const minuteSteps = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    minuteList.innerHTML = minuteSteps.map((minute) => {
      const isSelected = minute === selectedMinuteIndex;
      return `<button class="time-option${isSelected ? " active selected" : ""}" type="button" data-time-minute="${minute}" aria-pressed="${isSelected}">${String(minute).padStart(2, "0")}</button>`;
    }).join("");

    minuteList.querySelectorAll(".time-option").forEach((timeButton) => {
      timeButton.addEventListener("click", (event) => {
        event.preventDefault();
        selectedMinuteIndex = Number(timeButton.dataset.timeMinute);
        updateTimeSelection();
      });
    });
  }

  updateTimeSelection();
}

if (minuteIncBtn) {
  minuteIncBtn.addEventListener("click", () => {
    selectedMinuteIndex = (selectedMinuteIndex + 5) % 60;
    updateTimeSelection();
  });
}
if (minuteDecBtn) {
  minuteDecBtn.addEventListener("click", () => {
    selectedMinuteIndex = (selectedMinuteIndex - 5 + 60) % 60;
    updateTimeSelection();
  });
}

document.querySelectorAll("[data-time-preset]").forEach((presetBtn) => {
  presetBtn.addEventListener("click", () => {
    const raw = presetBtn.dataset.timePreset;
    const [timePart, period] = raw.split(" ");
    const [hourStr, minStr] = timePart.split(":");
    let h = Number(hourStr);
    selectedHourIndex = (h % 12) - 1;
    if (selectedHourIndex < 0) selectedHourIndex = 11;
    selectedMinuteIndex = Number(minStr);
    selectedPeriod = period;
    periodButtons.forEach((btn) => {
      const isActive = btn.dataset.period === selectedPeriod;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
    document.querySelectorAll("[data-time-preset]").forEach((b) => b.classList.toggle("active", b === presetBtn));
    updateTimeSelection();
  });
});

function updateDatePresetActive(type) {
  if (presetToday) presetToday.classList.toggle("active", type === "today");
  if (presetTomorrow) presetTomorrow.classList.toggle("active", type === "tomorrow");
  if (presetWeekend) presetWeekend.classList.toggle("active", type === "weekend");
}

if (presetToday) {
  presetToday.addEventListener("click", () => {
    pickerDate = new Date();
    pickerMonth = new Date(pickerDate.getFullYear(), pickerDate.getMonth(), 1);
    updateDatePresetActive("today");
    renderMonthPicker();
    updateTimeSelection();
  });
}

if (presetTomorrow) {
  presetTomorrow.addEventListener("click", () => {
    const tom = new Date();
    tom.setDate(tom.getDate() + 1);
    pickerDate = tom;
    pickerMonth = new Date(pickerDate.getFullYear(), pickerDate.getMonth(), 1);
    updateDatePresetActive("tomorrow");
    renderMonthPicker();
    updateTimeSelection();
  });
}

if (presetWeekend) {
  presetWeekend.addEventListener("click", () => {
    const wk = new Date();
    const day = wk.getDay();
    const daysUntilSaturday = (6 - day + 7) % 7 || 7;
    wk.setDate(wk.getDate() + daysUntilSaturday);
    pickerDate = wk;
    pickerMonth = new Date(pickerDate.getFullYear(), pickerDate.getMonth(), 1);
    updateDatePresetActive("weekend");
    renderMonthPicker();
    updateTimeSelection();
  });
}

function renderMonthPicker() {
  if (!monthTitle || !monthDays) return;
  monthTitle.textContent = pickerMonth.toLocaleDateString("en-US", { month: "long" });
  renderYearOptions();
  const firstDay = new Date(pickerMonth.getFullYear(), pickerMonth.getMonth(), 1).getDay();
  const daysInMonth = new Date(pickerMonth.getFullYear(), pickerMonth.getMonth() + 1, 0).getDate();
  const daysInPreviousMonth = new Date(pickerMonth.getFullYear(), pickerMonth.getMonth(), 0).getDate();
  const cells = [];
  for (let index = firstDay - 1; index >= 0; index -= 1) cells.push({ day: daysInPreviousMonth - index, muted: true });
  for (let day = 1; day <= daysInMonth; day += 1) cells.push({ day });
  while (cells.length % 7) cells.push({ day: cells.length - firstDay - daysInMonth + 1, muted: true });
  monthDays.innerHTML = cells.map((cell) => {
    const isSelected = !cell.muted && cell.day === pickerDate.getDate() && pickerMonth.getMonth() === pickerDate.getMonth() && pickerMonth.getFullYear() === pickerDate.getFullYear();
    const isToday = !cell.muted && cell.day === new Date().getDate() && pickerMonth.getMonth() === new Date().getMonth() && pickerMonth.getFullYear() === new Date().getFullYear();
    return `<button class="month-day${cell.muted ? " muted" : ""}${isToday ? " today" : ""}${isSelected ? " selected" : ""}" type="button" ${cell.muted ? "disabled" : `data-day="${cell.day}"`}>${cell.day}</button>`;
  }).join("");
}

function renderYearOptions() {
  if (!yearSelect) return;
  yearSelect.innerHTML = Array.from({ length: 201 }, (_, index) => 1900 + index).map((year) => `<option value="${year}"${year === pickerMonth.getFullYear() ? " selected" : ""}>${year}</option>`).join("");
}

if (todayButton) {
  todayButton.addEventListener("click", () => {
    pickerDate = new Date();
    pickerMonth = new Date(pickerDate.getFullYear(), pickerDate.getMonth(), 1);
    updateDatePresetActive("today");
    renderMonthPicker();
    updateTimeSelection();
  });
}

if (yearSelect) {
  yearSelect.addEventListener("change", () => {
    pickerMonth.setFullYear(Number(yearSelect.value));
    if (pickerDate.getFullYear() !== Number(yearSelect.value)) pickerDate = new Date(pickerMonth.getFullYear(), pickerDate.getMonth(), 1);
    renderMonthPicker();
    updateTimeSelection();
  });
}

if (monthDays) {
  monthDays.addEventListener("click", (event) => {
    const dayButton = event.target.closest("[data-day]");
    if (!dayButton) return;
    pickerDate = new Date(pickerMonth.getFullYear(), pickerMonth.getMonth(), Number(dayButton.dataset.day));
    renderMonthPicker();
    updateTimeSelection();
    // On mobile, smoothly switch to time tab once date is chosen
    if (window.innerWidth <= 768) {
      window.setTimeout(() => setActivePickerTab("time"), 160);
    }
  });
}

const prevMonthBtn = document.querySelector("#previousMonth");
const nextMonthBtn = document.querySelector("#nextMonth");
if (prevMonthBtn) prevMonthBtn.addEventListener("click", () => { pickerMonth.setMonth(pickerMonth.getMonth() - 1); renderMonthPicker(); });
if (nextMonthBtn) nextMonthBtn.addEventListener("click", () => { pickerMonth.setMonth(pickerMonth.getMonth() + 1); renderMonthPicker(); });

periodButtons.forEach((button) => button.addEventListener("click", () => {
  selectedPeriod = button.dataset.period;
  periodButtons.forEach((item) => {
    const isActive = item === button;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
  renderTimePicker();
}));

if (continueButton) {
  continueButton.addEventListener("click", () => {
    const note = calendarNote ? calendarNote.value.trim() : "";
    if (!note) {
      if (calendarNote) calendarNote.focus();
      return;
    }
    const savedNotes = JSON.parse(localStorage.getItem(calendarNotesKey) || "[]");
    const selectedDate = `${pickerDate.getFullYear()}-${String(pickerDate.getMonth() + 1).padStart(2, "0")}-${String(pickerDate.getDate()).padStart(2, "0")}`;
    const selectedTime = formatSelectedTime();
    savedNotes.push({ date: selectedDate, time: selectedTime, note });
    localStorage.setItem(calendarNotesKey, JSON.stringify(savedNotes));
    tasks.unshift({ id: Date.now().toString(), title: note, priority: "medium", completed: false, createdAt: formatDate(pickerDate), scheduledTime: selectedTime });
    saveTasks();
    renderTasks();
    if (selectionSummary) selectionSummary.textContent = "Saved to Tasks.";
    continueButton.textContent = "Saved ✓";
    window.setTimeout(() => {
      continueButton.textContent = "Save to Tasks";
      if (calendarNote) calendarNote.value = "";
      setCalendarVisibility(false);
    }, 500);
  });
}

function renderCalendarDates() {
  const dateLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const today = new Date();
  const monday = new Date(today);
  const dayOffset = (today.getDay() + 6) % 7;
  monday.setDate(today.getDate() - dayOffset);
  const datesContainer = document.querySelector("#calendarDates");
  if (!datesContainer) return;
  datesContainer.innerHTML = dateLabels.map((label, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    const selected = date.toDateString() === today.toDateString() ? " selected" : "";
    return `<span class="calendar-date${selected}" data-widget-date="${date.toISOString()}"><span>${label}</span><span class="calendar-date-number">${date.getDate()}</span></span>`;
  }).join("");
}

applyTheme(getStoredTheme());
if (localStorage.getItem(themeKey) === "matcha") {
  const storedTheme = localStorage.getItem(themeKey);
  const themeExpiresAt = Number(localStorage.getItem(themeExpiryKeys[storedTheme]));
  window.setTimeout(() => {
    if (!hasActiveTheme(storedTheme)) applyTheme("light");
  }, Math.max(themeExpiresAt - Date.now(), 0));
}
quickNotes.value = localStorage.getItem(quickNotesStorageKey) || "";
quickNotes.addEventListener("input", () => {
  localStorage.setItem(quickNotesStorageKey, quickNotes.value);
});
renderCalendarDates();
renderMonthPicker();
renderTimePicker();
renderTasks();

const menuButton = document.querySelector("#menuButton");
const drawerClose = document.querySelector("#drawerClose");
const drawerOverlay = document.querySelector("#drawerOverlay");
const sidebarDrawer = document.querySelector("#sidebarDrawer");
const dashboardView = document.querySelector("#dashboardView");
const focusView = document.querySelector("#focusView");
const financeView = document.querySelector("#finance-view");
const focusBack = document.querySelector("#focusBack");
const financeBack = document.querySelector("#financeBack");
const sidebarLinks = document.querySelectorAll(".sidebar-link");
const pomodoroTime = document.querySelector("#pomodoroTime");
const pomodoroStatus = document.querySelector("#pomodoroStatus");
const pomodoroProgress = document.querySelector("#pomodoroProgress");
const pomodoroStart = document.querySelector("#pomodoroStart");
const pomodoroReset = document.querySelector("#pomodoroReset");
const pomodoroModes = document.querySelectorAll(".pomodoro-mode");
const financeForm = document.querySelector("#financeForm");
const expenseTitle = document.querySelector("#expenseTitle");
const expenseAmount = document.querySelector("#expenseAmount");
const expenseDate = document.querySelector("#expenseDate");
const expenseCategory = document.querySelector("#expenseCategory");
const expenseList = document.querySelector("#expenseList");
const financeTotal = document.querySelector("#financeTotal");
const financeBudgetStatus = document.querySelector("#financeBudgetStatus");
const financeGaugeSegments = document.querySelectorAll(".gauge-segment");
const financeCategories = document.querySelector("#financeCategories");
const financeCount = document.querySelector("#financeCount");
const currencySelect = document.querySelector("#currencySelect");
const expenseAmountLabel = document.querySelector("#expenseAmount");
const budgetInput = document.querySelector("#budgetInput");
const budgetSave = document.querySelector("#budgetSave");
const budgetToggleBtn = document.querySelector("#budgetToggleBtn");
const budgetEditorCard = document.querySelector("#budgetEditorCard");
const budgetEditorClose = document.querySelector("#budgetEditorClose");
const budgetBadgeVal = document.querySelector("#budgetBadgeVal");
const budgetCurrencySymbol = document.querySelector("#budgetCurrencySymbol");
const financeSummary = document.querySelector(".finance-summary");
const financeToast = document.querySelector("#financeToast");
const undoExpense = document.querySelector("#undoExpense");
const financeStorageKey = "dailyflow_expenses";
const currencyStorageKey = "dailyflow_currency";
const budgetStorageKey = "dailyflow_monthly_budget";
const currencies = {
  USD: { symbol: "$", name: "US Dollar" },
  EUR: { symbol: "€", name: "Euro" },
  JPY: { symbol: "¥", name: "Japanese Yen" },
  GBP: { symbol: "£", name: "British Pound" },
  CAD: { symbol: "C$", name: "Canadian Dollar" },
  TRY: { symbol: "₺", name: "Turkish Lira" },
  AED: { symbol: "د.إ", name: "UAE Dirham" }
};
const pomodoroCircumference = 2 * Math.PI * 112;
let pomodoroFocusMinutes = 25;
let pomodoroBreakMinutes = 5;
let pomodoroRemaining = pomodoroFocusMinutes * 60;
let pomodoroTotal = pomodoroRemaining;
let pomodoroIsBreak = false;
let pomodoroTimer = null;
let deletedExpense = null;
let undoTimer = null;

function setDrawerVisibility(isOpen) {
  sidebarDrawer.classList.toggle("is-open", isOpen);
  drawerOverlay.hidden = !isOpen;
  document.body.classList.toggle("drawer-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  sidebarDrawer.setAttribute("aria-hidden", String(!isOpen));
}

function setAppView(view) {
  const isFocus = view === "focus";
  const isFinance = view === "finance";
  dashboardView.hidden = isFocus || isFinance;
  focusView.hidden = !isFocus;
  financeView.hidden = !isFinance;
  document.body.classList.toggle("pomodoro-active", isFocus);
  document.body.classList.toggle("finance-active", isFinance);
  sidebarLinks.forEach((link) => link.classList.toggle("active", link.dataset.view === view));
  setDrawerVisibility(false);
}

menuButton.addEventListener("click", () => setDrawerVisibility(!sidebarDrawer.classList.contains("is-open")));
drawerClose.addEventListener("click", () => setDrawerVisibility(false));
drawerOverlay.addEventListener("click", () => setDrawerVisibility(false));
focusBack.addEventListener("click", () => setAppView("dashboard"));
financeBack.addEventListener("click", () => setAppView("dashboard"));
sidebarLinks.forEach((link) => link.addEventListener("click", () => setAppView(link.dataset.view)));

function updatePomodoroDisplay() {
  const minutes = Math.floor(pomodoroRemaining / 60);
  const seconds = pomodoroRemaining % 60;
  pomodoroTime.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  pomodoroStatus.textContent = pomodoroIsBreak ? "Break Time" : "Focus Time";
  const progress = pomodoroTotal ? pomodoroRemaining / pomodoroTotal : 0;
  pomodoroProgress.style.strokeDasharray = String(pomodoroCircumference);
  pomodoroProgress.style.strokeDashoffset = String(pomodoroCircumference * (1 - progress));
}

function notifyPomodoroComplete() {
  if (navigator.vibrate) navigator.vibrate([180, 100, 180]);
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.frequency.value = 660;
    gain.gain.setValueAtTime(.08, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + .35);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + .35);
  } catch (error) {
    // Audio may be unavailable in a browser context without sound permission.
  }
}

function switchPomodoroPhase() {
  notifyPomodoroComplete();
  pomodoroIsBreak = !pomodoroIsBreak;
  pomodoroTotal = (pomodoroIsBreak ? pomodoroBreakMinutes : pomodoroFocusMinutes) * 60;
  pomodoroRemaining = pomodoroTotal;
  updatePomodoroDisplay();
}

function tickPomodoro() {
  if (pomodoroRemaining <= 0) {
    switchPomodoroPhase();
    return;
  }
  pomodoroRemaining -= 1;
  updatePomodoroDisplay();
}

pomodoroStart.addEventListener("click", () => {
  if (pomodoroTimer) {
    clearInterval(pomodoroTimer);
    pomodoroTimer = null;
    pomodoroStart.textContent = "Start";
    return;
  }
  pomodoroTimer = window.setInterval(tickPomodoro, 1000);
  pomodoroStart.textContent = "Pause";
});
pomodoroReset.addEventListener("click", () => {
  clearInterval(pomodoroTimer);
  pomodoroTimer = null;
  pomodoroIsBreak = false;
  pomodoroTotal = pomodoroFocusMinutes * 60;
  pomodoroRemaining = pomodoroTotal;
  pomodoroStart.textContent = "Start";
  updatePomodoroDisplay();
});
pomodoroModes.forEach((mode) => mode.addEventListener("click", () => {
  pomodoroModes.forEach((item) => item.classList.toggle("active", item === mode));
  pomodoroFocusMinutes = Number(mode.dataset.focus);
  pomodoroBreakMinutes = Number(mode.dataset.break);
  pomodoroReset.click();
}));
updatePomodoroDisplay();

const financeCategoryNames = ["Transfers", "Shopping", "Food & Beverages", "Utility/Bills"];
const financeCategoryColors = ["#59e6ff", "#d486ff", "#ff76ae", "#6db9ff"];
let expenses = loadExpenses();
let selectedCurrency = localStorage.getItem(currencyStorageKey) || "USD";
let monthlyBudget = Number(localStorage.getItem(budgetStorageKey)) || 0;
if (!currencies[selectedCurrency]) selectedCurrency = "USD";

function getCurrencySymbol() {
  return currencies[selectedCurrency]?.symbol || currencies.USD.symbol;
}

function formatMoney(amount) {
  return `${getCurrencySymbol()}${Number(amount).toFixed(2).replace(".00", "")}`;
}

function getTodayInputDate() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}

function formatExpenseDate(dateValue) {
  if (!dateValue) return "Today";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) return dateValue;
  const date = new Date(`${dateValue}T00:00:00`);
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function loadExpenses() {
  try {
    return JSON.parse(localStorage.getItem(financeStorageKey)) || [];
  } catch {
    return [];
  }
}

function saveExpenses() {
  localStorage.setItem(financeStorageKey, JSON.stringify(expenses));
}

function renderFinance() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  financeTotal.textContent = formatMoney(total);
  currencySelect.value = selectedCurrency;
  budgetInput.value = monthlyBudget || "";
  if (budgetBadgeVal) {
    budgetBadgeVal.textContent = monthlyBudget > 0 ? formatMoney(monthlyBudget) : "Set";
  }
  if (budgetCurrencySymbol) {
    budgetCurrencySymbol.textContent = getCurrencySymbol();
  }
  expenseAmountLabel.placeholder = `Amount (${getCurrencySymbol()})`;
  const budgetRatio = monthlyBudget > 0 ? Math.min(total / monthlyBudget, 1) : 0;
  const isOverBudget = monthlyBudget > 0 && total > monthlyBudget;
  financeSummary.classList.toggle("budget-exceeded", isOverBudget);
  if (!monthlyBudget) {
    financeBudgetStatus.textContent = "Set a monthly budget";
  } else if (isOverBudget) {
    financeBudgetStatus.textContent = `Over budget by ${formatMoney(total - monthlyBudget)} (${Math.round((total / monthlyBudget) * 100)}%)`;
  } else {
    financeBudgetStatus.textContent = `${formatMoney(monthlyBudget - total)} remaining`;
  }
  let gaugeOffset = 0;
  financeGaugeSegments.forEach((segment) => {
    const category = segment.dataset.category;
    const categoryTotal = expenses.filter((expense) => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0);
    const segmentLength = total ? (categoryTotal / total) * 392.7 * budgetRatio : 0;
    segment.style.strokeDasharray = `${segmentLength} ${392.7 - segmentLength}`;
    segment.style.strokeDashoffset = String(-gaugeOffset);
    gaugeOffset += segmentLength;
  });
  financeCount.textContent = `${expenses.length} ${expenses.length === 1 ? "item" : "items"}`;
  financeCategories.innerHTML = financeCategoryNames.map((category, index) => {
    const categoryTotal = expenses.filter((expense) => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0);
    const percentage = total ? Math.round((categoryTotal / total) * 100) : 0;
    return `<div class="finance-category"><div class="finance-category-head"><strong>${category}</strong><span>${formatMoney(categoryTotal)} · ${percentage}%</span></div><div class="finance-bar"><span style="width:${percentage}%; background:${financeCategoryColors[index]}"></span></div></div>`;
  }).join("");
  expenseList.innerHTML = expenses.length ? expenses.map((expense) => `<div class="expense-row"><div class="expense-info"><strong>${escapeHtml(expense.title)}</strong><span>${expense.category} · ${formatExpenseDate(expense.date || expense.createdAt)}</span></div><div class="expense-total">${formatMoney(expense.amount)}<button class="expense-delete" type="button" data-expense-id="${expense.id}" aria-label="Delete expense">×</button></div></div>`).join("") : `<p class="finance-empty">No expenses yet.</p>`;
}

currencySelect.addEventListener("change", () => {
  selectedCurrency = currencySelect.value;
  localStorage.setItem(currencyStorageKey, selectedCurrency);
  renderFinance();
});

if (budgetToggleBtn && budgetEditorCard) {
  budgetToggleBtn.addEventListener("click", () => {
    const willOpen = budgetEditorCard.hidden;
    budgetEditorCard.hidden = !willOpen;
    budgetToggleBtn.setAttribute("aria-expanded", String(willOpen));
    if (willOpen && budgetInput) {
      budgetInput.focus();
    }
  });
}

if (budgetEditorClose && budgetEditorCard) {
  budgetEditorClose.addEventListener("click", () => {
    budgetEditorCard.hidden = true;
    if (budgetToggleBtn) budgetToggleBtn.setAttribute("aria-expanded", "false");
  });
}

document.querySelectorAll(".budget-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    if (chip.dataset.budgetReset) {
      budgetInput.value = "";
      budgetInput.focus();
      return;
    }
    const addVal = Number(chip.dataset.budgetAdd) || 0;
    const curVal = Number(budgetInput.value) || 0;
    budgetInput.value = (curVal + addVal).toString();
    budgetInput.focus();
  });
});

if (budgetSave) {
  budgetSave.addEventListener("click", () => {
    monthlyBudget = Math.max(0, Number(budgetInput.value) || 0);
    localStorage.setItem(budgetStorageKey, String(monthlyBudget));
    renderFinance();
    const origText = budgetSave.textContent;
    budgetSave.textContent = "Saved ✓";
    window.setTimeout(() => {
      budgetSave.textContent = origText;
      if (budgetEditorCard) {
        budgetEditorCard.hidden = true;
        if (budgetToggleBtn) budgetToggleBtn.setAttribute("aria-expanded", "false");
      }
    }, 600);
  });
}
expenseDate.value = getTodayInputDate();

financeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = expenseTitle.value.trim();
  const amount = Number(expenseAmount.value);
  if (!title || !Number.isFinite(amount) || amount <= 0) return;
  expenses.unshift({ id: Date.now().toString(), title, amount, category: expenseCategory.value, date: expenseDate.value || getTodayInputDate(), createdAt: formatDate() });
  saveExpenses();
  financeForm.reset();
  expenseDate.value = getTodayInputDate();
  renderFinance();
});

expenseList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-expense-id]");
  if (!deleteButton) return;
  deletedExpense = expenses.find((expense) => expense.id === deleteButton.dataset.expenseId) || null;
  expenses = expenses.filter((expense) => expense.id !== deleteButton.dataset.expenseId);
  saveExpenses();
  renderFinance();
  financeToast.hidden = false;
  window.clearTimeout(undoTimer);
  undoTimer = window.setTimeout(() => {
    financeToast.hidden = true;
    deletedExpense = null;
  }, 5000);
});

undoExpense.addEventListener("click", () => {
  if (!deletedExpense) return;
  expenses.unshift(deletedExpense);
  saveExpenses();
  renderFinance();
  financeToast.hidden = true;
  window.clearTimeout(undoTimer);
  deletedExpense = null;
});

renderFinance();
