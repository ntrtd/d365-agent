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
import type { BenefitDetailsApi } from './BenefitDetailsApi';
import { PayrollContributionBasis } from './PayrollContributionBasis';
import { PayrollDeductionBasis } from './PayrollDeductionBasis';
import { Benefits, BenefitsType } from './Benefits';

/**
 * This class represents the entity "BenefitDetails" of service "d365_metadata".
 */
export class BenefitDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitDetailsType<T>
{
  /**
   * Technical entity name for BenefitDetails.
   */
  static override _entityName = 'BenefitDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitDetails entity.
   */
  static _keys = ['BenefitId', 'ValidFrom', 'ValidTo'];
  /**
   * Benefit Id.
   */
  declare benefitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Contribution Basis.
   * @nullable
   */
  declare defaultContributionBasis?: PayrollContributionBasis | null;
  /**
   * Default Deduction Accounting Currency Amt.
   */
  declare defaultDeductionAccountingCurrencyAmt: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Deduction Calculation Frequency Id.
   * @nullable
   */
  declare deductionCalculationFrequencyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Contribution Accounting Currency Amt.
   */
  declare defaultContributionAccountingCurrencyAmt: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Default Deduction Basis.
   * @nullable
   */
  declare defaultDeductionBasis?: PayrollDeductionBasis | null;
  /**
   * Contribution Calculation Rate Id.
   * @nullable
   */
  declare contributionCalculationRateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contribution Calculation Frequency Id.
   * @nullable
   */
  declare contributionCalculationFrequencyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;

  constructor(_entityApi: BenefitDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultContributionBasis?: PayrollContributionBasis | null;
  defaultDeductionAccountingCurrencyAmt: DeserializedType<T, 'Edm.Decimal'>;
  deductionCalculationFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  defaultContributionAccountingCurrencyAmt: DeserializedType<T, 'Edm.Decimal'>;
  defaultDeductionBasis?: PayrollDeductionBasis | null;
  contributionCalculationRateId?: DeserializedType<T, 'Edm.String'> | null;
  contributionCalculationFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  benefit?: BenefitsType<T> | null;
}
