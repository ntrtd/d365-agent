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
import type { InventoryProfileRelationsApi } from './InventoryProfileRelationsApi';

/**
 * This class represents the entity "InventoryProfileRelations" of service "d365_metadata".
 */
export class InventoryProfileRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryProfileRelationsType<T>
{
  /**
   * Technical entity name for InventoryProfileRelations.
   */
  static override _entityName = 'InventoryProfileRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryProfileRelations entity.
   */
  static _keys = [
    'dataAreaId',
    'InventoryProfileId',
    'CompatibleInventoryProfileId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Profile Id.
   */
  declare inventoryProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Compatible Inventory Profile Id.
   */
  declare compatibleInventoryProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Matching Priority.
   */
  declare matchingPriority: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: InventoryProfileRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryProfileRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryProfileId: DeserializedType<T, 'Edm.String'>;
  compatibleInventoryProfileId: DeserializedType<T, 'Edm.String'>;
  matchingPriority: DeserializedType<T, 'Edm.Decimal'>;
}
