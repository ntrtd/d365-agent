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
import { TaxObDeclarations } from './TaxObDeclarations';

/**
 * Request builder class for operations supported on the {@link TaxObDeclarations} entity.
 */
export class TaxObDeclarationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxObDeclarations<T>, T> {
  /**
   * Returns a request builder for querying all `TaxObDeclarations` entities.
   * @returns A request builder for creating requests to retrieve all `TaxObDeclarations` entities.
   */
  getAll(): GetAllRequestBuilder<TaxObDeclarations<T>, T> {
    return new GetAllRequestBuilder<TaxObDeclarations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxObDeclarations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxObDeclarations`.
   */
  create(
    entity: TaxObDeclarations<T>
  ): CreateRequestBuilder<TaxObDeclarations<T>, T> {
    return new CreateRequestBuilder<TaxObDeclarations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxObDeclarations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxObDeclarations.dataAreaId}.
   * @param id Key property. See {@link TaxObDeclarations.id}.
   * @returns A request builder for creating requests to retrieve one `TaxObDeclarations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxObDeclarations<T>, T> {
    return new GetByKeyRequestBuilder<TaxObDeclarations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxObDeclarations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxObDeclarations`.
   */
  update(
    entity: TaxObDeclarations<T>
  ): UpdateRequestBuilder<TaxObDeclarations<T>, T> {
    return new UpdateRequestBuilder<TaxObDeclarations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxObDeclarations`.
   * @param dataAreaId Key property. See {@link TaxObDeclarations.dataAreaId}.
   * @param id Key property. See {@link TaxObDeclarations.id}.
   * @returns A request builder for creating requests that delete an entity of type `TaxObDeclarations`.
   */
  delete(
    dataAreaId: string,
    id: string
  ): DeleteRequestBuilder<TaxObDeclarations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxObDeclarations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxObDeclarations` by taking the entity as a parameter.
   */
  delete(
    entity: TaxObDeclarations<T>
  ): DeleteRequestBuilder<TaxObDeclarations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: string
  ): DeleteRequestBuilder<TaxObDeclarations<T>, T> {
    return new DeleteRequestBuilder<TaxObDeclarations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxObDeclarations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ID: id!
          }
    );
  }
}
