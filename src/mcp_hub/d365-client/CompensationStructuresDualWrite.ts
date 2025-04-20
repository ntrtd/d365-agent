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
import type { CompensationStructuresDualWriteApi } from './CompensationStructuresDualWriteApi';

/**
 * This class represents the entity "CompensationStructuresDualWrite" of service "d365_metadata".
 */
export class CompensationStructuresDualWrite<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationStructuresDualWriteType<T>
{
  /**
   * Technical entity name for CompensationStructuresDualWrite.
   */
  static override _entityName = 'CompensationStructuresDualWrite';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationStructuresDualWrite entity.
   */
  static _keys = [
    'dataAreaId',
    'Grid',
    'LevelId',
    'ReferencePointLineNumber',
    'ReferenceSetup'
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
   * Reference Point Line Number.
   */
  declare referencePointLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reference Setup.
   */
  declare referenceSetup: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reference Point.
   * @nullable
   */
  declare referencePoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * @nullable
   */
  declare companyCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CompensationStructuresDualWriteApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationStructuresDualWriteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  grid: DeserializedType<T, 'Edm.String'>;
  levelId: DeserializedType<T, 'Edm.String'>;
  referencePointLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  referenceSetup: DeserializedType<T, 'Edm.String'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  referencePoint?: DeserializedType<T, 'Edm.String'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
}
