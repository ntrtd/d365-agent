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
import type { GupSalesAutomaticSalesDocumentHeaderTaxChargesApi } from './GupSalesAutomaticSalesDocumentHeaderTaxChargesApi';

/**
 * This class represents the entity "GUPSalesAutomaticSalesDocumentHeaderTaxCharges" of service "d365_metadata".
 */
export class GupSalesAutomaticSalesDocumentHeaderTaxCharges<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GupSalesAutomaticSalesDocumentHeaderTaxChargesType<T>
{
  /**
   * Technical entity name for GupSalesAutomaticSalesDocumentHeaderTaxCharges.
   */
  static override _entityName =
    'GUPSalesAutomaticSalesDocumentHeaderTaxCharges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GupSalesAutomaticSalesDocumentHeaderTaxCharges entity.
   */
  static _keys = ['dataAreaId', 'Description', 'LineNum', 'TaxCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   */
  declare description: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;

  constructor(
    _entityApi: GupSalesAutomaticSalesDocumentHeaderTaxChargesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface GupSalesAutomaticSalesDocumentHeaderTaxChargesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
}
