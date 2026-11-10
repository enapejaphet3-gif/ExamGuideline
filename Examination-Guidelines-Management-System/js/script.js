/* =====================================================
   EXAMGUIDE
   EXAMINATION INSTRUCTIONS AND GUIDELINES
   MANAGEMENT SYSTEM

   SWD 417 ASSIGNMENT

   STUDENT: ENAPE JAPHET OJONUGWA
   MATRIC NUMBER: 2025/HND/SWD/007

   TECHNOLOGIES: HTML, CSS, JAVASCRIPT
===================================================== */

"use strict";


/* =====================================================
   1. LOCAL STORAGE KEYS
===================================================== */

const STORAGE_KEYS = {
    guidelines: "examguide_guidelines",
    announcements: "examguide_announcements",
    acknowledgements: "examguide_acknowledgements",
    theme: "examguide_theme"
};


/* =====================================================
   2. DEFAULT EXAMINATION GUIDELINES

   NOTE:
   These are general demonstration guidelines.
   They are not official institutional regulations.
===================================================== */

const DEFAULT_GUIDELINES = [

    {
        id: "guideline-001",
        title: "Arrive Early for Examinations",
        category: "general",
        description:
            "Students should arrive at the examination " +
            "venue early enough to complete necessary " +
            "checks and receive instructions before " +
            "the examination begins.",
        createdAt: "2026-01-01T09:00:00.000Z"
    },

    {
        id: "guideline-002",
        title: "Maintain Silence in the Examination Hall",
        category: "conduct",
        description:
            "Students should maintain silence during " +
            "examinations. Any questions or concerns " +
            "should be directed to the invigilator " +
            "using the approved procedure.",
        createdAt: "2026-01-01T09:05:00.000Z"
    },

    {
        id: "guideline-003",
        title: "Bring Required Examination Materials",
        category: "materials",
        description:
            "Students should bring the examination " +
            "materials required for their papers, " +
            "such as pens, pencils, identification, " +
            "and other materials specifically permitted " +
            "by the examination authorities.",
        createdAt: "2026-01-01T09:10:00.000Z"
    },

    {
        id: "guideline-004",
        title: "Avoid Examination Malpractice",
        category: "malpractice",
        description:
            "Students must avoid cheating, impersonation, " +
            "unauthorized communication, possession of " +
            "prohibited materials, and other forms of " +
            "examination misconduct.",
        createdAt: "2026-01-01T09:15:00.000Z"
    },

    {
        id: "guideline-005",
        title: "Follow Examination Submission Procedures",
        category: "submission",
        description:
            "Students should submit their answer scripts " +
            "according to the instructions provided " +
            "by the invigilator. Required details " +
            "should be completed before submission.",
        createdAt: "2026-01-01T09:20:00.000Z"
    },

    {
        id: "guideline-006",
        title: "Switch Off Unauthorized Electronic Devices",
        category: "materials",
        description:
            "Mobile phones, smartwatches, and other " +
            "electronic devices should not be used " +
            "during examinations unless explicitly " +
            "authorized for the particular examination.",
        createdAt: "2026-01-01T09:25:00.000Z"
    },

    {
        id: "guideline-007",
        title: "Obey Invigilators' Instructions",
        category: "conduct",
        description:
            "Students should follow reasonable " +
            "examination instructions given by " +
            "authorized invigilators and supervisors.",
        createdAt: "2026-01-01T09:30:00.000Z"
    },

    {
        id: "guideline-008",
        title: "Verify Examination Details",
        category: "general",
        description:
            "Before an examination, students should " +
            "confirm the course code, examination date, " +
            "starting time, and approved venue using " +
            "official institutional information.",
        createdAt: "2026-01-01T09:35:00.000Z"
    }

];


/* =====================================================
   3. DEFAULT EXAMINATION INSTRUCTIONS
===================================================== */

