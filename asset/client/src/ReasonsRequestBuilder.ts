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
import { Reasons } from './Reasons';

/**
 * Request builder class for operations supported on the {@link Reasons} entity.
 */
export class ReasonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Reasons<T>, T> {
  /**
   * Returns a request builder for querying all `Reasons` entities.
   * @returns A request builder for creating requests to retrieve all `Reasons` entities.
   */
  getAll(): GetAllRequestBuilder<Reasons<T>, T> {
    return new GetAllRequestBuilder<Reasons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Reasons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Reasons`.
   */
  create(entity: Reasons<T>): CreateRequestBuilder<Reasons<T>, T> {
    return new CreateRequestBuilder<Reasons<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Reasons` entity based on its keys.
   * @param dataAreaId Key property. See {@link Reasons.dataAreaId}.
   * @param reasonCode Key property. See {@link Reasons.reasonCode}.
   * @returns A request builder for creating requests to retrieve one `Reasons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Reasons<T>, T> {
    return new GetByKeyRequestBuilder<Reasons<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ReasonCode: reasonCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Reasons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Reasons`.
   */
  update(entity: Reasons<T>): UpdateRequestBuilder<Reasons<T>, T> {
    return new UpdateRequestBuilder<Reasons<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Reasons`.
   * @param dataAreaId Key property. See {@link Reasons.dataAreaId}.
   * @param reasonCode Key property. See {@link Reasons.reasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `Reasons`.
   */
  delete(
    dataAreaId: string,
    reasonCode: string
  ): DeleteRequestBuilder<Reasons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Reasons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Reasons` by taking the entity as a parameter.
   */
  delete(entity: Reasons<T>): DeleteRequestBuilder<Reasons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCode?: string
  ): DeleteRequestBuilder<Reasons<T>, T> {
    return new DeleteRequestBuilder<Reasons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Reasons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCode: reasonCode!
          }
    );
  }
}
