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
import { TaxIcpDeclarations } from './TaxIcpDeclarations';

/**
 * Request builder class for operations supported on the {@link TaxIcpDeclarations} entity.
 */
export class TaxIcpDeclarationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxIcpDeclarations<T>, T> {
  /**
   * Returns a request builder for querying all `TaxIcpDeclarations` entities.
   * @returns A request builder for creating requests to retrieve all `TaxIcpDeclarations` entities.
   */
  getAll(): GetAllRequestBuilder<TaxIcpDeclarations<T>, T> {
    return new GetAllRequestBuilder<TaxIcpDeclarations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxIcpDeclarations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxIcpDeclarations`.
   */
  create(
    entity: TaxIcpDeclarations<T>
  ): CreateRequestBuilder<TaxIcpDeclarations<T>, T> {
    return new CreateRequestBuilder<TaxIcpDeclarations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxIcpDeclarations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxIcpDeclarations.dataAreaId}.
   * @param id Key property. See {@link TaxIcpDeclarations.id}.
   * @returns A request builder for creating requests to retrieve one `TaxIcpDeclarations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxIcpDeclarations<T>, T> {
    return new GetByKeyRequestBuilder<TaxIcpDeclarations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ID: id
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxIcpDeclarations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxIcpDeclarations`.
   */
  update(
    entity: TaxIcpDeclarations<T>
  ): UpdateRequestBuilder<TaxIcpDeclarations<T>, T> {
    return new UpdateRequestBuilder<TaxIcpDeclarations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxIcpDeclarations`.
   * @param dataAreaId Key property. See {@link TaxIcpDeclarations.dataAreaId}.
   * @param id Key property. See {@link TaxIcpDeclarations.id}.
   * @returns A request builder for creating requests that delete an entity of type `TaxIcpDeclarations`.
   */
  delete(
    dataAreaId: string,
    id: string
  ): DeleteRequestBuilder<TaxIcpDeclarations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxIcpDeclarations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxIcpDeclarations` by taking the entity as a parameter.
   */
  delete(
    entity: TaxIcpDeclarations<T>
  ): DeleteRequestBuilder<TaxIcpDeclarations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: string
  ): DeleteRequestBuilder<TaxIcpDeclarations<T>, T> {
    return new DeleteRequestBuilder<TaxIcpDeclarations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxIcpDeclarations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ID: id!
          }
    );
  }
}
