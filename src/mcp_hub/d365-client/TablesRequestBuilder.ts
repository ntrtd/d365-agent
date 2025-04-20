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
import { Tables } from './Tables';

/**
 * Request builder class for operations supported on the {@link Tables} entity.
 */
export class TablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Tables<T>, T> {
  /**
   * Returns a request builder for querying all `Tables` entities.
   * @returns A request builder for creating requests to retrieve all `Tables` entities.
   */
  getAll(): GetAllRequestBuilder<Tables<T>, T> {
    return new GetAllRequestBuilder<Tables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Tables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Tables`.
   */
  create(entity: Tables<T>): CreateRequestBuilder<Tables<T>, T> {
    return new CreateRequestBuilder<Tables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Tables` entity based on its keys.
   * @param dataAreaId Key property. See {@link Tables.dataAreaId}.
   * @param deferralId Key property. See {@link Tables.deferralId}.
   * @returns A request builder for creating requests to retrieve one `Tables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    deferralId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Tables<T>, T> {
    return new GetByKeyRequestBuilder<Tables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DeferralId: deferralId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Tables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Tables`.
   */
  update(entity: Tables<T>): UpdateRequestBuilder<Tables<T>, T> {
    return new UpdateRequestBuilder<Tables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Tables`.
   * @param dataAreaId Key property. See {@link Tables.dataAreaId}.
   * @param deferralId Key property. See {@link Tables.deferralId}.
   * @returns A request builder for creating requests that delete an entity of type `Tables`.
   */
  delete(
    dataAreaId: string,
    deferralId: string
  ): DeleteRequestBuilder<Tables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Tables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Tables` by taking the entity as a parameter.
   */
  delete(entity: Tables<T>): DeleteRequestBuilder<Tables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    deferralId?: string
  ): DeleteRequestBuilder<Tables<T>, T> {
    return new DeleteRequestBuilder<Tables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Tables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DeferralId: deferralId!
          }
    );
  }
}
