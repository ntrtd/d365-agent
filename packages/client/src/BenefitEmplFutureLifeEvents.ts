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
import type { BenefitEmplFutureLifeEventsApi } from './BenefitEmplFutureLifeEventsApi';

/**
 * This class represents the entity "BenefitEmplFutureLifeEvents" of service "d365_metadata".
 */
export class BenefitEmplFutureLifeEvents<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitEmplFutureLifeEventsType<T>
{
  /**
   * Technical entity name for BenefitEmplFutureLifeEvents.
   */
  static override _entityName = 'BenefitEmplFutureLifeEvents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitEmplFutureLifeEvents entity.
   */
  static _keys = ['PersonnelNumber', 'LifeEventDate'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Life Event Date.
   */
  declare lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: BenefitEmplFutureLifeEventsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitEmplFutureLifeEventsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
