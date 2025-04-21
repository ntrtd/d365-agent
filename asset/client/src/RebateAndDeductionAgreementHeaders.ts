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
import type { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { TamRebateCalcMethod } from './TamRebateCalcMethod';
import { NoYes } from './NoYes';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { TamRebateType } from './TamRebateType';
import { TamRebateBasis } from './TamRebateBasis';
import { TamRebateSourceType } from './TamRebateSourceType';
import { TamRebatePriceBasis } from './TamRebatePriceBasis';
import { TamRebateBasisVend } from './TamRebateBasisVend';
import { PdsUnitType } from './PdsUnitType';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import {
  ProductRebateAndDeductionsGroups,
  ProductRebateAndDeductionsGroupsType
} from './ProductRebateAndDeductionsGroups';
import {
  CustomerRebateReductionPrinciples,
  CustomerRebateReductionPrinciplesType
} from './CustomerRebateReductionPrinciples';
import {
  CustomerRebateAndDeductionsGroups,
  CustomerRebateAndDeductionsGroupsType
} from './CustomerRebateAndDeductionsGroups';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import {
  RebateAndDeductionsAgreementDeals,
  RebateAndDeductionsAgreementDealsType
} from './RebateAndDeductionsAgreementDeals';
import {
  RebateAndDeductionsPostingProfiles,
  RebateAndDeductionsPostingProfilesType
} from './RebateAndDeductionsPostingProfiles';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  RebateStatusTables,
  RebateStatusTablesType
} from './RebateStatusTables';
import { ProductColors, ProductColorsType } from './ProductColors';
import {
  OperationalSitesV2,
  OperationalSitesV2Type
} from './OperationalSitesV2';
import {
  VendorRebateAndDeductionsGroups,
  VendorRebateAndDeductionsGroupsType
} from './VendorRebateAndDeductionsGroups';
import { Warehouses, WarehousesType } from './Warehouses';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { ItemBatches, ItemBatchesType } from './ItemBatches';
import {
  RebateAndDeductionsAgreementDateSetups,
  RebateAndDeductionsAgreementDateSetupsType
} from './RebateAndDeductionsAgreementDateSetups';

/**
 * This class represents the entity "RebateAndDeductionAgreementHeaders" of service "d365_metadata".
 */
export class RebateAndDeductionAgreementHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RebateAndDeductionAgreementHeadersType<T>
{
  /**
   * Technical entity name for RebateAndDeductionAgreementHeaders.
   */
  static override _entityName = 'RebateAndDeductionAgreementHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RebateAndDeductionAgreementHeaders entity.
   */
  static _keys = ['AgreementNumber'];
  /**
   * Agreement Number.
   */
  declare agreementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Calculation Method.
   * @nullable
   */
  declare calculationMethod?: TamRebateCalcMethod | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Support Negative Tier.
   * @nullable
   */
  declare supportNegativeTier?: NoYes | null;
  /**
   * Will Rebate Processing Calculation Include Credit Note.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludeCreditNote?: NoYes | null;
  /**
   * Rebate And Deductions Posting Profile Id.
   * @nullable
   */
  declare rebateAndDeductionsPostingProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Packed Query.
   * @nullable
   */
  declare packedQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Rebate Processing Calculation Include Paid Invoices Only.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludePaidInvoicesOnly?: NoYes | null;
  /**
   * Agreement Description.
   * @nullable
   */
  declare agreementDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Module.
   * @nullable
   */
  declare agreementModule?: ModuleInventCustVend | null;
  /**
   * Will Rebate Processing Calculation Include Tax.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludeTax?: NoYes | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Rebate Processing Calculation Include Free Text.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludeFreeText?: NoYes | null;
  /**
   * Minimum Amount.
   */
  declare minimumAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate And Deductions Type.
   * @nullable
   */
  declare rebateAndDeductionsType?: TamRebateType | null;
  /**
   * Customer Rebate Reduction Principle Id.
   * @nullable
   */
  declare customerRebateReductionPrincipleId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate And Deductions Deal Number.
   * @nullable
   */
  declare rebateAndDeductionsDealNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Rebate Processing Calculation Include Discounted Amount.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludeDiscountedAmount?: NoYes | null;
  /**
   * Rebate Calculation Basis.
   * @nullable
   */
  declare rebateCalculationBasis?: TamRebateBasis | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Rebate And Deductions Group Id.
   * @nullable
   */
  declare customerRebateAndDeductionsGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Document Notes.
   * @nullable
   */
  declare documentNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guarantee Posting Profile Id.
   * @nullable
   */
  declare guaranteePostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Rebate And Deductions Group Id.
   * @nullable
   */
  declare vendorRebateAndDeductionsGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Document Type.
   * @nullable
   */
  declare sourceDocumentType?: TamRebateSourceType | null;
  /**
   * Average Purchase Price Basis Calculation Month Range.
   */
  declare averagePurchasePriceBasisCalculationMonthRange: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Rebate Price Basis.
   * @nullable
   */
  declare rebatePriceBasis?: TamRebatePriceBasis | null;
  /**
   * Product Rebate And Deductions Group Id.
   * @nullable
   */
  declare productRebateAndDeductionsGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Matched By Order Account.
   * @nullable
   */
  declare matchedByOrderAccount?: NoYes | null;
  /**
   * Retail Product Variant Number.
   * @nullable
   */
  declare retailProductVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate And Deductions Status Id.
   * @nullable
   */
  declare rebateAndDeductionsStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Rebate Processing Calculation Include Settlement Discount.
   * @nullable
   */
  declare willRebateProcessingCalculationIncludeSettlementDiscount?: NoYes | null;
  /**
   * Vendor Rebate Calculation Transaction Basis.
   * @nullable
   */
  declare vendorRebateCalculationTransactionBasis?: TamRebateBasisVend | null;
  /**
   * Operational Site Id.
   * @nullable
   */
  declare operationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Unit Symbol Type.
   * @nullable
   */
  declare productUnitSymbolType?: PdsUnitType | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductRebateAndDeductionsGroups} entity.
   */
  declare productRebateAndDeductionsGroup?: ProductRebateAndDeductionsGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerRebateReductionPrinciples} entity.
   */
  declare customerRebateReductionPrinciple?: CustomerRebateReductionPrinciples<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerRebateAndDeductionsGroups} entity.
   */
  declare customerRebateAndDeductionsGroup?: CustomerRebateAndDeductionsGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  declare warehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link RebateAndDeductionsAgreementDeals} entity.
   */
  declare rebateAndDeductionsAgreementDeal?: RebateAndDeductionsAgreementDeals<T> | null;
  /**
   * One-to-one navigation property to the {@link RebateAndDeductionsPostingProfiles} entity.
   */
  declare rebateAndDeductionsPostingProfile?: RebateAndDeductionsPostingProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link RebateStatusTables} entity.
   */
  declare rebateAndDeductionsStatus?: RebateStatusTables<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSitesV2} entity.
   */
  declare operationSite?: OperationalSitesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorRebateAndDeductionsGroups} entity.
   */
  declare vendorRebateAndDeductionsGroup?: VendorRebateAndDeductionsGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemBatches} entity.
   */
  declare itemBatch?: ItemBatches<T> | null;
  /**
   * One-to-one navigation property to the {@link RebateAndDeductionsPostingProfiles} entity.
   */
  declare guaranteeRebateAndDeductionsPostingProfile?: RebateAndDeductionsPostingProfiles<T> | null;
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionsAgreementDateSetups} entity.
   */
  declare rebateAndDeductionsDateSetups: RebateAndDeductionsAgreementDateSetups<T>[];

  constructor(_entityApi: RebateAndDeductionAgreementHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface RebateAndDeductionAgreementHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  agreementNumber: DeserializedType<T, 'Edm.String'>;
  calculationMethod?: TamRebateCalcMethod | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  supportNegativeTier?: NoYes | null;
  willRebateProcessingCalculationIncludeCreditNote?: NoYes | null;
  rebateAndDeductionsPostingProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  packedQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  willRebateProcessingCalculationIncludePaidInvoicesOnly?: NoYes | null;
  agreementDescription?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  agreementModule?: ModuleInventCustVend | null;
  willRebateProcessingCalculationIncludeTax?: NoYes | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  willRebateProcessingCalculationIncludeFreeText?: NoYes | null;
  minimumAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebateAndDeductionsType?: TamRebateType | null;
  customerRebateReductionPrincipleId?: DeserializedType<T, 'Edm.String'> | null;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsDealNumber?: DeserializedType<T, 'Edm.String'> | null;
  willRebateProcessingCalculationIncludeDiscountedAmount?: NoYes | null;
  rebateCalculationBasis?: TamRebateBasis | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  customerRebateAndDeductionsGroupId?: DeserializedType<T, 'Edm.String'> | null;
  documentNotes?: DeserializedType<T, 'Edm.String'> | null;
  guaranteePostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  vendorRebateAndDeductionsGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentType?: TamRebateSourceType | null;
  averagePurchasePriceBasisCalculationMonthRange: DeserializedType<
    T,
    'Edm.Int32'
  >;
  rebatePriceBasis?: TamRebatePriceBasis | null;
  productRebateAndDeductionsGroupId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  matchedByOrderAccount?: NoYes | null;
  retailProductVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsStatusId?: DeserializedType<T, 'Edm.String'> | null;
  willRebateProcessingCalculationIncludeSettlementDiscount?: NoYes | null;
  vendorRebateCalculationTransactionBasis?: TamRebateBasisVend | null;
  operationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productUnitSymbolType?: PdsUnitType | null;
  productSize?: ProductSizesType<T> | null;
  productRebateAndDeductionsGroup?: ProductRebateAndDeductionsGroupsType<T> | null;
  customerRebateReductionPrinciple?: CustomerRebateReductionPrinciplesType<T> | null;
  customerRebateAndDeductionsGroup?: CustomerRebateAndDeductionsGroupsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productStyle?: ProductStylesType<T> | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
  rebateAndDeductionsAgreementDeal?: RebateAndDeductionsAgreementDealsType<T> | null;
  rebateAndDeductionsPostingProfile?: RebateAndDeductionsPostingProfilesType<T> | null;
  unitOfMeasure?: UnitsOfMeasureType<T> | null;
  customerV3?: CustomersV3Type<T> | null;
  rebateAndDeductionsStatus?: RebateStatusTablesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  operationSite?: OperationalSitesV2Type<T> | null;
  vendorRebateAndDeductionsGroup?: VendorRebateAndDeductionsGroupsType<T> | null;
  warehouse?: WarehousesType<T> | null;
  vendorV2?: VendorsV2Type<T> | null;
  itemBatch?: ItemBatchesType<T> | null;
  guaranteeRebateAndDeductionsPostingProfile?: RebateAndDeductionsPostingProfilesType<T> | null;
  rebateAndDeductionsDateSetups: RebateAndDeductionsAgreementDateSetupsType<T>[];
}
