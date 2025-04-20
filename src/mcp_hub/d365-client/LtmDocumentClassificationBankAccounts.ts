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
import type { LtmDocumentClassificationBankAccountsApi } from './LtmDocumentClassificationBankAccountsApi';

/**
 * This class represents the entity "LTMDocumentClassificationBankAccounts" of service "d365_metadata".
 */
export class LtmDocumentClassificationBankAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmDocumentClassificationBankAccountsType<T>
{
  /**
   * Technical entity name for LtmDocumentClassificationBankAccounts.
   */
  static override _entityName = 'LTMDocumentClassificationBankAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmDocumentClassificationBankAccounts entity.
   */
  static _keys = ['dataAreaId', 'BankAccountID', 'DocumentClassificationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Account Id.
   */
  declare bankAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Id.
   */
  declare documentClassificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Name.
   * @nullable
   */
  declare bankName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmDocumentClassificationBankAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmDocumentClassificationBankAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bankAccountId: DeserializedType<T, 'Edm.String'>;
  documentClassificationId: DeserializedType<T, 'Edm.String'>;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
}
