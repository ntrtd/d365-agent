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
import { SubBillParameters } from './SubBillParameters';

/**
 * Request builder class for operations supported on the {@link SubBillParameters} entity.
 */
export class SubBillParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillParameters<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillParameters` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillParameters` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillParameters<T>, T> {
    return new GetAllRequestBuilder<SubBillParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillParameters`.
   */
  create(
    entity: SubBillParameters<T>
  ): CreateRequestBuilder<SubBillParameters<T>, T> {
    return new CreateRequestBuilder<SubBillParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `SubBillParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillParameters<T>, T> {
    return new GetByKeyRequestBuilder<SubBillParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillParameters`.
   */
  update(
    entity: SubBillParameters<T>
  ): UpdateRequestBuilder<SubBillParameters<T>, T> {
    return new UpdateRequestBuilder<SubBillParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillParameters`.
   * @param dataAreaId Key property. See {@link SubBillParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<SubBillParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillParameters` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillParameters<T>
  ): DeleteRequestBuilder<SubBillParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<SubBillParameters<T>, T> {
    return new DeleteRequestBuilder<SubBillParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
