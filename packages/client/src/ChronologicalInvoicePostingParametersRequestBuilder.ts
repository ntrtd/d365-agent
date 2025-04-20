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
import { ChronologicalInvoicePostingParameters } from './ChronologicalInvoicePostingParameters';

/**
 * Request builder class for operations supported on the {@link ChronologicalInvoicePostingParameters} entity.
 */
export class ChronologicalInvoicePostingParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ChronologicalInvoicePostingParameters<T>, T> {
  /**
   * Returns a request builder for querying all `ChronologicalInvoicePostingParameters` entities.
   * @returns A request builder for creating requests to retrieve all `ChronologicalInvoicePostingParameters` entities.
   */
  getAll(): GetAllRequestBuilder<ChronologicalInvoicePostingParameters<T>, T> {
    return new GetAllRequestBuilder<
      ChronologicalInvoicePostingParameters<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ChronologicalInvoicePostingParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChronologicalInvoicePostingParameters`.
   */
  create(
    entity: ChronologicalInvoicePostingParameters<T>
  ): CreateRequestBuilder<ChronologicalInvoicePostingParameters<T>, T> {
    return new CreateRequestBuilder<
      ChronologicalInvoicePostingParameters<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ChronologicalInvoicePostingParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link ChronologicalInvoicePostingParameters.dataAreaId}.
   * @param key Key property. See {@link ChronologicalInvoicePostingParameters.key}.
   * @returns A request builder for creating requests to retrieve one `ChronologicalInvoicePostingParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ChronologicalInvoicePostingParameters<T>, T> {
    return new GetByKeyRequestBuilder<
      ChronologicalInvoicePostingParameters<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Key: key
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ChronologicalInvoicePostingParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChronologicalInvoicePostingParameters`.
   */
  update(
    entity: ChronologicalInvoicePostingParameters<T>
  ): UpdateRequestBuilder<ChronologicalInvoicePostingParameters<T>, T> {
    return new UpdateRequestBuilder<
      ChronologicalInvoicePostingParameters<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ChronologicalInvoicePostingParameters`.
   * @param dataAreaId Key property. See {@link ChronologicalInvoicePostingParameters.dataAreaId}.
   * @param key Key property. See {@link ChronologicalInvoicePostingParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `ChronologicalInvoicePostingParameters`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<ChronologicalInvoicePostingParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ChronologicalInvoicePostingParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChronologicalInvoicePostingParameters` by taking the entity as a parameter.
   */
  delete(
    entity: ChronologicalInvoicePostingParameters<T>
  ): DeleteRequestBuilder<ChronologicalInvoicePostingParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<ChronologicalInvoicePostingParameters<T>, T> {
    return new DeleteRequestBuilder<
      ChronologicalInvoicePostingParameters<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ChronologicalInvoicePostingParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}
