/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Discussions } from './Discussions';
import { DiscussionsRequestBuilder } from './DiscussionsRequestBuilder';
import { DiscussionGoalsApi } from './DiscussionGoalsApi';
import { DiscussionTopicsApi } from './DiscussionTopicsApi';
import { DiscussionPerformanceJournalEntriesApi } from './DiscussionPerformanceJournalEntriesApi';
import { DiscussionGoalCommentsApi } from './DiscussionGoalCommentsApi';
import { RatingModelsApi } from './RatingModelsApi';
import { PerfPeriodsApi } from './PerfPeriodsApi';
import { RatingLevelsApi } from './RatingLevelsApi';
import { WorkersApi } from './WorkersApi';
import { DiscussionTypesApi } from './DiscussionTypesApi';
import { DiscussionTopicCommentsApi } from './DiscussionTopicCommentsApi';
import { DiscussionMeasurementsApi } from './DiscussionMeasurementsApi';
import { DiscussionOverallCommentsApi } from './DiscussionOverallCommentsApi';
import { DiscussionSignOffsApi } from './DiscussionSignOffsApi';
import { HcmDiscussionApproveStatus } from './HcmDiscussionApproveStatus';
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
export class DiscussionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Discussions<DeSerializersT>, DeSerializersT>
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
  ): DiscussionsApi<DeSerializersT> {
    return new DiscussionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link goals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOALS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link topics} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOPICS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link performanceJournalEntryRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL_ENTRY_RELATIONS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionPerformanceJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goalComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_COMMENTS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link perfPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERF_PERIOD: OneToOneLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      PerfPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmDiscussionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_DISCUSSION_TYPE: OneToOneLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link topicComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOPIC_COMMENTS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENTS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link overallComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OVERALL_COMMENTS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionOverallCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link signOffs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIGN_OFFS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionSignOffsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionGoalsApi<DeSerializersT>,
      DiscussionTopicsApi<DeSerializersT>,
      DiscussionPerformanceJournalEntriesApi<DeSerializersT>,
      DiscussionGoalCommentsApi<DeSerializersT>,
      RatingModelsApi<DeSerializersT>,
      PerfPeriodsApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      DiscussionTypesApi<DeSerializersT>,
      DiscussionTopicCommentsApi<DeSerializersT>,
      DiscussionMeasurementsApi<DeSerializersT>,
      DiscussionOverallCommentsApi<DeSerializersT>,
      DiscussionSignOffsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      GOALS: new OneToManyLink('Goals', this, linkedApis[0]),
      TOPICS: new OneToManyLink('Topics', this, linkedApis[1]),
      PERFORMANCE_JOURNAL_ENTRY_RELATIONS: new OneToManyLink(
        'PerformanceJournalEntryRelations',
        this,
        linkedApis[2]
      ),
      GOAL_COMMENTS: new OneToManyLink('GoalComments', this, linkedApis[3]),
      RATING_MODEL: new OneToOneLink('RatingModel', this, linkedApis[4]),
      PERF_PERIOD: new OneToOneLink('PerfPeriod', this, linkedApis[5]),
      RATING_LEVEL: new OneToOneLink('RatingLevel', this, linkedApis[6]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[7]),
      HCM_DISCUSSION_TYPE: new OneToOneLink(
        'HcmDiscussionType',
        this,
        linkedApis[8]
      ),
      TOPIC_COMMENTS: new OneToManyLink('TopicComments', this, linkedApis[9]),
      MEASUREMENTS: new OneToManyLink('Measurements', this, linkedApis[10]),
      OVERALL_COMMENTS: new OneToManyLink(
        'OverallComments',
        this,
        linkedApis[11]
      ),
      SIGN_OFFS: new OneToManyLink('SignOffs', this, linkedApis[12])
    };
    return this;
  }

  entityConstructor = Discussions;

  requestBuilder(): DiscussionsRequestBuilder<DeSerializersT> {
    return new DiscussionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Discussions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Discussions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Discussions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Discussions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Discussions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISCUSSION: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERFORMANCE_PERIOD_ID: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCUSSION_APPROVAL_STATUS: EnumField<
      Discussions<DeSerializers>,
      DeSerializersT,
      HcmDiscussionApproveStatus,
      true,
      true
    >;
    FINAL_EMPLOYEE_RATING_ID: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINKTO_DISCUSSION: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINISHED_DATE: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REVIEW_TYPE_ID: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_RATING_SCORE: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKFLOW_ENABLED: EnumField<
      Discussions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AVERAGE_RATING_SCORE: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATING_MODEL_ID: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OVERVIEW: OrderableEdmTypeField<
      Discussions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOALS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link topics} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOPICS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link performanceJournalEntryRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL_ENTRY_RELATIONS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionPerformanceJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goalComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_COMMENTS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link perfPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERF_PERIOD: OneToOneLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      PerfPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmDiscussionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_DISCUSSION_TYPE: OneToOneLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link topicComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOPIC_COMMENTS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENTS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link overallComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OVERALL_COMMENTS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionOverallCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link signOffs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIGN_OFFS: OneToManyLink<
      Discussions<DeSerializersT>,
      DeSerializersT,
      DiscussionSignOffsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Discussions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link discussion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCUSSION: fieldBuilder.buildEdmTypeField(
          'Discussion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
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
         * Static representation of the {@link performancePeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMANCE_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PerformancePeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discussionApprovalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCUSSION_APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'DiscussionApprovalStatus',
          HcmDiscussionApproveStatus,
          true
        ),
        /**
         * Static representation of the {@link finalEmployeeRatingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINAL_EMPLOYEE_RATING_ID: fieldBuilder.buildEdmTypeField(
          'FinalEmployeeRatingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linktoDiscussion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKTO_DISCUSSION: fieldBuilder.buildEdmTypeField(
          'LinktoDiscussion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link finishedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINISHED_DATE: fieldBuilder.buildEdmTypeField(
          'FinishedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reviewTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVIEW_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ReviewTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalRatingScore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_RATING_SCORE: fieldBuilder.buildEdmTypeField(
          'TotalRatingScore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workflowEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_ENABLED: fieldBuilder.buildEnumField(
          'WorkflowEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link averageRatingScore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVERAGE_RATING_SCORE: fieldBuilder.buildEdmTypeField(
          'AverageRatingScore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ratingModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'RatingModelId',
          'Edm.String',
          true
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
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
        ALL_FIELDS: new AllFields('*', Discussions)
      };
    }

    return this._schema;
  }
}
