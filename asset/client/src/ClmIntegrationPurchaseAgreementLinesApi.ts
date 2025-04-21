/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ClmIntegrationPurchaseAgreementLines } from './ClmIntegrationPurchaseAgreementLines';
import { ClmIntegrationPurchaseAgreementLinesRequestBuilder } from './ClmIntegrationPurchaseAgreementLinesRequestBuilder';
import { WarehousesApi } from './WarehousesApi';
import { OperationalSitesApi } from './OperationalSitesApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProjectsApi } from './ProjectsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { NoYes } from './NoYes';
import { CommitmentType } from './CommitmentType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ClmIntegrationPurchaseAgreementLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
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
  ): ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT> {
    return new ClmIntegrationPurchaseAgreementLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_SITE: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link clmIntegrationPurchaseAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehousesApi<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RECEIVING_WAREHOUSE: new OneToOneLink(
        'ReceivingWarehouse',
        this,
        linkedApis[0]
      ),
      RECEIVING_SITE: new OneToOneLink('ReceivingSite', this, linkedApis[1]),
      CLM_INTEGRATION_PURCHASE_AGREEMENT: new OneToOneLink(
        'CLMIntegrationPurchaseAgreement',
        this,
        linkedApis[2]
      ),
      DEFAULT_LEDGER_DIMENSION: new OneToOneLink(
        'DefaultLedgerDimension',
        this,
        linkedApis[3]
      ),
      PROJECT: new OneToOneLink('Project', this, linkedApis[4]),
      RELEASED_PRODUCT: new OneToOneLink(
        'ReleasedProduct',
        this,
        linkedApis[5]
      ),
      UNIT: new OneToOneLink('Unit', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = ClmIntegrationPurchaseAgreementLines;

  requestBuilder(): ClmIntegrationPurchaseAgreementLinesRequestBuilder<DeSerializersT> {
    return new ClmIntegrationPurchaseAgreementLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
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
    typeof ClmIntegrationPurchaseAgreementLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ClmIntegrationPurchaseAgreementLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_AGREEMENT_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_AGREEMENT_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VARIANT_NUMBER: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CONTRACT_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMITTED_AMOUNT: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGREEMENT_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMITTED_QUANTITY: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVING_SITE_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMITTED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_QUANTITY: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CALENDAR_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_RELEASE_AMOUNT: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_PROFILE_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRICE_AND_DISCOUNT_FIXED: EnumField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMITMENT_TYPE: EnumField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      CommitmentType,
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ACTIVITY_NUMBER: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_COMMITMENT_MAXIMUM_ENFORCED: EnumField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_CONTRACT_LINE_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_RELEASE_AMOUNT: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      ClmIntegrationPurchaseAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_SITE: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link clmIntegrationPurchaseAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT: OneToOneLink<
      ClmIntegrationPurchaseAgreementLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ClmIntegrationPurchaseAgreementLines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseAgreementLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_AGREEMENT_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseAgreementLegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVariantNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductVariantNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ExternalContractId',
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
         * Static representation of the {@link committedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITTED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CommittedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agreementVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link committedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CommittedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link committedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITTED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CommittedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PriceQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineDiscountAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link shipCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'ShipCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumReleaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_RELEASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumReleaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPriceAndDiscountFixed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRICE_AND_DISCOUNT_FIXED: fieldBuilder.buildEnumField(
          'IsPriceAndDiscountFixed',
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
         * Static representation of the {@link lineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LineDiscountPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link commitmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITMENT_TYPE: fieldBuilder.buildEnumField(
          'CommitmentType',
          CommitmentType,
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
         * Static representation of the {@link projectActivityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjectActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isCommitmentMaximumEnforced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMMITMENT_MAXIMUM_ENFORCED: fieldBuilder.buildEnumField(
          'IsCommitmentMaximumEnforced',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link externalContractLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CONTRACT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'ExternalContractLineId',
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
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link procurementProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'ProcurementProductCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumReleaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_RELEASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumReleaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link receivingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingWarehouseId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ClmIntegrationPurchaseAgreementLines)
      };
    }

    return this._schema;
  }
}
