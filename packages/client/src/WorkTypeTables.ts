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
import type { WorkTypeTablesApi } from './WorkTypeTablesApi';

/**
 * This class represents the entity "WorkTypeTables" of service "d365_metadata".
 */
export class WorkTypeTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkTypeTablesType<T>
{
  /**
   * Technical entity name for WorkTypeTables.
   */
  static override _entityName = 'WorkTypeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkTypeTables entity.
   */
  static _keys = ['dataAreaId', 'TypeOfWorks'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Of Works.
   */
  declare typeOfWorks: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WorkTypeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkTypeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  typeOfWorks: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
