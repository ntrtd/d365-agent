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
import type { EfDocReturnCodesApi } from './EfDocReturnCodesApi';
import { EfDocMessageTypeBr } from './EfDocMessageTypeBr';
import { FiscalDocumentStatusBr } from './FiscalDocumentStatusBr';

/**
 * This class represents the entity "EFDocReturnCodes" of service "d365_metadata".
 */
export class EfDocReturnCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EfDocReturnCodesType<T>
{
  /**
   * Technical entity name for EfDocReturnCodes.
   */
  static override _entityName = 'EFDocReturnCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EfDocReturnCodes entity.
   */
  static _keys = ['ReturnCode', 'MessageType'];
  /**
   * Return Code.
   */
  declare returnCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Type.
   * @nullable
   */
  declare messageType?: EfDocMessageTypeBr | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Status.
   * @nullable
   */
  declare fiscalDocumentStatus?: FiscalDocumentStatusBr | null;

  constructor(_entityApi: EfDocReturnCodesApi<T>) {
    super(_entityApi);
  }
}

export interface EfDocReturnCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  returnCode: DeserializedType<T, 'Edm.String'>;
  messageType?: EfDocMessageTypeBr | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentStatus?: FiscalDocumentStatusBr | null;
}
