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
import type { PositionHierarchiesApi } from './PositionHierarchiesApi';
import {
  PayIntV1PayrollPositions,
  PayIntV1PayrollPositionsType
} from './PayIntV1PayrollPositions';
import { PayrollPositions, PayrollPositionsType } from './PayrollPositions';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import {
  PositionHierarchyTypes,
  PositionHierarchyTypesType
} from './PositionHierarchyTypes';

/**
 * This class represents the entity "PositionHierarchies" of service "d365_metadata".
 */
export class PositionHierarchies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PositionHierarchiesType<T>
{
  /**
   * Technical entity name for PositionHierarchies.
   */
  static override _entityName = 'PositionHierarchies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionHierarchies entity.
   */
  static _keys = ['PositionId', 'HierarchyTypeName', 'ValidFrom', 'ValidTo'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Hierarchy Type Name.
   */
  declare hierarchyTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Parent Position Id.
   * @nullable
   */
  declare parentPositionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PayIntV1PayrollPositions} entity.
   */
  declare payIntV1PayrollPosition: PayIntV1PayrollPositions<T>[];
  /**
   * One-to-many navigation property to the {@link PayrollPositions} entity.
   */
  declare payrollPosition: PayrollPositions<T>[];
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare parentPosition?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionHierarchyTypes} entity.
   */
  declare positionHierarchyType?: PositionHierarchyTypes<T> | null;

  constructor(_entityApi: PositionHierarchiesApi<T>) {
    super(_entityApi);
  }
}

export interface PositionHierarchiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  hierarchyTypeName: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  parentPositionId?: DeserializedType<T, 'Edm.String'> | null;
  payIntV1PayrollPosition: PayIntV1PayrollPositionsType<T>[];
  payrollPosition: PayrollPositionsType<T>[];
  position?: PositionsV2Type<T> | null;
  parentPosition?: PositionsV2Type<T> | null;
  positionHierarchyType?: PositionHierarchyTypesType<T> | null;
}
