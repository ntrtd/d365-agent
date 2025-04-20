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
import type { WorkerResourceImportsApi } from './WorkerResourceImportsApi';

/**
 * This class represents the entity "WorkerResourceImports" of service "d365_metadata".
 */
export class WorkerResourceImports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerResourceImportsType<T>
{
  /**
   * Technical entity name for WorkerResourceImports.
   */
  static override _entityName = 'WorkerResourceImports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerResourceImports entity.
   */
  static _keys = ['ProjCDSResourceId'];
  /**
   * Proj Cds Resource Id.
   */
  declare projCdsResourceId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WorkerResourceImportsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerResourceImportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  projCdsResourceId: DeserializedType<T, 'Edm.Guid'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
}
