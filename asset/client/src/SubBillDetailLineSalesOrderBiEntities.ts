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
import type { SubBillDetailLineSalesOrderBiEntitiesApi } from './SubBillDetailLineSalesOrderBiEntitiesApi';

/**
 * This class represents the entity "SubBillDetailLineSalesOrderBiEntities" of service "d365_metadata".
 */
export class SubBillDetailLineSalesOrderBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDetailLineSalesOrderBiEntitiesType<T>
{
  /**
   * Technical entity name for SubBillDetailLineSalesOrderBiEntities.
   */
  static override _entityName = 'SubBillDetailLineSalesOrderBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDetailLineSalesOrderBiEntities entity.
   */
  static _keys = ['dataAreaId', 'BillingDetailLineRecId', 'SalesLineRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Detail Line Rec Id.
   */
  declare billingDetailLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Line Rec Id.
   */
  declare salesLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customer Split Rec Id.
   */
  declare customerSplitRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Line Amount.
   */
  declare salesLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mea Deferred Revenue Amount.
   */
  declare meaDeferredRevenueAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Invoice Item Rec Id.
   */
  declare projectInvoiceItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Proposal Id.
   * @nullable
   */
  declare projectProposalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Invoice Trans Rec Id.
   */
  declare customerInvoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: SubBillDetailLineSalesOrderBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDetailLineSalesOrderBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  billingDetailLineRecId: DeserializedType<T, 'Edm.Int64'>;
  salesLineRecId: DeserializedType<T, 'Edm.Int64'>;
  customerSplitRecId: DeserializedType<T, 'Edm.Int64'>;
  salesLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  meaDeferredRevenueAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  projectInvoiceItemRecId: DeserializedType<T, 'Edm.Int64'>;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  projectProposalId?: DeserializedType<T, 'Edm.String'> | null;
  customerInvoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;
}