const EXAM_INSTRUCTIONS = {

    before: [

        "Check the official examination timetable.",

        "Confirm your examination venue and starting time.",

        "Prepare all required examination materials.",

        "Check whether identification or an examination pass is required.",

        "Arrive at the examination venue early.",

        "Read any instructions issued for the particular course."

    ],

    during: [

        "Listen carefully to the invigilator's instructions.",

        "Complete the required details on your answer booklet.",

        "Read examination questions before answering.",

        "Maintain silence throughout the examination.",

        "Do not communicate with other candidates.",

        "Avoid unauthorized materials and electronic devices.",

        "Raise your hand if you need assistance.",

        "Manage your examination time carefully."

    ],

    after: [

        "Review your answers if time permits.",

        "Ensure your required identification details are correct.",

        "Arrange your answer sheets as instructed.",

        "Submit your answer script using the approved procedure.",

        "Do not remove examination materials without permission.",

        "Leave the examination hall calmly when instructed."

    ]

};


/* =====================================================
   4. DEFAULT ANNOUNCEMENTS

   These are sample notices, not live updates.
===================================================== */

const DEFAULT_ANNOUNCEMENTS = [

    {
        id: "announcement-001",
        title: "Welcome to ExamGuide",
        message:
            "Welcome to the ExamGuide demonstration " +
            "application. You can browse examination " +
            "guidelines, review instructions, and " +
            "manage sample examination announcements.",
        priority: "normal",
        createdAt: "2026-01-01T10:00:00.000Z"
    },

    {
        id: "announcement-002",
        title: "Verify Official Examination Information",
        message:
            "Always confirm examination dates, venues, " +
            "and requirements through your institution's " +
            "official communication channels. " +
            "Information displayed in this application " +
            "is for demonstration purposes.",
        priority: "important",
        createdAt: "2026-01-01T10:05:00.000Z"
    }

];


/* =====================================================
   5. CATEGORY INFORMATION
===================================================== */

const CATEGORY_INFO = {

    general: {
        name: "General Rules",
        icon: "📘"
    },

    conduct: {
        name: "Exam Conduct",
        icon: "✍️"
    },

    materials: {
        name: "Allowed Materials",
        icon: "🎒"
    },

    malpractice: {
        name: "Exam Malpractice",
        icon: "⚠️"
    },

    submission: {
        name: "Submission Rules",
        icon: "📝"
    }

};


/* =====================================================
   6. HTML ELEMENTS
===================================================== */

const sidebar = document.getElementById("sidebar");

const menuToggle =
    document.getElementById("menuToggle");

const menuItems =
    document.querySelectorAll(".menu-item");

const themeToggle =
    document.getElementById("themeToggle");

const pageTitle =
    document.getElementById("pageTitle");

const viewGuidelinesBtn =
    document.getElementById("viewGuidelinesBtn");

const addGuidelineBtn =
    document.getElementById("addGuidelineBtn");

const exploreGuidelinesBtn =
    document.getElementById("exploreGuidelinesBtn");


// SECTIONS

const statsSection =
    document.getElementById("statsSection");

const welcomeBanner =
    document.getElementById("welcomeBanner");

const quickAccessSection =
    document.getElementById("quickAccessSection");

const guidelinesSection =
    document.getElementById("guidelinesSection");

const instructionsSection =
    document.getElementById("instructionsSection");

const announcementsSection =
    document.getElementById("announcementsSection");

const manageSection =
    document.getElementById("manageSection");


// STATISTICS

const totalGuidelinesElement =
    document.getElementById("totalGuidelines");

const readGuidelinesElement =
    document.getElementById("readGuidelines");

const totalAnnouncementsElement =
    document.getElementById("totalAnnouncements");

const totalInstructionsElement =
    document.getElementById("totalInstructions");


// GUIDELINES

const guidelineSearch =
    document.getElementById("guidelineSearch");

const categoryFilter =
    document.getElementById("categoryFilter");

const guidelinesContainer =
    document.getElementById("guidelinesContainer");

const guidelinesEmpty =
    document.getElementById("guidelinesEmpty");


// INSTRUCTIONS

const beforeExamList =
    document.getElementById("beforeExamList");

const duringExamList =
    document.getElementById("duringExamList");

const afterExamList =
    document.getElementById("afterExamList");


// ANNOUNCEMENTS

const announcementsContainer =
    document.getElementById("announcementsContainer");

const announcementsEmpty =
    document.getElementById("announcementsEmpty");

const addAnnouncementBtn =
    document.getElementById("addAnnouncementBtn");


// MANAGE CONTENT

