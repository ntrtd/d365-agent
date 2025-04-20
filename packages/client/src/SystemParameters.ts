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
import type { SystemParametersApi } from './SystemParametersApi';
import { DimensionLedgerAccountDelimiter } from './DimensionLedgerAccountDelimiter';
import { ExchangeRates, ExchangeRatesType } from './ExchangeRates';
import { Currencies, CurrenciesType } from './Currencies';

/**
 * This class represents the entity "SystemParameters" of service "d365_metadata".
 */
export class SystemParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SystemParametersType<T>
{
  /**
   * Technical entity name for SystemParameters.
   */
  static override _entityName = 'SystemParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SystemParameters entity.
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Chart Of Accounts Delimiter.
   * @nullable
   */
  declare chartOfAccountsDelimiter?: DimensionLedgerAccountDelimiter | null;
  /**
   * Increment.
   */
  declare increment: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Thai Software Sequence Number.
   * @nullable
   */
  declare thaiSoftwareSequenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Language.
   * @nullable
   */
  declare systemLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Rows Of Ssrs Reports.
   */
  declare maximumRowsOfSsrsReports: DeserializedType<T, 'Edm.Int32'>;
  /**
   * System Exchange Rate Type Id.
   * @nullable
   */
  declare systemExchangeRateTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Currency Code.
   * @nullable
   */
  declare systemCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ExchangeRates} entity.
   */
  declare exchangeRate?: ExchangeRates<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;

  constructor(_entityApi: SystemParametersApi<T>) {
    super(_entityApi);
  }
}

export interface SystemParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int32'>;
  chartOfAccountsDelimiter?: DimensionLedgerAccountDelimiter | null;
  increment: DeserializedType<T, 'Edm.Int32'>;
  thaiSoftwareSequenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  systemLanguage?: DeserializedType<T, 'Edm.String'> | null;
  maximumRowsOfSsrsReports: DeserializedType<T, 'Edm.Int32'>;
  systemExchangeRateTypeId?: DeserializedType<T, 'Edm.String'> | null;
  systemCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate?: ExchangeRatesType<T> | null;
  currency?: CurrenciesType<T> | null;
}
