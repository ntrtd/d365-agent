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
import type { VendInvoiceRegisterHeadersApi } from './VendInvoiceRegisterHeadersApi';
import { NoYes } from './NoYes';
import {
  VendInvoiceRegisterLines,
  VendInvoiceRegisterLinesType
} from './VendInvoiceRegisterLines';
import {
  VendInvoiceRegisterLinesV2,
  VendInvoiceRegisterLinesV2Type
} from './VendInvoiceRegisterLinesV2';

/**
 * This class represents the entity "VendInvoiceRegisterHeaders" of service "d365_metadata".
 */
export class VendInvoiceRegisterHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceRegisterHeadersType<T>
{
  /**
   * Technical entity name for VendInvoiceRegisterHeaders.
   */
  static override _entityName = 'VendInvoiceRegisterHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceRegisterHeaders entity.
   */
  static _keys = ['dataAreaId', 'JournalBatchNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Business Document Submission Id W.
   */
  declare businessDocumentSubmissionIdW: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Included.
   * @nullable
   */
  declare salesTaxIncluded?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link VendInvoiceRegisterLines} entity.
   */
  declare vendInvoiceRegisterLine: VendInvoiceRegisterLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceRegisterLinesV2} entity.
   */
  declare vendInvoiceRegisterLineV2: VendInvoiceRegisterLinesV2<T>[];

  constructor(_entityApi: VendInvoiceRegisterHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceRegisterHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  businessDocumentSubmissionIdW: DeserializedType<T, 'Edm.Guid'>;
  overrideSalesTax?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxIncluded?: NoYes | null;
  vendInvoiceRegisterLine: VendInvoiceRegisterLinesType<T>[];
  vendInvoiceRegisterLineV2: VendInvoiceRegisterLinesV2Type<T>[];
}
