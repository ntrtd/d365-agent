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
import type { DisposableIncomeEarningsApi } from './DisposableIncomeEarningsApi';
import { DisposableIncomes, DisposableIncomesType } from './DisposableIncomes';

/**
 * This class represents the entity "DisposableIncomeEarnings" of service "d365_metadata".
 */
export class DisposableIncomeEarnings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DisposableIncomeEarningsType<T>
{
  /**
   * Technical entity name for DisposableIncomeEarnings.
   */
  static override _entityName = 'DisposableIncomeEarnings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DisposableIncomeEarnings entity.
   */
  static _keys = ['EarningCodeId', 'Name'];
  /**
   * Earning Code Id.
   */
  declare earningCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link DisposableIncomes} entity.
   */
  declare disposableIncome?: DisposableIncomes<T> | null;

  constructor(_entityApi: DisposableIncomeEarningsApi<T>) {
    super(_entityApi);
  }
}

export interface DisposableIncomeEarningsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  earningCodeId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  disposableIncome?: DisposableIncomesType<T> | null;
}
