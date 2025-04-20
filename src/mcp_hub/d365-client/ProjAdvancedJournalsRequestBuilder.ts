/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { ProjAdvancedJournals } from './ProjAdvancedJournals';

/**
 * Request builder class for operations supported on the {@link ProjAdvancedJournals} entity.
 */
export class ProjAdvancedJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjAdvancedJournals<T>, T> {
  /**
   * Returns a request builder for querying all `ProjAdvancedJournals` entities.
   * @returns A request builder for creating requests to retrieve all `ProjAdvancedJournals` entities.
   */
  getAll(): GetAllRequestBuilder<ProjAdvancedJournals<T>, T> {
    return new GetAllRequestBuilder<ProjAdvancedJournals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjAdvancedJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjAdvancedJournals`.
   */
  create(
    entity: ProjAdvancedJournals<T>
  ): CreateRequestBuilder<ProjAdvancedJournals<T>, T> {
    return new CreateRequestBuilder<ProjAdvancedJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjAdvancedJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjAdvancedJournals.dataAreaId}.
   * @param projAdvancedJournalId Key property. See {@link ProjAdvancedJournals.projAdvancedJournalId}.
   * @returns A request builder for creating requests to retrieve one `ProjAdvancedJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projAdvancedJournalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjAdvancedJournals<T>, T> {
    return new GetByKeyRequestBuilder<ProjAdvancedJournals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjAdvancedJournalId: projAdvancedJournalId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjAdvancedJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjAdvancedJournals`.
   */
  update(
    entity: ProjAdvancedJournals<T>
  ): UpdateRequestBuilder<ProjAdvancedJournals<T>, T> {
    return new UpdateRequestBuilder<ProjAdvancedJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjAdvancedJournals`.
   * @param dataAreaId Key property. See {@link ProjAdvancedJournals.dataAreaId}.
   * @param projAdvancedJournalId Key property. See {@link ProjAdvancedJournals.projAdvancedJournalId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjAdvancedJournals`.
   */
  delete(
    dataAreaId: string,
    projAdvancedJournalId: string
  ): DeleteRequestBuilder<ProjAdvancedJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjAdvancedJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjAdvancedJournals` by taking the entity as a parameter.
   */
  delete(
    entity: ProjAdvancedJournals<T>
  ): DeleteRequestBuilder<ProjAdvancedJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projAdvancedJournalId?: string
  ): DeleteRequestBuilder<ProjAdvancedJournals<T>, T> {
    return new DeleteRequestBuilder<ProjAdvancedJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjAdvancedJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjAdvancedJournalId: projAdvancedJournalId!
          }
    );
  }
}
