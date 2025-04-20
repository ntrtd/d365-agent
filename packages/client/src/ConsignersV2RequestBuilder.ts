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
import { ConsignersV2 } from './ConsignersV2';

/**
 * Request builder class for operations supported on the {@link ConsignersV2} entity.
 */
export class ConsignersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConsignersV2<T>, T> {
  /**
   * Returns a request builder for querying all `ConsignersV2` entities.
   * @returns A request builder for creating requests to retrieve all `ConsignersV2` entities.
   */
  getAll(): GetAllRequestBuilder<ConsignersV2<T>, T> {
    return new GetAllRequestBuilder<ConsignersV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConsignersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConsignersV2`.
   */
  create(entity: ConsignersV2<T>): CreateRequestBuilder<ConsignersV2<T>, T> {
    return new CreateRequestBuilder<ConsignersV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ConsignersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConsignersV2.dataAreaId}.
   * @param internalAccountNumber Key property. See {@link ConsignersV2.internalAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `ConsignersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    internalAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConsignersV2<T>, T> {
    return new GetByKeyRequestBuilder<ConsignersV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InternalAccountNumber: internalAccountNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ConsignersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConsignersV2`.
   */
  update(entity: ConsignersV2<T>): UpdateRequestBuilder<ConsignersV2<T>, T> {
    return new UpdateRequestBuilder<ConsignersV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ConsignersV2`.
   * @param dataAreaId Key property. See {@link ConsignersV2.dataAreaId}.
   * @param internalAccountNumber Key property. See {@link ConsignersV2.internalAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ConsignersV2`.
   */
  delete(
    dataAreaId: string,
    internalAccountNumber: string
  ): DeleteRequestBuilder<ConsignersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConsignersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConsignersV2` by taking the entity as a parameter.
   */
  delete(entity: ConsignersV2<T>): DeleteRequestBuilder<ConsignersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    internalAccountNumber?: string
  ): DeleteRequestBuilder<ConsignersV2<T>, T> {
    return new DeleteRequestBuilder<ConsignersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConsignersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InternalAccountNumber: internalAccountNumber!
          }
    );
  }
}
