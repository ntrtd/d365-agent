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
import type { CountingReasonCodeGroupsApi } from './CountingReasonCodeGroupsApi';

/**
 * This class represents the entity "CountingReasonCodeGroups" of service "d365_metadata".
 */
export class CountingReasonCodeGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CountingReasonCodeGroupsType<T>
{
  /**
   * Technical entity name for CountingReasonCodeGroups.
   */
  static override _entityName = 'CountingReasonCodeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CountingReasonCodeGroups entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CountingReasonCodeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CountingReasonCodeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
