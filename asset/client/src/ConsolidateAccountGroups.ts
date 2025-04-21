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
import type { ConsolidateAccountGroupsApi } from './ConsolidateAccountGroupsApi';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { MainAccounts, MainAccountsType } from './MainAccounts';

/**
 * This class represents the entity "ConsolidateAccountGroups" of service "d365_metadata".
 */
export class ConsolidateAccountGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConsolidateAccountGroupsType<T>
{
  /**
   * Technical entity name for ConsolidateAccountGroups.
   */
  static override _entityName = 'ConsolidateAccountGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConsolidateAccountGroups entity.
   */
  static _keys = [
    'ConsolidationAccountGroup',
    'ChartOfAccounts',
    'MainAccount'
  ];
  /**
   * Consolidation Account Group.
   */
  declare consolidationAccountGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Chart Of Accounts.
   */
  declare chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account.
   */
  declare mainAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Consolidation Account Group Name.
   * @nullable
   */
  declare consolidationAccountGroupName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consolidation Account.
   * @nullable
   */
  declare consolidationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sat Level.
   */
  declare satLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Main Account Name.
   * @nullable
   */
  declare mainAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consolidation Account Name.
   * @nullable
   */
  declare consolidationAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  declare ledgerChartOfAccountsEntityRole2?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link MainAccounts} entity.
   */
  declare consolidationMainAccountEntityRole2?: MainAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link MainAccounts} entity.
   */
  declare mainAccountEntityRole2?: MainAccounts<T> | null;

  constructor(_entityApi: ConsolidateAccountGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ConsolidateAccountGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  consolidationAccountGroup: DeserializedType<T, 'Edm.String'>;
  chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  mainAccount: DeserializedType<T, 'Edm.String'>;
  consolidationAccountGroupName?: DeserializedType<T, 'Edm.String'> | null;
  consolidationAccount?: DeserializedType<T, 'Edm.String'> | null;
  satLevel: DeserializedType<T, 'Edm.Int32'>;
  mainAccountName?: DeserializedType<T, 'Edm.String'> | null;
  consolidationAccountName?: DeserializedType<T, 'Edm.String'> | null;
  ledgerChartOfAccountsEntityRole2?: ChartOfAccountsType<T> | null;
  consolidationMainAccountEntityRole2?: MainAccountsType<T> | null;
  mainAccountEntityRole2?: MainAccountsType<T> | null;
}
