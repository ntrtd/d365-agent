/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalTemplates } from './GoalTemplates';
import { GoalTemplatesRequestBuilder } from './GoalTemplatesRequestBuilder';
import { GoalTemplatePerformanceJournalsApi } from './GoalTemplatePerformanceJournalsApi';
import { GoalHeadingsApi } from './GoalHeadingsApi';
import { GoalTemplateMeasurementsApi } from './GoalTemplateMeasurementsApi';
import { HcmGoalLevel } from './HcmGoalLevel';
import { HrmGoalStatus } from './HrmGoalStatus';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class GoalTemplatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GoalTemplates<DeSerializersT>, DeSerializersT>
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
  ): GoalTemplatesApi<DeSerializersT> {
    return new GoalTemplatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link goalTemplatePerfJournals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_TEMPLATE_PERF_JOURNALS: OneToManyLink<
      GoalTemplates<DeSerializersT>,
      DeSerializersT,
      GoalTemplatePerformanceJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goalHeading} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_HEADING: OneToOneLink<
      GoalTemplates<DeSerializersT>,
      DeSerializersT,
      GoalHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENTS: OneToManyLink<
      GoalTemplates<DeSerializersT>,
      DeSerializersT,
      GoalTemplateMeasurementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      GoalTemplatePerformanceJournalsApi<DeSerializersT>,
      GoalHeadingsApi<DeSerializersT>,
      GoalTemplateMeasurementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      GOAL_TEMPLATE_PERF_JOURNALS: new OneToManyLink(
        'GoalTemplatePerfJournals',
        this,
        linkedApis[0]
      ),
      GOAL_HEADING: new OneToOneLink('GoalHeading', this, linkedApis[1]),
      MEASUREMENTS: new OneToManyLink('Measurements', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = GoalTemplates;

  requestBuilder(): GoalTemplatesRequestBuilder<DeSerializersT> {
    return new GoalTemplatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GoalTemplates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<GoalTemplates<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<GoalTemplates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof GoalTemplates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(GoalTemplates, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE_ID: OrderableEdmTypeField<
      GoalTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      GoalTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEVEL: EnumField<
      GoalTemplates<DeSerializers>,
      DeSerializersT,
      HcmGoalLevel,
      true,
      true
    >;
    STATUS: EnumField<
      GoalTemplates<DeSerializers>,
      DeSerializersT,
      HrmGoalStatus,
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      GoalTemplates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GOAL_HEADING_ID: OrderableEdmTypeField<
      GoalTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      GoalTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERVIEW: OrderableEdmTypeField<
      GoalTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goalTemplatePerfJournals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_TEMPLATE_PERF_JOURNALS: OneToManyLink<
      GoalTemplates<DeSerializersT>,
      DeSerializersT,
      GoalTemplatePerformanceJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goalHeading} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_HEADING: OneToOneLink<
      GoalTemplates<DeSerializersT>,
      DeSerializersT,
      GoalHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENTS: OneToManyLink<
      GoalTemplates<DeSerializersT>,
      DeSerializersT,
      GoalTemplateMeasurementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GoalTemplates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link templateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'TemplateId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link level} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL: fieldBuilder.buildEnumField('Level', HcmGoalLevel, true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', HrmGoalStatus, true),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link goalHeadingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_HEADING_ID: fieldBuilder.buildEdmTypeField(
          'GoalHeadingId',
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
         * Static representation of the {@link overview} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERVIEW: fieldBuilder.buildEdmTypeField(
          'Overview',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GoalTemplates)
      };
    }

    return this._schema;
  }
}
