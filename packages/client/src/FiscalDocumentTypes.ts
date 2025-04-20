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
import type { FiscalDocumentTypesApi } from './FiscalDocumentTypesApi';
import { NoYes } from './NoYes';
import { FiscalDocumentSpecieBr } from './FiscalDocumentSpecieBr';

/**
 * This class represents the entity "FiscalDocumentTypes" of service "d365_metadata".
 */
export class FiscalDocumentTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FiscalDocumentTypesType<T>
{
  /**
   * Technical entity name for FiscalDocumentTypes.
   */
  static override _entityName = 'FiscalDocumentTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalDocumentTypes entity.
   */
  static _keys = ['dataAreaId', 'FiscalEstablishmentId', 'FiscalDocumentType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Establishment Id.
   */
  declare fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Document Type.
   */
  declare fiscalDocumentType: DeserializedType<T, 'Edm.String'>;
  /**
   * Max Item Lines.
   */
  declare maxItemLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Max Installments.
   */
  declare maxInstallments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Max Service Item Description.
   */
  declare maxServiceItemDescription: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Fiscal Document For Services.
   * @nullable
   */
  declare electronicFiscalDocumentForServices?: NoYes | null;
  /**
   * Max Memo Description Size.
   */
  declare maxMemoDescriptionSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fiscal Document Issue Date.
   */
  declare fiscalDocumentIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Memo Lines.
   */
  declare maxMemoLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cut Off Item Description.
   * @nullable
   */
  declare cutOffItemDescription?: NoYes | null;
  /**
   * Er Export Format Vendor Url.
   * @nullable
   */
  declare erExportFormatVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return File Layout Group.
   * @nullable
   */
  declare returnFileLayoutGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cut Off Service Item Description.
   * @nullable
   */
  declare cutOffServiceItemDescription?: NoYes | null;
  /**
   * Er Export Format Solution Name.
   * @nullable
   */
  declare erExportFormatSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Model.
   * @nullable
   */
  declare documentModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Specie.
   * @nullable
   */
  declare specie?: FiscalDocumentSpecieBr | null;
  /**
   * Export File Layout Group.
   * @nullable
   */
  declare exportFileLayoutGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Series.
   * @nullable
   */
  declare series?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cutoff Memo Description.
   * @nullable
   */
  declare cutoffMemoDescription?: NoYes | null;
  /**
   * Max Item Description Size.
   */
  declare maxItemDescriptionSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Er Export Format Mapping Name.
   * @nullable
   */
  declare erExportFormatMappingName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Number Sequence.
   * @nullable
   */
  declare fiscalDocumentNumberSequence?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Max Service Item Lines.
   */
  declare maxServiceItemLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Print Delivery Address At Memo.
   * @nullable
   */
  declare printDeliveryAddressAtMemo?: NoYes | null;

  constructor(_entityApi: FiscalDocumentTypesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalDocumentTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentType: DeserializedType<T, 'Edm.String'>;
  maxItemLines: DeserializedType<T, 'Edm.Int32'>;
  maxInstallments: DeserializedType<T, 'Edm.Int32'>;
  maxServiceItemDescription: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  electronicFiscalDocumentForServices?: NoYes | null;
  maxMemoDescriptionSize: DeserializedType<T, 'Edm.Int32'>;
  fiscalDocumentIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  maxMemoLines: DeserializedType<T, 'Edm.Int32'>;
  cutOffItemDescription?: NoYes | null;
  erExportFormatVendorUrl?: DeserializedType<T, 'Edm.String'> | null;
  returnFileLayoutGroup?: DeserializedType<T, 'Edm.String'> | null;
  cutOffServiceItemDescription?: NoYes | null;
  erExportFormatSolutionName?: DeserializedType<T, 'Edm.String'> | null;
  documentModel?: DeserializedType<T, 'Edm.String'> | null;
  specie?: FiscalDocumentSpecieBr | null;
  exportFileLayoutGroup?: DeserializedType<T, 'Edm.String'> | null;
  series?: DeserializedType<T, 'Edm.String'> | null;
  cutoffMemoDescription?: NoYes | null;
  maxItemDescriptionSize: DeserializedType<T, 'Edm.Int32'>;
  erExportFormatMappingName?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentNumberSequence?: DeserializedType<T, 'Edm.String'> | null;
  maxServiceItemLines: DeserializedType<T, 'Edm.Int32'>;
  printDeliveryAddressAtMemo?: NoYes | null;
}
