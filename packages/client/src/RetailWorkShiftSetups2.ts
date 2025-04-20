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
import type { RetailWorkShiftSetups2Api } from './RetailWorkShiftSetups2Api';
import { RetailEndTimeStartTime } from './RetailEndTimeStartTime';

/**
 * This class represents the entity "RetailWorkShiftSetups2" of service "d365_metadata".
 */
export class RetailWorkShiftSetups2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailWorkShiftSetups2Type<T>
{
  /**
   * Technical entity name for RetailWorkShiftSetups2.
   */
  static override _entityName = 'RetailWorkShiftSetups2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailWorkShiftSetups2 entity.
   */
  static _keys = ['dataAreaId', 'WorkShiftId', 'StoreNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Shift Id.
   */
  declare workShiftId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Time.
   */
  declare startTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Abbreviation Text.
   * @nullable
   */
  declare abbreviationText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Abbreviation.
   * @nullable
   */
  declare abbreviation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Reference.
   * @nullable
   */
  declare dateReference?: RetailEndTimeStartTime | null;
  /**
   * Ending Time.
   */
  declare endingTime: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailWorkShiftSetups2Api<T>) {
    super(_entityApi);
  }
}

export interface RetailWorkShiftSetups2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workShiftId: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  startTime: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  abbreviationText?: DeserializedType<T, 'Edm.String'> | null;
  abbreviation?: DeserializedType<T, 'Edm.String'> | null;
  dateReference?: RetailEndTimeStartTime | null;
  endingTime: DeserializedType<T, 'Edm.Int32'>;
}
