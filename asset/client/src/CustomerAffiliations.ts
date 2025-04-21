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
import type { CustomerAffiliationsApi } from './CustomerAffiliationsApi';

/**
 * This class represents the entity "CustomerAffiliations" of service "d365_metadata".
 */
export class CustomerAffiliations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerAffiliationsType<T>
{
  /**
   * Technical entity name for CustomerAffiliations.
   */
  static override _entityName = 'CustomerAffiliations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerAffiliations entity.
   */
  static _keys = ['dataAreaId', 'CustomerAccount', 'RetailAffiliationName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   */
  declare customerAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Affiliation Name.
   */
  declare retailAffiliationName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CustomerAffiliationsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerAffiliationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  retailAffiliationName: DeserializedType<T, 'Edm.String'>;
}
