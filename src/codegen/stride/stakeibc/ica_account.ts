export enum ICAAccountType {
  DELEGATION = 0,
  FEE = 1,
  WITHDRAWAL = 2,
  REDEMPTION = 3,
  UNRECOGNIZED = -1,
}
export enum ICAAccountTypeSDKType {
  DELEGATION = 0,
  FEE = 1,
  WITHDRAWAL = 2,
  REDEMPTION = 3,
  UNRECOGNIZED = -1,
}
export function iCAAccountTypeFromJSON(object: any): ICAAccountType {
  switch (object) {
    case 0:
    case "DELEGATION":
      return ICAAccountType.DELEGATION;

    case 1:
    case "FEE":
      return ICAAccountType.FEE;

    case 2:
    case "WITHDRAWAL":
      return ICAAccountType.WITHDRAWAL;

    case 3:
    case "REDEMPTION":
      return ICAAccountType.REDEMPTION;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ICAAccountType.UNRECOGNIZED;
  }
}
export function iCAAccountTypeToJSON(object: ICAAccountType): string {
  switch (object) {
    case ICAAccountType.DELEGATION:
      return "DELEGATION";

    case ICAAccountType.FEE:
      return "FEE";

    case ICAAccountType.WITHDRAWAL:
      return "WITHDRAWAL";

    case ICAAccountType.REDEMPTION:
      return "REDEMPTION";

    default:
      return "UNKNOWN";
  }
}