/* eslint max-len: 0 */
// Grbl
export const GRBLHAL = 'GrblHal';

// Active State
export const GRBLHAL_ACTIVE_STATE_IDLE = 'Idle';
export const GRBLHAL_ACTIVE_STATE_RUN = 'Run';
export const GRBLHAL_ACTIVE_STATE_HOLD = 'Hold';
export const GRBLHAL_ACTIVE_STATE_DOOR = 'Door';
export const GRBLHAL_ACTIVE_STATE_HOME = 'Home';
export const GRBLHAL_ACTIVE_STATE_SLEEP = 'Sleep';
export const GRBLHAL_ACTIVE_STATE_ALARM = 'Alarm';
export const GRBLHAL_ACTIVE_STATE_CHECK = 'Check';
export const GRBLHAL_ACTIVE_STATE_TOOL = 'Tool';

// Real-time Commands: ~, !, ?, Ctrl-x, 0x87 and 0xA3
export const GRBLHAL_REALTIME_COMMANDS = [
    '~', // Cycle Start
    '!', // Feed Hold
    '?', // Current Status
    '\x18', // Reset Grbl (Ctrl-X)
    '\x87', // Request complete real-time report
    '\xA3' // Acknowledge tool change
];

// https://github.com/grbl/grbl/wiki/Configuring-Grbl-v0.9
// http://linuxcnc.org/docs/html/gcode/overview.html#cap:modal-groups
export const GRBLHAL_MODAL_GROUPS = [
    { // Motion Mode (Defaults to G0)
        group: 'motion',
        modes: ['G0', 'G1', 'G2', 'G3', 'G5', 'G38.2', 'G38.3', 'G38.4', 'G38.5', 'G73', 'G80', 'G81', 'G82', 'G83', 'G']
    },
    { // Work Coordinate System Select (Defaults to G54)
        group: 'wcs',
        modes: ['G54', 'G55', 'G56', 'G57', 'G58', 'G59', 'G59.1', 'G59.2', 'G59.3']
    },
    { // Plane Select (Defaults to G17)
        group: 'plane',
        modes: ['G17', 'G18', 'G19']
    },
    { // Units Mode (Defaults to G21)
        group: 'units',
        modes: ['G20', 'G21']
    },
    { // Distance Mode (Defaults to G90)
        group: 'distance',
        modes: ['G90', 'G91']
    },
    { // Feed Rate Mode (Defaults to G94)
        group: 'feedrate',
        modes: ['G93', 'G94']
    },
    { // Canned Cycles Return Mode (Defaults to G98)
        group: 'canned_cycles_return',
        modes: ['G98', 'G99']
    },
    { // Program Mode (Defaults to M0)
        group: 'program',
        modes: ['M0', 'M1', 'M2', 'M30']
    },
    { // Spindle State (Defaults to M5)
        group: 'spindle',
        modes: ['M3', 'M4', 'M5']
    },
    { // Coolant State (Defaults to M9)
        group: 'coolant',
        modes: ['M7', 'M8', 'M9']
    }
];

