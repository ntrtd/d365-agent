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
import type { EssWorkerManagerRelationsApi } from './EssWorkerManagerRelationsApi';
import { EssWorkers, EssWorkersType } from './EssWorkers';

/**
 * This class represents the entity "EssWorkerManagerRelations" of service "d365_metadata".
 */
export class EssWorkerManagerRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EssWorkerManagerRelationsType<T>
{
  /**
   * Technical entity name for EssWorkerManagerRelations.
   */
  static override _entityName = 'EssWorkerManagerRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssWorkerManagerRelations entity.
   */
  static _keys = ['PersonnelNumber', 'ManagerPersonnelNumber'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Manager Personnel Number.
   */
  declare managerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link EssWorkers} entity.
   */
  declare manager?: EssWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link EssWorkers} entity.
   */
  declare worker?: EssWorkers<T> | null;

  constructor(_entityApi: EssWorkerManagerRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface EssWorkerManagerRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  managerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  manager?: EssWorkersType<T> | null;
  worker?: EssWorkersType<T> | null;
}
