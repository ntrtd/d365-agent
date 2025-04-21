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
import type { TaxServiceTaxRegistrationNumberVendorsApi } from './TaxServiceTaxRegistrationNumberVendorsApi';

/**
 * This class represents the entity "TaxServiceTaxRegistrationNumberVendors" of service "d365_metadata".
 */
export class TaxServiceTaxRegistrationNumberVendors<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxServiceTaxRegistrationNumberVendorsType<T>
{
  /**
   * Technical entity name for TaxServiceTaxRegistrationNumberVendors.
   */
  static override _entityName = 'TaxServiceTaxRegistrationNumberVendors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxServiceTaxRegistrationNumberVendors entity.
   */
  static _keys = [
    'TaxRegstrationType',
    'CountryRegionId',
    'ValidFrom',
    'ValidTo',
    'VendAccount',
    'LegalEntity',
    'RegistrationNumber'
  ];
  /**
   * Tax Regstration Type.
   */
  declare taxRegstrationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Account.
   */
  declare vendAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Registration Number.
   */
  declare registrationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issuer.
   * @nullable
   */
  declare issuer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Name.
   * @nullable
   */
  declare vendName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Date.
   */
  declare issueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Section.
   * @nullable
   */
  declare section?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxServiceTaxRegistrationNumberVendorsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxServiceTaxRegistrationNumberVendorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  taxRegstrationType: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendAccount: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  registrationNumber: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  issuer?: DeserializedType<T, 'Edm.String'> | null;
  vendName?: DeserializedType<T, 'Edm.String'> | null;
  issueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  section?: DeserializedType<T, 'Edm.String'> | null;
}
