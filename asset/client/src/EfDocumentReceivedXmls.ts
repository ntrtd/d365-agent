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
import type { EfDocumentReceivedXmlsApi } from './EfDocumentReceivedXmlsApi';
import { FiscalDocumentStatusBr } from './FiscalDocumentStatusBr';
import { NoYes } from './NoYes';
import {
  EfDocumentReceivedXmlViewLines,
  EfDocumentReceivedXmlViewLinesType
} from './EfDocumentReceivedXmlViewLines';

/**
 * This class represents the entity "EFDocumentReceivedXmls" of service "d365_metadata".
 */
export class EfDocumentReceivedXmls<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EfDocumentReceivedXmlsType<T>
{
  /**
   * Technical entity name for EfDocumentReceivedXmls.
   */
  static override _entityName = 'EFDocumentReceivedXmls';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EfDocumentReceivedXmls entity.
   */
  static _keys = ['dataAreaId', 'Accesskey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Accesskey.
   */
  declare accesskey: DeserializedType<T, 'Edm.String'>;
  /**
   * Street Name.
   * @nullable
   */
  declare streetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Name.
   * @nullable
   */
  declare thirdPartyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Icms Base Amount.
   */
  declare icmsBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Amount.
   */
  declare totalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status From Sefaz.
   * @nullable
   */
  declare statusFromSefaz?: FiscalDocumentStatusBr | null;
  /**
   * Third Party Cnpj.
   * @nullable
   */
  declare thirdPartyCnpj?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date And Time Of The Last Inquiry.
   */
  declare dateAndTimeOfTheLastInquiry: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Issue Timezone.
   * @nullable
   */
  declare issueTimezone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Markup Freight Amount.
   */
  declare totalMarkupFreightAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Discount.
   */
  declare totalDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Icms Amount.
   */
  declare icmsAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * City Name.
   * @nullable
   */
  declare cityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Iest.
   * @nullable
   */
  declare thirdPartyIest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Time.
   */
  declare issueTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Markup Other Amount.
   */
  declare totalMarkupOtherAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Business Document Id.
   */
  declare businessDocumentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Cnpj.
   * @nullable
   */
  declare cnpj?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Establishment Id.
   * @nullable
   */
  declare fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number.
   * @nullable
   */
  declare number?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Information.
   * @nullable
   */
  declare additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Ibge Code.
   * @nullable
   */
  declare cityIbgeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Series.
   * @nullable
   */
  declare series?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ibge Code.
   * @nullable
   */
  declare ibgeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Insertion.
   * @nullable
   */
  declare manualInsertion?: NoYes | null;
  /**
   * State Id.
   * @nullable
   */
  declare stateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District Name.
   * @nullable
   */
  declare districtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Return Code.
   * @nullable
   */
  declare returnCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Number.
   * @nullable
   */
  declare streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Ie.
   * @nullable
   */
  declare thirdPartyIe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Complementary Information.
   * @nullable
   */
  declare complementaryInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Date.
   */
  declare issueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Product Amount.
   */
  declare totalProductAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Icmsst Base Amount.
   */
  declare icmsstBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Markup Insurance Amount.
   */
  declare totalMarkupInsuranceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ipi Amount.
   */
  declare ipiAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Icmsst Amount.
   */
  declare icmsstAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Building Complement.
   * @nullable
   */
  declare buildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EfDocumentReceivedXmlViewLines} entity.
   */
  declare efDocumentReceivedXmlViewLine: EfDocumentReceivedXmlViewLines<T>[];

  constructor(_entityApi: EfDocumentReceivedXmlsApi<T>) {
    super(_entityApi);
  }
}

export interface EfDocumentReceivedXmlsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accesskey: DeserializedType<T, 'Edm.String'>;
  streetName?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyName?: DeserializedType<T, 'Edm.String'> | null;
  icmsBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalAmount: DeserializedType<T, 'Edm.Decimal'>;
  statusFromSefaz?: FiscalDocumentStatusBr | null;
  thirdPartyCnpj?: DeserializedType<T, 'Edm.String'> | null;
  dateAndTimeOfTheLastInquiry: DeserializedType<T, 'Edm.DateTimeOffset'>;
  issueTimezone?: DeserializedType<T, 'Edm.String'> | null;
  totalMarkupFreightAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscount: DeserializedType<T, 'Edm.Decimal'>;
  icmsAmount: DeserializedType<T, 'Edm.Decimal'>;
  cityName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyIest?: DeserializedType<T, 'Edm.String'> | null;
  issueTime: DeserializedType<T, 'Edm.Int32'>;
  totalMarkupOtherAmount: DeserializedType<T, 'Edm.Decimal'>;
  businessDocumentId: DeserializedType<T, 'Edm.Guid'>;
  cnpj?: DeserializedType<T, 'Edm.String'> | null;
  fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  number?: DeserializedType<T, 'Edm.String'> | null;
  additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  cityIbgeCode?: DeserializedType<T, 'Edm.String'> | null;
  series?: DeserializedType<T, 'Edm.String'> | null;
  ibgeCode?: DeserializedType<T, 'Edm.String'> | null;
  manualInsertion?: NoYes | null;
  stateId?: DeserializedType<T, 'Edm.String'> | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  returnCode?: DeserializedType<T, 'Edm.String'> | null;
  streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyIe?: DeserializedType<T, 'Edm.String'> | null;
  complementaryInformation?: DeserializedType<T, 'Edm.String'> | null;
  issueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalProductAmount: DeserializedType<T, 'Edm.Decimal'>;
  icmsstBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalMarkupInsuranceAmount: DeserializedType<T, 'Edm.Decimal'>;
  ipiAmount: DeserializedType<T, 'Edm.Decimal'>;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  icmsstAmount: DeserializedType<T, 'Edm.Decimal'>;
  buildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  efDocumentReceivedXmlViewLine: EfDocumentReceivedXmlViewLinesType<T>[];
}
