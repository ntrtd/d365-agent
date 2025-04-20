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
import type { VoidedSalesOrderHeadersApi } from './VoidedSalesOrderHeadersApi';
import {
  VoidedSalesOrderLines,
  VoidedSalesOrderLinesType
} from './VoidedSalesOrderLines';

/**
 * This class represents the entity "VoidedSalesOrderHeaders" of service "d365_metadata".
 */
export class VoidedSalesOrderHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VoidedSalesOrderHeadersType<T>
{
  /**
   * Technical entity name for VoidedSalesOrderHeaders.
   */
  static override _entityName = 'VoidedSalesOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VoidedSalesOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'SalesOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Number.
   */
  declare salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Ordering Customer Account Number.
   * @nullable
   */
  declare orderingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Name.
   * @nullable
   */
  declare salesOrderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link VoidedSalesOrderLines} entity.
   */
  declare voidedSalesOrderLines: VoidedSalesOrderLines<T>[];

  constructor(_entityApi: VoidedSalesOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface VoidedSalesOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  orderingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderName?: DeserializedType<T, 'Edm.String'> | null;
  voidedSalesOrderLines: VoidedSalesOrderLinesType<T>[];
}
