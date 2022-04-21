interface OType {
    [key: string]: number;
}

export default {
    F(date: Date, pattern: string): string {
        date = new Date(date);
        pattern = pattern || "yyyy-MM-dd";
        const y: string = date.getFullYear().toString(),
            o: OType = {
                "M+": date.getMonth() + 1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
            };
        pattern = pattern.replace(/(y+)/gi, (a: string) => {
            return y.substr(4 - Math.min(4, a.length));
        });
        for (const i in o) {
            pattern = pattern.replace(new RegExp("(" + i + ")", "g"), (a: string): any => {
                return o[i] < 10 && a.length > 1 ? "0" + o[i] : o[i];
            });
        }
        return pattern;
    },
};
