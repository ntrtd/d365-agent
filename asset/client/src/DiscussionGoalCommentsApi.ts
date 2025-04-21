/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscussionGoalComments } from './DiscussionGoalComments';
import { DiscussionGoalCommentsRequestBuilder } from './DiscussionGoalCommentsRequestBuilder';
import { DiscussionsApi } from './DiscussionsApi';
import { GoalHeadingsApi } from './GoalHeadingsApi';
import { PeopleApi } from './PeopleApi';
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
export class DiscussionGoalCommentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DiscussionGoalComments<DeSerializersT>, DeSerializersT>
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
  ): DiscussionGoalCommentsApi<DeSerializersT> {
    return new DiscussionGoalCommentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link discussion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION: OneToOneLink<
      DiscussionGoalComments<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goalHeading} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_HEADING: OneToOneLink<
      DiscussionGoalComments<DeSerializersT>,
      DeSerializersT,
      GoalHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link commenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMMENTER: OneToOneLink<
      DiscussionGoalComments<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL: OneToOneLink<
      DiscussionGoalComments<DeSerializersT>,
      DeSerializersT,
      GoalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionsApi<DeSerializersT>,
      GoalHeadingsApi<DeSerializersT>,
      PeopleApi<DeSerializersT>,
      GoalsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISCUSSION: new OneToOneLink('Discussion', this, linkedApis[0]),
      GOAL_HEADING: new OneToOneLink('GoalHeading', this, linkedApis[1]),
      COMMENTER: new OneToOneLink('Commenter', this, linkedApis[2]),
      GOAL: new OneToOneLink('Goal', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = DiscussionGoalComments;

  requestBuilder(): DiscussionGoalCommentsRequestBuilder<DeSerializersT> {
    return new DiscussionGoalCommentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiscussionGoalComments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiscussionGoalComments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscussionGoalComments<DeSerializersT>,
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
    typeof DiscussionGoalComments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscussionGoalComments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISCUSSION_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      DiscussionGoalComments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISCUSSION_ID: OrderableEdmTypeField<
      DiscussionGoalComments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GOAL_ID: OrderableEdmTypeField<
      DiscussionGoalComments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMENT_ID: OrderableEdmTypeField<
      DiscussionGoalComments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      DiscussionGoalComments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT_DATE_TIME: OrderableEdmTypeField<
      DiscussionGoalComments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      DiscussionGoalComments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOAL_HEADING_ID: OrderableEdmTypeField<
      DiscussionGoalComments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTER_PARTY_NUMBER: OrderableEdmTypeField<
      DiscussionGoalComments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOAL_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      DiscussionGoalComments<DeSerializers>,
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
      DiscussionGoalComments<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goalHeading} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_HEADING: OneToOneLink<
      DiscussionGoalComments<DeSerializersT>,
      DeSerializersT,
      GoalHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link commenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMMENTER: OneToOneLink<
      DiscussionGoalComments<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL: OneToOneLink<
      DiscussionGoalComments<DeSerializersT>,
      DeSerializersT,
      GoalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DiscussionGoalComments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link discussionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCUSSION_ID: fieldBuilder.buildEdmTypeField(
          'DiscussionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link goalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_ID: fieldBuilder.buildEdmTypeField('GoalId', 'Edm.String', false),
        /**
         * Static representation of the {@link commentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT_ID: fieldBuilder.buildEdmTypeField(
          'CommentId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link commentDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CommentDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link createdByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'CreatedByUser',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link commenterPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTER_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'CommenterPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goalWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'GoalWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscussionGoalComments)
      };
    }

    return this._schema;
  }
}
