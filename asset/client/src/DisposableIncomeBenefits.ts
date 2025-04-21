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
import type { DisposableIncomeBenefitsApi } from './DisposableIncomeBenefitsApi';
import { DisposableIncomes, DisposableIncomesType } from './DisposableIncomes';
import { Benefits, BenefitsType } from './Benefits';

/**
 * This class represents the entity "DisposableIncomeBenefits" of service "d365_metadata".
 */
export class DisposableIncomeBenefits<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DisposableIncomeBenefitsType<T>
{
  /**
   * Technical entity name for DisposableIncomeBenefits.
   */
  static override _entityName = 'DisposableIncomeBenefits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DisposableIncomeBenefits entity.
   */
  static _keys = ['BenefitId', 'Name'];
  /**
   * Benefit Id.
   */
  declare benefitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link DisposableIncomes} entity.
   */
  declare disposableIncome?: DisposableIncomes<T> | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;

  constructor(_entityApi: DisposableIncomeBenefitsApi<T>) {
    super(_entityApi);
  }
}

export interface DisposableIncomeBenefitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  disposableIncome?: DisposableIncomesType<T> | null;
  benefit?: BenefitsType<T> | null;
}
