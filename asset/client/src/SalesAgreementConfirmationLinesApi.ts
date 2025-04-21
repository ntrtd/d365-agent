/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesAgreementConfirmationLines } from './SalesAgreementConfirmationLines';
import { SalesAgreementConfirmationLinesRequestBuilder } from './SalesAgreementConfirmationLinesRequestBuilder';
import { OperationalSitesApi } from './OperationalSitesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProjectsApi } from './ProjectsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { WarehousesApi } from './WarehousesApi';
import { SalesAgreementConfirmationsApi } from './SalesAgreementConfirmationsApi';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { CommitmentType } from './CommitmentType';
import { NoYes } from './NoYes';
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
export class SalesAgreementConfirmationLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesAgreementConfirmationLines<DeSerializersT>, DeSerializersT>
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
  ): SalesAgreementConfirmationLinesApi<DeSerializersT> {
    return new SalesAgreementConfirmationLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link shippingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_SITE: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_WAREHOUSE: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesAgreementConfirmationHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADER: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OperationalSitesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      SalesAgreementConfirmationsApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SHIPPING_SITE: new OneToOneLink('ShippingSite', this, linkedApis[0]),
      DEFAULT_LEDGER_DIMENSION: new OneToOneLink(
        'DefaultLedgerDimension',
        this,
        linkedApis[1]
      ),
      PROJECT: new OneToOneLink('Project', this, linkedApis[2]),
      RELEASED_PRODUCT: new OneToOneLink(
        'ReleasedProduct',
        this,
        linkedApis[3]
      ),
      SHIPPING_WAREHOUSE: new OneToOneLink(
        'ShippingWarehouse',
        this,
        linkedApis[4]
      ),
      SALES_AGREEMENT_CONFIRMATION_HEADER: new OneToOneLink(
        'SalesAgreementConfirmationHeader',
        this,
        linkedApis[5]
      ),
      UNIT: new OneToOneLink('Unit', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = SalesAgreementConfirmationLines;

  requestBuilder(): SalesAgreementConfirmationLinesRequestBuilder<DeSerializersT> {
    return new SalesAgreementConfirmationLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesAgreementConfirmationLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesAgreementConfirmationLines<DeSerializersT>,
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
    typeof SalesAgreementConfirmationLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesAgreementConfirmationLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_AGREEMENT_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONFIRMATION_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_PROFILE_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_RELEASE_AMOUNT: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONFIRMATION_CREATION_DATE_TIME: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE_QUANTITY: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_AGREEMENT_CONFIRMATION_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMITTED_QUANTITY: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMMITMENT_TYPE: EnumField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      CommitmentType,
      true,
      true
    >;
    IS_COMMITMENT_MAXIMUM_ENFORCED: EnumField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMISSION_SALES_REPRESENTATIVE_GROUP_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_RELEASE_AMOUNT: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ACTIVITY_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_AGREEMENT_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMITTED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMITTED_AMOUNT: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGREEMENT_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRICE_AND_DISCOUNT_FIXED: EnumField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_SITE_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      SalesAgreementConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_SITE: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_WAREHOUSE: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesAgreementConfirmationHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADER: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT: OneToOneLink<
      SalesAgreementConfirmationLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesAgreementConfirmationLines<DeSerializers>>;
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
         * Static representation of the {@link salesAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'SalesAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link confirmationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConfirmationNumber',
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceCustomerAccountNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'SalesProductCategoryName',
          'Edm.String',
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
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
         * Static representation of the {@link minimumReleaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_RELEASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumReleaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link confirmationCreationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMATION_CREATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ConfirmationCreationDateTime',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link salesAgreementConfirmationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AGREEMENT_CONFIRMATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesAgreementConfirmationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
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
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
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
         * Static representation of the {@link commitmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITMENT_TYPE: fieldBuilder.buildEnumField(
          'CommitmentType',
          CommitmentType,
          true
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
         * Static representation of the {@link lineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LineDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link commissionSalesRepresentativeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_SALES_REPRESENTATIVE_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'CommissionSalesRepresentativeGroupId',
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
         * Static representation of the {@link unitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitSymbol',
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
         * Static representation of the {@link salesAgreementLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AGREEMENT_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'SalesAgreementLegalEntityId',
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
         * Static representation of the {@link committedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITTED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CommittedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agreementCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementCustomerAccountNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link lineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineDiscountAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingWarehouseId',
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
         * Static representation of the {@link shippingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingSiteId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesAgreementConfirmationLines)
      };
    }

    return this._schema;
  }
}
