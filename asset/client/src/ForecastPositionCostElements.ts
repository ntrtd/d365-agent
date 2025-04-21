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
import type { ForecastPositionCostElementsApi } from './ForecastPositionCostElementsApi';
import { HcmBudgetCostElementType } from './HcmBudgetCostElementType';
import { HcmBudgetPositionOverride } from './HcmBudgetPositionOverride';
import { HcmBudgetPurposeAllocationOption } from './HcmBudgetPurposeAllocationOption';

/**
 * This class represents the entity "ForecastPositionCostElements" of service "d365_metadata".
 */
export class ForecastPositionCostElements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ForecastPositionCostElementsType<T>
{
  /**
   * Technical entity name for ForecastPositionCostElements.
   */
  static override _entityName = 'ForecastPositionCostElements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ForecastPositionCostElements entity.
   */
  static _keys = [
    'CostElementName',
    'CostElementDataAreaId',
    'EffectiveDate',
    'ExpirationDate'
  ];
  /**
   * Cost Element Name.
   */
  declare costElementName: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Element Data Area Id.
   */
  declare costElementDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Annual Limit.
   */
  declare annualLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Cost Type.
   * @nullable
   */
  declare budgetCostType?: HcmBudgetCostElementType | null;
  /**
   * Forecast Position Override.
   * @nullable
   */
  declare forecastPositionOverride?: HcmBudgetPositionOverride | null;
  /**
   * Allocation Method.
   * @nullable
   */
  declare allocationMethod?: HcmBudgetPurposeAllocationOption | null;
  /**
   * Cost Element Ledger Dimension Display Value.
   * @nullable
   */
  declare costElementLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ForecastPositionCostElementsApi<T>) {
    super(_entityApi);
  }
}

export interface ForecastPositionCostElementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  costElementName: DeserializedType<T, 'Edm.String'>;
  costElementDataAreaId: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  annualLimit: DeserializedType<T, 'Edm.Decimal'>;
  budgetCostType?: HcmBudgetCostElementType | null;
  forecastPositionOverride?: HcmBudgetPositionOverride | null;
  allocationMethod?: HcmBudgetPurposeAllocationOption | null;
  costElementLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
