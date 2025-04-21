/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscussionPerformanceJournalEntries } from './DiscussionPerformanceJournalEntries';
import { DiscussionPerformanceJournalEntriesRequestBuilder } from './DiscussionPerformanceJournalEntriesRequestBuilder';
import { DiscussionsApi } from './DiscussionsApi';
import { GoalsApi } from './GoalsApi';
import { PerformanceJournalsApi } from './PerformanceJournalsApi';
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
export class DiscussionPerformanceJournalEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      DiscussionPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT
    >
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
  ): DiscussionPerformanceJournalEntriesApi<DeSerializersT> {
    return new DiscussionPerformanceJournalEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link discussion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION: OneToOneLink<
      DiscussionPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link copiedFromGoal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COPIED_FROM_GOAL: OneToOneLink<
      DiscussionPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT,
      GoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link performanceJournalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL_ENTRY: OneToOneLink<
      DiscussionPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT,
      PerformanceJournalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionsApi<DeSerializersT>,
      GoalsApi<DeSerializersT>,
      PerformanceJournalsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISCUSSION: new OneToOneLink('Discussion', this, linkedApis[0]),
      COPIED_FROM_GOAL: new OneToOneLink('CopiedFromGoal', this, linkedApis[1]),
      PERFORMANCE_JOURNAL_ENTRY: new OneToOneLink(
        'PerformanceJournalEntry',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = DiscussionPerformanceJournalEntries;

  requestBuilder(): DiscussionPerformanceJournalEntriesRequestBuilder<DeSerializersT> {
    return new DiscussionPerformanceJournalEntriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DiscussionPerformanceJournalEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiscussionPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscussionPerformanceJournalEntries<DeSerializersT>,
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
    typeof DiscussionPerformanceJournalEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscussionPerformanceJournalEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERFORMANCE_JOURNAL_ENTRY_ID: OrderableEdmTypeField<
      DiscussionPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DISCUSSION_ID: OrderableEdmTypeField<
      DiscussionPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISCUSSION_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      DiscussionPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COPIED_FROM_GOAL_ID: OrderableEdmTypeField<
      DiscussionPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      DiscussionPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COPIED_FROM_GOAL_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      DiscussionPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DiscussionPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COPIED_FROM_GOAL_HEADING_ID: OrderableEdmTypeField<
      DiscussionPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION: OneToOneLink<
      DiscussionPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link copiedFromGoal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COPIED_FROM_GOAL: OneToOneLink<
      DiscussionPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT,
      GoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link performanceJournalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL_ENTRY: OneToOneLink<
      DiscussionPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT,
      PerformanceJournalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DiscussionPerformanceJournalEntries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link performanceJournalEntryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMANCE_JOURNAL_ENTRY_ID: fieldBuilder.buildEdmTypeField(
          'PerformanceJournalEntryId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link discussionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCUSSION_ID: fieldBuilder.buildEdmTypeField(
          'DiscussionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link discussionWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCUSSION_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'DiscussionWorkerPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link copiedFromGoalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPIED_FROM_GOAL_ID: fieldBuilder.buildEdmTypeField(
          'CopiedFromGoalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link copiedFromGoalWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPIED_FROM_GOAL_WORKER_PERSONNEL_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'CopiedFromGoalWorkerPersonnelNumber',
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
         * Static representation of the {@link copiedFromGoalHeadingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPIED_FROM_GOAL_HEADING_ID: fieldBuilder.buildEdmTypeField(
          'CopiedFromGoalHeadingId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscussionPerformanceJournalEntries)
      };
    }

    return this._schema;
  }
}
