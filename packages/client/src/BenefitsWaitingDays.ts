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
import type { BenefitsWaitingDaysApi } from './BenefitsWaitingDaysApi';

/**
 * This class represents the entity "BenefitsWaitingDays" of service "d365_metadata".
 */
export class BenefitsWaitingDays<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsWaitingDaysType<T>
{
  /**
   * Technical entity name for BenefitsWaitingDays.
   */
  static override _entityName = 'BenefitsWaitingDays';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsWaitingDays entity.
   */
  static _keys = ['WaitingDay'];
  /**
   * Waiting Day.
   */
  declare waitingDay: DeserializedType<T, 'Edm.String'>;
  /**
   * Date In Month.
   */
  declare dateInMonth: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BenefitsWaitingDaysApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsWaitingDaysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  waitingDay: DeserializedType<T, 'Edm.String'>;
  dateInMonth: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
