import { createLog } from '../data/logs/index';

async function addLog(data) {
    try {
        return await createLog(data);
    } catch (error) {
        throw new Error(error.message);
    }
}

export default {
    addLog
}