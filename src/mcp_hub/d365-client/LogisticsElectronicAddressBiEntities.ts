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
import type { LogisticsElectronicAddressBiEntitiesApi } from './LogisticsElectronicAddressBiEntitiesApi';
import { NoYes } from './NoYes';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';

/**
 * This class represents the entity "LogisticsElectronicAddressBiEntities" of service "d365_metadata".
 */
export class LogisticsElectronicAddressBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LogisticsElectronicAddressBiEntitiesType<T>
{
  /**
   * Technical entity name for LogisticsElectronicAddressBiEntities.
   */
  static override _entityName = 'LogisticsElectronicAddressBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LogisticsElectronicAddressBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retail Marketing Opt In.
   * @nullable
   */
  declare retailMarketingOptIn?: NoYes | null;
  /**
   * Private For Party.
   */
  declare privateForParty: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Electronic Address Roles.
   * @nullable
   */
  declare electronicAddressRoles?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Locator.
   * @nullable
   */
  declare locator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsElectronicAddressMethodType | null;
  /**
   * Channel Reference Id.
   * @nullable
   */
  declare channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Mobile Phone.
   * @nullable
   */
  declare isMobilePhone?: NoYes | null;
  /**
   * Is Instant Message.
   * @nullable
   */
  declare isInstantMessage?: NoYes | null;
  /**
   * Locator Extension.
   * @nullable
   */
  declare locatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Address Id.
   * @nullable
   */
  declare electronicAddressId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Code.
   * @nullable
   */
  declare countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   */
  declare location: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: LogisticsElectronicAddressBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LogisticsElectronicAddressBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  isPrivate?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: NoYes | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  retailMarketingOptIn?: NoYes | null;
  privateForParty: DeserializedType<T, 'Edm.Int64'>;
  electronicAddressRoles?: DeserializedType<T, 'Edm.String'> | null;
  locator?: DeserializedType<T, 'Edm.String'> | null;
  type?: LogisticsElectronicAddressMethodType | null;
  channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  isMobilePhone?: NoYes | null;
  isInstantMessage?: NoYes | null;
  locatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  electronicAddressId?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  location: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
