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
import type { DisposableIncomesApi } from './DisposableIncomesApi';
import {
  DisposableIncomeBenefits,
  DisposableIncomeBenefitsType
} from './DisposableIncomeBenefits';
import {
  DisposableIncomeEarnings,
  DisposableIncomeEarningsType
} from './DisposableIncomeEarnings';
import {
  WorkerGarnishmentRules,
  WorkerGarnishmentRulesType
} from './WorkerGarnishmentRules';

/**
 * This class represents the entity "DisposableIncomes" of service "d365_metadata".
 */
export class DisposableIncomes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DisposableIncomesType<T>
{
  /**
   * Technical entity name for DisposableIncomes.
   */
  static override _entityName = 'DisposableIncomes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DisposableIncomes entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DisposableIncomeBenefits} entity.
   */
  declare disposableIncomeBenefits: DisposableIncomeBenefits<T>[];
  /**
   * One-to-many navigation property to the {@link DisposableIncomeEarnings} entity.
   */
  declare disposableIncomeEarnings: DisposableIncomeEarnings<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerGarnishmentRules} entity.
   */
  declare garnishmentTaxLevyRules: WorkerGarnishmentRules<T>[];

  constructor(_entityApi: DisposableIncomesApi<T>) {
    super(_entityApi);
  }
}

export interface DisposableIncomesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  disposableIncomeBenefits: DisposableIncomeBenefitsType<T>[];
  disposableIncomeEarnings: DisposableIncomeEarningsType<T>[];
  garnishmentTaxLevyRules: WorkerGarnishmentRulesType<T>[];
}
