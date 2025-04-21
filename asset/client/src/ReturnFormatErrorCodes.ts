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
import type { ReturnFormatErrorCodesApi } from './ReturnFormatErrorCodesApi';

/**
 * This class represents the entity "ReturnFormatErrorCodes" of service "d365_metadata".
 */
export class ReturnFormatErrorCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReturnFormatErrorCodesType<T>
{
  /**
   * Technical entity name for ReturnFormatErrorCodes.
   */
  static override _entityName = 'ReturnFormatErrorCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReturnFormatErrorCodes entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReturnFormatErrorCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ReturnFormatErrorCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
