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
import type { BenefitAccountingRulesApi } from './BenefitAccountingRulesApi';
import { PayrollType } from './PayrollType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "BenefitAccountingRules" of service "d365_metadata".
 */
export class BenefitAccountingRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitAccountingRulesType<T>
{
  /**
   * Technical entity name for BenefitAccountingRules.
   */
  static override _entityName = 'BenefitAccountingRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitAccountingRules entity.
   */
  static _keys = ['PlanId', 'LegalEntityId', 'PayrollType'];
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payroll Type.
   * @nullable
   */
  declare payrollType?: PayrollType | null;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: BenefitAccountingRulesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitAccountingRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  planId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  payrollType?: PayrollType | null;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
