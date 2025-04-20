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
import type { CdsCustomerContactPersonsApi } from './CdsCustomerContactPersonsApi';

/**
 * This class represents the entity "CDSCustomerContactPersons" of service "d365_metadata".
 */
export class CdsCustomerContactPersons<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsCustomerContactPersonsType<T>
{
  /**
   * Technical entity name for CdsCustomerContactPersons.
   */
  static override _entityName = 'CDSCustomerContactPersons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsCustomerContactPersons entity.
   */
  static _keys = [
    'dataAreaId',
    'ContactPersonPartyNumber',
    'CustomerAccountNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Person Party Number.
   */
  declare contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CdsCustomerContactPersonsApi<T>) {
    super(_entityApi);
  }
}

export interface CdsCustomerContactPersonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
}
