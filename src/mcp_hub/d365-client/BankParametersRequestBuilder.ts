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
import { BankParameters } from './BankParameters';

/**
 * Request builder class for operations supported on the {@link BankParameters} entity.
 */
export class BankParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankParameters<T>, T> {
  /**
   * Returns a request builder for querying all `BankParameters` entities.
   * @returns A request builder for creating requests to retrieve all `BankParameters` entities.
   */
  getAll(): GetAllRequestBuilder<BankParameters<T>, T> {
    return new GetAllRequestBuilder<BankParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankParameters`.
   */
  create(
    entity: BankParameters<T>
  ): CreateRequestBuilder<BankParameters<T>, T> {
    return new CreateRequestBuilder<BankParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `BankParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankParameters<T>, T> {
    return new GetByKeyRequestBuilder<BankParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BankParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankParameters`.
   */
  update(
    entity: BankParameters<T>
  ): UpdateRequestBuilder<BankParameters<T>, T> {
    return new UpdateRequestBuilder<BankParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankParameters`.
   * @param dataAreaId Key property. See {@link BankParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `BankParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<BankParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankParameters` by taking the entity as a parameter.
   */
  delete(entity: BankParameters<T>): DeleteRequestBuilder<BankParameters<T>, T>;
  delete(dataAreaIdOrEntity: any): DeleteRequestBuilder<BankParameters<T>, T> {
    return new DeleteRequestBuilder<BankParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
