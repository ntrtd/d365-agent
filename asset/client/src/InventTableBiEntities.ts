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
import type { InventTableBiEntitiesApi } from './InventTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { Abc } from './Abc';
import { BomWhsReleasePolicy } from './BomWhsReleasePolicy';
import { PmfProductType } from './PmfProductType';
import { InventFiscalLifoNormalValueCalc } from './InventFiscalLifoNormalValueCalc';
import { SalesPriceModel } from './SalesPriceModel';
import { SalesPriceModelBasic } from './SalesPriceModelBasic';
import { FiTaxationOriginBr } from './FiTaxationOriginBr';
import { ProdFlushingPrincipItem } from './ProdFlushingPrincipItem';
import { PurchMatchingPolicyWithNotSetOption } from './PurchMatchingPolicyWithNotSetOption';
import { PdsPotencyAttribRecordingEnum } from './PdsPotencyAttribRecordingEnum';
import { ItemNumAlternative } from './ItemNumAlternative';
import { ScaleIndicatorBr } from './ScaleIndicatorBr';
import { InventBatchMergeDateCalculationMethod } from './InventBatchMergeDateCalculationMethod';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { ItemType } from './ItemType';
import { PdsVendorCheckItem } from './PdsVendorCheckItem';

/**
 * This class represents the entity "InventTableBiEntities" of service "d365_metadata".
 */
