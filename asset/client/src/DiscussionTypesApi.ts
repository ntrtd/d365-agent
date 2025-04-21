/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscussionTypes } from './DiscussionTypes';
import { DiscussionTypesRequestBuilder } from './DiscussionTypesRequestBuilder';
import { DiscussionsApi } from './DiscussionsApi';
import { DiscussionTemplatesApi } from './DiscussionTemplatesApi';
import { NoYes } from './NoYes';
import { HcmDiscussionStartingStatus } from './HcmDiscussionStartingStatus';
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
export class DiscussionTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DiscussionTypes<DeSerializersT>, DeSerializersT>
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
  ): DiscussionTypesApi<DeSerializersT> {
    return new DiscussionTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link discussions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSIONS: OneToManyLink<
      DiscussionTypes<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionTemplates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TEMPLATES: OneToManyLink<
      DiscussionTypes<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionsApi<DeSerializersT>,
      DiscussionTemplatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISCUSSIONS: new OneToManyLink('Discussions', this, linkedApis[0]),
      DISCUSSION_TEMPLATES: new OneToManyLink(
        'DiscussionTemplates',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = DiscussionTypes;

  requestBuilder(): DiscussionTypesRequestBuilder<DeSerializersT> {
    return new DiscussionTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiscussionTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DiscussionTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DiscussionTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DiscussionTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscussionTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISCUSSION_TYPE_ID: OrderableEdmTypeField<
      DiscussionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DiscussionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_MANAGER_SIGN_OFF: EnumField<
      DiscussionTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_EMPLOYEE_SIGN_OFF: EnumField<
      DiscussionTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKFLOW_ENABLED: EnumField<
      DiscussionTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EDIT_FINAL_REVIEW: EnumField<
      DiscussionTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NEW_REVIEW_STATUS: EnumField<
      DiscussionTypes<DeSerializers>,
      DeSerializersT,
      HcmDiscussionStartingStatus,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSIONS: OneToManyLink<
      DiscussionTypes<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionTemplates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TEMPLATES: OneToManyLink<
      DiscussionTypes<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DiscussionTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link discussionTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCUSSION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DiscussionTypeId',
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
         * Static representation of the {@link enableManagerSignOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_MANAGER_SIGN_OFF: fieldBuilder.buildEnumField(
          'EnableManagerSignOff',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableEmployeeSignOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_EMPLOYEE_SIGN_OFF: fieldBuilder.buildEnumField(
          'EnableEmployeeSignOff',
          NoYes,
          true
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
         * Static representation of the {@link editFinalReview} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDIT_FINAL_REVIEW: fieldBuilder.buildEnumField(
          'EditFinalReview',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link newReviewStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_REVIEW_STATUS: fieldBuilder.buildEnumField(
          'NewReviewStatus',
          HcmDiscussionStartingStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscussionTypes)
      };
    }

    return this._schema;
  }
}
