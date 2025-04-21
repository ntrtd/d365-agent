/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { EarningCodesApi } from './EarningCodesApi';
import { PayrollFringeBenefitType } from './PayrollFringeBenefitType';
import { PayrollIncludeInPaymentType } from './PayrollIncludeInPaymentType';
import { NoYes } from './NoYes';
import { PayrollQuantityUnit } from './PayrollQuantityUnit';
import { PayrollTaxMethod } from './PayrollTaxMethod';
import { PayrollRateBasis } from './PayrollRateBasis';
import { PayrollBaseDefinition } from './PayrollBaseDefinition';
import {
  PremiumEarningCodes,
  PremiumEarningCodesType
} from './PremiumEarningCodes';
import {
  BenefitsDeductions,
  BenefitsDeductionsType
} from './BenefitsDeductions';
import {
  LeaveBuySellPolicySellTiers,
  LeaveBuySellPolicySellTiersType
} from './LeaveBuySellPolicySellTiers';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';
import {
  LeaveBuySellPolicyBuyTiers,
  LeaveBuySellPolicyBuyTiersType
} from './LeaveBuySellPolicyBuyTiers';

/**
 * This class represents the entity "EarningCodes" of service "d365_metadata".
 */
export class EarningCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EarningCodesType<T>
{
  /**
   * Technical entity name for EarningCodes.
   */
  static override _entityName = 'EarningCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EarningCodes entity.
   */
  static _keys = ['EarningCode'];
  /**
   * Earning Code.
   */
  declare earningCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Earning Code Group Id.
   * @nullable
   */
  declare earningCodeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fringe Benefit Type.
   * @nullable
   */
  declare fringeBenefitType?: PayrollFringeBenefitType | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Include In Payment Type.
   * @nullable
   */
  declare includeInPaymentType?: PayrollIncludeInPaymentType | null;
  /**
   * Is Productive.
   * @nullable
   */
  declare isProductive?: NoYes | null;
  /**
   * Quantity Unit.
   * @nullable
   */
  declare quantityUnit?: PayrollQuantityUnit | null;
  /**
   * Is Retroactive.
   * @nullable
   */
  declare isRetroactive?: NoYes | null;
  /**
   * Is Base Earnings Component.
   * @nullable
   */
  declare isBaseEarningsComponent?: NoYes | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retroactive Earning Code Id.
   * @nullable
   */
  declare retroactiveEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Formula.
   */
  declare defaultFormula: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Method.
   * @nullable
   */
  declare taxMethod?: PayrollTaxMethod | null;
  /**
   * Gross Up Earning Code Id.
   * @nullable
   */
  declare grossUpEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Basis.
   * @nullable
   */
  declare rateBasis?: PayrollRateBasis | null;
  /**
   * Track Fmla Hours.
   * @nullable
   */
  declare trackFmlaHours?: NoYes | null;
  /**
   * Base Definition.
   * @nullable
   */
  declare baseDefinition?: PayrollBaseDefinition | null;
  /**
   * Tax Group Id.
   * @nullable
   */
  declare taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Earning Statement Line Rate Editable.
   * @nullable
   */
  declare isEarningStatementLineRateEditable?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link PremiumEarningCodes} entity.
   */
  declare premiumEarnings: PremiumEarningCodes<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsDeductions} entity.
   */
  declare benefitsDeduction: BenefitsDeductions<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsDeductions} entity.
   */
  declare employerBenefitsDeduction: BenefitsDeductions<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBuySellPolicySellTiers} entity.
   */
  declare leaveBuySellPolicySellTier: LeaveBuySellPolicySellTiers<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveTypes} entity.
   */
  declare leaveTypes: LeaveTypes<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBuySellPolicyBuyTiers} entity.
   */
  declare leaveBuySellPolicyBuyTier: LeaveBuySellPolicyBuyTiers<T>[];

  constructor(_entityApi: EarningCodesApi<T>) {
    super(_entityApi);
  }
}

export interface EarningCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  earningCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  earningCodeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  fringeBenefitType?: PayrollFringeBenefitType | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  includeInPaymentType?: PayrollIncludeInPaymentType | null;
  isProductive?: NoYes | null;
  quantityUnit?: PayrollQuantityUnit | null;
  isRetroactive?: NoYes | null;
  isBaseEarningsComponent?: NoYes | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retroactiveEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  defaultFormula: DeserializedType<T, 'Edm.Decimal'>;
  taxMethod?: PayrollTaxMethod | null;
  grossUpEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  rateBasis?: PayrollRateBasis | null;
  trackFmlaHours?: NoYes | null;
  baseDefinition?: PayrollBaseDefinition | null;
  taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isEarningStatementLineRateEditable?: NoYes | null;
  premiumEarnings: PremiumEarningCodesType<T>[];
  benefitsDeduction: BenefitsDeductionsType<T>[];
  employerBenefitsDeduction: BenefitsDeductionsType<T>[];
  leaveBuySellPolicySellTier: LeaveBuySellPolicySellTiersType<T>[];
  leaveTypes: LeaveTypesType<T>[];
  leaveBuySellPolicyBuyTier: LeaveBuySellPolicyBuyTiersType<T>[];
}
