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
import type { BusinessDocumentDocuRefsApi } from './BusinessDocumentDocuRefsApi';
import { DocuRestriction } from './DocuRestriction';
import {
  BusinessDocumentSalesInvoiceLineItems,
  BusinessDocumentSalesInvoiceLineItemsType
} from './BusinessDocumentSalesInvoiceLineItems';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';

/**
 * This class represents the entity "BusinessDocumentDocuRefs" of service "d365_metadata".
 */
export class BusinessDocumentDocuRefs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentDocuRefsType<T>
{
  /**
   * Technical entity name for BusinessDocumentDocuRefs.
   */
  static override _entityName = 'BusinessDocumentDocuRefs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentDocuRefs entity.
   */
  static _keys = ['DocuRefRecId'];
  /**
   * Docu Ref Rec Id.
   */
  declare docuRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Uri.
   * @nullable
   */
  declare uri?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Content Base 64.
   * @nullable
   */
  declare contentBase64?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restriction Str.
   * @nullable
   */
  declare restrictionStr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Type.
   * @nullable
   */
  declare fileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Type.
   * @nullable
   */
  declare documentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Id.
   * @nullable
   */
  declare typeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restriction.
   * @nullable
   */
  declare restriction?: DocuRestriction | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Content.
   * @nullable
   */
  declare content?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceLineItems} entity.
   */
  declare businessDocumentSalesInvoiceLineItem?: BusinessDocumentSalesInvoiceLineItems<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBases<T> | null;

  constructor(_entityApi: BusinessDocumentDocuRefsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessDocumentDocuRefsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docuRefRecId: DeserializedType<T, 'Edm.Int64'>;
  uri?: DeserializedType<T, 'Edm.String'> | null;
  contentBase64?: DeserializedType<T, 'Edm.String'> | null;
  restrictionStr?: DeserializedType<T, 'Edm.String'> | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  documentType?: DeserializedType<T, 'Edm.String'> | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
  restriction?: DocuRestriction | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  content?: DeserializedType<T, 'Edm.Binary'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  businessDocumentSalesInvoiceLineItem?: BusinessDocumentSalesInvoiceLineItemsType<T> | null;
  businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBasesType<T> | null;
}
