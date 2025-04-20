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
import type { FixedAssetsApi } from './FixedAssetsApi';
import { FbpiscofinsFixedAssetCreditGroupBr } from './FbpiscofinsFixedAssetCreditGroupBr';
import { AssetSortValue } from './AssetSortValue';
import { NoYes } from './NoYes';
import { FbpiscofinsFixedAssetCreditPurposeBr } from './FbpiscofinsFixedAssetCreditPurposeBr';
import { FbpiscofinsFixedAssetAppropMethodBr } from './FbpiscofinsFixedAssetAppropMethodBr';
import { AssetClassificationJp } from './AssetClassificationJp';
import { AssetPropertyType } from './AssetPropertyType';
import { AssetTypeJp } from './AssetTypeJp';
import { AssetType } from './AssetType';
import { AssetDeferredTypeJp } from './AssetDeferredTypeJp';
import { AssetLocations, AssetLocationsType } from './AssetLocations';
import { Workers, WorkersType } from './Workers';
import { FixedAssetGroups, FixedAssetGroupsType } from './FixedAssetGroups';
import {
  FixedAssetPostingProfiles,
  FixedAssetPostingProfilesType
} from './FixedAssetPostingProfiles';
import {
  AssetStatementRows,
  AssetStatementRowsType
} from './AssetStatementRows';
import {
  FixedAssetBookSpecialDepreciationAllowances,
  FixedAssetBookSpecialDepreciationAllowancesType
} from './FixedAssetBookSpecialDepreciationAllowances';

/**
 * This class represents the entity "FixedAssets" of service "d365_metadata".
 */
