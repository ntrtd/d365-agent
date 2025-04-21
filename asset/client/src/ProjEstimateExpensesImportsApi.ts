/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjEstimateExpensesImports } from './ProjEstimateExpensesImports';
import { ProjEstimateExpensesImportsRequestBuilder } from './ProjEstimateExpensesImportsRequestBuilder';
import { ProjCdsTransType } from './ProjCdsTransType';
import { ProjBillingType } from './ProjBillingType';
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
export class ProjEstimateExpensesImportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjEstimateExpensesImports<DeSerializersT>, DeSerializersT>
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
  ): ProjEstimateExpensesImportsApi<DeSerializersT> {
    return new ProjEstimateExpensesImportsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjEstimateExpensesImports;

  requestBuilder(): ProjEstimateExpensesImportsRequestBuilder<DeSerializersT> {
    return new ProjEstimateExpensesImportsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjEstimateExpensesImports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjEstimateExpensesImports<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjEstimateExpensesImports<DeSerializersT>,
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
    typeof ProjEstimateExpensesImports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjEstimateExpensesImports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ESTIMATE_EXPENSES_IMPORT_ID: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TYPE: EnumField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      ProjCdsTransType,
      true,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJ_CDS_RESOURCE_ID: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    RESOURCE_CATEGORY_ID: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CATEGORY_ID: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN_ESTIMATE_LINE_ID: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BILLING_TYPE: EnumField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      ProjBillingType,
      true,
      true
    >;
    ESTIMATE_LINE_ID: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY_ID: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTRACT_LINE_ID: OrderableEdmTypeField<
      ProjEstimateExpensesImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjEstimateExpensesImports<DeSerializers>>;
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
         * Static representation of the {@link estimateExpensesImportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATE_EXPENSES_IMPORT_ID: fieldBuilder.buildEdmTypeField(
          'EstimateExpensesImportId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link transType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TYPE: fieldBuilder.buildEnumField(
          'TransType',
          ProjCdsTransType,
          true
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link projCdsResourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CDS_RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ProjCDSResourceId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link resourceCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ResourceCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link transactionCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'TransactionCategoryId',
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
         * Static representation of the {@link originEstimateLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_ESTIMATE_LINE_ID: fieldBuilder.buildEdmTypeField(
          'OriginEstimateLineId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link billingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_TYPE: fieldBuilder.buildEnumField(
          'BillingType',
          ProjBillingType,
          true
        ),
        /**
         * Static representation of the {@link estimateLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATE_LINE_ID: fieldBuilder.buildEdmTypeField(
          'EstimateLineId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link currencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_ID: fieldBuilder.buildEdmTypeField(
          'CurrencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contractLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'ContractLineId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjEstimateExpensesImports)
      };
    }

    return this._schema;
  }
}
