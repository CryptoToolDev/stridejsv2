import { AminoMsg } from "@cosmjs/amino";
import { MsgSetAirdropAllocations, MsgClaimFreeAmount, MsgCreateAirdrop, MsgDeleteAirdrop } from "./tx";
export interface AminoMsgSetAirdropAllocations extends AminoMsg {
    type: "/stride.claim.MsgSetAirdropAllocations";
    value: {
        allocator: string;
        airdrop_identifier: string;
        users: string[];
        weights: string[];
    };
}
export interface AminoMsgClaimFreeAmount extends AminoMsg {
    type: "claim/ClaimFreeAmount";
    value: {
        user: string;
    };
}
export interface AminoMsgCreateAirdrop extends AminoMsg {
    type: "/stride.claim.MsgCreateAirdrop";
    value: {
        distributor: string;
        identifier: string;
        chain_id: string;
        denom: string;
        start_time: string;
        duration: string;
        autopilot_enabled: boolean;
    };
}
export interface AminoMsgDeleteAirdrop extends AminoMsg {
    type: "/stride.claim.MsgDeleteAirdrop";
    value: {
        distributor: string;
        identifier: string;
    };
}
export declare const AminoConverter: {
    "/stride.claim.MsgSetAirdropAllocations": {
        aminoType: string;
        toAmino: ({ allocator, airdropIdentifier, users, weights }: MsgSetAirdropAllocations) => AminoMsgSetAirdropAllocations["value"];
        fromAmino: ({ allocator, airdrop_identifier, users, weights }: AminoMsgSetAirdropAllocations["value"]) => MsgSetAirdropAllocations;
    };
    "/stride.claim.MsgClaimFreeAmount": {
        aminoType: string;
        toAmino: ({ user }: MsgClaimFreeAmount) => AminoMsgClaimFreeAmount["value"];
        fromAmino: ({ user }: AminoMsgClaimFreeAmount["value"]) => MsgClaimFreeAmount;
    };
    "/stride.claim.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier, chainId, denom, startTime, duration, autopilotEnabled }: MsgCreateAirdrop) => AminoMsgCreateAirdrop["value"];
        fromAmino: ({ distributor, identifier, chain_id, denom, start_time, duration, autopilot_enabled }: AminoMsgCreateAirdrop["value"]) => MsgCreateAirdrop;
    };
    "/stride.claim.MsgDeleteAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier }: MsgDeleteAirdrop) => AminoMsgDeleteAirdrop["value"];
        fromAmino: ({ distributor, identifier }: AminoMsgDeleteAirdrop["value"]) => MsgDeleteAirdrop;
    };
};
