/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectItemJournalTrans } from './ProjectItemJournalTrans';
import { ProjectItemJournalTransRequestBuilder } from './ProjectItemJournalTransRequestBuilder';
import { ProjectLinePropertiesApi } from './ProjectLinePropertiesApi';
import { ProjectsApi } from './ProjectsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProjectItemJournalTransApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectItemJournalTrans<DeSerializersT>, DeSerializersT>
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
  ): ProjectItemJournalTransApi<DeSerializersT> {
    return new ProjectItemJournalTransApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link projectLineProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_LINE_PROPERTY: OneToOneLink<
      ProjectItemJournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectLinePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ProjectItemJournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjectItemJournalTrans<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProjectLinePropertiesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROJECT_LINE_PROPERTY: new OneToOneLink(
        'ProjectLineProperty',
        this,
        linkedApis[0]
      ),
      PROJECT: new OneToOneLink('Project', this, linkedApis[1]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ProjectItemJournalTrans;

  requestBuilder(): ProjectItemJournalTransRequestBuilder<DeSerializersT> {
    return new ProjectItemJournalTransRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectItemJournalTrans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectItemJournalTrans<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectItemJournalTrans<DeSerializersT>,
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
    typeof ProjectItemJournalTrans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectItemJournalTrans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STORAGE_SITE_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TAX_ITEM_GROUP_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CW_QUANTITY: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_LINE_PROPERTY_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_UNIT_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANSACTION_RETURN_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_SALES_PRICE: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_TRANSACTION_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_SALES_CURRENCY_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANSACTION_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SERIAL_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_MARKUP: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STORAGE_LOCATION_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_DATE: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_WAREHOUSE_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TAX_GROUP_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProjectItemJournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectLineProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_LINE_PROPERTY: OneToOneLink<
      ProjectItemJournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectLinePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ProjectItemJournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjectItemJournalTrans<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectItemJournalTrans<DeSerializers>>;
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
         * Static representation of the {@link journalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ID: fieldBuilder.buildEdmTypeField(
          'JournalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', false),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link storageSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_SITE_ID: fieldBuilder.buildEdmTypeField(
          'StorageSiteId',
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
         * Static representation of the {@link inventDimensionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_ID: fieldBuilder.buildEdmTypeField(
          'InventDimensionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectTaxItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TAX_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProjectTaxItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cwQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CW_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CWQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link priceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'PriceUnit',
          'Edm.Decimal',
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
         * Static representation of the {@link projectLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectLinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectUnitID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventTransactionReturnId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANSACTION_RETURN_ID: fieldBuilder.buildEdmTypeField(
          'InventTransactionReturnId',
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
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectSalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'ProjectSalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'ProjectTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectSalesCurrencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_SALES_CURRENCY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectSalesCurrencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'InventTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSerialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'inventSerialId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_MARKUP: fieldBuilder.buildEdmTypeField(
          'CostMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link storageLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'StorageLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_DATE: fieldBuilder.buildEdmTypeField(
          'ProjectDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link storageWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'StorageWarehouseId',
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
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectTaxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProjectTaxGroupId',
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
        ALL_FIELDS: new AllFields('*', ProjectItemJournalTrans)
      };
    }

    return this._schema;
  }
}
