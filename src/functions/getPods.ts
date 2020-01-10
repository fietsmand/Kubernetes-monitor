import { run } from './runCommand';

const getPods = (): void => {
    run('kubectl get pods -o wide', (stdout: string) => {
        console.log(stdout);
    });
}

export default getPods;
