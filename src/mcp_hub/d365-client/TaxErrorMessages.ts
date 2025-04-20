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
import type { TaxErrorMessagesApi } from './TaxErrorMessagesApi';
import { TaxErrorType } from './TaxErrorType';

/**
 * This class represents the entity "TaxErrorMessages" of service "d365_metadata".
 */
export class TaxErrorMessages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxErrorMessagesType<T>
{
  /**
   * Technical entity name for TaxErrorMessages.
   */
  static override _entityName = 'TaxErrorMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxErrorMessages entity.
   */
  static _keys = ['dataAreaId', 'ErrorId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Error Id.
   */
  declare errorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Error Text.
   * @nullable
   */
  declare errorText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error Type.
   * @nullable
   */
  declare errorType?: TaxErrorType | null;
  /**
   * Dp Error Code.
   * @nullable
   */
  declare dpErrorCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error Code.
   */
  declare errorCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxErrorMessagesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxErrorMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  errorId: DeserializedType<T, 'Edm.String'>;
  errorText?: DeserializedType<T, 'Edm.String'> | null;
  errorType?: TaxErrorType | null;
  dpErrorCode?: DeserializedType<T, 'Edm.String'> | null;
  errorCode: DeserializedType<T, 'Edm.Int32'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
}
