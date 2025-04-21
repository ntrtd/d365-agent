/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectUnpostedTransViews } from './ProjectUnpostedTransViews';
import { ProjectUnpostedTransViewsRequestBuilder } from './ProjectUnpostedTransViewsRequestBuilder';
import { ProjOrigin } from './ProjOrigin';
import { ProjTransType } from './ProjTransType';
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
export class ProjectUnpostedTransViewsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjectUnpostedTransViews<DeSerializersT>, DeSerializersT>
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
  ): ProjectUnpostedTransViewsApi<DeSerializersT> {
    return new ProjectUnpostedTransViewsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectUnpostedTransViews;

  requestBuilder(): ProjectUnpostedTransViewsRequestBuilder<DeSerializersT> {
    return new ProjectUnpostedTransViewsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectUnpostedTransViews<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectUnpostedTransViews<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectUnpostedTransViews<DeSerializersT>,
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
    typeof ProjectUnpostedTransViews,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectUnpostedTransViews,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATA_AREA_ID: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_ORIGIN: EnumField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      ProjOrigin,
      true,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_AREA_ID_UNION: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      ProjTransType,
      true,
      true
    >;
    RESOURCE_NAME: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LINE_PROPERTY_ID: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_ID: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ProjectUnpostedTransViews<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProjectUnpostedTransViews<DeSerializers>>;
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
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
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
         * Static representation of the {@link costPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PRICE: fieldBuilder.buildEdmTypeField(
          'CostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
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
         * Static representation of the {@link transactionDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'TransactionDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ORIGIN: fieldBuilder.buildEnumField(
          'TransactionOrigin',
          ProjOrigin,
          true
        ),
        /**
         * Static representation of the {@link categoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'CategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataAreaIdUnion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID_UNION: fieldBuilder.buildEdmTypeField(
          'dataAreaIdUnion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          ProjTransType,
          true
        ),
        /**
         * Static representation of the {@link resourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'ResourceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link linePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'LinePropertyId',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectUnpostedTransViews)
      };
    }

    return this._schema;
  }
}
