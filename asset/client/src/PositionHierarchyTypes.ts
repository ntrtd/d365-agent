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
import type { PositionHierarchyTypesApi } from './PositionHierarchyTypesApi';
import {
  PayIntV1HcmPositionHierarchies,
  PayIntV1HcmPositionHierarchiesType
} from './PayIntV1HcmPositionHierarchies';
import {
  PositionHierarchies,
  PositionHierarchiesType
} from './PositionHierarchies';

/**
 * This class represents the entity "PositionHierarchyTypes" of service "d365_metadata".
 */
export class PositionHierarchyTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PositionHierarchyTypesType<T>
{
  /**
   * Technical entity name for PositionHierarchyTypes.
   */
  static override _entityName = 'PositionHierarchyTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionHierarchyTypes entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPositionHierarchies} entity.
   */
  declare payIntPositionHierarchies: PayIntV1HcmPositionHierarchies<T>[];
  /**
   * One-to-many navigation property to the {@link PositionHierarchies} entity.
   */
  declare positionHierarchies: PositionHierarchies<T>[];

  constructor(_entityApi: PositionHierarchyTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PositionHierarchyTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  payIntPositionHierarchies: PayIntV1HcmPositionHierarchiesType<T>[];
  positionHierarchies: PositionHierarchiesType<T>[];
}
