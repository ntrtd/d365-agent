/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectCategoryEntities } from './ProjectCategoryEntities';
import { ProjectCategoryEntitiesRequestBuilder } from './ProjectCategoryEntitiesRequestBuilder';
import { JournalTransApi } from './JournalTransApi';
import { ProjectQuotationWbsTasksApi } from './ProjectQuotationWbsTasksApi';
import { ProjectWbsDraftsApi } from './ProjectWbsDraftsApi';
import { ProjWbsTemplateTasksApi } from './ProjWbsTemplateTasksApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProjWbsActivityEstimatesApi } from './ProjWbsActivityEstimatesApi';
import { NoYes } from './NoYes';
import { ProjCategoryType } from './ProjCategoryType';
import { ProjCategoryEmplOption } from './ProjCategoryEmplOption';
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
export class ProjectCategoryEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectCategoryEntities<DeSerializersT>, DeSerializersT>
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
  ): ProjectCategoryEntitiesApi<DeSerializersT> {
    return new ProjectCategoryEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectQuotationWbsTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_QUOTATION_WBS_TASK: OneToManyLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      ProjectQuotationWbsTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wbs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WBS: OneToManyLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      ProjectWbsDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projWbsTemplateTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_WBS_TEMPLATE_TASK: OneToManyLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      ProjWbsTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projWbsActivityEstimate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_WBS_ACTIVITY_ESTIMATE: OneToManyLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      ProjWbsActivityEstimatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalTransApi<DeSerializersT>,
      ProjectQuotationWbsTasksApi<DeSerializersT>,
      ProjectWbsDraftsApi<DeSerializersT>,
      ProjWbsTemplateTasksApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProjWbsActivityEstimatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_TRANS: new OneToOneLink('JournalTrans', this, linkedApis[0]),
      PROJECT_QUOTATION_WBS_TASK: new OneToManyLink(
        'ProjectQuotationWbsTask',
        this,
        linkedApis[1]
      ),
      WBS: new OneToManyLink('WBS', this, linkedApis[2]),
      PROJ_WBS_TEMPLATE_TASK: new OneToManyLink(
        'ProjWBSTemplateTask',
        this,
        linkedApis[3]
      ),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[4]
      ),
      PROJ_WBS_ACTIVITY_ESTIMATE: new OneToManyLink(
        'ProjWBSActivityEstimate',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = ProjectCategoryEntities;

  requestBuilder(): ProjectCategoryEntitiesRequestBuilder<DeSerializersT> {
    return new ProjectCategoryEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectCategoryEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectCategoryEntities<DeSerializersT>,
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
    typeof ProjectCategoryEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectCategoryEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_INFORMATION_SERVICE_CODE: OrderableEdmTypeField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABSENCE: EnumField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUBSCRIPTION: EnumField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATE: EnumField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INDIRECT_COST_COMPONENT: EnumField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_RETENTION: EnumField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVE_IN_JOURNALS: EnumField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY_GROUP: OrderableEdmTypeField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      ProjCategoryType,
      true,
      true
    >;
    ITEM_WITHHOLDING_TAX_GROUP_ID: OrderableEdmTypeField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_RATE_TYPE_NAME: OrderableEdmTypeField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER: EnumField<
      ProjectCategoryEntities<DeSerializers>,
      DeSerializersT,
      ProjCategoryEmplOption,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectQuotationWbsTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_QUOTATION_WBS_TASK: OneToManyLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      ProjectQuotationWbsTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wbs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WBS: OneToManyLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      ProjectWbsDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projWbsTemplateTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_WBS_TEMPLATE_TASK: OneToManyLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      ProjWbsTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projWbsActivityEstimate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_WBS_ACTIVITY_ESTIMATE: OneToManyLink<
      ProjectCategoryEntities<DeSerializersT>,
      DeSerializersT,
      ProjWbsActivityEstimatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectCategoryEntities<DeSerializers>>;
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
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalInformationServiceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_INFORMATION_SERVICE_CODE: fieldBuilder.buildEdmTypeField(
          'FiscalInformationServiceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link absence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE: fieldBuilder.buildEnumField('Absence', NoYes, true),
        /**
         * Static representation of the {@link subscription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSCRIPTION: fieldBuilder.buildEnumField('Subscription', NoYes, true),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link estimate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATE: fieldBuilder.buildEnumField('Estimate', NoYes, true),
        /**
         * Static representation of the {@link indirectCostComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDIRECT_COST_COMPONENT: fieldBuilder.buildEnumField(
          'IndirectCostComponent',
          NoYes,
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
         * Static representation of the {@link customerPaymentRetention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_RETENTION: fieldBuilder.buildEnumField(
          'CustomerPaymentRetention',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link activeInJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_IN_JOURNALS: fieldBuilder.buildEnumField(
          'ActiveInJournals',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link categoryGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_GROUP: fieldBuilder.buildEdmTypeField(
          'CategoryGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          ProjCategoryType,
          true
        ),
        /**
         * Static representation of the {@link itemWithholdingTaxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WITHHOLDING_TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemWithholdingTaxGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxRateTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'TaxRateTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link worker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER: fieldBuilder.buildEnumField(
          'Worker',
          ProjCategoryEmplOption,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectCategoryEntities)
      };
    }

    return this._schema;
  }
}
