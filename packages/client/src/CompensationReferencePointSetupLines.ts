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
import type { CompensationReferencePointSetupLinesApi } from './CompensationReferencePointSetupLinesApi';
import {
  CompensationStructures,
  CompensationStructuresType
} from './CompensationStructures';
import {
  CompensationStructuresDualWriteV2,
  CompensationStructuresDualWriteV2Type
} from './CompensationStructuresDualWriteV2';
import {
  CompensationReferencePoints,
  CompensationReferencePointsType
} from './CompensationReferencePoints';

/**
 * This class represents the entity "CompensationReferencePointSetupLines" of service "d365_metadata".
 */
export class CompensationReferencePointSetupLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationReferencePointSetupLinesType<T>
{
  /**
   * Technical entity name for CompensationReferencePointSetupLines.
   */
  static override _entityName = 'CompensationReferencePointSetupLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationReferencePointSetupLines entity.
   */
  static _keys = ['dataAreaId', 'RefPointSetupId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Point Setup Id.
   */
  declare refPointSetupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ref Point Id.
   * @nullable
   */
  declare refPointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CompensationStructures} entity.
   */
  declare compensationStructures: CompensationStructures<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationStructuresDualWriteV2} entity.
   */
  declare compensationStructuresV2: CompensationStructuresDualWriteV2<T>[];
  /**
   * One-to-one navigation property to the {@link CompensationReferencePoints} entity.
   */
  declare hrcCompRefPointSetup?: CompensationReferencePoints<T> | null;

  constructor(_entityApi: CompensationReferencePointSetupLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationReferencePointSetupLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  refPointSetupId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  refPointId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  compensationStructures: CompensationStructuresType<T>[];
  compensationStructuresV2: CompensationStructuresDualWriteV2Type<T>[];
  hrcCompRefPointSetup?: CompensationReferencePointsType<T> | null;
}
