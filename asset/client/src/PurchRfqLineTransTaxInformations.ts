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
import type { PurchRfqLineTransTaxInformationsApi } from './PurchRfqLineTransTaxInformationsApi';
import { NoYes } from './NoYes';
import { GtaServiceCategoryIn } from './GtaServiceCategoryIn';
import { DirectSettlementIn } from './DirectSettlementIn';
import { TransTaxInformationTypeIn } from './TransTaxInformationTypeIn';
import { DirectionIn } from './DirectionIn';
import { ExciseTypeIn } from './ExciseTypeIn';
import { DisposalTypeIn } from './DisposalTypeIn';
import { VatGoodsTypeIn } from './VatGoodsTypeIn';
import { ServiceCategoryIn } from './ServiceCategoryIn';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
import { ItcCategoryIn } from './ItcCategoryIn';

/**
 * This class represents the entity "PurchRFQLineTransTaxInformations" of service "d365_metadata".
 */
export class PurchRfqLineTransTaxInformations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchRfqLineTransTaxInformationsType<T>
{
  /**
   * Technical entity name for PurchRfqLineTransTaxInformations.
   */
  static override _entityName = 'PurchRFQLineTransTaxInformations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchRfqLineTransTaxInformations entity.
   */
  static _keys = [];
  /**
   * Tax Withhold Acknowledgement Number.
   * @nullable
   */
  declare taxWithholdAcknowledgementNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rfq Id.
   * @nullable
   */
  declare rfqId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt.
   * @nullable
   */
  declare exempt?: NoYes | null;
  /**
   * Vat Non Recoverable Percent.
   */
  declare vatNonRecoverablePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Tax Gta Service Category.
   * @nullable
   */
  declare serviceTaxGtaServiceCategory?: GtaServiceCategoryIn | null;
  /**
   * Excise Direct Settlement.
   * @nullable
   */
  declare exciseDirectSettlement?: DirectSettlementIn | null;
  /**
   * Non Business Usage Percentage.
   */
  declare nonBusinessUsagePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Code.
   * @nullable
   */
  declare serviceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Tariff Code.
   * @nullable
   */
  declare customsTariffCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Dsa.
   * @nullable
   */
  declare exciseDsa?: NoYes | null;
  /**
   * Bank Location.
   * @nullable
   */
  declare bankLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Tax Is Recoverable.
   * @nullable
   */
  declare serviceTaxIsRecoverable?: NoYes | null;
  /**
   * Service Accounting Code.
   * @nullable
   */
  declare serviceAccountingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: TransTaxInformationTypeIn | null;
  /**
   * Tax Invent Vat Item Id.
   * @nullable
   */
  declare taxInventVatItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Tax Information.
   * @nullable
   */
  declare companyTaxInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Location.
   * @nullable
   */
  declare companyLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Nature Of Remittance.
   * @nullable
   */
  declare taxWithholdNatureOfRemittance?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vattin Registration Number.
   * @nullable
   */
  declare vattinRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Id.
   * @nullable
   */
  declare taxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Tax Information.
   * @nullable
   */
  declare vendorTaxInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Tax Information.
   * @nullable
   */
  declare bankTaxInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hsn Code.
   * @nullable
   */
  declare hsnCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Consignment.
   * @nullable
   */
  declare exciseConsignment?: NoYes | null;
  /**
   * Tax Withhold Software Decl Received.
   * @nullable
   */
  declare taxWithholdSoftwareDeclReceived?: NoYes | null;
  /**
   * Excise Tariff Codes.
   * @nullable
   */
  declare exciseTariffCodes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Tax Consignment Note Num.
   * @nullable
   */
  declare serviceTaxConsignmentNoteNum?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customs Tariff Direction.
   * @nullable
   */
  declare customsTariffDirection?: DirectionIn | null;
  /**
   * Excise Type.
   * @nullable
   */
  declare exciseType?: ExciseTypeIn | null;
  /**
   * Non Gst.
   * @nullable
   */
  declare nonGst?: NoYes | null;
  /**
   * Direction.
   * @nullable
   */
  declare direction?: DirectionIn | null;
  /**
   * Excise Disposal Type.
   * @nullable
   */
  declare exciseDisposalType?: DisposalTypeIn | null;
  /**
   * Customer Location.
   * @nullable
   */
  declare customerLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incl Tax.
   * @nullable
   */
  declare inclTax?: NoYes | null;
  /**
   * Vat Goods Type.
   * @nullable
   */
  declare vatGoodsType?: VatGoodsTypeIn | null;
  /**
   * Gstin Registration Number.
   * @nullable
   */
  declare gstinRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Cenvat Credit Availed.
   * @nullable
   */
  declare exciseCenvatCreditAvailed?: NoYes | null;
  /**
   * Tax Rate Type.
   * @nullable
   */
  declare taxRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Schedule.
   * @nullable
   */
  declare vatSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Registration Number.
   * @nullable
   */
  declare salesTaxRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Commodity Code.
   * @nullable
   */
  declare vatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Tax Information.
   * @nullable
   */
  declare customerTaxInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Tax Registration Number.
   * @nullable
   */
  declare serviceTaxRegistrationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Category.
   * @nullable
   */
  declare serviceCategory?: ServiceCategoryIn | null;
  /**
   * Excise Ecc Registration Number.
   * @nullable
   */
  declare exciseEccRegistrationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cst Schedule.
   * @nullable
   */
  declare cstSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Record Type.
   * @nullable
   */
  declare exciseRecordType?: ExciseRecordTypeIn | null;
  /**
   * Data Area Id.
   * @nullable
   */
  declare dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tan Registration Number.
   * @nullable
   */
  declare tanRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Form Types.
   * @nullable
   */
  declare salesTaxFormTypes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Country Region To Remittance.
   * @nullable
   */
  declare taxWithholdCountryRegionToRemittance?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customs Iec Registration Number.
   * @nullable
   */
  declare customsIecRegistrationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Withhold Nature Of Assessee.
   * @nullable
   */
  declare taxWithholdNatureOfAssessee?: NatureOfAssesseeIn | null;
  /**
   * Itc Category.
   * @nullable
   */
  declare itcCategory?: ItcCategoryIn | null;
  /**
   * Vendor Location.
   * @nullable
   */
  declare vendorLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Is Scrap.
   * @nullable
   */
  declare exciseIsScrap?: NoYes | null;

