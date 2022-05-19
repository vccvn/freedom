type StringDataFunction = {
    type: string,
    str: string,
    args?: StringDataFunctionContainers
}
type StringDataFunctionContainers = StringDataFunction[]
type StringData = {
    type: string,
    str: string,
    args?: StringDataFunctionContainers
};
type StringDataContainers = StringData[]
export declare function stringAnalysis(str:string):StringDataContainers