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
import type { BillingCodeCustomFieldsApi } from './BillingCodeCustomFieldsApi';

/**
 * This class represents the entity "BillingCodeCustomFields" of service "d365_metadata".
 */
export class BillingCodeCustomFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BillingCodeCustomFieldsType<T>
{
  /**
   * Technical entity name for BillingCodeCustomFields.
   */
  static override _entityName = 'BillingCodeCustomFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BillingCodeCustomFields entity.
   */
  static _keys = [
    'dataAreaId',
    'CustomField',
    'ValidTo',
    'ValidFrom',
    'BillingCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Custom Field.
   */
  declare customField: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Billing Code.
   */
  declare billingCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   */
  declare isActive: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Required.
   */
  declare isRequired: DeserializedType<T, 'Edm.Boolean'>;

  constructor(_entityApi: BillingCodeCustomFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface BillingCodeCustomFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customField: DeserializedType<T, 'Edm.String'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingCode: DeserializedType<T, 'Edm.String'>;
  isActive: DeserializedType<T, 'Edm.Boolean'>;
  isRequired: DeserializedType<T, 'Edm.Boolean'>;
}
