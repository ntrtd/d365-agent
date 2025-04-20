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
import type { ProjectAllocationKeysApi } from './ProjectAllocationKeysApi';

/**
 * This class represents the entity "ProjectAllocationKeys" of service "d365_metadata".
 */
export class ProjectAllocationKeys<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectAllocationKeysType<T>
{
  /**
   * Technical entity name for ProjectAllocationKeys.
   */
  static override _entityName = 'ProjectAllocationKeys';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectAllocationKeys entity.
   */
  static _keys = ['dataAreaId', 'AllocationKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Allocation Key.
   */
  declare allocationKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectAllocationKeysApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectAllocationKeysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  allocationKey: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
