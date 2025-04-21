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
import type { InventoryOwnersApi } from './InventoryOwnersApi';
import {
  InventoryCountingJournalLines,
  InventoryCountingJournalLinesType
} from './InventoryCountingJournalLines';
import {
  InventoryTagCountingJournalLines,
  InventoryTagCountingJournalLinesType
} from './InventoryTagCountingJournalLines';

/**
 * This class represents the entity "InventoryOwners" of service "d365_metadata".
 */
export class InventoryOwners<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InventoryOwnersType<T>
{
  /**
   * Technical entity name for InventoryOwners.
   */
  static override _entityName = 'InventoryOwners';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryOwners entity.
   */
  static _keys = ['dataAreaId', 'InventoryOwnerId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Owner Id.
   */
  declare inventoryOwnerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Owner Name.
   * @nullable
   */
  declare inventoryOwnerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InventoryCountingJournalLines} entity.
   */
  declare inventoryCountingJournalLines: InventoryCountingJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryTagCountingJournalLines} entity.
   */
  declare inventoryTagCountingJournalLines: InventoryTagCountingJournalLines<T>[];

  constructor(_entityApi: InventoryOwnersApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryOwnersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryOwnerId: DeserializedType<T, 'Edm.String'>;
  inventoryOwnerName?: DeserializedType<T, 'Edm.String'> | null;
  inventoryCountingJournalLines: InventoryCountingJournalLinesType<T>[];
  inventoryTagCountingJournalLines: InventoryTagCountingJournalLinesType<T>[];
}
