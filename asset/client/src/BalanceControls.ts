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
import type { BalanceControlsApi } from './BalanceControlsApi';
import { MainAccounts, MainAccountsType } from './MainAccounts';

/**
 * This class represents the entity "BalanceControls" of service "d365_metadata".
 */
export class BalanceControls<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BalanceControlsType<T>
{
  /**
   * Technical entity name for BalanceControls.
   */
  static override _entityName = 'BalanceControls';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BalanceControls entity.
   */
  static _keys = ['dataAreaId', 'MainAccountId', 'ChartOfAccounts'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Id.
   */
  declare mainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Chart Of Accounts.
   */
  declare chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Name.
   * @nullable
   */
  declare mainAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link MainAccounts} entity.
   */
  declare ledgerBalanceControlMainAccountRole?: MainAccounts<T> | null;

  constructor(_entityApi: BalanceControlsApi<T>) {
    super(_entityApi);
  }
}

export interface BalanceControlsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  mainAccountId: DeserializedType<T, 'Edm.String'>;
  chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  mainAccountName?: DeserializedType<T, 'Edm.String'> | null;
  ledgerBalanceControlMainAccountRole?: MainAccountsType<T> | null;
}
