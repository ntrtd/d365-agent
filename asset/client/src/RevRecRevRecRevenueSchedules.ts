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
import type { RevRecRevRecRevenueSchedulesApi } from './RevRecRevRecRevenueSchedulesApi';
import { NoYes } from './NoYes';
import { RevRecRecognitionBasis } from './RevRecRecognitionBasis';
import { RevRecRecognitionConvention } from './RevRecRecognitionConvention';

/**
 * This class represents the entity "RevRecRevRecRevenueSchedules" of service "d365_metadata".
 */
export class RevRecRevRecRevenueSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RevRecRevRecRevenueSchedulesType<T>
{
  /**
   * Technical entity name for RevRecRevRecRevenueSchedules.
   */
  static override _entityName = 'RevRecRevRecRevenueSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RevRecRevRecRevenueSchedules entity.
   */
  static _keys = ['dataAreaId', 'RevenueScheduleID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Revenue Schedule Id.
   */
  declare revenueScheduleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Auto Hold.
   * @nullable
   */
  declare autoHold?: NoYes | null;
  /**
   * Recognition Basis.
   * @nullable
   */
  declare recognitionBasis?: RevRecRecognitionBasis | null;
  /**
   * Occurrences.
   */
  declare occurrences: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Auto Contract Terms.
   * @nullable
   */
  declare autoContractTerms?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognition Convention.
   * @nullable
   */
  declare recognitionConvention?: RevRecRecognitionConvention | null;

  constructor(_entityApi: RevRecRevRecRevenueSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface RevRecRevRecRevenueSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  revenueScheduleId: DeserializedType<T, 'Edm.String'>;
  autoHold?: NoYes | null;
  recognitionBasis?: RevRecRecognitionBasis | null;
  occurrences: DeserializedType<T, 'Edm.Int32'>;
  autoContractTerms?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  recognitionConvention?: RevRecRecognitionConvention | null;
}
