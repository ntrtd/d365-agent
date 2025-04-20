/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscussionTopics } from './DiscussionTopics';
import { DiscussionTopicsRequestBuilder } from './DiscussionTopicsRequestBuilder';
import { DiscussionsApi } from './DiscussionsApi';
import { RatingModelsApi } from './RatingModelsApi';
import { WorkersApi } from './WorkersApi';
import { RatingLevelsApi } from './RatingLevelsApi';
import { DiscussionTopicCommentsApi } from './DiscussionTopicCommentsApi';
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
export class DiscussionTopicsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DiscussionTopics<DeSerializersT>, DeSerializersT>
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
  ): DiscussionTopicsApi<DeSerializersT> {
    return new DiscussionTopicsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link topics} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOPICS: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeRatingLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_RATING_LEVELS: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link managerRatingLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANAGER_RATING_LEVELS: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link comments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMMENTS: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicCommentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionsApi<DeSerializersT>,
      RatingModelsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>,
      DiscussionTopicCommentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TOPICS: new OneToOneLink('Topics', this, linkedApis[0]),
      RATING_MODEL: new OneToOneLink('RatingModel', this, linkedApis[1]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[2]),
      EMPLOYEE_RATING_LEVELS: new OneToOneLink(
        'EmployeeRatingLevels',
        this,
        linkedApis[3]
      ),
      MANAGER_RATING_LEVELS: new OneToOneLink(
        'ManagerRatingLevels',
        this,
        linkedApis[4]
      ),
      COMMENTS: new OneToOneLink('Comments', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = DiscussionTopics;

  requestBuilder(): DiscussionTopicsRequestBuilder<DeSerializersT> {
    return new DiscussionTopicsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiscussionTopics<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DiscussionTopics<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DiscussionTopics<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DiscussionTopics, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscussionTopics,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISCUSSION_ID: OrderableEdmTypeField<
      DiscussionTopics<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      DiscussionTopics<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOPIC_NUMBER: OrderableEdmTypeField<
      DiscussionTopics<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYEE_RATING_LEVEL_ID: OrderableEdmTypeField<
      DiscussionTopics<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOPIC_TITLE: OrderableEdmTypeField<
      DiscussionTopics<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_SCORE: OrderableEdmTypeField<
      DiscussionTopics<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANAGER_SCORE: OrderableEdmTypeField<
      DiscussionTopics<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANAGER_RATING_LEVEL_ID: OrderableEdmTypeField<
      DiscussionTopics<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      DiscussionTopics<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATING_MODEL_ID: OrderableEdmTypeField<
      DiscussionTopics<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOPIC_DESCRIPTION: OrderableEdmTypeField<
      DiscussionTopics<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link topics} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOPICS: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeRatingLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_RATING_LEVELS: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link managerRatingLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANAGER_RATING_LEVELS: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link comments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMMENTS: OneToOneLink<
      DiscussionTopics<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicCommentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DiscussionTopics<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link topicNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOPIC_NUMBER: fieldBuilder.buildEdmTypeField(
          'TopicNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employeeRatingLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_RATING_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'EmployeeRatingLevelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link topicTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOPIC_TITLE: fieldBuilder.buildEdmTypeField(
          'TopicTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeScore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_SCORE: fieldBuilder.buildEdmTypeField(
          'EmployeeScore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link managerScore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER_SCORE: fieldBuilder.buildEdmTypeField(
          'ManagerScore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link managerRatingLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER_RATING_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'ManagerRatingLevelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
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
         * Static representation of the {@link topicDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOPIC_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TopicDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscussionTopics)
      };
    }

    return this._schema;
  }
}
