import { LineColor } from "./types.js";
import { Position } from "./types.js";
import { Printer } from "./types.js";
import { Angle } from "./types.js";
import { CarriageState } from "./types.js";
import { PlotterState } from "./types.js";
import { Distance } from "./types.js";
import { LogToConsole } from "./logger.js";

const logger = new LogToConsole()
export class Plotter{
    private color:LineColor = LineColor.BLACK;
    private position:Position = { x: 0, y: 0 };
    //private prt:Printer = console.log; Убарн за ненадобностью (копирует функционал нашего класса Logger)
    private angle: Angle = 0;
    private carriageState:CarriageState = CarriageState.UP;
    /*
    Удалено по причинам слишком глубокой абстракции,у нас же тут не Теория категорий😅
    private state:PlotterState = { 
        position: { x: 0, y: 0 }, 
        angle: 0, 
        color: LineColor.BLACK,
        carriageState: CarriageState.UP,
    }; 
    */

    constructor(position:Position,angle:Angle,color:LineColor,carriageState:CarriageState){
        this.position = position;
        this.angle = angle;
        this.color = color;
        this.carriageState = carriageState;
    }

    drawLine(from:Position, to:Position, color:LineColor): void {
        logger.prt(`...Чертим линию из (${from.x}, ${from.y}) в (${to.x}, ${to.y}) используя ${color} цвет.`);
    }

    calcNewPosition(distance: Distance, angle: Angle, current: Position): Position {
        
        //Преобразуем градусы в радианы при 180.0 градусов = 1 pi радиан
        const angle_in_rads = angle * (Math.PI / 180.0) * 1.0;
        //новая позиция
        const x = current.x + distance * Math.cos(angle_in_rads);
        const y = current.y + distance * Math.sin(angle_in_rads);
        //возвращаем новую позицию
        
        //return { x: Math.round(x), y: Math.round(y) };
        
       return { x: current.x + distance, y: current.y }; 
    }

    move(distance: Distance): void {
    // вычисляем новую позицию (было)
        //let newPosition = this.calcNewPosition(distance, state.angle, state.position);
    const newPosition = this.calcNewPosition(distance, this.angle, this.position); //стало
    // draw line if needed
        if (this.carriageState === CarriageState.DOWN) {
            // Здесь следует отрисовка линии
            this.drawLine( this.position, newPosition, this.color);
        }else{
            logger.prt(`Передвигаем на ${distance} от точки (${this.position.x}, ${this.position.y})`);
        }
        // изменяем состояние
        /*
        const retState = { ...state };
        retState.position = newPosition;
        this.position = newPosition;
        return retState;
        */
    }

    turn(angle: Angle): void {
        logger.prt(`Поворачиваем на ${angle} градусов`);
        // вычисляем новый угол
        const newAngle = (this.angle + angle) % 360.0;
        // изменяем состояние
        /*
        const retState = { ...state };
        retState.angle = newAngle;
        this.angle = retState.angle;
        return retState;
        */
       this.angle = newAngle
    }

    carriageUp(): void {
        logger.prt("Поднимаем каретку");
        /*
        изменяем состояние
        const retState = { ...state };
        retState.carriageState = CarriageState.UP;
        this.carriageState = retState.carriageState;
        return retState;
        */
       this.carriageState = CarriageState.UP
    }

    carriageDown(): void {
        logger.prt("Опускаем каретку");
        /*
        изменяем состояние
        const retState = { ...state };
        retState.carriageState = CarriageState.DOWN;
        this.carriageState = retState.carriageState;
        return retState;
        */
       this.carriageState = CarriageState.DOWN
}

    setColor(color: LineColor,): void {
        logger.prt(`Устанавливаем ${color} цвет линии.`);
        // изменяем состояние
        /*
        const retState = { ...state };
        retState.color = color;
        this.color = retState.color;
        return retState;
        */
       if (color = LineColor.BLACK){
        this.color = LineColor.BLACK 
       }
       else if (color = LineColor.RED){
        this.color = LineColor.RED
       }
       else {
        this.color = LineColor.GREEN
       }
       
    } 

    setPosition(position: Position): void {
        logger.prt(`Устанавливаем позицию каретки в (${position.x}, ${position.y}).`);
        /*
        изменяем состояние
        const retState = { ...state };
        retState.position = position;
        this.position = retState.position;
        return retState;
        */
       this.position = position
    }

    drawTriangle(size: number, state: PlotterState): void {
        this.carriageDown();
        for(let i=0; i<3; ++i){
            this.move(size);
            this.turn(120.0);
        }
        this.carriageUp();
    }

    drawSquare(prt: Printer, size: number, state: PlotterState): void {
        this.carriageDown();
        for(let i=0; i<4; ++i){
            this.move(size);
            this.turn(90.0);
        }  
        this.carriageUp();
    }   


}
