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
import type { RetailServiceCategoriesApi } from './RetailServiceCategoriesApi';
import { Warehouses, WarehousesType } from './Warehouses';
import { WorkCalendars, WorkCalendarsType } from './WorkCalendars';
import {
  RetailReplenishmentRules,
  RetailReplenishmentRulesType
} from './RetailReplenishmentRules';

/**
 * This class represents the entity "RetailServiceCategories" of service "d365_metadata".
 */
export class RetailServiceCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailServiceCategoriesType<T>
{
  /**
   * Technical entity name for RetailServiceCategories.
   */
  static override _entityName = 'RetailServiceCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailServiceCategories entity.
   */
  static _keys = ['dataAreaId', 'ServiceCategory'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Category.
   */
  declare serviceCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calendar.
   * @nullable
   */
  declare calendar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Local Delivery Date.
   */
  declare localDeliveryDate: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Replenishment Rule.
   * @nullable
   */
  declare replenishmentRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cross Docking Warehouse.
   * @nullable
   */
  declare crossDockingWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Date.
   */
  declare salesDate: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Replenishment Warehouse.
   * @nullable
   */
  declare replenishmentWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link WorkCalendars} entity.
   */
  declare workCalendar?: WorkCalendars<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailReplenishmentRules} entity.
   */
  declare retailReplenishmentRule?: RetailReplenishmentRules<T> | null;

  constructor(_entityApi: RetailServiceCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailServiceCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  serviceCategory: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  calendar?: DeserializedType<T, 'Edm.String'> | null;
  localDeliveryDate: DeserializedType<T, 'Edm.Int32'>;
  replenishmentRule?: DeserializedType<T, 'Edm.String'> | null;
  crossDockingWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  salesDate: DeserializedType<T, 'Edm.Int32'>;
  replenishmentWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  warehouse?: WarehousesType<T> | null;
  workCalendar?: WorkCalendarsType<T> | null;
  retailReplenishmentRule?: RetailReplenishmentRulesType<T> | null;
}
