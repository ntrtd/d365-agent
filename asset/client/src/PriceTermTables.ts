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
import type { PriceTermTablesApi } from './PriceTermTablesApi';
import { GupCalculationBasis } from './GupCalculationBasis';
import { NoYes } from './NoYes';
import { GupPriceTermCalculateMethod } from './GupPriceTermCalculateMethod';

/**
 * This class represents the entity "PriceTermTables" of service "d365_metadata".
 */
export class PriceTermTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PriceTermTablesType<T>
{
  /**
   * Technical entity name for PriceTermTables.
   */
  static override _entityName = 'PriceTermTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceTermTables entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Calculation Basis.
   * @nullable
   */
  declare calculationBasis?: GupCalculationBasis | null;
  /**
   * Calculate Base Price Purchase.
   * @nullable
   */
  declare calculateBasePricePurchase?: NoYes | null;
  /**
   * Charge Code.
   * @nullable
   */
  declare chargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculate Method.
   * @nullable
   */
  declare calculateMethod?: GupPriceTermCalculateMethod | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculate Base Price Inventory.
   * @nullable
   */
  declare calculateBasePriceInventory?: NoYes | null;
  /**
   * Calculation Sequence.
   */
  declare calculationSequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculate Base Price Sales.
   * @nullable
   */
  declare calculateBasePriceSales?: NoYes | null;

  constructor(_entityApi: PriceTermTablesApi<T>) {
    super(_entityApi);
  }
}

export interface PriceTermTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  calculationBasis?: GupCalculationBasis | null;
  calculateBasePricePurchase?: NoYes | null;
  chargeCode?: DeserializedType<T, 'Edm.String'> | null;
  calculateMethod?: GupPriceTermCalculateMethod | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  calculateBasePriceInventory?: NoYes | null;
  calculationSequence: DeserializedType<T, 'Edm.Int32'>;
  calculateBasePriceSales?: NoYes | null;
}
