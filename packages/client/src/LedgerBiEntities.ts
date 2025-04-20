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
import type { LedgerBiEntitiesApi } from './LedgerBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LedgerBiEntities" of service "d365_metadata".
 */
export class LedgerBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LedgerBiEntitiesType<T>
{
  /**
   * Technical entity name for LedgerBiEntities.
   */
  static override _entityName = 'LedgerBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerBiEntities entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Reporting Currency.
   * @nullable
   */
  declare reportingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Calendar.
   */
  declare fiscalCalendar: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Currency.
   * @nullable
   */
  declare accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Exchange Rate Type.
   */
  declare budgetExchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Budget Control Enabled.
   * @nullable
   */
  declare isBudgetControlEnabled?: NoYes | null;
  /**
   * Chart Of Accounts.
   */
  declare chartOfAccounts: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Exchange Rate Type.
   */
  declare defaultExchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reporting Currency Exchange Rate Type.
   */
  declare reportingCurrencyExchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Primary For Legal Entity.
   */
  declare primaryForLegalEntity: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: LedgerBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  reportingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCalendar: DeserializedType<T, 'Edm.Int64'>;
  accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  budgetExchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  isBudgetControlEnabled?: NoYes | null;
  chartOfAccounts: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  defaultExchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  reportingCurrencyExchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  primaryForLegalEntity: DeserializedType<T, 'Edm.Int64'>;
}
