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
import type { VoyageCommodityCodeTablesApi } from './VoyageCommodityCodeTablesApi';

/**
 * This class represents the entity "VoyageCommodityCodeTables" of service "d365_metadata".
 */
export class VoyageCommodityCodeTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VoyageCommodityCodeTablesType<T>
{
  /**
   * Technical entity name for VoyageCommodityCodeTables.
   */
  static override _entityName = 'VoyageCommodityCodeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VoyageCommodityCodeTables entity.
   */
  static _keys = ['dataAreaId', 'CommodityCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Commodity Code.
   */
  declare commodityCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Commodity Description.
   * @nullable
   */
  declare commodityDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VoyageCommodityCodeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface VoyageCommodityCodeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  commodityCode: DeserializedType<T, 'Edm.String'>;
  commodityDescription?: DeserializedType<T, 'Edm.String'> | null;
}
