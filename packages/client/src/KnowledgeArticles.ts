/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { KnowledgeArticlesApi } from './KnowledgeArticlesApi';
import { SmmEncyclopediaItemType } from './SmmEncyclopediaItemType';

/**
 * This class represents the entity "KnowledgeArticles" of service "d365_metadata".
 */
export class KnowledgeArticles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KnowledgeArticlesType<T>
{
  /**
   * Technical entity name for KnowledgeArticles.
   */
  static override _entityName = 'KnowledgeArticles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KnowledgeArticles entity.
   */
  static _keys = ['dataAreaId', 'ArticleItemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Article Item Id.
   */
  declare articleItemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Article Url.
   * @nullable
   */
  declare articleUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Article Memo.
   * @nullable
   */
  declare articleMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Article Document Type.
   * @nullable
   */
  declare articleDocumentType?: SmmEncyclopediaItemType | null;
  /**
   * Article Subject.
   * @nullable
   */
  declare articleSubject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Article Name.
   * @nullable
   */
  declare articleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Article Item Id.
   * @nullable
   */
  declare parentArticleItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Article Document.
   * @nullable
   */
  declare articleDocument?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: KnowledgeArticlesApi<T>) {
    super(_entityApi);
  }
}

export interface KnowledgeArticlesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  articleItemId: DeserializedType<T, 'Edm.String'>;
  articleUrl?: DeserializedType<T, 'Edm.String'> | null;
  articleMemo?: DeserializedType<T, 'Edm.String'> | null;
  articleDocumentType?: SmmEncyclopediaItemType | null;
  articleSubject?: DeserializedType<T, 'Edm.String'> | null;
  articleName?: DeserializedType<T, 'Edm.String'> | null;
  parentArticleItemId?: DeserializedType<T, 'Edm.String'> | null;
  articleDocument?: DeserializedType<T, 'Edm.String'> | null;
}
