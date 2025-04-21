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
import type { CustomerCreditGroupsApi } from './CustomerCreditGroupsApi';

/**
 * This class represents the entity "CustomerCreditGroups" of service "d365_metadata".
 */
export class CustomerCreditGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerCreditGroupsType<T>
{
  /**
   * Technical entity name for CustomerCreditGroups.
   */
  static override _entityName = 'CustomerCreditGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerCreditGroups entity.
   */
  static _keys = ['CreditLimitId'];
  /**
   * Credit Limit Id.
   */
  declare creditLimitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiry Date.
   */
  declare expiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Credit Max.
   */
  declare creditMax: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CustomerCreditGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerCreditGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  creditLimitId: DeserializedType<T, 'Edm.String'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  expiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creditMax: DeserializedType<T, 'Edm.Decimal'>;
}
