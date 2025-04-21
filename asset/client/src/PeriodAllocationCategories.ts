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
import type { PeriodAllocationCategoriesApi } from './PeriodAllocationCategoriesApi';
import { NoYes } from './NoYes';
import { PeriodUnit } from './PeriodUnit';
import { BudgetParameters, BudgetParametersType } from './BudgetParameters';

/**
 * This class represents the entity "PeriodAllocationCategories" of service "d365_metadata".
 */
export class PeriodAllocationCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PeriodAllocationCategoriesType<T>
{
  /**
   * Technical entity name for PeriodAllocationCategories.
   */
  static override _entityName = 'PeriodAllocationCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PeriodAllocationCategories entity.
   */
  static _keys = ['dataAreaId', 'PeriodKey', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Key.
   */
  declare periodKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allocation Percentage.
   */
  declare allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Fixed.
   * @nullable
   */
  declare isFixed?: NoYes | null;
  /**
   * Time Interval.
   */
  declare timeInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Unit Of Time.
   * @nullable
   */
  declare unitOfTime?: PeriodUnit | null;
  /**
   * One-to-many navigation property to the {@link BudgetParameters} entity.
   */
  declare budgetParameters: BudgetParameters<T>[];

  constructor(_entityApi: PeriodAllocationCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface PeriodAllocationCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  periodKey: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isFixed?: NoYes | null;
  timeInterval: DeserializedType<T, 'Edm.Int32'>;
  unitOfTime?: PeriodUnit | null;
  budgetParameters: BudgetParametersType<T>[];
}
