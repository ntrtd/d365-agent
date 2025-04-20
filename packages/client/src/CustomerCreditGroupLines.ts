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
import type { CustomerCreditGroupLinesApi } from './CustomerCreditGroupLinesApi';

/**
 * This class represents the entity "CustomerCreditGroupLines" of service "d365_metadata".
 */
export class CustomerCreditGroupLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerCreditGroupLinesType<T>
{
  /**
   * Technical entity name for CustomerCreditGroupLines.
   */
  static override _entityName = 'CustomerCreditGroupLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerCreditGroupLines entity.
   */
  static _keys = ['Company', 'CustAccount'];
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Account.
   */
  declare custAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Credit Limit Id.
   * @nullable
   */
  declare creditLimitId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomerCreditGroupLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerCreditGroupLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  company: DeserializedType<T, 'Edm.String'>;
  custAccount: DeserializedType<T, 'Edm.String'>;
  creditLimitId?: DeserializedType<T, 'Edm.String'> | null;
}
