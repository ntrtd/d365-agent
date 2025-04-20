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
import type { OperationalSitesV2Api } from './OperationalSitesV2Api';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import {
  OpenSalesPriceJournalLinesV2,
  OpenSalesPriceJournalLinesV2Type
} from './OpenSalesPriceJournalLinesV2';
import {
  GupOpenTradeAgreementJournalLines,
  GupOpenTradeAgreementJournalLinesType
} from './GupOpenTradeAgreementJournalLines';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  BundleSalesInvoiceLines,
  BundleSalesInvoiceLinesType
} from './BundleSalesInvoiceLines';
import { Branches, BranchesType } from './Branches';
import {
  FiscalEstablishments,
  FiscalEstablishmentsType
} from './FiscalEstablishments';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  BundleSalesInvoiceBundleParentLines,
  BundleSalesInvoiceBundleParentLinesType
} from './BundleSalesInvoiceBundleParentLines';
import {
  AssetMaintenanceAssetBillOfMaterialsV2,
  AssetMaintenanceAssetBillOfMaterialsV2Type
} from './AssetMaintenanceAssetBillOfMaterialsV2';
import {
  AssetMaintenanceWorkOrderLineProductJournals,
  AssetMaintenanceWorkOrderLineProductJournalsType
} from './AssetMaintenanceWorkOrderLineProductJournals';
import {
  BundleSalesOrderConfirmationLines,
  BundleSalesOrderConfirmationLinesType
} from './BundleSalesOrderConfirmationLines';
import {
  OpenPurchasePriceJournalLinesV2,
  OpenPurchasePriceJournalLinesV2Type
} from './OpenPurchasePriceJournalLinesV2';

/**
 * This class represents the entity "OperationalSitesV2" of service "d365_metadata".
 */
export class OperationalSitesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OperationalSitesV2Type<T>
{
  /**
   * Technical entity name for OperationalSitesV2.
   */
  static override _entityName = 'OperationalSitesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OperationalSitesV2 entity.
   */
  static _keys = ['dataAreaId', 'SiteId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Site Id.
   */
  declare siteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Address Latitude.
   */
  declare primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Site Default Dimension Display Value.
   * @nullable
   */
  declare inventSiteDefaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Formatted Primary Address.
   * @nullable
   */
  declare formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Establishment Id.
   * @nullable
   */
  declare fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address State Id.
   * @nullable
   */
  declare primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Site Timezone.
   * @nullable
   */
  declare siteTimezone?: Timezone | null;
  /**
   * Primary Address Building Compliment.
   * @nullable
   */
  declare primaryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Location Sales Tax Group Code.
   * @nullable
   */
  declare primaryAddressLocationSalesTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Inventory Status Id.
   * @nullable
   */
  declare defaultInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Master Planned Intra Site Movements Use Transfer Journals.
   * @nullable
   */
  declare willMasterPlannedIntraSiteMovementsUseTransferJournals?: NoYes | null;
  /**
   * Primary Address Country Region Id.
   * @nullable
   */
  declare primaryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Order Entry Deadline Group Id.
   * @nullable
   */
  declare orderEntryDeadlineGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address County Id.
   * @nullable
   */
  declare primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Location Roles.
   * @nullable
   */
  declare primaryAddressLocationRoles?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address District Name.
   * @nullable
   */
  declare primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Street.
   * @nullable
   */
  declare primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Receiving Warehouse Override Allowed.
   * @nullable
   */
  declare isReceivingWarehouseOverrideAllowed?: NoYes | null;
  /**
   * Site Name.
   * @nullable
   */
  declare siteName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Description.
   * @nullable
   */
  declare primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address City.
   * @nullable
   */
  declare primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Street Number.
   * @nullable
   */
  declare primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Street In Kana.
   * @nullable
   */
  declare primaryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Zip Code.
   * @nullable
   */
  declare primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Branch Code.
   * @nullable
   */
  declare taxBranchCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Address Assigned.
   * @nullable
   */
  declare isPrimaryAddressAssigned?: NoYes | null;
  /**
   * Primary Address Time Zone.
   * @nullable
   */
  declare primaryAddressTimeZone?: Timezone | null;
  /**
   * Primary Address City In Kana.
   * @nullable
   */
  declare primaryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Post Box.
   * @nullable
   */
  declare primaryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Longitude.
   */
  declare primaryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link OpenSalesPriceJournalLinesV2} entity.
   */
  declare openSalesPriceJournalLineV2: OpenSalesPriceJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link GupOpenTradeAgreementJournalLines} entity.
   */
  declare gupOpenTradeAgreementJournalLine: GupOpenTradeAgreementJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceLines} entity.
   */
  declare bundleSalesInvoiceLines: BundleSalesInvoiceLines<T>[];
  /**
   * One-to-one navigation property to the {@link Branches} entity.
   */
  declare taxBranch?: Branches<T> | null;
  /**
   * One-to-one navigation property to the {@link FiscalEstablishments} entity.
   */
  declare fiscalEstablishment?: FiscalEstablishments<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultDimension?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceBundleParentLines} entity.
   */
  declare bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetBillOfMaterialsV2} entity.
   */
  declare maintenanceAssetBillOfMaterialsOperationalSite: AssetMaintenanceAssetBillOfMaterialsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLineProductJournals} entity.
   */
  declare workOrderLineProductConsumptionLinesStorageProductSite: AssetMaintenanceWorkOrderLineProductJournals<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationLines} entity.
   */
  declare bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link OpenPurchasePriceJournalLinesV2} entity.
   */
  declare openPurchasePriceJournalLineV2: OpenPurchasePriceJournalLinesV2<T>[];

  constructor(_entityApi: OperationalSitesV2Api<T>) {
    super(_entityApi);
  }
}

export interface OperationalSitesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  siteId: DeserializedType<T, 'Edm.String'>;
  primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  inventSiteDefaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  siteTimezone?: Timezone | null;
  primaryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocationSalesTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  willMasterPlannedIntraSiteMovementsUseTransferJournals?: NoYes | null;
  primaryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  orderEntryDeadlineGroupId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  isReceivingWarehouseOverrideAllowed?: NoYes | null;
  siteName?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  taxBranchCode?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryAddressAssigned?: NoYes | null;
  primaryAddressTimeZone?: Timezone | null;
  primaryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  openSalesPriceJournalLineV2: OpenSalesPriceJournalLinesV2Type<T>[];
  gupOpenTradeAgreementJournalLine: GupOpenTradeAgreementJournalLinesType<T>[];
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  bundleSalesInvoiceLines: BundleSalesInvoiceLinesType<T>[];
  taxBranch?: BranchesType<T> | null;
  fiscalEstablishment?: FiscalEstablishmentsType<T> | null;
  defaultDimension?: DimensionSetsType<T> | null;
  bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLinesType<T>[];
  maintenanceAssetBillOfMaterialsOperationalSite: AssetMaintenanceAssetBillOfMaterialsV2Type<T>[];
  workOrderLineProductConsumptionLinesStorageProductSite: AssetMaintenanceWorkOrderLineProductJournalsType<T>[];
  bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLinesType<T>[];
  openPurchasePriceJournalLineV2: OpenPurchasePriceJournalLinesV2Type<T>[];
}
