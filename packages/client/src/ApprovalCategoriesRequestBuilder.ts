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
import { ApprovalCategories } from './ApprovalCategories';

/**
 * Request builder class for operations supported on the {@link ApprovalCategories} entity.
 */
export class ApprovalCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApprovalCategories<T>, T> {
  /**
   * Returns a request builder for querying all `ApprovalCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ApprovalCategories` entities.
   */
  getAll(): GetAllRequestBuilder<ApprovalCategories<T>, T> {
    return new GetAllRequestBuilder<ApprovalCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApprovalCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApprovalCategories`.
   */
  create(
    entity: ApprovalCategories<T>
  ): CreateRequestBuilder<ApprovalCategories<T>, T> {
    return new CreateRequestBuilder<ApprovalCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApprovalCategories` entity based on its keys.
   * @param referenceTableId Key property. See {@link ApprovalCategories.referenceTableId}.
   * @returns A request builder for creating requests to retrieve one `ApprovalCategories` entity based on its keys.
   */
  getByKey(
    referenceTableId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ApprovalCategories<T>, T> {
    return new GetByKeyRequestBuilder<ApprovalCategories<T>, T>(
      this.entityApi,
      { ReferenceTableId: referenceTableId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApprovalCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApprovalCategories`.
   */
  update(
    entity: ApprovalCategories<T>
  ): UpdateRequestBuilder<ApprovalCategories<T>, T> {
    return new UpdateRequestBuilder<ApprovalCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApprovalCategories`.
   * @param referenceTableId Key property. See {@link ApprovalCategories.referenceTableId}.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalCategories`.
   */
  delete(
    referenceTableId: number
  ): DeleteRequestBuilder<ApprovalCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApprovalCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ApprovalCategories<T>
  ): DeleteRequestBuilder<ApprovalCategories<T>, T>;
  delete(
    referenceTableIdOrEntity: any
  ): DeleteRequestBuilder<ApprovalCategories<T>, T> {
    return new DeleteRequestBuilder<ApprovalCategories<T>, T>(
      this.entityApi,
      referenceTableIdOrEntity instanceof ApprovalCategories
        ? referenceTableIdOrEntity
        : { ReferenceTableId: referenceTableIdOrEntity! }
    );
  }
}
