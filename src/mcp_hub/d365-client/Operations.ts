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
import type { OperationsApi } from './OperationsApi';
import {
  RouteCardProductionJournalEntries,
  RouteCardProductionJournalEntriesType
} from './RouteCardProductionJournalEntries';
import {
  JobCardProductionJournalEntries,
  JobCardProductionJournalEntriesType
} from './JobCardProductionJournalEntries';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import { PayAgreementLines, PayAgreementLinesType } from './PayAgreementLines';
import { RouteOperations, RouteOperationsType } from './RouteOperations';

/**
 * This class represents the entity "Operations" of service "d365_metadata".
 */
export class Operations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OperationsType<T>
{
  /**
   * Technical entity name for Operations.
   */
  static override _entityName = 'Operations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Operations entity.
   */
  static _keys = ['dataAreaId', 'OperationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Id.
   */
  declare operationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Name.
   * @nullable
   */
  declare operationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RouteCardProductionJournalEntries} entity.
   */
  declare routeCardProductionJournalEntries: RouteCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link JobCardProductionJournalEntries} entity.
   */
  declare jobCardProductionJournalEntries: JobCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PayAgreementLines} entity.
   */
  declare payAgreementLines: PayAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link RouteOperations} entity.
   */
  declare routeOperations: RouteOperations<T>[];

  constructor(_entityApi: OperationsApi<T>) {
    super(_entityApi);
  }
}

export interface OperationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operationId: DeserializedType<T, 'Edm.String'>;
  operationName?: DeserializedType<T, 'Edm.String'> | null;
  routeCardProductionJournalEntries: RouteCardProductionJournalEntriesType<T>[];
  jobCardProductionJournalEntries: JobCardProductionJournalEntriesType<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  payAgreementLines: PayAgreementLinesType<T>[];
  routeOperations: RouteOperationsType<T>[];
}
