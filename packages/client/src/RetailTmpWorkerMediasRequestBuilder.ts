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
import { RetailTmpWorkerMedias } from './RetailTmpWorkerMedias';

/**
 * Request builder class for operations supported on the {@link RetailTmpWorkerMedias} entity.
 */
export class RetailTmpWorkerMediasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTmpWorkerMedias<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTmpWorkerMedias` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTmpWorkerMedias` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTmpWorkerMedias<T>, T> {
    return new GetAllRequestBuilder<RetailTmpWorkerMedias<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTmpWorkerMedias` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTmpWorkerMedias`.
   */
  create(
    entity: RetailTmpWorkerMedias<T>
  ): CreateRequestBuilder<RetailTmpWorkerMedias<T>, T> {
    return new CreateRequestBuilder<RetailTmpWorkerMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTmpWorkerMedias` entity based on its keys.
   * @param worker Key property. See {@link RetailTmpWorkerMedias.worker}.
   * @param fileName Key property. See {@link RetailTmpWorkerMedias.fileName}.
   * @returns A request builder for creating requests to retrieve one `RetailTmpWorkerMedias` entity based on its keys.
   */
  getByKey(
    worker: DeserializedType<T, 'Edm.String'>,
    fileName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTmpWorkerMedias<T>, T> {
    return new GetByKeyRequestBuilder<RetailTmpWorkerMedias<T>, T>(
      this.entityApi,
      {
        Worker: worker,
        FileName: fileName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTmpWorkerMedias`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTmpWorkerMedias`.
   */
  update(
    entity: RetailTmpWorkerMedias<T>
  ): UpdateRequestBuilder<RetailTmpWorkerMedias<T>, T> {
    return new UpdateRequestBuilder<RetailTmpWorkerMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTmpWorkerMedias`.
   * @param worker Key property. See {@link RetailTmpWorkerMedias.worker}.
   * @param fileName Key property. See {@link RetailTmpWorkerMedias.fileName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpWorkerMedias`.
   */
  delete(
    worker: string,
    fileName: string
  ): DeleteRequestBuilder<RetailTmpWorkerMedias<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTmpWorkerMedias`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpWorkerMedias` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTmpWorkerMedias<T>
  ): DeleteRequestBuilder<RetailTmpWorkerMedias<T>, T>;
  delete(
    workerOrEntity: any,
    fileName?: string
  ): DeleteRequestBuilder<RetailTmpWorkerMedias<T>, T> {
    return new DeleteRequestBuilder<RetailTmpWorkerMedias<T>, T>(
      this.entityApi,
      workerOrEntity instanceof RetailTmpWorkerMedias
        ? workerOrEntity
        : {
            Worker: workerOrEntity!,
            FileName: fileName!
          }
    );
  }
}
