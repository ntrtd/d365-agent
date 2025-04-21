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
import type { InventInventoryDataServiceNumberSequenceEntitiesApi } from './InventInventoryDataServiceNumberSequenceEntitiesApi';

/**
 * This class represents the entity "InventInventoryDataServiceNumberSequenceEntities" of service "d365_metadata".
 */
export class InventInventoryDataServiceNumberSequenceEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventInventoryDataServiceNumberSequenceEntitiesType<T>
{
  /**
   * Technical entity name for InventInventoryDataServiceNumberSequenceEntities.
   */
  static override _entityName =
    'InventInventoryDataServiceNumberSequenceEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventInventoryDataServiceNumberSequenceEntities entity.
   */
  static _keys = ['dataAreaId', 'IVDataAreaId', 'NumberSequence'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Iv Data Area Id.
   */
  declare ivDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Number Sequence.
   */
  declare numberSequence: DeserializedType<T, 'Edm.String'>;

  constructor(
    _entityApi: InventInventoryDataServiceNumberSequenceEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface InventInventoryDataServiceNumberSequenceEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ivDataAreaId: DeserializedType<T, 'Edm.String'>;
  numberSequence: DeserializedType<T, 'Edm.String'>;
}
