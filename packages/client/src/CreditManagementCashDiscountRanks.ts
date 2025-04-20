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
import type { CreditManagementCashDiscountRanksApi } from './CreditManagementCashDiscountRanksApi';

/**
 * This class represents the entity "CreditManagementCashDiscountRanks" of service "d365_metadata".
 */
export class CreditManagementCashDiscountRanks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditManagementCashDiscountRanksType<T>
{
  /**
   * Technical entity name for CreditManagementCashDiscountRanks.
   */
  static override _entityName = 'CreditManagementCashDiscountRanks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditManagementCashDiscountRanks entity.
   */
  static _keys = ['dataAreaId', 'CashDiscCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Disc Code.
   */
  declare cashDiscCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Disc Ranking.
   */
  declare cashDiscRanking: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: CreditManagementCashDiscountRanksApi<T>) {
    super(_entityApi);
  }
}

export interface CreditManagementCashDiscountRanksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cashDiscCode: DeserializedType<T, 'Edm.String'>;
  cashDiscRanking: DeserializedType<T, 'Edm.Int32'>;
}
