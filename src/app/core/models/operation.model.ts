export interface Operation {
    id: string;
    client: string;
    document: string;
    type: string;
    amount: string;
    date: string;
    status: 'completed' | 'pending' | 'cancelled';
}