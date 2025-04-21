/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JournalTrans } from './JournalTrans';
import { JournalTransRequestBuilder } from './JournalTransRequestBuilder';
import { JournalTablesApi } from './JournalTablesApi';
import { ProjectResourcesApi } from './ProjectResourcesApi';
import { ResourceCategoriesApi } from './ResourceCategoriesApi';
import { ProjectLinePropertiesApi } from './ProjectLinePropertiesApi';
import { ProjectsApi } from './ProjectsApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProjectCategoryEntitiesApi } from './ProjectCategoryEntitiesApi';
import { NoYes } from './NoYes';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
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
export class JournalTransApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JournalTrans<DeSerializersT>, DeSerializersT>
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
  ): JournalTransApi<DeSerializersT> {
    return new JournalTransApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link journalTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TABLE: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      JournalTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_RESOURCE: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CATEGORY: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectLineProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_LINE_PROPERTY: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectLinePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectCategoryEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CATEGORY_ENTITY: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectCategoryEntitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalTablesApi<DeSerializersT>,
      ProjectResourcesApi<DeSerializersT>,
      ResourceCategoriesApi<DeSerializersT>,
      ProjectLinePropertiesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ProjectCategoryEntitiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_TABLE: new OneToOneLink('JournalTable', this, linkedApis[0]),
      PROJECT_RESOURCE: new OneToOneLink(
        'ProjectResource',
        this,
        linkedApis[1]
      ),
      RESOURCE_CATEGORY: new OneToOneLink(
        'ResourceCategory',
        this,
        linkedApis[2]
      ),
      PROJECT_LINE_PROPERTY: new OneToOneLink(
        'ProjectLineProperty',
        this,
        linkedApis[3]
      ),
      PROJECT: new OneToOneLink('Project', this, linkedApis[4]),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[5]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[6]),
      PROJECT_CATEGORY_ENTITY: new OneToOneLink(
        'ProjectCategoryEntity',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = JournalTrans;

  requestBuilder(): JournalTransRequestBuilder<DeSerializersT> {
    return new JournalTransRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JournalTrans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JournalTrans<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JournalTrans<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JournalTrans, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(JournalTrans, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_ID: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_GROUP: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENTAGE_COMPLETE: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_ID: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REVERSING_ENTRY: EnumField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_WRK_CTR_ID: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSING_DATE: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESOURCE_COMPANY_ID: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_DATE: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LINE_PROPERTY: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_TIME: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RESOURCE_CATEGORY_ID: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_DATE: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TYPE_OF_OPERATION: EnumField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOURS: OrderableEdmTypeField<
      JournalTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TABLE: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      JournalTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_RESOURCE: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CATEGORY: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectLineProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_LINE_PROPERTY: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectLinePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectCategoryEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CATEGORY_ENTITY: OneToOneLink<
      JournalTrans<DeSerializersT>,
      DeSerializersT,
      ProjectCategoryEntitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JournalTrans<DeSerializers>>;
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
         * Static representation of the {@link journalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ID: fieldBuilder.buildEdmTypeField(
          'JournalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_GROUP: fieldBuilder.buildEdmTypeField(
          'PriceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link percentageComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_COMPLETE: fieldBuilder.buildEdmTypeField(
          'PercentageComplete',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
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
         * Static representation of the {@link currencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_ID: fieldBuilder.buildEdmTypeField(
          'CurrencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST: fieldBuilder.buildEdmTypeField('Cost', 'Edm.String', true),
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
         * Static representation of the {@link reversingEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSING_ENTRY: fieldBuilder.buildEnumField(
          'ReversingEntry',
          NoYes,
          true
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
         * Static representation of the {@link psaWrkCtrId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_WRK_CTR_ID: fieldBuilder.buildEdmTypeField(
          'PSAWrkCtrId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reversingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSING_DATE: fieldBuilder.buildEdmTypeField(
          'ReversingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link resourceCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'ResourceCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_DATE: fieldBuilder.buildEdmTypeField(
          'VoucherDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lineProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PROPERTY: fieldBuilder.buildEdmTypeField(
          'LineProperty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_TIME: fieldBuilder.buildEdmTypeField('EndTime', 'Edm.Int32', false),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.Int32',
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
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
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
         * Static representation of the {@link costPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PRICE: fieldBuilder.buildEdmTypeField(
          'CostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link typeOfOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_OPERATION: fieldBuilder.buildEnumField(
          'TypeOfOperation',
          VendorOperationTypeMx,
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURS: fieldBuilder.buildEdmTypeField('Hours', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JournalTrans)
      };
    }

    return this._schema;
  }
}
