/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectQuotationWbsTasks } from './ProjectQuotationWbsTasks';
import { ProjectQuotationWbsTasksRequestBuilder } from './ProjectQuotationWbsTasksRequestBuilder';
import { ProjectCategoryEntitiesApi } from './ProjectCategoryEntitiesApi';
import { ResourceCategoriesApi } from './ResourceCategoriesApi';
import { NoYes } from './NoYes';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';
import { SmmActivityPriority } from './SmmActivityPriority';
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
export class ProjectQuotationWbsTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectQuotationWbsTasks<DeSerializersT>, DeSerializersT>
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
  ): ProjectQuotationWbsTasksApi<DeSerializersT> {
    return new ProjectQuotationWbsTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link projectCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CATEGORIES: OneToOneLink<
      ProjectQuotationWbsTasks<DeSerializersT>,
      DeSerializersT,
      ProjectCategoryEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CATEGORY: OneToOneLink<
      ProjectQuotationWbsTasks<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProjectCategoryEntitiesApi<DeSerializersT>,
      ResourceCategoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROJECT_CATEGORIES: new OneToOneLink(
        'ProjectCategories',
        this,
        linkedApis[0]
      ),
      RESOURCE_CATEGORY: new OneToOneLink(
        'ResourceCategory',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProjectQuotationWbsTasks;

  requestBuilder(): ProjectQuotationWbsTasksRequestBuilder<DeSerializersT> {
    return new ProjectQuotationWbsTasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectQuotationWbsTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectQuotationWbsTasks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectQuotationWbsTasks<DeSerializersT>,
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
    typeof ProjectQuotationWbsTasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectQuotationWbsTasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUOTATION_ID: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WBS_ID: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TASK_CLOSED: EnumField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TASK: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_RESOURCES: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TASK_EFFORT_AT_COMPLETE: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TASK_COST_AT_COMPLETE: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EFFORT: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CATEGORY_MANDATORY: EnumField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ROLE: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_TASK_TIME_TYPE: EnumField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      SmmActivityTaskTimeType,
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DURATION: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_TASK_MANDATORY: EnumField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVITY_STATUS: EnumField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      SmmActivityTaskTimeType,
      true,
      true
    >;
    PREDECESSORS: OrderableEdmTypeField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_PRIORITY: EnumField<
      ProjectQuotationWbsTasks<DeSerializers>,
      DeSerializersT,
      SmmActivityPriority,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CATEGORIES: OneToOneLink<
      ProjectQuotationWbsTasks<DeSerializersT>,
      DeSerializersT,
      ProjectCategoryEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CATEGORY: OneToOneLink<
      ProjectQuotationWbsTasks<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectQuotationWbsTasks<DeSerializers>>;
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
         * Static representation of the {@link quotationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_ID: fieldBuilder.buildEdmTypeField(
          'QuotationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link wbsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ID: fieldBuilder.buildEdmTypeField('WBSId', 'Edm.String', false),
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
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isTaskClosed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TASK_CLOSED: fieldBuilder.buildEnumField(
          'IsTaskClosed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link task} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK: fieldBuilder.buildEdmTypeField('Task', 'Edm.String', true),
        /**
         * Static representation of the {@link numberOfResources} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_RESOURCES: fieldBuilder.buildEdmTypeField(
          'NumberOfResources',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taskEffortAtComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_EFFORT_AT_COMPLETE: fieldBuilder.buildEdmTypeField(
          'TaskEffortAtComplete',
          'Edm.Decimal',
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
         * Static representation of the {@link taskCostAtComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_COST_AT_COMPLETE: fieldBuilder.buildEdmTypeField(
          'TaskCostAtComplete',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link effort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFORT: fieldBuilder.buildEdmTypeField('Effort', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link isCategoryMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATEGORY_MANDATORY: fieldBuilder.buildEnumField(
          'IsCategoryMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link role} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE: fieldBuilder.buildEdmTypeField('Role', 'Edm.String', true),
        /**
         * Static representation of the {@link activityTaskTimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TASK_TIME_TYPE: fieldBuilder.buildEnumField(
          'ActivityTaskTimeType',
          SmmActivityTaskTimeType,
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link duration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION: fieldBuilder.buildEdmTypeField(
          'Duration',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isTaskMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TASK_MANDATORY: fieldBuilder.buildEnumField(
          'IsTaskMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link activityStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_STATUS: fieldBuilder.buildEnumField(
          'ActivityStatus',
          SmmActivityTaskTimeType,
          true
        ),
        /**
         * Static representation of the {@link predecessors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREDECESSORS: fieldBuilder.buildEdmTypeField(
          'Predecessors',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taskPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_PRIORITY: fieldBuilder.buildEnumField(
          'TaskPriority',
          SmmActivityPriority,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectQuotationWbsTasks)
      };
    }

    return this._schema;
  }
}
