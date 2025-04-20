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
import type { SubBillCustomerSplitTableHeadersApi } from './SubBillCustomerSplitTableHeadersApi';

/**
 * This class represents the entity "SubBillCustomerSplitTableHeaders" of service "d365_metadata".
 */
export class SubBillCustomerSplitTableHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillCustomerSplitTableHeadersType<T>
{
  /**
   * Technical entity name for SubBillCustomerSplitTableHeaders.
   */
  static override _entityName = 'SubBillCustomerSplitTableHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillCustomerSplitTableHeaders entity.
   */
  static _keys = ['dataAreaId', 'ScheduleNumber', 'CustAccount'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Number.
   */
  declare scheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Account.
   */
  declare custAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Start Date.
   */
  declare billingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing End Date.
   */
  declare billingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Requisition.
   * @nullable
   */
  declare customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Reference.
   * @nullable
   */
  declare customerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Term Id.
   * @nullable
   */
  declare paymentTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method.
   * @nullable
   */
  declare paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Address Name.
   * @nullable
   */
  declare billingAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internet Address.
   * @nullable
   */
  declare internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End User Account.
   * @nullable
   */
  declare endUserAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Schedule.
   * @nullable
   */
  declare paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person.
   * @nullable
   */
  declare contactPerson?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SubBillCustomerSplitTableHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillCustomerSplitTableHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  scheduleNumber: DeserializedType<T, 'Edm.String'>;
  custAccount: DeserializedType<T, 'Edm.String'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  billingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  billingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  customerReference?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermId?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  billingAddressName?: DeserializedType<T, 'Edm.String'> | null;
  internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  endUserAccount?: DeserializedType<T, 'Edm.String'> | null;
  paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  contactPerson?: DeserializedType<T, 'Edm.String'> | null;
}
