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
import type { CompensationStructuresDualWriteV2Api } from './CompensationStructuresDualWriteV2Api';
import { CompensationGrids, CompensationGridsType } from './CompensationGrids';
import {
  CompensationLevels,
  CompensationLevelsType
} from './CompensationLevels';
import {
  CompensationReferencePointSetupLines,
  CompensationReferencePointSetupLinesType
} from './CompensationReferencePointSetupLines';

/**
 * This class represents the entity "CompensationStructuresDualWriteV2" of service "d365_metadata".
 */
export class CompensationStructuresDualWriteV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationStructuresDualWriteV2Type<T>
{
  /**
   * Technical entity name for CompensationStructuresDualWriteV2.
   */
  static override _entityName = 'CompensationStructuresDualWriteV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationStructuresDualWriteV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'Grid',
    'LevelId',
    'ReferenceSetup',
    'ReferencePoint'
  ];
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
   * Reference Setup.
   */
  declare referenceSetup: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference Point.
   */
  declare referencePoint: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference Point Line Number.
   */
  declare referencePointLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company Code.
   * @nullable
   */
  declare companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CompensationGrids} entity.
   */
  declare compensationGrid?: CompensationGrids<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationLevels} entity.
   */
  declare compensationLevel?: CompensationLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationReferencePointSetupLines} entity.
   */
  declare referencePointSetupLine?: CompensationReferencePointSetupLines<T> | null;

  constructor(_entityApi: CompensationStructuresDualWriteV2Api<T>) {
    super(_entityApi);
  }
}

export interface CompensationStructuresDualWriteV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  grid: DeserializedType<T, 'Edm.String'>;
  levelId: DeserializedType<T, 'Edm.String'>;
  referenceSetup: DeserializedType<T, 'Edm.String'>;
  referencePoint: DeserializedType<T, 'Edm.String'>;
  referencePointLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  compensationGrid?: CompensationGridsType<T> | null;
  compensationLevel?: CompensationLevelsType<T> | null;
  referencePointSetupLine?: CompensationReferencePointSetupLinesType<T> | null;
}
