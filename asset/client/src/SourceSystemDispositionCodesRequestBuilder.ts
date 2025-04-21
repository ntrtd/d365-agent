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
import { SourceSystemDispositionCodes } from './SourceSystemDispositionCodes';

/**
 * Request builder class for operations supported on the {@link SourceSystemDispositionCodes} entity.
 */
export class SourceSystemDispositionCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SourceSystemDispositionCodes<T>, T> {
  /**
   * Returns a request builder for querying all `SourceSystemDispositionCodes` entities.
   * @returns A request builder for creating requests to retrieve all `SourceSystemDispositionCodes` entities.
   */
  getAll(): GetAllRequestBuilder<SourceSystemDispositionCodes<T>, T> {
    return new GetAllRequestBuilder<SourceSystemDispositionCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SourceSystemDispositionCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceSystemDispositionCodes`.
   */
  create(
    entity: SourceSystemDispositionCodes<T>
  ): CreateRequestBuilder<SourceSystemDispositionCodes<T>, T> {
    return new CreateRequestBuilder<SourceSystemDispositionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SourceSystemDispositionCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link SourceSystemDispositionCodes.dataAreaId}.
   * @param sourceSystemId Key property. See {@link SourceSystemDispositionCodes.sourceSystemId}.
   * @param dispositionCode Key property. See {@link SourceSystemDispositionCodes.dispositionCode}.
   * @returns A request builder for creating requests to retrieve one `SourceSystemDispositionCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>,
    dispositionCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SourceSystemDispositionCodes<T>, T> {
    return new GetByKeyRequestBuilder<SourceSystemDispositionCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceSystemId: sourceSystemId,
        DispositionCode: dispositionCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SourceSystemDispositionCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceSystemDispositionCodes`.
   */
  update(
    entity: SourceSystemDispositionCodes<T>
  ): UpdateRequestBuilder<SourceSystemDispositionCodes<T>, T> {
    return new UpdateRequestBuilder<SourceSystemDispositionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceSystemDispositionCodes`.
   * @param dataAreaId Key property. See {@link SourceSystemDispositionCodes.dataAreaId}.
   * @param sourceSystemId Key property. See {@link SourceSystemDispositionCodes.sourceSystemId}.
   * @param dispositionCode Key property. See {@link SourceSystemDispositionCodes.dispositionCode}.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemDispositionCodes`.
   */
  delete(
    dataAreaId: string,
    sourceSystemId: string,
    dispositionCode: string
  ): DeleteRequestBuilder<SourceSystemDispositionCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SourceSystemDispositionCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemDispositionCodes` by taking the entity as a parameter.
   */
  delete(
    entity: SourceSystemDispositionCodes<T>
  ): DeleteRequestBuilder<SourceSystemDispositionCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceSystemId?: string,
    dispositionCode?: string
  ): DeleteRequestBuilder<SourceSystemDispositionCodes<T>, T> {
    return new DeleteRequestBuilder<SourceSystemDispositionCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SourceSystemDispositionCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceSystemId: sourceSystemId!,
            DispositionCode: dispositionCode!
          }
    );
  }
}
