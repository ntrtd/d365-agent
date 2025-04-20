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
import type { LoanTypesApi } from './LoanTypesApi';
import { LoanItems, LoanItemsType } from './LoanItems';

/**
 * This class represents the entity "LoanTypes" of service "d365_metadata".
 */
export class LoanTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LoanTypesType<T>
{
  /**
   * Technical entity name for LoanTypes.
   */
  static override _entityName = 'LoanTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LoanTypes entity.
   */
  static _keys = ['LoanTypeId'];
  /**
   * Loan Type Id.
   */
  declare loanTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Grace Period Days.
   */
  declare gracePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link LoanItems} entity.
   */
  declare loanItem: LoanItems<T>[];

  constructor(_entityApi: LoanTypesApi<T>) {
    super(_entityApi);
  }
}

export interface LoanTypesType<T extends DeSerializers = DefaultDeSerializers> {
  loanTypeId: DeserializedType<T, 'Edm.String'>;
  gracePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  loanItem: LoanItemsType<T>[];
}
