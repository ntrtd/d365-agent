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
import { RetailDlvModes } from './RetailDlvModes';

/**
 * Request builder class for operations supported on the {@link RetailDlvModes} entity.
 */
export class RetailDlvModesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDlvModes<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDlvModes` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDlvModes` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDlvModes<T>, T> {
    return new GetAllRequestBuilder<RetailDlvModes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailDlvModes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDlvModes`.
   */
  create(
    entity: RetailDlvModes<T>
  ): CreateRequestBuilder<RetailDlvModes<T>, T> {
    return new CreateRequestBuilder<RetailDlvModes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDlvModes` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDlvModes.dataAreaId}.
   * @param code Key property. See {@link RetailDlvModes.code}.
   * @returns A request builder for creating requests to retrieve one `RetailDlvModes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailDlvModes<T>, T> {
    return new GetByKeyRequestBuilder<RetailDlvModes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDlvModes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDlvModes`.
   */
  update(
    entity: RetailDlvModes<T>
  ): UpdateRequestBuilder<RetailDlvModes<T>, T> {
    return new UpdateRequestBuilder<RetailDlvModes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDlvModes`.
   * @param dataAreaId Key property. See {@link RetailDlvModes.dataAreaId}.
   * @param code Key property. See {@link RetailDlvModes.code}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDlvModes`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<RetailDlvModes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDlvModes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDlvModes` by taking the entity as a parameter.
   */
  delete(entity: RetailDlvModes<T>): DeleteRequestBuilder<RetailDlvModes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<RetailDlvModes<T>, T> {
    return new DeleteRequestBuilder<RetailDlvModes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDlvModes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
