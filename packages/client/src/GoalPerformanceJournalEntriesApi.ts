/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalPerformanceJournalEntries } from './GoalPerformanceJournalEntries';
import { GoalPerformanceJournalEntriesRequestBuilder } from './GoalPerformanceJournalEntriesRequestBuilder';
import { PerformanceJournalsApi } from './PerformanceJournalsApi';
import { GoalsApi } from './GoalsApi';
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
export class GoalPerformanceJournalEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<GoalPerformanceJournalEntries<DeSerializersT>, DeSerializersT>
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
  ): GoalPerformanceJournalEntriesApi<DeSerializersT> {
    return new GoalPerformanceJournalEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link performanceJournalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL_ENTRY: OneToOneLink<
      GoalPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT,
      PerformanceJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL: OneToOneLink<
      GoalPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT,
      GoalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PerformanceJournalsApi<DeSerializersT>,
      GoalsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERFORMANCE_JOURNAL_ENTRY: new OneToOneLink(
        'PerformanceJournalEntry',
        this,
        linkedApis[0]
      ),
      GOAL: new OneToOneLink('Goal', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = GoalPerformanceJournalEntries;

  requestBuilder(): GoalPerformanceJournalEntriesRequestBuilder<DeSerializersT> {
    return new GoalPerformanceJournalEntriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GoalPerformanceJournalEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GoalPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GoalPerformanceJournalEntries<DeSerializersT>,
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
    typeof GoalPerformanceJournalEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GoalPerformanceJournalEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERFORMANCE_JOURNAL_ENTRY_ID: OrderableEdmTypeField<
      GoalPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    GOAL_ID: OrderableEdmTypeField<
      GoalPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GOAL_HEADING_ID: OrderableEdmTypeField<
      GoalPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GOAL_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      GoalPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    URL: OrderableEdmTypeField<
      GoalPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      GoalPerformanceJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link performanceJournalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMANCE_JOURNAL_ENTRY: OneToOneLink<
      GoalPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT,
      PerformanceJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL: OneToOneLink<
      GoalPerformanceJournalEntries<DeSerializersT>,
      DeSerializersT,
      GoalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GoalPerformanceJournalEntries<DeSerializers>>;
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
         * Static representation of the {@link goalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_ID: fieldBuilder.buildEdmTypeField('GoalId', 'Edm.String', false),
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
         * Static representation of the {@link goalWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'GoalWorkerPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
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
        ALL_FIELDS: new AllFields('*', GoalPerformanceJournalEntries)
      };
    }

    return this._schema;
  }
}
