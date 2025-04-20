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
import { TnvedCodes } from './TnvedCodes';

/**
 * Request builder class for operations supported on the {@link TnvedCodes} entity.
 */
export class TnvedCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TnvedCodes<T>, T> {
  /**
   * Returns a request builder for querying all `TnvedCodes` entities.
   * @returns A request builder for creating requests to retrieve all `TnvedCodes` entities.
   */
  getAll(): GetAllRequestBuilder<TnvedCodes<T>, T> {
    return new GetAllRequestBuilder<TnvedCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TnvedCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TnvedCodes`.
   */
  create(entity: TnvedCodes<T>): CreateRequestBuilder<TnvedCodes<T>, T> {
    return new CreateRequestBuilder<TnvedCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TnvedCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link TnvedCodes.dataAreaId}.
   * @param tnVedCode Key property. See {@link TnvedCodes.tnVedCode}.
   * @returns A request builder for creating requests to retrieve one `TnvedCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tnVedCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TnvedCodes<T>, T> {
    return new GetByKeyRequestBuilder<TnvedCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TnVedCode: tnVedCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TnvedCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TnvedCodes`.
   */
  update(entity: TnvedCodes<T>): UpdateRequestBuilder<TnvedCodes<T>, T> {
    return new UpdateRequestBuilder<TnvedCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TnvedCodes`.
   * @param dataAreaId Key property. See {@link TnvedCodes.dataAreaId}.
   * @param tnVedCode Key property. See {@link TnvedCodes.tnVedCode}.
   * @returns A request builder for creating requests that delete an entity of type `TnvedCodes`.
   */
  delete(
    dataAreaId: string,
    tnVedCode: string
  ): DeleteRequestBuilder<TnvedCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TnvedCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TnvedCodes` by taking the entity as a parameter.
   */
  delete(entity: TnvedCodes<T>): DeleteRequestBuilder<TnvedCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tnVedCode?: string
  ): DeleteRequestBuilder<TnvedCodes<T>, T> {
    return new DeleteRequestBuilder<TnvedCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TnvedCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TnVedCode: tnVedCode!
          }
    );
  }
}
