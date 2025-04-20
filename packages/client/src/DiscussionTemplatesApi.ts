/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscussionTemplates } from './DiscussionTemplates';
import { DiscussionTemplatesRequestBuilder } from './DiscussionTemplatesRequestBuilder';
import { DiscussionTemplatePerformanceJournalsApi } from './DiscussionTemplatePerformanceJournalsApi';
import { RatingModelsApi } from './RatingModelsApi';
import { DiscussionTypesApi } from './DiscussionTypesApi';
import { DiscussionTemplateMeasurementsApi } from './DiscussionTemplateMeasurementsApi';
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
export class DiscussionTemplatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DiscussionTemplates<DeSerializersT>, DeSerializersT>
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
  ): DiscussionTemplatesApi<DeSerializersT> {
    return new DiscussionTemplatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link discussionTemplatePerfJournals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TEMPLATE_PERF_JOURNALS: OneToManyLink<
      DiscussionTemplates<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplatePerformanceJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      DiscussionTemplates<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TYPE: OneToOneLink<
      DiscussionTemplates<DeSerializersT>,
      DeSerializersT,
      DiscussionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENTS: OneToManyLink<
      DiscussionTemplates<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplateMeasurementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionTemplatePerformanceJournalsApi<DeSerializersT>,
      RatingModelsApi<DeSerializersT>,
      DiscussionTypesApi<DeSerializersT>,
      DiscussionTemplateMeasurementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISCUSSION_TEMPLATE_PERF_JOURNALS: new OneToManyLink(
        'DiscussionTemplatePerfJournals',
        this,
        linkedApis[0]
      ),
      RATING_MODEL: new OneToOneLink('RatingModel', this, linkedApis[1]),
      DISCUSSION_TYPE: new OneToOneLink('DiscussionType', this, linkedApis[2]),
      MEASUREMENTS: new OneToManyLink('Measurements', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = DiscussionTemplates;

  requestBuilder(): DiscussionTemplatesRequestBuilder<DeSerializersT> {
    return new DiscussionTemplatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiscussionTemplates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DiscussionTemplates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscussionTemplates<DeSerializersT>,
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
    typeof DiscussionTemplates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscussionTemplates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE_ID: OrderableEdmTypeField<
      DiscussionTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DiscussionTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      DiscussionTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVIEW_TYPE_ID: OrderableEdmTypeField<
      DiscussionTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      DiscussionTemplates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RATING_MODEL_ID: OrderableEdmTypeField<
      DiscussionTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERVIEW: OrderableEdmTypeField<
      DiscussionTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionTemplatePerfJournals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TEMPLATE_PERF_JOURNALS: OneToManyLink<
      DiscussionTemplates<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplatePerformanceJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      DiscussionTemplates<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TYPE: OneToOneLink<
      DiscussionTemplates<DeSerializersT>,
      DeSerializersT,
      DiscussionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENTS: OneToManyLink<
      DiscussionTemplates<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplateMeasurementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DiscussionTemplates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link templateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'TemplateId',
          'Edm.Int32',
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
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link reviewTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVIEW_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ReviewTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
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
        ALL_FIELDS: new AllFields('*', DiscussionTemplates)
      };
    }

    return this._schema;
  }
}
