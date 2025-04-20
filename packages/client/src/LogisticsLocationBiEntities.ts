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
import type { LogisticsLocationBiEntitiesApi } from './LogisticsLocationBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LogisticsLocationBiEntities" of service "d365_metadata".
 */
export class LogisticsLocationBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LogisticsLocationBiEntitiesType<T>
{
  /**
   * Technical entity name for LogisticsLocationBiEntities.
   */
  static override _entityName = 'LogisticsLocationBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LogisticsLocationBiEntities entity.
   */
  static _keys = ['LocationId'];
  /**
   * Location Id.
   */
  declare locationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Duns Number Rec Id.
   */
  declare dunsNumberRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Postal Address.
   * @nullable
   */
  declare isPostalAddress?: NoYes | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Parent Location.
   */
  declare parentLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: LogisticsLocationBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LogisticsLocationBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  locationId: DeserializedType<T, 'Edm.String'>;
  dunsNumberRecId: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  isPostalAddress?: NoYes | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  parentLocation: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
