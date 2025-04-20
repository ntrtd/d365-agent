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
import type { ProjectExpensePolicyGroupsApi } from './ProjectExpensePolicyGroupsApi';

/**
 * This class represents the entity "ProjectExpensePolicyGroups" of service "d365_metadata".
 */
export class ProjectExpensePolicyGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectExpensePolicyGroupsType<T>
{
  /**
   * Technical entity name for ProjectExpensePolicyGroups.
   */
  static override _entityName = 'ProjectExpensePolicyGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectExpensePolicyGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectExpensePolicyGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectExpensePolicyGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
