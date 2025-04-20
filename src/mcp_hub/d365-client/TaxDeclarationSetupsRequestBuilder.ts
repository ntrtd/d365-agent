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
import { TaxDeclarationSetups } from './TaxDeclarationSetups';

/**
 * Request builder class for operations supported on the {@link TaxDeclarationSetups} entity.
 */
export class TaxDeclarationSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxDeclarationSetups<T>, T> {
  /**
   * Returns a request builder for querying all `TaxDeclarationSetups` entities.
   * @returns A request builder for creating requests to retrieve all `TaxDeclarationSetups` entities.
   */
  getAll(): GetAllRequestBuilder<TaxDeclarationSetups<T>, T> {
    return new GetAllRequestBuilder<TaxDeclarationSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxDeclarationSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxDeclarationSetups`.
   */
  create(
    entity: TaxDeclarationSetups<T>
  ): CreateRequestBuilder<TaxDeclarationSetups<T>, T> {
    return new CreateRequestBuilder<TaxDeclarationSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxDeclarationSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxDeclarationSetups.dataAreaId}.
   * @param id Key property. See {@link TaxDeclarationSetups.id}.
   * @returns A request builder for creating requests to retrieve one `TaxDeclarationSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<TaxDeclarationSetups<T>, T> {
    return new GetByKeyRequestBuilder<TaxDeclarationSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ID: id
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxDeclarationSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxDeclarationSetups`.
   */
  update(
    entity: TaxDeclarationSetups<T>
  ): UpdateRequestBuilder<TaxDeclarationSetups<T>, T> {
    return new UpdateRequestBuilder<TaxDeclarationSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxDeclarationSetups`.
   * @param dataAreaId Key property. See {@link TaxDeclarationSetups.dataAreaId}.
   * @param id Key property. See {@link TaxDeclarationSetups.id}.
   * @returns A request builder for creating requests that delete an entity of type `TaxDeclarationSetups`.
   */
  delete(
    dataAreaId: string,
    id: number
  ): DeleteRequestBuilder<TaxDeclarationSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxDeclarationSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxDeclarationSetups` by taking the entity as a parameter.
   */
  delete(
    entity: TaxDeclarationSetups<T>
  ): DeleteRequestBuilder<TaxDeclarationSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: number
  ): DeleteRequestBuilder<TaxDeclarationSetups<T>, T> {
    return new DeleteRequestBuilder<TaxDeclarationSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxDeclarationSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ID: id!
          }
    );
  }
}
