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
import type { SubBillDeferralScheduleLinesApi } from './SubBillDeferralScheduleLinesApi';

/**
 * This class represents the entity "SubBillDeferralScheduleLines" of service "d365_metadata".
 */
export class SubBillDeferralScheduleLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralScheduleLinesType<T>
{
  /**
   * Technical entity name for SubBillDeferralScheduleLines.
   */
  static override _entityName = 'SubBillDeferralScheduleLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralScheduleLines entity.
   */
  static _keys = ['dataAreaId', 'DeferralScheduleNumber', 'Line'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Deferral Schedule Number.
   */
  declare deferralScheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line.
   */
  declare line: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Event Description.
   * @nullable
   */
  declare eventDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognition Account Display Value.
   * @nullable
   */
  declare recognitionAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Completion Percentage.
   */
  declare completionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allocation Percentage.
   */
  declare allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferral End Date.
   */
  declare deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SubBillDeferralScheduleLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralScheduleLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  deferralScheduleNumber: DeserializedType<T, 'Edm.String'>;
  line: DeserializedType<T, 'Edm.Int32'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  eventDescription?: DeserializedType<T, 'Edm.String'> | null;
  recognitionAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  completionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
}