// Errors
// https://github.com/gnea/grbl/blob/master/doc/csv/error_codes_en_US.csv
export const GRBLHAL_ERRORS = [
    {
        code: 1,
        message: 'Expected command letter',
        description: 'G-code words consist of a letter and a value. Letter was not found.'
    },
    {
        code: 2,
        message: 'Bad number format',
        description: 'Missing the expected G-code word value or numeric value format is not valid.'
    },
    {
        code: 3,
        message: 'Invalid statement',
        description: 'Grbl \$\' system command was not recognized or supported.'
    },
    {
        code: 4,
        message: 'Value < 0',
        description: 'Negative value received for an expected positive value.'
    },
    {
        code: 5,
        message: 'Setting disabled',
        description: 'Homing cycle failure. Homing is not enabled via settings.'
    },
    {
        code: 6,
        message: 'Value < 3 usec',
        description: 'Minimum step pulse time must be greater than 3usec.'
    },
    {
        code: 7,
        message: 'EEPROM read fail. Using defaults',
        description: 'An EEPROM read failed. Auto-restoring affected EEPROM to default values.'
    },
    {
        code: 8,
        message: 'Not idle',
        description: 'Grbl \'$\' command cannot be used unless Grbl is IDLE. Ensures smooth operation during a job.'
    },
    {
        code: 9,
        message: 'G-code lock',
        description: 'G-code commands are locked out during alarm or jog state.'
    },
    {
        code: 10,
        message: 'Homing not enabled',
        description: 'Soft limits cannot be enabled without homing also enabled.'
    },
    {
        code: 11,
        message: 'Line overflow',
        description: 'Max characters per line exceeded. Received command line was not executed.'
    },
    {
        code: 12,
        message: 'Step rate > 30kHz',
        description: 'Grbl \'$\' setting value cause the step rate to exceed the maximum supported.'
    },
    {
        code: 13,
        message: 'Check Door',
        description: 'Safety door detected as opened and door state initiated.'
    },
    {
        code: 14,
        message: 'Line length exceeded',
        description: 'Build info or startup line exceeded EEPROM line length limit. Line not stored.'
    },
    {
        code: 15,
        message: 'Travel exceeded',
        description: 'Jog target exceeds machine travel. Jog command has been ignored.'
    },
    {
        code: 16,
        message: 'Invalid jog command',
        description: 'Jog command has no \'=\' or contains prohibited g-code.'
    },
    {
        code: 17,
        message: 'Setting disabled',
        description: 'Laser mode requires PWM output.'
    },
    {
        code: 20,
        message: 'Unsupported command',
        description: 'Unsupported or invalid g-code command found in block.'
    },
    {
        code: 21,
        message: 'Modal group violation',
        description: 'More than one g-code command from same modal group found in block.'
    },
    {
        code: 22,
        message: 'Undefined feed rate',
        description: 'Feed rate has not yet been set or is undefined.'
    },
    {
        code: 23,
        message: 'Invalid gcode ID:23',
        description: 'G-code command in block requires an integer value.'
    },
    {
        code: 24,
        message: 'Invalid gcode ID:24',
        description: 'More than one g-code command that requires axis words found in block.'
    },
    {
        code: 25,
        message: 'Invalid gcode ID:25',
        description: 'Repeated g-code word found in block.'
    },
    {
        code: 26,
        message: 'Invalid gcode ID:26',
        description: 'No axis words found in block for g-code command or current modal state which requires them.'
    },
    {
        code: 27,
        message: 'Invalid gcode ID:27',
        description: 'Line number value is invalid.'
    },
    {
        code: 28,
        message: 'Invalid gcode ID:28',
        description: 'G-code command is missing a required value word.'
    },
    {
        code: 29,
        message: 'Invalid gcode ID:29',
        description: 'G59.x work coordinate systems are not supported.'
    },
    {
        code: 30,
        message: 'Invalid gcode ID:30',
        description: 'G53 only allowed with G0 and G1 motion modes.'
    },
    {
        code: 31,
        message: 'Invalid gcode ID:31',
        description: 'Axis words found in block when no command or current modal state uses them.'
    },
    {
        code: 32,
        message: 'Invalid gcode ID:32',
        description: 'G2 and G3 arcs require at least one in-plane axis word.'
    },
    {
        code: 33,
        message: 'Invalid gcode ID:33',
        description: 'Motion command target is invalid.'
    },
    {
        code: 34,
        message: 'Invalid gcode ID:34',
        description: 'Arc radius value is invalid.'
    },
    {
        code: 35,
        message: 'Invalid gcode ID:35',
        description: 'G2 and G3 arcs require at least one in-plane offset word.'
    },
    {
        code: 36,
        message: 'Invalid gcode ID:36',
        description: 'Unused value words found in block.'
    },
    {
        code: 37,
        message: 'Invalid gcode ID:37',
        description: 'G43.1 dynamic tool length offset is not assigned to configured tool length axis.'
    },
    {
        code: 38,
        message: 'Invalid gcode ID:38',
        description: 'Tool number greater than max supported value.'
    },
    {
        code: 39,
        message: 'Invalid gcode ID:39',
        description: 'Value out of range.'
    },
    {
        code: 40,
        message: 'Invalid gcode ID:40',
        description: 'G-code command not allowed when tool change is pending.'
    },
    {
        code: 41,
        message: 'Invalid gcode ID:41',
        description: 'Spindle not running when motion commanded in CSS or spindle sync mode.'
    },
    {
        code: 42,
        message: 'Invalid gcode ID:42',
        description: 'Plane must be ZX for threading.'
    },
    {
        code: 43,
        message: 'Invalid gcode ID:43',
        description: 'Max. feed rate exceeded.'
    },
    {
        code: 44,
        message: 'Invalid gcode ID:44',
        description: 'RPM out of range.'
    },
    {
        code: 45,
        message: 'Limit switch engaged',
        description: 'Only homing is allowed when a limit switch is engaged.'
    },
    {
        code: 46,
        message: 'Homing required',
        description: 'Home machine to continue.'
    },
    {
        code: 47,
        message: 'Invalid gcode ID:47',
        description: 'ATC: current tool is not set. Set current tool with M61.'
    },
    {
        code: 48,
        message: 'Invalid gcode ID:48',
        description: 'Value word conflict.'
    },
    {
        code: 50,
        message: 'E-stop',
        description: 'Emergency stop active.'
    },
    {
        code: 60,
        message: 'SD Card',
        description: 'SD Card mount failed.'
    },
    {
        code: 61,
        message: 'SD Card',
        description: 'SD Card file open/read failed.'
    },
    {
        code: 62,
        message: 'SD Card',
        description: 'SD Card directory listing failed.'
    },
    {
        code: 63,
        message: 'SD Card',
        description: 'SD Card directory not found.'
    },
    {
        code: 64,
        message: 'SD Card',
        description: 'SD Card file empty.'
    },
    {
        code: 70,
        message: 'Bluetooth',
        description: 'Bluetooth initalisation failed.'
    }
];

