import { Reader } from './Reader';

export interface Reception {
    delivery(reader: Reader): void;
    receive(reader: Reader): void;
}