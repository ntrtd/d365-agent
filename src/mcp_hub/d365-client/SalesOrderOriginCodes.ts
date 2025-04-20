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
import type { SalesOrderOriginCodesApi } from './SalesOrderOriginCodesApi';
import { NoYes } from './NoYes';
import { SalesOriginType } from './SalesOriginType';
import {
  SalesInvoiceHeadersV4,
  SalesInvoiceHeadersV4Type
} from './SalesInvoiceHeadersV4';
import {
  SalesOrderHeadersV4,
  SalesOrderHeadersV4Type
} from './SalesOrderHeadersV4';

/**
 * This class represents the entity "SalesOrderOriginCodes" of service "d365_metadata".
 */
export class SalesOrderOriginCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderOriginCodesType<T>
{
  /**
   * Technical entity name for SalesOrderOriginCodes.
   */
  static override _entityName = 'SalesOrderOriginCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderOriginCodes entity.
   */
  static _keys = ['dataAreaId', 'OriginCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Origin Code.
   */
  declare originCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Origin Description.
   * @nullable
   */
  declare originDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Origin Type Assigned.
   * @nullable
   */
  declare isOriginTypeAssigned?: NoYes | null;
  /**
   * Origin Type.
   * @nullable
   */
  declare originType?: SalesOriginType | null;
  /**
   * One-to-many navigation property to the {@link SalesInvoiceHeadersV4} entity.
   */
  declare salesInvoiceHeaders: SalesInvoiceHeadersV4<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderHeadersV4} entity.
   */
  declare salesOrderHeaders: SalesOrderHeadersV4<T>[];

  constructor(_entityApi: SalesOrderOriginCodesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderOriginCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  originCode: DeserializedType<T, 'Edm.String'>;
  originDescription?: DeserializedType<T, 'Edm.String'> | null;
  isOriginTypeAssigned?: NoYes | null;
  originType?: SalesOriginType | null;
  salesInvoiceHeaders: SalesInvoiceHeadersV4Type<T>[];
  salesOrderHeaders: SalesOrderHeadersV4Type<T>[];
}
