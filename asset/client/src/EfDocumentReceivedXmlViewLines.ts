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
import type { EfDocumentReceivedXmlViewLinesApi } from './EfDocumentReceivedXmlViewLinesApi';
import {
  EfDocumentReceivedXmls,
  EfDocumentReceivedXmlsType
} from './EfDocumentReceivedXmls';

/**
 * This class represents the entity "EFDocumentReceivedXmlViewLines" of service "d365_metadata".
 */
export class EfDocumentReceivedXmlViewLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EfDocumentReceivedXmlViewLinesType<T>
{
  /**
   * Technical entity name for EfDocumentReceivedXmlViewLines.
   */
  static override _entityName = 'EFDocumentReceivedXmlViewLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EfDocumentReceivedXmlViewLines entity.
   */
  static _keys = ['dataAreaId', 'EFDocumentReceivedXmlView_BR', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ef Document Received Xml View Br.
   */
  declare efDocumentReceivedXmlViewBr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cfop.
   * @nullable
   */
  declare cfop?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fcp St Base Amount.
   */
  declare fcpStBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount.
   */
  declare discount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Markup Freight Amount.
   */
  declare totalMarkupFreightAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Icms St Value.
   */
  declare icmsStValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ipi Base Amount.
   */
  declare ipiBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fcp St Amount.
   */
  declare fcpStAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fcp St Value.
   */
  declare fcpStValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fci Number.
   * @nullable
   */
  declare fciNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Icms Value.
   */
  declare icmsValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Fiscal Classification.
   * @nullable
   */
  declare taxFiscalClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Icms St Base Amount.
   */
  declare icmsStBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Icms St Amount.
   */
  declare icmsStAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gross Amount.
   */
  declare grossAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Markup Other Amount.
   */
  declare totalMarkupOtherAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Icms Base Amount.
   */
  declare icmsBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Icms Amount.
   */
  declare icmsAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Information.
   * @nullable
   */
  declare additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ipi Amount.
   */
  declare ipiAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cst.
   * @nullable
   */
  declare cst?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ipi Value.
   */
  declare ipiValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Markup Insurance Amount.
   */
  declare totalMarkupInsuranceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link EfDocumentReceivedXmls} entity.
   */
  declare efDocumentReceivedXml?: EfDocumentReceivedXmls<T> | null;

  constructor(_entityApi: EfDocumentReceivedXmlViewLinesApi<T>) {
    super(_entityApi);
  }
}

export interface EfDocumentReceivedXmlViewLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  efDocumentReceivedXmlViewBr: DeserializedType<T, 'Edm.Int64'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  cfop?: DeserializedType<T, 'Edm.String'> | null;
  fcpStBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  discount: DeserializedType<T, 'Edm.Decimal'>;
  totalMarkupFreightAmount: DeserializedType<T, 'Edm.Decimal'>;
  icmsStValue: DeserializedType<T, 'Edm.Decimal'>;
  ipiBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  fcpStAmount: DeserializedType<T, 'Edm.Decimal'>;
  fcpStValue: DeserializedType<T, 'Edm.Decimal'>;
  fciNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  icmsValue: DeserializedType<T, 'Edm.Decimal'>;
  taxFiscalClassification?: DeserializedType<T, 'Edm.String'> | null;
  icmsStBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  icmsStAmount: DeserializedType<T, 'Edm.Decimal'>;
  grossAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalMarkupOtherAmount: DeserializedType<T, 'Edm.Decimal'>;
  icmsBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  icmsAmount: DeserializedType<T, 'Edm.Decimal'>;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  ipiAmount: DeserializedType<T, 'Edm.Decimal'>;
  cst?: DeserializedType<T, 'Edm.String'> | null;
  ipiValue: DeserializedType<T, 'Edm.Decimal'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  totalMarkupInsuranceAmount: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  efDocumentReceivedXml?: EfDocumentReceivedXmlsType<T> | null;
}
