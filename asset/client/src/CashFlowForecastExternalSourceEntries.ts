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
import type { CashFlowForecastExternalSourceEntriesApi } from './CashFlowForecastExternalSourceEntriesApi';
import { Currencies, CurrenciesType } from './Currencies';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "CashFlowForecastExternalSourceEntries" of service "d365_metadata".
 */
export class CashFlowForecastExternalSourceEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CashFlowForecastExternalSourceEntriesType<T>
{
  /**
   * Technical entity name for CashFlowForecastExternalSourceEntries.
   */
  static override _entityName = 'CashFlowForecastExternalSourceEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashFlowForecastExternalSourceEntries entity.
   */
  static _keys = ['EntryId'];
  /**
   * Entry Id.
   */
  declare entryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Name.
   * @nullable
   */
  declare accountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Code.
   * @nullable
   */
  declare transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Source Legal Entity.
   * @nullable
   */
  declare externalSourceLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Number.
   * @nullable
   */
  declare accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Source Name.
   * @nullable
   */
  declare externalSourceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transaction Amount.
   */
  declare transactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currencyCodes?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: CashFlowForecastExternalSourceEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface CashFlowForecastExternalSourceEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entryId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  accountName?: DeserializedType<T, 'Edm.String'> | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  externalSourceLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  externalSourceName?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  currencyCodes?: CurrenciesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
