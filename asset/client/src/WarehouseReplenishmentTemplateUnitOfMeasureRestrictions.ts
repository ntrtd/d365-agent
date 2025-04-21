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
import type { WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi } from './WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi';
import {
  WarehouseReplenishmentTemplates,
  WarehouseReplenishmentTemplatesType
} from './WarehouseReplenishmentTemplates';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';

/**
 * This class represents the entity "WarehouseReplenishmentTemplateUnitOfMeasureRestrictions" of service "d365_metadata".
 */
export class WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsType<T>
{
  /**
   * Technical entity name for WarehouseReplenishmentTemplateUnitOfMeasureRestrictions.
   */
  static override _entityName =
    'WarehouseReplenishmentTemplateUnitOfMeasureRestrictions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseReplenishmentTemplateUnitOfMeasureRestrictions entity.
   */
  static _keys = [
    'dataAreaId',
    'WarehouseReplenishmentTemplateId',
    'RestrictionUnitSymbol'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Replenishment Template Id.
   */
  declare warehouseReplenishmentTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Restriction Unit Symbol.
   */
  declare restrictionUnitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link WarehouseReplenishmentTemplates} entity.
   */
  declare warehouseReplenishmentTemplate?: WarehouseReplenishmentTemplates<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unitOfMeasure?: UnitsOfMeasure<T> | null;

  constructor(
    _entityApi: WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warehouseReplenishmentTemplateId: DeserializedType<T, 'Edm.String'>;
  restrictionUnitSymbol: DeserializedType<T, 'Edm.String'>;
  warehouseReplenishmentTemplate?: WarehouseReplenishmentTemplatesType<T> | null;
  unitOfMeasure?: UnitsOfMeasureType<T> | null;
}
