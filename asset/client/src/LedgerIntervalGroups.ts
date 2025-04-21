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
import type { LedgerIntervalGroupsApi } from './LedgerIntervalGroupsApi';

/**
 * This class represents the entity "LedgerIntervalGroups" of service "d365_metadata".
 */
export class LedgerIntervalGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerIntervalGroupsType<T>
{
  /**
   * Technical entity name for LedgerIntervalGroups.
   */
  static override _entityName = 'LedgerIntervalGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerIntervalGroups entity.
   */
  static _keys = ['dataAreaId', 'IntervalGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Interval Group.
   */
  declare intervalGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LedgerIntervalGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerIntervalGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  intervalGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
