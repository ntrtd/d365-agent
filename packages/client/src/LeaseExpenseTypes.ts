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
import type { LeaseExpenseTypesApi } from './LeaseExpenseTypesApi';

/**
 * This class represents the entity "LeaseExpenseTypes" of service "d365_metadata".
 */
export class LeaseExpenseTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaseExpenseTypesType<T>
{
  /**
   * Technical entity name for LeaseExpenseTypes.
   */
  static override _entityName = 'LeaseExpenseTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseExpenseTypes entity.
   */
  static _keys = ['dataAreaId', 'ExpenseType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Type.
   */
  declare expenseType: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LeaseExpenseTypesApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseExpenseTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  expenseType: DeserializedType<T, 'Edm.String'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
