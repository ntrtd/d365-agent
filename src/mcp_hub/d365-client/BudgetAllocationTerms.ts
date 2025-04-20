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
import type { BudgetAllocationTermsApi } from './BudgetAllocationTermsApi';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "BudgetAllocationTerms" of service "d365_metadata".
 */
export class BudgetAllocationTerms<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetAllocationTermsType<T>
{
  /**
   * Technical entity name for BudgetAllocationTerms.
   */
  static override _entityName = 'BudgetAllocationTerms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetAllocationTerms entity.
   */
  static _keys = ['dataAreaId', 'BudgetAllocationTerm', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Allocation Term.
   */
  declare budgetAllocationTerm: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSetEntityBudgetAllocationTermEntity?: DimensionSets<T> | null;

  constructor(_entityApi: BudgetAllocationTermsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetAllocationTermsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  budgetAllocationTerm: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSetEntityBudgetAllocationTermEntity?: DimensionSetsType<T> | null;
}
