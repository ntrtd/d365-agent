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
import type { RetailConnDatabaseProfilesApi } from './RetailConnDatabaseProfilesApi';
import { RetailCdxDataStoreType } from './RetailCdxDataStoreType';
import { RetailConnProfileDatabaseVersionEnum } from './RetailConnProfileDatabaseVersionEnum';
import { PackageType } from './PackageType';

/**
 * This class represents the entity "RetailConnDatabaseProfiles" of service "d365_metadata".
 */
export class RetailConnDatabaseProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailConnDatabaseProfilesType<T>
{
  /**
   * Technical entity name for RetailConnDatabaseProfiles.
   */
  static override _entityName = 'RetailConnDatabaseProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailConnDatabaseProfiles entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Cdx Data Group Name.
   * @nullable
   */
  declare retailCdxDataGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Store Connect Relation Name.
   * @nullable
   */
  declare storeConnectRelationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Store System Sync Status.
   * @nullable
   */
  declare storeSystemSyncStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Cdx Scheduler Interval Name.
   * @nullable
   */
  declare retailCdxSchedulerIntervalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Password.
   * @nullable
   */
  declare password?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Name.
   * @nullable
   */
  declare userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Self Service Package Info Package Friendly Name.
   * @nullable
   */
  declare selfServicePackageInfoPackageFriendlyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Data Store Data.
   * @nullable
   */
  declare dataStoreData?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Store Type.
   * @nullable
   */
  declare dataStoreType?: RetailCdxDataStoreType | null;
  /**
   * Self Service Package Info Package Version.
   * @nullable
   */
  declare selfServicePackageInfoPackageVersion?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Version.
   * @nullable
   */
  declare version?: RetailConnProfileDatabaseVersionEnum | null;
  /**
   * Self Service Package Info Package Type.
   * @nullable
   */
  declare selfServicePackageInfoPackageType?: PackageType | null;
  /**
   * Server.
   * @nullable
   */
  declare server?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Version.
   * @nullable
   */
  declare currentVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Database.
   * @nullable
   */
  declare database?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailConnDatabaseProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailConnDatabaseProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  retailCdxDataGroupName?: DeserializedType<T, 'Edm.String'> | null;
  storeConnectRelationName?: DeserializedType<T, 'Edm.String'> | null;
  storeSystemSyncStatus?: DeserializedType<T, 'Edm.String'> | null;
  retailCdxSchedulerIntervalName?: DeserializedType<T, 'Edm.String'> | null;
  password?: DeserializedType<T, 'Edm.String'> | null;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  selfServicePackageInfoPackageFriendlyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dataStoreData?: DeserializedType<T, 'Edm.String'> | null;
  dataStoreType?: RetailCdxDataStoreType | null;
  selfServicePackageInfoPackageVersion?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  version?: RetailConnProfileDatabaseVersionEnum | null;
  selfServicePackageInfoPackageType?: PackageType | null;
  server?: DeserializedType<T, 'Edm.String'> | null;
  currentVersion?: DeserializedType<T, 'Edm.String'> | null;
  database?: DeserializedType<T, 'Edm.String'> | null;
}