export class InventTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventTableBiEntitiesType<T>
{
  /**
   * Technical entity name for InventTableBiEntities.
   */
  static override _entityName = 'InventTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'ItemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Scrap Const.
   */
  declare scrapConst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Nr Tax Group Lv.
   * @nullable
   */
  declare nrTaxGroupLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Model.
   * @nullable
   */
  declare costModel?: NoYes | null;
  /**
   * Exempt In.
   * @nullable
   */
  declare exemptIn?: NoYes | null;
  /**
   * Abc Value.
   * @nullable
   */
  declare abcValue?: Abc | null;
  /**
   * Display Hazard Mx.
   * @nullable
   */
  declare displayHazardMx?: NoYes | null;
  /**
   * Wms Arrival Handling Time.
   */
  declare wmsArrivalHandlingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customs Export Tariff Code Table In.
   */
  declare customsExportTariffCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Intrastat Charge Per Kg.
   */
  declare intrastatChargePerKg: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packaging Group Id.
   * @nullable
   */
  declare packagingGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Best Before.
   */
  declare pdsBestBefore: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invent Product Type Br.
   * @nullable
   */
  declare inventProductTypeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bom Whs Release Policy.
   * @nullable
   */
  declare bomWhsReleasePolicy?: BomWhsReleasePolicy | null;
  /**
   * Sys Created Date Time.
   */
  declare sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Orig State Id.
   * @nullable
   */
  declare origStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pmf Product Type.
   * @nullable
   */
  declare pmfProductType?: PmfProductType | null;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Lifo Normal Value Calc.
   * @nullable
   */
  declare fiscalLifoNormalValueCalc?: InventFiscalLifoNormalValueCalc | null;
  /**
   * Prevent Physical Dimension Sync.
   * @nullable
   */
  declare preventPhysicalDimensionSync?: NoYes | null;
  /**
   * Standard Config Id.
   * @nullable
   */
  declare standardConfigId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Model.
   * @nullable
   */
  declare salesModel?: SalesPriceModel | null;
  /**
   * Pmf Yield Pct.
   */
  declare pmfYieldPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Coo Dual Use Code.
   * @nullable
   */
  declare cooDualUseCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exception Code Br.
   * @nullable
   */
  declare exceptionCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Volume.
   */
  declare unitVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packing Ru.
   * @nullable
   */
  declare packingRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pk Wi U Code Pl.
   * @nullable
   */
  declare pkWiUCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Model Basic.
   * @nullable
   */
  declare salesPriceModelBasic?: SalesPriceModelBasic | null;
  /**
   * Excise Tariff Codes In.
   */
  declare exciseTariffCodesIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Service Code Br.
   * @nullable
   */
  declare taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exim Product Group Table In.
   */
  declare eximProductGroupTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purch Model.
   * @nullable
   */
  declare purchModel?: NoYes | null;
  /**
   * Fiscal Lifo Normal Value.
   */
  declare fiscalLifoNormalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Taxation Origin Br.
   * @nullable
   */
  declare taxationOriginBr?: FiTaxationOriginBr | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Accounting Code Table In.
   */
  declare serviceAccountingCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Height.
   */
  declare height: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ngp Codes Table Fr.
   */
  declare ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Id Ru.
   * @nullable
   */
  declare assetIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product.
   */
  declare product: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Standard Invent Version Id.
   * @nullable
   */
  declare standardInventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sad Rate Code Pl.
   * @nullable
   */
  declare sadRateCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt Invent Style Id.
   * @nullable
   */
  declare altInventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Group Id Ru.
   * @nullable
   */
  declare assetGroupIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auto Report Finished.
   * @nullable
   */
  declare autoReportFinished?: NoYes | null;
  /**
   * Skip Intra Company Sync Ru.
   * @nullable
   */
  declare skipIntraCompanySyncRu?: NoYes | null;
  /**
   * Prod Flushing Princip.
   * @nullable
   */
  declare prodFlushingPrincip?: ProdFlushingPrincipItem | null;
  /**
   * Tara Weight.
   */
  declare taraWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Coo Dual Use Product.
   * @nullable
   */
  declare cooDualUseProduct?: NoYes | null;
  /**
   * Prod Group Id.
   * @nullable
   */
  declare prodGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Import Tariff Code Table In.
   */
  declare customsImportTariffCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bom Manual Receipt.
   * @nullable
   */
  declare bomManualReceipt?: NoYes | null;
  /**
   * Fiscal Lifo Avoid Calc.
   * @nullable
   */
  declare fiscalLifoAvoidCalc?: NoYes | null;
  /**
   * Matching Policy.
   * @nullable
   */
  declare matchingPolicy?: PurchMatchingPolicyWithNotSetOption | null;
  /**
   * Markup Code Ru.
   * @nullable
   */
  declare markupCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Group Id.
   * @nullable
   */
  declare costGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Code Table In.
   */
  declare serviceCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pds Potency Attrib Recording.
   * @nullable
   */
  declare pdsPotencyAttribRecording?: PdsPotencyAttribRecordingEnum | null;
  /**
   * Depth.
   */
  declare depth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Serial Num Group Id.
   * @nullable
   */
  declare serialNumGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Alt Item Id.
   * @nullable
   */
  declare useAltItemId?: ItemNumAlternative | null;
  /**
   * Density.
   */
  declare density: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sort Code.
   */
  declare sortCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scale Indicator Br.
   * @nullable
   */
  declare scaleIndicatorBr?: ScaleIndicatorBr | null;
  /**
   * Sales Percent Markup.
   */
  declare salesPercentMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Shelf Advice.
   */
  declare pdsShelfAdvice: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Batch Merge Date Calculation Method.
   * @nullable
   */
  declare batchMergeDateCalculationMethod?: InventBatchMergeDateCalculationMethod | null;
  /**
   * Gross Depth.
   */
  declare grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pmf Planning Item Id.
   * @nullable
   */
  declare pmfPlanningItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Price Tolerance Group Id.
   * @nullable
   */
  declare itemPriceToleranceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Lifecycle State Id.
   * @nullable
   */
  declare productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard Invent Size Id.
   * @nullable
   */
  declare standardInventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Width.
   */
  declare width: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Excise Record Type In.
   * @nullable
   */
  declare exciseRecordTypeIn?: ExciseRecordTypeIn | null;
  /**
   * Dsa In.
   * @nullable
   */
  declare dsaIn?: NoYes | null;
  /**
   * Orig County Id.
   * @nullable
   */
  declare origCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Height.
   */
  declare grossHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Statistics Factor.
   */
  declare statisticsFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Freight Allocation Group Id.
   * @nullable
   */
  declare pdsFreightAllocationGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Icms On Service Br.
   * @nullable
   */
  declare icmsOnServiceBr?: NoYes | null;
  /**
   * Hmim Indicator.
   * @nullable
   */
  declare hmimIndicator?: NoYes | null;
  /**
   * Forecast Dmp Include.
   * @nullable
   */
  declare forecastDmpInclude?: NoYes | null;
  /**
   * Sat Tariff Fraction Mx.
   * @nullable
   */
  declare satTariffFractionMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phantom.
   * @nullable
   */
  declare phantom?: NoYes | null;
  /**
   * Intracode.
   * @nullable
   */
  declare intracode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prod Pool Id.
   * @nullable
   */
  declare prodPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approx Tax Value Br.
   */
  declare approxTaxValueBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Alcohol Production Type Id Ru.
   * @nullable
   */
  declare alcoholProductionTypeIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Notes Group It.
   * @nullable
   */
  declare freeNotesGroupIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard Invent Style Id.
   * @nullable
   */
  declare standardInventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bom Unit Id.
   * @nullable
   */
  declare bomUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hsn Code Table In.
   */
  declare hsnCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Commission Group Id.
   * @nullable
   */
  declare commissionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Type.
   * @nullable
   */
  declare itemType?: ItemType | null;
  /**
   * Pds Item Rebate Group Id.
   * @nullable
   */
  declare pdsItemRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Abc Tie Up.
   * @nullable
   */
  declare abcTieUp?: Abc | null;
  /**
   * Item Buyer Group Id.
   * @nullable
   */
  declare itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bom Calc Group Id.
   * @nullable
   */
  declare bomCalcGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alcohol Manufacturer Id Ru.
   * @nullable
   */
  declare alcoholManufacturerIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Exclude.
   * @nullable
   */
  declare intrastatExclude?: NoYes | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Proc Id Cz.
   * @nullable
   */
  declare intrastatProcIdCz?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Abc Revenue.
   * @nullable
   */
  declare abcRevenue?: Abc | null;
  /**
   * Bom Level.
   */
  declare bomLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cost Bom Level.
   */
  declare costBomLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pds Base Attribute Id.
   * @nullable
   */
  declare pdsBaseAttributeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Brand Code Id Mx.
   * @nullable
   */
  declare brandCodeIdMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Vendor Check Item.
   * @nullable
   */
  declare pdsVendorCheckItem?: PdsVendorCheckItem | null;
  /**
   * Alt Config Id.
   * @nullable
   */
  declare altConfigId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Shelf Life.
   */
  declare pdsShelfLife: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Primary Vendor Id.
   * @nullable
   */
  declare primaryVendorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sat Code Id Mx.
   * @nullable
   */
  declare satCodeIdMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Dim Cost Price.
   * @nullable
   */
  declare itemDimCostPrice?: NoYes | null;
  /**
   * Net Weight.
   */
  declare netWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Orig Country Region Id.
   * @nullable
   */
  declare origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Rate Type.
   */
  declare taxRateType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Req Group Id.
   * @nullable
   */
  declare reqGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt Invent Size Id.
   * @nullable
   */
  declare altInventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alcohol Strength Ru.
   */
  declare alcoholStrengthRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mcr Packed Extensions.
   * @nullable
   */
  declare mcrPackedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Pds Target Factor.
   */
  declare pdsTargetFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Property Id.
   * @nullable
   */
  declare propertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Commodity.
   */
  declare intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Alt Invent Version Id.
   * @nullable
   */
  declare altInventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Contribution Ratio.
   */
  declare salesContributionRatio: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cnpj Br.
   * @nullable
   */
  declare cnpjBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Num Group Id.
   * @nullable
   */
  declare batchNumGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Fiscal Lifo Group.
   */
  declare inventFiscalLifoGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Non Gst In.
   * @nullable
   */
  declare nonGstIn?: NoYes | null;
  /**
   * Abc Contribution Margin.
   * @nullable
   */
  declare abcContributionMargin?: Abc | null;
  /**
   * Tax Packaging Qty.
   */
  declare taxPackagingQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Scrap Var.
   */
  declare scrapVar: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Alt Item Id.
   * @nullable
   */
  declare altItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Fiscal Classification Br.
   * @nullable
   */
  declare taxFiscalClassificationBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard Invent Color Id.
   * @nullable
   */
  declare standardInventColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Width.
   */
  declare grossWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Alt Invent Color Id.
   * @nullable
   */
  declare altInventColorId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  scrapConst: DeserializedType<T, 'Edm.Decimal'>;
  nrTaxGroupLv?: DeserializedType<T, 'Edm.String'> | null;
  costModel?: NoYes | null;
  exemptIn?: NoYes | null;
  abcValue?: Abc | null;
  displayHazardMx?: NoYes | null;
  wmsArrivalHandlingTime: DeserializedType<T, 'Edm.Int32'>;
  customsExportTariffCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  intrastatChargePerKg: DeserializedType<T, 'Edm.Decimal'>;
  packagingGroupId?: DeserializedType<T, 'Edm.String'> | null;
  pdsBestBefore: DeserializedType<T, 'Edm.Int32'>;
  inventProductTypeBr?: DeserializedType<T, 'Edm.String'> | null;
  bomWhsReleasePolicy?: BomWhsReleasePolicy | null;
  sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  origStateId?: DeserializedType<T, 'Edm.String'> | null;
  pmfProductType?: PmfProductType | null;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalLifoNormalValueCalc?: InventFiscalLifoNormalValueCalc | null;
  preventPhysicalDimensionSync?: NoYes | null;
  standardConfigId?: DeserializedType<T, 'Edm.String'> | null;
  salesModel?: SalesPriceModel | null;
  pmfYieldPct: DeserializedType<T, 'Edm.Decimal'>;
  cooDualUseCode?: DeserializedType<T, 'Edm.String'> | null;
  exceptionCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  unitVolume: DeserializedType<T, 'Edm.Decimal'>;
  packingRu?: DeserializedType<T, 'Edm.String'> | null;
  pkWiUCodePl?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceModelBasic?: SalesPriceModelBasic | null;
  exciseTariffCodesIn: DeserializedType<T, 'Edm.Int64'>;
  taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  eximProductGroupTableIn: DeserializedType<T, 'Edm.Int64'>;
  purchModel?: NoYes | null;
  fiscalLifoNormalValue: DeserializedType<T, 'Edm.Decimal'>;
  taxationOriginBr?: FiTaxationOriginBr | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  serviceAccountingCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  height: DeserializedType<T, 'Edm.Decimal'>;
  ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  assetIdRu?: DeserializedType<T, 'Edm.String'> | null;
  product: DeserializedType<T, 'Edm.Int64'>;
  standardInventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sadRateCodePl?: DeserializedType<T, 'Edm.String'> | null;
  altInventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  assetGroupIdRu?: DeserializedType<T, 'Edm.String'> | null;
  autoReportFinished?: NoYes | null;
  skipIntraCompanySyncRu?: NoYes | null;
  prodFlushingPrincip?: ProdFlushingPrincipItem | null;
  taraWeight: DeserializedType<T, 'Edm.Decimal'>;
  cooDualUseProduct?: NoYes | null;
  prodGroupId?: DeserializedType<T, 'Edm.String'> | null;
  customsImportTariffCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  bomManualReceipt?: NoYes | null;
  fiscalLifoAvoidCalc?: NoYes | null;
  matchingPolicy?: PurchMatchingPolicyWithNotSetOption | null;
  markupCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  costGroupId?: DeserializedType<T, 'Edm.String'> | null;
  serviceCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  pdsPotencyAttribRecording?: PdsPotencyAttribRecordingEnum | null;
  depth: DeserializedType<T, 'Edm.Decimal'>;
  serialNumGroupId?: DeserializedType<T, 'Edm.String'> | null;
  useAltItemId?: ItemNumAlternative | null;
  density: DeserializedType<T, 'Edm.Decimal'>;
  sortCode: DeserializedType<T, 'Edm.Int32'>;
  scaleIndicatorBr?: ScaleIndicatorBr | null;
  salesPercentMarkup: DeserializedType<T, 'Edm.Decimal'>;
  pdsShelfAdvice: DeserializedType<T, 'Edm.Int32'>;
  batchMergeDateCalculationMethod?: InventBatchMergeDateCalculationMethod | null;
  grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  pmfPlanningItemId?: DeserializedType<T, 'Edm.String'> | null;
  itemPriceToleranceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  standardInventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  width: DeserializedType<T, 'Edm.Decimal'>;
  exciseRecordTypeIn?: ExciseRecordTypeIn | null;
  dsaIn?: NoYes | null;
  origCountyId?: DeserializedType<T, 'Edm.String'> | null;
  grossHeight: DeserializedType<T, 'Edm.Decimal'>;
  statisticsFactor: DeserializedType<T, 'Edm.Decimal'>;
  pdsFreightAllocationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  icmsOnServiceBr?: NoYes | null;
  hmimIndicator?: NoYes | null;
  forecastDmpInclude?: NoYes | null;
  satTariffFractionMx?: DeserializedType<T, 'Edm.String'> | null;
  phantom?: NoYes | null;
  intracode?: DeserializedType<T, 'Edm.String'> | null;
  prodPoolId?: DeserializedType<T, 'Edm.String'> | null;
  approxTaxValueBr: DeserializedType<T, 'Edm.Decimal'>;
  alcoholProductionTypeIdRu?: DeserializedType<T, 'Edm.String'> | null;
  freeNotesGroupIt?: DeserializedType<T, 'Edm.String'> | null;
  standardInventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  bomUnitId?: DeserializedType<T, 'Edm.String'> | null;
  hsnCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  commissionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  itemType?: ItemType | null;
  pdsItemRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  abcTieUp?: Abc | null;
  itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  bomCalcGroupId?: DeserializedType<T, 'Edm.String'> | null;
  alcoholManufacturerIdRu?: DeserializedType<T, 'Edm.String'> | null;
  intrastatExclude?: NoYes | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  intrastatProcIdCz?: DeserializedType<T, 'Edm.String'> | null;
  abcRevenue?: Abc | null;
  bomLevel: DeserializedType<T, 'Edm.Int32'>;
  costBomLevel: DeserializedType<T, 'Edm.Int32'>;
  pdsBaseAttributeId?: DeserializedType<T, 'Edm.String'> | null;
  brandCodeIdMx?: DeserializedType<T, 'Edm.String'> | null;
  pdsVendorCheckItem?: PdsVendorCheckItem | null;
  altConfigId?: DeserializedType<T, 'Edm.String'> | null;
  pdsShelfLife: DeserializedType<T, 'Edm.Int32'>;
  primaryVendorId?: DeserializedType<T, 'Edm.String'> | null;
  satCodeIdMx?: DeserializedType<T, 'Edm.String'> | null;
  itemDimCostPrice?: NoYes | null;
  netWeight: DeserializedType<T, 'Edm.Decimal'>;
  origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  taxRateType: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  reqGroupId?: DeserializedType<T, 'Edm.String'> | null;
  altInventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  alcoholStrengthRu: DeserializedType<T, 'Edm.Decimal'>;
  mcrPackedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  pdsTargetFactor: DeserializedType<T, 'Edm.Decimal'>;
  propertyId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  altInventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  salesContributionRatio: DeserializedType<T, 'Edm.Decimal'>;
  cnpjBr?: DeserializedType<T, 'Edm.String'> | null;
  batchNumGroupId?: DeserializedType<T, 'Edm.String'> | null;
  inventFiscalLifoGroup: DeserializedType<T, 'Edm.Int64'>;
  nonGstIn?: NoYes | null;
  abcContributionMargin?: Abc | null;
  taxPackagingQty: DeserializedType<T, 'Edm.Decimal'>;
  scrapVar: DeserializedType<T, 'Edm.Decimal'>;
  altItemId?: DeserializedType<T, 'Edm.String'> | null;
  taxFiscalClassificationBr?: DeserializedType<T, 'Edm.String'> | null;
  standardInventColorId?: DeserializedType<T, 'Edm.String'> | null;
  grossWidth: DeserializedType<T, 'Edm.Decimal'>;
  altInventColorId?: DeserializedType<T, 'Edm.String'> | null;
}
