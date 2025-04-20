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
import { ReturnDispositionCodes } from './ReturnDispositionCodes';

/**
 * Request builder class for operations supported on the {@link ReturnDispositionCodes} entity.
 */
export class ReturnDispositionCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnDispositionCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnDispositionCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnDispositionCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnDispositionCodes<T>, T> {
    return new GetAllRequestBuilder<ReturnDispositionCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReturnDispositionCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnDispositionCodes`.
   */
  create(
    entity: ReturnDispositionCodes<T>
  ): CreateRequestBuilder<ReturnDispositionCodes<T>, T> {
    return new CreateRequestBuilder<ReturnDispositionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnDispositionCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnDispositionCodes.dataAreaId}.
   * @param dispositionCode Key property. See {@link ReturnDispositionCodes.dispositionCode}.
   * @returns A request builder for creating requests to retrieve one `ReturnDispositionCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dispositionCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReturnDispositionCodes<T>, T> {
    return new GetByKeyRequestBuilder<ReturnDispositionCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DispositionCode: dispositionCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnDispositionCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnDispositionCodes`.
   */
  update(
    entity: ReturnDispositionCodes<T>
  ): UpdateRequestBuilder<ReturnDispositionCodes<T>, T> {
    return new UpdateRequestBuilder<ReturnDispositionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnDispositionCodes`.
   * @param dataAreaId Key property. See {@link ReturnDispositionCodes.dataAreaId}.
   * @param dispositionCode Key property. See {@link ReturnDispositionCodes.dispositionCode}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnDispositionCodes`.
   */
  delete(
    dataAreaId: string,
    dispositionCode: string
  ): DeleteRequestBuilder<ReturnDispositionCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnDispositionCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnDispositionCodes` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnDispositionCodes<T>
  ): DeleteRequestBuilder<ReturnDispositionCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dispositionCode?: string
  ): DeleteRequestBuilder<ReturnDispositionCodes<T>, T> {
    return new DeleteRequestBuilder<ReturnDispositionCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnDispositionCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DispositionCode: dispositionCode!
          }
    );
  }
}
