/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { PostingDefinitionEntries } from './PostingDefinitionEntries';

/**
 * Request builder class for operations supported on the {@link PostingDefinitionEntries} entity.
 */
export class PostingDefinitionEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostingDefinitionEntries<T>, T> {
  /**
   * Returns a request builder for querying all `PostingDefinitionEntries` entities.
   * @returns A request builder for creating requests to retrieve all `PostingDefinitionEntries` entities.
   */
  getAll(): GetAllRequestBuilder<PostingDefinitionEntries<T>, T> {
    return new GetAllRequestBuilder<PostingDefinitionEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PostingDefinitionEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostingDefinitionEntries`.
   */
  create(
    entity: PostingDefinitionEntries<T>
  ): CreateRequestBuilder<PostingDefinitionEntries<T>, T> {
    return new CreateRequestBuilder<PostingDefinitionEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostingDefinitionEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link PostingDefinitionEntries.dataAreaId}.
   * @param matchCriteriaLedgerAccountDisplayValue Key property. See {@link PostingDefinitionEntries.matchCriteriaLedgerAccountDisplayValue}.
   * @param matchCriteriaLedgerAccountAccountStructure Key property. See {@link PostingDefinitionEntries.matchCriteriaLedgerAccountAccountStructure}.
   * @param generatedEntryLedgerAccountDisplayValue Key property. See {@link PostingDefinitionEntries.generatedEntryLedgerAccountDisplayValue}.
   * @param postingDefinitionId Key property. See {@link PostingDefinitionEntries.postingDefinitionId}.
   * @param validFrom Key property. See {@link PostingDefinitionEntries.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PostingDefinitionEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    matchCriteriaLedgerAccountDisplayValue: DeserializedType<T, 'Edm.String'>,
    matchCriteriaLedgerAccountAccountStructure: DeserializedType<
      T,
      'Edm.String'
    >,
    generatedEntryLedgerAccountDisplayValue: DeserializedType<T, 'Edm.String'>,
    postingDefinitionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PostingDefinitionEntries<T>, T> {
    return new GetByKeyRequestBuilder<PostingDefinitionEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MatchCriteriaLedgerAccountDisplayValue:
          matchCriteriaLedgerAccountDisplayValue,
        MatchCriteriaLedgerAccountAccountStructure:
          matchCriteriaLedgerAccountAccountStructure,
        GeneratedEntryLedgerAccountDisplayValue:
          generatedEntryLedgerAccountDisplayValue,
        PostingDefinitionId: postingDefinitionId,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PostingDefinitionEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostingDefinitionEntries`.
   */
  update(
    entity: PostingDefinitionEntries<T>
  ): UpdateRequestBuilder<PostingDefinitionEntries<T>, T> {
    return new UpdateRequestBuilder<PostingDefinitionEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostingDefinitionEntries`.
   * @param dataAreaId Key property. See {@link PostingDefinitionEntries.dataAreaId}.
   * @param matchCriteriaLedgerAccountDisplayValue Key property. See {@link PostingDefinitionEntries.matchCriteriaLedgerAccountDisplayValue}.
   * @param matchCriteriaLedgerAccountAccountStructure Key property. See {@link PostingDefinitionEntries.matchCriteriaLedgerAccountAccountStructure}.
   * @param generatedEntryLedgerAccountDisplayValue Key property. See {@link PostingDefinitionEntries.generatedEntryLedgerAccountDisplayValue}.
   * @param postingDefinitionId Key property. See {@link PostingDefinitionEntries.postingDefinitionId}.
   * @param validFrom Key property. See {@link PostingDefinitionEntries.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PostingDefinitionEntries`.
   */
  delete(
    dataAreaId: string,
    matchCriteriaLedgerAccountDisplayValue: string,
    matchCriteriaLedgerAccountAccountStructure: string,
    generatedEntryLedgerAccountDisplayValue: string,
    postingDefinitionId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PostingDefinitionEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostingDefinitionEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostingDefinitionEntries` by taking the entity as a parameter.
   */
  delete(
    entity: PostingDefinitionEntries<T>
  ): DeleteRequestBuilder<PostingDefinitionEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    matchCriteriaLedgerAccountDisplayValue?: string,
    matchCriteriaLedgerAccountAccountStructure?: string,
    generatedEntryLedgerAccountDisplayValue?: string,
    postingDefinitionId?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<PostingDefinitionEntries<T>, T> {
    return new DeleteRequestBuilder<PostingDefinitionEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PostingDefinitionEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MatchCriteriaLedgerAccountDisplayValue:
              matchCriteriaLedgerAccountDisplayValue!,
            MatchCriteriaLedgerAccountAccountStructure:
              matchCriteriaLedgerAccountAccountStructure!,
            GeneratedEntryLedgerAccountDisplayValue:
              generatedEntryLedgerAccountDisplayValue!,
            PostingDefinitionId: postingDefinitionId!,
            ValidFrom: validFrom!
          }
    );
  }
}
