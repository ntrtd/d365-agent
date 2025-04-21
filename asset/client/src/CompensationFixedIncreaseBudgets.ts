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
import type { CompensationFixedIncreaseBudgetsApi } from './CompensationFixedIncreaseBudgetsApi';
import {
  CompensationRegions,
  CompensationRegionsType
} from './CompensationRegions';
import { Currencies, CurrenciesType } from './Currencies';
import { Departments, DepartmentsType } from './Departments';
import { OperatingUnits, OperatingUnitsType } from './OperatingUnits';
import { Unions, UnionsType } from './Unions';

/**
 * This class represents the entity "CompensationFixedIncreaseBudgets" of service "d365_metadata".
 */
export class CompensationFixedIncreaseBudgets<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationFixedIncreaseBudgetsType<T>
{
  /**
   * Technical entity name for CompensationFixedIncreaseBudgets.
   */
  static override _entityName = 'CompensationFixedIncreaseBudgets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationFixedIncreaseBudgets entity.
   */
  static _keys = ['dataAreaId', 'DepartmentNumber', 'EffectiveDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Department Number.
   */
  declare departmentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Budget.
   */
  declare budget: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Labor Union Id.
   * @nullable
   */
  declare laborUnionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Increase Percent.
   */
  declare increasePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Target.
   * @nullable
   */
  declare target?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CompensationRegions} entity.
   */
  declare location?: CompensationRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare compensationCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  declare department?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link OperatingUnits} entity.
   */
  declare omOperatingUnit?: OperatingUnits<T> | null;
  /**
   * One-to-one navigation property to the {@link Unions} entity.
   */
  declare laborUnion?: Unions<T> | null;

  constructor(_entityApi: CompensationFixedIncreaseBudgetsApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationFixedIncreaseBudgetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  departmentNumber: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  budget: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  laborUnionId?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  increasePercent: DeserializedType<T, 'Edm.Decimal'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  target?: DeserializedType<T, 'Edm.String'> | null;
  location?: CompensationRegionsType<T> | null;
  compensationCurrency?: CurrenciesType<T> | null;
  department?: DepartmentsType<T> | null;
  omOperatingUnit?: OperatingUnitsType<T> | null;
  laborUnion?: UnionsType<T> | null;
}
