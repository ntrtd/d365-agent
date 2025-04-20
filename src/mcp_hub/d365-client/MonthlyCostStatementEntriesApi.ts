/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MonthlyCostStatementEntries } from './MonthlyCostStatementEntries';
import { MonthlyCostStatementEntriesRequestBuilder } from './MonthlyCostStatementEntriesRequestBuilder';
import { OperationalSitesApi } from './OperationalSitesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ProductStylesApi } from './ProductStylesApi';
import { ProductSizesApi } from './ProductSizesApi';
import { CostStatementType } from './CostStatementType';
import { CostStatementLineCategoryLevel1 } from './CostStatementLineCategoryLevel1';
import { CostStatementLineCategoryLevel2 } from './CostStatementLineCategoryLevel2';
import { CostStatementLineCategoryLevel3 } from './CostStatementLineCategoryLevel3';
import { InventValueReportResourceType } from './InventValueReportResourceType';
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
export class MonthlyCostStatementEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MonthlyCostStatementEntries<DeSerializersT>, DeSerializersT>
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
  ): MonthlyCostStatementEntriesApi<DeSerializersT> {
    return new MonthlyCostStatementEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToOneLink<
      MonthlyCostStatementEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      MonthlyCostStatementEntries<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      MonthlyCostStatementEntries<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      MonthlyCostStatementEntries<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OperationalSitesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OPERATIONAL_SITE: new OneToOneLink(
        'OperationalSite',
        this,
        linkedApis[0]
      ),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[1]),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[2]),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = MonthlyCostStatementEntries;

  requestBuilder(): MonthlyCostStatementEntriesRequestBuilder<DeSerializersT> {
    return new MonthlyCostStatementEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MonthlyCostStatementEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MonthlyCostStatementEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MonthlyCostStatementEntries<DeSerializersT>,
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
    typeof MonthlyCostStatementEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MonthlyCostStatementEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_STATEMENT_TYPE: EnumField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      CostStatementType,
      true,
      true
    >;
    ACCOUNTING_MONTH_START_DATE: OrderableEdmTypeField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEVEL_ONE_COST_STATEMENT_LINE_CATEGORY_NAME: EnumField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      CostStatementLineCategoryLevel1,
      true,
      true
    >;
    LEVEL_TWO_COST_STATEMENT_LINE_CATEGORY_NAME: EnumField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      CostStatementLineCategoryLevel2,
      true,
      true
    >;
    LEVEL_THREE_COST_STATEMENT_LINE_CATEGORY_NAME: EnumField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      CostStatementLineCategoryLevel3,
      true,
      true
    >;
    OPERATIONAL_SITE_ID: OrderableEdmTypeField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_RESOURCE_TYPE: EnumField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      InventValueReportResourceType,
      true,
      true
    >;
    COST_RESOURCE_NUMBER: OrderableEdmTypeField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_RESOURCE_GROUP_ID: OrderableEdmTypeField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      MonthlyCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToOneLink<
      MonthlyCostStatementEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      MonthlyCostStatementEntries<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      MonthlyCostStatementEntries<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      MonthlyCostStatementEntries<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MonthlyCostStatementEntries<DeSerializers>>;
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
         * Static representation of the {@link costStatementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_STATEMENT_TYPE: fieldBuilder.buildEnumField(
          'CostStatementType',
          CostStatementType,
          true
        ),
        /**
         * Static representation of the {@link accountingMonthStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_MONTH_START_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingMonthStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link levelOneCostStatementLineCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_ONE_COST_STATEMENT_LINE_CATEGORY_NAME:
          fieldBuilder.buildEnumField(
            'LevelOneCostStatementLineCategoryName',
            CostStatementLineCategoryLevel1,
            true
          ),
        /**
         * Static representation of the {@link levelTwoCostStatementLineCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_TWO_COST_STATEMENT_LINE_CATEGORY_NAME:
          fieldBuilder.buildEnumField(
            'LevelTwoCostStatementLineCategoryName',
            CostStatementLineCategoryLevel2,
            true
          ),
        /**
         * Static representation of the {@link levelThreeCostStatementLineCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_THREE_COST_STATEMENT_LINE_CATEGORY_NAME:
          fieldBuilder.buildEnumField(
            'LevelThreeCostStatementLineCategoryName',
            CostStatementLineCategoryLevel3,
            true
          ),
        /**
         * Static representation of the {@link operationalSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONAL_SITE_ID: fieldBuilder.buildEdmTypeField(
          'OperationalSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costResourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_RESOURCE_TYPE: fieldBuilder.buildEnumField(
          'CostResourceType',
          InventValueReportResourceType,
          true
        ),
        /**
         * Static representation of the {@link costResourceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_RESOURCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CostResourceNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costResourceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_RESOURCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CostResourceGroupId',
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
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MonthlyCostStatementEntries)
      };
    }

    return this._schema;
  }
}
