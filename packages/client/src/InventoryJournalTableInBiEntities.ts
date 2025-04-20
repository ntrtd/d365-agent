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
import type { InventoryJournalTableInBiEntitiesApi } from './InventoryJournalTableInBiEntitiesApi';
import { DisposalTypeIn } from './DisposalTypeIn';

/**
 * This class represents the entity "InventoryJournalTableINBiEntities" of service "d365_metadata".
 */
export class InventoryJournalTableInBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryJournalTableInBiEntitiesType<T>
{
  /**
   * Technical entity name for InventoryJournalTableInBiEntities.
   */
  static override _entityName = 'InventoryJournalTableINBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryJournalTableInBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Disposal Type.
   * @nullable
   */
  declare disposalType?: DisposalTypeIn | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventoryJournalTableInBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryJournalTableInBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  disposalType?: DisposalTypeIn | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
}
