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
import type { DualWriteCompensationReferencePointSetupLinesApi } from './DualWriteCompensationReferencePointSetupLinesApi';
import {
  CompensationReferencePoints,
  CompensationReferencePointsType
} from './CompensationReferencePoints';

/**
 * This class represents the entity "DualWriteCompensationReferencePointSetupLines" of service "d365_metadata".
 */
export class DualWriteCompensationReferencePointSetupLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DualWriteCompensationReferencePointSetupLinesType<T>
{
  /**
   * Technical entity name for DualWriteCompensationReferencePointSetupLines.
   */
  static override _entityName = 'DualWriteCompensationReferencePointSetupLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DualWriteCompensationReferencePointSetupLines entity.
   */
  static _keys = ['dataAreaId', 'RefPointSetupId', 'RefPointId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Point Setup Id.
   */
  declare refPointSetupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Point Id.
   */
  declare refPointId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CompensationReferencePoints} entity.
   */
  declare referencePointSetup?: CompensationReferencePoints<T> | null;

  constructor(_entityApi: DualWriteCompensationReferencePointSetupLinesApi<T>) {
    super(_entityApi);
  }
}

export interface DualWriteCompensationReferencePointSetupLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  refPointSetupId: DeserializedType<T, 'Edm.String'>;
  refPointId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  referencePointSetup?: CompensationReferencePointsType<T> | null;
}
