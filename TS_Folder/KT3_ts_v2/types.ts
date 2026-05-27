export type Point = number;
export type Distance = number;
export type Angle = number;
export type Position = { x: Point; y: Point };
export enum CarriageState {
  UP,
  DOWN
}
export enum LineColor {
  BLACK = "чорный",
  RED = "красный",
  GREEN = "зелёный"
}
//Без надобности,встроен в класс!
export type PlotterState = {
  position: Position;
  angle: Angle;
  color: LineColor;
  carriageState: CarriageState;
};
export type Printer = (s: string) => void;

export interface Logger{
log(message: string): void;
}