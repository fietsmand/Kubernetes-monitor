import { exec } from 'child_process';
export const run = (command, callback) => {
    exec(command, (err, stdout, stderr) => callback(err, stdout, stderr));
};
//# sourceMappingURL=runCommand.js.map