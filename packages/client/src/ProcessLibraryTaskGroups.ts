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
import type { ProcessLibraryTaskGroupsApi } from './ProcessLibraryTaskGroupsApi';
import { BusinessProcessType } from './BusinessProcessType';

/**
 * This class represents the entity "ProcessLibraryTaskGroups" of service "d365_metadata".
 */
export class ProcessLibraryTaskGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessLibraryTaskGroupsType<T>
{
  /**
   * Technical entity name for ProcessLibraryTaskGroups.
   */
  static override _entityName = 'ProcessLibraryTaskGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessLibraryTaskGroups entity.
   */
  static _keys = ['ProcessType', 'Name'];
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: BusinessProcessType | null;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProcessLibraryTaskGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessLibraryTaskGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  processType?: BusinessProcessType | null;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
