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
import type { ItemGtDsApi } from './ItemGtDsApi';

/**
 * This class represents the entity "ItemGTDs" of service "d365_metadata".
 */
export class ItemGtDs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ItemGtDsType<T>
{
  /**
   * Technical entity name for ItemGtDs.
   */
  static override _entityName = 'ItemGTDs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemGtDs entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber', 'GTDNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Gtd Number.
   */
  declare gtdNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Origin Country Region Id.
   * @nullable
   */
  declare itemOriginCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ItemGtDsApi<T>) {
    super(_entityApi);
  }
}

export interface ItemGtDsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  gtdNumber: DeserializedType<T, 'Edm.String'>;
  itemOriginCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
}
