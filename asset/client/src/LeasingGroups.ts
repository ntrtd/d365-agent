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
import type { LeasingGroupsApi } from './LeasingGroupsApi';

/**
 * This class represents the entity "LeasingGroups" of service "d365_metadata".
 */
export class LeasingGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeasingGroupsType<T>
{
  /**
   * Technical entity name for LeasingGroups.
   */
  static override _entityName = 'LeasingGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeasingGroups entity.
   */
  static _keys = ['dataAreaId', 'LeaseGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Group.
   */
  declare leaseGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LeasingGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface LeasingGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseGroup: DeserializedType<T, 'Edm.String'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
