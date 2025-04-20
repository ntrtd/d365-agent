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
import type { EInvoicePacAccountsApi } from './EInvoicePacAccountsApi';
import { EInvoiceCfdiEnvironmentMx } from './EInvoiceCfdiEnvironmentMx';
import { EInvoiceCfdiWebServiceMx } from './EInvoiceCfdiWebServiceMx';

/**
 * This class represents the entity "EInvoicePACAccounts" of service "d365_metadata".
 */
export class EInvoicePacAccounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EInvoicePacAccountsType<T>
{
  /**
   * Technical entity name for EInvoicePacAccounts.
   */
  static override _entityName = 'EInvoicePACAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EInvoicePacAccounts entity.
   */
  static _keys = ['dataAreaId', 'PACAccountId', 'Environment', 'WebService'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pac Account Id.
   */
  declare pacAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Environment.
   * @nullable
   */
  declare environment?: EInvoiceCfdiEnvironmentMx | null;
  /**
   * Web Service.
   * @nullable
   */
  declare webService?: EInvoiceCfdiWebServiceMx | null;
  /**
   * Web Service Method.
   * @nullable
   */
  declare webServiceMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfc Number.
   * @nullable
   */
  declare rfcNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pac Account Name.
   * @nullable
   */
  declare pacAccountName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EInvoicePacAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface EInvoicePacAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  pacAccountId: DeserializedType<T, 'Edm.String'>;
  environment?: EInvoiceCfdiEnvironmentMx | null;
  webService?: EInvoiceCfdiWebServiceMx | null;
  webServiceMethod?: DeserializedType<T, 'Edm.String'> | null;
  rfcNumber?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  pacAccountName?: DeserializedType<T, 'Edm.String'> | null;
}
