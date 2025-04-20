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
import type { ExpensePurposesApi } from './ExpensePurposesApi';
import { TrvExpType } from './TrvExpType';

/**
 * This class represents the entity "ExpensePurposes" of service "d365_metadata".
 */
export class ExpensePurposes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpensePurposesType<T>
{
  /**
   * Technical entity name for ExpensePurposes.
   */
  static override _entityName = 'ExpensePurposes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpensePurposes entity.
   */
  static _keys = ['dataAreaId', 'BusinessPurpose', 'ExpenseType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Purpose.
   */
  declare businessPurpose: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Type.
   * @nullable
   */
  declare expenseType?: TrvExpType | null;

  constructor(_entityApi: ExpensePurposesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpensePurposesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  businessPurpose: DeserializedType<T, 'Edm.String'>;
  expenseType?: TrvExpType | null;
}
