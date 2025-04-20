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
import type { StoreShelvesApi } from './StoreShelvesApi';
import { RetailStores, RetailStoresType } from './RetailStores';

/**
 * This class represents the entity "StoreShelves" of service "d365_metadata".
 */
export class StoreShelves<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StoreShelvesType<T>
{
  /**
   * Technical entity name for StoreShelves.
   */
  static override _entityName = 'StoreShelves';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StoreShelves entity.
   */
  static _keys = ['dataAreaId', 'StoreNumber', 'SectionNumber', 'ShelfNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Section Number.
   */
  declare sectionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Shelf Number.
   */
  declare shelfNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Section Percent.
   */
  declare sectionPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link RetailStores} entity.
   */
  declare retailStore?: RetailStores<T> | null;

  constructor(_entityApi: StoreShelvesApi<T>) {
    super(_entityApi);
  }
}

export interface StoreShelvesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  sectionNumber: DeserializedType<T, 'Edm.String'>;
  shelfNumber: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sectionPercent: DeserializedType<T, 'Edm.Decimal'>;
  retailStore?: RetailStoresType<T> | null;
}
