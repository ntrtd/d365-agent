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
import type { SellableReleasedProductsApi } from './SellableReleasedProductsApi';
import { EcoResProductType } from './EcoResProductType';
import { NoYes } from './NoYes';
import { EcoResFieldServiceProductType } from './EcoResFieldServiceProductType';

/**
 * This class represents the entity "SellableReleasedProducts" of service "d365_metadata".
 */
export class SellableReleasedProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SellableReleasedProductsType<T>
{
  /**
   * Technical entity name for SellableReleasedProducts.
   */
  static override _entityName = 'SellableReleasedProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SellableReleasedProducts entity.
   */
  static _keys = ['dataAreaId', 'ProductNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Inventory Unit Symbol.
   * @nullable
   */
  declare inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Unit Decimal Precision.
   */
  declare inventoryUnitDecimalPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Sales Stopped.
   * @nullable
   */
  declare isSalesStopped?: NoYes | null;
  /**
   * Sales Unit Decimal Precision.
   */
  declare salesUnitDecimalPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Field Service Product Type.
   * @nullable
   */
  declare fieldServiceProductType?: EcoResFieldServiceProductType | null;
  /**
   * Unit Cost.
   */
  declare unitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Stocked Product.
   * @nullable
   */
  declare isStockedProduct?: NoYes | null;

  constructor(_entityApi: SellableReleasedProductsApi<T>) {
    super(_entityApi);
  }
}

export interface SellableReleasedProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  productType?: EcoResProductType | null;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  inventoryUnitDecimalPrecision: DeserializedType<T, 'Edm.Int32'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  isSalesStopped?: NoYes | null;
  salesUnitDecimalPrecision: DeserializedType<T, 'Edm.Int32'>;
  fieldServiceProductType?: EcoResFieldServiceProductType | null;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  isStockedProduct?: NoYes | null;
}