const manageGuidelinesBtn =
    document.getElementById("manageGuidelinesBtn");

const manageAnnouncementsBtn =
    document.getElementById("manageAnnouncementsBtn");


// GUIDELINE MODAL

const guidelineModal =
    document.getElementById("guidelineModal");

const guidelineModalTitle =
    document.getElementById("guidelineModalTitle");

const guidelineForm =
    document.getElementById("guidelineForm");

const guidelineIdInput =
    document.getElementById("guidelineId");

const guidelineTitleInput =
    document.getElementById("guidelineTitle");

const guidelineCategoryInput =
    document.getElementById("guidelineCategory");

const guidelineDescriptionInput =
    document.getElementById("guidelineDescription");

const closeGuidelineModalBtn =
    document.getElementById("closeGuidelineModal");

const cancelGuidelineBtn =
    document.getElementById("cancelGuidelineBtn");


// ANNOUNCEMENT MODAL

const announcementModal =
    document.getElementById("announcementModal");

const announcementForm =
    document.getElementById("announcementForm");

const announcementTitleInput =
    document.getElementById("announcementTitle");

const announcementMessageInput =
    document.getElementById("announcementMessage");

const announcementPriorityInput =
    document.getElementById("announcementPriority");

const closeAnnouncementModalBtn =
    document.getElementById("closeAnnouncementModal");

const cancelAnnouncementBtn =
    document.getElementById("cancelAnnouncementBtn");


/* =====================================================
   7. LOCAL STORAGE FUNCTIONS
===================================================== */

function readStorage(key) {

    try {

        return localStorage.getItem(key);

    } catch (error) {

        console.error("Storage read error:", error);

        return null;

    }

}


function saveStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        return true;

    } catch (error) {

        console.error("Storage save error:", error);

        alert(
            "Unable to save information. " +
            "Please check your browser storage settings."
        );

        return false;

    }

}


function loadCollection(key, defaults) {

    const saved = readStorage(key);

    if (saved === null) {

        return structuredCloneSafe(defaults);

    }

    try {

        const parsed = JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : structuredCloneSafe(defaults);

    } catch (error) {

        console.error("Unable to load data:", error);

        return structuredCloneSafe(defaults);

    }

}


function structuredCloneSafe(data) {

    return JSON.parse(JSON.stringify(data));

}


/* =====================================================
   8. APPLICATION DATA
===================================================== */

let guidelines = loadCollection(
    STORAGE_KEYS.guidelines,
    DEFAULT_GUIDELINES
);

let announcements = loadCollection(
    STORAGE_KEYS.announcements,
    DEFAULT_ANNOUNCEMENTS
);

let acknowledgements = loadCollection(
    STORAGE_KEYS.acknowledgements,
    []
);

let currentView = "dashboard";

let activeModal = null;

let modalTrigger = null;


/* =====================================================
   9. GENERATE UNIQUE ID
===================================================== */

function generateId() {

    if (
        window.crypto &&
        typeof window.crypto.randomUUID === "function"
    ) {

        return window.crypto.randomUUID();

    }

    return (
        Date.now().toString(36) +
        "-" +
        Math.random().toString(36).slice(2)
    );

}


/* =====================================================
   10. FORMAT DATE
===================================================== */

function formatDate(dateString) {

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {

        return "Unknown date";

    }

    return date.toLocaleDateString("en-NG", {

        day: "numeric",
        month: "short",
        year: "numeric"

    });

}


/* =====================================================
   11. CREATE ELEMENT HELPER

   textContent is used for user-entered text
   to prevent HTML injection.
===================================================== */

function createElement(
    tag,
    className = "",
    text = ""
) {

    const element = document.createElement(tag);

    if (className) {

        element.className = className;

    }

    if (text !== "") {

        element.textContent = text;

    }

    return element;

}


/* =====================================================
   12. UPDATE DASHBOARD STATISTICS
===================================================== */

