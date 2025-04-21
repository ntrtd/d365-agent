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
import type { DebtPeriodsApi } from './DebtPeriodsApi';
import { RTax25DebtType } from './RTax25DebtType';
import { RTax25BadDebtType } from './RTax25BadDebtType';

/**
 * This class represents the entity "DebtPeriods" of service "d365_metadata".
 */
export class DebtPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DebtPeriodsType<T>
{
  /**
   * Technical entity name for DebtPeriods.
   */
  static override _entityName = 'DebtPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DebtPeriods entity.
   */
  static _keys = ['dataAreaId', 'DebtType', 'PeriodDebtType', 'From'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Debt Type.
   * @nullable
   */
  declare debtType?: RTax25DebtType | null;
  /**
   * Period Debt Type.
   * @nullable
   */
  declare periodDebtType?: RTax25BadDebtType | null;
  /**
   * From.
   */
  declare from: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Register Field.
   * @nullable
   */
  declare registerField?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * By.
   */
  declare by: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: DebtPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface DebtPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  debtType?: RTax25DebtType | null;
  periodDebtType?: RTax25BadDebtType | null;
  from: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  registerField?: DeserializedType<T, 'Edm.String'> | null;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  by: DeserializedType<T, 'Edm.Int32'>;
}
