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
import type { LedgerTransSettlementAccountsApi } from './LedgerTransSettlementAccountsApi';
import { LedgerSettlementsAccountTypicalBalance } from './LedgerSettlementsAccountTypicalBalance';
import { NoYes } from './NoYes';
import { MainAccounts, MainAccountsType } from './MainAccounts';

/**
 * This class represents the entity "LedgerTransSettlementAccounts" of service "d365_metadata".
 */
export class LedgerTransSettlementAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerTransSettlementAccountsType<T>
{
  /**
   * Technical entity name for LedgerTransSettlementAccounts.
   */
  static override _entityName = 'LedgerTransSettlementAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerTransSettlementAccounts entity.
   */
  static _keys = ['MainAccountId', 'ChartOfAccounts'];
  /**
   * Main Account Id.
   */
  declare mainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Chart Of Accounts.
   */
  declare chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  /**
   * Typical Balance.
   * @nullable
   */
  declare typicalBalance?: LedgerSettlementsAccountTypicalBalance | null;
  /**
   * Keep Details.
   * @nullable
   */
  declare keepDetails?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link MainAccounts} entity.
   */
  declare ledgerTransSettlementAccountsMainAccountEntityRole?: MainAccounts<T> | null;

  constructor(_entityApi: LedgerTransSettlementAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerTransSettlementAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  mainAccountId: DeserializedType<T, 'Edm.String'>;
  chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  typicalBalance?: LedgerSettlementsAccountTypicalBalance | null;
  keepDetails?: NoYes | null;
  ledgerTransSettlementAccountsMainAccountEntityRole?: MainAccountsType<T> | null;
}
