export function clickCheckbox(checkedKeyList: string[], targetKey: string): string[] {
    if (!checkedKeyList.includes(targetKey)) {
        checkedKeyList.push(targetKey);
    } else {
        checkedKeyList.splice(checkedKeyList.indexOf(targetKey), 1);
    }
    return checkedKeyList;
}