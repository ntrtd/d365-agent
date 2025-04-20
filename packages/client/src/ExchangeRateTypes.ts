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
import type { ExchangeRateTypesApi } from './ExchangeRateTypesApi';
import {
  ExchangeRateCurrencyPairs,
  ExchangeRateCurrencyPairsType
} from './ExchangeRateCurrencyPairs';
import { ExchangeRates, ExchangeRatesType } from './ExchangeRates';
import {
  MainAccountLegalEntities,
  MainAccountLegalEntitiesType
} from './MainAccountLegalEntities';
import { MainAccounts, MainAccountsType } from './MainAccounts';
import {
  ExchangeRatesNonIso,
  ExchangeRatesNonIsoType
} from './ExchangeRatesNonIso';
import {
  ExchangeRatesCdsEntity,
  ExchangeRatesCdsEntityType
} from './ExchangeRatesCdsEntity';

/**
 * This class represents the entity "ExchangeRateTypes" of service "d365_metadata".
 */
export class ExchangeRateTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExchangeRateTypesType<T>
{
  /**
   * Technical entity name for ExchangeRateTypes.
   */
  static override _entityName = 'ExchangeRateTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExchangeRateTypes entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ExchangeRateCurrencyPairs} entity.
   */
  declare exchangeRateCurrencyPairs: ExchangeRateCurrencyPairs<T>[];
  /**
   * One-to-many navigation property to the {@link ExchangeRates} entity.
   */
  declare exchangeRateTypes: ExchangeRates<T>[];
  /**
   * One-to-many navigation property to the {@link MainAccountLegalEntities} entity.
   */
  declare mainAccountLegalEntity: MainAccountLegalEntities<T>[];
  /**
   * One-to-many navigation property to the {@link MainAccounts} entity.
   */
  declare mainAccount: MainAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link ExchangeRatesNonIso} entity.
   */
  declare exchangeRateNonIsoExchangeRateTypes: ExchangeRatesNonIso<T>[];
  /**
   * One-to-many navigation property to the {@link ExchangeRatesCdsEntity} entity.
   */
  declare exchangeRateCdsEntityExchangeRateTypes: ExchangeRatesCdsEntity<T>[];

  constructor(_entityApi: ExchangeRateTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ExchangeRateTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateCurrencyPairs: ExchangeRateCurrencyPairsType<T>[];
  exchangeRateTypes: ExchangeRatesType<T>[];
  mainAccountLegalEntity: MainAccountLegalEntitiesType<T>[];
  mainAccount: MainAccountsType<T>[];
  exchangeRateNonIsoExchangeRateTypes: ExchangeRatesNonIsoType<T>[];
  exchangeRateCdsEntityExchangeRateTypes: ExchangeRatesCdsEntityType<T>[];
}