export class FixedAssets<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FixedAssetsType<T>
{
  /**
   * Technical entity name for FixedAssets.
   */
  static override _entityName = 'FixedAssets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FixedAssets entity.
   */
  static _keys = ['dataAreaId', 'FixedAssetNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Asset Number.
   */
  declare fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Establishment Id.
   * @nullable
   */
  declare fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Taxation Code For Pis.
   * @nullable
   */
  declare taxationCodeForPis?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Year.
   * @nullable
   */
  declare modelYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Next Maintenance.
   */
  declare nextMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Activity Code.
   * @nullable
   */
  declare activityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Location.
   * @nullable
   */
  declare documentLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Asset Credit Group.
   * @nullable
   */
  declare fixedAssetCreditGroup?: FbpiscofinsFixedAssetCreditGroupBr | null;
  /**
   * Sort Field 3 Sorting.
   * @nullable
   */
  declare sortField3Sorting?: AssetSortValue | null;
  /**
   * Name Of The Lender.
   * @nullable
   */
  declare nameOfTheLender?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource.
   * @nullable
   */
  declare resource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exception Taxation Code.
   * @nullable
   */
  declare exceptionTaxationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Maintenance.
   */
  declare lastMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Information 2.
   * @nullable
   */
  declare information2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Missing Asset.
   * @nullable
   */
  declare missingAsset?: NoYes | null;
  /**
   * Tax Credit Purpose.
   * @nullable
   */
  declare taxCreditPurpose?: FbpiscofinsFixedAssetCreditPurposeBr | null;
  /**
   * Lease Note.
   * @nullable
   */
  declare leaseNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort Field 2 Sorting.
   * @nullable
   */
  declare sortField2Sorting?: AssetSortValue | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Appropriation Method.
   * @nullable
   */
  declare appropriationMethod?: FbpiscofinsFixedAssetAppropMethodBr | null;
  /**
   * Major Type Description.
   * @nullable
   */
  declare majorTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Second Hand.
   * @nullable
   */
  declare isSecondHand?: NoYes | null;
  /**
   * Gis Reference Number.
   * @nullable
   */
  declare gisReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Classification.
   * @nullable
   */
  declare assetClassification?: AssetClassificationJp | null;
  /**
   * Accelerated Depreciation Fixed Asset Equipment Group Id.
   * @nullable
   */
  declare acceleratedDepreciationFixedAssetEquipmentGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Icms Credit Installments.
   */
  declare icmsCreditInstallments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transferred From Inventory.
   * @nullable
   */
  declare transferredFromInventory?: NoYes | null;
  /**
   * Make.
   * @nullable
   */
  declare make?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Personnel Number.
   * @nullable
   */
  declare contactPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort Field 1 Description.
   * @nullable
   */
  declare sortField1Description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Acquisition Price.
   */
  declare acquisitionPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Responsible Personnel Number.
   * @nullable
   */
  declare responsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Credits Installments.
   */
  declare taxCreditsInstallments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Code Description.
   * @nullable
   */
  declare activityCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Property Type.
   * @nullable
   */
  declare propertyType?: AssetPropertyType | null;
  /**
   * Department Operating Unit Number.
   * @nullable
   */
  declare departmentOperatingUnitNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Titleholder.
   * @nullable
   */
  declare titleholder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Inventory.
   */
  declare physicalInventory: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Insured Value.
   */
  declare insuredValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Cost.
   */
  declare unitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reference.
   * @nullable
   */
  declare reference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance Vendor.
   * @nullable
   */
  declare insuranceVendor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insured At Fair Market Value.
   * @nullable
   */
  declare insuredAtFairMarketValue?: NoYes | null;
  /**
   * Property Group Description.
   * @nullable
   */
  declare propertyGroupDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bar Code.
   * @nullable
   */
  declare barCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Expiration Date.
   */
  declare policyExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Information 3.
   * @nullable
   */
  declare information3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort Field 2 Id.
   * @nullable
   */
  declare sortField2Id?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model.
   * @nullable
   */
  declare model?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsible Name.
   * @nullable
   */
  declare responsibleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agent.
   * @nullable
   */
  declare agent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Type Of Major Type.
   * @nullable
   */
  declare assetTypeOfMajorType?: AssetTypeJp | null;
  /**
   * Exception Taxation Rate.
   */
  declare exceptionTaxationRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: AssetType | null;
  /**
   * Outgoing Icms.
   * @nullable
   */
  declare outgoingIcms?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Type Id.
   * @nullable
   */
  declare sourceTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technical Information 1.
   * @nullable
   */
  declare technicalInformation1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technical Information 2.
   * @nullable
   */
  declare technicalInformation2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Condition Id.
   * @nullable
   */
  declare assetConditionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technical Information 3.
   * @nullable
   */
  declare technicalInformation3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort Field 3 Description.
   * @nullable
   */
  declare sortField3Description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort Field 1 Sorting.
   * @nullable
   */
  declare sortField1Sorting?: AssetSortValue | null;
  /**
   * Replacement Cost.
   */
  declare replacementCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance Date 2.
   */
  declare insuranceDate2: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Asset Location Id.
   * @nullable
   */
  declare assetLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Name.
   * @nullable
   */
  declare contactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department Search Name.
   * @nullable
   */
  declare departmentSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parcel Id.
   * @nullable
   */
  declare parcelId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Exception Taxation Rate Denominator.
   */
  declare exceptionTaxationRateDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Asset Group Id.
   * @nullable
   */
  declare fixedAssetGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Periodic Value Cost Update.
   */
  declare lastPeriodicValueCostUpdate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Disposal Restrictions.
   * @nullable
   */
  declare disposalRestrictions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Taxation Code For Cofins.
   * @nullable
   */
  declare taxationCodeForCofins?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Rented.
   * @nullable
   */
  declare isRented?: NoYes | null;
  /**
   * Major Type Id.
   * @nullable
   */
  declare majorTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guarantee Date.
   */
  declare guaranteeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sort Field 2 Description.
   * @nullable
   */
  declare sortField2Description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Information 1.
   * @nullable
   */
  declare information1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Property Group Id.
   * @nullable
   */
  declare propertyGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Amount.
   */
  declare policyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferred Type.
   * @nullable
   */
  declare deferredType?: AssetDeferredTypeJp | null;
  /**
   * Main Asset Id.
   * @nullable
   */
  declare mainAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort Field 1 Id.
   * @nullable
   */
  declare sortField1Id?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Number.
   * @nullable
   */
  declare policyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Long Term Receivable Tax.
   * @nullable
   */
  declare longTermReceivableTax?: NoYes | null;
  /**
   * Physical Asset Number.
   * @nullable
   */
  declare physicalAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Serial Number.
   * @nullable
   */
  declare serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance Date 1.
   */
  declare insuranceDate1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Asset Condition Description.
   * @nullable
   */
  declare assetConditionDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort Field 3 Id.
   * @nullable
   */
  declare sortField3Id?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Acquisition Date.
   */
  declare acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Asset Location Name.
   * @nullable
   */
  declare assetLocationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Memo.
   * @nullable
   */
  declare locationMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetLocations} entity.
   */
  declare assetFixedAssetLocation?: AssetLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare assetFixedAssetWorkerResponsible?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link FixedAssetGroups} entity.
   */
  declare assetFixedAssetGroup?: FixedAssetGroups<T> | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetPostingProfiles} entity.
   */
  declare fixedAssetNumberPostingProfile: FixedAssetPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link AssetStatementRows} entity.
   */
  declare assetStatementRow: AssetStatementRows<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBookSpecialDepreciationAllowances} entity.
   */
  declare fixedAssetBookSpecialDepreciationAllowance: FixedAssetBookSpecialDepreciationAllowances<T>[];

  constructor(_entityApi: FixedAssetsApi<T>) {
    super(_entityApi);
  }
}

