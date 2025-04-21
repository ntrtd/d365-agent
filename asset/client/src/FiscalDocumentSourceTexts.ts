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
import type { FiscalDocumentSourceTextsApi } from './FiscalDocumentSourceTextsApi';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
import {
  FiscalDocSourceTextReferenceProcesses,
  FiscalDocSourceTextReferenceProcessesType
} from './FiscalDocSourceTextReferenceProcesses';

/**
 * This class represents the entity "FiscalDocumentSourceTexts" of service "d365_metadata".
 */
export class FiscalDocumentSourceTexts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalDocumentSourceTextsType<T>
{
  /**
   * Technical entity name for FiscalDocumentSourceTexts.
   */
  static override _entityName = 'FiscalDocumentSourceTexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalDocumentSourceTexts entity.
   */
  static _keys = ['dataAreaId', 'FiscalDocumentText'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Document Text.
   */
  declare fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Information.
   * @nullable
   */
  declare fiscalInformation?: NoYes | null;
  /**
   * Restriction.
   * @nullable
   */
  declare restriction?: DocuRestriction | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FiscalDocSourceTextReferenceProcesses} entity.
   */
  declare fiscalDocSourceTextReferenceProcess: FiscalDocSourceTextReferenceProcesses<T>[];

  constructor(_entityApi: FiscalDocumentSourceTextsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalDocumentSourceTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  fiscalInformation?: NoYes | null;
  restriction?: DocuRestriction | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocSourceTextReferenceProcess: FiscalDocSourceTextReferenceProcessesType<T>[];
}
