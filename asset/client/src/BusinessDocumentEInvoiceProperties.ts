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
import type { BusinessDocumentEInvoicePropertiesApi } from './BusinessDocumentEInvoicePropertiesApi';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';

/**
 * This class represents the entity "BusinessDocumentEInvoiceProperties" of service "d365_metadata".
 */
export class BusinessDocumentEInvoiceProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentEInvoicePropertiesType<T>
{
  /**
   * Technical entity name for BusinessDocumentEInvoiceProperties.
   */
  static override _entityName = 'BusinessDocumentEInvoiceProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentEInvoiceProperties entity.
   */
  static _keys = ['PropertyTypeRecId'];
  /**
   * Property Type Rec Id.
   */
  declare propertyTypeRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBases<T> | null;

  constructor(_entityApi: BusinessDocumentEInvoicePropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessDocumentEInvoicePropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  propertyTypeRecId: DeserializedType<T, 'Edm.Int64'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  type?: DeserializedType<T, 'Edm.String'> | null;
  businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBasesType<T> | null;
}
