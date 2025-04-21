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
import type { ChartOfAccountsApi } from './ChartOfAccountsApi';
import {
  AccountTranslations,
  AccountTranslationsType
} from './AccountTranslations';
import {
  ConsolidateAccountGroups,
  ConsolidateAccountGroupsType
} from './ConsolidateAccountGroups';
import {
  MainAccountTotalAccountIntervals,
  MainAccountTotalAccountIntervalsType
} from './MainAccountTotalAccountIntervals';

/**
 * This class represents the entity "ChartOfAccounts" of service "d365_metadata".
 */
export class ChartOfAccounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ChartOfAccountsType<T>
{
  /**
   * Technical entity name for ChartOfAccounts.
   */
  static override _entityName = 'ChartOfAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ChartOfAccounts entity.
   */
  static _keys = ['ChartOfAccounts'];
  /**
   * Chart Of Accounts.
   */
  declare chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Mask.
   * @nullable
   */
  declare mainAccountMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chart Of Accounts Rec Id.
   */
  declare chartOfAccountsRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AccountTranslations} entity.
   */
  declare ledgerChartOfAccountsEntityRole: AccountTranslations<T>[];
  /**
   * One-to-many navigation property to the {@link ConsolidateAccountGroups} entity.
   */
  declare ledgerChartOfAccountsEntityRole2: ConsolidateAccountGroups<T>[];
  /**
   * One-to-many navigation property to the {@link MainAccountTotalAccountIntervals} entity.
   */
  declare totalAccountLedgerChartOfAccountsEntityRole: MainAccountTotalAccountIntervals<T>[];

  constructor(_entityApi: ChartOfAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface ChartOfAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  mainAccountMask?: DeserializedType<T, 'Edm.String'> | null;
  chartOfAccountsRecId: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  ledgerChartOfAccountsEntityRole: AccountTranslationsType<T>[];
  ledgerChartOfAccountsEntityRole2: ConsolidateAccountGroupsType<T>[];
  totalAccountLedgerChartOfAccountsEntityRole: MainAccountTotalAccountIntervalsType<T>[];
}