function updateStatistics() {

    totalGuidelinesElement.textContent =
        guidelines.length;

    const guidelineIds = new Set(
        guidelines.map(item => item.id)
    );

    const readCount = acknowledgements.filter(
        id => guidelineIds.has(id)
    ).length;

    readGuidelinesElement.textContent =
        readCount;

    totalAnnouncementsElement.textContent =
        announcements.length;

    const instructionCount =
        EXAM_INSTRUCTIONS.before.length +
        EXAM_INSTRUCTIONS.during.length +
        EXAM_INSTRUCTIONS.after.length;

    totalInstructionsElement.textContent =
        instructionCount;

}


/* =====================================================
   13. PAGE NAVIGATION
===================================================== */

const PAGE_TITLES = {

    dashboard: "Dashboard",

    guidelines: "Examination Guidelines",

    instructions: "Examination Instructions",

    announcements: "Announcements",

    manage: "Manage Content"

};


function switchView(view) {

    if (!Object.hasOwn(PAGE_TITLES, view)) {

        return;

    }

    currentView = view;

    // HIDE ALL SECTIONS

    statsSection.hidden = true;

    welcomeBanner.hidden = true;

    quickAccessSection.hidden = true;

    guidelinesSection.hidden = true;

    instructionsSection.hidden = true;

    announcementsSection.hidden = true;

    manageSection.hidden = true;

    // SHOW SELECTED SECTION

    if (view === "dashboard") {

        statsSection.hidden = false;

        welcomeBanner.hidden = false;

        quickAccessSection.hidden = false;

    } else if (view === "guidelines") {

        guidelinesSection.hidden = false;

        renderGuidelines();

    } else if (view === "instructions") {

        instructionsSection.hidden = false;

        renderInstructions();

    } else if (view === "announcements") {

        announcementsSection.hidden = false;

        renderAnnouncements();

    } else if (view === "manage") {

        manageSection.hidden = false;

    }

    // UPDATE PAGE TITLE

    pageTitle.textContent = PAGE_TITLES[view];

    // ACTIVE NAVIGATION

    menuItems.forEach(item => {

        const isActive =
            item.dataset.view === view;

        item.classList.toggle(
            "active",
            isActive
        );

        if (isActive) {

            item.setAttribute(
                "aria-current",
                "page"
            );

        } else {

            item.removeAttribute(
                "aria-current"
            );

        }

    });

    // HEADER BUTTONS

    viewGuidelinesBtn.hidden =
        view === "guidelines";

    addGuidelineBtn.hidden =
        view === "instructions";

    // CLOSE MOBILE SIDEBAR

    closeSidebar();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   14. SIDEBAR NAVIGATION
===================================================== */

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        switchView(
            item.dataset.view
        );

    });

});


document.querySelectorAll(
    ".quick-card[data-view]"
).forEach(card => {

    card.addEventListener("click", () => {

        switchView(
            card.dataset.view
        );

    });

});


viewGuidelinesBtn.addEventListener(
    "click",
    () => switchView("guidelines")
);


exploreGuidelinesBtn.addEventListener(
    "click",
    () => switchView("guidelines")
);


/* =====================================================
   15. GUIDELINE CATEGORY INFORMATION
===================================================== */

function getCategoryInfo(category) {

    return CATEGORY_INFO[category] || {

        name: "General Rules",
        icon: "📘"

    };

}


/* =====================================================
   16. CHECK READ STATUS
===================================================== */

function isGuidelineRead(id) {

    return acknowledgements.includes(id);

}


/* =====================================================
   17. CREATE GUIDELINE CARD
===================================================== */

