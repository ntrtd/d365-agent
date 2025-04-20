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
import type { ExciseTaxRegistrationNumbersApi } from './ExciseTaxRegistrationNumbersApi';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
import { ExciseReferenceIn } from './ExciseReferenceIn';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ExciseTaxRegistrationNumbers" of service "d365_metadata".
 */
export class ExciseTaxRegistrationNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExciseTaxRegistrationNumbersType<T>
{
  /**
   * Technical entity name for ExciseTaxRegistrationNumbers.
   */
  static override _entityName = 'ExciseTaxRegistrationNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExciseTaxRegistrationNumbers entity.
   */
  static _keys = ['RegistrationNumberType', 'RegistrationNumber', 'Reference'];
  /**
   * Registration Number Type.
   * @nullable
   */
  declare registrationNumberType?: TaxRegistrationTypeIn | null;
  /**
   * Registration Number.
   */
  declare registrationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference.
   * @nullable
   */
  declare reference?: ExciseReferenceIn | null;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shared.
   * @nullable
   */
  declare shared?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExciseTaxRegistrationNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface ExciseTaxRegistrationNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  registrationNumberType?: TaxRegistrationTypeIn | null;
  registrationNumber: DeserializedType<T, 'Edm.String'>;
  reference?: ExciseReferenceIn | null;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  shared?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
