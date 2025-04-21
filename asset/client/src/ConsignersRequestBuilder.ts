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
import { Consigners } from './Consigners';

/**
 * Request builder class for operations supported on the {@link Consigners} entity.
 */
export class ConsignersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Consigners<T>, T> {
  /**
   * Returns a request builder for querying all `Consigners` entities.
   * @returns A request builder for creating requests to retrieve all `Consigners` entities.
   */
  getAll(): GetAllRequestBuilder<Consigners<T>, T> {
    return new GetAllRequestBuilder<Consigners<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Consigners` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Consigners`.
   */
  create(entity: Consigners<T>): CreateRequestBuilder<Consigners<T>, T> {
    return new CreateRequestBuilder<Consigners<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Consigners` entity based on its keys.
   * @param dataAreaId Key property. See {@link Consigners.dataAreaId}.
   * @param accountNumber Key property. See {@link Consigners.accountNumber}.
   * @returns A request builder for creating requests to retrieve one `Consigners` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Consigners<T>, T> {
    return new GetByKeyRequestBuilder<Consigners<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountNumber: accountNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Consigners`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Consigners`.
   */
  update(entity: Consigners<T>): UpdateRequestBuilder<Consigners<T>, T> {
    return new UpdateRequestBuilder<Consigners<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Consigners`.
   * @param dataAreaId Key property. See {@link Consigners.dataAreaId}.
   * @param accountNumber Key property. See {@link Consigners.accountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Consigners`.
   */
  delete(
    dataAreaId: string,
    accountNumber: string
  ): DeleteRequestBuilder<Consigners<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Consigners`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Consigners` by taking the entity as a parameter.
   */
  delete(entity: Consigners<T>): DeleteRequestBuilder<Consigners<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountNumber?: string
  ): DeleteRequestBuilder<Consigners<T>, T> {
    return new DeleteRequestBuilder<Consigners<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Consigners
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountNumber: accountNumber!
          }
    );
  }
}
