import { exec } from 'child_process';

export const run = (command: string, callback: Function) => {
    exec(command, (err, stdout: string, stderr: string) => callback(err, stdout, stderr));
}