import { run } from './runCommand.js';
const getPods = () => {
    run('kubectl get pods -o wide', (stdout) => {
        console.log(stdout);
    });
};
export default getPods;
//# sourceMappingURL=getPods.js.map