function createGuidelineCard(guideline) {

    const card = createElement(
        "article",
        "guideline-card"
    );

    const category = getCategoryInfo(
        guideline.category
    );

    // CARD TOP

    const top = createElement(
        "div",
        "guideline-top"
    );

    const icon = createElement(
        "div",
        "guideline-icon",
        category.icon
    );

    const badge = createElement(
        "span",
        "category-badge",
        category.name
    );

    top.append(icon, badge);

    // TITLE

    const title = createElement(
        "h3",
        "",
        guideline.title
    );

    // DESCRIPTION

    const description = createElement(
        "p",
        "guideline-description",
        guideline.description
    );

    // READ STATUS

    const read = isGuidelineRead(
        guideline.id
    );

    const status = createElement(
        "div",
        `guideline-status ${read ? "read" : "unread"}`,
        read
            ? "✓ Read and Acknowledged"
            : "● Not Yet Acknowledged"
    );

    // ACTIONS

    const actions = createElement(
        "div",
        "guideline-actions"
    );

    const readButton = createElement(
        "button",
        "card-btn read",
        read
            ? "↩ Mark Unread"
            : "✓ Mark as Read"
    );

    readButton.type = "button";

    readButton.addEventListener("click", () => {

        toggleAcknowledgement(
            guideline.id
        );

    });

    // EDIT BUTTON

    const editButton = createElement(
        "button",
        "card-btn edit",
        "✏️ Edit"
    );

    editButton.type = "button";

    editButton.addEventListener("click", () => {

        openGuidelineModal(
            guideline.id,
            editButton
        );

    });

    // DELETE BUTTON

    const deleteButton = createElement(
        "button",
        "card-btn delete",
        "🗑️ Delete"
    );

    deleteButton.type = "button";

    deleteButton.addEventListener("click", () => {

        deleteGuideline(
            guideline.id
        );

    });

    actions.append(
        readButton,
        editButton,
        deleteButton
    );

    // BUILD CARD

    card.append(
        top,
        title,
        description,
        status,
        actions
    );

    return card;

}


/* =====================================================
   18. RENDER GUIDELINES
===================================================== */

function renderGuidelines() {

    const searchText =
        guidelineSearch.value
            .trim()
            .toLowerCase();

    const selectedCategory =
        categoryFilter.value;

    const filteredGuidelines =
        guidelines.filter(guideline => {

            const category = getCategoryInfo(
                guideline.category
            );

            const searchableText = [
                guideline.title,
                guideline.description,
                category.name
            ].join(" ").toLowerCase();

            const matchesSearch =
                searchableText.includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                guideline.category === selectedCategory;

            return (
                matchesSearch &&
                matchesCategory
            );

        });

    guidelinesContainer.replaceChildren();

    if (filteredGuidelines.length === 0) {

        guidelinesEmpty.hidden = false;

        return;

    }

    guidelinesEmpty.hidden = true;

    filteredGuidelines.forEach(guideline => {

        guidelinesContainer.appendChild(
            createGuidelineCard(guideline)
        );

    });

}


/* =====================================================
   19. GUIDELINE SEARCH AND FILTER
===================================================== */

guidelineSearch.addEventListener(
    "input",
    renderGuidelines
);


categoryFilter.addEventListener(
    "change",
    renderGuidelines
);


/* =====================================================
   20. TOGGLE GUIDELINE ACKNOWLEDGEMENT
===================================================== */

function toggleAcknowledgement(id) {

    let updated;

    if (isGuidelineRead(id)) {

        updated = acknowledgements.filter(
            item => item !== id
        );

    } else {

        updated = [
            ...acknowledgements,
            id
        ];

    }

    if (
        !saveStorage(
            STORAGE_KEYS.acknowledgements,
            updated
        )
    ) {

        return;

    }

    acknowledgements = updated;

    renderGuidelines();

    updateStatistics();

}


/* =====================================================
   21. OPEN MODAL HELPER
===================================================== */

function openModal(modal, trigger = null) {

    modalTrigger = trigger ||
        document.activeElement;

    activeModal = modal;

    modal.hidden = false;

    document.body.style.overflow = "hidden";

    const firstField = modal.querySelector(
        "input:not([type='hidden']), textarea, select"
    );

    if (firstField) {

        firstField.focus();

    }

}


/* =====================================================
   22. CLOSE MODAL HELPER
===================================================== */

function closeModal(modal) {

    modal.hidden = true;

    document.body.style.overflow = "";

    activeModal = null;

    if (
        modalTrigger &&
        modalTrigger.isConnected &&
        typeof modalTrigger.focus === "function"
    ) {

        modalTrigger.focus();

    }

    modalTrigger = null;

}


/* =====================================================
   23. OPEN ADD / EDIT GUIDELINE MODAL
===================================================== */

