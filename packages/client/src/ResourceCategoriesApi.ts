/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceCategories } from './ResourceCategories';
import { ResourceCategoriesRequestBuilder } from './ResourceCategoriesRequestBuilder';
import { JournalTransApi } from './JournalTransApi';
import { ProjectEmplForecastsApi } from './ProjectEmplForecastsApi';
import { ProjectExpenseForecastsApi } from './ProjectExpenseForecastsApi';
import { ProjectQuotationWbsTasksApi } from './ProjectQuotationWbsTasksApi';
import { TransferPricesApi } from './TransferPricesApi';
import { ProjectWbsDraftsApi } from './ProjectWbsDraftsApi';
import { ProjWbsTemplateTasksApi } from './ProjWbsTemplateTasksApi';
import { ProjectFeeForecastsApi } from './ProjectFeeForecastsApi';
import { FalseTrue } from './FalseTrue';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ResourceCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ResourceCategories<DeSerializersT>, DeSerializersT>
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
  ): ResourceCategoriesApi<DeSerializersT> {
    return new ResourceCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectEmplForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EMPL_FORECAST: OneToOneLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjectEmplForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectExpenseForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_FORECAST: OneToOneLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjectExpenseForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectQuotationWbsTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_QUOTATION_WBS_TASK: OneToManyLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjectQuotationWbsTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transferPrice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_PRICE: OneToManyLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      TransferPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wbs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WBS: OneToManyLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjectWbsDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projWbsTemplateTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_WBS_TEMPLATE_TASK: OneToManyLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjWbsTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectFeeForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_FEE_FORECAST: OneToOneLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjectFeeForecastsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalTransApi<DeSerializersT>,
      ProjectEmplForecastsApi<DeSerializersT>,
      ProjectExpenseForecastsApi<DeSerializersT>,
      ProjectQuotationWbsTasksApi<DeSerializersT>,
      TransferPricesApi<DeSerializersT>,
      ProjectWbsDraftsApi<DeSerializersT>,
      ProjWbsTemplateTasksApi<DeSerializersT>,
      ProjectFeeForecastsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_TRANS: new OneToOneLink('JournalTrans', this, linkedApis[0]),
      PROJECT_EMPL_FORECAST: new OneToOneLink(
        'ProjectEmplForecast',
        this,
        linkedApis[1]
      ),
      PROJECT_EXPENSE_FORECAST: new OneToOneLink(
        'ProjectExpenseForecast',
        this,
        linkedApis[2]
      ),
      PROJECT_QUOTATION_WBS_TASK: new OneToManyLink(
        'ProjectQuotationWbsTask',
        this,
        linkedApis[3]
      ),
      TRANSFER_PRICE: new OneToManyLink('TransferPrice', this, linkedApis[4]),
      WBS: new OneToManyLink('WBS', this, linkedApis[5]),
      PROJ_WBS_TEMPLATE_TASK: new OneToManyLink(
        'ProjWBSTemplateTask',
        this,
        linkedApis[6]
      ),
      PROJECT_FEE_FORECAST: new OneToOneLink(
        'ProjectFeeForecast',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = ResourceCategories;

  requestBuilder(): ResourceCategoriesRequestBuilder<DeSerializersT> {
    return new ResourceCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ResourceCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ResourceCategories<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ResourceCategories<DeSerializersT>,
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
    typeof ResourceCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ResourceCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ResourceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROLE_ID: OrderableEdmTypeField<
      ResourceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_CATEGORY_DISABLED: EnumField<
      ResourceCategories<DeSerializers>,
      DeSerializersT,
      FalseTrue,
      true,
      true
    >;
    DEFAULT_RESOURCE_CATEGORY: EnumField<
      ResourceCategories<DeSerializers>,
      DeSerializersT,
      FalseTrue,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ResourceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectEmplForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EMPL_FORECAST: OneToOneLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjectEmplForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectExpenseForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_FORECAST: OneToOneLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjectExpenseForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectQuotationWbsTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_QUOTATION_WBS_TASK: OneToManyLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjectQuotationWbsTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transferPrice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_PRICE: OneToManyLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      TransferPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wbs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WBS: OneToManyLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjectWbsDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projWbsTemplateTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_WBS_TEMPLATE_TASK: OneToManyLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjWbsTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectFeeForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_FEE_FORECAST: OneToOneLink<
      ResourceCategories<DeSerializersT>,
      DeSerializersT,
      ProjectFeeForecastsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ResourceCategories<DeSerializers>>;
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
         * Static representation of the {@link roleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE_ID: fieldBuilder.buildEdmTypeField('RoleId', 'Edm.String', false),
        /**
         * Static representation of the {@link isCategoryDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATEGORY_DISABLED: fieldBuilder.buildEnumField(
          'IsCategoryDisabled',
          FalseTrue,
          true
        ),
        /**
         * Static representation of the {@link defaultResourceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RESOURCE_CATEGORY: fieldBuilder.buildEnumField(
          'DefaultResourceCategory',
          FalseTrue,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ResourceCategories)
      };
    }

    return this._schema;
  }
}
