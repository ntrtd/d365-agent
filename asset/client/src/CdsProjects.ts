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
import type { CdsProjectsApi } from './CdsProjectsApi';
import { ProjType } from './ProjType';

/**
 * This class represents the entity "CDSProjects" of service "d365_metadata".
 */
export class CdsProjects<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CdsProjectsType<T>
{
  /**
   * Technical entity name for CdsProjects.
   */
  static override _entityName = 'CDSProjects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsProjects entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Name.
   * @nullable
   */
  declare projectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Group.
   * @nullable
   */
  declare projectGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Type.
   * @nullable
   */
  declare projectType?: ProjType | null;
  /**
   * Source Data Id.
   * @nullable
   */
  declare sourceDataId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Projected Start Date.
   */
  declare projectedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Projected End Date.
   */
  declare projectedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Parent Id.
   * @nullable
   */
  declare parentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Contract Id.
   * @nullable
   */
  declare projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Manager Personnel Number.
   * @nullable
   */
  declare projectManagerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: CdsProjectsApi<T>) {
    super(_entityApi);
  }
}

export interface CdsProjectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  projectGroup?: DeserializedType<T, 'Edm.String'> | null;
  projectType?: ProjType | null;
  sourceDataId?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  projectedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  parentId?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  projectManagerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
}
