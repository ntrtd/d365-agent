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
import type { CompensationGridsApi } from './CompensationGridsApi';
import { HcmCompensationType } from './HcmCompensationType';
import { Currencies, CurrenciesType } from './Currencies';
import {
  CompensationReferencePoints,
  CompensationReferencePointsType
} from './CompensationReferencePoints';
import {
  CompensationStructures,
  CompensationStructuresType
} from './CompensationStructures';
import {
  CompFixedPlanTables,
  CompFixedPlanTablesType
} from './CompFixedPlanTables';
import {
  PayIntV1CompFixedPlanTables,
  PayIntV1CompFixedPlanTablesType
} from './PayIntV1CompFixedPlanTables';
import {
  CompensationStructuresDualWriteV2,
  CompensationStructuresDualWriteV2Type
} from './CompensationStructuresDualWriteV2';

/**
 * This class represents the entity "CompensationGrids" of service "d365_metadata".
 */
export class CompensationGrids<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CompensationGridsType<T>
{
  /**
   * Technical entity name for CompensationGrids.
   */
  static override _entityName = 'CompensationGrids';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationGrids entity.
   */
  static _keys = ['dataAreaId', 'GridId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Grid Id.
   */
  declare gridId: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Setup.
   * @nullable
   */
  declare referenceSetup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: HcmCompensationType | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare compensationCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationReferencePoints} entity.
   */
  declare compensationReferencePoint?: CompensationReferencePoints<T> | null;
  /**
   * One-to-many navigation property to the {@link CompensationStructures} entity.
   */
  declare compensationStructures: CompensationStructures<T>[];
  /**
   * One-to-many navigation property to the {@link CompFixedPlanTables} entity.
   */
  declare compFixedPlanTable: CompFixedPlanTables<T>[];
  /**
   * One-to-many navigation property to the {@link PayIntV1CompFixedPlanTables} entity.
   */
  declare payIntV1CompFixedPlanTable: PayIntV1CompFixedPlanTables<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationStructuresDualWriteV2} entity.
   */
  declare compensationStructuresV2: CompensationStructuresDualWriteV2<T>[];

  constructor(_entityApi: CompensationGridsApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationGridsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  gridId: DeserializedType<T, 'Edm.String'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  referenceSetup?: DeserializedType<T, 'Edm.String'> | null;
  type?: HcmCompensationType | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compensationCurrency?: CurrenciesType<T> | null;
  compensationReferencePoint?: CompensationReferencePointsType<T> | null;
  compensationStructures: CompensationStructuresType<T>[];
  compFixedPlanTable: CompFixedPlanTablesType<T>[];
  payIntV1CompFixedPlanTable: PayIntV1CompFixedPlanTablesType<T>[];
  compensationStructuresV2: CompensationStructuresDualWriteV2Type<T>[];
}
