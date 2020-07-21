// import * as  rust from '../pkg/project_name';
// const rust = fetch("")
import { AllRustModules } from "../lib/all_imports";
const msg = document.getElementById('msg') as HTMLLabelElement;
class Index {
    constructor() {
        AllRustModules
            .then(x => {
                msg.innerHTML = x.sample_from_rust();
            });
    }
}
window.onload = () => {

    let index = new Index();
}