/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KnowledgeArticles } from './KnowledgeArticles';
import { KnowledgeArticlesRequestBuilder } from './KnowledgeArticlesRequestBuilder';
import { SmmEncyclopediaItemType } from './SmmEncyclopediaItemType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class KnowledgeArticlesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KnowledgeArticles<DeSerializersT>, DeSerializersT>
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
  ): KnowledgeArticlesApi<DeSerializersT> {
    return new KnowledgeArticlesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = KnowledgeArticles;

  requestBuilder(): KnowledgeArticlesRequestBuilder<DeSerializersT> {
    return new KnowledgeArticlesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KnowledgeArticles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<KnowledgeArticles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<KnowledgeArticles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof KnowledgeArticles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KnowledgeArticles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      KnowledgeArticles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ARTICLE_ITEM_ID: OrderableEdmTypeField<
      KnowledgeArticles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ARTICLE_URL: OrderableEdmTypeField<
      KnowledgeArticles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTICLE_MEMO: OrderableEdmTypeField<
      KnowledgeArticles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTICLE_DOCUMENT_TYPE: EnumField<
      KnowledgeArticles<DeSerializers>,
      DeSerializersT,
      SmmEncyclopediaItemType,
      true,
      true
    >;
    ARTICLE_SUBJECT: OrderableEdmTypeField<
      KnowledgeArticles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTICLE_NAME: OrderableEdmTypeField<
      KnowledgeArticles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_ARTICLE_ITEM_ID: OrderableEdmTypeField<
      KnowledgeArticles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTICLE_DOCUMENT: OrderableEdmTypeField<
      KnowledgeArticles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<KnowledgeArticles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link articleItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTICLE_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ArticleItemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link articleUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTICLE_URL: fieldBuilder.buildEdmTypeField(
          'ArticleURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link articleMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTICLE_MEMO: fieldBuilder.buildEdmTypeField(
          'ArticleMemo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link articleDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTICLE_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'ArticleDocumentType',
          SmmEncyclopediaItemType,
          true
        ),
        /**
         * Static representation of the {@link articleSubject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTICLE_SUBJECT: fieldBuilder.buildEdmTypeField(
          'ArticleSubject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link articleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTICLE_NAME: fieldBuilder.buildEdmTypeField(
          'ArticleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentArticleItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ARTICLE_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ParentArticleItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link articleDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTICLE_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'ArticleDocument',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KnowledgeArticles)
      };
    }

    return this._schema;
  }
}
