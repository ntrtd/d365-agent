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
import type { LedgerConsolidateHistRefBiEntitiesApi } from './LedgerConsolidateHistRefBiEntitiesApi';

/**
 * This class represents the entity "LedgerConsolidateHistRefBiEntities" of service "d365_metadata".
 */
export class LedgerConsolidateHistRefBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerConsolidateHistRefBiEntitiesType<T>
{
  /**
   * Technical entity name for LedgerConsolidateHistRefBiEntities.
   */
  static override _entityName = 'LedgerConsolidateHistRefBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerConsolidateHistRefBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Recid.
   */
  declare transRecid: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Table Id.
   */
  declare transTableId: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: LedgerConsolidateHistRefBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerConsolidateHistRefBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  transRecid: DeserializedType<T, 'Edm.Int64'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  transTableId: DeserializedType<T, 'Edm.Int32'>;
}
