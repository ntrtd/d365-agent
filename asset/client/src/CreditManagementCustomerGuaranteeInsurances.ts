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
import type { CreditManagementCustomerGuaranteeInsurancesApi } from './CreditManagementCustomerGuaranteeInsurancesApi';
import { NoYes } from './NoYes';
import { CredManGuaranteeInsurance } from './CredManGuaranteeInsurance';

/**
 * This class represents the entity "CreditManagementCustomerGuaranteeInsurances" of service "d365_metadata".
 */
export class CreditManagementCustomerGuaranteeInsurances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditManagementCustomerGuaranteeInsurancesType<T>
{
  /**
   * Technical entity name for CreditManagementCustomerGuaranteeInsurances.
   */
  static override _entityName = 'CreditManagementCustomerGuaranteeInsurances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditManagementCustomerGuaranteeInsurances entity.
   */
  static _keys = ['dataAreaId', 'CustAccount', 'GuaranteeNumber', 'ValidTo'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Account.
   */
  declare custAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Guarantee Number.
   */
  declare guaranteeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Guarantee Insurance Type.
   * @nullable
   */
  declare guaranteeInsuranceType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Increase Credit Limit Percent.
   */
  declare increaseCreditLimitPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Include In Exposure.
   * @nullable
   */
  declare includeInExposure?: NoYes | null;
  /**
   * Insurance Coverage Type.
   * @nullable
   */
  declare insuranceCoverageType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guarantor Insurer.
   * @nullable
   */
  declare guarantorInsurer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guarantee Insurance.
   * @nullable
   */
  declare guaranteeInsurance?: CredManGuaranteeInsurance | null;

  constructor(_entityApi: CreditManagementCustomerGuaranteeInsurancesApi<T>) {
    super(_entityApi);
  }
}

export interface CreditManagementCustomerGuaranteeInsurancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  custAccount: DeserializedType<T, 'Edm.String'>;
  guaranteeNumber: DeserializedType<T, 'Edm.String'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  guaranteeInsuranceType?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  increaseCreditLimitPercent: DeserializedType<T, 'Edm.Decimal'>;
  includeInExposure?: NoYes | null;
  insuranceCoverageType?: DeserializedType<T, 'Edm.String'> | null;
  guarantorInsurer?: DeserializedType<T, 'Edm.String'> | null;
  guaranteeInsurance?: CredManGuaranteeInsurance | null;
}
