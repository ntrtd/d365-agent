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
import type { ClmIntegrationReleasedProductsApi } from './ClmIntegrationReleasedProductsApi';
import { ItemType } from './ItemType';
import { EcoResProductSubtype } from './EcoResProductSubtype';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';

/**
 * This class represents the entity "CLMIntegrationReleasedProducts" of service "d365_metadata".
 */
export class ClmIntegrationReleasedProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ClmIntegrationReleasedProductsType<T>
{
  /**
   * Technical entity name for ClmIntegrationReleasedProducts.
   */
  static override _entityName = 'CLMIntegrationReleasedProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ClmIntegrationReleasedProducts entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: ItemType | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Sub Type.
   * @nullable
   */
  declare productSubType?: EcoResProductSubtype | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare purchaseUnitOfMeasure?: UnitsOfMeasure<T> | null;

  constructor(_entityApi: ClmIntegrationReleasedProductsApi<T>) {
    super(_entityApi);
  }
}

export interface ClmIntegrationReleasedProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productType?: ItemType | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSubType?: EcoResProductSubtype | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseUnitOfMeasure?: UnitsOfMeasureType<T> | null;
}
