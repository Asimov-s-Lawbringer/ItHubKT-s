import { LineColor } from "./types.js";
import { Position } from "./types.js";
import { Printer } from "./types.js";
import { Angle } from "./types.js";
import { CarriageState } from "./types.js";
import { PlotterState } from "./types.js";
import { Distance } from "./types.js";

export class Plotter{
    private color:LineColor = LineColor.BLACK;
    private current_position:Position = { x: 0, y: 0 };
    private prt:Printer = console.log;
    private angle: Angle = 0;
    private carriageState:CarriageState = CarriageState.UP;
    private state:PlotterState = { 
        position: { x: 0, y: 0 }, 
        angle: 0, 
        color: LineColor.BLACK,
        carriageState: CarriageState.UP,
    };

    constructor(position:Position,angle:Angle,color:LineColor,carriageState:CarriageState){
        this.state.position = position;
        this.state.angle = angle;
        this.state.color = color;
        this.state.carriageState = carriageState;
    }

    drawLine(prt:Printer, from:Position, to:Position, color:LineColor): void {
        prt(`...Чертим линию из (${from.x}, ${from.y}) в (${to.x}, ${to.y}) используя ${color} цвет.`);
    }

    calcNewPosition(distance:Distance, angle:Angle, current:Position):Position {
        // Преобразуем градусы в радианы при 180.0 градусов = 1 pi радиан
        const angle_in_rads = angle * (Math.PI / 180.0) * 1.0;
        // новая позиция
        const x = current.x + distance * Math.cos(angle_in_rads);
        const y = current.y + distance * Math.sin(angle_in_rads);
        // возвращаем новую позицию
        return { x: Math.round(x), y: Math.round(y) };
    }

    move(prt: Printer, distance: Distance, state: PlotterState): PlotterState {
    // вычисляем новую позицию
        let newPosition = this.calcNewPosition(distance, state.angle, state.position);
    // draw line if needed
        if (state.carriageState === CarriageState.DOWN) {
            // Здесь следует отрисовка линии
            this.drawLine(prt, state.position, newPosition, state.color);
        }else{
            prt(`Передвигаем на ${distance} от точки (${state.position.x}, ${state.position.y})`);
        }
        // изменяем состояние
        const retState = { ...state };
        retState.position = newPosition;
        this.state.position = newPosition;
        return retState;
    }

    turn(prt: Printer, angle: Angle, state: PlotterState): PlotterState {
        prt(`Поворачиваем на ${angle} градусов`);
        // вычисляем новый угол
        const newAngle = (state.angle + angle) % 360.0;
        // изменяем состояние
        const retState = { ...state };
        retState.angle = newAngle;
        this.state.angle = retState.angle;
        return retState;
    }

    carriageUp(prt: Printer, state: PlotterState): PlotterState {
        prt("Поднимаем каретку");
        // изменяем состояние
        const retState = { ...state };
        retState.carriageState = CarriageState.UP;
        this.state.carriageState = retState.carriageState;
        return retState;
    }

    carriageDown(prt: Printer, state: PlotterState): PlotterState {
        prt("Опускаем каретку");
        // изменяем состояние
        const retState = { ...state };
        retState.carriageState = CarriageState.DOWN;
        this.state.carriageState = retState.carriageState;
        return retState;
}

    setColor(prt: Printer, color: LineColor, state: PlotterState): PlotterState {
        prt(`Устанавливаем ${color} цвет линии.`);
        // изменяем состояние
        const retState = { ...state };
        retState.color = color;
        this.state.color = retState.color;
        return retState;
    } 

    setPosition(prt: Printer, position: Position, state: PlotterState): PlotterState {
        prt(`Устанавливаем позицию каретки в (${position.x}, ${position.y}).`);
        // изменяем состояние
        const retState = { ...state };
        retState.position = position;
        this.state.position = retState.position;
        return retState;
    }

    drawTriangle(prt: Printer, size: number, state: PlotterState): PlotterState {
        state = this.carriageDown(prt, state);
        for(let i=0; i<3; ++i){
            state = this.move(prt, size, state);
            state = this.turn(prt, 120.0, state);
        }
        return this.carriageUp(prt, state);
    }

    drawSquare(prt: Printer, size: number, state: PlotterState): PlotterState {
        state = this.carriageDown(prt, state);
        for(let i=0; i<4; ++i){
            state = this.move(prt, size, state);
            state = this.turn(prt, 90.0, state);
        }  
        return this.carriageUp(prt, state);
    }   


}
