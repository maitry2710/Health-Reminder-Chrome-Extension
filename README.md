
# Health Reminder Chrome Extension

Health Reminder is a simple and efficient Chrome extension designed to help you maintain a healthy routine by sending regular notifications to remind you to drink water, take medicines, sleep, and rest. It now includes functionality to stop or reset active timers for greater flexibility.


## Features

- Set customizable reminders for:
  - Drink Water 💧
  - Take Medicines 🩺
  - Sleep 😴
  - Take Rest 🛋️

- Notifications are displayed at regular intervals for each activity.
- Stop active reminders to pause unnecessary notifications.
- Reset timers easily by entering a new interval.


## Installation

  1. Clone or download this repository:

```bash
  git clone https://github.com/maitry2710/health-reminder-chrome-extension.git

```

   2. Open Google Chrome and navigate to chrome://extensions/.

  3. Enable Developer mode (toggle in the top-right corner).

  4. Click on Load unpacked and select the folder containing the cloned repository.

  5. The extension will be loaded and visible in your Chrome toolbar.
    
## Usage

1. Set a Reminder:

  - Click the extension icon in the toolbar to open the popup.
  - Enter the desired interval (in minutes) for an activity (e.g., 30 minutes for drinking water).
  - Click the Set button to start the timer.
2. Stop a Reminder:

  - Click the Stop button for the activity you wish to pause.
  - The reminder will stop, and notifications for that activity will no longer appear.
3. Reset a Reminder:

  - Enter a new interval and click Set again to reset the timer for an activity.


## File Structure
```bash
/health-reminder-extension/
├── manifest.json       # Manifest file with extension metadata
├── popup.html          # HTML for the extension popup interface
├── popup.js            # JavaScript for managing user input and actions
├── background.js       # Background script for alarms and notifications
├── icons.png            # Icon for the extension
├── README.md           # Documentation file (this file)
```
## Permissions
- The extension requires the following permissions to function:

  - ```alarms:``` To create and manage timers for reminders.
  - ```notifications:``` To display notifications for reminders.
  - ```storage:``` (Optional for future improvements) To store user settings and preferences.
## Screenshots:
 - Setting the timer:
     -  ![Alt text](https://github.com/maitry2710/Health-Reminder-Chrome-Extension/blob/9c88ef11e8d1fc9e4c8c844cf30819ff3b1c4e2b/Screenshot%202024-12-02%20144942.png)
      
      
- Reminder set:
    -  ![Alt text](https://github.com/maitry2710/Health-Reminder-Chrome-Extension/blob/8dc5ac33af1e5311f47eb1433adc08994e396449/Screenshot%202024-12-01%20154839.png)
      

- Reminder:
    -   ![Alt text](https://github.com/maitry2710/Health-Reminder-Chrome-Extension/blob/8dc5ac33af1e5311f47eb1433adc08994e396449/Screenshot%202024-12-01%20154939.png)
       
## License

This project is licensed under
[MIT License](https://choosealicense.com/licenses/mit/).

## Future Enhancements 

- Add sound alerts for notifications.
- Store user settings persistently using ```chrome.storage.```
- Provide customizable messages for reminders.
- Add statistics to track completed reminders.
