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
import type { StoreHoursRangesApi } from './StoreHoursRangesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "StoreHoursRanges" of service "d365_metadata".
 */
export class StoreHoursRanges<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StoreHoursRangesType<T>
{
  /**
   * Technical entity name for StoreHoursRanges.
   */
  static override _entityName = 'StoreHoursRanges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StoreHoursRanges entity.
   */
  static _keys = ['dataAreaId', 'StoreHoursTemplateId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Hours Template Id.
   */
  declare storeHoursTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Closed On Thursday.
   * @nullable
   */
  declare closedOnThursday?: NoYes | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sunday Open Time.
   */
  declare sundayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closed On Monday.
   * @nullable
   */
  declare closedOnMonday?: NoYes | null;
  /**
   * Friday Close Time.
   */
  declare fridayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Friday Open Time.
   */
  declare fridayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Thursday Open Time.
   */
  declare thursdayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Wednesday Open Time.
   */
  declare wednesdayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Saturday Open Time.
   */
  declare saturdayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Monday Open Time.
   */
  declare mondayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Thursday Close Time.
   */
  declare thursdayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Closed On Friday.
   * @nullable
   */
  declare closedOnFriday?: NoYes | null;
  /**
   * Closed On Sunday.
   * @nullable
   */
  declare closedOnSunday?: NoYes | null;
  /**
   * Sunday Close Time.
   */
  declare sundayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Saturday Close Time.
   */
  declare saturdayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tuesday Close Time.
   */
  declare tuesdayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Closed On Tuesday.
   * @nullable
   */
  declare closedOnTuesday?: NoYes | null;
  /**
   * Tuesday Open Time.
   */
  declare tuesdayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Closed On Saturday.
   * @nullable
   */
  declare closedOnSaturday?: NoYes | null;
  /**
   * Wednesday Close Time.
   */
  declare wednesdayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Monday Close Time.
   */
  declare mondayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Closed On Wednesday.
   * @nullable
   */
  declare closedOnWednesday?: NoYes | null;

  constructor(_entityApi: StoreHoursRangesApi<T>) {
    super(_entityApi);
  }
}

export interface StoreHoursRangesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeHoursTemplateId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  closedOnThursday?: NoYes | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sundayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  closedOnMonday?: NoYes | null;
  fridayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  fridayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  thursdayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  wednesdayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  saturdayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  mondayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  thursdayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  closedOnFriday?: NoYes | null;
  closedOnSunday?: NoYes | null;
  sundayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  saturdayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  tuesdayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  closedOnTuesday?: NoYes | null;
  tuesdayOpenTime: DeserializedType<T, 'Edm.Int32'>;
  closedOnSaturday?: NoYes | null;
  wednesdayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  mondayCloseTime: DeserializedType<T, 'Edm.Int32'>;
  closedOnWednesday?: NoYes | null;
}
