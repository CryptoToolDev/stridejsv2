import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLiquidStake, MsgLSMLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/stride.stakeibc.MsgLiquidStake", MsgLiquidStake], ["/stride.stakeibc.MsgLSMLiquidStake", MsgLSMLiquidStake], ["/stride.stakeibc.MsgRedeemStake", MsgRedeemStake], ["/stride.stakeibc.MsgRegisterHostZone", MsgRegisterHostZone], ["/stride.stakeibc.MsgClaimUndelegatedTokens", MsgClaimUndelegatedTokens], ["/stride.stakeibc.MsgRebalanceValidators", MsgRebalanceValidators], ["/stride.stakeibc.MsgAddValidators", MsgAddValidators], ["/stride.stakeibc.MsgChangeValidatorWeight", MsgChangeValidatorWeight], ["/stride.stakeibc.MsgDeleteValidator", MsgDeleteValidator], ["/stride.stakeibc.MsgRestoreInterchainAccount", MsgRestoreInterchainAccount], ["/stride.stakeibc.MsgUpdateValidatorSharesExchRate", MsgUpdateValidatorSharesExchRate], ["/stride.stakeibc.MsgClearBalance", MsgClearBalance]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLiquidStake",
        value: MsgLiquidStake.encode(value).finish()
      };
    },

    lSMLiquidStake(value: MsgLSMLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value: MsgLSMLiquidStake.encode(value).finish()
      };
    },

    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value: MsgRedeemStake.encode(value).finish()
      };
    },

    registerHostZone(value: MsgRegisterHostZone) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value: MsgRegisterHostZone.encode(value).finish()
      };
    },

    claimUndelegatedTokens(value: MsgClaimUndelegatedTokens) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value: MsgClaimUndelegatedTokens.encode(value).finish()
      };
    },

    rebalanceValidators(value: MsgRebalanceValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value: MsgRebalanceValidators.encode(value).finish()
      };
    },

    addValidators(value: MsgAddValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value: MsgAddValidators.encode(value).finish()
      };
    },

    changeValidatorWeight(value: MsgChangeValidatorWeight) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeight",
        value: MsgChangeValidatorWeight.encode(value).finish()
      };
    },

    deleteValidator(value: MsgDeleteValidator) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value: MsgDeleteValidator.encode(value).finish()
      };
    },

    restoreInterchainAccount(value: MsgRestoreInterchainAccount) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value: MsgRestoreInterchainAccount.encode(value).finish()
      };
    },

    updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value: MsgUpdateValidatorSharesExchRate.encode(value).finish()
      };
    },

    clearBalance(value: MsgClearBalance) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value: MsgClearBalance.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLiquidStake",
        value
      };
    },

    lSMLiquidStake(value: MsgLSMLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value
      };
    },

    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value
      };
    },

    registerHostZone(value: MsgRegisterHostZone) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value
      };
    },

    claimUndelegatedTokens(value: MsgClaimUndelegatedTokens) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value
      };
    },

    rebalanceValidators(value: MsgRebalanceValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value
      };
    },

    addValidators(value: MsgAddValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value
      };
    },

    changeValidatorWeight(value: MsgChangeValidatorWeight) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeight",
        value
      };
    },

    deleteValidator(value: MsgDeleteValidator) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value
      };
    },

    restoreInterchainAccount(value: MsgRestoreInterchainAccount) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value
      };
    },

    updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value
      };
    },

    clearBalance(value: MsgClearBalance) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value
      };
    }

  },
  fromPartial: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLiquidStake",
        value: MsgLiquidStake.fromPartial(value)
      };
    },

    lSMLiquidStake(value: MsgLSMLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value: MsgLSMLiquidStake.fromPartial(value)
      };
    },

    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value: MsgRedeemStake.fromPartial(value)
      };
    },

    registerHostZone(value: MsgRegisterHostZone) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value: MsgRegisterHostZone.fromPartial(value)
      };
    },

    claimUndelegatedTokens(value: MsgClaimUndelegatedTokens) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value: MsgClaimUndelegatedTokens.fromPartial(value)
      };
    },

    rebalanceValidators(value: MsgRebalanceValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value: MsgRebalanceValidators.fromPartial(value)
      };
    },

    addValidators(value: MsgAddValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value: MsgAddValidators.fromPartial(value)
      };
    },

    changeValidatorWeight(value: MsgChangeValidatorWeight) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeight",
        value: MsgChangeValidatorWeight.fromPartial(value)
      };
    },

    deleteValidator(value: MsgDeleteValidator) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value: MsgDeleteValidator.fromPartial(value)
      };
    },

    restoreInterchainAccount(value: MsgRestoreInterchainAccount) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value: MsgRestoreInterchainAccount.fromPartial(value)
      };
    },

    updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value: MsgUpdateValidatorSharesExchRate.fromPartial(value)
      };
    },

    clearBalance(value: MsgClearBalance) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value: MsgClearBalance.fromPartial(value)
      };
    }

  }
};