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
import type { ConfigurationLedgersApi } from './ConfigurationLedgersApi';
import { NoYes } from './NoYes';
import { CostConfigurationLedgerStatus } from './CostConfigurationLedgerStatus';
import { Currencies, CurrenciesType } from './Currencies';

/**
 * This class represents the entity "ConfigurationLedgers" of service "d365_metadata".
 */
export class ConfigurationLedgers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConfigurationLedgersType<T>
{
  /**
   * Technical entity name for ConfigurationLedgers.
   */
  static override _entityName = 'ConfigurationLedgers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConfigurationLedgers entity.
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
   * Fiscal Calendar.
   * @nullable
   */
  declare fiscalCalendar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Convention.
   * @nullable
   */
  declare convention?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity.
   * @nullable
   */
  declare legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Needs Priming.
   * @nullable
   */
  declare needsPriming?: NoYes | null;
  /**
   * Exchange Rate Type.
   * @nullable
   */
  declare exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: CostConfigurationLedgerStatus | null;
  /**
   * Enabled Date.
   */
  declare enabledDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare costConfigurationLedger?: Currencies<T> | null;

  constructor(_entityApi: ConfigurationLedgersApi<T>) {
    super(_entityApi);
  }
}

export interface ConfigurationLedgersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCalendar?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  convention?: DeserializedType<T, 'Edm.String'> | null;
  legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  needsPriming?: NoYes | null;
  exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  status?: CostConfigurationLedgerStatus | null;
  enabledDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costConfigurationLedger?: CurrenciesType<T> | null;
}
