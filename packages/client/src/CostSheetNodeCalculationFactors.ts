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
import type { CostSheetNodeCalculationFactorsApi } from './CostSheetNodeCalculationFactorsApi';
import { CostingVersionStatus } from './CostingVersionStatus';

/**
 * This class represents the entity "CostSheetNodeCalculationFactors" of service "d365_metadata".
 */
export class CostSheetNodeCalculationFactors<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostSheetNodeCalculationFactorsType<T>
{
  /**
   * Technical entity name for CostSheetNodeCalculationFactors.
   */
  static override _entityName = 'CostSheetNodeCalculationFactors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostSheetNodeCalculationFactors entity.
   */
  static _keys = [
    'dataAreaId',
    'CostSheetNodeName',
    'PriceSiteId',
    'FromDate',
    'CostingVersionId',
    'ItemNumber',
    'ProductGroupId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Sheet Node Name.
   */
  declare costSheetNodeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Site Id.
   */
  declare priceSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Costing Version Id.
   */
  declare costingVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Group Id.
   */
  declare productGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Surcharge Percentage.
   */
  declare surchargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Currency Rate Amount.
   */
  declare accountingCurrencyRateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Currency Unit Based Amount.
   */
  declare accountingCurrencyUnitBasedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Costing Version Status.
   * @nullable
   */
  declare costingVersionStatus?: CostingVersionStatus | null;

  constructor(_entityApi: CostSheetNodeCalculationFactorsApi<T>) {
    super(_entityApi);
  }
}

export interface CostSheetNodeCalculationFactorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  costSheetNodeName: DeserializedType<T, 'Edm.String'>;
  priceSiteId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costingVersionId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productGroupId: DeserializedType<T, 'Edm.String'>;
  surchargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  accountingCurrencyRateAmount: DeserializedType<T, 'Edm.Decimal'>;
  accountingCurrencyUnitBasedAmount: DeserializedType<T, 'Edm.Decimal'>;
  costingVersionStatus?: CostingVersionStatus | null;
}
