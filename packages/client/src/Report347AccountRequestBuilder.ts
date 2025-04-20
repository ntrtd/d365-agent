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
import { Report347Account } from './Report347Account';

/**
 * Request builder class for operations supported on the {@link Report347Account} entity.
 */
export class Report347AccountRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Report347Account<T>, T> {
  /**
   * Returns a request builder for querying all `Report347Account` entities.
   * @returns A request builder for creating requests to retrieve all `Report347Account` entities.
   */
  getAll(): GetAllRequestBuilder<Report347Account<T>, T> {
    return new GetAllRequestBuilder<Report347Account<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Report347Account` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Report347Account`.
   */
  create(
    entity: Report347Account<T>
  ): CreateRequestBuilder<Report347Account<T>, T> {
    return new CreateRequestBuilder<Report347Account<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Report347Account` entity based on its keys.
   * @param dataAreaId Key property. See {@link Report347Account.dataAreaId}.
   * @param mainAccount Key property. See {@link Report347Account.mainAccount}.
   * @returns A request builder for creating requests to retrieve one `Report347Account` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    mainAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Report347Account<T>, T> {
    return new GetByKeyRequestBuilder<Report347Account<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MainAccount: mainAccount
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Report347Account`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Report347Account`.
   */
  update(
    entity: Report347Account<T>
  ): UpdateRequestBuilder<Report347Account<T>, T> {
    return new UpdateRequestBuilder<Report347Account<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Report347Account`.
   * @param dataAreaId Key property. See {@link Report347Account.dataAreaId}.
   * @param mainAccount Key property. See {@link Report347Account.mainAccount}.
   * @returns A request builder for creating requests that delete an entity of type `Report347Account`.
   */
  delete(
    dataAreaId: string,
    mainAccount: string
  ): DeleteRequestBuilder<Report347Account<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Report347Account`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Report347Account` by taking the entity as a parameter.
   */
  delete(
    entity: Report347Account<T>
  ): DeleteRequestBuilder<Report347Account<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    mainAccount?: string
  ): DeleteRequestBuilder<Report347Account<T>, T> {
    return new DeleteRequestBuilder<Report347Account<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Report347Account
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MainAccount: mainAccount!
          }
    );
  }
}
