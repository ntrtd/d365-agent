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
import type { PayIntV1EmploymentTypesApi } from './PayIntV1EmploymentTypesApi';

/**
 * This class represents the entity "PayIntV1EmploymentTypes" of service "d365_metadata".
 */
export class PayIntV1EmploymentTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1EmploymentTypesType<T>
{
  /**
   * Technical entity name for PayIntV1EmploymentTypes.
   */
  static override _entityName = 'PayIntV1EmploymentTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1EmploymentTypes entity.
   */
  static _keys = ['EmploymentTypeId'];
  /**
   * Employment Type Id.
   */
  declare employmentTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1EmploymentTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1EmploymentTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  employmentTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
