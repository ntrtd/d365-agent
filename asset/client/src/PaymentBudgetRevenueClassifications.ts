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
import type { PaymentBudgetRevenueClassificationsApi } from './PaymentBudgetRevenueClassificationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PaymentBudgetRevenueClassifications" of service "d365_metadata".
 */
export class PaymentBudgetRevenueClassifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PaymentBudgetRevenueClassificationsType<T>
{
  /**
   * Technical entity name for PaymentBudgetRevenueClassifications.
   */
  static override _entityName = 'PaymentBudgetRevenueClassifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentBudgetRevenueClassifications entity.
   */
  static _keys = ['dataAreaId', 'BudgetRevenueCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Revenue Code.
   */
  declare budgetRevenueCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ssgs.
   * @nullable
   */
  declare ssgs?: NoYes | null;

  constructor(_entityApi: PaymentBudgetRevenueClassificationsApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentBudgetRevenueClassificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  budgetRevenueCode: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  ssgs?: NoYes | null;
}
