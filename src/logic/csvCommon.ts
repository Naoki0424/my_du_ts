import { CsvType } from "@/types/types";

export async function dropFile(e: DragEvent): Promise<CsvType | null> {
    if(!e.dataTransfer) {
        return null;
    }
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    const name = e.dataTransfer.files[0].name;

    reader.readAsText(file)
    
    const result: CsvType | null  = await new Promise((resolve) => {
        reader.onload = () => {
            let lines: string[] = [];
            if ('string' === typeof reader!.result) {
                lines = reader.result.split(/\r\n|\n|\r/g);
            }else {
                return null
            }
            const table = lines.map(function (line: string) {
              return line.split(",");
            });
            resolve(new CsvType(table, name, false));
        };
      }
    )
    return result;
}