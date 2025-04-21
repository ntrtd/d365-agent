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
import { FactureOperationCodes } from './FactureOperationCodes';

/**
 * Request builder class for operations supported on the {@link FactureOperationCodes} entity.
 */
export class FactureOperationCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FactureOperationCodes<T>, T> {
  /**
   * Returns a request builder for querying all `FactureOperationCodes` entities.
   * @returns A request builder for creating requests to retrieve all `FactureOperationCodes` entities.
   */
  getAll(): GetAllRequestBuilder<FactureOperationCodes<T>, T> {
    return new GetAllRequestBuilder<FactureOperationCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FactureOperationCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FactureOperationCodes`.
   */
  create(
    entity: FactureOperationCodes<T>
  ): CreateRequestBuilder<FactureOperationCodes<T>, T> {
    return new CreateRequestBuilder<FactureOperationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FactureOperationCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link FactureOperationCodes.dataAreaId}.
   * @param code Key property. See {@link FactureOperationCodes.code}.
   * @returns A request builder for creating requests to retrieve one `FactureOperationCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FactureOperationCodes<T>, T> {
    return new GetByKeyRequestBuilder<FactureOperationCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FactureOperationCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FactureOperationCodes`.
   */
  update(
    entity: FactureOperationCodes<T>
  ): UpdateRequestBuilder<FactureOperationCodes<T>, T> {
    return new UpdateRequestBuilder<FactureOperationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FactureOperationCodes`.
   * @param dataAreaId Key property. See {@link FactureOperationCodes.dataAreaId}.
   * @param code Key property. See {@link FactureOperationCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `FactureOperationCodes`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<FactureOperationCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FactureOperationCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FactureOperationCodes` by taking the entity as a parameter.
   */
  delete(
    entity: FactureOperationCodes<T>
  ): DeleteRequestBuilder<FactureOperationCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<FactureOperationCodes<T>, T> {
    return new DeleteRequestBuilder<FactureOperationCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FactureOperationCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
