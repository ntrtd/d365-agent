/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseAgreementLinesForAi } from './PurchaseAgreementLinesForAi';
import { PurchaseAgreementLinesForAiRequestBuilder } from './PurchaseAgreementLinesForAiRequestBuilder';
import { ReleasedProductsForAiApi } from './ReleasedProductsForAiApi';
import { PurchaseAgreementHeadersForAiApi } from './PurchaseAgreementHeadersForAiApi';
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
export class PurchaseAgreementLinesForAiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseAgreementLinesForAi<DeSerializersT>, DeSerializersT>
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
  ): PurchaseAgreementLinesForAiApi<DeSerializersT> {
    return new PurchaseAgreementLinesForAiApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      PurchaseAgreementLinesForAi<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADER: OneToOneLink<
      PurchaseAgreementLinesForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementHeadersForAiApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReleasedProductsForAiApi<DeSerializersT>,
      PurchaseAgreementHeadersForAiApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCT: new OneToOneLink(
        'ReleasedProduct',
        this,
        linkedApis[0]
      ),
      PURCHASE_AGREEMENT_HEADER: new OneToOneLink(
        'PurchaseAgreementHeader',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PurchaseAgreementLinesForAi;

  requestBuilder(): PurchaseAgreementLinesForAiRequestBuilder<DeSerializersT> {
    return new PurchaseAgreementLinesForAiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseAgreementLinesForAi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseAgreementLinesForAi<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseAgreementLinesForAi<DeSerializersT>,
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
    typeof PurchaseAgreementLinesForAi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseAgreementLinesForAi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_AGREEMENT_ID: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_RELEASE_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMITMENT_TYPE: EnumField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      CommitmentType,
      true,
      true
    >;
    LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRICE_AND_DISCOUNT_FIXED: EnumField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_RELEASE_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMITTED_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCUREMENT_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_COMMITMENT_MAXIMUM_ENFORCED: EnumField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_VENDOR_DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_SITE_ID: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMITTED_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      PurchaseAgreementLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      PurchaseAgreementLinesForAi<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADER: OneToOneLink<
      PurchaseAgreementLinesForAi<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementHeadersForAiApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseAgreementLinesForAi<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
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
         * Static representation of the {@link lineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LineDiscountPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link isPriceAndDiscountFixed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRICE_AND_DISCOUNT_FIXED: fieldBuilder.buildEnumField(
          'IsPriceAndDiscountFixed',
          NoYes,
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
         * Static representation of the {@link maximumReleaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_RELEASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumReleaseAmount',
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
         * Static representation of the {@link procurementProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'ProcurementProductCategoryName',
          'Edm.String',
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
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
         * Static representation of the {@link agreementVendorDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_VENDOR_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'AgreementVendorDataAreaId',
          'Edm.String',
          true
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
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
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
         * Static representation of the {@link receivingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingWarehouseId',
          'Edm.String',
          true
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
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
         * Static representation of the {@link priceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PriceQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseAgreementLinesForAi)
      };
    }

    return this._schema;
  }
}
