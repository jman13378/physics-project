export function isClosed(): boolean {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const closingTime = 15 * 60 + 30;
    return currentTime > closingTime;
}


export function parseMessage(message: string, preserve?: boolean): string {
    message = message.replace(/\(\/([^)]+)\)\[([^\]]+)\]/g, '<a href="/$1">$2</a>');

    if (preserve) return message;
    return message
        .replace(/\\/g, '')
        .replace(/\n/g, '<br>')
}