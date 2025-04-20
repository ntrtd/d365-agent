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
import type { ImplementationWorkspaceProjectsApi } from './ImplementationWorkspaceProjectsApi';

/**
 * This class represents the entity "ImplementationWorkspaceProjects" of service "d365_metadata".
 */
export class ImplementationWorkspaceProjects<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ImplementationWorkspaceProjectsType<T>
{
  /**
   * Technical entity name for ImplementationWorkspaceProjects.
   */
  static override _entityName = 'ImplementationWorkspaceProjects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ImplementationWorkspaceProjects entity.
   */
  static _keys = ['dataAreaId', 'ImplementationProject'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Implementation Project.
   */
  declare implementationProject: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ImplementationWorkspaceProjectsApi<T>) {
    super(_entityApi);
  }
}

export interface ImplementationWorkspaceProjectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  implementationProject: DeserializedType<T, 'Edm.String'>;
}
