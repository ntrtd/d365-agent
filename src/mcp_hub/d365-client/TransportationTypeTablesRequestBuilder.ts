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
import { TransportationTypeTables } from './TransportationTypeTables';

/**
 * Request builder class for operations supported on the {@link TransportationTypeTables} entity.
 */
export class TransportationTypeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransportationTypeTables<T>, T> {
  /**
   * Returns a request builder for querying all `TransportationTypeTables` entities.
   * @returns A request builder for creating requests to retrieve all `TransportationTypeTables` entities.
   */
  getAll(): GetAllRequestBuilder<TransportationTypeTables<T>, T> {
    return new GetAllRequestBuilder<TransportationTypeTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransportationTypeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransportationTypeTables`.
   */
  create(
    entity: TransportationTypeTables<T>
  ): CreateRequestBuilder<TransportationTypeTables<T>, T> {
    return new CreateRequestBuilder<TransportationTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransportationTypeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransportationTypeTables.dataAreaId}.
   * @param type Key property. See {@link TransportationTypeTables.type}.
   * @returns A request builder for creating requests to retrieve one `TransportationTypeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransportationTypeTables<T>, T> {
    return new GetByKeyRequestBuilder<TransportationTypeTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Type: type
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransportationTypeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransportationTypeTables`.
   */
  update(
    entity: TransportationTypeTables<T>
  ): UpdateRequestBuilder<TransportationTypeTables<T>, T> {
    return new UpdateRequestBuilder<TransportationTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransportationTypeTables`.
   * @param dataAreaId Key property. See {@link TransportationTypeTables.dataAreaId}.
   * @param type Key property. See {@link TransportationTypeTables.type}.
   * @returns A request builder for creating requests that delete an entity of type `TransportationTypeTables`.
   */
  delete(
    dataAreaId: string,
    type: string
  ): DeleteRequestBuilder<TransportationTypeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransportationTypeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransportationTypeTables` by taking the entity as a parameter.
   */
  delete(
    entity: TransportationTypeTables<T>
  ): DeleteRequestBuilder<TransportationTypeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    type?: string
  ): DeleteRequestBuilder<TransportationTypeTables<T>, T> {
    return new DeleteRequestBuilder<TransportationTypeTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransportationTypeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Type: type!
          }
    );
  }
}
