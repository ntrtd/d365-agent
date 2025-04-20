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
import type { CollectionAgencyGracePeriodSetupApi } from './CollectionAgencyGracePeriodSetupApi';
import { TableGroupAll } from './TableGroupAll';

/**
 * This class represents the entity "CollectionAgencyGracePeriodSetup" of service "d365_metadata".
 */
export class CollectionAgencyGracePeriodSetup<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CollectionAgencyGracePeriodSetupType<T>
{
  /**
   * Technical entity name for CollectionAgencyGracePeriodSetup.
   */
  static override _entityName = 'CollectionAgencyGracePeriodSetup';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CollectionAgencyGracePeriodSetup entity.
   */
  static _keys = [
    'AccountOrGroupNumber',
    'AccountCode',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Account Or Group Number.
   */
  declare accountOrGroupNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Grace Period In Days After Transaction Date.
   */
  declare gracePeriodInDaysAfterTransactionDate: DeserializedType<
    T,
    'Edm.Int32'
  >;

  constructor(_entityApi: CollectionAgencyGracePeriodSetupApi<T>) {
    super(_entityApi);
  }
}

export interface CollectionAgencyGracePeriodSetupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountOrGroupNumber: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  gracePeriodInDaysAfterTransactionDate: DeserializedType<T, 'Edm.Int32'>;
}
