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
import type { CompensationReferencePointsApi } from './CompensationReferencePointsApi';
import { HcmCompensationType } from './HcmCompensationType';
import { CompensationGrids, CompensationGridsType } from './CompensationGrids';
import {
  DualWriteCompensationReferencePointSetupLines,
  DualWriteCompensationReferencePointSetupLinesType
} from './DualWriteCompensationReferencePointSetupLines';
import {
  CompensationReferencePointSetupLines,
  CompensationReferencePointSetupLinesType
} from './CompensationReferencePointSetupLines';

/**
 * This class represents the entity "CompensationReferencePoints" of service "d365_metadata".
 */
export class CompensationReferencePoints<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationReferencePointsType<T>
{
  /**
   * Technical entity name for CompensationReferencePoints.
   */
  static override _entityName = 'CompensationReferencePoints';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationReferencePoints entity.
   */
  static _keys = ['dataAreaId', 'ReferenceSetup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference Setup.
   */
  declare referenceSetup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: HcmCompensationType | null;
  /**
   * One-to-many navigation property to the {@link CompensationGrids} entity.
   */
  declare compensationGrid: CompensationGrids<T>[];
  /**
   * One-to-many navigation property to the {@link DualWriteCompensationReferencePointSetupLines} entity.
   */
  declare dualWriteCompensationReferencePointSetupLine: DualWriteCompensationReferencePointSetupLines<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationReferencePointSetupLines} entity.
   */
  declare compensationReferencePointSetupLine: CompensationReferencePointSetupLines<T>[];

  constructor(_entityApi: CompensationReferencePointsApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationReferencePointsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  referenceSetup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  type?: HcmCompensationType | null;
  compensationGrid: CompensationGridsType<T>[];
  dualWriteCompensationReferencePointSetupLine: DualWriteCompensationReferencePointSetupLinesType<T>[];
  compensationReferencePointSetupLine: CompensationReferencePointSetupLinesType<T>[];
}
