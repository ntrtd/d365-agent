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
import type { InventoryLevelProfileProcessingRangesApi } from './InventoryLevelProfileProcessingRangesApi';

/**
 * This class represents the entity "InventoryLevelProfileProcessingRanges" of service "d365_metadata".
 */
export class InventoryLevelProfileProcessingRanges<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryLevelProfileProcessingRangesType<T>
{
  /**
   * Technical entity name for InventoryLevelProfileProcessingRanges.
   */
  static override _entityName = 'InventoryLevelProfileProcessingRanges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryLevelProfileProcessingRanges entity.
   */
  static _keys = ['dataAreaId', 'ProfileId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Label.
   * @nullable
   */
  declare label?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lower Bound Exclusive.
   */
  declare lowerBoundExclusive: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Upper Bound Inclusive.
   */
  declare upperBoundInclusive: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: InventoryLevelProfileProcessingRangesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryLevelProfileProcessingRangesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  profileId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  label?: DeserializedType<T, 'Edm.String'> | null;
  lowerBoundExclusive: DeserializedType<T, 'Edm.Decimal'>;
  upperBoundInclusive: DeserializedType<T, 'Edm.Decimal'>;
}