  constructor(_entityApi: PurchRfqLineTransTaxInformationsApi<T>) {
    super(_entityApi);
  }
}

export interface PurchRfqLineTransTaxInformationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  taxWithholdAcknowledgementNumber?: DeserializedType<T, 'Edm.String'> | null;
  rfqId?: DeserializedType<T, 'Edm.String'> | null;
  exempt?: NoYes | null;
  vatNonRecoverablePercent: DeserializedType<T, 'Edm.Decimal'>;
  serviceTaxGtaServiceCategory?: GtaServiceCategoryIn | null;
  exciseDirectSettlement?: DirectSettlementIn | null;
  nonBusinessUsagePercentage: DeserializedType<T, 'Edm.Decimal'>;
  serviceCode?: DeserializedType<T, 'Edm.String'> | null;
  customsTariffCode?: DeserializedType<T, 'Edm.String'> | null;
  exciseDsa?: NoYes | null;
  bankLocation?: DeserializedType<T, 'Edm.String'> | null;
  serviceTaxIsRecoverable?: NoYes | null;
  serviceAccountingCode?: DeserializedType<T, 'Edm.String'> | null;
  type?: TransTaxInformationTypeIn | null;
  taxInventVatItemId?: DeserializedType<T, 'Edm.String'> | null;
  companyTaxInformation?: DeserializedType<T, 'Edm.String'> | null;
  companyLocation?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdNatureOfRemittance?: DeserializedType<T, 'Edm.String'> | null;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  vattinRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxId?: DeserializedType<T, 'Edm.String'> | null;
  vendorTaxInformation?: DeserializedType<T, 'Edm.String'> | null;
  bankTaxInformation?: DeserializedType<T, 'Edm.String'> | null;
  hsnCode?: DeserializedType<T, 'Edm.String'> | null;
  exciseConsignment?: NoYes | null;
  taxWithholdSoftwareDeclReceived?: NoYes | null;
  exciseTariffCodes?: DeserializedType<T, 'Edm.String'> | null;
  serviceTaxConsignmentNoteNum?: DeserializedType<T, 'Edm.String'> | null;
  customsTariffDirection?: DirectionIn | null;
  exciseType?: ExciseTypeIn | null;
  nonGst?: NoYes | null;
  direction?: DirectionIn | null;
  exciseDisposalType?: DisposalTypeIn | null;
  customerLocation?: DeserializedType<T, 'Edm.String'> | null;
  inclTax?: NoYes | null;
  vatGoodsType?: VatGoodsTypeIn | null;
  gstinRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  exciseCenvatCreditAvailed?: NoYes | null;
  taxRateType?: DeserializedType<T, 'Edm.String'> | null;
  vatSchedule?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  vatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  customerTaxInformation?: DeserializedType<T, 'Edm.String'> | null;
  serviceTaxRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceCategory?: ServiceCategoryIn | null;
  exciseEccRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  cstSchedule?: DeserializedType<T, 'Edm.String'> | null;
  exciseRecordType?: ExciseRecordTypeIn | null;
  dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  tanRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxFormTypes?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdCountryRegionToRemittance?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  customsIecRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdNatureOfAssessee?: NatureOfAssesseeIn | null;
  itcCategory?: ItcCategoryIn | null;
  vendorLocation?: DeserializedType<T, 'Edm.String'> | null;
  exciseIsScrap?: NoYes | null;
}
