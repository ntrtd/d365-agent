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
import type { IncomeClassificationsApi } from './IncomeClassificationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "IncomeClassifications" of service "d365_metadata".
 */
export class IncomeClassifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IncomeClassificationsType<T>
{
  /**
   * Technical entity name for IncomeClassifications.
   */
  static override _entityName = 'IncomeClassifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IncomeClassifications entity.
   */
  static _keys = ['CodeId'];
  /**
   * Code Id.
   */
  declare codeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Thirteenth Salary.
   * @nullable
   */
  declare isThirteenthSalary?: NoYes | null;

  constructor(_entityApi: IncomeClassificationsApi<T>) {
    super(_entityApi);
  }
}

export interface IncomeClassificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  codeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isThirteenthSalary?: NoYes | null;
}
