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
import type { AssetTableBiEntitiesApi } from './AssetTableBiEntitiesApi';
import { FbpiscofinsFixedAssetCreditPurposeBr } from './FbpiscofinsFixedAssetCreditPurposeBr';
import { NoYes } from './NoYes';
import { VehicleTypeMx } from './VehicleTypeMx';
import { AssetClassificationJp } from './AssetClassificationJp';
import { AssetPropertyType } from './AssetPropertyType';
import { FbpiscofinsFixedAssetAppropMethodBr } from './FbpiscofinsFixedAssetAppropMethodBr';
import { FbpiscofinsFixedAssetCreditGroupBr } from './FbpiscofinsFixedAssetCreditGroupBr';
import { AssetType } from './AssetType';
import { AssetDeferredTypeJp } from './AssetDeferredTypeJp';

/**
 * This class represents the entity "AssetTableBiEntities" of service "d365_metadata".
 */
export class AssetTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetTableBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetTableBiEntities.
   */
  static override _entityName = 'AssetTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'AssetGroup', 'AssetId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Group.
   */
  declare assetGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Id.
   */
  declare assetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Piscofins Credit Purpose Br.
   * @nullable
   */
  declare piscofinsCreditPurposeBr?: FbpiscofinsFixedAssetCreditPurposeBr | null;
  /**
   * Make.
   * @nullable
   */
  declare make?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Memo.
   * @nullable
   */
  declare locationMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sorting Id 2.
   * @nullable
   */
  declare sortingId2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created Date Time.
   */
  declare sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Trans Conf Mx.
   * @nullable
   */
  declare transConfMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Id Lv.
   * @nullable
   */
  declare categoryIdLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Replace Cost.
   */
  declare assetReplaceCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Model Year.
   * @nullable
   */
  declare modelYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Piscofins Credit Installments Br.
   */
  declare piscofinsCreditInstallmentsBr: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Acquisition Price W.
   */
  declare acquisitionPriceW: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Insurance Date 2.
   */
  declare insuranceDate2: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Next Maintenance.
   */
  declare nextMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Gis Reference Number.
   * @nullable
   */
  declare gisReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subvention No.
   */
  declare subventionNo: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trailer Type Mx.
   * @nullable
   */
  declare trailerTypeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Missing.
   * @nullable
   */
  declare isMissing?: NoYes | null;
  /**
   * Model.
   * @nullable
   */
  declare model?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vehicle Type Mx.
   * @nullable
   */
  declare vehicleTypeMx?: VehicleTypeMx | null;
  /**
   * Policy Amount.
   */
  declare policyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Inventory.
   */
  declare physicalInventory: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Return On Investments No.
   */
  declare returnOnInvestmentsNo: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Guarantee Date.
   */
  declare guaranteeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Condition.
   * @nullable
   */
  declare condition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Asset Id.
   * @nullable
   */
  declare mainAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exception Taxation Code Jp.
   * @nullable
   */
  declare exceptionTaxationCodeJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Info 1.
   * @nullable
   */
  declare maintenanceInfo1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sorting Id.
   * @nullable
   */
  declare sortingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Rented Jp.
   * @nullable
   */
  declare isRentedJp?: NoYes | null;
  /**
   * Accelerated Dep Group Jp.
   */
  declare acceleratedDepGroupJp: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Second Hand Jp.
   * @nullable
   */
  declare isSecondHandJp?: NoYes | null;
  /**
   * Asset Property Group.
   */
  declare assetPropertyGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference.
   * @nullable
   */
  declare reference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Establishment Br.
   */
  declare fiscalEstablishmentBr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Insured At Market Value.
   * @nullable
   */
  declare insuredAtMarketValue?: NoYes | null;
  /**
   * Acquisition Value No.
   */
  declare acquisitionValueNo: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maintenance Info 2.
   * @nullable
   */
  declare maintenanceInfo2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title Holder.
   * @nullable
   */
  declare titleHolder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insured Value.
   */
  declare insuredValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Icms Outgoing Br.
   * @nullable
   */
  declare taxIcmsOutgoingBr?: NoYes | null;
  /**
   * Policy Expiration.
   */
  declare policyExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax County No.
   * @nullable
   */
  declare taxCountyNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance Policy Num.
   * @nullable
   */
  declare insurancePolicyNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance Date 1.
   */
  declare insuranceDate1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vehicle Plate Num Mx.
   * @nullable
   */
  declare vehiclePlateNumMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department.
   */
  declare department: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Maintenance Info 3.
   * @nullable
   */
  declare maintenanceInfo3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disposal Restriction.
   * @nullable
   */
  declare disposalRestriction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Classification Jp.
   * @nullable
   */
  declare assetClassificationJp?: AssetClassificationJp | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transferred From Inventory Br.
   * @nullable
   */
  declare transferredFromInventoryBr?: NoYes | null;
  /**
   * Cofins Taxation Code Br.
   * @nullable
   */
  declare cofinsTaxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Sale Pl.
   * @nullable
   */
  declare allowSalePl?: NoYes | null;
  /**
   * Asset Activity Code.
   */
  declare assetActivityCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Documents.
   * @nullable
   */
  declare documents?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Production Year Pl.
   * @nullable
   */
  declare assetProductionYearPl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Factor Update Date.
   */
  declare lastFactorUpdateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tech Info 1.
   * @nullable
   */
  declare techInfo1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Property Type.
   * @nullable
   */
  declare propertyType?: AssetPropertyType | null;
  /**
   * Tech Info 3.
   * @nullable
   */
  declare techInfo3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tech Info 2.
   * @nullable
   */
  declare techInfo2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Piscofins Appropriation Method Br.
   * @nullable
   */
  declare piscofinsAppropriationMethodBr?: FbpiscofinsFixedAssetAppropMethodBr | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Value At 19840101 No.
   */
  declare valueAt19840101No: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pis Taxation Code Br.
   * @nullable
   */
  declare pisTaxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance Agent.
   * @nullable
   */
  declare insuranceAgent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Major Type.
   * @nullable
   */
  declare majorType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Worker Responsible.
   */
  declare workerResponsible: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subvention Tax Free No.
   */
  declare subventionTaxFreeNo: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wrk Ctr Id Jp.
   * @nullable
   */
  declare wrkCtrIdJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lender Name Jp.
   * @nullable
   */
  declare lenderNameJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Cost.
   */
  declare unitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Assessment No.
   */
  declare assessmentNo: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Room Number.
   * @nullable
   */
  declare roomNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exception Taxation Rate Jp.
   */
  declare exceptionTaxationRateJp: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Source Type Cn.
   */
  declare assetSourceTypeCn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purch Line Rec Id.
   */
  declare purchLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Barcode.
   * @nullable
   */
  declare barcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Icms Credit Installments Br.
   */
  declare icmsCreditInstallmentsBr: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Physical Asset Number Br.
   * @nullable
   */
  declare physicalAssetNumberBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease.
   * @nullable
   */
  declare lease?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Piscofins Credit Group Br.
   * @nullable
   */
  declare piscofinsCreditGroupBr?: FbpiscofinsFixedAssetCreditGroupBr | null;
  /**
   * Piscofins Receivable Long Term Br.
   * @nullable
   */
  declare piscofinsReceivableLongTermBr?: NoYes | null;
  /**
   * Assessment Tax No.
   */
  declare assessmentTaxNo: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Serial Num.
   * @nullable
   */
  declare serialNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parcel Id.
   * @nullable
   */
  declare parcelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Type.
   * @nullable
   */
  declare assetType?: AssetType | null;
  /**
   * Insurance Vendor.
   * @nullable
   */
  declare insuranceVendor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Deferred Type Jp.
   * @nullable
   */
  declare assetDeferredTypeJp?: AssetDeferredTypeJp | null;
  /**
   * Exception Taxation Rate Denominator Jp.
   */
  declare exceptionTaxationRateDenominatorJp: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sorting Id 3.
   * @nullable
   */
  declare sortingId3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Maintenance.
   */
  declare lastMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Acquisition Date W.
   */
  declare acquisitionDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Contact Name.
   */
  declare workerContactName: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: AssetTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  assetGroup: DeserializedType<T, 'Edm.String'>;
  assetId: DeserializedType<T, 'Edm.String'>;
  piscofinsCreditPurposeBr?: FbpiscofinsFixedAssetCreditPurposeBr | null;
  make?: DeserializedType<T, 'Edm.String'> | null;
  locationMemo?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sortingId2?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transConfMx?: DeserializedType<T, 'Edm.String'> | null;
  categoryIdLv?: DeserializedType<T, 'Edm.String'> | null;
  assetReplaceCost: DeserializedType<T, 'Edm.Decimal'>;
  modelYear?: DeserializedType<T, 'Edm.String'> | null;
  piscofinsCreditInstallmentsBr: DeserializedType<T, 'Edm.Int32'>;
  acquisitionPriceW: DeserializedType<T, 'Edm.Decimal'>;
  insuranceDate2: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nextMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  gisReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  subventionNo: DeserializedType<T, 'Edm.Decimal'>;
  trailerTypeMx?: DeserializedType<T, 'Edm.String'> | null;
  isMissing?: NoYes | null;
  model?: DeserializedType<T, 'Edm.String'> | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  vehicleTypeMx?: VehicleTypeMx | null;
  policyAmount: DeserializedType<T, 'Edm.Decimal'>;
  physicalInventory: DeserializedType<T, 'Edm.DateTimeOffset'>;
  returnOnInvestmentsNo: DeserializedType<T, 'Edm.Decimal'>;
  guaranteeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  condition?: DeserializedType<T, 'Edm.String'> | null;
  mainAssetId?: DeserializedType<T, 'Edm.String'> | null;
  exceptionTaxationCodeJp?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceInfo1?: DeserializedType<T, 'Edm.String'> | null;
  sortingId?: DeserializedType<T, 'Edm.String'> | null;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  isRentedJp?: NoYes | null;
  acceleratedDepGroupJp: DeserializedType<T, 'Edm.Int64'>;
  isSecondHandJp?: NoYes | null;
  assetPropertyGroup: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  reference?: DeserializedType<T, 'Edm.String'> | null;
  fiscalEstablishmentBr: DeserializedType<T, 'Edm.Int64'>;
  insuredAtMarketValue?: NoYes | null;
  acquisitionValueNo: DeserializedType<T, 'Edm.Decimal'>;
  maintenanceInfo2?: DeserializedType<T, 'Edm.String'> | null;
  titleHolder?: DeserializedType<T, 'Edm.String'> | null;
  insuredValue: DeserializedType<T, 'Edm.Decimal'>;
  taxIcmsOutgoingBr?: NoYes | null;
  policyExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxCountyNo?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  insurancePolicyNum?: DeserializedType<T, 'Edm.String'> | null;
  insuranceDate1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vehiclePlateNumMx?: DeserializedType<T, 'Edm.String'> | null;
  department: DeserializedType<T, 'Edm.Int64'>;
  maintenanceInfo3?: DeserializedType<T, 'Edm.String'> | null;
  disposalRestriction?: DeserializedType<T, 'Edm.String'> | null;
  assetClassificationJp?: AssetClassificationJp | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  transferredFromInventoryBr?: NoYes | null;
  cofinsTaxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  allowSalePl?: NoYes | null;
  assetActivityCode: DeserializedType<T, 'Edm.Int64'>;
  documents?: DeserializedType<T, 'Edm.String'> | null;
  assetProductionYearPl?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  lastFactorUpdateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  techInfo1?: DeserializedType<T, 'Edm.String'> | null;
  propertyType?: AssetPropertyType | null;
  techInfo3?: DeserializedType<T, 'Edm.String'> | null;
  techInfo2?: DeserializedType<T, 'Edm.String'> | null;
  piscofinsAppropriationMethodBr?: FbpiscofinsFixedAssetAppropMethodBr | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  valueAt19840101No: DeserializedType<T, 'Edm.Decimal'>;
  pisTaxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  insuranceAgent?: DeserializedType<T, 'Edm.String'> | null;
  majorType?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  workerResponsible: DeserializedType<T, 'Edm.Int64'>;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  subventionTaxFreeNo: DeserializedType<T, 'Edm.Decimal'>;
  wrkCtrIdJp?: DeserializedType<T, 'Edm.String'> | null;
  lenderNameJp?: DeserializedType<T, 'Edm.String'> | null;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  assessmentNo: DeserializedType<T, 'Edm.Decimal'>;
  roomNumber?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  exceptionTaxationRateJp: DeserializedType<T, 'Edm.Decimal'>;
  assetSourceTypeCn: DeserializedType<T, 'Edm.Int64'>;
  purchLineRecId: DeserializedType<T, 'Edm.Int64'>;
  barcode?: DeserializedType<T, 'Edm.String'> | null;
  icmsCreditInstallmentsBr: DeserializedType<T, 'Edm.Int32'>;
  physicalAssetNumberBr?: DeserializedType<T, 'Edm.String'> | null;
  lease?: DeserializedType<T, 'Edm.String'> | null;
  piscofinsCreditGroupBr?: FbpiscofinsFixedAssetCreditGroupBr | null;
  piscofinsReceivableLongTermBr?: NoYes | null;
  assessmentTaxNo: DeserializedType<T, 'Edm.Decimal'>;
  serialNum?: DeserializedType<T, 'Edm.String'> | null;
  parcelId?: DeserializedType<T, 'Edm.String'> | null;
  assetType?: AssetType | null;
  insuranceVendor?: DeserializedType<T, 'Edm.String'> | null;
  assetDeferredTypeJp?: AssetDeferredTypeJp | null;
  exceptionTaxationRateDenominatorJp: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sortingId3?: DeserializedType<T, 'Edm.String'> | null;
  lastMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  acquisitionDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerContactName: DeserializedType<T, 'Edm.Int64'>;
}
