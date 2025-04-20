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
import type { InventoryLevelProfileRangesApi } from './InventoryLevelProfileRangesApi';

/**
 * This class represents the entity "InventoryLevelProfileRanges" of service "d365_metadata".
 */
export class InventoryLevelProfileRanges<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryLevelProfileRangesType<T>
{
  /**
   * Technical entity name for InventoryLevelProfileRanges.
   */
  static override _entityName = 'InventoryLevelProfileRanges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryLevelProfileRanges entity.
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
   * Upper Bound Inclusive.
   */
  declare upperBoundInclusive: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: InventoryLevelProfileRangesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryLevelProfileRangesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  profileId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  label?: DeserializedType<T, 'Edm.String'> | null;
  upperBoundInclusive: DeserializedType<T, 'Edm.Decimal'>;
}
