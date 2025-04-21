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
import type { HcmTitleBiEntitiesApi } from './HcmTitleBiEntitiesApi';

/**
 * This class represents the entity "HcmTitleBiEntities" of service "d365_metadata".
 */
export class HcmTitleBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements HcmTitleBiEntitiesType<T>
{
  /**
   * Technical entity name for HcmTitleBiEntities.
   */
  static override _entityName = 'HcmTitleBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HcmTitleBiEntities entity.
   */
  static _keys = ['TitleId'];
  /**
   * Title Id.
   */
  declare titleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: HcmTitleBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface HcmTitleBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  titleId: DeserializedType<T, 'Edm.String'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
