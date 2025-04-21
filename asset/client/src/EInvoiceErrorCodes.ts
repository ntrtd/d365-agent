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
import type { EInvoiceErrorCodesApi } from './EInvoiceErrorCodesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "EInvoiceErrorCodes" of service "d365_metadata".
 */
export class EInvoiceErrorCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EInvoiceErrorCodesType<T>
{
  /**
   * Technical entity name for EInvoiceErrorCodes.
   */
  static override _entityName = 'EInvoiceErrorCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EInvoiceErrorCodes entity.
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
   * Error Text.
   * @nullable
   */
  declare errorText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Change.
   * @nullable
   */
  declare change?: NoYes | null;

  constructor(_entityApi: EInvoiceErrorCodesApi<T>) {
    super(_entityApi);
  }
}

export interface EInvoiceErrorCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  errorText?: DeserializedType<T, 'Edm.String'> | null;
  change?: NoYes | null;
}
