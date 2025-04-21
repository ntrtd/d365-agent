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
import { RetailTmpProductMedias } from './RetailTmpProductMedias';

/**
 * Request builder class for operations supported on the {@link RetailTmpProductMedias} entity.
 */
export class RetailTmpProductMediasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTmpProductMedias<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTmpProductMedias` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTmpProductMedias` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTmpProductMedias<T>, T> {
    return new GetAllRequestBuilder<RetailTmpProductMedias<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTmpProductMedias` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTmpProductMedias`.
   */
  create(
    entity: RetailTmpProductMedias<T>
  ): CreateRequestBuilder<RetailTmpProductMedias<T>, T> {
    return new CreateRequestBuilder<RetailTmpProductMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTmpProductMedias` entity based on its keys.
   * @param product Key property. See {@link RetailTmpProductMedias.product}.
   * @param fileName Key property. See {@link RetailTmpProductMedias.fileName}.
   * @returns A request builder for creating requests to retrieve one `RetailTmpProductMedias` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    fileName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTmpProductMedias<T>, T> {
    return new GetByKeyRequestBuilder<RetailTmpProductMedias<T>, T>(
      this.entityApi,
      {
        Product: product,
        FileName: fileName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTmpProductMedias`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTmpProductMedias`.
   */
  update(
    entity: RetailTmpProductMedias<T>
  ): UpdateRequestBuilder<RetailTmpProductMedias<T>, T> {
    return new UpdateRequestBuilder<RetailTmpProductMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTmpProductMedias`.
   * @param product Key property. See {@link RetailTmpProductMedias.product}.
   * @param fileName Key property. See {@link RetailTmpProductMedias.fileName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpProductMedias`.
   */
  delete(
    product: string,
    fileName: string
  ): DeleteRequestBuilder<RetailTmpProductMedias<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTmpProductMedias`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpProductMedias` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTmpProductMedias<T>
  ): DeleteRequestBuilder<RetailTmpProductMedias<T>, T>;
  delete(
    productOrEntity: any,
    fileName?: string
  ): DeleteRequestBuilder<RetailTmpProductMedias<T>, T> {
    return new DeleteRequestBuilder<RetailTmpProductMedias<T>, T>(
      this.entityApi,
      productOrEntity instanceof RetailTmpProductMedias
        ? productOrEntity
        : {
            Product: productOrEntity!,
            FileName: fileName!
          }
    );
  }
}
