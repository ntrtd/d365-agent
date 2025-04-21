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
import type { CustomsTaxRegistrationNumbersApi } from './CustomsTaxRegistrationNumbersApi';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CustomsTaxRegistrationNumbers" of service "d365_metadata".
 */
export class CustomsTaxRegistrationNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomsTaxRegistrationNumbersType<T>
{
  /**
   * Technical entity name for CustomsTaxRegistrationNumbers.
   */
  static override _entityName = 'CustomsTaxRegistrationNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomsTaxRegistrationNumbers entity.
   */
  static _keys = ['RegistrationNumberType', 'RegistrationNumber'];
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
   * Shared.
   * @nullable
   */
  declare shared?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomsTaxRegistrationNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface CustomsTaxRegistrationNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  registrationNumberType?: TaxRegistrationTypeIn | null;
  registrationNumber: DeserializedType<T, 'Edm.String'>;
  shared?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
