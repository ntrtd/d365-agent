/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscussionTemplatePerformanceJournals } from './DiscussionTemplatePerformanceJournals';
import { DiscussionTemplatePerformanceJournalsRequestBuilder } from './DiscussionTemplatePerformanceJournalsRequestBuilder';
import { DiscussionTemplatesApi } from './DiscussionTemplatesApi';
import { NoYes } from './NoYes';
import { HcmPerfManagerEmployee } from './HcmPerfManagerEmployee';
import { HcmPerfJournalSourceType } from './HcmPerfJournalSourceType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DiscussionTemplatePerformanceJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      DiscussionTemplatePerformanceJournals<DeSerializersT>,
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
  ): DiscussionTemplatePerformanceJournalsApi<DeSerializersT> {
    return new DiscussionTemplatePerformanceJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link discussionTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TEMPLATE: OneToOneLink<
      DiscussionTemplatePerformanceJournals<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DiscussionTemplatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DISCUSSION_TEMPLATE: new OneToOneLink(
        'DiscussionTemplate',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DiscussionTemplatePerformanceJournals;

  requestBuilder(): DiscussionTemplatePerformanceJournalsRequestBuilder<DeSerializersT> {
    return new DiscussionTemplatePerformanceJournalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DiscussionTemplatePerformanceJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiscussionTemplatePerformanceJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscussionTemplatePerformanceJournals<DeSerializersT>,
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
    typeof DiscussionTemplatePerformanceJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscussionTemplatePerformanceJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISCUSSION_TEMPLATE_ID: OrderableEdmTypeField<
      DiscussionTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERF_JOURNAL_TEMPLATE_ID: OrderableEdmTypeField<
      DiscussionTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      DiscussionTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCUSSION_TEMPLATE_TITLE: OrderableEdmTypeField<
      DiscussionTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEVELOPMENT_TASK: EnumField<
      DiscussionTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OWNER: EnumField<
      DiscussionTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      HcmPerfManagerEmployee,
      true,
      true
    >;
    SHARE: EnumField<
      DiscussionTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_TYPE_ID: EnumField<
      DiscussionTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      HcmPerfJournalSourceType,
      true,
      true
    >;
    KEYWORDS: OrderableEdmTypeField<
      DiscussionTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DiscussionTemplatePerformanceJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussionTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TEMPLATE: OneToOneLink<
      DiscussionTemplatePerformanceJournals<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DiscussionTemplatePerformanceJournals<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link discussionTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCUSSION_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'DiscussionTemplateId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link perfJournalTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERF_JOURNAL_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'PerfJournalTemplateId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link discussionTemplateTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCUSSION_TEMPLATE_TITLE: fieldBuilder.buildEdmTypeField(
          'DiscussionTemplateTitle',
          'Edm.String',
          true
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
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEnumField(
          'Owner',
          HcmPerfManagerEmployee,
          true
        ),
        /**
         * Static representation of the {@link share} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARE: fieldBuilder.buildEnumField('Share', NoYes, true),
        /**
         * Static representation of the {@link sourceTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TYPE_ID: fieldBuilder.buildEnumField(
          'SourceTypeId',
          HcmPerfJournalSourceType,
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
        ALL_FIELDS: new AllFields('*', DiscussionTemplatePerformanceJournals)
      };
    }

    return this._schema;
  }
}