export interface FixedAssetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  taxationCodeForPis?: DeserializedType<T, 'Edm.String'> | null;
  modelYear?: DeserializedType<T, 'Edm.String'> | null;
  nextMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activityCode?: DeserializedType<T, 'Edm.String'> | null;
  documentLocation?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetCreditGroup?: FbpiscofinsFixedAssetCreditGroupBr | null;
  sortField3Sorting?: AssetSortValue | null;
  nameOfTheLender?: DeserializedType<T, 'Edm.String'> | null;
  resource?: DeserializedType<T, 'Edm.String'> | null;
  exceptionTaxationCode?: DeserializedType<T, 'Edm.String'> | null;
  lastMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  information2?: DeserializedType<T, 'Edm.String'> | null;
  missingAsset?: NoYes | null;
  taxCreditPurpose?: FbpiscofinsFixedAssetCreditPurposeBr | null;
  leaseNote?: DeserializedType<T, 'Edm.String'> | null;
  sortField2Sorting?: AssetSortValue | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  appropriationMethod?: FbpiscofinsFixedAssetAppropMethodBr | null;
  majorTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  isSecondHand?: NoYes | null;
  gisReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  assetClassification?: AssetClassificationJp | null;
  acceleratedDepreciationFixedAssetEquipmentGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  icmsCreditInstallments: DeserializedType<T, 'Edm.Int32'>;
  transferredFromInventory?: NoYes | null;
  make?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  sortField1Description?: DeserializedType<T, 'Edm.String'> | null;
  acquisitionPrice: DeserializedType<T, 'Edm.Decimal'>;
  responsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxCreditsInstallments: DeserializedType<T, 'Edm.Int32'>;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  activityCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  propertyType?: AssetPropertyType | null;
  departmentOperatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  titleholder?: DeserializedType<T, 'Edm.String'> | null;
  physicalInventory: DeserializedType<T, 'Edm.DateTimeOffset'>;
  insuredValue: DeserializedType<T, 'Edm.Decimal'>;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  reference?: DeserializedType<T, 'Edm.String'> | null;
  insuranceVendor?: DeserializedType<T, 'Edm.String'> | null;
  insuredAtFairMarketValue?: NoYes | null;
  propertyGroupDescription?: DeserializedType<T, 'Edm.String'> | null;
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  policyExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  information3?: DeserializedType<T, 'Edm.String'> | null;
  sortField2Id?: DeserializedType<T, 'Edm.String'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  model?: DeserializedType<T, 'Edm.String'> | null;
  responsibleName?: DeserializedType<T, 'Edm.String'> | null;
  agent?: DeserializedType<T, 'Edm.String'> | null;
  assetTypeOfMajorType?: AssetTypeJp | null;
  exceptionTaxationRate: DeserializedType<T, 'Edm.Decimal'>;
  type?: AssetType | null;
  outgoingIcms?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  sourceTypeId?: DeserializedType<T, 'Edm.String'> | null;
  technicalInformation1?: DeserializedType<T, 'Edm.String'> | null;
  technicalInformation2?: DeserializedType<T, 'Edm.String'> | null;
  assetConditionId?: DeserializedType<T, 'Edm.String'> | null;
  technicalInformation3?: DeserializedType<T, 'Edm.String'> | null;
  sortField3Description?: DeserializedType<T, 'Edm.String'> | null;
  sortField1Sorting?: AssetSortValue | null;
  replacementCost: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  insuranceDate2: DeserializedType<T, 'Edm.DateTimeOffset'>;
  assetLocationId?: DeserializedType<T, 'Edm.String'> | null;
  contactName?: DeserializedType<T, 'Edm.String'> | null;
  departmentSearchName?: DeserializedType<T, 'Edm.String'> | null;
  parcelId?: DeserializedType<T, 'Edm.String'> | null;
  roomNumber?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  exceptionTaxationRateDenominator: DeserializedType<T, 'Edm.Decimal'>;
  fixedAssetGroupId?: DeserializedType<T, 'Edm.String'> | null;
  lastPeriodicValueCostUpdate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  disposalRestrictions?: DeserializedType<T, 'Edm.String'> | null;
  taxationCodeForCofins?: DeserializedType<T, 'Edm.String'> | null;
  isRented?: NoYes | null;
  majorTypeId?: DeserializedType<T, 'Edm.String'> | null;
  guaranteeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sortField2Description?: DeserializedType<T, 'Edm.String'> | null;
  information1?: DeserializedType<T, 'Edm.String'> | null;
  propertyGroupId?: DeserializedType<T, 'Edm.String'> | null;
  policyAmount: DeserializedType<T, 'Edm.Decimal'>;
  deferredType?: AssetDeferredTypeJp | null;
  mainAssetId?: DeserializedType<T, 'Edm.String'> | null;
  sortField1Id?: DeserializedType<T, 'Edm.String'> | null;
  policyNumber?: DeserializedType<T, 'Edm.String'> | null;
  longTermReceivableTax?: NoYes | null;
  physicalAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  insuranceDate1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  assetConditionDescription?: DeserializedType<T, 'Edm.String'> | null;
  sortField3Id?: DeserializedType<T, 'Edm.String'> | null;
  acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  assetLocationName?: DeserializedType<T, 'Edm.String'> | null;
  locationMemo?: DeserializedType<T, 'Edm.String'> | null;
  assetFixedAssetLocation?: AssetLocationsType<T> | null;
  assetFixedAssetWorkerResponsible?: WorkersType<T> | null;
  assetFixedAssetGroup?: FixedAssetGroupsType<T> | null;
  fixedAssetNumberPostingProfile: FixedAssetPostingProfilesType<T>[];
  assetStatementRow: AssetStatementRowsType<T>[];
  fixedAssetBookSpecialDepreciationAllowance: FixedAssetBookSpecialDepreciationAllowancesType<T>[];
}
