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
import type { SequenceGroupsApi } from './SequenceGroupsApi';

/**
 * This class represents the entity "SequenceGroups" of service "d365_metadata".
 */
export class SequenceGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SequenceGroupsType<T>
{
  /**
   * Technical entity name for SequenceGroups.
   */
  static override _entityName = 'SequenceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SequenceGroups entity.
   */
  static _keys = ['NumberSequenceGroup'];
  /**
   * Number Sequence Group.
   */
  declare numberSequenceGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SequenceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface SequenceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  numberSequenceGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
