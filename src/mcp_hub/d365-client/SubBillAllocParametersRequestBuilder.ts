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
import { SubBillAllocParameters } from './SubBillAllocParameters';

/**
 * Request builder class for operations supported on the {@link SubBillAllocParameters} entity.
 */
export class SubBillAllocParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillAllocParameters<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillAllocParameters` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillAllocParameters` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillAllocParameters<T>, T> {
    return new GetAllRequestBuilder<SubBillAllocParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillAllocParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillAllocParameters`.
   */
  create(
    entity: SubBillAllocParameters<T>
  ): CreateRequestBuilder<SubBillAllocParameters<T>, T> {
    return new CreateRequestBuilder<SubBillAllocParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillAllocParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillAllocParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `SubBillAllocParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillAllocParameters<T>, T> {
    return new GetByKeyRequestBuilder<SubBillAllocParameters<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillAllocParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillAllocParameters`.
   */
  update(
    entity: SubBillAllocParameters<T>
  ): UpdateRequestBuilder<SubBillAllocParameters<T>, T> {
    return new UpdateRequestBuilder<SubBillAllocParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillAllocParameters`.
   * @param dataAreaId Key property. See {@link SubBillAllocParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillAllocParameters`.
   */
  delete(
    dataAreaId: string
  ): DeleteRequestBuilder<SubBillAllocParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillAllocParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillAllocParameters` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillAllocParameters<T>
  ): DeleteRequestBuilder<SubBillAllocParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<SubBillAllocParameters<T>, T> {
    return new DeleteRequestBuilder<SubBillAllocParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillAllocParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
