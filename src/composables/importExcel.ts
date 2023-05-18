// import XLSX, { utils } from 'xlsx'
import { read, utils } from 'xlsx'

export async function readExcel(file: File) {
    if(file != null) {
        const data = await file.arrayBuffer();
        const workbook = read(data)
        const jsonData = utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
        return jsonData
    }
}