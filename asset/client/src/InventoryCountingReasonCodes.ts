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
import type { InventoryCountingReasonCodesApi } from './InventoryCountingReasonCodesApi';
import {
  InventoryCountingJournalLines,
  InventoryCountingJournalLinesType
} from './InventoryCountingJournalLines';

/**
 * This class represents the entity "InventoryCountingReasonCodes" of service "d365_metadata".
 */
export class InventoryCountingReasonCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryCountingReasonCodesType<T>
{
  /**
   * Technical entity name for InventoryCountingReasonCodes.
   */
  static override _entityName = 'InventoryCountingReasonCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryCountingReasonCodes entity.
   */
  static _keys = ['dataAreaId', 'ReasonCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code.
   */
  declare reasonCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InventoryCountingJournalLines} entity.
   */
  declare inventoryCountingJournalLine: InventoryCountingJournalLines<T>[];

  constructor(_entityApi: InventoryCountingReasonCodesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryCountingReasonCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  inventoryCountingJournalLine: InventoryCountingJournalLinesType<T>[];
}
