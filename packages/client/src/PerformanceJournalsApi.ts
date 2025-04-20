/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerformanceJournals } from './PerformanceJournals';
import { PerformanceJournalsRequestBuilder } from './PerformanceJournalsRequestBuilder';
import { GoalPerformanceJournalEntriesApi } from './GoalPerformanceJournalEntriesApi';
import { DiscussionPerformanceJournalEntriesApi } from './DiscussionPerformanceJournalEntriesApi';
import { PerformanceJournalEntryUrlLinkApi } from './PerformanceJournalEntryUrlLinkApi';
import { PerfJournalSourceTypesApi } from './PerfJournalSourceTypesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PerformanceJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PerformanceJournals<DeSerializersT>, DeSerializersT>
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
  ): PerformanceJournalsApi<DeSerializersT> {
    return new PerformanceJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link goalRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_RELATIONS: OneToManyLink<
      PerformanceJournals<DeSerializersT>,
      DeSerializersT,
      GoalPerformanceJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_RELATIONS: OneToManyLink<
      PerformanceJournals<DeSerializersT>,
      DeSerializersT,
      DiscussionPerformanceJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link urlLinks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    URL_LINKS: OneToManyLink<
      PerformanceJournals<DeSerializersT>,
      DeSerializersT,
      PerformanceJournalEntryUrlLinkApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link perfJournalSourceType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERF_JOURNAL_SOURCE_TYPE: OneToOneLink<
      PerformanceJournals<DeSerializersT>,
      DeSerializersT,
      PerfJournalSourceTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      GoalPerformanceJournalEntriesApi<DeSerializersT>,
      DiscussionPerformanceJournalEntriesApi<DeSerializersT>,
      PerformanceJournalEntryUrlLinkApi<DeSerializersT>,
      PerfJournalSourceTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      GOAL_RELATIONS: new OneToManyLink('GoalRelations', this, linkedApis[0]),
      DISCUSSION_RELATIONS: new OneToManyLink(
        'DiscussionRelations',
        this,
        linkedApis[1]
      ),
      URL_LINKS: new OneToManyLink('UrlLinks', this, linkedApis[2]),
      PERF_JOURNAL_SOURCE_TYPE: new OneToOneLink(
        'PerfJournalSourceType',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = PerformanceJournals;

  requestBuilder(): PerformanceJournalsRequestBuilder<DeSerializersT> {
    return new PerformanceJournalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PerformanceJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PerformanceJournals<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PerformanceJournals<DeSerializersT>,
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
    typeof PerformanceJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PerformanceJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSON_ID: OrderableEdmTypeField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_DATE: OrderableEdmTypeField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_TYPE: EnumField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      HcmPerfJournalSourceType,
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_ID: OrderableEdmTypeField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    OWNER: EnumField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      HcmPerfManagerEmployee,
      true,
      true
    >;
    IS_SHARED: EnumField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STARTED_DATE: OrderableEdmTypeField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPLETED_DATE: OrderableEdmTypeField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_DEVELOPMENT_TASK: EnumField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUBMITTED_BY_EXTERNAL: OrderableEdmTypeField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBMITTED_BY_PERSON_ID: OrderableEdmTypeField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEYWORDS: OrderableEdmTypeField<
      PerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goalRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_RELATIONS: OneToManyLink<
      PerformanceJournals<DeSerializersT>,
      DeSerializersT,
      GoalPerformanceJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_RELATIONS: OneToManyLink<
      PerformanceJournals<DeSerializersT>,
      DeSerializersT,
      DiscussionPerformanceJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link urlLinks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    URL_LINKS: OneToManyLink<
      PerformanceJournals<DeSerializersT>,
      DeSerializersT,
      PerformanceJournalEntryUrlLinkApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link perfJournalSourceType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERF_JOURNAL_SOURCE_TYPE: OneToOneLink<
      PerformanceJournals<DeSerializersT>,
      DeSerializersT,
      PerfJournalSourceTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PerformanceJournals<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ID: fieldBuilder.buildEdmTypeField(
          'PersonId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_DATE: fieldBuilder.buildEdmTypeField(
          'JournalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TYPE: fieldBuilder.buildEnumField(
          'SourceType',
          HcmPerfJournalSourceType,
          true
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', false),
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
         * Static representation of the {@link entryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_ID: fieldBuilder.buildEdmTypeField('EntryId', 'Edm.Guid', false),
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
         * Static representation of the {@link isShared} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHARED: fieldBuilder.buildEnumField('IsShared', NoYes, true),
        /**
         * Static representation of the {@link startedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_DATE: fieldBuilder.buildEdmTypeField(
          'StartedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link completedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETED_DATE: fieldBuilder.buildEdmTypeField(
          'CompletedDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link submittedByExternal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMITTED_BY_EXTERNAL: fieldBuilder.buildEdmTypeField(
          'SubmittedByExternal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link submittedByPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMITTED_BY_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'SubmittedByPersonId',
          'Edm.String',
          true
        ),
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
        ALL_FIELDS: new AllFields('*', PerformanceJournals)
      };
    }

    return this._schema;
  }
}
