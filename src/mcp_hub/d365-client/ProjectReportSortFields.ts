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
import type { ProjectReportSortFieldsApi } from './ProjectReportSortFieldsApi';
import { ProjSortValue } from './ProjSortValue';

/**
 * This class represents the entity "ProjectReportSortFields" of service "d365_metadata".
 */
export class ProjectReportSortFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectReportSortFieldsType<T>
{
  /**
   * Technical entity name for ProjectReportSortFields.
   */
  static override _entityName = 'ProjectReportSortFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectReportSortFields entity.
   */
  static _keys = ['dataAreaId', 'SortCode', 'SortingId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sort Code.
   * @nullable
   */
  declare sortCode?: ProjSortValue | null;
  /**
   * Sorting Id.
   */
  declare sortingId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectReportSortFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectReportSortFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sortCode?: ProjSortValue | null;
  sortingId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
