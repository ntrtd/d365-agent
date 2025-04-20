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
import type { BatchGroupsApi } from './BatchGroupsApi';

/**
 * This class represents the entity "BatchGroups" of service "d365_metadata".
 */
export class BatchGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BatchGroupsType<T>
{
  /**
   * Technical entity name for BatchGroups.
   */
  static override _entityName = 'BatchGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BatchGroups entity.
   */
  static _keys = ['GroupId', 'ServerId'];
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Server Id.
   */
  declare serverId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BatchGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface BatchGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupId: DeserializedType<T, 'Edm.String'>;
  serverId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