function openGuidelineModal(
    id = null,
    trigger = null
) {

    guidelineForm.reset();

    guidelineIdInput.value = "";

    if (id) {

        const guideline = guidelines.find(
            item => item.id === id
        );

        if (!guideline) {

            alert("Guideline not found.");

            return;

        }

        guidelineModalTitle.textContent =
            "Edit Examination Guideline";

        guidelineIdInput.value =
            guideline.id;

        guidelineTitleInput.value =
            guideline.title;

        guidelineCategoryInput.value =
            guideline.category;

        guidelineDescriptionInput.value =
            guideline.description;

    } else {

        guidelineModalTitle.textContent =
            "Add Examination Guideline";

    }

    openModal(
        guidelineModal,
        trigger
    );

}


/* =====================================================
   24. SAVE GUIDELINE
===================================================== */

function saveGuideline(event) {

    event.preventDefault();

    if (!guidelineForm.reportValidity()) {

        return;

    }

    const title =
        guidelineTitleInput.value.trim();

    const category =
        guidelineCategoryInput.value;

    const description =
        guidelineDescriptionInput.value.trim();

    const editingId =
        guidelineIdInput.value;

    if (!title || !description) {

        alert(
            "Please complete all guideline fields."
        );

        return;

    }

    if (!Object.hasOwn(CATEGORY_INFO, category)) {

        alert("Please select a valid category.");

        return;

    }

    let updatedGuidelines;

    if (editingId) {

        const exists = guidelines.some(
            item => item.id === editingId
        );

        if (!exists) {

            alert("Guideline not found.");

            return;

        }

        updatedGuidelines = guidelines.map(
            item => {

                if (item.id !== editingId) {

                    return item;

                }

                return {

                    ...item,

                    title,

                    category,

                    description,

                    updatedAt:
                        new Date().toISOString()

                };

            }
        );

    } else {

        const newGuideline = {

            id: generateId(),

            title,

            category,

            description,

            createdAt:
                new Date().toISOString()

        };

        updatedGuidelines = [
            newGuideline,
            ...guidelines
        ];

    }

    if (
        !saveStorage(
            STORAGE_KEYS.guidelines,
            updatedGuidelines
        )
    ) {

        return;

    }

    guidelines = updatedGuidelines;

    closeModal(guidelineModal);

    renderGuidelines();

    updateStatistics();

    switchView("guidelines");

    alert(
        editingId
            ? "Guideline updated successfully!"
            : "Guideline added successfully!"
    );

}


guidelineForm.addEventListener(
    "submit",
    saveGuideline
);


/* =====================================================
   25. DELETE GUIDELINE
===================================================== */

function deleteGuideline(id) {

    const guideline = guidelines.find(
        item => item.id === id
    );

    if (!guideline) {

        return;

    }

    const confirmed = confirm(
        `Delete "${guideline.title}"?\n\n` +
        "This action cannot be undone."
    );

    if (!confirmed) {

        return;

    }

    const updatedGuidelines = guidelines.filter(
        item => item.id !== id
    );

    if (
        !saveStorage(
            STORAGE_KEYS.guidelines,
            updatedGuidelines
        )
    ) {

        return;

    }

    guidelines = updatedGuidelines;

    // Remove deleted guideline from acknowledgement list.

    const updatedAcknowledgements =
        acknowledgements.filter(
            item => item !== id
        );

    acknowledgements = updatedAcknowledgements;

    saveStorage(
        STORAGE_KEYS.acknowledgements,
        acknowledgements
    );

    renderGuidelines();

    updateStatistics();

}


/* =====================================================
   26. GUIDELINE MODAL BUTTONS
===================================================== */

addGuidelineBtn.addEventListener(
    "click",
    event => {

        openGuidelineModal(
            null,
            event.currentTarget
        );

    }
);


manageGuidelinesBtn.addEventListener(
    "click",
    event => {

        openGuidelineModal(
            null,
            event.currentTarget
        );

    }
);


closeGuidelineModalBtn.addEventListener(
    "click",
    () => closeModal(guidelineModal)
);


cancelGuidelineBtn.addEventListener(
    "click",
    () => closeModal(guidelineModal)
);


/* =====================================================
   27. RENDER EXAMINATION INSTRUCTIONS
===================================================== */

function renderInstructionList(
    container,
    instructions
) {

    container.replaceChildren();

    instructions.forEach(instruction => {

        const item = createElement(
            "li",
            "",
            instruction
        );

        container.appendChild(item);

    });

}


