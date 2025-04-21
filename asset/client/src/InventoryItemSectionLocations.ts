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
import type { InventoryItemSectionLocationsApi } from './InventoryItemSectionLocationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InventoryItemSectionLocations" of service "d365_metadata".
 */
export class InventoryItemSectionLocations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryItemSectionLocationsType<T>
{
  /**
   * Technical entity name for InventoryItemSectionLocations.
   */
  static override _entityName = 'InventoryItemSectionLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryItemSectionLocations entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'StoreNumber',
    'SectionNumber',
    'ShelfNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
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
   * Shows Sales Statistics.
   * @nullable
   */
  declare showsSalesStatistics?: NoYes | null;

  constructor(_entityApi: InventoryItemSectionLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryItemSectionLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  sectionNumber: DeserializedType<T, 'Edm.String'>;
  shelfNumber: DeserializedType<T, 'Edm.String'>;
  showsSalesStatistics?: NoYes | null;
}
