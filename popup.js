document.addEventListener("DOMContentLoaded", () => {
  // Function to set a reminder
  function setReminder(type, intervalInputId) {
    const intervalInput = document.getElementById(intervalInputId);
    const interval = parseInt(intervalInput.value, 10);

    if (isNaN(interval) || interval <= 0) {
      alert("Please enter a valid number greater than 0.");
      return;
    }

    chrome.runtime.sendMessage(
      { action: "setReminder", reminderType: type, interval: interval },
      (response) => {
        if (response.success) {
          alert(`Reminder set for ${type}!`);
        } else {
          alert("Failed to set reminder. Please try again.");
        }
      }
    );
  }

  // Function to stop a reminder
  function stopReminder(type) {
    chrome.runtime.sendMessage({ action: "stopReminder", reminderType: type }, (response) => {
      if (response.success) {
        alert(`Reminder for ${type} stopped.`);
      } else {
        alert("Failed to stop reminder. Please try again.");
      }
    });
  }

  // Event listeners for setting reminders
  document.getElementById("setWaterReminder").addEventListener("click", () => {
    setReminder("water", "waterInterval");
  });
  document.getElementById("setMedicineReminder").addEventListener("click", () => {
    setReminder("medicine", "medicineInterval");
  });
  document.getElementById("setSleepReminder").addEventListener("click", () => {
    setReminder("sleep", "sleepInterval");
  });
  document.getElementById("setRestReminder").addEventListener("click", () => {
    setReminder("rest", "restInterval");
  });

  // Event listeners for stopping reminders
  document.getElementById("stopWaterReminder").addEventListener("click", () => {
    stopReminder("water");
  });
  document.getElementById("stopMedicineReminder").addEventListener("click", () => {
    stopReminder("medicine");
  });
  document.getElementById("stopSleepReminder").addEventListener("click", () => {
    stopReminder("sleep");
  });
  document.getElementById("stopRestReminder").addEventListener("click", () => {
    stopReminder("rest");
  });
});
