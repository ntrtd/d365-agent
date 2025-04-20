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
import type { BenefitsEmployeeFutureLifeEventTransactionsApi } from './BenefitsEmployeeFutureLifeEventTransactionsApi';
import { EventLogType } from './EventLogType';
import { BenefitLifeEventStatus } from './BenefitLifeEventStatus';
import { BenefitLifeEventTypes } from './BenefitLifeEventTypes';
import { Workers, WorkersType } from './Workers';
import {
  BenefitsLifeEventTypes,
  BenefitsLifeEventTypesType
} from './BenefitsLifeEventTypes';

/**
 * This class represents the entity "BenefitsEmployeeFutureLifeEventTransactions" of service "d365_metadata".
 */
export class BenefitsEmployeeFutureLifeEventTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsEmployeeFutureLifeEventTransactionsType<T>
{
  /**
   * Technical entity name for BenefitsEmployeeFutureLifeEventTransactions.
   */
  static override _entityName = 'BenefitsEmployeeFutureLifeEventTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsEmployeeFutureLifeEventTransactions entity.
   */
  static _keys = [
    'LineNum',
    'LifeEventTypeId',
    'PersonnelNumber',
    'LifeEventDate'
  ];
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Life Event Type Id.
   */
  declare lifeEventTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Life Event Date.
   */
  declare lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Life Event Origin.
   * @nullable
   */
  declare lifeEventOrigin?: EventLogType | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BenefitLifeEventStatus | null;
  /**
   * Life Event Date Time.
   */
  declare lifeEventDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Life Event Types.
   * @nullable
   */
  declare lifeEventTypes?: BenefitLifeEventTypes | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsLifeEventTypes} entity.
   */
  declare benefitsLifeEventType?: BenefitsLifeEventTypes<T> | null;

  constructor(_entityApi: BenefitsEmployeeFutureLifeEventTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsEmployeeFutureLifeEventTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  lineNum: DeserializedType<T, 'Edm.Int32'>;
  lifeEventTypeId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lifeEventOrigin?: EventLogType | null;
  status?: BenefitLifeEventStatus | null;
  lifeEventDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lifeEventTypes?: BenefitLifeEventTypes | null;
  worker?: WorkersType<T> | null;
  benefitsLifeEventType?: BenefitsLifeEventTypesType<T> | null;
}
