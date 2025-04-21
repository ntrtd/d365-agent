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
import { PurchCommitmentLineEntities } from './PurchCommitmentLineEntities';

/**
 * Request builder class for operations supported on the {@link PurchCommitmentLineEntities} entity.
 */
export class PurchCommitmentLineEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchCommitmentLineEntities<T>, T> {
  /**
   * Returns a request builder for querying all `PurchCommitmentLineEntities` entities.
   * @returns A request builder for creating requests to retrieve all `PurchCommitmentLineEntities` entities.
   */
  getAll(): GetAllRequestBuilder<PurchCommitmentLineEntities<T>, T> {
    return new GetAllRequestBuilder<PurchCommitmentLineEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchCommitmentLineEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchCommitmentLineEntities`.
   */
  create(
    entity: PurchCommitmentLineEntities<T>
  ): CreateRequestBuilder<PurchCommitmentLineEntities<T>, T> {
    return new CreateRequestBuilder<PurchCommitmentLineEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchCommitmentLineEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchCommitmentLineEntities.dataAreaId}.
   * @param commitmentNumber Key property. See {@link PurchCommitmentLineEntities.commitmentNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchCommitmentLineEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    commitmentNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchCommitmentLineEntities<T>, T> {
    return new GetByKeyRequestBuilder<PurchCommitmentLineEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CommitmentNumber: commitmentNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchCommitmentLineEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchCommitmentLineEntities`.
   */
  update(
    entity: PurchCommitmentLineEntities<T>
  ): UpdateRequestBuilder<PurchCommitmentLineEntities<T>, T> {
    return new UpdateRequestBuilder<PurchCommitmentLineEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchCommitmentLineEntities`.
   * @param dataAreaId Key property. See {@link PurchCommitmentLineEntities.dataAreaId}.
   * @param commitmentNumber Key property. See {@link PurchCommitmentLineEntities.commitmentNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchCommitmentLineEntities`.
   */
  delete(
    dataAreaId: string,
    commitmentNumber: string
  ): DeleteRequestBuilder<PurchCommitmentLineEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchCommitmentLineEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchCommitmentLineEntities` by taking the entity as a parameter.
   */
  delete(
    entity: PurchCommitmentLineEntities<T>
  ): DeleteRequestBuilder<PurchCommitmentLineEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    commitmentNumber?: string
  ): DeleteRequestBuilder<PurchCommitmentLineEntities<T>, T> {
    return new DeleteRequestBuilder<PurchCommitmentLineEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchCommitmentLineEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CommitmentNumber: commitmentNumber!
          }
    );
  }
}
