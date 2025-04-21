/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalHeadings } from './GoalHeadings';
import { GoalHeadingsRequestBuilder } from './GoalHeadingsRequestBuilder';
import { GoalTemplatesApi } from './GoalTemplatesApi';
import { DiscussionGoalCommentsApi } from './DiscussionGoalCommentsApi';
import { GoalsApi } from './GoalsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class GoalHeadingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GoalHeadings<DeSerializersT>, DeSerializersT>
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
  ): GoalHeadingsApi<DeSerializersT> {
    return new GoalHeadingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link goalTemplates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_TEMPLATES: OneToManyLink<
      GoalHeadings<DeSerializersT>,
      DeSerializersT,
      GoalTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionGoalComment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_GOAL_COMMENT: OneToManyLink<
      GoalHeadings<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOALS: OneToManyLink<
      GoalHeadings<DeSerializersT>,
      DeSerializersT,
      GoalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      GoalTemplatesApi<DeSerializersT>,
      DiscussionGoalCommentsApi<DeSerializersT>,
      GoalsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      GOAL_TEMPLATES: new OneToManyLink('GoalTemplates', this, linkedApis[0]),
      DISCUSSION_GOAL_COMMENT: new OneToManyLink(
        'DiscussionGoalComment',
        this,
        linkedApis[1]
      ),
      GOALS: new OneToManyLink('Goals', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = GoalHeadings;

  requestBuilder(): GoalHeadingsRequestBuilder<DeSerializersT> {
    return new GoalHeadingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GoalHeadings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<GoalHeadings<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<GoalHeadings<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof GoalHeadings, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(GoalHeadings, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GOAL_HEADING_ID: OrderableEdmTypeField<
      GoalHeadings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_ACTIVE: EnumField<
      GoalHeadings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      GoalHeadings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goalTemplates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_TEMPLATES: OneToManyLink<
      GoalHeadings<DeSerializersT>,
      DeSerializersT,
      GoalTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionGoalComment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_GOAL_COMMENT: OneToManyLink<
      GoalHeadings<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalCommentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOALS: OneToManyLink<
      GoalHeadings<DeSerializersT>,
      DeSerializersT,
      GoalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GoalHeadings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
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
        ALL_FIELDS: new AllFields('*', GoalHeadings)
      };
    }

    return this._schema;
  }
}
