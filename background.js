// Store active reminders
const activeReminders = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "setReminder") {
    const { reminderType, interval } = message;

    // Create or reset the alarm
    chrome.alarms.create(reminderType, { delayInMinutes: interval, periodInMinutes: interval });
    activeReminders[reminderType] = true;

    sendResponse({ success: true });
    return true;
  }

  if (message.action === "stopReminder") {
    const { reminderType } = message;

    // Clear the alarm
    chrome.alarms.clear(reminderType, (wasCleared) => {
      if (wasCleared) {
        delete activeReminders[reminderType];
        sendResponse({ success: true });
      } else {
        sendResponse({ success: false });
      }
    });

    return true;
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  const messages = {
    water: "Time to drink water! Stay hydrated. 💧",
    medicine: "Time to take your medicine! 🩺",
    sleep: "Time to sleep! Get some rest. 😴",
    rest: "Time to take a break and relax. 🛋️",
  };

  const message = messages[alarm.name];
  if (message) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/time-4-128.png",
      title: "Health Reminder",
      message: message,
      priority: 2,
    });
  }
});
