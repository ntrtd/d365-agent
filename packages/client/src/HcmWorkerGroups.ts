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
import type { HcmWorkerGroupsApi } from './HcmWorkerGroupsApi';

/**
 * This class represents the entity "HcmWorkerGroups" of service "d365_metadata".
 */
export class HcmWorkerGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements HcmWorkerGroupsType<T>
{
  /**
   * Technical entity name for HcmWorkerGroups.
   */
  static override _entityName = 'HcmWorkerGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HcmWorkerGroups entity.
   */
  static _keys = ['dataAreaId', 'EmployeeGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employee Group Id.
   */
  declare employeeGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HcmWorkerGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface HcmWorkerGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  employeeGroupId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
