/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalTemplatePerformanceJournals } from './GoalTemplatePerformanceJournals';
import { GoalTemplatePerformanceJournalsRequestBuilder } from './GoalTemplatePerformanceJournalsRequestBuilder';
import { GoalTemplatesApi } from './GoalTemplatesApi';
import { HcmPerfJournalSourceType } from './HcmPerfJournalSourceType';
import { HcmPerfManagerEmployee } from './HcmPerfManagerEmployee';
import { NoYes } from './NoYes';
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
export class GoalTemplatePerformanceJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<GoalTemplatePerformanceJournals<DeSerializersT>, DeSerializersT>
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
  ): GoalTemplatePerformanceJournalsApi<DeSerializersT> {
    return new GoalTemplatePerformanceJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link goalTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_TEMPLATE: OneToOneLink<
      GoalTemplatePerformanceJournals<DeSerializersT>,
      DeSerializersT,
      GoalTemplatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [GoalTemplatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      GOAL_TEMPLATE: new OneToOneLink('GoalTemplate', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = GoalTemplatePerformanceJournals;

  requestBuilder(): GoalTemplatePerformanceJournalsRequestBuilder<DeSerializersT> {
    return new GoalTemplatePerformanceJournalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GoalTemplatePerformanceJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GoalTemplatePerformanceJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GoalTemplatePerformanceJournals<DeSerializersT>,
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
    typeof GoalTemplatePerformanceJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GoalTemplatePerformanceJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GOAL_TEMPLATE_ID: OrderableEdmTypeField<
      GoalTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERF_JOURNAL_TEMPLATE_ID: OrderableEdmTypeField<
      GoalTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      GoalTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TYPE_ID: EnumField<
      GoalTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      HcmPerfJournalSourceType,
      true,
      true
    >;
    OWNER: EnumField<
      GoalTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      HcmPerfManagerEmployee,
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      GoalTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOAL_TEMPLATE_TITLE: OrderableEdmTypeField<
      GoalTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEVELOPMENT_TASK: EnumField<
      GoalTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHARE: EnumField<
      GoalTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    KEYWORDS: OrderableEdmTypeField<
      GoalTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goalTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_TEMPLATE: OneToOneLink<
      GoalTemplatePerformanceJournals<DeSerializersT>,
      DeSerializersT,
      GoalTemplatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GoalTemplatePerformanceJournals<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link goalTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'GoalTemplateId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link perfJournalTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERF_JOURNAL_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'PerfJournalTemplateId',
          'Edm.Int32',
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
         * Static representation of the {@link sourceTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TYPE_ID: fieldBuilder.buildEnumField(
          'SourceTypeId',
          HcmPerfJournalSourceType,
          true
        ),
        /**
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEnumField(
          'Owner',
          HcmPerfManagerEmployee,
          true
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link goalTemplateTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_TEMPLATE_TITLE: fieldBuilder.buildEdmTypeField(
          'GoalTemplateTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDevelopmentTask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEVELOPMENT_TASK: fieldBuilder.buildEnumField(
          'IsDevelopmentTask',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link share} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARE: fieldBuilder.buildEnumField('Share', NoYes, true),
        /**
         * Static representation of the {@link keywords} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYWORDS: fieldBuilder.buildEdmTypeField(
          'Keywords',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GoalTemplatePerformanceJournals)
      };
    }

    return this._schema;
  }
}
