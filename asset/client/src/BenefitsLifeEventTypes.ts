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
import type { BenefitsLifeEventTypesApi } from './BenefitsLifeEventTypesApi';
import { BenefitLifeEventTypes } from './BenefitLifeEventTypes';
import {
  BenefitsEmployeeFutureLifeEventTransactions,
  BenefitsEmployeeFutureLifeEventTransactionsType
} from './BenefitsEmployeeFutureLifeEventTransactions';
import {
  BenefitsPeriodEmployeeLifeEventTransactions,
  BenefitsPeriodEmployeeLifeEventTransactionsType
} from './BenefitsPeriodEmployeeLifeEventTransactions';
import {
  BenefitsLifeEventOptions,
  BenefitsLifeEventOptionsType
} from './BenefitsLifeEventOptions';

/**
 * This class represents the entity "BenefitsLifeEventTypes" of service "d365_metadata".
 */
export class BenefitsLifeEventTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsLifeEventTypesType<T>
{
  /**
   * Technical entity name for BenefitsLifeEventTypes.
   */
  static override _entityName = 'BenefitsLifeEventTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsLifeEventTypes entity.
   */
  static _keys = ['LifeEventTypeId'];
  /**
   * Life Event Type Id.
   */
  declare lifeEventTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Life Event Type.
   * @nullable
   */
  declare lifeEventType?: BenefitLifeEventTypes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BenefitsEmployeeFutureLifeEventTransactions} entity.
   */
  declare benefitsEmployeeFutureLifeEventTransaction: BenefitsEmployeeFutureLifeEventTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsPeriodEmployeeLifeEventTransactions} entity.
   */
  declare benefitsPeriodEmployeeLifeEventTransaction: BenefitsPeriodEmployeeLifeEventTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsLifeEventOptions} entity.
   */
  declare benefitsLifeEventOption: BenefitsLifeEventOptions<T>[];

  constructor(_entityApi: BenefitsLifeEventTypesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsLifeEventTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  lifeEventTypeId: DeserializedType<T, 'Edm.String'>;
  lifeEventType?: BenefitLifeEventTypes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  benefitsEmployeeFutureLifeEventTransaction: BenefitsEmployeeFutureLifeEventTransactionsType<T>[];
  benefitsPeriodEmployeeLifeEventTransaction: BenefitsPeriodEmployeeLifeEventTransactionsType<T>[];
  benefitsLifeEventOption: BenefitsLifeEventOptionsType<T>[];
}
