import Renderer from "./renderer";
import { D3Selection, Datum, EventBus, LegendDatum, Object, RendererClass, SingleRendererOptions, State } from "../typings";
declare class ChartSeries {
    el: D3Selection;
    events: EventBus;
    oldRenderers: Renderer[];
    options: Object<any>;
    renderers: Renderer[];
    state: any;
    data: () => Datum[] | Object<any>[];
    hide: () => boolean;
    hideInLegend: () => boolean;
    key: () => string;
    legendColor: () => string;
    legendName: () => string;
    renderAs: () => SingleRendererOptions<any>[];
    symbolOffset: (d: Datum) => number;
    xAxis: () => "x1" | "x2";
    yAxis: () => "y1" | "y2";
    xAttribute: () => string;
    yAttribute: () => string;
    x: (d: Datum) => number | string | Date;
    y: (d: Datum) => number | string | Date;
    constructor(state: State, events: EventBus, el: D3Selection, options: Object<any>);
    update(options: Object<any>): void;
    assignAccessors(): void;
    private updateRenderers();
    private removeAllExcept(types);
    get(type: string): RendererClass<any>;
    private addRenderer(options);
    private remove(renderer);
    dataForLegend(): LegendDatum;
    dataForAxis(axis: "x" | "y"): any[];
    legendPosition(): "top" | "bottom";
    legendFloat(): "left" | "right";
    getBarsInfo(): Object<any>;
    hasFlags(): boolean;
    hasData(): boolean;
    draw(): void;
    private close();
}
export default ChartSeries;
