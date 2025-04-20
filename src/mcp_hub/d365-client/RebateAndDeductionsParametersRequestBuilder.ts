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
import { RebateAndDeductionsParameters } from './RebateAndDeductionsParameters';

/**
 * Request builder class for operations supported on the {@link RebateAndDeductionsParameters} entity.
 */
export class RebateAndDeductionsParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RebateAndDeductionsParameters<T>, T> {
  /**
   * Returns a request builder for querying all `RebateAndDeductionsParameters` entities.
   * @returns A request builder for creating requests to retrieve all `RebateAndDeductionsParameters` entities.
   */
  getAll(): GetAllRequestBuilder<RebateAndDeductionsParameters<T>, T> {
    return new GetAllRequestBuilder<RebateAndDeductionsParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RebateAndDeductionsParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RebateAndDeductionsParameters`.
   */
  create(
    entity: RebateAndDeductionsParameters<T>
  ): CreateRequestBuilder<RebateAndDeductionsParameters<T>, T> {
    return new CreateRequestBuilder<RebateAndDeductionsParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RebateAndDeductionsParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link RebateAndDeductionsParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `RebateAndDeductionsParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RebateAndDeductionsParameters<T>, T> {
    return new GetByKeyRequestBuilder<RebateAndDeductionsParameters<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RebateAndDeductionsParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RebateAndDeductionsParameters`.
   */
  update(
    entity: RebateAndDeductionsParameters<T>
  ): UpdateRequestBuilder<RebateAndDeductionsParameters<T>, T> {
    return new UpdateRequestBuilder<RebateAndDeductionsParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsParameters`.
   * @param dataAreaId Key property. See {@link RebateAndDeductionsParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsParameters`.
   */
  delete(
    dataAreaId: string
  ): DeleteRequestBuilder<RebateAndDeductionsParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsParameters` by taking the entity as a parameter.
   */
  delete(
    entity: RebateAndDeductionsParameters<T>
  ): DeleteRequestBuilder<RebateAndDeductionsParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<RebateAndDeductionsParameters<T>, T> {
    return new DeleteRequestBuilder<RebateAndDeductionsParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RebateAndDeductionsParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
