# Chrome Daily Stretch Tool

Chrome extension tool for your daily stretch needs.

**Installation**

1. Download the repo
2. Navigate to Chrome Extentions -> Load Unpacked (upload files from saved location)
3. Pin the tool to the browser and enjoy!

**Modifying Timers**

_Main.js_
Total Stretch Time (line 12)
`let countdown = new Countdown(minutes, seconds); `

Seconds Per Exercise (line 13)
`let STRETCH_TIME = 20;`

Adding exercies (line 2)
Add to variable arrayOfStretches using following format:
[exercise name: string, URL: string]
