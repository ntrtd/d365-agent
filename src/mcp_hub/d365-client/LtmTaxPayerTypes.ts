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
import type { LtmTaxPayerTypesApi } from './LtmTaxPayerTypesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LTMTaxPayerTypes" of service "d365_metadata".
 */
export class LtmTaxPayerTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmTaxPayerTypesType<T>
{
  /**
   * Technical entity name for LtmTaxPayerTypes.
   */
  static override _entityName = 'LTMTaxPayerTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmTaxPayerTypes entity.
   */
  static _keys = ['dataAreaId', 'TaxPayerTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Payer Type Id.
   */
  declare taxPayerTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mandatory Jurisdiction.
   * @nullable
   */
  declare mandatoryJurisdiction?: NoYes | null;
  /**
   * Tax Payer Type Description.
   * @nullable
   */
  declare taxPayerTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internal Tax Payer.
   * @nullable
   */
  declare internalTaxPayer?: NoYes | null;
  /**
   * Mandatory State Doc Num.
   * @nullable
   */
  declare mandatoryStateDocNum?: NoYes | null;
  /**
   * Mandatory Country Doc Num.
   * @nullable
   */
  declare mandatoryCountryDocNum?: NoYes | null;
  /**
   * Validate Vendor Cai.
   * @nullable
   */
  declare validateVendorCai?: NoYes | null;
  /**
   * Foreign Tax Payer.
   * @nullable
   */
  declare foreignTaxPayer?: NoYes | null;
  /**
   * Mandatory Rad Country.
   * @nullable
   */
  declare mandatoryRadCountry?: NoYes | null;

  constructor(_entityApi: LtmTaxPayerTypesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmTaxPayerTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxPayerTypeId: DeserializedType<T, 'Edm.String'>;
  mandatoryJurisdiction?: NoYes | null;
  taxPayerTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  internalTaxPayer?: NoYes | null;
  mandatoryStateDocNum?: NoYes | null;
  mandatoryCountryDocNum?: NoYes | null;
  validateVendorCai?: NoYes | null;
  foreignTaxPayer?: NoYes | null;
  mandatoryRadCountry?: NoYes | null;
}
