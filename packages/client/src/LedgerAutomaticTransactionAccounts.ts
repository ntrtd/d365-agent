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
import type { LedgerAutomaticTransactionAccountsApi } from './LedgerAutomaticTransactionAccountsApi';
import { LedgerPostingType } from './LedgerPostingType';

/**
 * This class represents the entity "LedgerAutomaticTransactionAccounts" of service "d365_metadata".
 */
export class LedgerAutomaticTransactionAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerAutomaticTransactionAccountsType<T>
{
  /**
   * Technical entity name for LedgerAutomaticTransactionAccounts.
   */
  static override _entityName = 'LedgerAutomaticTransactionAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerAutomaticTransactionAccounts entity.
   */
  static _keys = ['dataAreaId', 'PostingType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: LedgerPostingType | null;
  /**
   * Main Account Id Display Value.
   * @nullable
   */
  declare mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LedgerAutomaticTransactionAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerAutomaticTransactionAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingType?: LedgerPostingType | null;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
}
