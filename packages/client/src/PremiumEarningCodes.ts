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
import type { PremiumEarningCodesApi } from './PremiumEarningCodesApi';
import { PayrollPayoutBasis } from './PayrollPayoutBasis';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';
import {
  PayrollCalculationFrequencies,
  PayrollCalculationFrequenciesType
} from './PayrollCalculationFrequencies';
import { EarningCodes, EarningCodesType } from './EarningCodes';
import {
  EarningStatementLineInquiries,
  EarningStatementLineInquiriesType
} from './EarningStatementLineInquiries';

/**
 * This class represents the entity "PremiumEarningCodes" of service "d365_metadata".
 */
export class PremiumEarningCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PremiumEarningCodesType<T>
{
  /**
   * Technical entity name for PremiumEarningCodes.
   */
  static override _entityName = 'PremiumEarningCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PremiumEarningCodes entity.
   */
  static _keys = ['PremiumEarningCode'];
  /**
   * Premium Earning Code.
   */
  declare premiumEarningCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Earning Code Id.
   * @nullable
   */
  declare earningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculation Frequency Id.
   * @nullable
   */
  declare calculationFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payout Basis.
   * @nullable
   */
  declare payoutBasis?: PayrollPayoutBasis | null;
  /**
   * Policy Rule Type Id.
   * @nullable
   */
  declare policyRuleTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Type Id.
   * @nullable
   */
  declare policyTypeId?: SysPolicyTypeEnum | null;
  /**
   * One-to-one navigation property to the {@link PayrollCalculationFrequencies} entity.
   */
  declare calculationFrequency?: PayrollCalculationFrequencies<T> | null;
  /**
   * One-to-one navigation property to the {@link EarningCodes} entity.
   */
  declare earningCode?: EarningCodes<T> | null;
  /**
   * One-to-many navigation property to the {@link EarningStatementLineInquiries} entity.
   */
  declare earningStatementLineInquiry: EarningStatementLineInquiries<T>[];

  constructor(_entityApi: PremiumEarningCodesApi<T>) {
    super(_entityApi);
  }
}

export interface PremiumEarningCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  premiumEarningCode: DeserializedType<T, 'Edm.String'>;
  earningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  calculationFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  payoutBasis?: PayrollPayoutBasis | null;
  policyRuleTypeId?: DeserializedType<T, 'Edm.String'> | null;
  policyTypeId?: SysPolicyTypeEnum | null;
  calculationFrequency?: PayrollCalculationFrequenciesType<T> | null;
  earningCode?: EarningCodesType<T> | null;
  earningStatementLineInquiry: EarningStatementLineInquiriesType<T>[];
}
