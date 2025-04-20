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
import type { WithholdingTaxRegistrationNumbersApi } from './WithholdingTaxRegistrationNumbersApi';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "WithholdingTaxRegistrationNumbers" of service "d365_metadata".
 */
export class WithholdingTaxRegistrationNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdingTaxRegistrationNumbersType<T>
{
  /**
   * Technical entity name for WithholdingTaxRegistrationNumbers.
   */
  static override _entityName = 'WithholdingTaxRegistrationNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdingTaxRegistrationNumbers entity.
   */
  static _keys = ['RegistrationNumber', 'RegistrationNumberType'];
  /**
   * Registration Number.
   */
  declare registrationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Registration Number Type.
   * @nullable
   */
  declare registrationNumberType?: TaxRegistrationTypeIn | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tds Assessingofficer.
   * @nullable
   */
  declare tdsAssessingofficer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shared.
   * @nullable
   */
  declare shared?: NoYes | null;
  /**
   * Tds Ward Number.
   * @nullable
   */
  declare tdsWardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tds Circle Number.
   * @nullable
   */
  declare tdsCircleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tcs Ward Number.
   * @nullable
   */
  declare tcsWardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tan Registration Number.
   * @nullable
   */
  declare tanRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tcs Circle Number.
   * @nullable
   */
  declare tcsCircleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tcs Assessingofficer.
   * @nullable
   */
  declare tcsAssessingofficer?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WithholdingTaxRegistrationNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdingTaxRegistrationNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  registrationNumber: DeserializedType<T, 'Edm.String'>;
  registrationNumberType?: TaxRegistrationTypeIn | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  tdsAssessingofficer?: DeserializedType<T, 'Edm.String'> | null;
  shared?: NoYes | null;
  tdsWardNumber?: DeserializedType<T, 'Edm.String'> | null;
  tdsCircleNumber?: DeserializedType<T, 'Edm.String'> | null;
  tcsWardNumber?: DeserializedType<T, 'Edm.String'> | null;
  tanRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  tcsCircleNumber?: DeserializedType<T, 'Edm.String'> | null;
  tcsAssessingofficer?: DeserializedType<T, 'Edm.String'> | null;
}
