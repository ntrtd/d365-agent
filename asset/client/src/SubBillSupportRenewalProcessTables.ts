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
import type { SubBillSupportRenewalProcessTablesApi } from './SubBillSupportRenewalProcessTablesApi';
import { NoYes } from './NoYes';
import { SubBillSupportRenewalFrequency } from './SubBillSupportRenewalFrequency';
import { SubBillSupportAndRenewalQuantity } from './SubBillSupportAndRenewalQuantity';

/**
 * This class represents the entity "SubBillSupportRenewalProcessTables" of service "d365_metadata".
 */
export class SubBillSupportRenewalProcessTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillSupportRenewalProcessTablesType<T>
{
  /**
   * Technical entity name for SubBillSupportRenewalProcessTables.
   */
  static override _entityName = 'SubBillSupportRenewalProcessTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillSupportRenewalProcessTables entity.
   */
  static _keys = ['dataAreaId', 'SalesId', 'SalesTableRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Table Rec Id.
   */
  declare salesTableRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Align To Month.
   * @nullable
   */
  declare alignToMonth?: NoYes | null;
  /**
   * Include Discount Renewal.
   * @nullable
   */
  declare includeDiscountRenewal?: NoYes | null;
  /**
   * Billing Schedule Number.
   * @nullable
   */
  declare billingScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Frequency Renewal.
   * @nullable
   */
  declare billingFrequencyRenewal?: SubBillSupportRenewalFrequency | null;
  /**
   * Support End Date.
   */
  declare supportEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Support And Renewal Quantity.
   * @nullable
   */
  declare supportAndRenewalQuantity?: SubBillSupportAndRenewalQuantity | null;
  /**
   * Renewal End Date.
   */
  declare renewalEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Include Discount Support.
   * @nullable
   */
  declare includeDiscountSupport?: NoYes | null;
  /**
   * Support Level.
   * @nullable
   */
  declare supportLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Interval Renewal.
   */
  declare billingIntervalRenewal: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Support Start Date.
   */
  declare supportStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Override Start Date.
   * @nullable
   */
  declare overrideStartDate?: NoYes | null;
  /**
   * Billing Frequency Support.
   * @nullable
   */
  declare billingFrequencySupport?: SubBillSupportRenewalFrequency | null;
  /**
   * End User Account.
   * @nullable
   */
  declare endUserAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Renewal Start Date.
   */
  declare renewalStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Alignment Date.
   */
  declare alignmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Billing Interval Support.
   */
  declare billingIntervalSupport: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: SubBillSupportRenewalProcessTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillSupportRenewalProcessTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  salesTableRecId: DeserializedType<T, 'Edm.Int64'>;
  alignToMonth?: NoYes | null;
  includeDiscountRenewal?: NoYes | null;
  billingScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  billingFrequencyRenewal?: SubBillSupportRenewalFrequency | null;
  supportEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  supportAndRenewalQuantity?: SubBillSupportAndRenewalQuantity | null;
  renewalEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  includeDiscountSupport?: NoYes | null;
  supportLevel?: DeserializedType<T, 'Edm.String'> | null;
  billingIntervalRenewal: DeserializedType<T, 'Edm.Int32'>;
  supportStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  overrideStartDate?: NoYes | null;
  billingFrequencySupport?: SubBillSupportRenewalFrequency | null;
  endUserAccount?: DeserializedType<T, 'Edm.String'> | null;
  renewalStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  alignmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingIntervalSupport: DeserializedType<T, 'Edm.Int32'>;
}