// Alarms
// https://github.com/gnea/grbl/blob/master/doc/csv/alarm_codes_en_US.csv
export const GRBLHAL_ALARMS = [
    {
        code: 1,
        message: 'Hard limit',
        description: 'Hard limit has been triggered. Machine position is likely lost due to sudden halt. Re-homing is highly recommended.'
    },
    {
        code: 2,
        message: 'Soft limit',
        description: 'Soft limit alarm. G-code motion target exceeds machine travel. Machine position retained. Alarm may be safely unlocked.'
    },
    {
        code: 3,
        message: 'Abort during cycle',
        description: 'Reset while in motion. Machine position is likely lost due to sudden halt. Re-homing is highly recommended.'
    },
    {
        code: 4,
        message: 'Probe fail',
        description: 'Probe fail. Probe is not in the expected initial state before starting probe cycle when G38.2 and G38.3 is not triggered and G38.4 and G38.5 is triggered.'
    },
    {
        code: 5,
        message: 'Probe fail',
        description: 'Probe fail. Probe did not contact the workpiece within the programmed travel for G38.2 and G38.4.'
    },
    {
        code: 6,
        message: 'Homing fail',
        description: 'Homing fail. The active homing cycle was reset.'
    },
    {
        code: 7,
        message: 'Homing fail',
        description: 'Homing fail. Safety door was opened during homing cycle.'
    },
    {
        code: 8,
        message: 'Homing fail',
        description: 'Homing fail. Pull off travel failed to clear limit switch. Try increasing pull-off setting or check wiring.'
    },
    {
        code: 9,
        message: 'Homing fail',
        description: 'Homing fail. Could not find limit switch within search distances. Try increasing max travel, decreasing pull-off distance, or check wiring.'
    },
    {
        code: 10,
        message: 'Estop',
        description: 'EStop asserted. Clear and reset.'
    },
    {
        code: 11,
        message: 'Homing required',
        description: 'Homing required. Execute homing command ($H) to continue.'
    },
    {
        code: 12,
        message: 'Limits engaged',
        description: 'Limit switch engaged. Clear before continuing.'
    },
    {
        code: 13,
        message: 'Probe protect',
        description: 'Probe protection triggered. Clear before continuing.'
    },
    {
        code: 14,
        message: 'Spindle',
        description: 'Spindle at speed timeout. Clear before continuing.'
    },
    {
        code: 15,
        message: 'Homing fail',
        description: 'Homing fail. Could not find second limit switch for auto squared axis within search distances. Try increasing max travel, decreasing pull-off distance, or check wiring.'
    },
    {
        code: 16,
        message: 'Self test failed',
        description: 'Power on selftest (POS) failed.'
    },
    {
        code: 17,
        message: 'Motor fault',
        description: 'Motor fault.'
    },
    {
        code: 18,
        message: 'Homing fail',
        description: 'Homing fail. Bad configuration.'
    }
];

