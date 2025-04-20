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
import type { ConsolidateAccountsApi } from './ConsolidateAccountsApi';
import { DimensionLedgerAccountType } from './DimensionLedgerAccountType';

/**
 * This class represents the entity "ConsolidateAccounts" of service "d365_metadata".
 */
export class ConsolidateAccounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ConsolidateAccountsType<T>
{
  /**
   * Technical entity name for ConsolidateAccounts.
   */
  static override _entityName = 'ConsolidateAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConsolidateAccounts entity.
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
   * Main Account Category.
   * @nullable
   */
  declare mainAccountCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Name.
   * @nullable
   */
  declare mainAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Type.
   * @nullable
   */
  declare mainAccountType?: DimensionLedgerAccountType | null;
  /**
   * Consolidation Account Name.
   * @nullable
   */
  declare consolidationAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Center Name.
   * @nullable
   */
  declare costCenterName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ConsolidateAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface ConsolidateAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  consolidationAccountGroup: DeserializedType<T, 'Edm.String'>;
  chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  mainAccount: DeserializedType<T, 'Edm.String'>;
  consolidationAccountGroupName?: DeserializedType<T, 'Edm.String'> | null;
  consolidationAccount?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountCategory?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountName?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountType?: DimensionLedgerAccountType | null;
  consolidationAccountName?: DeserializedType<T, 'Edm.String'> | null;
  costCenterName?: DeserializedType<T, 'Edm.String'> | null;
}
