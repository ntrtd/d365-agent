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
import type { PayIntV1IdentificationTypesApi } from './PayIntV1IdentificationTypesApi';
import { NoYes } from './NoYes';
import { HcmIdentificationNumberAllowedValues } from './HcmIdentificationNumberAllowedValues';

/**
 * This class represents the entity "PayIntV1IdentificationTypes" of service "d365_metadata".
 */
export class PayIntV1IdentificationTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1IdentificationTypesType<T>
{
  /**
   * Technical entity name for PayIntV1IdentificationTypes.
   */
  static override _entityName = 'PayIntV1IdentificationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1IdentificationTypes entity.
   */
  static _keys = ['IdentificationTypeId'];
  /**
   * Identification Type Id.
   */
  declare identificationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Length.
   */
  declare fixedLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Identification Number Format.
   * @nullable
   */
  declare identificationNumberFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Duplicates.
   * @nullable
   */
  declare checkDuplicates?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allowed Values.
   * @nullable
   */
  declare allowedValues?: HcmIdentificationNumberAllowedValues | null;

  constructor(_entityApi: PayIntV1IdentificationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1IdentificationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  identificationTypeId: DeserializedType<T, 'Edm.String'>;
  fixedLength: DeserializedType<T, 'Edm.Int32'>;
  identificationNumberFormat?: DeserializedType<T, 'Edm.String'> | null;
  checkDuplicates?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  allowedValues?: HcmIdentificationNumberAllowedValues | null;
}
