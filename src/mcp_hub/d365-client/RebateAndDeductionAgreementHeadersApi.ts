/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RebateAndDeductionAgreementHeaders } from './RebateAndDeductionAgreementHeaders';
import { RebateAndDeductionAgreementHeadersRequestBuilder } from './RebateAndDeductionAgreementHeadersRequestBuilder';
import { ProductSizesApi } from './ProductSizesApi';
import { ProductRebateAndDeductionsGroupsApi } from './ProductRebateAndDeductionsGroupsApi';
import { CustomerRebateReductionPrinciplesApi } from './CustomerRebateReductionPrinciplesApi';
import { CustomerRebateAndDeductionsGroupsApi } from './CustomerRebateAndDeductionsGroupsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProductStylesApi } from './ProductStylesApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { RebateAndDeductionsAgreementDealsApi } from './RebateAndDeductionsAgreementDealsApi';
import { RebateAndDeductionsPostingProfilesApi } from './RebateAndDeductionsPostingProfilesApi';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { CustomersV3Api } from './CustomersV3Api';
import { RebateStatusTablesApi } from './RebateStatusTablesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { OperationalSitesV2Api } from './OperationalSitesV2Api';
import { VendorRebateAndDeductionsGroupsApi } from './VendorRebateAndDeductionsGroupsApi';
import { WarehousesApi } from './WarehousesApi';
import { VendorsV2Api } from './VendorsV2Api';
import { ItemBatchesApi } from './ItemBatchesApi';
import { RebateAndDeductionsAgreementDateSetupsApi } from './RebateAndDeductionsAgreementDateSetupsApi';
import { TamRebateCalcMethod } from './TamRebateCalcMethod';
import { NoYes } from './NoYes';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { TamRebateType } from './TamRebateType';
import { TamRebateBasis } from './TamRebateBasis';
import { TamRebateSourceType } from './TamRebateSourceType';
import { TamRebatePriceBasis } from './TamRebatePriceBasis';
import { TamRebateBasisVend } from './TamRebateBasisVend';
import { PdsUnitType } from './PdsUnitType';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  EdmTypeField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RebateAndDeductionAgreementHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): RebateAndDeductionAgreementHeadersApi<DeSerializersT> {
    return new RebateAndDeductionAgreementHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ProductRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerRebateReductionPrinciple} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_REBATE_REDUCTION_PRINCIPLE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      CustomerRebateReductionPrinciplesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      CustomerRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsAgreementDeal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_DEAL: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_STATUS: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RebateStatusTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATION_SITE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      OperationalSitesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      VendorRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link guaranteeRebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUARANTEE_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsDateSetups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_DATE_SETUPS: OneToManyLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductSizesApi<DeSerializersT>,
      ProductRebateAndDeductionsGroupsApi<DeSerializersT>,
      CustomerRebateReductionPrinciplesApi<DeSerializersT>,
      CustomerRebateAndDeductionsGroupsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      RebateStatusTablesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      OperationalSitesV2Api<DeSerializersT>,
      VendorRebateAndDeductionsGroupsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      VendorsV2Api<DeSerializersT>,
      ItemBatchesApi<DeSerializersT>,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>,
      RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[0]),
      PRODUCT_REBATE_AND_DEDUCTIONS_GROUP: new OneToOneLink(
        'ProductRebateAndDeductionsGroup',
        this,
        linkedApis[1]
      ),
      CUSTOMER_REBATE_REDUCTION_PRINCIPLE: new OneToOneLink(
        'CustomerRebateReductionPrinciple',
        this,
        linkedApis[2]
      ),
      CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP: new OneToOneLink(
        'CustomerRebateAndDeductionsGroup',
        this,
        linkedApis[3]
      ),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[4]
      ),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[5]),
      WAREHOUSE_LOCATION: new OneToOneLink(
        'WarehouseLocation',
        this,
        linkedApis[6]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_DEAL: new OneToOneLink(
        'RebateAndDeductionsAgreementDeal',
        this,
        linkedApis[7]
      ),
      REBATE_AND_DEDUCTIONS_POSTING_PROFILE: new OneToOneLink(
        'RebateAndDeductionsPostingProfile',
        this,
        linkedApis[8]
      ),
      UNIT_OF_MEASURE: new OneToOneLink('UnitOfMeasure', this, linkedApis[9]),
      CUSTOMER_V_3: new OneToOneLink('CustomerV3', this, linkedApis[10]),
      REBATE_AND_DEDUCTIONS_STATUS: new OneToOneLink(
        'RebateAndDeductionsStatus',
        this,
        linkedApis[11]
      ),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[12]),
      OPERATION_SITE: new OneToOneLink('OperationSite', this, linkedApis[13]),
      VENDOR_REBATE_AND_DEDUCTIONS_GROUP: new OneToOneLink(
        'VendorRebateAndDeductionsGroup',
        this,
        linkedApis[14]
      ),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[15]),
      VENDOR_V_2: new OneToOneLink('VendorV2', this, linkedApis[16]),
      ITEM_BATCH: new OneToOneLink('ItemBatch', this, linkedApis[17]),
      GUARANTEE_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: new OneToOneLink(
        'GuaranteeRebateAndDeductionsPostingProfile',
        this,
        linkedApis[18]
      ),
      REBATE_AND_DEDUCTIONS_DATE_SETUPS: new OneToManyLink(
        'RebateAndDeductionsDateSetups',
        this,
        linkedApis[19]
      )
    };
    return this;
  }

  entityConstructor = RebateAndDeductionAgreementHeaders;

  requestBuilder(): RebateAndDeductionAgreementHeadersRequestBuilder<DeSerializersT> {
    return new RebateAndDeductionAgreementHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RebateAndDeductionAgreementHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RebateAndDeductionAgreementHeaders<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RebateAndDeductionAgreementHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RebateAndDeductionAgreementHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AGREEMENT_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALCULATION_METHOD: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateCalcMethod,
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORT_NEGATIVE_TIER: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_CREDIT_NOTE: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REBATE_AND_DEDUCTIONS_POSTING_PROFILE_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKED_QUERY: EdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_PAID_INVOICES_ONLY: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGREEMENT_DESCRIPTION: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_MODULE: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      ModuleInventCustVend,
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_TAX: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_FREE_TEXT: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_AMOUNT: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_AND_DEDUCTIONS_TYPE: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateType,
      true,
      true
    >;
    CUSTOMER_REBATE_REDUCTION_PRINCIPLE_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_AND_DEDUCTIONS_DEAL_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_DISCOUNTED_AMOUNT: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REBATE_CALCULATION_BASIS: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateBasis,
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_NOTES: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUARANTEE_POSTING_PROFILE_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_REBATE_AND_DEDUCTIONS_GROUP_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_TYPE: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateSourceType,
      true,
      true
    >;
    AVERAGE_PURCHASE_PRICE_BASIS_CALCULATION_MONTH_RANGE: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REBATE_PRICE_BASIS: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebatePriceBasis,
      true,
      true
    >;
    PRODUCT_REBATE_AND_DEDUCTIONS_GROUP_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCHED_BY_ORDER_ACCOUNT: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_PRODUCT_VARIANT_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_AND_DEDUCTIONS_STATUS_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_SETTLEMENT_DISCOUNT: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_REBATE_CALCULATION_TRANSACTION_BASIS: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateBasisVend,
      true,
      true
    >;
    OPERATIONAL_SITE_ID: OrderableEdmTypeField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_UNIT_SYMBOL_TYPE: EnumField<
      RebateAndDeductionAgreementHeaders<DeSerializers>,
      DeSerializersT,
      PdsUnitType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ProductRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerRebateReductionPrinciple} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_REBATE_REDUCTION_PRINCIPLE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      CustomerRebateReductionPrinciplesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      CustomerRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsAgreementDeal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_DEAL: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_STATUS: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RebateStatusTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATION_SITE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      OperationalSitesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      VendorRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link guaranteeRebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUARANTEE_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsDateSetups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_DATE_SETUPS: OneToManyLink<
      RebateAndDeductionAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RebateAndDeductionAgreementHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link agreementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link calculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'CalculationMethod',
          TamRebateCalcMethod,
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supportNegativeTier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_NEGATIVE_TIER: fieldBuilder.buildEnumField(
          'SupportNegativeTier',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willRebateProcessingCalculationIncludeCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_CREDIT_NOTE:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludeCreditNote',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link rebateAndDeductionsPostingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AND_DEDUCTIONS_POSTING_PROFILE_ID:
          fieldBuilder.buildEdmTypeField(
            'RebateAndDeductionsPostingProfileId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link packedQuery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKED_QUERY: fieldBuilder.buildEdmTypeField(
          'PackedQuery',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link warehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willRebateProcessingCalculationIncludePaidInvoicesOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_PAID_INVOICES_ONLY:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludePaidInvoicesOnly',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link agreementDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AgreementDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementModule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_MODULE: fieldBuilder.buildEnumField(
          'AgreementModule',
          ModuleInventCustVend,
          true
        ),
        /**
         * Static representation of the {@link willRebateProcessingCalculationIncludeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_TAX:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludeTax',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willRebateProcessingCalculationIncludeFreeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_FREE_TEXT:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludeFreeText',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link minimumAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateAndDeductionsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AND_DEDUCTIONS_TYPE: fieldBuilder.buildEnumField(
          'RebateAndDeductionsType',
          TamRebateType,
          true
        ),
        /**
         * Static representation of the {@link customerRebateReductionPrincipleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REBATE_REDUCTION_PRINCIPLE_ID: fieldBuilder.buildEdmTypeField(
          'CustomerRebateReductionPrincipleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rebateAndDeductionsDealNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AND_DEDUCTIONS_DEAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'RebateAndDeductionsDealNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willRebateProcessingCalculationIncludeDiscountedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_DISCOUNTED_AMOUNT:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludeDiscountedAmount',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link rebateCalculationBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_CALCULATION_BASIS: fieldBuilder.buildEnumField(
          'RebateCalculationBasis',
          TamRebateBasis,
          true
        ),
        /**
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerRebateAndDeductionsGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerRebateAndDeductionsGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NOTES: fieldBuilder.buildEdmTypeField(
          'DocumentNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link guaranteePostingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTEE_POSTING_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'GuaranteePostingProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorRebateAndDeductionsGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REBATE_AND_DEDUCTIONS_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorRebateAndDeductionsGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'SourceDocumentType',
          TamRebateSourceType,
          true
        ),
        /**
         * Static representation of the {@link averagePurchasePriceBasisCalculationMonthRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVERAGE_PURCHASE_PRICE_BASIS_CALCULATION_MONTH_RANGE:
          fieldBuilder.buildEdmTypeField(
            'AveragePurchasePriceBasisCalculationMonthRange',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link rebatePriceBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_PRICE_BASIS: fieldBuilder.buildEnumField(
          'RebatePriceBasis',
          TamRebatePriceBasis,
          true
        ),
        /**
         * Static representation of the {@link productRebateAndDeductionsGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_REBATE_AND_DEDUCTIONS_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductRebateAndDeductionsGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matchedByOrderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHED_BY_ORDER_ACCOUNT: fieldBuilder.buildEnumField(
          'MatchedByOrderAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailProductVariantNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRODUCT_VARIANT_NUMBER: fieldBuilder.buildEdmTypeField(
          'RetailProductVariantNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rebateAndDeductionsStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AND_DEDUCTIONS_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'RebateAndDeductionsStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willRebateProcessingCalculationIncludeSettlementDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_SETTLEMENT_DISCOUNT:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludeSettlementDiscount',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link vendorRebateCalculationTransactionBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REBATE_CALCULATION_TRANSACTION_BASIS:
          fieldBuilder.buildEnumField(
            'VendorRebateCalculationTransactionBasis',
            TamRebateBasisVend,
            true
          ),
        /**
         * Static representation of the {@link operationalSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONAL_SITE_ID: fieldBuilder.buildEdmTypeField(
          'OperationalSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productUnitSymbolType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_UNIT_SYMBOL_TYPE: fieldBuilder.buildEnumField(
          'ProductUnitSymbolType',
          PdsUnitType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RebateAndDeductionAgreementHeaders)
      };
    }

    return this._schema;
  }
}
