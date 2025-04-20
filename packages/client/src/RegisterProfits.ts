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
import type { RegisterProfitsApi } from './RegisterProfitsApi';
import { RTax25AssetProductionType } from './RTax25AssetProductionType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RegisterProfits" of service "d365_metadata".
 */
export class RegisterProfits<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RegisterProfitsType<T>
{
  /**
   * Technical entity name for RegisterProfits.
   */
  static override _entityName = 'RegisterProfits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RegisterProfits entity.
   */
  static _keys = ['dataAreaId', 'RegisterId', 'ExpenseCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Register Id.
   */
  declare registerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Code.
   */
  declare expenseCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Asset.
   * @nullable
   */
  declare productionAsset?: RTax25AssetProductionType | null;
  /**
   * Payment Condition.
   * @nullable
   */
  declare paymentCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition.
   * @nullable
   */
  declare condition?: NoYes | null;

  constructor(_entityApi: RegisterProfitsApi<T>) {
    super(_entityApi);
  }
}

export interface RegisterProfitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  registerId: DeserializedType<T, 'Edm.String'>;
  expenseCode: DeserializedType<T, 'Edm.String'>;
  productionAsset?: RTax25AssetProductionType | null;
  paymentCondition?: DeserializedType<T, 'Edm.String'> | null;
  condition?: NoYes | null;
}
