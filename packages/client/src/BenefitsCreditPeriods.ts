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
import type { BenefitsCreditPeriodsApi } from './BenefitsCreditPeriodsApi';
import { BenefitCreditProrateRule } from './BenefitCreditProrateRule';
import { BenefitCreditProrateFormulaType } from './BenefitCreditProrateFormulaType';

/**
 * This class represents the entity "BenefitsCreditPeriods" of service "d365_metadata".
 */
export class BenefitsCreditPeriods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsCreditPeriodsType<T>
{
  /**
   * Technical entity name for BenefitsCreditPeriods.
   */
  static override _entityName = 'BenefitsCreditPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsCreditPeriods entity.
   */
  static _keys = ['dataAreaId', 'PeriodId', 'CreditId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Credit Id.
   */
  declare creditId: DeserializedType<T, 'Edm.String'>;
  /**
   * Total Credit Value.
   */
  declare totalCreditValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prorate Rule.
   * @nullable
   */
  declare prorateRule?: BenefitCreditProrateRule | null;
  /**
   * Prorate Formula.
   * @nullable
   */
  declare prorateFormula?: BenefitCreditProrateFormulaType | null;

  constructor(_entityApi: BenefitsCreditPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsCreditPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  periodId: DeserializedType<T, 'Edm.String'>;
  creditId: DeserializedType<T, 'Edm.String'>;
  totalCreditValue: DeserializedType<T, 'Edm.Decimal'>;
  prorateRule?: BenefitCreditProrateRule | null;
  prorateFormula?: BenefitCreditProrateFormulaType | null;
}
