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
import { TransportationTenders } from './TransportationTenders';

/**
 * Request builder class for operations supported on the {@link TransportationTenders} entity.
 */
export class TransportationTendersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransportationTenders<T>, T> {
  /**
   * Returns a request builder for querying all `TransportationTenders` entities.
   * @returns A request builder for creating requests to retrieve all `TransportationTenders` entities.
   */
  getAll(): GetAllRequestBuilder<TransportationTenders<T>, T> {
    return new GetAllRequestBuilder<TransportationTenders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransportationTenders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransportationTenders`.
   */
  create(
    entity: TransportationTenders<T>
  ): CreateRequestBuilder<TransportationTenders<T>, T> {
    return new CreateRequestBuilder<TransportationTenders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransportationTenders` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransportationTenders.dataAreaId}.
   * @param tenderId Key property. See {@link TransportationTenders.tenderId}.
   * @returns A request builder for creating requests to retrieve one `TransportationTenders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tenderId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransportationTenders<T>, T> {
    return new GetByKeyRequestBuilder<TransportationTenders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TenderId: tenderId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransportationTenders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransportationTenders`.
   */
  update(
    entity: TransportationTenders<T>
  ): UpdateRequestBuilder<TransportationTenders<T>, T> {
    return new UpdateRequestBuilder<TransportationTenders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransportationTenders`.
   * @param dataAreaId Key property. See {@link TransportationTenders.dataAreaId}.
   * @param tenderId Key property. See {@link TransportationTenders.tenderId}.
   * @returns A request builder for creating requests that delete an entity of type `TransportationTenders`.
   */
  delete(
    dataAreaId: string,
    tenderId: string
  ): DeleteRequestBuilder<TransportationTenders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransportationTenders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransportationTenders` by taking the entity as a parameter.
   */
  delete(
    entity: TransportationTenders<T>
  ): DeleteRequestBuilder<TransportationTenders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tenderId?: string
  ): DeleteRequestBuilder<TransportationTenders<T>, T> {
    return new DeleteRequestBuilder<TransportationTenders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransportationTenders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TenderId: tenderId!
          }
    );
  }
}