// Settings
// https://github.com/gnea/grbl/blob/master/doc/csv/setting_codes_en_US.csv
export const GRBLHAL_SETTINGS = [
    {
        setting: '$0',
        message: 'Step pulse time',
        units: 'microseconds',
        description: 'Sets time length per step. Minimum 3usec.'
    },
    {
        setting: '$1',
        message: 'Step idle delay',
        units: 'milliseconds',
        description: 'Sets a short hold delay when stopping to let dynamics settle before disabling steppers. Value 255 keeps motors enabled with no delay.'
    },
    {
        setting: '$2',
        message: 'Step pulse invert',
        units: 'mask',
        description: 'Inverts the step signal. Set axis bit to invert (00000ZYX).'
    },
    {
        setting: '$3',
        message: 'Step direction invert',
        units: 'mask',
        description: 'Inverts the direction signal. Set axis bit to invert (00000ZYX).'
    },
    {
        setting: '$4',
        message: 'Invert step enable pin',
        units: 'boolean',
        description: 'Inverts the stepper driver enable pin signal.'
    },
    {
        setting: '$5',
        message: 'Invert limit pins',
        units: 'boolean',
        description: 'Inverts the axis limit input signals.'
    },
    {
        setting: '$6',
        message: 'Invert probe pin',
        units: 'boolean',
        description: 'Inverts the probe input pin signal.'
    },
    {
        setting: '$8',
        message: 'Ganged axes direction invert',
        units: 'mask',
        description: 'Ganged axes direction invert.'
    },
    {
        setting: '$10',
        message: 'Status report options',
        units: 'mask',
        description: 'Alters data included in status reports.'
    },
    {
        setting: '$11',
        message: 'Junction deviation',
        units: 'millimeters',
        description: 'Sets how fast Grbl travels through consecutive motions. Lower value slows it down.'
    },
    {
        setting: '$12',
        message: 'Arc tolerance',
        units: 'millimeters',
        description: 'Sets the G2 and G3 arc tracing accuracy based on radial error. Beware: A very small value may effect performance.'
    },
    {
        setting: '$13',
        message: 'Report in inches',
        units: 'boolean',
        description: 'Enables inch units when returning any position and rate value that is not a settings value.'
    },
    {
        setting: '$14',
        message: 'Invert control pins',
        units: 'mask',
        description: 'Inverts the control signals  (active low)'
    },
    {
        setting: '$15',
        message: 'Invert coolant pins',
        units: 'mask',
        description: 'Inverts the coolant and mist signals  (active low).'
    },
    {
        setting: '$16',
        message: 'Invert spindle signals',
        units: 'mask',
        description: 'Inverts the spindle on and counterclockwise signals (active low).'
    },
    {
        setting: '$17',
        message: 'Pullup disable control pins',
        units: 'mask',
        description: 'Disable the control signals pullup resistors. Potentially enables pulldown resistor if available.'
    },
    {
        setting: '$18',
        message: 'Pullup disable limit pins',
        units: 'mask',
        description: 'Disable the limit signals pullup resistors. Potentially enables pulldown resistor if available.'
    },
    {
        setting: '$19',
        message: 'Pullup disable probe pin',
        units: 'mask',
        description: 'Disable the probe signal pullup resistor. Potentially enables pulldown resistor if available.'
    },
    {
        setting: '$20',
        message: 'Soft limits enable',
        units: 'boolean',
        description: 'Enables soft limits checks within machine travel and sets alarm when exceeded. Requires homing.'
    },
    {
        setting: '$21',
        message: 'Hard limits enable',
        units: 'mask',
        description: 'Enables hard limits. Immediately halts motion and throws an alarm when switch is triggered.'
    },
    {
        setting: '$22',
        message: 'Homing cycle enable',
        units: 'mask',
        description: 'Enables homing cycle. Requires limit switches on all axes.'
    },
    {
        setting: '$23',
        message: 'Homing direction invert',
        units: 'mask',
        description: 'Homing searches for a switch in the positive direction. Set axis bit (00000ZYX) to search in negative direction.'
    },
    {
        setting: '$24',
        message: 'Homing locate feed rate',
        units: 'mm/min',
        description: 'Feed rate to slowly engage limit switch to determine its location accurately.'
    },
    {
        setting: '$25',
        message: 'Homing search seek rate',
        units: 'mm/min',
        description: 'Seek rate to quickly find the limit switch before the slower locating phase.'
    },
    {
        setting: '$26',
        message: 'Homing switch debounce delay',
        units: 'milliseconds',
        description: 'Sets a short delay between phases of homing cycle to let a switch debounce.'
    },
    {
        setting: '$27',
        message: 'Homing switch pull-off distance',
        units: 'millimeters',
        description: 'Retract distance after triggering switch to disengage it. Homing will fail if switch isn\'t cleared.'
    },
    {
        setting: '$28',
        message: 'G73 Retract distance',
        units: 'millimeters',
        description: 'G73 retract distance (for chip breaking drilling).'
    },
    {
        setting: '$29',
        message: 'Pulse delay',
        units: 'microseconds',
        description: 'Step pulse delay.'
    },
    {
        setting: '$30',
        message: 'Maximum spindle speed',
        units: 'RPM',
        description: 'Maximum spindle speed. Sets PWM to 100% duty cycle.'
    },
    {
        setting: '$31',
        message: 'Minimum spindle speed',
        units: 'RPM',
        description: 'Minimum spindle speed. Sets PWM to 0.4% or lowest duty cycle.'
    },
    {
        setting: '$32',
        message: 'Mode of operation',
        units: 'mask',
        description: '0 - Normal; 1 - Laser ; 2 - Lathe.'
    },
    {
        setting: '$33',
        message: 'Spindle PWM frequency',
        units: 'Hz',
        description: 'Spindle PWM frequency.'
    },
    {
        setting: '$34',
        message: 'Spindle PWM off value',
        units: 'percent',
        description: 'Spindle PWM off value in percent (duty cycle).'
    },
    {
        setting: '$35',
        message: 'Spindle PWM min value',
        units: 'percent',
        description: 'Spindle PWM min value in percent (duty cycle).'
    },
    {
        setting: '$36',
        message: 'Spindle PWM max value',
        units: 'percent',
        description: 'Spindle PWM max value in percent (duty cycle).'
    },
    {
        setting: '$37',
        message: 'Steppers deenergize',
        units: 'mask',
        description: 'Specifies which steppers not to disable when stopped.'
    },
    {
        setting: '$38',
        message: 'Spindle PPR deenergize',
        units: 'pulses',
        description: 'Spindle encoder pulses per revolution.'
    },
    {
        setting: '$39',
        message: 'Enable legacy RT commands',
        units: 'boolean',
        description: 'Enables ""normal"" processing of ? ! and ~ characters.'
    },
    {
        setting: '$40',
        message: 'Limit jog commands',
        units: 'boolean',
        description: 'Limit jog commands to machine limits for homed axes.'
    },
    {
        setting: '$43',
        message: 'Axes homing; first pass mask',
        units: 'mask',
        description: 'Axes to home in first pass.'
    },
    {
        setting: '$41',
        message: 'Parking cycle mask',
        units: 'mask',
        description: 'Enables parking cycle, requires parking axis homed.'
    },
    {
        setting: '$42',
        message: 'Parking axis',
        units: 'integer',
        description: 'Define which axis that performs the parking motion.'
    },
    {
        setting: '$43',
        message: 'Homing passes',
        units: 'integer',
        description: 'Number of homing passes. Minimum 1, maximum 128.'
    },
    {
        setting: '$44',
        message: 'Axes homing; first pass mask',
        units: 'mask',
        description: 'Axes to home in first pass.'
    },
    {
        setting: '$45',
        message: 'Axes homing; second pass mask',
        units: 'mask',
        description: 'Axes to home in second pass.'
    },
    {
        setting: '$46',
        message: 'Axes homing; third pass mask',
        units: 'mask',
        description: 'Axes to home in third pass.'
    },
    {
        setting: '$47',
        message: 'Axes homing; fourth pass mask',
        units: 'mask',
        description: 'Axes to home in fourth pass.'
    },
    {
        setting: '$48',
        message: 'Axes homing; fifth pass mask',
        units: 'mask',
        description: 'Axes to home in fifth pass.'
    },
    {
        setting: '$49',
        message: 'Axes homing; sixth pass mask',
        units: 'mask',
        description: 'Axes to home in sixth pass.'
    },
    {
        setting: '$100',
        message: 'X-axis travel resolution',
        units: 'step/mm',
        description: 'X-axis travel resolution in steps per millimeter.'
    },
    {
        setting: '$101',
        message: 'Y-axis travel resolution',
        units: 'step/mm',
        description: 'Y-axis travel resolution in steps per millimeter.'
    },
    {
        setting: '$102',
        message: 'Z-axis travel resolution',
        units: 'step/mm',
        description: 'Z-axis travel resolution in steps per millimeter.'
    },
    {
        setting: '$110',
        message: 'X-axis maximum rate',
        units: 'mm/min',
        description: 'X-axis maximum rate. Used as G0 rapid rate.'
    },
    {
        setting: '$111',
        message: 'Y-axis maximum rate',
        units: 'mm/min',
        description: 'Y-axis maximum rate. Used as G0 rapid rate.'
    },
    {
        setting: '$112',
        message: 'Z-axis maximum rate',
        units: 'mm/min',
        description: 'Z-axis maximum rate. Used as G0 rapid rate.'
    },
    {
        setting: '$120',
        message: 'X-axis acceleration',
        units: 'mm/sec^2',
        description: 'X-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.'
    },
    {
        setting: '$121',
        message: 'Y-axis acceleration',
        units: 'mm/sec^2',
        description: 'Y-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.'
    },
    {
        setting: '$122',
        message: 'Z-axis acceleration',
        units: 'mm/sec^2',
        description: 'Z-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.'
    },
    {
        setting: '$130',
        message: 'X-axis maximum travel',
        units: 'millimeters',
        description: 'Maximum X-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.'
    },
    {
        setting: '$131',
        message: 'Y-axis maximum travel',
        units: 'millimeters',
        description: 'Maximum Y-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.'
    },
    {
        setting: '$132',
        message: 'Z-axis maximum travel',
        units: 'millimeters',
        description: 'Maximum Z-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.'
    }
];
