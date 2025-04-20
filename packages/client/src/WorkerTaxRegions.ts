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
import type { WorkerTaxRegionsApi } from './WorkerTaxRegionsApi';
import { Workers, WorkersType } from './Workers';
import { TaxRegions, TaxRegionsType } from './TaxRegions';
import {
  PositionWorkerDefaultTaxRgns,
  PositionWorkerDefaultTaxRgnsType
} from './PositionWorkerDefaultTaxRgns';
import {
  WorkerResidentTaxRegions,
  WorkerResidentTaxRegionsType
} from './WorkerResidentTaxRegions';
import {
  PayStatementEarningLines,
  PayStatementEarningLinesType
} from './PayStatementEarningLines';

/**
 * This class represents the entity "WorkerTaxRegions" of service "d365_metadata".
 */
export class WorkerTaxRegions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerTaxRegionsType<T>
{
  /**
   * Technical entity name for WorkerTaxRegions.
   */
  static override _entityName = 'WorkerTaxRegions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerTaxRegions entity.
   */
  static _keys = ['PersonnelNumber', 'LocationId'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Id.
   */
  declare locationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Resident.
   * @nullable
   */
  declare isResident?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Political Sub Division Id.
   * @nullable
   */
  declare politicalSubDivisionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Municipality Id.
   * @nullable
   */
  declare municipalityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * School District Id.
   * @nullable
   */
  declare schoolDistrictId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxRegions} entity.
   */
  declare taxRegion?: TaxRegions<T> | null;
  /**
   * One-to-many navigation property to the {@link PositionWorkerDefaultTaxRgns} entity.
   */
  declare positionWorkerDefaultTaxRgn: PositionWorkerDefaultTaxRgns<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerResidentTaxRegions} entity.
   */
  declare workerResidentTaxRegion: WorkerResidentTaxRegions<T>[];
  /**
   * One-to-many navigation property to the {@link PayStatementEarningLines} entity.
   */
  declare payStatementEarningLine: PayStatementEarningLines<T>[];

  constructor(_entityApi: WorkerTaxRegionsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerTaxRegionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  locationId: DeserializedType<T, 'Edm.String'>;
  isResident?: DeserializedType<T, 'Edm.String'> | null;
  politicalSubDivisionId?: DeserializedType<T, 'Edm.String'> | null;
  municipalityId?: DeserializedType<T, 'Edm.String'> | null;
  schoolDistrictId?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
  taxRegion?: TaxRegionsType<T> | null;
  positionWorkerDefaultTaxRgn: PositionWorkerDefaultTaxRgnsType<T>[];
  workerResidentTaxRegion: WorkerResidentTaxRegionsType<T>[];
  payStatementEarningLine: PayStatementEarningLinesType<T>[];
}
