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
import { WebServices } from './WebServices';

/**
 * Request builder class for operations supported on the {@link WebServices} entity.
 */
export class WebServicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WebServices<T>, T> {
  /**
   * Returns a request builder for querying all `WebServices` entities.
   * @returns A request builder for creating requests to retrieve all `WebServices` entities.
   */
  getAll(): GetAllRequestBuilder<WebServices<T>, T> {
    return new GetAllRequestBuilder<WebServices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WebServices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WebServices`.
   */
  create(entity: WebServices<T>): CreateRequestBuilder<WebServices<T>, T> {
    return new CreateRequestBuilder<WebServices<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WebServices` entity based on its keys.
   * @param dataAreaId Key property. See {@link WebServices.dataAreaId}.
   * @param webService Key property. See {@link WebServices.webService}.
   * @returns A request builder for creating requests to retrieve one `WebServices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    webService: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WebServices<T>, T> {
    return new GetByKeyRequestBuilder<WebServices<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      WebService: webService
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WebServices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WebServices`.
   */
  update(entity: WebServices<T>): UpdateRequestBuilder<WebServices<T>, T> {
    return new UpdateRequestBuilder<WebServices<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WebServices`.
   * @param dataAreaId Key property. See {@link WebServices.dataAreaId}.
   * @param webService Key property. See {@link WebServices.webService}.
   * @returns A request builder for creating requests that delete an entity of type `WebServices`.
   */
  delete(
    dataAreaId: string,
    webService: string
  ): DeleteRequestBuilder<WebServices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WebServices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WebServices` by taking the entity as a parameter.
   */
  delete(entity: WebServices<T>): DeleteRequestBuilder<WebServices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    webService?: string
  ): DeleteRequestBuilder<WebServices<T>, T> {
    return new DeleteRequestBuilder<WebServices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WebServices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WebService: webService!
          }
    );
  }
}
