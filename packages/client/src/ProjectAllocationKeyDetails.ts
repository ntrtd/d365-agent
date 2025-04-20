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
import type { ProjectAllocationKeyDetailsApi } from './ProjectAllocationKeyDetailsApi';

/**
 * This class represents the entity "ProjectAllocationKeyDetails" of service "d365_metadata".
 */
export class ProjectAllocationKeyDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectAllocationKeyDetailsType<T>
{
  /**
   * Technical entity name for ProjectAllocationKeyDetails.
   */
  static override _entityName = 'ProjectAllocationKeyDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectAllocationKeyDetails entity.
   */
  static _keys = ['dataAreaId', 'AllocationKey', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Allocation Key.
   */
  declare allocationKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Personnel Number.
   * @nullable
   */
  declare resourcePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allocation Percentage.
   */
  declare allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Property.
   * @nullable
   */
  declare lineProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectAllocationKeyDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectAllocationKeyDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  allocationKey: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  resourcePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  lineProperty?: DeserializedType<T, 'Edm.String'> | null;
  category?: DeserializedType<T, 'Edm.String'> | null;
}
