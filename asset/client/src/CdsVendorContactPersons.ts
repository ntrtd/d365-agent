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
import type { CdsVendorContactPersonsApi } from './CdsVendorContactPersonsApi';

/**
 * This class represents the entity "CDSVendorContactPersons" of service "d365_metadata".
 */
export class CdsVendorContactPersons<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsVendorContactPersonsType<T>
{
  /**
   * Technical entity name for CdsVendorContactPersons.
   */
  static override _entityName = 'CDSVendorContactPersons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsVendorContactPersons entity.
   */
  static _keys = [
    'dataAreaId',
    'ContactPersonPartyNumber',
    'VendorAccountNumber'
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
   * Vendor Account Number.
   */
  declare vendorAccountNumber: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CdsVendorContactPersonsApi<T>) {
    super(_entityApi);
  }
}

export interface CdsVendorContactPersonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
}
