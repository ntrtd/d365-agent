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
import type { ExpenseMerchantsApi } from './ExpenseMerchantsApi';
import { NoYes } from './NoYes';
import { TrvExpType } from './TrvExpType';

/**
 * This class represents the entity "ExpenseMerchants" of service "d365_metadata".
 */
export class ExpenseMerchants<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpenseMerchantsType<T>
{
  /**
   * Technical entity name for ExpenseMerchants.
   */
  static override _entityName = 'ExpenseMerchants';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseMerchants entity.
   */
  static _keys = ['dataAreaId', 'MerchantId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Merchant Id.
   */
  declare merchantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Preferred.
   * @nullable
   */
  declare preferred?: NoYes | null;
  /**
   * Expense Type.
   * @nullable
   */
  declare expenseType?: TrvExpType | null;

  constructor(_entityApi: ExpenseMerchantsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseMerchantsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  merchantId: DeserializedType<T, 'Edm.String'>;
  preferred?: NoYes | null;
  expenseType?: TrvExpType | null;
}
