/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Goals } from './Goals';
import { GoalsRequestBuilder } from './GoalsRequestBuilder';
import { DiscussionGoalsApi } from './DiscussionGoalsApi';
import { GoalPerformanceJournalEntriesApi } from './GoalPerformanceJournalEntriesApi';
import { DiscussionPerformanceJournalEntriesApi } from './DiscussionPerformanceJournalEntriesApi';
import { GoalMeasurementsApi } from './GoalMeasurementsApi';
import { DiscussionGoalCommentsApi } from './DiscussionGoalCommentsApi';
import { GoalHeadingsApi } from './GoalHeadingsApi';
import { WorkersApi } from './WorkersApi';
import { HcmGoalLevel } from './HcmGoalLevel';
import { HrmGoalStatus } from './HrmGoalStatus';
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
export class GoalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Goals<DeSerializersT>, DeSerializersT>
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
  ): GoalsApi<DeSerializersT> {
    return new GoalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link discussions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSIONS: OneToManyLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link performanceJournalEntryRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL_ENTRY_RELATIONS: OneToManyLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      GoalPerformanceJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionPerformanceJournalEntryRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_PERFORMANCE_JOURNAL_ENTRY_RELATIONS: OneToManyLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      DiscussionPerformanceJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENTS: OneToManyLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      GoalMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_COMMENTS: OneToManyLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goalHeading} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_HEADING: OneToOneLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      GoalHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionGoalsApi<DeSerializersT>,
      GoalPerformanceJournalEntriesApi<DeSerializersT>,
      DiscussionPerformanceJournalEntriesApi<DeSerializersT>,
      GoalMeasurementsApi<DeSerializersT>,
      DiscussionGoalCommentsApi<DeSerializersT>,
      GoalHeadingsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISCUSSIONS: new OneToManyLink('Discussions', this, linkedApis[0]),
      PERFORMANCE_JOURNAL_ENTRY_RELATIONS: new OneToManyLink(
        'PerformanceJournalEntryRelations',
        this,
        linkedApis[1]
      ),
      DISCUSSION_PERFORMANCE_JOURNAL_ENTRY_RELATIONS: new OneToManyLink(
        'DiscussionPerformanceJournalEntryRelations',
        this,
        linkedApis[2]
      ),
      MEASUREMENTS: new OneToManyLink('Measurements', this, linkedApis[3]),
      DISCUSSION_COMMENTS: new OneToManyLink(
        'DiscussionComments',
        this,
        linkedApis[4]
      ),
      GOAL_HEADING: new OneToOneLink('GoalHeading', this, linkedApis[5]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = Goals;

  requestBuilder(): GoalsRequestBuilder<DeSerializersT> {
    return new GoalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Goals<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Goals<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Goals<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Goals, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Goals, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GOAL: OrderableEdmTypeField<
      Goals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      Goals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GOAL_HEADING_ID: OrderableEdmTypeField<
      Goals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Goals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINK_TO_GOAL: OrderableEdmTypeField<
      Goals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOAL_LEVEL: EnumField<
      Goals<DeSerializers>,
      DeSerializersT,
      HcmGoalLevel,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Goals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE_FINISHED: OrderableEdmTypeField<
      Goals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERCENT_COMPLETE: OrderableEdmTypeField<
      Goals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS: EnumField<
      Goals<DeSerializers>,
      DeSerializersT,
      HrmGoalStatus,
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      Goals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OVERVIEW: OrderableEdmTypeField<
      Goals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSIONS: OneToManyLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link performanceJournalEntryRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL_ENTRY_RELATIONS: OneToManyLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      GoalPerformanceJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionPerformanceJournalEntryRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_PERFORMANCE_JOURNAL_ENTRY_RELATIONS: OneToManyLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      DiscussionPerformanceJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENTS: OneToManyLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      GoalMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionComments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_COMMENTS: OneToManyLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goalHeading} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_HEADING: OneToOneLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      GoalHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      Goals<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Goals<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link goal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL: fieldBuilder.buildEdmTypeField('Goal', 'Edm.String', false),
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
         * Static representation of the {@link goalHeadingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_HEADING_ID: fieldBuilder.buildEdmTypeField(
          'GoalHeadingId',
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
         * Static representation of the {@link linkToGoal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINK_TO_GOAL: fieldBuilder.buildEdmTypeField(
          'LinkToGoal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goalLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_LEVEL: fieldBuilder.buildEnumField(
          'GoalLevel',
          HcmGoalLevel,
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
         * Static representation of the {@link dateFinished} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_FINISHED: fieldBuilder.buildEdmTypeField(
          'DateFinished',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link percentComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_COMPLETE: fieldBuilder.buildEdmTypeField(
          'PercentComplete',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', HrmGoalStatus, true),
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
        ALL_FIELDS: new AllFields('*', Goals)
      };
    }

    return this._schema;
  }
}
