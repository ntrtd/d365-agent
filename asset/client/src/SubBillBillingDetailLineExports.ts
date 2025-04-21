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
import type { SubBillBillingDetailLineExportsApi } from './SubBillBillingDetailLineExportsApi';
import { NoYes } from './NoYes';
import { SubBillUsageReadingOption } from './SubBillUsageReadingOption';

/**
 * This class represents the entity "SubBillBillingDetailLineExports" of service "d365_metadata".
 */
export class SubBillBillingDetailLineExports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillBillingDetailLineExportsType<T>
{
  /**
   * Technical entity name for SubBillBillingDetailLineExports.
   */
  static override _entityName = 'SubBillBillingDetailLineExports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillBillingDetailLineExports entity.
   */
  static _keys = [
    'dataAreaId',
    'ScheduleNumber',
    'ScheduleLineNum',
    'DetailLineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Number.
   */
  declare scheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Line Num.
   */
  declare scheduleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Detail Line Num.
   */
  declare detailLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferral End Date.
   */
  declare deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Discount.
   */
  declare discount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Billable Quantity.
   */
  declare billableQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billed.
   * @nullable
   */
  declare billed?: NoYes | null;
  /**
   * Consumed Quantity.
   */
  declare consumedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Support.
   * @nullable
   */
  declare originalSupport?: NoYes | null;
  /**
   * Billing End Date.
   */
  declare billingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Free Quantity.
   */
  declare freeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Usage Identifier.
   * @nullable
   */
  declare usageIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order.
   * @nullable
   */
  declare salesOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Name.
   * @nullable
   */
  declare custName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral Schedule Number.
   * @nullable
   */
  declare deferralScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral Start Date.
   */
  declare deferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Current Reading.
   */
  declare currentReading: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Usage Reading Option.
   * @nullable
   */
  declare usageReadingOption?: SubBillUsageReadingOption | null;
  /**
   * Period Revenue.
   */
  declare periodRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Billing Start Date.
   */
  declare billingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Estimated Quantity.
   */
  declare estimatedQuantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SubBillBillingDetailLineExportsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillBillingDetailLineExportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  scheduleNumber: DeserializedType<T, 'Edm.String'>;
  scheduleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  detailLineNum: DeserializedType<T, 'Edm.Decimal'>;
  deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discount: DeserializedType<T, 'Edm.Decimal'>;
  billableQuantity: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  billed?: NoYes | null;
  consumedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  originalSupport?: NoYes | null;
  billingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  freeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  usageIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  salesOrder?: DeserializedType<T, 'Edm.String'> | null;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  custName?: DeserializedType<T, 'Edm.String'> | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  deferralScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  deferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currentReading: DeserializedType<T, 'Edm.Decimal'>;
  usageReadingOption?: SubBillUsageReadingOption | null;
  periodRevenue: DeserializedType<T, 'Edm.Decimal'>;
  billingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  estimatedQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
