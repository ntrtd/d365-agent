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
import type { ProjectExpensePolicyGroupEmployeesApi } from './ProjectExpensePolicyGroupEmployeesApi';

/**
 * This class represents the entity "ProjectExpensePolicyGroupEmployees" of service "d365_metadata".
 */
export class ProjectExpensePolicyGroupEmployees<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectExpensePolicyGroupEmployeesType<T>
{
  /**
   * Technical entity name for ProjectExpensePolicyGroupEmployees.
   */
  static override _entityName = 'ProjectExpensePolicyGroupEmployees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectExpensePolicyGroupEmployees entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   * @nullable
   */
  declare groupId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectExpensePolicyGroupEmployeesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectExpensePolicyGroupEmployeesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  groupId?: DeserializedType<T, 'Edm.String'> | null;
}
