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
import type { DemandPlanningPickingListJournalEntriesApi } from './DemandPlanningPickingListJournalEntriesApi';
import { ItemType } from './ItemType';
import { ProdJournalType } from './ProdJournalType';

/**
 * This class represents the entity "DemandPlanningPickingListJournalEntries" of service "d365_metadata".
 */
export class DemandPlanningPickingListJournalEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DemandPlanningPickingListJournalEntriesType<T>
{
  /**
   * Technical entity name for DemandPlanningPickingListJournalEntries.
   */
  static override _entityName = 'DemandPlanningPickingListJournalEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DemandPlanningPickingListJournalEntries entity.
   */
  static _keys = ['JournalNumber', 'JournalLineNumber', 'JournalDataAreaId'];
  /**
   * Journal Number.
   */
  declare journalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Line Number.
   */
  declare journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Data Area Id.
   */
  declare journalDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: ItemType | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted Date Time.
   */
  declare postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: ProdJournalType | null;
  /**
   * Inventory Unit Symbol.
   * @nullable
   */
  declare inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Id.
   * @nullable
   */
  declare productId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Account Party Id.
   * @nullable
   */
  declare fromAccountPartyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Variant Id.
   * @nullable
   */
  declare productVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Quantity.
   */
  declare inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: DemandPlanningPickingListJournalEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface DemandPlanningPickingListJournalEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  journalNumber: DeserializedType<T, 'Edm.String'>;
  journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  journalDataAreaId: DeserializedType<T, 'Edm.String'>;
  productType?: ItemType | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  journalType?: ProdJournalType | null;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productId?: DeserializedType<T, 'Edm.String'> | null;
  fromAccountPartyId?: DeserializedType<T, 'Edm.String'> | null;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  productVariantId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
