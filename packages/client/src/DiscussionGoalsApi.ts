/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscussionGoals } from './DiscussionGoals';
import { DiscussionGoalsRequestBuilder } from './DiscussionGoalsRequestBuilder';
import { DiscussionsApi } from './DiscussionsApi';
import { RatingModelsApi } from './RatingModelsApi';
import { GoalsApi } from './GoalsApi';
import { RatingLevelsApi } from './RatingLevelsApi';
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
export class DiscussionGoalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DiscussionGoals<DeSerializersT>, DeSerializersT>
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
  ): DiscussionGoalsApi<DeSerializersT> {
    return new DiscussionGoalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link goals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOALS: OneToOneLink<
      DiscussionGoals<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      DiscussionGoals<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSIONS: OneToOneLink<
      DiscussionGoals<DeSerializersT>,
      DeSerializersT,
      GoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeRatingLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_RATING_LEVELS: OneToOneLink<
      DiscussionGoals<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link managerRatingLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANAGER_RATING_LEVELS: OneToOneLink<
      DiscussionGoals<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionsApi<DeSerializersT>,
      RatingModelsApi<DeSerializersT>,
      GoalsApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      GOALS: new OneToOneLink('Goals', this, linkedApis[0]),
      RATING_MODEL: new OneToOneLink('RatingModel', this, linkedApis[1]),
      DISCUSSIONS: new OneToOneLink('Discussions', this, linkedApis[2]),
      EMPLOYEE_RATING_LEVELS: new OneToOneLink(
        'EmployeeRatingLevels',
        this,
        linkedApis[3]
      ),
      MANAGER_RATING_LEVELS: new OneToOneLink(
        'ManagerRatingLevels',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = DiscussionGoals;

  requestBuilder(): DiscussionGoalsRequestBuilder<DeSerializersT> {
    return new DiscussionGoalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiscussionGoals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DiscussionGoals<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DiscussionGoals<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DiscussionGoals, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscussionGoals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISCUSSION: OrderableEdmTypeField<
      DiscussionGoals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER_DISCUSSION: OrderableEdmTypeField<
      DiscussionGoals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GOAL: OrderableEdmTypeField<
      DiscussionGoals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GOAL_HEADING: OrderableEdmTypeField<
      DiscussionGoals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYEE_RATING_LEVEL_ID: OrderableEdmTypeField<
      DiscussionGoals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_SCORE: OrderableEdmTypeField<
      DiscussionGoals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANAGER_SCORE: OrderableEdmTypeField<
      DiscussionGoals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANAGER_RATING_LEVEL_ID: OrderableEdmTypeField<
      DiscussionGoals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      DiscussionGoals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATING_MODEL_ID: OrderableEdmTypeField<
      DiscussionGoals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link goals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOALS: OneToOneLink<
      DiscussionGoals<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      DiscussionGoals<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSIONS: OneToOneLink<
      DiscussionGoals<DeSerializersT>,
      DeSerializersT,
      GoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeRatingLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_RATING_LEVELS: OneToOneLink<
      DiscussionGoals<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link managerRatingLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANAGER_RATING_LEVELS: OneToOneLink<
      DiscussionGoals<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DiscussionGoals<DeSerializers>>;
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
         * Static representation of the {@link personnelNumberDiscussion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER_DISCUSSION: fieldBuilder.buildEdmTypeField(
          'PersonnelNumberDiscussion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link goal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL: fieldBuilder.buildEdmTypeField('Goal', 'Edm.String', false),
        /**
         * Static representation of the {@link goalHeading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_HEADING: fieldBuilder.buildEdmTypeField(
          'GoalHeading',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscussionGoals)
      };
    }

    return this._schema;
  }
}
