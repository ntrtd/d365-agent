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
import type { SmaServiceObjectTableBiEntitiesApi } from './SmaServiceObjectTableBiEntitiesApi';

/**
 * This class represents the entity "SMAServiceObjectTableBiEntities" of service "d365_metadata".
 */
export class SmaServiceObjectTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SmaServiceObjectTableBiEntitiesType<T>
{
  /**
   * Technical entity name for SmaServiceObjectTableBiEntities.
   */
  static override _entityName = 'SMAServiceObjectTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SmaServiceObjectTableBiEntities entity.
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
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Object Id.
   * @nullable
   */
  declare serviceObjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Template Bom Id.
   * @nullable
   */
  declare templateBomId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Object Group.
   * @nullable
   */
  declare serviceObjectGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: SmaServiceObjectTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SmaServiceObjectTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  serviceObjectId?: DeserializedType<T, 'Edm.String'> | null;
  templateBomId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  serviceObjectGroup?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
