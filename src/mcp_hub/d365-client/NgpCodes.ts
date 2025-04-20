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
import type { NgpCodesApi } from './NgpCodesApi';
import {
  FreeTextInvoiceLines,
  FreeTextInvoiceLinesType
} from './FreeTextInvoiceLines';

/**
 * This class represents the entity "NGPCodes" of service "d365_metadata".
 */
export class NgpCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NgpCodesType<T>
{
  /**
   * Technical entity name for NgpCodes.
   */
  static override _entityName = 'NGPCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NgpCodes entity.
   */
  static _keys = ['dataAreaId', 'NGP'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ngp.
   */
  declare ngp: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceLines} entity.
   */
  declare freeTextInvoiceLineNgp: FreeTextInvoiceLines<T>[];

  constructor(_entityApi: NgpCodesApi<T>) {
    super(_entityApi);
  }
}

export interface NgpCodesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ngp: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  freeTextInvoiceLineNgp: FreeTextInvoiceLinesType<T>[];
}
