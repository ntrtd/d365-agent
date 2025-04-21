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
import { Applications } from './Applications';

/**
 * Request builder class for operations supported on the {@link Applications} entity.
 */
export class ApplicationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Applications<T>, T> {
  /**
   * Returns a request builder for querying all `Applications` entities.
   * @returns A request builder for creating requests to retrieve all `Applications` entities.
   */
  getAll(): GetAllRequestBuilder<Applications<T>, T> {
    return new GetAllRequestBuilder<Applications<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Applications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Applications`.
   */
  create(entity: Applications<T>): CreateRequestBuilder<Applications<T>, T> {
    return new CreateRequestBuilder<Applications<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Applications` entity based on its keys.
   * @param dataAreaId Key property. See {@link Applications.dataAreaId}.
   * @param application Key property. See {@link Applications.application}.
   * @returns A request builder for creating requests to retrieve one `Applications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    application: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Applications<T>, T> {
    return new GetByKeyRequestBuilder<Applications<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Application: application
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Applications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Applications`.
   */
  update(entity: Applications<T>): UpdateRequestBuilder<Applications<T>, T> {
    return new UpdateRequestBuilder<Applications<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Applications`.
   * @param dataAreaId Key property. See {@link Applications.dataAreaId}.
   * @param application Key property. See {@link Applications.application}.
   * @returns A request builder for creating requests that delete an entity of type `Applications`.
   */
  delete(
    dataAreaId: string,
    application: string
  ): DeleteRequestBuilder<Applications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Applications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Applications` by taking the entity as a parameter.
   */
  delete(entity: Applications<T>): DeleteRequestBuilder<Applications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    application?: string
  ): DeleteRequestBuilder<Applications<T>, T> {
    return new DeleteRequestBuilder<Applications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Applications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Application: application!
          }
    );
  }
}