function renderInstructions() {

    renderInstructionList(
        beforeExamList,
        EXAM_INSTRUCTIONS.before
    );

    renderInstructionList(
        duringExamList,
        EXAM_INSTRUCTIONS.during
    );

    renderInstructionList(
        afterExamList,
        EXAM_INSTRUCTIONS.after
    );

}


/* =====================================================
   28. CREATE ANNOUNCEMENT CARD
===================================================== */

function createAnnouncementCard(announcement) {

    const card = createElement(
        "article",
        "announcement-card"
    );

    // TOP

    const top = createElement(
        "div",
        "announcement-top"
    );

    const priorityNames = {

        normal: "Normal",

        important: "Important",

        urgent: "Urgent"

    };

    const priority =
        priorityNames[announcement.priority]
            ? announcement.priority
            : "normal";

    const badge = createElement(
        "span",
        `announcement-priority ${priority}`,
        priorityNames[priority]
    );

    const date = createElement(
        "span",
        "announcement-date",
        formatDate(announcement.createdAt)
    );

    top.append(badge, date);

    // TITLE

    const title = createElement(
        "h3",
        "",
        announcement.title
    );

    // MESSAGE

    const message = createElement(
        "p",
        "announcement-message",
        announcement.message
    );

    // ACTIONS

    const actions = createElement(
        "div",
        "announcement-actions"
    );

    const deleteButton = createElement(
        "button",
        "card-btn delete",
        "🗑️ Delete Announcement"
    );

    deleteButton.type = "button";

    deleteButton.addEventListener("click", () => {

        deleteAnnouncement(
            announcement.id
        );

    });

    actions.appendChild(deleteButton);

    // BUILD CARD

    card.append(
        top,
        title,
        message,
        actions
    );

    return card;

}


/* =====================================================
   29. RENDER ANNOUNCEMENTS
===================================================== */

function renderAnnouncements() {

    announcementsContainer.replaceChildren();

    if (announcements.length === 0) {

        announcementsEmpty.hidden = false;

        return;

    }

    announcementsEmpty.hidden = true;

    const sortedAnnouncements = [
        ...announcements
    ].sort((a, b) => {

        return (
            new Date(b.createdAt) -
            new Date(a.createdAt)
        );

    });

    sortedAnnouncements.forEach(announcement => {

        announcementsContainer.appendChild(
            createAnnouncementCard(announcement)
        );

    });

}


/* =====================================================
   30. OPEN ANNOUNCEMENT MODAL
===================================================== */

function openAnnouncementModal(trigger = null) {

    announcementForm.reset();

    openModal(
        announcementModal,
        trigger
    );

}


/* =====================================================
   31. SAVE ANNOUNCEMENT
===================================================== */

function saveAnnouncement(event) {

    event.preventDefault();

    if (!announcementForm.reportValidity()) {

        return;

    }

    const title =
        announcementTitleInput.value.trim();

    const message =
        announcementMessageInput.value.trim();

    const priority =
        announcementPriorityInput.value;

    if (!title || !message) {

        alert(
            "Please enter the announcement " +
            "title and message."
        );

        return;

    }

    const validPriorities = [
        "normal",
        "important",
        "urgent"
    ];

    if (!validPriorities.includes(priority)) {

        alert("Please select a valid priority.");

        return;

    }

    const newAnnouncement = {

        id: generateId(),

        title,

        message,

        priority,

        createdAt:
            new Date().toISOString()

    };

    const updatedAnnouncements = [
        newAnnouncement,
        ...announcements
    ];

    if (
        !saveStorage(
            STORAGE_KEYS.announcements,
            updatedAnnouncements
        )
    ) {

        return;

    }

    announcements = updatedAnnouncements;

    closeModal(announcementModal);

    renderAnnouncements();

    updateStatistics();

    switchView("announcements");

    alert(
        "Announcement published successfully!"
    );

}


announcementForm.addEventListener(
    "submit",
    saveAnnouncement
);


/* =====================================================
   32. DELETE ANNOUNCEMENT
===================================================== */

