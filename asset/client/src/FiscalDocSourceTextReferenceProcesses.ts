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
import type { FiscalDocSourceTextReferenceProcessesApi } from './FiscalDocSourceTextReferenceProcessesApi';
import { AgencyBr } from './AgencyBr';
import { ConcessionaryActTypeBr } from './ConcessionaryActTypeBr';
import {
  FiscalDocumentSourceTexts,
  FiscalDocumentSourceTextsType
} from './FiscalDocumentSourceTexts';

/**
 * This class represents the entity "FiscalDocSourceTextReferenceProcesses" of service "d365_metadata".
 */
export class FiscalDocSourceTextReferenceProcesses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalDocSourceTextReferenceProcessesType<T>
{
  /**
   * Technical entity name for FiscalDocSourceTextReferenceProcesses.
   */
  static override _entityName = 'FiscalDocSourceTextReferenceProcesses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalDocSourceTextReferenceProcesses entity.
   */
  static _keys = [
    'dataAreaId',
    'FiscalDocumentText',
    'Agency',
    'ReferenceProcessNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Document Text.
   */
  declare fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  /**
   * Agency.
   * @nullable
   */
  declare agency?: AgencyBr | null;
  /**
   * Reference Process Number.
   */
  declare referenceProcessNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Concessionary Act Type.
   * @nullable
   */
  declare concessionaryActType?: ConcessionaryActTypeBr | null;
  /**
   * One-to-one navigation property to the {@link FiscalDocumentSourceTexts} entity.
   */
  declare fiscalDocumentSourceText?: FiscalDocumentSourceTexts<T> | null;

  constructor(_entityApi: FiscalDocSourceTextReferenceProcessesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalDocSourceTextReferenceProcessesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  agency?: AgencyBr | null;
  referenceProcessNumber: DeserializedType<T, 'Edm.String'>;
  concessionaryActType?: ConcessionaryActTypeBr | null;
  fiscalDocumentSourceText?: FiscalDocumentSourceTextsType<T> | null;
}
