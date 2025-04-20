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
import type { CreditManagementPaymentTermRanksApi } from './CreditManagementPaymentTermRanksApi';

/**
 * This class represents the entity "CreditManagementPaymentTermRanks" of service "d365_metadata".
 */
export class CreditManagementPaymentTermRanks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditManagementPaymentTermRanksType<T>
{
  /**
   * Technical entity name for CreditManagementPaymentTermRanks.
   */
  static override _entityName = 'CreditManagementPaymentTermRanks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditManagementPaymentTermRanks entity.
   */
  static _keys = ['dataAreaId', 'PaymentTerms'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Terms.
   */
  declare paymentTerms: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Terms Ranking.
   */
  declare paymentTermsRanking: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: CreditManagementPaymentTermRanksApi<T>) {
    super(_entityApi);
  }
}

export interface CreditManagementPaymentTermRanksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentTerms: DeserializedType<T, 'Edm.String'>;
  paymentTermsRanking: DeserializedType<T, 'Edm.Int32'>;
}
