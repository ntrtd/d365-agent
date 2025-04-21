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
import { LeavePlansV2 } from './LeavePlansV2';

/**
 * Request builder class for operations supported on the {@link LeavePlansV2} entity.
 */
export class LeavePlansV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeavePlansV2<T>, T> {
  /**
   * Returns a request builder for querying all `LeavePlansV2` entities.
   * @returns A request builder for creating requests to retrieve all `LeavePlansV2` entities.
   */
  getAll(): GetAllRequestBuilder<LeavePlansV2<T>, T> {
    return new GetAllRequestBuilder<LeavePlansV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeavePlansV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeavePlansV2`.
   */
  create(entity: LeavePlansV2<T>): CreateRequestBuilder<LeavePlansV2<T>, T> {
    return new CreateRequestBuilder<LeavePlansV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LeavePlansV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeavePlansV2.dataAreaId}.
   * @param name Key property. See {@link LeavePlansV2.name}.
   * @returns A request builder for creating requests to retrieve one `LeavePlansV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeavePlansV2<T>, T> {
    return new GetByKeyRequestBuilder<LeavePlansV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeavePlansV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeavePlansV2`.
   */
  update(entity: LeavePlansV2<T>): UpdateRequestBuilder<LeavePlansV2<T>, T> {
    return new UpdateRequestBuilder<LeavePlansV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LeavePlansV2`.
   * @param dataAreaId Key property. See {@link LeavePlansV2.dataAreaId}.
   * @param name Key property. See {@link LeavePlansV2.name}.
   * @returns A request builder for creating requests that delete an entity of type `LeavePlansV2`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<LeavePlansV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeavePlansV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeavePlansV2` by taking the entity as a parameter.
   */
  delete(entity: LeavePlansV2<T>): DeleteRequestBuilder<LeavePlansV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<LeavePlansV2<T>, T> {
    return new DeleteRequestBuilder<LeavePlansV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeavePlansV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
