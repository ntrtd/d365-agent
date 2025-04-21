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
import type { ExtCodeTablesApi } from './ExtCodeTablesApi';
import { EInvoiceExtCodeTypeMx } from './EInvoiceExtCodeTypeMx';

/**
 * This class represents the entity "ExtCodeTables" of service "d365_metadata".
 */
export class ExtCodeTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExtCodeTablesType<T>
{
  /**
   * Technical entity name for ExtCodeTables.
   */
  static override _entityName = 'ExtCodeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExtCodeTables entity.
   */
  static _keys = ['dataAreaId', 'CodeType', 'Version', 'CodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code Type.
   * @nullable
   */
  declare codeType?: EInvoiceExtCodeTypeMx | null;
  /**
   * Version.
   */
  declare version: DeserializedType<T, 'Edm.String'>;
  /**
   * Code Id.
   */
  declare codeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ExtCodeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ExtCodeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  codeType?: EInvoiceExtCodeTypeMx | null;
  version: DeserializedType<T, 'Edm.String'>;
  codeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
