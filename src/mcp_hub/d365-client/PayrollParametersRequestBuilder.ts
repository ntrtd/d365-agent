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
import { PayrollParameters } from './PayrollParameters';

/**
 * Request builder class for operations supported on the {@link PayrollParameters} entity.
 */
export class PayrollParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollParameters<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollParameters` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollParameters` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollParameters<T>, T> {
    return new GetAllRequestBuilder<PayrollParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayrollParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollParameters`.
   */
  create(
    entity: PayrollParameters<T>
  ): CreateRequestBuilder<PayrollParameters<T>, T> {
    return new CreateRequestBuilder<PayrollParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayrollParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `PayrollParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayrollParameters<T>, T> {
    return new GetByKeyRequestBuilder<PayrollParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollParameters`.
   */
  update(
    entity: PayrollParameters<T>
  ): UpdateRequestBuilder<PayrollParameters<T>, T> {
    return new UpdateRequestBuilder<PayrollParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollParameters`.
   * @param dataAreaId Key property. See {@link PayrollParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<PayrollParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollParameters` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollParameters<T>
  ): DeleteRequestBuilder<PayrollParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<PayrollParameters<T>, T> {
    return new DeleteRequestBuilder<PayrollParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayrollParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
