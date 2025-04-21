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
import type { MainAccountTotalAccountIntervalsApi } from './MainAccountTotalAccountIntervalsApi';
import { NoYes } from './NoYes';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { MainAccounts, MainAccountsType } from './MainAccounts';

/**
 * This class represents the entity "MainAccountTotalAccountIntervals" of service "d365_metadata".
 */
export class MainAccountTotalAccountIntervals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MainAccountTotalAccountIntervalsType<T>
{
  /**
   * Technical entity name for MainAccountTotalAccountIntervals.
   */
  static override _entityName = 'MainAccountTotalAccountIntervals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MainAccountTotalAccountIntervals entity.
   */
  static _keys = ['MainAccountId', 'ChartOfAccounts', 'FromValue', 'ToValue'];
  /**
   * Main Account Id.
   */
  declare mainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Chart Of Accounts.
   */
  declare chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  /**
   * From Value.
   */
  declare fromValue: DeserializedType<T, 'Edm.String'>;
  /**
   * To Value.
   */
  declare toValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Invert Total Sign.
   * @nullable
   */
  declare invertTotalSign?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  declare totalAccountLedgerChartOfAccountsEntityRole?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link MainAccounts} entity.
   */
  declare totalAccountMainAccountEntityRole?: MainAccounts<T> | null;

  constructor(_entityApi: MainAccountTotalAccountIntervalsApi<T>) {
    super(_entityApi);
  }
}

export interface MainAccountTotalAccountIntervalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  mainAccountId: DeserializedType<T, 'Edm.String'>;
  chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  fromValue: DeserializedType<T, 'Edm.String'>;
  toValue: DeserializedType<T, 'Edm.String'>;
  invertTotalSign?: NoYes | null;
  totalAccountLedgerChartOfAccountsEntityRole?: ChartOfAccountsType<T> | null;
  totalAccountMainAccountEntityRole?: MainAccountsType<T> | null;
}
