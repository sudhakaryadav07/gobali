
import { MEDIA_URL, MEDIA_HOST } from "../../config/env";


import RestApi from "./RestApi";
const restApi = new RestApi();


export const uploadFile = async (selectedFile, name, module, sequence) => {
    console.log('name: ', name);
    console.log('selectedFile: ', selectedFile);
    try {
        const path = MEDIA_URL;
        const formdata = new FormData();
        formdata.append('module', module);
        if (name) {
            formdata.append('description', name);
        }
        if (selectedFile) {
            formdata.append("file", selectedFile, selectedFile.name);
        }
        if (sequence) {
            formdata.append("sequence", selectedFile, sequence);
        }
        const data = await restApi.upload(path, formdata);

        const { id, file } = data;
        const filePath = `${file}`.replace('localhost', MEDIA_HOST);

        return { id, filePath };
    } catch (e) {
        console.log('e: ', e);
    }
}