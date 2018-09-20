export { default as Command } from "./Commands/Command";
export { default as CommandOptions } from "./Commands/CommandOptions";
export { default as ICommandService } from "./Commands/ICommandService";
export { default as ICommandType } from "./Commands/ICommandType";
export { default as IDetectionService } from "./Detection/IDetectionService";
export { default as DetectionOptions } from "./Detection/DetectionOptions";
export { default as EigenFaceRecognizerOptions } from "./Detection/EigenFaceRecognizerOptions";
export { default as Face } from "./Faces/Face";
export { default as IFaceManagementService } from "./Faces/IFaceManagementService";
export { default as RunCondition, RunConditionType } from "./Commands/RunCondition";
export { default as Status } from "./Detection/Status";

export { 
    IncorrectRunConditionTypeToSetFaces
} from "./Errors";