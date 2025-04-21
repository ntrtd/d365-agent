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
import type { TaxServiceTaxRegistrationNumberCustomersApi } from './TaxServiceTaxRegistrationNumberCustomersApi';

/**
 * This class represents the entity "TaxServiceTaxRegistrationNumberCustomers" of service "d365_metadata".
 */
export class TaxServiceTaxRegistrationNumberCustomers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxServiceTaxRegistrationNumberCustomersType<T>
{
  /**
   * Technical entity name for TaxServiceTaxRegistrationNumberCustomers.
   */
  static override _entityName = 'TaxServiceTaxRegistrationNumberCustomers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxServiceTaxRegistrationNumberCustomers entity.
   */
  static _keys = [
    'TaxRegstrationType',
    'ValidFrom',
    'ValidTo',
    'CustAccountNum',
    'LegalEntity',
    'CountryRegionId',
    'RegistrationNumber'
  ];
  /**
   * Tax Regstration Type.
   */
  declare taxRegstrationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cust Account Num.
   */
  declare custAccountNum: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Registration Number.
   */
  declare registrationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Section.
   * @nullable
   */
  declare section?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Account Name.
   * @nullable
   */
  declare custAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issuer.
   * @nullable
   */
  declare issuer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Date.
   */
  declare issueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxServiceTaxRegistrationNumberCustomersApi<T>) {
    super(_entityApi);
  }
}

export interface TaxServiceTaxRegistrationNumberCustomersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  taxRegstrationType: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  custAccountNum: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  registrationNumber: DeserializedType<T, 'Edm.String'>;
  section?: DeserializedType<T, 'Edm.String'> | null;
  custAccountName?: DeserializedType<T, 'Edm.String'> | null;
  issuer?: DeserializedType<T, 'Edm.String'> | null;
  issueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
