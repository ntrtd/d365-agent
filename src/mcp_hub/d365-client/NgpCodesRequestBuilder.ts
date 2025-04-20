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
import { NgpCodes } from './NgpCodes';

/**
 * Request builder class for operations supported on the {@link NgpCodes} entity.
 */
export class NgpCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NgpCodes<T>, T> {
  /**
   * Returns a request builder for querying all `NgpCodes` entities.
   * @returns A request builder for creating requests to retrieve all `NgpCodes` entities.
   */
  getAll(): GetAllRequestBuilder<NgpCodes<T>, T> {
    return new GetAllRequestBuilder<NgpCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NgpCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NgpCodes`.
   */
  create(entity: NgpCodes<T>): CreateRequestBuilder<NgpCodes<T>, T> {
    return new CreateRequestBuilder<NgpCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `NgpCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link NgpCodes.dataAreaId}.
   * @param ngp Key property. See {@link NgpCodes.ngp}.
   * @returns A request builder for creating requests to retrieve one `NgpCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ngp: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<NgpCodes<T>, T> {
    return new GetByKeyRequestBuilder<NgpCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      NGP: ngp
    });
  }

  /**
   * Returns a request builder for updating an entity of type `NgpCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NgpCodes`.
   */
  update(entity: NgpCodes<T>): UpdateRequestBuilder<NgpCodes<T>, T> {
    return new UpdateRequestBuilder<NgpCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `NgpCodes`.
   * @param dataAreaId Key property. See {@link NgpCodes.dataAreaId}.
   * @param ngp Key property. See {@link NgpCodes.ngp}.
   * @returns A request builder for creating requests that delete an entity of type `NgpCodes`.
   */
  delete(dataAreaId: string, ngp: number): DeleteRequestBuilder<NgpCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NgpCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NgpCodes` by taking the entity as a parameter.
   */
  delete(entity: NgpCodes<T>): DeleteRequestBuilder<NgpCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ngp?: number
  ): DeleteRequestBuilder<NgpCodes<T>, T> {
    return new DeleteRequestBuilder<NgpCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof NgpCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            NGP: ngp!
          }
    );
  }
}