function deleteAnnouncement(id) {

    const announcement = announcements.find(
        item => item.id === id
    );

    if (!announcement) {

        return;

    }

    const confirmed = confirm(
        `Delete "${announcement.title}"?`
    );

    if (!confirmed) {

        return;

    }

    const updatedAnnouncements =
        announcements.filter(
            item => item.id !== id
        );

    if (
        !saveStorage(
            STORAGE_KEYS.announcements,
            updatedAnnouncements
        )
    ) {

        return;

    }

    announcements = updatedAnnouncements;

    renderAnnouncements();

    updateStatistics();

}


/* =====================================================
   33. ANNOUNCEMENT BUTTONS
===================================================== */

addAnnouncementBtn.addEventListener(
    "click",
    event => {

        openAnnouncementModal(
            event.currentTarget
        );

    }
);


manageAnnouncementsBtn.addEventListener(
    "click",
    event => {

        openAnnouncementModal(
            event.currentTarget
        );

    }
);


closeAnnouncementModalBtn.addEventListener(
    "click",
    () => closeModal(announcementModal)
);


cancelAnnouncementBtn.addEventListener(
    "click",
    () => closeModal(announcementModal)
);


/* =====================================================
   34. CLOSE MODALS BY CLICKING OUTSIDE
===================================================== */

[
    guidelineModal,
    announcementModal
].forEach(modal => {

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            closeModal(modal);

        }

    });

});


/* =====================================================
   35. KEYBOARD ACCESSIBILITY FOR MODALS
===================================================== */

document.addEventListener("keydown", event => {

    if (!activeModal) {

        return;

    }

    if (event.key === "Escape") {

        closeModal(activeModal);

        return;

    }

    if (event.key !== "Tab") {

        return;

    }

    const focusableElements = [
        ...activeModal.querySelectorAll(
            "button:not([disabled]), " +
            "input:not([disabled]):not([type='hidden']), " +
            "select:not([disabled]), " +
            "textarea:not([disabled])"
        )
    ];

    if (focusableElements.length === 0) {

        return;

    }

    const first = focusableElements[0];

    const last =
        focusableElements[
            focusableElements.length - 1
        ];

    if (
        event.shiftKey &&
        document.activeElement === first
    ) {

        event.preventDefault();

        last.focus();

    } else if (
        !event.shiftKey &&
        document.activeElement === last
    ) {

        event.preventDefault();

        first.focus();

    }

});


/* =====================================================
   36. MOBILE SIDEBAR
===================================================== */

function closeSidebar() {

    sidebar.classList.remove("open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


menuToggle.addEventListener("click", () => {

    const isOpen =
        sidebar.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});


document.addEventListener("click", event => {

    if (window.innerWidth > 700) {

        return;

    }

    if (
        sidebar.classList.contains("open") &&
        !sidebar.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        closeSidebar();

    }

});


/* =====================================================
   37. DARK MODE
===================================================== */

function applyTheme(theme) {

    const isDark = theme === "dark";

    document.body.classList.toggle(
        "dark-mode",
        isDark
    );

    themeToggle.textContent = isDark
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

    themeToggle.setAttribute(
        "aria-pressed",
        String(isDark)
    );

}


function loadTheme() {

    const saved = readStorage(
        STORAGE_KEYS.theme
    );

    return saved === "dark"
        ? "dark"
        : "light";

}


themeToggle.addEventListener("click", () => {

    const isDark =
        document.body.classList.contains(
            "dark-mode"
        );

    const newTheme = isDark
        ? "light"
        : "dark";

    applyTheme(newTheme);

    try {

        localStorage.setItem(
            STORAGE_KEYS.theme,
            newTheme
        );

    } catch (error) {

        console.warn(
            "Unable to save theme:",
            error
        );

    }

});


/* =====================================================
   38. ESCAPE KEY FOR MOBILE MENU
===================================================== */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        !activeModal &&
        sidebar.classList.contains("open")
    ) {

        closeSidebar();

        menuToggle.focus();

    }

});


/* =====================================================
   39. INITIALIZE APPLICATION
===================================================== */

function initializeApp() {

    applyTheme(
        loadTheme()
    );

    renderGuidelines();

    renderInstructions();

    renderAnnouncements();

    updateStatistics();

    switchView("dashboard");

    console.log(
        "ExamGuide Examination Guidelines " +
        "Management System is ready!"
    );

}


initializeApp();