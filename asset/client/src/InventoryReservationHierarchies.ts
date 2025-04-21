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
import type { InventoryReservationHierarchiesApi } from './InventoryReservationHierarchiesApi';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "InventoryReservationHierarchies" of service "d365_metadata".
 */
export class InventoryReservationHierarchies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryReservationHierarchiesType<T>
{
  /**
   * Technical entity name for InventoryReservationHierarchies.
   */
  static override _entityName = 'InventoryReservationHierarchies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryReservationHierarchies entity.
   */
  static _keys = ['HierarchyName'];
  /**
   * Hierarchy Name.
   */
  declare hierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Hierarchy Description.
   * @nullable
   */
  declare hierarchyDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: InventoryReservationHierarchiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryReservationHierarchiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hierarchyName: DeserializedType<T, 'Edm.String'>;
  hierarchyDescription?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
