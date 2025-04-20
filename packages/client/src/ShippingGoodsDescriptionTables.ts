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
import type { ShippingGoodsDescriptionTablesApi } from './ShippingGoodsDescriptionTablesApi';

/**
 * This class represents the entity "ShippingGoodsDescriptionTables" of service "d365_metadata".
 */
export class ShippingGoodsDescriptionTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingGoodsDescriptionTablesType<T>
{
  /**
   * Technical entity name for ShippingGoodsDescriptionTables.
   */
  static override _entityName = 'ShippingGoodsDescriptionTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingGoodsDescriptionTables entity.
   */
  static _keys = ['dataAreaId', 'GoodsDescription'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Goods Description.
   */
  declare goodsDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Detailed Goods Description.
   * @nullable
   */
  declare detailedGoodsDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShippingGoodsDescriptionTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingGoodsDescriptionTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  goodsDescription: DeserializedType<T, 'Edm.String'>;
  detailedGoodsDescription?: DeserializedType<T, 'Edm.String'> | null;
}
