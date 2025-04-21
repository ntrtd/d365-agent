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
import type { AccountTranslationsApi } from './AccountTranslationsApi';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { MainAccounts, MainAccountsType } from './MainAccounts';

/**
 * This class represents the entity "AccountTranslations" of service "d365_metadata".
 */
export class AccountTranslations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AccountTranslationsType<T>
{
  /**
   * Technical entity name for AccountTranslations.
   */
  static override _entityName = 'AccountTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccountTranslations entity.
   */
  static _keys = ['MainAccount', 'ChartOfAccounts', 'Language'];
  /**
   * Main Account.
   */
  declare mainAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Chart Of Accounts.
   */
  declare chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Original Text.
   * @nullable
   */
  declare originalText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Translated Text.
   * @nullable
   */
  declare translatedText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  declare ledgerChartOfAccountsEntityRole?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link MainAccounts} entity.
   */
  declare mainAccountEntityRole?: MainAccounts<T> | null;

  constructor(_entityApi: AccountTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface AccountTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  mainAccount: DeserializedType<T, 'Edm.String'>;
  chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  originalText?: DeserializedType<T, 'Edm.String'> | null;
  translatedText?: DeserializedType<T, 'Edm.String'> | null;
  ledgerChartOfAccountsEntityRole?: ChartOfAccountsType<T> | null;
  mainAccountEntityRole?: MainAccountsType<T> | null;
}
