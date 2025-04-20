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
import type { CompensationStructuresApi } from './CompensationStructuresApi';
import {
  CompensationLevels,
  CompensationLevelsType
} from './CompensationLevels';
import { CompensationGrids, CompensationGridsType } from './CompensationGrids';
import {
  CompensationReferencePointSetupLines,
  CompensationReferencePointSetupLinesType
} from './CompensationReferencePointSetupLines';

/**
 * This class represents the entity "CompensationStructures" of service "d365_metadata".
 */
export class CompensationStructures<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationStructuresType<T>
{
  /**
   * Technical entity name for CompensationStructures.
   */
  static override _entityName = 'CompensationStructures';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationStructures entity.
   */
  static _keys = ['dataAreaId', 'Grid', 'LevelId', 'ReferencePoint'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Grid.
   */
  declare grid: DeserializedType<T, 'Edm.String'>;
  /**
   * Level Id.
   */
  declare levelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference Point.
   */
  declare referencePoint: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reference Setup.
   * @nullable
   */
  declare referenceSetup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CompensationLevels} entity.
   */
  declare compensationLevel?: CompensationLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationGrids} entity.
   */
  declare compensationGrid?: CompensationGrids<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationReferencePointSetupLines} entity.
   */
  declare referencePointSetupLine?: CompensationReferencePointSetupLines<T> | null;

  constructor(_entityApi: CompensationStructuresApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationStructuresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  grid: DeserializedType<T, 'Edm.String'>;
  levelId: DeserializedType<T, 'Edm.String'>;
  referencePoint: DeserializedType<T, 'Edm.String'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  referenceSetup?: DeserializedType<T, 'Edm.String'> | null;
  compensationLevel?: CompensationLevelsType<T> | null;
  compensationGrid?: CompensationGridsType<T> | null;
  referencePointSetupLine?: CompensationReferencePointSetupLinesType<T> | null;
}
