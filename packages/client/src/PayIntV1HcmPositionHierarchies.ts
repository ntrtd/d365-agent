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
import type { PayIntV1HcmPositionHierarchiesApi } from './PayIntV1HcmPositionHierarchiesApi';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import {
  PositionHierarchyTypes,
  PositionHierarchyTypesType
} from './PositionHierarchyTypes';

/**
 * This class represents the entity "PayIntV1HcmPositionHierarchies" of service "d365_metadata".
 */
export class PayIntV1HcmPositionHierarchies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1HcmPositionHierarchiesType<T>
{
  /**
   * Technical entity name for PayIntV1HcmPositionHierarchies.
   */
  static override _entityName = 'PayIntV1HcmPositionHierarchies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1HcmPositionHierarchies entity.
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

  constructor(_entityApi: PayIntV1HcmPositionHierarchiesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1HcmPositionHierarchiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  hierarchyTypeName: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  parentPositionId?: DeserializedType<T, 'Edm.String'> | null;
  position?: PositionsV2Type<T> | null;
  parentPosition?: PositionsV2Type<T> | null;
  positionHierarchyType?: PositionHierarchyTypesType<T> | null;
}
