/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BillingCodeVersions } from './BillingCodeVersions';
import { BillingCodeVersionsRequestBuilder } from './BillingCodeVersionsRequestBuilder';
import { NoYes } from './NoYes';
import { RateField } from './RateField';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class BillingCodeVersionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BillingCodeVersions<DeSerializersT>, DeSerializersT>
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
  ): BillingCodeVersionsApi<DeSerializersT> {
    return new BillingCodeVersionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BillingCodeVersions;

  requestBuilder(): BillingCodeVersionsRequestBuilder<DeSerializersT> {
    return new BillingCodeVersionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BillingCodeVersions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BillingCodeVersions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BillingCodeVersions<DeSerializersT>,
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
    typeof BillingCodeVersions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BillingCodeVersions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BILLING_CODE: OrderableEdmTypeField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USE_LINE_VALUES_FOR_UNSPECIFIED_DIMENSIONS: EnumField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_CHANGES_TO_LEDGER_ACCOUNTS: EnumField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLING_CODE_DESCRIPTION: OrderableEdmTypeField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_CHANGES_TO_PROJECT: EnumField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEREST_CODE: OrderableEdmTypeField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_DETAILS: OrderableEdmTypeField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_TYPE: EnumField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      RateField,
      true,
      true
    >;
    ALLOW_CHANGES_TO_PROJECT_CATEGORY: EnumField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_INTEREST_CODE_FROM_BILLING_CLASSIFICATION: EnumField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CHANGE_AMOUNT_ON_INVOICE: EnumField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_CATEGORY: OrderableEdmTypeField<
      BillingCodeVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BillingCodeVersions<DeSerializers>>;
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
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link billingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CODE: fieldBuilder.buildEdmTypeField(
          'BillingCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link useLineValuesForUnspecifiedDimensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_LINE_VALUES_FOR_UNSPECIFIED_DIMENSIONS: fieldBuilder.buildEnumField(
          'UseLineValuesForUnspecifiedDimensions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowChangesToLedgerAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CHANGES_TO_LEDGER_ACCOUNTS: fieldBuilder.buildEnumField(
          'AllowChangesToLedgerAccounts',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link billingCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'BillingCodeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowChangesToProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CHANGES_TO_PROJECT: fieldBuilder.buildEnumField(
          'AllowChangesToProject',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link interestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_CODE: fieldBuilder.buildEdmTypeField(
          'InterestCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DETAILS: fieldBuilder.buildEdmTypeField(
          'AmountDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_TYPE: fieldBuilder.buildEnumField('RateType', RateField, true),
        /**
         * Static representation of the {@link allowChangesToProjectCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CHANGES_TO_PROJECT_CATEGORY: fieldBuilder.buildEnumField(
          'AllowChangesToProjectCategory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useInterestCodeFromBillingClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_INTEREST_CODE_FROM_BILLING_CLASSIFICATION:
          fieldBuilder.buildEnumField(
            'UseInterestCodeFromBillingClassification',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link allowChangeAmountOnInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CHANGE_AMOUNT_ON_INVOICE: fieldBuilder.buildEnumField(
          'AllowChangeAmountOnInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProjectCategory',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BillingCodeVersions)
      };
    }

    return this._schema;
  }
}
