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
import type { StructureStatusApi } from './StructureStatusApi';

/**
 * This class represents the entity "StructureStatus" of service "d365_metadata".
 */
export class StructureStatus<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StructureStatusType<T>
{
  /**
   * Technical entity name for StructureStatus.
   */
  static override _entityName = 'StructureStatus';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StructureStatus entity.
   */
  static _keys = ['dataAreaId', 'StrStatId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Str Stat Id.
   */
  declare strStatId: DeserializedType<T, 'Edm.String'>;
  /**
   * Short Name.
   * @nullable
   */
  declare shortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: StructureStatusApi<T>) {
    super(_entityApi);
  }
}

export interface StructureStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  strStatId: DeserializedType<T, 'Edm.String'>;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
