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
import { McrSourceCodes } from './McrSourceCodes';

/**
 * Request builder class for operations supported on the {@link McrSourceCodes} entity.
 */
export class McrSourceCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<McrSourceCodes<T>, T> {
  /**
   * Returns a request builder for querying all `McrSourceCodes` entities.
   * @returns A request builder for creating requests to retrieve all `McrSourceCodes` entities.
   */
  getAll(): GetAllRequestBuilder<McrSourceCodes<T>, T> {
    return new GetAllRequestBuilder<McrSourceCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `McrSourceCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `McrSourceCodes`.
   */
  create(
    entity: McrSourceCodes<T>
  ): CreateRequestBuilder<McrSourceCodes<T>, T> {
    return new CreateRequestBuilder<McrSourceCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `McrSourceCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link McrSourceCodes.dataAreaId}.
   * @param sourceId Key property. See {@link McrSourceCodes.sourceId}.
   * @returns A request builder for creating requests to retrieve one `McrSourceCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<McrSourceCodes<T>, T> {
    return new GetByKeyRequestBuilder<McrSourceCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceId: sourceId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `McrSourceCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `McrSourceCodes`.
   */
  update(
    entity: McrSourceCodes<T>
  ): UpdateRequestBuilder<McrSourceCodes<T>, T> {
    return new UpdateRequestBuilder<McrSourceCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `McrSourceCodes`.
   * @param dataAreaId Key property. See {@link McrSourceCodes.dataAreaId}.
   * @param sourceId Key property. See {@link McrSourceCodes.sourceId}.
   * @returns A request builder for creating requests that delete an entity of type `McrSourceCodes`.
   */
  delete(
    dataAreaId: string,
    sourceId: string
  ): DeleteRequestBuilder<McrSourceCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `McrSourceCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `McrSourceCodes` by taking the entity as a parameter.
   */
  delete(entity: McrSourceCodes<T>): DeleteRequestBuilder<McrSourceCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceId?: string
  ): DeleteRequestBuilder<McrSourceCodes<T>, T> {
    return new DeleteRequestBuilder<McrSourceCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof McrSourceCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceId: sourceId!
          }
    );
  }
}
