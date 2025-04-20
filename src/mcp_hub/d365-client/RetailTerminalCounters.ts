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
import type { RetailTerminalCountersApi } from './RetailTerminalCountersApi';
import { RetailCounterType } from './RetailCounterType';

/**
 * This class represents the entity "RetailTerminalCounters" of service "d365_metadata".
 */
export class RetailTerminalCounters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTerminalCountersType<T>
{
  /**
   * Technical entity name for RetailTerminalCounters.
   */
  static override _entityName = 'RetailTerminalCounters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTerminalCounters entity.
   */
  static _keys = ['dataAreaId', 'Store', 'Terminal', 'CounterType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Type.
   * @nullable
   */
  declare counterType?: RetailCounterType | null;
  /**
   * Counter Value.
   */
  declare counterValue: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailTerminalCountersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTerminalCountersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  counterType?: RetailCounterType | null;
  counterValue: DeserializedType<T, 'Edm.Decimal'>;
}
