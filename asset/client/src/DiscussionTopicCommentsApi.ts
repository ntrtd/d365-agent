/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscussionTopicComments } from './DiscussionTopicComments';
import { DiscussionTopicCommentsRequestBuilder } from './DiscussionTopicCommentsRequestBuilder';
import { DiscussionsApi } from './DiscussionsApi';
import { PeopleApi } from './PeopleApi';
import { DiscussionTopicsApi } from './DiscussionTopicsApi';
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
export class DiscussionTopicCommentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DiscussionTopicComments<DeSerializersT>, DeSerializersT>
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
  ): DiscussionTopicCommentsApi<DeSerializersT> {
    return new DiscussionTopicCommentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link discussion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION: OneToOneLink<
      DiscussionTopicComments<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link commenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMMENTER: OneToOneLink<
      DiscussionTopicComments<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link topic} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOPIC: OneToOneLink<
      DiscussionTopicComments<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionsApi<DeSerializersT>,
      PeopleApi<DeSerializersT>,
      DiscussionTopicsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISCUSSION: new OneToOneLink('Discussion', this, linkedApis[0]),
      COMMENTER: new OneToOneLink('Commenter', this, linkedApis[1]),
      TOPIC: new OneToOneLink('Topic', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = DiscussionTopicComments;

  requestBuilder(): DiscussionTopicCommentsRequestBuilder<DeSerializersT> {
    return new DiscussionTopicCommentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiscussionTopicComments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiscussionTopicComments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscussionTopicComments<DeSerializersT>,
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
    typeof DiscussionTopicComments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscussionTopicComments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISCUSSION_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      DiscussionTopicComments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISCUSSION_ID: OrderableEdmTypeField<
      DiscussionTopicComments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOPIC_NUMBER: OrderableEdmTypeField<
      DiscussionTopicComments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMMENT_ID: OrderableEdmTypeField<
      DiscussionTopicComments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      DiscussionTopicComments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT_DATE_TIME: OrderableEdmTypeField<
      DiscussionTopicComments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      DiscussionTopicComments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTER_PARTY_NUMBER: OrderableEdmTypeField<
      DiscussionTopicComments<DeSerializers>,
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
      DiscussionTopicComments<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link commenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMMENTER: OneToOneLink<
      DiscussionTopicComments<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link topic} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOPIC: OneToOneLink<
      DiscussionTopicComments<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DiscussionTopicComments<DeSerializers>>;
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
         * Static representation of the {@link topicNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOPIC_NUMBER: fieldBuilder.buildEdmTypeField(
          'TopicNumber',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link commenterPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTER_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'CommenterPartyNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscussionTopicComments)
      };
    }

    return this._schema;
  }
}
