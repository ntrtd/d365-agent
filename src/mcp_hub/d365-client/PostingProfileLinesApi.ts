/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PostingProfileLines } from './PostingProfileLines';
import { PostingProfileLinesRequestBuilder } from './PostingProfileLinesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { TableGroupAll } from './TableGroupAll';
import { DimensionHierarchyType } from './DimensionHierarchyType';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';
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
export class PostingProfileLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PostingProfileLines<DeSerializersT>, DeSerializersT>
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
  ): PostingProfileLinesApi<DeSerializersT> {
    return new PostingProfileLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorPostingProfileOffsetAccountRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_POSTING_PROFILE_OFFSET_ACCOUNT_ROLE: OneToOneLink<
      PostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPostingProfileSalesTaxPrepayRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_POSTING_PROFILE_SALES_TAX_PREPAY_ROLE: OneToOneLink<
      PostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPostingProfileSettleAccountRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_POSTING_PROFILE_SETTLE_ACCOUNT_ROLE: OneToOneLink<
      PostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPostingProfileSummaryAccountRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_POSTING_PROFILE_SUMMARY_ACCOUNT_ROLE: OneToOneLink<
      PostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPostingProfileArrivalAccountRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_POSTING_PROFILE_ARRIVAL_ACCOUNT_ROLE: OneToOneLink<
      PostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_POSTING_PROFILE_OFFSET_ACCOUNT_ROLE: new OneToOneLink(
        'VendorPostingProfileOffsetAccountRole',
        this,
        linkedApis[0]
      ),
      VENDOR_POSTING_PROFILE_SALES_TAX_PREPAY_ROLE: new OneToOneLink(
        'VendorPostingProfileSalesTaxPrepayRole',
        this,
        linkedApis[1]
      ),
      VENDOR_POSTING_PROFILE_SETTLE_ACCOUNT_ROLE: new OneToOneLink(
        'VendorPostingProfileSettleAccountRole',
        this,
        linkedApis[2]
      ),
      VENDOR_POSTING_PROFILE_SUMMARY_ACCOUNT_ROLE: new OneToOneLink(
        'VendorPostingProfileSummaryAccountRole',
        this,
        linkedApis[3]
      ),
      VENDOR_POSTING_PROFILE_ARRIVAL_ACCOUNT_ROLE: new OneToOneLink(
        'VendorPostingProfileArrivalAccountRole',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = PostingProfileLines;

  requestBuilder(): PostingProfileLinesRequestBuilder<DeSerializersT> {
    return new PostingProfileLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PostingProfileLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PostingProfileLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PostingProfileLines<DeSerializersT>,
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
    typeof PostingProfileLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PostingProfileLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_CODE: EnumField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ACCOUNT_GROUP_NUMBER: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIERARCHY_NAME: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINE_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIERARCHY_TYPE: EnumField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyType,
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_TRANSFER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIERARCHY_STATUS: EnumField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyConstraintStatus,
      true,
      true
    >;
    SALES_TAX_PREPAYMENTS_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARRIVAL_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_INTEREST_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUMMARY_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPostingProfileOffsetAccountRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_POSTING_PROFILE_OFFSET_ACCOUNT_ROLE: OneToOneLink<
      PostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPostingProfileSalesTaxPrepayRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_POSTING_PROFILE_SALES_TAX_PREPAY_ROLE: OneToOneLink<
      PostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPostingProfileSettleAccountRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_POSTING_PROFILE_SETTLE_ACCOUNT_ROLE: OneToOneLink<
      PostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPostingProfileSummaryAccountRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_POSTING_PROFILE_SUMMARY_ACCOUNT_ROLE: OneToOneLink<
      PostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPostingProfileArrivalAccountRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_POSTING_PROFILE_ARRIVAL_ACCOUNT_ROLE: OneToOneLink<
      PostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PostingProfileLines<DeSerializers>>;
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
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link accountGroupNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_GROUP_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountGroupNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'HierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fineAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FineAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hierarchyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_TYPE: fieldBuilder.buildEnumField(
          'HierarchyType',
          DimensionHierarchyType,
          true
        ),
        /**
         * Static representation of the {@link offsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxTransferAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANSFER_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'TaxTransferAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hierarchyStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_STATUS: fieldBuilder.buildEnumField(
          'HierarchyStatus',
          DimensionHierarchyConstraintStatus,
          true
        ),
        /**
         * Static representation of the {@link salesTaxPrepaymentsAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_PREPAYMENTS_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'SalesTaxPrepaymentsAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link arrivalAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARRIVAL_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ArrivalAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link financialInterestAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_INTEREST_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'FinancialInterestAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link settleAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'SettleAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link summaryAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMARY_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'SummaryAccountDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PostingProfileLines)
      };
    }

    return this._schema;
  }
}
