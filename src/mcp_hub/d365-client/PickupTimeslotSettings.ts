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
import type { PickupTimeslotSettingsApi } from './PickupTimeslotSettingsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PickupTimeslotSettings" of service "d365_metadata".
 */
export class PickupTimeslotSettings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PickupTimeslotSettingsType<T>
{
  /**
   * Technical entity name for PickupTimeslotSettings.
   */
  static override _entityName = 'PickupTimeslotSettings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PickupTimeslotSettings entity.
   */
  static _keys = ['dataAreaId', 'LineNum', 'TimeslotId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Timeslot Id.
   */
  declare timeslotId: DeserializedType<T, 'Edm.String'>;
  /**
   * End Time.
   */
  declare endTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Time.
   */
  declare startTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active On Sunday.
   * @nullable
   */
  declare activeOnSunday?: NoYes | null;
  /**
   * Capacity Per Interval.
   */
  declare capacityPerInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Active On Monday.
   * @nullable
   */
  declare activeOnMonday?: NoYes | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Active On Saturday.
   * @nullable
   */
  declare activeOnSaturday?: NoYes | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Active On Wednesday.
   * @nullable
   */
  declare activeOnWednesday?: NoYes | null;
  /**
   * Active On Tuesday.
   * @nullable
   */
  declare activeOnTuesday?: NoYes | null;
  /**
   * Active On Thursday.
   * @nullable
   */
  declare activeOnThursday?: NoYes | null;
  /**
   * Interval.
   */
  declare interval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Active On Friday.
   * @nullable
   */
  declare activeOnFriday?: NoYes | null;

  constructor(_entityApi: PickupTimeslotSettingsApi<T>) {
    super(_entityApi);
  }
}

export interface PickupTimeslotSettingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  timeslotId: DeserializedType<T, 'Edm.String'>;
  endTime: DeserializedType<T, 'Edm.Int32'>;
  startTime: DeserializedType<T, 'Edm.Int32'>;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  activeOnSunday?: NoYes | null;
  capacityPerInterval: DeserializedType<T, 'Edm.Int32'>;
  activeOnMonday?: NoYes | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activeOnSaturday?: NoYes | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activeOnWednesday?: NoYes | null;
  activeOnTuesday?: NoYes | null;
  activeOnThursday?: NoYes | null;
  interval: DeserializedType<T, 'Edm.Int32'>;
  activeOnFriday?: NoYes | null;
}
