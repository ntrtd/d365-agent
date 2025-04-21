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
import type { SubBillBillingDetailLinesApi } from './SubBillBillingDetailLinesApi';
import { SubBillUsageReadingOption } from './SubBillUsageReadingOption';

/**
 * This class represents the entity "SubBillBillingDetailLines" of service "d365_metadata".
 */
export class SubBillBillingDetailLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillBillingDetailLinesType<T>
{
  /**
   * Technical entity name for SubBillBillingDetailLines.
   */
  static override _entityName = 'SubBillBillingDetailLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillBillingDetailLines entity.
   */
  static _keys = [
    'dataAreaId',
    'ScheduleNumber',
    'ItemNumber',
    'UsageIdentifier',
    'BillingStartDate',
    'BillingEndDate'
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
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Usage Identifier.
   */
  declare usageIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Start Date.
   */
  declare billingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Billing End Date.
   */
  declare billingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage Reading Option.
   * @nullable
   */
  declare usageReadingOption?: SubBillUsageReadingOption | null;
  /**
   * Estimated Qty.
   */
  declare estimatedQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Current Reading.
   */
  declare currentReading: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumed Quantity.
   */
  declare consumedQuantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SubBillBillingDetailLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillBillingDetailLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  scheduleNumber: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  usageIdentifier: DeserializedType<T, 'Edm.String'>;
  billingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  usageReadingOption?: SubBillUsageReadingOption | null;
  estimatedQty: DeserializedType<T, 'Edm.Decimal'>;
  currentReading: DeserializedType<T, 'Edm.Decimal'>;
  consumedQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
