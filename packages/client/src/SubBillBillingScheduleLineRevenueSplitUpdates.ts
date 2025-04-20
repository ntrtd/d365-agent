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
import type { SubBillBillingScheduleLineRevenueSplitUpdatesApi } from './SubBillBillingScheduleLineRevenueSplitUpdatesApi';

/**
 * This class represents the entity "SubBillBillingScheduleLineRevenueSplitUpdates" of service "d365_metadata".
 */
export class SubBillBillingScheduleLineRevenueSplitUpdates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillBillingScheduleLineRevenueSplitUpdatesType<T>
{
  /**
   * Technical entity name for SubBillBillingScheduleLineRevenueSplitUpdates.
   */
  static override _entityName = 'SubBillBillingScheduleLineRevenueSplitUpdates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillBillingScheduleLineRevenueSplitUpdates entity.
   */
  static _keys = [
    'dataAreaId',
    'BillingScheduleNumber',
    'ParentLineNum',
    'ChildItemId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Schedule Number.
   */
  declare billingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Line Num.
   */
  declare parentLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Child Item Id.
   */
  declare childItemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Child Unit Price.
   */
  declare childUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Child Quantity.
   */
  declare childQuantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SubBillBillingScheduleLineRevenueSplitUpdatesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillBillingScheduleLineRevenueSplitUpdatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  billingScheduleNumber: DeserializedType<T, 'Edm.String'>;
  parentLineNum: DeserializedType<T, 'Edm.Decimal'>;
  childItemId: DeserializedType<T, 'Edm.String'>;
  childUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  childQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
