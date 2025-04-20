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
import type { TrvExpMobileProjectsApi } from './TrvExpMobileProjectsApi';
import { ProjStatus } from './ProjStatus';

/**
 * This class represents the entity "TrvExpMobileProjects" of service "d365_metadata".
 */
export class TrvExpMobileProjects<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrvExpMobileProjectsType<T>
{
  /**
   * Technical entity name for TrvExpMobileProjects.
   */
  static override _entityName = 'TrvExpMobileProjects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvExpMobileProjects entity.
   */
  static _keys = ['dataAreaId', 'ProjectID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: ProjStatus | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Name.
   * @nullable
   */
  declare projectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hierarchy Id.
   * @nullable
   */
  declare hierarchyId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TrvExpMobileProjectsApi<T>) {
    super(_entityApi);
  }
}

export interface TrvExpMobileProjectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  status?: ProjStatus | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  hierarchyId?: DeserializedType<T, 'Edm.String'> | null;
}
